"use client";

import React, { useEffect, useState } from 'react';

interface CustomCursorWrapperProps {
  children: React.ReactNode;
}

const CustomCursorWrapper: React.FC<CustomCursorWrapperProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);

  const isMobile = () => {
    if (typeof navigator === 'undefined') return false;
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  useEffect(() => {
    if (isMobile()) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorScale(1.5);
    const handleMouseLeave = () => setCursorScale(1);

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, label'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    if (isMobile()) return;

    let animationFrameId: number;

    const updateCursorPosition = () => {
      setCursorPosition((prevPosition) => {
        const lerpFactor = 0.1;
        const x = prevPosition.x + (mousePosition.x - prevPosition.x) * lerpFactor;
        const y = prevPosition.y + (mousePosition.y - prevPosition.y) * lerpFactor;
        return { x, y };
      });

      animationFrameId = requestAnimationFrame(updateCursorPosition);
    };

    updateCursorPosition();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  if (isMobile()) return <>{children}</>;

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none mix-blend-difference z-50"
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2 duration-100"
          style={{ transform: `scale(${cursorScale})` }}
        >
          {/* Central Dot */}
          {/* <div className="size-2 bg-white rounded-full absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div> */}
          {/* Outer Circle */}
          <div className="size-8 border-px border border-white rounded-full opacity-20 absolute -translate-x-1/2 -translate-y-1/2 top-0 left-0"></div>
        </div>
      </div>
      {children}
    </>
  );
};

export default CustomCursorWrapper;
