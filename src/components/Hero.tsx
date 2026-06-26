import { motion } from 'framer-motion';
import { Play, MessageSquare, Shield, Activity, Users, Globe } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
  };

  const stats = [
    { label: 'Explorers Online', value: '412', icon: Users, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Active Worlds', value: '2,905', icon: Globe, color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { label: 'Server Ping', value: '38ms', icon: Activity, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { label: 'Uptime', value: '99.9%', icon: Shield, color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#05010d]/90"></div>
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute inset-0 stars-bg opacity-15"></div>
        
        {/* Glowing Nebulas */}
        <div className="nebula-glow bg-violet-600 w-[500px] h-[500px] top-[-100px] left-[10%]" />
        <div className="nebula-glow bg-fuchsia-600 w-[400px] h-[400px] bottom-[10%] right-[10%]" />
        <div className="nebula-glow bg-cyan-600 w-[300px] h-[300px] top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Copywriting */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status dot */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Server Online • 412 Players
              </span>
            </motion.div>

            {/* Sub-eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
                FabulaNova Private Server
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight text-white leading-[1.05]"
            >
              Explore The <br />
              <span className="animated-gradient-text">Cosmic Era</span> <br />
              Of Growtopia
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              Enter a beautifully crafted Growtopia private server filled with custom starlight items, a completely balanced progression system, starlight events, and a vibrant community.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#tutorial"
                className="flex items-center gap-2 rounded-2xl bg-violet-600 px-8 py-4 font-bold text-white shadow-[0_0_35px_rgba(139,92,246,0.4)] transition duration-300 hover:bg-violet-500 hover:shadow-[0_0_45px_rgba(139,92,246,0.6)]"
              >
                <Play className="h-5 w-5 fill-white" />
                Start Playing
              </a>
              <a
                href="https://discord.gg/fabulanova"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-zinc-200 backdrop-blur-md transition duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <MessageSquare className="h-5 w-5" />
                Join Discord
              </a>
            </motion.div>
          </motion.div>

          {/* Interactive Emblem & Live Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            {/* The spinning orbit backdrop */}
            <div className="absolute h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full border border-violet-500/10 animate-orbit-clockwise" />
            <div className="absolute h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] rounded-full border border-dashed border-fuchsia-500/5 animate-orbit-counter" />

            {/* Glowing crystal starlight logo container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] aspect-square flex items-center justify-center bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 rounded-full border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.25)] backdrop-blur-sm p-8"
            >
              {/* Central high fidelity crystal/star vector representation */}
              <svg className="w-full h-full text-violet-400 drop-shadow-[0_0_25px_rgba(139,92,246,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0L57.5 35L90 42.5L57.5 50L50 90L42.5 50L10 42.5L42.5 35L50 0Z" fill="currentColor" />
                <path d="M50 25L52.5 42.5L70 45L52.5 47.5L50 70L47.5 47.5L30 45L47.5 42.5L50 25Z" fill="white" />
                <circle cx="50" cy="45" r="4" fill="url(#violet-grad)" />
                <defs>
                  <radialGradient id="violet-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 45) rotate(90) scale(4)">
                    <stop offset="0%" stopColor="#d946ef" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

        </div>

        {/* Live Stats Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 p-6 sm:p-8 rounded-[32px] border border-white/5 bg-cosmic-card backdrop-blur-xl shadow-2xl"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left p-4 rounded-2xl hover:bg-white/[0.02] transition duration-300">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.bg} ${stat.color} shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
                  <p className="text-xl sm:text-2xl font-black font-display text-white mt-0.5">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
