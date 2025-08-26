import React from 'react'
import { BackgroundRippleEffect } from '../components/ui/backgroundRippleEffect';

const Hero = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Welcome to my portfolio
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          A webpage where innovation bash with code.
        </p>
      </div>
    </div>
  );
}

export default Hero