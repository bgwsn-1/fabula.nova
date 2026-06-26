import { motion } from 'framer-motion';
import { Activity, ShieldAlert, Users, Award, Gem } from 'lucide-react';

export default function Features() {
  const list = [
    {
      id: 'I',
      tag: 'Connectivity',
      title: 'Crystal of Velocity',
      desc: 'Optimized reliable UDP protocols utilizing direct ENet architectures. Experience low-latency server connections with zero packet leakage.',
      icon: Activity,
      border: 'border-cyan-500/20 hover:border-cyan-400/40',
      glow: 'bg-cyan-500/5',
      textGlow: 'text-cyan-300',
    },
    {
      id: 'II',
      tag: 'Genesis',
      title: 'Crystal of Genesis',
      desc: 'Unlock server-exclusive starlight crystal items, cosmic accessories, customizable items databases, and beautiful block textures.',
      icon: Gem,
      border: 'border-fuchsia-500/20 hover:border-fuchsia-400/40',
      glow: 'bg-fuchsia-500/5',
      textGlow: 'text-fuchsia-300',
    },
    {
      id: 'III',
      tag: 'Crusade',
      title: 'Crystal of Crusade',
      desc: 'Ascend by conquering realm raid dungeons, monthly automated starlight tournaments, and cooperative guild challenges.',
      icon: Award,
      border: 'border-amber-500/20 hover:border-amber-400/40',
      glow: 'bg-amber-500/5',
      textGlow: 'text-amber-300',
    },
    {
      id: 'IV',
      tag: 'Secured Economy',
      title: 'Crystal of Commerce',
      desc: 'Participate in secure marketplace bidding. Fully audited anti-duplication security systems guarantee gem and item values remain stable.',
      icon: Users,
      border: 'border-emerald-500/20 hover:border-emerald-400/40',
      glow: 'bg-emerald-500/5',
      textGlow: 'text-emerald-300',
    },
    {
      id: 'V',
      tag: 'Convergence',
      title: 'Crystal of Convergence',
      desc: 'Unified realm connection nodes compiled for Android devices, native Windows systems, and macOS DNS routing setups.',
      icon: ShieldAlert,
      border: 'border-purple-500/20 hover:border-purple-400/40',
      glow: 'bg-purple-500/5',
      textGlow: 'text-purple-300',
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
      transition: { duration: 0.5, delay: idx * 0.1, type: 'spring' as const, stiffness: 80 },
    }),
  };

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-[#020106]">
      {/* Grid line background */}
      <div className="absolute inset-0 z-0 bg-[#020106]">
        <div className="absolute inset-0 cosmic-grid opacity-20"></div>
        <div className="absolute top-[30%] right-[-100px] w-[400px] h-[400px] rounded-full bg-amber-500/5 filter blur-[120px] pointer-events-none" />
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
          <span className="font-display text-xs uppercase font-bold tracking-[0.4em] text-amber-400">
            Realm Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Crystals of <span className="gold-text-gradient font-black">Ascension</span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-semibold">
            Discover the custom features and ENet-optimized infrastructures powering the realm of FabulaNova.
          </p>
        </motion.div>

        {/* Crystals Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
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
                className={`relative flex flex-col justify-between overflow-hidden rounded-none border ${item.border} ${item.glow} p-8 hover:shadow-[0_0_30px_rgba(251,191,36,0.05)] transition-all duration-500`}
              >
                {/* Thin gold decorative diamonds on corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/20" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500/20" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/20" />

                {/* Content */}
                <div className="space-y-6">
                  {/* Top Row: Runic ID & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-none border border-white/5 bg-white/[0.02] ${item.textGlow}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-zinc-600 tracking-wider">
                      {item.id}
                    </span>
                  </div>

                  {/* Body Text */}
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

                {/* Bottom link decorated with JRPG diamond */}
                <div className="flex items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-amber-300 transition duration-300 text-left cursor-pointer">
                  <div className="w-1.5 h-1.5 rotate-45 bg-amber-500/40" />
                  <span>Channel Crystal</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
