import React, { useState, useEffect, useRef } from 'react';

interface DeferredSectionProps {
  id?: string;
  minHeight?: string;
  fallbackClass?: string;
  children: React.ReactNode;
}

export const DeferredSection: React.FC<DeferredSectionProps> = ({
  id,
  minHeight = '500px',
  fallbackClass = '',
  children,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is unavailable, render immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return;
    }

    const el = containerRef.current;
    if (!el) return;

    // Trigger loading 600px before the element enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px 0px' }
    );

    observer.observe(el);

    // If an anchor jump is requested, reveal section immediately
    const handleAnchorJump = () => {
      setShouldRender(true);
      observer.disconnect();
    };

    window.addEventListener('quilate:reveal-all', handleAnchorJump, { once: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('quilate:reveal-all', handleAnchorJump);
    };
  }, []);

  if (!shouldRender) {
    return (
      <div
        ref={containerRef}
        id={id}
        className={fallbackClass}
        style={{ minHeight }}
        aria-hidden="true"
      />
    );
  }

  return <>{children}</>;
};

