"use client";
import { useState } from "react";
import { skillstackicons } from "../constants/index"; // Adjust path if needed
import { TechCategoryRow } from "../components/ui/flowingIconsUI"; // Adjust path

const Skillstack = () => {
  // This state tracks which category is currently being hovered
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="section-padding">
      <h2 className="px-5 md:px-15 mt-20 md:mt-30 text-4xl md:text-6xl text-left font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-12 leading-tight">
        Techstack
      </h2>

      {skillstackicons.map((category) => (
          <TechCategoryRow
            key={category.name}
            name={category.name}
            icons={category.icons}
            isHovered={hoveredCategory === category.name}
            onHover={setHoveredCategory}
          />
        ))}
    </section>
  );
};

export default Skillstack;