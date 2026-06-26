import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Leaderboard from './components/Leaderboard';
import Tutorial from './components/Tutorial';
import Community from './components/Community';
import { Sparkles, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cosmic-black text-white relative">
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
      <footer className="relative z-10 border-t border-white/5 bg-cosmic-black/65 backdrop-blur-md py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo copy */}
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600/20 border border-violet-500/30">
                <Sparkles className="h-4.5 w-4.5 text-violet-400" />
              </div>
              <span className="font-display font-black text-lg tracking-wider bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                FABULA<span className="text-violet-400 font-extrabold">NOVA</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-500 font-medium">
              <a href="#home" className="hover:text-white transition duration-200">Home</a>
              <a href="#features" className="hover:text-white transition duration-200">Features</a>
              <a href="#leaderboard" className="hover:text-white transition duration-200">Leaderboard</a>
              <a href="#tutorial" className="hover:text-white transition duration-200">Tutorial</a>
              <a href="#community" className="hover:text-white transition duration-200">Community</a>
            </div>

            {/* Terms copy */}
            <div className="text-zinc-600 text-xs text-center md:text-right space-y-1">
              <p>&copy; {new Date().getFullYear()} FabulaNova. All rights reserved.</p>
              <p className="flex items-center justify-center md:justify-end gap-1">
                Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> for the private server community.
              </p>
            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-zinc-700 text-[10px] sm:text-xs leading-relaxed max-w-3xl mx-auto">
            Disclaimer: FabulaNova is a custom fan-made modification server. Growtopia is a registered trademark of Ubisoft Entertainment. We are not affiliated with, authorized, or endorsed by Ubisoft Entertainment.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
