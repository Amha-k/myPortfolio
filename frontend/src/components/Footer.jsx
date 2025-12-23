import React from "react";

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white py-6 mt-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Amha. All rights reserved.</p>

        <div className="text-sm text-white/90 flex flex-col items-start gap-2">
          <a href="mailto:amhakifle09@gmail.com" className="hover:underline">amhakifle09@</a>
          <a href="tel:0909400194" className="hover:underline">090940194</a>
          <a href="https://github.com/amha_ki" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
