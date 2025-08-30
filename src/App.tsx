import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Preloader } from "./components/preLoader";
import NavBar from "./components/navBar";
import Hero from "./sections/Hero";

function App() {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
