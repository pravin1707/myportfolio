"use client";
import { cn } from "../lib/utils"; // Adjust path if needed
import React from "react";
import { motion, useAnimate } from "framer-motion";
import { type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "onClick"> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

export const Button = ({
  className,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const [scope, animate] = useAnimate();
  const [isAnimating, setIsAnimating] = React.useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating || rest.disabled) return;
    setIsAnimating(true);

    await animate(".loader", { width: "20px", scale: 1, opacity: 1 }, { duration: 0.2 });

    try {
      await onClick?.(event);
      await animate(".loader", { width: "0px", scale: 0, opacity: 0 }, { duration: 0.5 });
      await animate(".check", { width: "20px", scale: 1, opacity: 1 }, { duration: 0.5 });
      await animate(".check", { opacity: 0, scale: 0, width: 0 }, { delay: 1.5, duration: 0.2 });
    } catch (error) {
      console.error("Button's async action failed:", error);
      await animate(".loader", { width: "0px", scale: 0, opacity: 0 }, { duration: 0.2 });
    } finally {
      setIsAnimating(false);
    }
  };

  return (
    <motion.button
      ref={scope}
      className={cn(
        "flex min-w-[150px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold text-white transition duration-200",
        "bg-black-200 hover:bg-black-100 ring-offset-2 hover:ring-2 hover:ring-white-50/50",
        "disabled:cursor-not-allowed disabled:bg-black-100 disabled:opacity-50",
        className
      )}
      {...rest}
      onClick={handleClick}
    >
      <motion.div layout className="flex items-center justify-center gap-2">
        <Loader />
        <CheckIcon />
        <motion.span layout>{children}</motion.span>
      </motion.div>
    </motion.button>
  );
};

// --- Helper Components ---
const Loader = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, opacity: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="loader text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 3a9 9 0 1 0 9 9" />
  </motion.svg>
);

const CheckIcon = () => (
  <motion.svg
    initial={{ scale: 0, width: 0, opacity: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="check text-white"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M9 12l2 2l4 -4" />
  </motion.svg>
);