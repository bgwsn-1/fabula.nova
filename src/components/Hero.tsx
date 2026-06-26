import { motion } from 'framer-motion';
import { Activity, ShieldAlert, Users, Award } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80 } },
  };

  const realmStats = [
    { label: 'Realm Souls', value: '412 / 1024', icon: Users, color: 'text-amber-300' },
    { label: 'Ethereal Latency', value: '28ms', icon: Activity, color: 'text-sky-300' },
    { label: 'Client Version', value: 'v1.4.2', icon: Award, color: 'text-purple-300' },
    { label: 'Gatekeepers', value: 'Active', icon: ShieldAlert, color: 'text-emerald-300' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* Background starlight decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020106]"></div>
        <div className="absolute inset-0 cosmic-grid opacity-30"></div>
        <div className="absolute inset-0 star-field opacity-20"></div>

        {/* Soft glowing ambient spots */}
        <div className="absolute top-[10%] left-[20%] w-[450px] h-[450px] rounded-full bg-amber-500/5 filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[20%] w-[450px] h-[450px] rounded-full bg-violet-600/5 filter blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Text and Copywriting */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Pulsing Status Dot */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-none border border-amber-500/20 bg-amber-500/5 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-display text-[9px] sm:text-[10px] font-bold text-amber-300 uppercase tracking-[0.25em]">
                Realm Connected • 412 Souls Online
              </span>
            </motion.div>

            {/* Sub-eyebrow */}
            <motion.div variants={itemVariants}>
              <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-zinc-500">
                Re-Crystallize Your World
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-wider text-white leading-[1.1]"
            >
              The Legend of <br />
              <span className="gold-text-gradient font-black">FABULANOVA</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed font-medium"
            >
              Step through the threshold of the crystal chamber. A custom sandbox universe of Growtopia built with starlight economies, automated dungeon raids, and secure peer architectures.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#tutorial"
                className="font-display text-xs tracking-widest uppercase font-bold text-[#05010a] bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 px-8 py-4 shadow-[0_0_30px_rgba(251,191,36,0.25)] hover:shadow-[0_0_40px_rgba(251,191,36,0.45)] hover:scale-105 transition-all duration-300"
              >
                Ascend to Client
              </a>
              <a
                href="https://discord.gg/fabulanova"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-xs tracking-widest uppercase font-bold text-amber-200 border border-amber-500/30 hover:border-amber-400 hover:bg-amber-500/5 px-8 py-4 transition-all duration-300"
              >
                Join Sanctuary
              </a>
            </motion.div>
          </motion.div>

          {/* Glowing Crystal SVG Orb & Runes */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[350px]"
          >
            {/* Spinning Golden Orbits */}
            <div className="absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full border border-amber-500/10 animate-orbit-clockwise" />
            <div className="absolute h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] rounded-full border border-dashed border-zinc-500/10 animate-orbit-counter" />
            
            {/* Geometric star nodes */}
            <div className="absolute top-[10%] left-[10%] w-2.5 h-2.5 rotate-45 border border-amber-500/30 bg-amber-400/20" />
            <div className="absolute bottom-[10%] right-[10%] w-2.5 h-2.5 rotate-45 border border-amber-500/30 bg-amber-400/20" />
            <div className="absolute top-[40%] right-[5%] w-2 h-2 rotate-45 border border-zinc-500/30" />

            {/* Pulsing Crystal Element */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[240px] sm:max-w-[300px] aspect-square flex items-center justify-center"
            >
              {/* Mythical Final Fantasy Style Crystal SVG */}
              <svg className="w-full h-full text-amber-200 drop-shadow-[0_0_35px_rgba(251,191,36,0.35)] hover:text-amber-100 hover:drop-shadow-[0_0_50px_rgba(251,191,36,0.55)] transition-all duration-700" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Crystal Facets */}
                <path d="M50 0L85 35L85 85L50 120L15 85L15 35L50 0Z" fill="url(#crystal-back)" opacity="0.3"/>
                <path d="M50 0L85 35L50 60L50 0Z" fill="url(#facet-1)"/>
                <path d="M50 0L15 35L50 60L50 0Z" fill="url(#facet-2)"/>
                <path d="M50 120L85 85L50 60L50 120Z" fill="url(#facet-3)"/>
                <path d="M50 120L15 85L50 60L50 120Z" fill="url(#facet-4)"/>
                <path d="M15 35L50 60L15 85L15 35Z" fill="url(#facet-5)"/>
                <path d="M85 35L50 60L85 85L85 35Z" fill="url(#facet-6)"/>
                
                {/* Highlights */}
                <path d="M50 0L52 60L50 120L48 60L50 0Z" fill="#ffffff" opacity="0.4"/>
                <path d="M15 35L50 60L85 35" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                <path d="M15 85L50 60L85 85" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                
                <defs>
                  <linearGradient id="crystal-back" x1="50" y1="0" x2="50" y2="120" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fbbf24"/>
                    <stop offset="1" stopColor="#7c2d12"/>
                  </linearGradient>
                  <linearGradient id="facet-1" x1="50" y1="0" x2="85" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffe082"/>
                    <stop offset="1" stopColor="#d97706"/>
                  </linearGradient>
                  <linearGradient id="facet-2" x1="50" y1="0" x2="15" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff8e1"/>
                    <stop offset="1" stopColor="#b45309"/>
                  </linearGradient>
                  <linearGradient id="facet-3" x1="50" y1="120" x2="85" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#b45309"/>
                    <stop offset="1" stopColor="#78350f"/>
                  </linearGradient>
                  <linearGradient id="facet-4" x1="50" y1="120" x2="15" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#92400e"/>
                    <stop offset="1" stopColor="#451a03"/>
                  </linearGradient>
                  <linearGradient id="facet-5" x1="15" y1="60" x2="50" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f59e0b"/>
                    <stop offset="1" stopColor="#78350f"/>
                  </linearGradient>
                  <linearGradient id="facet-6" x1="85" y1="60" x2="50" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fbbf24"/>
                    <stop offset="1" stopColor="#92400e"/>
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

        </div>

        {/* Ethereal Realm Gauges */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24 p-8 rounded-none border border-amber-500/10 bg-[#080511]/70 backdrop-blur-xl shadow-2xl"
        >
          {realmStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left p-4 hover:bg-white/[0.01] transition-all duration-300">
                <div className={`flex h-11 w-11 items-center justify-center rounded-none border border-amber-500/15 bg-amber-500/5 ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                  <p className="font-display text-lg font-black text-white mt-0.5">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
