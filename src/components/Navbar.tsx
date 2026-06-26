import { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lobby', href: '#home' },
    { name: 'Items', href: '#features' },
    { name: 'Hall of Fame', href: '#leaderboard' },
    { name: 'Redirection', href: '#tutorial' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="mx-auto flex justify-center px-4 pt-4 sm:pt-6">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
          className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-white/5 bg-[#0a0d21]/60 px-6 sm:px-10 backdrop-blur-xl transition-all duration-300 ${
            scrolled 
              ? 'h-14 sm:h-16 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-emerald-500/10 bg-[#0a0d21]/85' 
              : 'h-16 sm:h-20'
          }`}
        >
          {/* Logo mark */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300">
              <Star className="h-5 w-5 text-emerald-400 fill-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <span className="font-display font-black text-base sm:text-lg tracking-wide text-white">
              FABULA<span className="gem-text-gradient font-black">NOVA</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-display text-xs tracking-wider uppercase font-bold text-zinc-400 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action button */}
          <div className="hidden md:flex items-center">
            <a
              href="#tutorial"
              className="rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-2.5 font-display text-xs tracking-wider uppercase font-bold text-black shadow-[0_5px_15px_rgba(52,211,153,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(52,211,153,0.5)]"
            >
              Start Playing
            </a>
          </div>

          {/* Mobile menu triggers */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5 text-emerald-400 md:hidden transition hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-[calc(100%-2rem)] mx-auto mt-2 border border-white/5 bg-[#0a0d21]/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-6 gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-display text-sm tracking-wide uppercase font-bold text-zinc-300 hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/5">
                <a
                  href="#tutorial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center font-display text-sm tracking-widest uppercase font-bold rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black shadow-lg"
                >
                  Start Playing
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
