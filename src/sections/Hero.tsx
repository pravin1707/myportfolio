"use client";
// import { Spotlight } from "../components/spotlight";
import RotatingText from "../components/rotatingText";
import { Spotlight } from "../components/spotlight";

import { rotatingTexts } from "../constants";

export const Hero = () => {
  return (
    <div id="home" className="hero-layout scroll-mt-nav">
      <Spotlight />
      <Spotlight />

      {/* This is the main content container. It correctly handles the overall padding and alignment. */}
      <div className="hero-content">
        {/* Main Headline */}
        <h1 className="hero-headline">
          <span>Hi, I'm Pravin &</span>
          <br />
          <span>This is my Portfolio.</span>
        </h1>

        {/* Caption */}
        <p className="hero-caption">
          I tell computers what to do, and they listen most of the time!
        </p>

        {/* Rotating Text */}
        <RotatingText
          className="rotatingtext"
          texts={rotatingTexts}
          // mainClassName="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-0.5"
          transition={{ type: "spring", damping: 50, stiffness: 400 }}
          rotationInterval={2800}
        />
      </div>
    </div>
  );
};