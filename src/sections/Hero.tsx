"use client";
import { Spotlight } from "../components/spotlight";
import RotatingText from "../components/rotatingText";

const Hero = () => {
  return (
    <div className="h-[37rem] w-full flex items-center relative">
      <Spotlight />
      
      {/* This is the main content container. It correctly handles the overall padding and alignment. */}
      <div className="px-7 py-4 md:px-18 max-w-7xl relative z-10 w-full text-left flex flex-col">
        
        {/* Main Headline */}
        <h1 className="py-3 text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-none">
          Hi, I'm Pravin &<br />This is my Portfolio.
        </h1>

        {/* Caption */}
        <p className="font-semibold text-base text-neutral-300 max-w-2xl">
          I tell computers what to do, and they listen most of the time!
        </p>

        {/* Rotating Text */}
        <RotatingText className="text-4xl md:text-6xl font-semibold bg-clip-text"
          texts={['Code.', 'Create.', 'Caffeinate.']}
          mainClassName="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-0.5"
          transition={{ type: "spring", damping: 40, stiffness: 400 }}
          rotationInterval={2500} 
        />
      </div>
    </div>
  );
};

export default Hero;