import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Leaderboard from './components/Leaderboard';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import { Star, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#060813] text-zinc-300 relative">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Features />
        <Leaderboard />
        <Tutorial />
        <Community />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#080a18]/80 backdrop-blur-md py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo copy */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <Star className="h-5 w-5 text-emerald-400 fill-emerald-400" />
              </div>
              <span className="font-display font-black text-sm tracking-wide text-white">
                FABULA<span className="gem-text-gradient font-black">NOVA</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 font-display text-[10px] tracking-widest uppercase font-bold text-zinc-500">
              <a href="#home" className="hover:text-emerald-400 transition duration-200">Lobby</a>
              <a href="#features" className="hover:text-emerald-400 transition duration-200">Items</a>
              <a href="#leaderboard" className="hover:text-emerald-400 transition duration-200">Hall of Fame</a>
              <a href="#tutorial" className="hover:text-emerald-400 transition duration-200">Redirection</a>
              <a href="#community" className="hover:text-emerald-400 transition duration-200">Community</a>
            </div>

            {/* Terms copy */}
            <div className="text-zinc-600 text-xs text-center md:text-right space-y-1">
              <p>&copy; {new Date().getFullYear()} FabulaNova. All rights reserved.</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                Crafted with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for the community.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-zinc-700 text-[10px] sm:text-xs leading-relaxed max-w-3xl mx-auto">
            Disclaimer: FabulaNova is an independent fan-made sandbox server. Growtopia is a registered trademark of Ubisoft Entertainment. We are not affiliated with, authorized, or endorsed by Ubisoft Entertainment.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
