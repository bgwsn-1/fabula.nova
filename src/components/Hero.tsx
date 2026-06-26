import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Users, Globe, Download, MessageSquare } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  const stats = [
    { label: 'Souls Online', value: '412', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Active Worlds', value: '2,905', icon: Globe, color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { label: 'Realm Ping', value: '28ms', icon: Activity, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Stability', value: '99.9%', icon: ShieldCheck, color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#060813]"></div>
        <div className="absolute inset-0 sandbox-grid opacity-30"></div>
        <div className="absolute inset-0 sandbox-stars opacity-20"></div>

        {/* Ambient color bubbles */}
        <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-emerald-500/5 filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-sky-500/5 filter blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Main Copywriting */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status dot */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-display text-xs font-bold text-emerald-400 uppercase tracking-wide">
                Server Online • 412 Players
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="font-display text-sm font-bold uppercase tracking-widest text-sky-400">
                FabulaNova Private Server
              </span>
            </motion.div>

            {/* Playful bold Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-wide text-white leading-tight"
            >
              The Ultimate <br />
              <span className="gem-text-gradient font-black">Sandbox</span> Universe
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed font-semibold"
            >
              Step into FabulaNova, a retro-inspired 2D sandboxed private server. Trade valuable gems, build massive worlds, conquer boss raids, and play with friends on any device!
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#tutorial"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-8 py-4 font-display text-xs tracking-wider uppercase font-bold text-black shadow-[0_5px_20px_rgba(52,211,153,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(52,211,153,0.5)]"
              >
                <Download className="h-4.5 w-4.5" />
                Download App
              </a>
              <a
                href="https://discord.gg/fabulanova"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-white/10 bg-white/5 px-8 py-4 font-display text-xs tracking-wider uppercase font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <MessageSquare className="h-4.5 w-4.5 text-sky-400" />
                Join Discord
              </a>
            </motion.div>
          </motion.div>

          {/* Gently Bouncing Pixel Grass Block SVG */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[300px]"
          >
            {/* Soft shadow that expands/contracts under the bouncing block */}
            <div className="absolute bottom-[20px] w-32 h-4 rounded-full bg-black/40 blur-md animate-[pulse_2s_infinite]" />

            {/* Floating Pixel Block Wrapper */}
            <div className="animate-bounce-slow relative z-10 w-full max-w-[200px] sm:max-w-[240px] aspect-square flex items-center justify-center">
              
              {/* Detailed custom SVG of a pixelated Grass/Dirt block */}
              <svg className="w-full h-full drop-shadow-[0_15px_30px_rgba(16,185,129,0.3)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 3D Isometric Dirt Block Body */}
                <path d="M50 20L85 37.5L85 75L50 92.5L15 75L15 37.5L50 20Z" fill="#78350f" />
                
                {/* Isometric Shading details (Left dark dirt side) */}
                <path d="M15 37.5L50 55L50 92.5L15 75L15 37.5Z" fill="#451a03" />
                
                {/* Top Grass Cap */}
                <path d="M50 20L85 37.5L50 55L15 37.5L50 20Z" fill="#10b981" />
                
                {/* Left/Right grass drips isometric */}
                <path d="M15 37.5L30 45L40 40L50 55L60 48L75 52L85 37.5L50 55L15 37.5Z" fill="#047857" />
                <path d="M15 37.5L25 42.5L32 39L40 46L46 41L50 55L15 37.5Z" fill="#065f46" />
                <path d="M85 37.5L78 44L72 40L64 47L58 41L50 55L85 37.5Z" fill="#065f46" />
                
                {/* Pixelated dots on Dirt layers */}
                <rect x="25" y="60" width="4" height="4" fill="#a16207" />
                <rect x="35" y="70" width="4" height="4" fill="#b45309" />
                <rect x="60" y="65" width="4" height="4" fill="#a16207" />
                <rect x="70" y="58" width="4" height="4" fill="#b45309" />
                <rect x="30" y="50" width="4" height="4" fill="#065f46" />
                <rect x="68" y="48" width="4" height="4" fill="#065f46" />
                
                {/* Shiny highlight lines */}
                <path d="M50 22L80 37M50 22L20 37" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

        </div>

        {/* Dashboard statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 p-6 sm:p-8 rounded-[32px] border border-white/5 bg-[#0e1127]/60 backdrop-blur-xl shadow-2xl"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left p-4 rounded-[24px] hover:bg-white/[0.02] transition-all duration-300">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                  <p className="font-display text-lg sm:text-xl font-black text-white mt-0.5">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
