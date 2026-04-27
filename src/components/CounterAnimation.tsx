"use client";

import { useEffect, useRef, useState } from "react";

interface CounterAnimationProps {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CounterAnimation = ({ value, duration = 2000, className = "", style }: CounterAnimationProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCounter = () => {
      if (value.includes('/') || !value.match(/\d/)) {
        setDisplayValue(value);
        return;
      }

      const numericMatch = value.match(/(\d+)/);
      const suffix = value.replace(/\d+/, "");

      if (!numericMatch) {
        setDisplayValue(value);
        return;
      }

      const targetNumber = parseInt(numericMatch[0], 10);
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentNumber = Math.floor(easeOutCubic * targetNumber);

        setDisplayValue(currentNumber + suffix);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(updateCounter);
    };

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
  }, [hasAnimated, value, duration]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {displayValue}
    </div>
  );
};

export default CounterAnimation;
