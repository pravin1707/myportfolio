export const About = () => {
  return (
    <section className="px-5 md:px-20 mt-8 md:mt-16 pb-12.5 md:pb-35 scroll-mt-nav" id="about">
      <div className="about-grid">
        {/* <div className="about-image-wrapper">
          <img
            src="/pravin-kumar.jpg"
            alt="A photo of Pravin Kumar"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div> */}

        <div className="about-text-content">
          <div>
            <h2 className="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              About me
            </h2>
          </div>
          
          <div className="text-base md:text-lg text-neutral-300 flex flex-col gap-y-4">
            <p>
              I am a software engineer who genuinely loves building things that make life easier, smarter, and a little more fun. For me, coding isn’t just about solving problems; it’s about creating solutions and building meaningful products that makes a difference in people’s lives. In the past few years, I have spent my time learning new skills across full-stack development, experimenting with new technologies, and occasionally fixing bugs I swear weren’t there yesterday. 
            </p>
            <p>
              Whether it’s designing a smooth user experience, writing clean and efficient code, or turning coffee into commits, I approach each challenge with curiosity and persistence. At the end of the day, I’m driven by a simple goal: to keep learning, keep building, and contribute to software that makes a real difference  in today's world and maybe even makes debugging slightly less painful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};