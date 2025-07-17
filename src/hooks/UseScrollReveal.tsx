import { useState, useEffect, useRef } from 'react';

// Custom hook for scroll reveal
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

// Helper for alternating left/right effect
export function useScrollRevealDirection(index: number) {
  const [ref, visible] = useScrollReveal();
  const direction = index % 2 === 0 ? '-translate-x-8' : 'translate-x-8';
  const visibleClass = 'opacity-100 translate-x-0';
  const hiddenClass = `opacity-0 ${direction}`;
  return [ref, visible ? visibleClass : hiddenClass] as const;
}