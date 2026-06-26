import { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles } from 'lucide-react';
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
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Leaderboard', href: '#leaderboard' },
    { name: 'Tutorial', href: '#tutorial' },
    { name: 'Community', href: '#community' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="mx-auto flex justify-center px-4 pt-4 sm:pt-6">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 md:px-8 backdrop-blur-xl transition-all duration-300 ${
            scrolled ? 'h-14 sm:h-16 py-2 shadow-[0_0_30px_rgba(139,92,246,0.15)] bg-black/60' : 'h-16 sm:h-20 py-4'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/20 border border-violet-500/30 group-hover:border-violet-400 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition duration-300">
              <Sparkles className="h-5 w-5 text-violet-400 group-hover:rotate-12 transition duration-300" />
            </div>
            <span className="font-display font-black text-lg sm:text-xl tracking-wider bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:text-white transition duration-300">
              FABULA<span className="text-violet-400 font-extrabold">NOVA</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-zinc-400 hover:text-white transition duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-violet-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#tutorial"
              className="flex items-center gap-2 rounded-full bg-violet-600 px-6 py-2 text-sm font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            >
              <Rocket className="h-4 w-4" />
              Play Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl md:hidden transition hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-[calc(100%-2rem)] mx-auto mt-2 border border-white/10 bg-cosmic-dark/95 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-semibold text-zinc-300 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-white/10">
                <a
                  href="#tutorial"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3 text-base font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                >
                  <Rocket className="h-5 w-5" />
                  Play Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
