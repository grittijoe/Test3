import React from 'react';

export const CurrencyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 6.22C17 5.05 15.63 4 14 4H7.07C5.37 4 4 5.37 4 7.07V17c0 1.66 1.34 3 3 3h1.37" />
    <path d="M8 16H4" />
    <path d="M8 12H4" />
    <path d="M14 20v-4c0-1.1.9-2 2-2h4v-2h-4a2 2 0 0 1-2-2V8" />
  </svg>
);
