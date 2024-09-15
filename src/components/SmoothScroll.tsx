"use client";

import { ReactLenis } from '@studio-freight/react-lenis';
import { ReactNode } from 'react';

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollWrapper;
