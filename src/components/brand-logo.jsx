import React from "react";

export function BrandLogo({ className, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1150 360"
      className={className}
      {...props}
    >
      <style>
        {`
          .logo-text-fast { font-family: 'Urbanist', sans-serif; font-weight: 800; }
          .logo-text-slash { font-family: 'Urbanist', sans-serif; font-weight: 300; }
          .logo-text-launch { font-family: 'Urbanist', sans-serif; font-weight: 800; opacity: 0.85; }
        `}
      </style>
      <text
        x="0"
        y="265"
        textAnchor="start"
        fontSize="240"
        letterSpacing="-11"
        fill="currentColor"
      >
        <tspan className="logo-text-fast">fast</tspan>
        <tspan className="logo-text-slash" dx="6">/</tspan>
        <tspan className="logo-text-launch" dx="6">launch</tspan>
      </text>
    </svg>
  );
}
