---
title: "Restir"
description: "Implementing the"
date: "2026-04-05"
lastUpdated: "2026-04-05"
img: "/projects/quakeclonecover.png"
show: true
---
This is an introduction to the **Spatiotemporal Reservoir Resampling**, or **ReSTIR**, algorithm. For this, we will only talk about direct lighting, but it has applications for generalized lighting resampling. 

The purpose of this blog post is a high level overview of what the algorithm is, a brief look through of the math, and a pointer to many resources to those who want to learn more. In short, its what I wish I could have seen when I first attempted to implement this algorithm a couple of months before writing this. I have not found similar resources online, the hope is it will help with initial intuitions rather than the depths of the maths.

This assumes you already know how pathtracing with direct lighting works, a topic I'd like to cover in general on this blog eventually. If you don't, [here is a resource for that], it is a topic on its own (that is very well covered!) and needs to be known and digested before this. 


## Background: what problem are we trying to solve?

Realtime pathtracing has long been a goal in graphics. Rasterization as a common technique arguably exists and is prominent mainly as a performance compromise and not because they produce better results. Its dominance has not been threatened until very recently since GPUs have become strong enough for pathtracing. 

Direct lighting is a key part of producing pathtraced images with little noise, and a large barrier to realtime applications of pathtracing is that there can be hundreds, thousands or even millions of lights in production realtime applications like AAA games. 

It works wonders in simplistic scenes with few lights. Look at these cornell boxes, one uses direct light and one uses only indirect lighting for light samples. 

![No Direct Light](/blog/no_dl.png)
![Direct Light](/blog/direct_light.png)

