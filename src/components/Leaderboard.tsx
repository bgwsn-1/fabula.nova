import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gem, Award, Star } from 'lucide-react';

interface Player {
  rank: number;
  name: string;
  score: string;
  level: number;
  world: string;
  guild: string;
  online: boolean;
}

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<'gems' | 'level' | 'guilds'>('gems');

  const topGems: Player[] = [
    { rank: 1, name: 'Sasaki', score: '1,420,950', level: 125, world: 'STARTWORLD', guild: 'Valhalla', online: true },
    { rank: 2, name: 'NovaKing', score: '1,120,400', level: 98, world: 'NOVACOSMIC', guild: 'Starlight', online: true },
    { rank: 3, name: 'Valkyrie', score: '984,200', level: 110, world: 'VALKSHOP', guild: 'Valhalla', online: false },
    { rank: 4, name: 'Kaguya', score: '820,500', level: 85, world: 'MOONSHOP', guild: 'Shinobi', online: true },
    { rank: 5, name: 'Chronos', score: '784,100', level: 104, world: 'TIMECASTLE', guild: 'Chronology', online: false },
    { rank: 6, name: 'Aether', score: '695,000', level: 90, world: 'AETHERSTORE', guild: 'Starlight', online: true },
    { rank: 7, name: 'ReU_Dev', score: '640,000', level: 120, world: 'DEVHOUSE', guild: 'Administrators', online: true },
    { rank: 8, name: 'Zephyrus', score: '592,000', level: 78, world: 'ZEPHYR', guild: 'Shinobi', online: false },
  ];

  const topLevels: Player[] = [
    { rank: 1, name: 'Sasaki', score: 'Level 125', level: 125, world: 'STARTWORLD', guild: 'Valhalla', online: true },
    { rank: 2, name: 'ReU_Dev', score: 'Level 120', level: 120, world: 'DEVHOUSE', guild: 'Administrators', online: true },
    { rank: 3, name: 'Valkyrie', score: 'Level 110', level: 110, world: 'VALKSHOP', guild: 'Valhalla', online: false },
    { rank: 4, name: 'Chronos', score: 'Level 104', level: 104, world: 'TIMECASTLE', guild: 'Chronology', online: false },
    { rank: 5, name: 'NovaKing', score: 'Level 98', level: 98, world: 'NOVACOSMIC', guild: 'Starlight', online: true },
    { rank: 6, name: 'Aether', score: 'Level 90', level: 90, world: 'AETHERSTORE', guild: 'Starlight', online: true },
    { rank: 7, name: 'Kaguya', score: 'Level 85', level: 85, world: 'MOONSHOP', guild: 'Shinobi', online: true },
    { rank: 8, name: 'Zephyrus', score: 'Level 78', level: 78, world: 'ZEPHYR', guild: 'Shinobi', online: false },
  ];

  const topGuilds: Player[] = [
    { rank: 1, name: 'Valhalla', score: '98,400 XP', level: 25, world: 'VALHALLA', guild: 'Leader: Sasaki', online: true },
    { rank: 2, name: 'Starlight', score: '84,100 XP', level: 22, world: 'STARLIGHT', guild: 'Leader: NovaKing', online: true },
    { rank: 3, name: 'Shinobi', score: '69,200 XP', level: 18, world: 'SHINOBI', guild: 'Leader: Kaguya', online: false },
    { rank: 4, name: 'Chronology', score: '58,400 XP', level: 15, world: 'CHRONOLOGY', guild: 'Leader: Chronos', online: false },
    { rank: 5, name: 'Administrators', score: '50,000 XP', level: 99, world: 'ADMIN', guild: 'Leader: ReU_Dev', online: true },
  ];

  const currentList = activeTab === 'gems' ? topGems : activeTab === 'level' ? topLevels : topGuilds;
  const podiumData = currentList.slice(0, 3);
  const listData = currentList.slice(3);

  // Reorder for podium presentation: [2nd, 1st, 3rd]
  const podiumDisplay = [
    podiumData[1], // 2nd place
    podiumData[0], // 1st place
    podiumData[2], // 3rd place
  ].filter(Boolean);

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-amber-500 text-amber-950 shadow-[0_0_20px_rgba(245,158,11,0.4)]';
      case 2: return 'from-zinc-300 to-zinc-400 text-zinc-950 shadow-[0_0_20px_rgba(209,213,219,0.3)]';
      case 3: return 'from-amber-600 to-amber-700 text-amber-50 shadow-[0_0_20px_rgba(180,83,9,0.3)]';
      default: return 'bg-zinc-800 text-zinc-300';
    }
  };

  const getRankTitle = (rank: number) => {
    switch (rank) {
      case 1: return '1ST';
      case 2: return '2ND';
      case 3: return '3RD';
      default: return `${rank}TH`;
    }
  };

  return (
    <section id="leaderboard" className="relative py-24 sm:py-32 overflow-hidden bg-[#030107]">
      {/* Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.1),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.4em] text-violet-400">
            Fabula Hall of Fame
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Top Cosmic <span className="animated-gradient-text">Explorers</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            The legendary pioneers carving their names in the starlight skies of FabulaNova.
          </p>

          {/* Navigation tabs */}
          <div className="inline-flex rounded-full border border-white/5 bg-white/[0.03] p-1.5 backdrop-blur-md mt-6">
            <button
              onClick={() => setActiveTab('gems')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition duration-300 ${
                activeTab === 'gems' ? 'bg-violet-600 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Gem className="h-4 w-4" />
              Gems
            </button>
            <button
              onClick={() => setActiveTab('level')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition duration-300 ${
                activeTab === 'level' ? 'bg-violet-600 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Award className="h-4 w-4" />
              Level
            </button>
            <button
              onClick={() => setActiveTab('guilds')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase transition duration-300 ${
                activeTab === 'guilds' ? 'bg-violet-600 text-white shadow-lg' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Star className="h-4 w-4" />
              Guilds
            </button>
          </div>
        </div>

        {/* Podium Display */}
        <div className="grid gap-6 md:grid-cols-3 items-end max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            {podiumDisplay.map((player) => {
              const isFirst = player.rank === 1;
              const heightClass = isFirst ? 'h-[300px] md:order-2' : player.rank === 2 ? 'h-[250px] md:order-1' : 'h-[220px] md:order-3';
              
              return (
                <motion.div
                  key={player.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                  className={`relative flex flex-col justify-end items-center rounded-3xl border border-white/5 bg-cosmic-card p-6 ${heightClass} ${
                    isFirst ? 'border-violet-500/20 shadow-[0_0_50px_rgba(139,92,246,0.15)] bg-gradient-to-t from-violet-950/20 to-cosmic-card' : ''
                  }`}
                >
                  {/* Rank Badge */}
                  <div className={`absolute top-[-20px] flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r font-display font-black text-sm ${getRankBadgeColor(player.rank)}`}>
                    {getRankTitle(player.rank)}
                  </div>

                  {/* Character/Guild Avatar Symbol */}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-violet-300 mb-4 ${
                    isFirst ? 'scale-110 shadow-lg border-violet-400/30 text-violet-100' : ''
                  }`}>
                    {activeTab === 'guilds' ? (
                      <Star className="h-6 w-6" />
                    ) : (
                      <Award className="h-6 w-6" />
                    )}
                  </div>

                  {/* Name and Guild */}
                  <div className="text-center space-y-1">
                    <p className={`font-display font-bold text-lg text-white ${isFirst ? 'text-xl font-black text-violet-200' : ''}`}>
                      {player.name}
                    </p>
                    <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                      {player.guild}
                    </p>
                  </div>

                  {/* Score Indicator */}
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                    {activeTab === 'gems' && <Gem className="h-3.5 w-3.5 text-violet-400" />}
                    <span className="text-xs font-black text-zinc-200">{player.score}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Row List table (Rank 4+) */}
        {listData.length > 0 && (
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/5 bg-cosmic-card backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 text-zinc-500 text-xs font-bold uppercase tracking-wider">
                    <th className="py-4 px-6">Rank</th>
                    <th className="py-4 px-6">Name</th>
                    <th className="py-4 px-6">Guild</th>
                    <th className="py-4 px-6 text-right">
                      {activeTab === 'gems' ? 'Gems Balance' : activeTab === 'level' ? 'Level' : 'Guild XP'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  <AnimatePresence mode="popLayout">
                    {listData.map((player) => (
                      <motion.tr
                        key={player.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-white/[0.01] transition duration-200"
                      >
                        {/* Rank */}
                        <td className="py-4 px-6">
                          <span className="font-display font-bold text-zinc-500">#{player.rank}</span>
                        </td>
                        
                        {/* Player name with status indicator */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="relative flex">
                              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-violet-400 font-bold text-xs">
                                {player.name.substring(0, 2).toUpperCase()}
                              </div>
                              {player.online && (
                                <span className="absolute bottom-[-2px] right-[-2px] flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-cosmic-black" />
                              )}
                            </div>
                            <span className="font-semibold text-zinc-200">{player.name}</span>
                          </div>
                        </td>

                        {/* Guild */}
                        <td className="py-4 px-6">
                          <span className="text-zinc-400 font-medium text-xs sm:text-sm">{player.guild}</span>
                        </td>

                        {/* Balance */}
                        <td className="py-4 px-6 text-right font-black text-white">
                          <div className="inline-flex items-center gap-1.5">
                            {activeTab === 'gems' && <Gem className="h-3.5 w-3.5 text-violet-400" />}
                            <span>{player.score}</span>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
