import { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert } from 'lucide-react';
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
    { name: 'Sanctum', href: '#home' },
    { name: 'Crystals', href: '#features' },
    { name: 'Archives', href: '#leaderboard' },
    { name: 'Ascension', href: '#tutorial' },
    { name: 'Guilds', href: '#community' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div className="mx-auto flex justify-center px-4 pt-4 sm:pt-6">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`flex w-full max-w-5xl items-center justify-between rounded-none border border-amber-500/10 bg-[#07040f]/60 px-6 sm:px-10 backdrop-blur-xl transition-all duration-300 ${
            scrolled 
              ? 'h-14 sm:h-16 shadow-[0_4px_30px_rgba(251,191,36,0.05)] border-amber-500/20 bg-[#07040f]/85' 
              : 'h-16 sm:h-20'
          }`}
        >
          {/* Logo mark */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex h-8 w-8 items-center justify-center border border-amber-500/20 rotate-45 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-500">
              <div className="-rotate-45">
                <ShieldAlert className="h-4.5 w-4.5 text-amber-300" />
              </div>
            </div>
            <span className="font-display font-black text-sm sm:text-base tracking-[0.2em] text-white">
              FABULA<span className="gold-text-gradient font-black">NOVA</span>
            </span>
          </a>

          {/* Desktop Navigation Link */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative font-display text-[10px] tracking-[0.25em] uppercase font-bold text-zinc-400 hover:text-amber-200 transition-all duration-300 group flex flex-col items-center"
                >
                  {link.name}
                  {/* Small gold diamond marker under link */}
                  <span className="absolute bottom-[-10px] w-1.5 h-1.5 rotate-45 bg-amber-400 opacity-0 group-hover:opacity-100 group-hover:bottom-[-6px] transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Enter Realm Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#tutorial"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-display text-[10px] tracking-[0.2em] uppercase font-bold text-amber-200 border border-amber-500/30 hover:border-amber-400/80 transition-all duration-300 group"
            >
              {/* Inner glowing hover effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              Enter Realm
            </a>
          </div>

          {/* Mobile Diamond Toggler */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-amber-500/10 bg-white/5 text-amber-300 md:hidden transition hover:border-amber-400/40"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden w-[calc(100%-2rem)] mx-auto mt-2 border border-amber-500/10 bg-[#07040f]/95 backdrop-blur-2xl rounded-none overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-6 gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.name} className="border-b border-amber-500/5 last:border-none pb-2 last:pb-0">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-display text-xs tracking-wider uppercase font-bold text-zinc-300 hover:text-amber-200 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#tutorial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-3 text-center font-display text-xs tracking-widest uppercase font-bold text-amber-300 border border-amber-500/30"
                >
                  Enter Realm
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
