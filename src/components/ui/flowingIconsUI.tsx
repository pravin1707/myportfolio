"use client";
import { motion, AnimatePresence } from "framer-motion";

interface TechCategoryRowProps {
  name: string;
  icons: { name: string; path?: string }[];
  isHovered: boolean;
  onHover: (name: string | null) => void;
}

export const TechCategoryRow = ({ name, icons, isHovered, onHover }: TechCategoryRowProps) => {
  const extendedIcons = [...icons, ...icons];

  return (
    <div
      className="tech-row"
      onMouseEnter={() => onHover(name)}
      onMouseLeave={() => onHover(null)}
    >
      <motion.h2
        layout // This is the key prop for the smooth slide animation!
        className={`tech-title ${!isHovered ? "ml-auto" : ""}`}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        {name}
      </motion.h2>

      <AnimatePresence mode="popLayout">
        {isHovered && (
          <motion.div
            className="tech-marquee-container"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1, flex: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="tech-marquee-inner"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
              {extendedIcons.map((icon, index) => 
              icon.path ? (
                <img
                  key={`${icon.name}-${index}`}
                  src={icon.path}
                  alt={icon.name}
                  className="tech-icon"
                />
              ) : (
                  <div key={`${icon.name}-${index}`} className="tech-text-badge">
                      {icon.name}
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};