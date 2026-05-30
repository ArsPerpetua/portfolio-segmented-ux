import { useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: "none" | "short" | "medium" | "long";
};

const delayClasses = {
  none: "",
  short: "delay-100",
  medium: "delay-200",
  long: "delay-300",
};

export default function RevealOnScroll({
  children,
  className = "",
  delay = "none",
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={[
        "transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
        delayClasses[delay],
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}