import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white fixed w-full top-0 z-50 flex justify-between">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
