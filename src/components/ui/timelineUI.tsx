"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  year: string;
  company: string;
  role: string;
  tasks: string[];
}

export const TimelineUI = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

return (
    <section ref={containerRef} className="section-padding">
      <div className="max-w-4xl px-7 md:px-14 leading-tight">
        <h2 className="text-3xl md:text-6xl pb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold">
          My Professional Journey
        </h2>
        <p className="text-neutral-200 text-base md:text-lg leading-tight">
          A timeline of my key experiences and accomplishments in software development.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-10 md:mx-18">
        {/* 2. UPDATED: The .map() now destructures the new data fields */}
        {data.map(({ year, company, role, tasks }, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 md:gap-10"
          >
            {/* The sticky year on the left remains the same */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black-100 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-black-50 border border-black-50 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-white-50">
                {year}
              </h3>
            </div>

            {/* 3. UPDATED: The content on the right is now a structured card */}
            <div className="relative px-5 md:px:10 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white-50">
                {year}
              </h3>
              
              <div className="experience-card">
                <h3 className="company">{company}</h3>
                <p className="role">{role}</p>
                <ul className="task">
                  {tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-red-900 via-red-600 to-red-400 from-[30%] via-[60%] to-[100%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
