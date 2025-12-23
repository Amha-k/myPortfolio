import React from "react";

export default function FloatingShapes() {
  return (
    <div className="relative w-full h-24 overflow-hidden">
      {/* Decorative floating shapes */}
      <svg className="absolute left-2 top-2 w-16 h-16 opacity-90 animate-float-slow" style={{animationDelay: '0s'}} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#g1)" />
      </svg>

      <svg className="absolute right-6 top-4 w-20 h-20 opacity-75 animate-pulse-soft" style={{animationDelay: '0.2s'}} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#bfdbfe" />
            <stop offset="1" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="18" fill="url(#g2)" />
      </svg>

      <svg className="absolute left-1/2 top-6 -translate-x-1/2 w-12 h-12 opacity-70 animate-float" style={{animationDelay: '0.4s'}} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#e0f2fe" />
      </svg>

      <svg className="absolute right-16 bottom-1 w-10 h-10 opacity-70 animate-fadeIn" style={{animationDelay: '0.6s'}} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#bae6fd" />
      </svg>

      {/* small floating dots */}
      <svg className="absolute left-10 bottom-2 w-6 h-6 opacity-60 animate-float-slow" style={{animationDelay: '0.2s'}} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="#e6f6ff" />
      </svg>
    </div>
  );
}
