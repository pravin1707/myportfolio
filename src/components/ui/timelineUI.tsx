"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
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
    <section ref={containerRef} className="px-5 md:px-20 mt-15 md:mt-25">
      <div className="max-w-3xl mb-4">
        <h2 className="pb-2.5 text-4xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-semibold">
          My Professional Journey
        </h2>
        <p className="text-neutral-200 text-base md:text-lg leading-tight">
          A timeline of my key experiences and accomplishments in the world of software development.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-4 pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Note: top-40 is a good value to keep this sticky title below your fixed navbar */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* UPDATED: Colors now use your custom theme variables from index.css */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black-100 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              {/* UPDATED: Text color now uses your custom theme variable */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white-50">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* UPDATED: Text color now uses your custom theme variable */}
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white-50">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        {/* UPDATED: Colors for the timeline track now use your custom theme variables */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* UPDATED: Gradient for the animated progress line is now on-brand */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-800 via-red-600 to-red-400 from-[30%] via-[60%] to-[100%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
