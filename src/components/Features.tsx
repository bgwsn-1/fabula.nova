import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Award, Users, MonitorSmartphone } from 'lucide-react';

export default function Features() {
  const list = [
    {
      id: 'I',
      tag: 'Connections',
      title: 'Velocity Engine',
      desc: 'Optimized reliable UDP protocols utilizing ENet architectures. Experience low-latency server connections with zero packet leakage.',
      icon: Activity,
      border: 'border-emerald-500/10 hover:border-emerald-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] bg-emerald-500/[0.01]',
      color: 'text-emerald-400',
    },
    {
      id: 'II',
      tag: 'Sandbox Crafting',
      title: 'Genesis Items Database',
      desc: 'Collect server-exclusive starlight crystal items, custom wings, customizable items databases, and retro block textures.',
      icon: ShieldCheck,
      border: 'border-sky-500/10 hover:border-sky-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] bg-sky-500/[0.01]',
      color: 'text-sky-400',
    },
    {
      id: 'III',
      tag: 'Quests',
      title: 'Crusade Boss Raids',
      desc: 'Fight in automated seasonal boss battles, clear starlight dungeon realms, and ascend the player level ladder.',
      icon: Award,
      border: 'border-amber-500/10 hover:border-amber-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] bg-amber-500/[0.01]',
      color: 'text-amber-400',
    },
    {
      id: 'IV',
      tag: 'Trade Realm',
      title: 'Diamond Lock Security',
      desc: 'Engage in secure player-to-player trading channels. Fully audited anti-duplication security protects your items and gem balances.',
      icon: Users,
      border: 'border-purple-500/10 hover:border-purple-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] bg-purple-500/[0.01]',
      color: 'text-purple-400',
    },
    {
      id: 'V',
      tag: 'Multiplatform',
      title: 'Portal Convergence',
      desc: 'Switch between devices instantly with optimized application clients for Android (APK), Windows PC, and macOS.',
      icon: MonitorSmartphone,
      border: 'border-teal-500/10 hover:border-teal-500/30',
      glow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] bg-teal-500/[0.01]',
      color: 'text-teal-400',
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: idx * 0.08, type: 'spring' as const, stiffness: 90 },
    }),
  };

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-[#060813]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[-150px] w-[500px] h-[500px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <span className="font-display text-xs uppercase font-bold tracking-[0.4em] text-emerald-400">
            Realm Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Blocks of <span className="gem-text-gradient font-black">FabulaNova</span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-semibold">
            Unpack the custom components and optimized structures designed specifically for our player base.
          </p>
        </motion.div>

        {/* Features Card List */}
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
                className={`relative flex flex-col justify-between overflow-hidden rounded-[32px] border ${item.border} ${item.glow} p-8 transition-all duration-400`}
              >
                {/* Content */}
                <div className="space-y-6">
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/5 ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-zinc-600">
                      BLOCK {item.id}
                    </span>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-2 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                      {item.tag}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom link decorated with custom circle dot */}
                <div className="flex items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-400 transition duration-300 text-left cursor-pointer">
                  <span className={`h-2 w-2 rounded-full bg-current ${item.color}`} />
                  <span>Inspect Realm Block</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
