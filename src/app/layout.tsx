// https://stackoverflow.com/questions/64032166/tailwindcss-not-working-with-next-js-what-is-wrong-with-the-configuration

import React from "react";
import "../globals.css";
import Header from "./header";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import BackgroundWrapper from "@/components/BackgroundWrapper";
import { ShaderBackground } from "./background";


export const metadata = {
  title: 'Evan Mickelson',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="max-width-full overflow-y-scroll overflow-x-hidden font-sans">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/nord.min.css"
        />

        <script
          crossOrigin=""
          src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"
        // src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"
        ></script>
        {/* import "../../node_modules/bootstrap/dist/css/bootstrap.css" */}
        {/* <meta name="google-site-verification" content="10YJ_yX5uIsmfm4Iho-B_MhhSl9CAVPg1wDEb8qVEK4" /> */}
        {/* <Analytics mode="production"/> */}
      </head>
      <body>
        <section className="flex flex-col min-h-screen ">
          {/* Include shared UI here e.g. a header or sidebar */}
          <nav className="bg-white top-0 left-0">
            <Header></Header>
          </nav>




          <div className="relative">
            {/* <BackgroundWrapper background={<div/>}> */}
            <React.StrictMode>
              <div className="h-ful">
                {children}
              </div>

            </React.StrictMode>

          </div>
          {/* </BackgroundWrapper> */}

        </section>
        {/* <div className="h-12 bg-black mt-auto"/> */}
        {/* <Analytics mode={'production'} />; */}
        {/* <SpeedInsights /> */}
      </body>


    </html>
  )
}
