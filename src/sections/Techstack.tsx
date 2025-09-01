import { techStack } from '../constants/index'; // Adjust path if needed

const TechStack = () => {
  return (
    // Use the global 'section-padding' for consistent spacing and alignment
    <section className="px-5 md:px-20 mt-20 md:mt-30">
      {/* The main headline, using the same gradient style for consistency */}
      <h2 className="pb-2.5 text-4xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold">
        My Tech Stack & Tools
      </h2>

      {/* Map over each category in your data */}
      {techStack.map((category) => (
        <div key={category.category}>
          <h3 className="tech-category-title">{category.category}</h3>
          <div className="tech-grid">
            {/* Map over the technologies in each category */}
            {category.technologies.map((tech) => (
              <div key={tech.name} className="tech-card">
                <img src={tech.icon} alt={`${tech.name} logo`} className="tech-card-icon" />
                {/* <p className="text-neutral-200 text-sm md:text-base">{tech.name}</p> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;