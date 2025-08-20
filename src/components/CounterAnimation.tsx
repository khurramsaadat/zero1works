"use client";

import { useEffect, useRef, useState } from "react";

interface CounterAnimationProps {
  value: string;
  duration?: number;
  className?: string;
}

const CounterAnimation = ({ value, duration = 2000, className = "" }: CounterAnimationProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    // Handle special cases like "24/7" that shouldn't be animated
    if (value.includes('/') || !value.match(/\d/)) {
      setDisplayValue(value);
      return;
    }

    // Extract numeric value and suffix from the string
    const numericMatch = value.match(/(\d+)/);
    const suffix = value.replace(/\d+/, "");

    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(numericMatch[0]);
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easeOutCubic for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easeOutCubic * targetNumber);

      setDisplayValue(currentNumber + suffix);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value); // Ensure final value is exact
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div ref={elementRef} className={className}>
      {displayValue}
    </div>
  );
};

export default CounterAnimation;
