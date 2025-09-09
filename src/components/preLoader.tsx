"use client";
import { useState } from "react";
// UPDATED: The import path now points to your new 'ui' folder
import { MultiStepLoader as Loader } from "./ui/multiStepLoaderUI";
import { AnimatePresence, motion } from "framer-motion";

import { loadingStates, welcomeWords } from "../constants/index";
import RotatingText from "./rotatingText";
import { StarsBackground } from "./ui/starsBackgroundUI";
import { ShootingStars } from "./ui/shootingStarsUI";

// This component takes one prop: a function to call when the user clicks "Enter"
export const Preloader = ({ onEnter }: { onEnter: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [loaderFinished, setLoaderFinished] = useState(false);

  return (
    <div>
      <StarsBackground />
      <ShootingStars />
      <ShootingStars />
      {/* The Loader (Engine) is used here */}
      <Loader
        loadingStates={loadingStates}
        loading={loading}
        duration={2000} // Duration for each loading step (in ms)
        loop={false} // Run the animation only once
        onComplete={() => {
          setLoading(false); // Hide the loader's text and icons
          setLoaderFinished(true); // Signal that we are ready to show the "Enter" button
        }}
      />

      {/* This renders a button AFTER the loader is finished */}
      <AnimatePresence>
        {loaderFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="fixed inset-0 z-[101] flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter} // Calls the function from the parent (App.tsx)
              className="px-6 py-3 border-2 rounded-xl bg-transparent text-shadow-white-50 font-normal"
            >
              <RotatingText
                className="rotatingtext"
                texts={welcomeWords}
                // mainClassName="text-4xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.05}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-0.5"
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                rotationInterval={2700}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
