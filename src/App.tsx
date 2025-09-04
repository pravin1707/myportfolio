import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Preloader } from "./components/preLoader";

import NavBar from "./components/navBar";
import { Hero } from "./sections/Hero";
import Timeline from "./sections/Timeline";
import Skillstack from "./sections/Skillstack";
import Projects  from "./sections/Projects";

function App() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isPreloaderDone ? (
          // If the preloader is NOT done, show the Preloader component
          <motion.div key="preloader" className="w-screen h-screen">
            <Preloader onEnter={() => setIsPreloaderDone(true)} />
          </motion.div>
        ) : (
          // When the preloader IS done, show your main site content
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >

            {/* Add other pages here below */}
            <NavBar />
            <Hero />
            <Timeline />
            <Projects />
            <Skillstack />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
