"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const Projects = () => {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section className="projects-section-padding scroll-mt-nav" id="projects">
      <h2 className="projects-headline">My Projects</h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-md h-full w-full z-40"
          />
        )}
      </AnimatePresence>
      {/* Definitions: Expanded card */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="expanded-card-wrapper">
            <motion.button
              key={`button-${active.projtitle}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05, }}}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.projtitle}-${id}`}
              ref={ref}
              className="w-full max-w-[600px]  h-full md:h-fit md:max-h-[80%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              
              {/* img if needed for display, currently disabled */}
              {/* <motion.div layoutId={`image-${active.projtitle}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.projtitle}
                  className="expanded-card-image"/>
              </motion.div> */}

              <div className="expanded-card-body">
                <div className="expanded-card-header">
                  <div className="">
                    <motion.h3
                      layoutId={`projtitle-${active.projtitle}-${id}`}
                      className="expanded-card-projtitle">
                      {active.projtitle}
                    </motion.h3>
                    <motion.p
                      layoutId={`role-${active.role}-${id}`}
                      className="expanded-card-role">
                      {active.role}
                    </motion.p>
                  </div>

                  {/* Button to add a link to github: disabled for now */}
                  {/* <motion.a
                    layoutId={`button-${active.projtitle}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="expanded-card-cta">
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="expanded-card-content">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      {/* Definitions: Unexpanded project */}
      <motion.ul className="project-card-list">
        {projects.map((card) => (
          <motion.div
            layoutId={`card-${card.projtitle}-${id}`}
            key={`card-${card.projtitle}-${id}`}
            onClick={() => setActive(card)}
            className="project-card">
            <motion.div className="project-card-content">
              {/* img if needed for display, currently disabled */}
              {/* <motion.div layoutId={`image-${card.projtitle}-${id}`}>
                <img
                  src={card.src}
                  alt={card.projtitle}
                  className="project-card-image"/>
              </motion.div> */}
              <motion.div className="">
                <motion.h3
                  layoutId={`projtitle-${card.projtitle}-${id}`}
                  className="project-card-title">
                  {card.projtitle}
                </motion.h3>
                {card.role && (
                  <motion.p
                    // THE MAIN FIX: The layoutId is now based on the UNIQUE card.projtitle
                    layoutId={`role-${card.projtitle}-${id}`}
                    
                    // CORRECTED: Using your .project-card-role class
                    className="project-card-role"
                  >
                    {card.role}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
            {/* <motion.button
              layoutId={`button-${card.projtitle}-${id}`}
              className="project-card-cta">
              {card.ctaText}
            </motion.button> */}
          </motion.div>
        ))}
      </motion.ul>
      </section>
    );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const projects = [
  {
    projtitle: "Designing an Efficient University Course Management System Using Design Patterns",
    role: "Design & Development",
    // src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "GitHub",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          <ul>
            <li>
              ● Developed a course management system using Java, VS Code, and Design Patterns concepts to manage class attributes such as available seats, professors, and a priority-based student enrollment system across departments.
            </li>
            <li>
              ● Implemented tracking of core and elective courses essential for degree completion to ensure academic progress.
            </li>
            <li>
              ● Applied various design patterns to enhance system efficiency and maintainability.
            </li>
          </ul>
        </p>
      );
    },
  },
  {
    projtitle: "Development of Intelligent Pacman Agents Using Search Algorithms and Reinforcement Learning",
    role: "Design & Development",
    // src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "GitHub",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          <ul>
            <li>
              ● Developed a Pacman agent with VS Code and Python using search algorithms like minimax and expectimax for efficient maze navigation and ghost interaction.
            </li>
            <li>
              ● Implemented value iteration and Q-learning, testing the agent on Gridworld, Crawler, and Pacman to refine decision-making.
            </li>
            <li>
              ● Optimized agent behavior through rigorous testing and fine-tuning of learning models.
            </li>
          </ul>
        </p>
      );
    },
  },
  {
    projtitle: "Comparative Analysis of COVID-19 Detection in X-Rays Using CNN Algorithms",
    role: "Design & Development",
    // src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "GitHub",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          <ul>
            <li>
              ● Developed a deep neural network model for COVID-19 detection from chest X-ray images utilizing Google Colab, Python, Numpy, Keras, Seaborn, and Matplotlib.
            </li>
            <li>
              ● Implemented and compared Inception-v3, VGG-19, and Xception Convolutional Neural Network (CNN) algorithms, incorporating techniques like image resizing, normalization, RMSprop optimizer, batch normalization, and label smoothing regularization.
            </li>
            <li>
              ● Achieved approximately 99% accuracy across all three models in predicting COVID-19 from chest X-rays, with ROC values of 1 and F1-scores of 0.99, demonstrating robust and balanced classification performance.
            </li>
            <li>
              ● Created a high-accuracy Model designed to assist radiologists in the diagnosis and detection of suspected COVID-19 patients, potentially aiding in faster diagnosis and patient management, especially in situations with limited resources.
            </li>
          </ul>
        </p>
      );
    },
  },
]; // setup repo, and get the link working