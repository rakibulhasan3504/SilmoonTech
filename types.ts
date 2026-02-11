// Fix: Added missing React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface CardProps {
  title: string;
  icon: React.ReactNode;
  path: string;
  delay?: number;
}

export interface Bookmark {
  id: string;
  fileName: string;
  timestamp: number;
}