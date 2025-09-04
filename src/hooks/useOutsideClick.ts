"use client";
import { useEffect, type RefObject } from "react";

type Event = MouseEvent | TouchEvent;
type ClickOutsideCallback = (event: Event) => void;

export function useOutsideClick<T extends HTMLElement | null>(
  ref: RefObject<T>,
  callback: ClickOutsideCallback
) {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}