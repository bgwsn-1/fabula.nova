import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Trophy, Users, MonitorSmartphone } from 'lucide-react';

export default function Features() {
  const list = [
    {
      id: '01',
      tag: 'Gameplay',
      title: 'Fast Logins & Anti-Lag',
      desc: 'Connect in seconds with optimized UDP packets, reliable ENet infrastructure, and servers optimized for 24/7 high-speed performance.',
      icon: ShieldCheck,
      color: 'from-violet-500/20 to-fuchsia-500/20',
      glow: 'group-hover:bg-violet-500/15',
    },
    {
      id: '02',
      tag: 'Items',
      title: 'Starlight Custom Crystals',
      desc: 'Collect server-exclusive items, wings, customizable crystal tools, and custom weapons with beautiful animations.',
      icon: Sparkles,
      color: 'from-fuchsia-500/20 to-cyan-500/20',
      glow: 'group-hover:bg-fuchsia-500/15',
    },
    {
      id: '03',
      tag: 'Events',
      title: 'Boss Raids & Tournaments',
      desc: 'Compete in automated seasonal boss battles, starlight raid worlds, and level up with special server drops.',
      icon: Trophy,
      color: 'from-cyan-500/20 to-emerald-500/20',
      glow: 'group-hover:bg-cyan-500/15',
    },
    {
      id: '04',
      tag: 'Economy',
      title: 'Balanced Player Economy',
      desc: 'Participate in secure marketplace trades, guild auctions, and anti-dupe security protocols that keep gems valuable.',
      icon: Users,
      color: 'from-emerald-500/20 to-violet-500/20',
      glow: 'group-hover:bg-emerald-500/15',
    },
    {
      id: '05',
      tag: 'Platform',
      title: 'Cross-Device Playability',
      desc: 'Easily switch between devices with fully optimized binaries for Android, Windows, macOS, and DNS Tunnel networks.',
      icon: MonitorSmartphone,
      color: 'from-violet-500/20 to-cyan-500/20',
      glow: 'group-hover:bg-violet-500/15',
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: idx * 0.1, type: 'spring' as const, stiffness: 80 },
    }),
  };

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-150px] w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-150px] w-[500px] h-[500px] rounded-full bg-fuchsia-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <span className="text-xs uppercase font-bold tracking-[0.4em] text-violet-400">
            FabulaNova Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Built For The <span className="animated-gradient-text">True Explorer</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            FabulaNova delivers a fully customized sandbox with state-of-the-art infrastructure. Designed by Growtopia experts, enjoyed by players.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <motion.article
                key={item.id}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[30px] border border-white/5 bg-cosmic-card p-8 transition duration-500 hover:border-violet-500/30 hover:shadow-[0_0_35px_rgba(139,92,246,0.1)] hover:-translate-y-1"
              >
                {/* Glow layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition duration-500 group-hover:opacity-100`} />
                <div className={`absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/5 blur-[90px] transition duration-500 ${item.glow}`} />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-300 shadow-md group-hover:border-violet-400/30 group-hover:text-white transition duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600 group-hover:text-violet-400 transition duration-300">
                      {item.id}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="space-y-2 text-left">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-400/80">
                      {item.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white group-hover:text-violet-200 transition duration-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="relative z-10 flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-wider text-violet-400/70 group-hover:text-violet-300 transition duration-300 text-left">
                  <span>Explore system</span>
                  <svg className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                  </svg>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
