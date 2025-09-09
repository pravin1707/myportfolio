"use client";
import { TimelineUI } from "../components/ui/timelineUI";
import { experienceData } from "../constants";

export const Timeline = () => {
  return (
    // Your container div with the correct ID and scroll-margin is perfect
    <div className="relative w-full overflow-clip scroll-mt-nav" id="experience">
      {/* The component now receives data in the correct format */}
      <TimelineUI data={experienceData} />
    </div>
  );
};