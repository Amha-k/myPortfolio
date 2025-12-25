import React, { useEffect, useState, useRef } from "react";

export default function Splash({ onFinish, darkMode }) {
  const [exiting, setExiting] = useState(false);
  const exitTimer = useRef(null);
  const finishTimer = useRef(null);

  const [typed, setTyped] = useState("");

  useEffect(() => {
    // start typing and schedule exit after typing completes + pause
    const charDelay = 80; // ms per char
    const typingDuration = title.length * charDelay;

    let i = 0;
    const typInt = setInterval(() => {
      setTyped((p) => p + title[i]);
      i += 1;
      if (i >= title.length) clearInterval(typInt);
    }, charDelay);

    exitTimer.current = setTimeout(() => startExit(), typingDuration + 1500);
    return () => {
      clearInterval(typInt);
      clearTimeout(exitTimer.current);
      clearTimeout(finishTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startExit = () => {
    if (exiting) return;
    setExiting(true);
    // wait for CSS transition (300ms) then call onFinish
    finishTimer.current = setTimeout(() => onFinish && onFinish(), 520);
  };

  const tech = ["Node.js", "Express", "React", "MongoDB", "Tailwind", "Docker"];
  const title = "Welcome to My Portfolio";

  return (
    <div
      onClick={() => startExit()}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-white`}
    >
      <div
        className={`text-center p-6 transform transition-all duration-300 ${
          exiting ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight splash-neon">
          <span>{typed}</span>
          <span className="typewriter-cursor" aria-hidden>
            |
          </span>
        </h1>

        <p className="text-sm md:text-base opacity-80 mb-6">I build reliable backend systems and thoughtful web products — click to continue</p>

        <div className="flex flex-wrap justify-center gap-3">
          {tech.map((t, i) => (
            <span
              key={t}
              className="splash-tech-chip animate-fadeInUp"
              style={{ animationDelay: `${title.length * 60 + 300 + i * 120}ms` }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
