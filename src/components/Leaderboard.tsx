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
  ];

  const topLevels: Player[] = [
    { rank: 1, name: 'Sasaki', score: 'Level 125', level: 125, world: 'STARTWORLD', guild: 'Valhalla', online: true },
    { rank: 2, name: 'ReU_Dev', score: 'Level 120', level: 120, world: 'DEVHOUSE', guild: 'Administrators', online: true },
    { rank: 3, name: 'Valkyrie', score: 'Level 110', level: 110, world: 'VALKSHOP', guild: 'Valhalla', online: false },
    { rank: 4, name: 'Chronos', score: 'Level 104', level: 104, world: 'TIMECASTLE', guild: 'Chronology', online: false },
    { rank: 5, name: 'NovaKing', score: 'Level 98', level: 98, world: 'NOVACOSMIC', guild: 'Starlight', online: true },
    { rank: 6, name: 'Aether', score: 'Level 90', level: 90, world: 'AETHERSTORE', guild: 'Starlight', online: true },
    { rank: 7, name: 'Kaguya', score: 'Level 85', level: 85, world: 'MOONSHOP', guild: 'Shinobi', online: true },
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

  // Podium order: [2nd, 1st, 3rd]
  const podiumDisplay = [
    podiumData[1], // 2nd
    podiumData[0], // 1st
    podiumData[2], // 3rd
  ].filter(Boolean);

  const getRankBorders = (rank: number) => {
    switch (rank) {
      case 1: return 'border-amber-500/30 shadow-[0_0_35px_rgba(251,191,36,0.1)]';
      case 2: return 'border-zinc-400/20 shadow-[0_0_20px_rgba(255,255,255,0.03)]';
      case 3: return 'border-amber-700/20 shadow-[0_0_20px_rgba(180,83,9,0.03)]';
      default: return 'border-white/5';
    }
  };

  const getRankBadgeClass = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-amber-400 text-black border-amber-300';
      case 2: return 'bg-zinc-400 text-black border-zinc-300';
      case 3: return 'bg-amber-700 text-amber-100 border-amber-600';
      default: return 'bg-zinc-800 text-zinc-400 border-zinc-700';
    }
  };

  const getRomanRank = (rank: number) => {
    switch (rank) {
      case 1: return 'I';
      case 2: return 'II';
      case 3: return 'III';
      case 4: return 'IV';
      case 5: return 'V';
      case 6: return 'VI';
      case 7: return 'VII';
      case 8: return 'VIII';
      default: return rank.toString();
    }
  };

  return (
    <section id="leaderboard" className="relative py-24 sm:py-32 overflow-hidden bg-[#030107]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(251,191,36,0.04),transparent_55%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-display text-xs uppercase font-bold tracking-[0.4em] text-amber-400">
            Celestial Archives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Mythic <span className="gold-text-gradient font-black">Legends</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm font-semibold">
            Explore the historical index of pioneers currently leading the realm of FabulaNova.
          </p>

          {/* JRPG Tab buttons */}
          <div className="inline-flex rounded-none border border-amber-500/10 bg-amber-500/[0.02] p-1.5 backdrop-blur-md mt-8">
            <button
              onClick={() => setActiveTab('gems')}
              className={`flex items-center gap-2 rounded-none px-6 py-2.5 font-display text-[10px] tracking-widest uppercase font-bold transition duration-300 ${
                activeTab === 'gems' 
                  ? 'bg-amber-500/10 text-amber-300 border border-amber-400/20' 
                  : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              <Gem className="h-3.5 w-3.5" />
              Gems Balance
            </button>
            <button
              onClick={() => setActiveTab('level')}
              className={`flex items-center gap-2 rounded-none px-6 py-2.5 font-display text-[10px] tracking-widest uppercase font-bold transition duration-300 ${
                activeTab === 'level' 
                  ? 'bg-amber-500/10 text-amber-300 border border-amber-400/20' 
                  : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              Ascent levels
            </button>
            <button
              onClick={() => setActiveTab('guilds')}
              className={`flex items-center gap-2 rounded-none px-6 py-2.5 font-display text-[10px] tracking-widest uppercase font-bold transition duration-300 ${
                activeTab === 'guilds' 
                  ? 'bg-amber-500/10 text-amber-300 border border-amber-400/20' 
                  : 'text-zinc-500 hover:text-zinc-200'
              }`}
            >
              <Star className="h-3.5 w-3.5" />
              Guild Realms
            </button>
          </div>
        </div>

        {/* Podium Display */}
        <div className="grid gap-6 md:grid-cols-3 items-end max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            {podiumDisplay.map((player) => {
              const isFirst = player.rank === 1;
              const heightClass = isFirst ? 'h-[280px] md:order-2' : player.rank === 2 ? 'h-[240px] md:order-1' : 'h-[220px] md:order-3';
              
              return (
                <motion.div
                  key={player.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className={`relative flex flex-col justify-end items-center rounded-none border bg-[#090513]/50 p-6 ${heightClass} ${getRankBorders(player.rank)}`}
                >
                  {/* Decorative corner diamonds */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-amber-500/20" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-amber-500/20" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-amber-500/20" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-amber-500/20" />

                  {/* Rank Badge */}
                  <div className={`absolute top-[-16px] flex h-8 w-8 items-center justify-center border font-display font-black text-xs rotate-45 ${getRankBadgeClass(player.rank)}`}>
                    <div className="-rotate-45 font-black">{getRomanRank(player.rank)}</div>
                  </div>

                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-none border border-white/5 bg-white/[0.02] text-amber-300 mb-4 ${
                    isFirst ? 'scale-110 border-amber-400/20' : ''
                  }`}>
                    {activeTab === 'guilds' ? <Star className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                  </div>

                  {/* Name and Guild */}
                  <div className="text-center space-y-1">
                    <p className={`font-display font-bold text-base text-white ${isFirst ? 'text-lg text-amber-200' : ''}`}>
                      {player.name}
                    </p>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                      {player.guild}
                    </p>
                  </div>

                  {/* Score */}
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-none border border-white/5 bg-white/[0.02] px-3 py-1 font-display text-xs text-zinc-300 font-bold">
                    <span>{player.score}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Rows table (Rank 4+) */}
        {listData.length > 0 && (
          <div className="max-w-4xl mx-auto overflow-hidden rounded-none border border-amber-500/10 bg-[#090513]/40 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-amber-500/10 text-zinc-500 font-display text-[10px] font-bold uppercase tracking-[0.2em]">
                    <th className="py-4 px-6">Rank</th>
                    <th className="py-4 px-6">Legend Name</th>
                    <th className="py-4 px-6">Guild Realm</th>
                    <th className="py-4 px-6 text-right">Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  <AnimatePresence mode="popLayout">
                    {listData.map((player) => (
                      <motion.tr
                        key={player.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-white/[0.01] transition-all duration-200"
                      >
                        {/* Rank */}
                        <td className="py-4 px-6">
                          <span className="font-display font-black text-zinc-500 tracking-wider">
                            #{getRomanRank(player.rank)}
                          </span>
                        </td>
                        
                        {/* Name */}
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/5 text-amber-300 text-xs font-bold font-display">
                                {player.name.substring(0, 2).toUpperCase()}
                              </div>
                              {player.online && (
                                <span className="absolute bottom-[-1px] right-[-1px] flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] ring-1 ring-cosmic-black" />
                              )}
                            </div>
                            <span className="font-semibold text-zinc-200">{player.name}</span>
                          </div>
                        </td>

                        {/* Guild */}
                        <td className="py-4 px-6">
                          <span className="text-zinc-500 font-medium text-xs sm:text-sm">{player.guild}</span>
                        </td>

                        {/* Balance */}
                        <td className="py-4 px-6 text-right font-display text-xs sm:text-sm font-bold text-amber-200">
                          {player.score}
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
