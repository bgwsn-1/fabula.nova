import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Leaderboard from './components/Leaderboard';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import { ShieldAlert, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#020106] text-zinc-300 relative">
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
      <footer className="relative z-10 border-t border-amber-500/10 bg-[#06040c]/80 backdrop-blur-md py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo copy */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border border-amber-500/20 rotate-45">
                <div className="-rotate-45">
                  <ShieldAlert className="h-4 w-4 text-amber-300" />
                </div>
              </div>
              <span className="font-display font-black text-sm tracking-[0.2em] text-white">
                FABULA<span className="gold-text-gradient font-black">NOVA</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 font-display text-[10px] tracking-widest uppercase font-bold text-zinc-500">
              <a href="#home" className="hover:text-amber-200 transition duration-200">Sanctum</a>
              <a href="#features" className="hover:text-amber-200 transition duration-200">Crystals</a>
              <a href="#leaderboard" className="hover:text-amber-200 transition duration-200">Archives</a>
              <a href="#tutorial" className="hover:text-amber-200 transition duration-200">Ascension</a>
              <a href="#community" className="hover:text-amber-200 transition duration-200">Guilds</a>
            </div>

            {/* Terms copy */}
            <div className="text-zinc-600 text-xs text-center md:text-right space-y-1">
              <p>&copy; {new Date().getFullYear()} FabulaNova. All rights reserved.</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                Ascended with <Heart className="h-3 w-3 text-amber-500 fill-amber-500" /> for the community.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-zinc-700 text-[10px] sm:text-xs leading-relaxed max-w-3xl mx-auto">
            Disclaimer: FabulaNova is an independent modification server. Growtopia is a registered trademark of Ubisoft Entertainment. We are not associated with, authorized, or endorsed by Ubisoft Entertainment.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
