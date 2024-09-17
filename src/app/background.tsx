
'use client'

import React from  'react';
import { render} from  'react-dom';
import ShadertoyReact from 'shadertoy-react';

var fs = `
void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
  vec2 uv = fragCoord.xy/iResolution.xy;
  //vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));
  fragColor = vec4((cos(iTime) + 1.0) /2.0, 1.0);
}`

export const ShaderBackground = () =>
  ( <div className='fixed p-0 m-0 top-0 left-0 w-full h-screen' style={{zIndex: -1}}>
    <ShadertoyReact fs={fs}/>
    </div>
  );