(Note, this a bit wrong, because I just removed direct lighting from the second image and didn't change the rest of the pathtracer which ignores direct lighting for general bounces, however the idea is there, image much noiser without direct light)

This is great for addressing the randomness of monte carlo estimation. However, what if we add more lights outside of the main part of the scene.

[PHOTO OF CORNELL WITH LIGHTS OUTSIDE]

Similarly to how random bouncing without direct lighting tends to produce noisy images because it hardly ever hits lights, randomly sampling lights for direct lighting with many lights tends to produce noisy images because it hardly ever samples the relevant lights. 

In offline applications, this can mostly be ignored, because with enough samples it shouldn't make a difference in the final image. However, in realtime, this is fatal, as direct lighting is the key way to denoise pathtracing, and we don't have time to take the supersamples required to address it. 

In short, we want realtime pathtracing, with as little noise as possible, all within large scenes with many lights. Using traditional methods, this will not occur because using a naive uniform pdf for light samples we will very rarely get direct lighting samples relevant to the image we want to produce. 

// One key insight is that if your camera was perfectly still, we could reuse direct lighting samples from previous frames

However, what if we could smartly pick from a number of direct lighting samples? Or if we could reuse direct lighting samples from previous frames for the current frame we are rendering?

## Overview

In short what we are doing is storing a buffer full of "reservoirs" per pixel. Then, when we want to calculate direct light, instead of casting a ray to the world, we use a precomputed, more optimized sample selection. 

That is the goal of **ReSTIR**, and it relies on the combination of two methods
- Resampled importance sampling
- Reservoir sampling 

For the sake of the next few paragraphs, assume that when I say "direct lighting sample," each sample is a position on a specific light, and with that and a position, we can calculate radiance. Our final sample is average radiance. 

#### Resampled Importance Sampling

Starting with resampled importance sampling. In short, what this is about is generating a list of candidate light samples from a "sub-optimal" sampling method (I.E. uniformly distributed like we have currently) and using that to create a better sampling method. 

In other words, we get a bunch of bad direct lighting samples (random points on random lights), and based on their radiance for a given point, we create a new culmulative distribution function to sample from when we do our actual lighting calculations. 

Here is a paraphrased version of the psuedocode from the original paper, specifically, this is Algorithm 1

```

def RIS(numberOfCandidatesToGenerate):
    proposals = {}
    weights = {}
    sumOfWeights = 0

    for i in range(numberOfCandidatesToGenerate):
        candidateDirectLight = generateDirectLightingSample() # this is direct lighting code, it is complicated but from general pathtracing so out of scope 
        proposals.add(candidateDirectLight)
        proposalWeight = getWeight(candidateDirectLightingSample) # dependent on direct lighting pdf and radiance
        sumOfWeights += proposalWeight
        weights.add(proposalWeight)

    cdf = generateCDFFromWeights(proposals, weights) # in theory, this would create a CDF where higher weighted proposals would more likely be selected. 
    sample = cdf.sample()

    return sample, sumOfWeights

```

The math of this will be lightly covered later. 
If we went to our direct lighting code in a pathtracer, and instead used this algorithm, we would already see better results as we would be picking from a  list of samples weighted by their contribution to the current pixel. However there are some major issues. 

I'd like to divert your attention to the "cdf" part of the algorithm. Because in theory, the most direct approach to sample for this would be to have some array of pairs, with the sample and its weights. You know the total weight. So to sample you'd pick a random number from the total weight, then while loop through or binary search the array the array until the culmulative weights add up to the random number, then you've successfully found your sample. A standard weighted sampling technique. 

This, of course, is slow. But more importantly, if we carried samples between frames, we would very quickly require memory use that GPUs, or even CPUs, cannot support. 
For instance, say the first frame we get 32 samples, then the next we keep those but add 32 additional samples, and keep on going, in 1 second at 60 fps we would be storing 1920 samples. We would need a dynamic, ever growing data structure. We can't simply cull low probability samples, because that could cause bias or inaccuracy, or even bigger issues depending on the scene. Already a massive problem if we did this on the CPU, but its exhasturbated on the GPU. 

This leads us to our very essential second part, what if we could store the information of these samples in constant space while keeping everything roughly mathematically equivalent? 

#### Reservoir Sampling

Now, we will introduce the concept of a "Reservoir." 
Here is what it looks like

```
class Reservoir:
    sampleOutput = vec3(0) # again, assuming we want position on a light
    sumOfWeights = 0
    numberOfSamples = 0
    
    def update(candidate, candidateWeight):
        sumOfWeights += candidateWeight
        numberOfSamples += 1
        if random_range(0, 1) < (candidateWeight / sumOfWeights):
            sampleOutput = candidate

```

This is a probabalistic data structure for storing and updating samples. Reservoirs are a general computer science concept for random sampling which we are using here for direct light samples. 

So now instead of storing all the data and using a CDF, we can instead generate a bunch of candidate samples and put them in a Reservoir. Each candidate will then have a chance of being the output sample, with more heavily weighted candidates being more likely. This achieves similar results to what we had before, but with significantly less, and more importantly, constant, storage cost. 

```
def ReservoirRIS(numberOfCandidates):
    reservoir = Reservoir()

    for i in range(numberOfCandidatesToGenerate):
        candidateDirectLight = generateDirectLightingSample()  
        proposalWeight = getWeight(candidateDirectLightingSample) # dependent on direct lighting pdf and radiance
        reservoir.update(candidateDirectLight, proposalWeight)
    return reservoir
```

Then in our actual pathtracer code, we get the reservoir associated with our pixel and simply do ```reservoir.sampleOutput``` to get the position on the light that we want. 

So now where we are is we have a huge buffer of Reservoirs, with one Reservoir per pixel. In a pass before we do our pathtracing code, we generate a bunch of light candidate samples (32 is roughly the ballpark the authors use), updatethe reservoirs accordingly, then when we run the actual pathtracer, we will have much improved direct lighting samples which will already get us improvements. 


The beauty of ReSTIR does not end here, now we want to reuse data *between* both pixels and frames, so that not only do we get those 32 samples, but the information from hundreds, or thousands of lighting samples from previous frames and other pixels. 

The first thing to note is that we can treat other Reservoirs like they are samples, where their output sample is the candidate sample, and their weight is their weight. 

(GO INTO THIS MORE)


// W = averagePDFPerSample!!! Important

#### Spatial Reuse

Conceptually, spatial reuse is, between the RIS and the pathtracing step, simply randomly taking some adjacent pixel's reservoirs and using it to update the current pixel's reservoir. Thats all. 

Here's a little photo. 
![Spatial resampling](/blog/spatial_sample.jpg)

#### Temporal Reuse

With this, you need the previous frame's buffer, and the previous frame's camera transform. 
Conceptually, all you're doing is taking the previous frame's buffer and doing some math to make sure the pixel you're now trying to get data for aligns with the right pixel from the previous frame's reservoirs. 

Here's a photo and some explanation as it's a little more complicated. 

![Spatial resampling](/blog/temporal_sample.jpg)


In short, with our current camera, we have a ray going to a point in space. This is the point where we are generating our candidate direct lighting samples from. The second ray is backprojected from that point to the previous camera's location. With that, we find the previous frame's screen space coordinate that corresponds to the previous frame's corresponding direct lighting reservoir. As you can see, it hits the same point we are generating our candidates and trying to sample direct lighting from. Thus we can reuse that pixel's reservoir as a sample for our current pixel's reservoir. And that is temporal reuse. 


So, every frame we are generating some number of candidate samples, then we are storing those in a reservoir, which we are then additionally updating with neighboring pixel's reservoirs (spatial resuse) the previous frame's reservoirs (temporal reuse). This, overtime, gets us the equivalent


These four things, using Reservoirs to do multiple importance sampling with temporal and spatial data, is ReSTIR. That is the high level idea of the algorithm. Not nearly as complicated as it first seems!


## Math

In pathtracing, we are looking to estimate an integral representing to total radiance at a point, for every point. We do that using a monte carlo estimation technique, a probabalistic method. I.E. we are probabilistically estimating the rendering equation which is:


$$ L_o(x, \omega_o, \lambda, t) = L_e(x, \omega_o, \lambda, t) + L_r(x, \omega_o, \lambda, t)$$
$$ L_r(x, \omega_o, \lambda, t) = \int_\Omega f_r(x, \omega_i, \omega_o, \lambda, t) L_i(x, \omega_i, \lambda, t) (\omega_i \cdot \bold{n}) d\omega_i $$


( [Godspeed wikipedia!](https://en.wikipedia.org/wiki/Rendering_equation) You are such a resource. )
That should be review if you are already familiar with pathtracing, so we won't go into what every term means in depth, but as review.


- $\int_\Omega$ means we are integrating around the hemisphere of a point. 
- $\omega_i$ is the incoming angle, $\omega_o$ is an outgoing angle.
- $L_o$ is outgoing radiance, $L_e$ is emission, $L_r$ is incoming radiance
- $f_r$ is the brdf, **n** is the normal

We cannot calulate this with current computing methods, as there are infinite angles and its recusively defined ($L_i$ is defined by outgoing light at every angle). So we would need to calculate the universe to do it accurately.

Thus we use *Monte Carlo Methods*!

It can be proven that using any PDF, as the number of samples goes to infinity, will be equivalent to the integral. So we can optimize the rate of convergence by picking a good PDF to sample to estimate the integral. 

## Implementation Notes


[I implemented a version of this algorithm for my advanced graphics class](https://github.com/evan-mick/2240-restir). **It is imperfect**. Me and my group believe there are some issues with how we calculated W, and how we did temporal reuse, so it is a biased version of the algorithm. I would not use it as a baseline reference, but I am mentioning it as my starting point for pointing out how some implementation details need to occur. And I do think it would be helpful as a reference for the software engineering of it for an OpenGL implementation. 

For OpenGL, this meant having a framebuffer(s) of textures with information about Reservoirs from previous frames. Each frame the framebuffer used would be flipped with the next one. 

Every render, we would run 4 shader programs. First, one to do RIS and temporal reuse. It would write the resulting reservoirs to a framebuffer. In the next step, we read from those framebuffers, and do spatial reuse, then flip the buffers. Finally, in the third shader, we do our real pathtracing step (there is also an additional one for tonemapping, but that doesn't have to do with ReSTIR). 


One thing that is unclear in the original paper is exactly what direct light sampling is, and also what exactly a final sample should be. 

Here is the image Cornell Box with outside lights we produced with our implementation. Of note, it is brighter. This may in part be because of bias in our implementation, but we believe it is mainly because the original one is inherently darker because it is continually trying to sample direct lights that are obscured by the box outside the main scene. If we had more time, and also introduce proper backpropagating temporal reuseinstead of our more naive approach.

![Restir](/blog/biased_restir.png)

### Other resources


Here is the original ReSTIR paper, highly recommend giving it a thorough read first
https://cs.dartmouth.edu/~wjarosz/publications/bitterli20spatiotemporal.html

This blog post goes *in depth* on all the math, incredible if you're into that stuff
https://agraphicsguynotes.com/posts/understanding_the_math_behind_restir_di/


And here are a couple papers that extend off of it, they use the same techniques to allow for faster global illumination. 

https://research.nvidia.com/publication/2021-06_restir-gi-path-resampling-real-time-path-tracing

https://research.nvidia.com/labs/rtr/publication/zhang2024area/
