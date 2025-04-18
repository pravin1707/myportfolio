import { words } from '../constants/index'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, // initial y position 
        opacity: 0 // initial opacity
      },
      { y: 0, // final y position
        opacity: 1, // final opacity
        stagger: 0.2, // cascading effect
        duration: 1, 
        ease: "power2.inOut" 
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: HERO CONTENT */}
        <header className="flex flex-col justify-center md-w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping 
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                        <img 
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, Welcome to my Portfolio. I am a Full-Stack Developer with a passion for creating engaging and user-friendly web experiences.
            </p>
            <Button 
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Works"
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL: */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  )
}

export default Hero