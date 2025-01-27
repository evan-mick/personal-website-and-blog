---
title: "Explorations in DSP: Wave Files"
description: "Learning about digital signal processing, starting with parsing a wave file in C++"
date: "2025-01-27"
lastUpdated: "2025-01-27"
img: "/blog/waveblog.jpeg"
show: true
---

**[Git link](https://github.com/evan-mick/signal-processing)**

# Explorations in Digital Signal Processing: Wave Files 

This blog post is dedicated to my explorations into audio programmingand digital signal processing, I am using it as an excuse to put my learnings somewhere. It is a live document, and will update as I learn more. But first, starting from scratch from wave files.

## Wave files


Wave files are a subset of the RIFF file specification made in the 90s by Microsoft. 
Each Wave file has a variable length header consisting of many "Chunks" specifing metadata about the main data payload.

Here are the main sources I looked at while making this
[Resource of understanding WAVE specification](https://mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html)
[Example implementation of WAVE Parser](https://github.com/deg3x/WAVParser/tree/master)

I choose C++ to make this parser as I like using C++. I felt it was a good fit for a parser, and I am trying to learn more about it standard library. 

At the beginning of any Wave file is "RIFF" text in big endian. It is then followed by the size of the remaining file, and then the "WAVE" file header. 

Every WAVE file can have a variable number of "Chunks" which are specified by having a 4 byte ID, then sizing information, then a data payload. The ID dictates how the chunk should be parsed. Every WAVE file can have many headers, but each one *needs* to have a "fmt " chunk, which specifies things like the sample rate and stereo information of the file, and a "data" chunk which contains the audio's "Pulse Signal Modulation" data. An minimum viable product wave parser must be able to get the necessary data from those two chunks, and also be able to at the very least **skip over** the other types of chunks to find and read the data and fmt ones. 

For this project, for simplicity, I decided to only care about those two chunks as a baseline. If I were to continue with this project, some work would need to be done to refactor the parser to let go of that assumption. In particular, my Wave file header right now only has space for those two chunks, and I would instead need to store a dynamic list to have a variable number of chunks stored. 

Here is my wave file header struct, my Wave file class has it as a private member variable

```
struct WaveHeader {
   uint32_t id;
   uint32_t file_size;
   uint32_t file_format;
   Chunk fmt;
   Chunk fact;
   Chunk data;
};
```


```
Wave(std::string filepath) {
      std::vector<char> buffer;
      std::ifstream file{ filepath, std::ios::binary };
      
      if (!file.is_open())
         throw std::runtime_error("Bad file path");

      if (file.bad())
         throw std::runtime_error("Bad file");


      // Base RIFF header parsing
      // Must be RIFF, size of file, WAVE, then real data and chunks
      file.seekg(0);
      file.read(reinterpret_cast<char*>(&(m_header.id)), 4);

      if (m_header.id != RIFF_ID_BYTES)
         throw std::runtime_error("Invalid wave file, no RIFF signature");

      uint32_t wave_id;
      file.read(reinterpret_cast<char*>(&(m_header.file_size)), 4);
      file.read(reinterpret_cast<char*>(&(wave_id)), 4);

      if (wave_id != WAVE_ID_BYTES)
         throw std::runtime_error("Invalid wave file, no WAVE signature");

      bool valid_parse = ParseChunks(file);
      if (!valid_parse)
         throw std::runtime_error("Invalid wave file format, no data and/or fmt chunk");

   }
```
Of note: I mentioned earlier about the endianness of the IDs, notably, WAVE_ID_BYTES is in little endian. This works because I believe when the data is read into the id in the read call it swaps automatically, so the comparisons work out.  

The rest of the function takes place in "ParseChunks," where I dynamically go fr
m chunk to chunk 

```
   bool ParseChunks(std::ifstream& file) {
      auto recognized_chunk_ids = std::unordered_set<uint32_t> { DATA_ID_BYTES, FMT_ID_BYTES, FACT_ID_BYTES };

	// If these aren't found, its not a valid wave file
  bool found_data_chunk = false; 
  bool found_fmt_chunk = false; 

  while (!(file.eof() || found_data_chunk)) {
	 uint32_t chunk_id;
	 uint32_t size;
	 Chunk* chunk = nullptr;
	 file.read(reinterpret_cast<char*>(&chunk_id), 4);
	 file.read(reinterpret_cast<char*>(&size), 4);

	 // If not recognized, we just move on
	 if (!recognized_chunk_ids.count(chunk_id)) {
		file.seekg(size, std::ios::cur);
		continue;
	 }
	 
	 // Data is special case, because we want to end process once we've found it
	 if (chunk_id == DATA_ID_BYTES) {

		if (!found_fmt_chunk)
		   return false; 

		int bytesPerSample = (m_fmt.bitsPerSample/8);
		m_data = std::vector<float>(size/bytesPerSample);
		m_header.data.id = chunk_id;
		m_header.data.size = size;

		std::cout << "found data " << std::to_string(m_data.size()) << std::endl; 

		while (!file.eof()) {
		   float dat;
		   if (file.read(reinterpret_cast<char*>(&dat), bytesPerSample)){
			  m_data.emplace_back(dat);
		   }
		}
		found_data_chunk = true;
		break;
	 }

	 // Base case, copy over data, run operations, then set chunks data
	 auto found_data = std::vector<uint8_t>(size);
	 if (!file.read(reinterpret_cast<char*>(found_data.data()), size)){
		// Read data into vector
		std::cerr << "error reading file" << std::endl; 
		return false; 
	 }

	 switch (chunk_id) {
		case FACT_ID_BYTES:
		   chunk = &(m_header.fact);
		   std::cout << "found fax" << std::endl; 
		break;
		case FMT_ID_BYTES:
		   chunk = &(m_header.fmt);
		   std::cout << "found fmt" << std::endl; 
		   std::copy(found_data.begin(), found_data.end(), reinterpret_cast<uint8_t*>(&m_fmt));
		   found_fmt_chunk = true;
		break;
		default:
		   // We didn't recognize chunk, this shouldn't happen given its in the list
		   assert(false);
		   continue;
		break;
	 };
	 chunk->id = chunk_id;
	 chunk->size = size;
	 chunk->data = std::move(found_data);
  }

  return found_data_chunk && found_fmt_chunk;
   }



```


Returning to the payload itself, once again, the data chunk contains pulse signal modulation data. To those not familiar, you may have seen audio represented like this:

![Picture of Wave file representation](/blog/wavefile.png)

What this is a visualization of is a graph of each individual sample point, and in fact, if you zoom really far in, you can see a visual of each individual sample. 


![Picture of closeup Wave file representation](/blog/wavefile_close.png)

When your computer plays back audio, what it does is sends that information to your speaker, headphones, etc. and said speaker has a motor connected to a diaphragm which pulsates based on the data in your audio file. Your audio file contains thousands (usually 44100 or 48000) of samples per second, usually with 24 bits of information per sample (though 16 is often used, and on older computers it would be 8 or fewer bits) meaning in each given 1/48000th of a second there are 2^24 possible positions for the motor to register for an average audio file. The pulsations from your speaker moves the air in front of it, creating sound through the air, which you then hear as it moves to your ear. 

Wave files can actually have many factors more samples per second, its not uncommon to see files with 96000 (!) samples per second. However, for any audio meant for humans, this is rarely used. In fact, I make music and never export to anything higher than 48000hz. Why? Because human hearing is capped around 22khz. The vast majority of the population cannot physically hear sound higher than that frequency. As it turns out, due to something called the "Nyquist Limit," pulse signal modulation data can only express sound at a frequency half that of the sample rate. So, an audio file with 48000hz as its sample rate can only express frequencies up to 24000hz, just out of reach for human hearing, and thus there is no real point to have audio at higher frequencies if its for human ears (it isn't too hard to imagine scientific or alternate reasons to have higher sample rates though considering animals can hear at different ranges and a lot more goes on in the world at higher frequencies). The reasoning for this is just out of the scope of this blog post, but it has to do with sine waves and information that will be talked about later. 

That is it for now, next I will explore the discrete fourier transform and equalizers. 
