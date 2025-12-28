import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dark:bg-slate-900/80 bg-white/80 backdrop-blur-md border-b dark:border-slate-800/50 border-slate-200/50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-500/50" />
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Vivek
          </span>
        </Link>

        <div className="flex gap-6 md:gap-8 dark:text-slate-300 text-slate-600">
          <Link
            to="/"
            className={`hover:text-emerald-400 transition-colors relative group ${isActive("/") ? "text-emerald-400" : ""}`}
          >
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            to="/about"
            className={`hover:text-emerald-400 transition-colors relative group ${isActive("/about") ? "text-emerald-400" : ""}`}
          >
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all ${isActive("/about") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            to="/projects"
            className={`hover:text-emerald-400 transition-colors relative group ${isActive("/projects") ? "text-emerald-400" : ""}`}
          >
            Projects
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all ${isActive("/projects") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            to="/contact"
            className={`hover:text-emerald-400 transition-colors relative group ${isActive("/contact") ? "text-emerald-400" : ""}`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all ${isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl dark:bg-slate-800 bg-slate-100 dark:text-slate-300 text-slate-600 hover:text-emerald-400 transition-all border dark:border-slate-700 border-slate-200 hover:scale-110 hover:rotate-12 active:scale-95"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <Link
            to="/contact"
            className="hidden md:block px-5 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}
