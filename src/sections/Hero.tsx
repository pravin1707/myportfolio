"use client";
import { Spotlight } from "../components/spotlight";
import RotatingText from "../components/rotatingText";

const Hero = () => {
return (
    <div className="h-[35rem] w-full flex items-center relative">
      <Spotlight />
      <div className="px-7 py-4 md:px-10 max-w-7xl relative z-10 w-full text-left">
        <h1 className="px-12 text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight flex flex-col">
          Hi, I'm Pravin &<br />This is my Portfolio.
          <RotatingText
            texts={['Code.', 'Create.', 'Caffeinate.', 'Cool!']}
            mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-0.5"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000} />
        </h1>
        <p className= "px-12 font-normal text-base text-neutral-300 max-w-2xl">
          I tell computers what to do, and they listen most of the time!
        </p>
      </div>
    </div>
  );
};

export default Hero;