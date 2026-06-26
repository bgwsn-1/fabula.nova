import { MessageSquare, Phone, Star, Users } from 'lucide-react';

export default function Community() {
  const cards = [
    {
      name: 'Discord Guild',
      eyebrow: 'Community Hub',
      desc: 'Join our main transmission center to participate in community discussions, trade worlds, report bugs, and chat with staff.',
      icon: MessageSquare,
      stat: '1,420 Online Explorers',
      btnLabel: 'Join Discord Server',
      url: 'https://discord.gg/fabulanova',
      color: 'border-violet-500/20 bg-violet-600/5 hover:border-violet-400/40 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.1)]',
      btnClass: 'bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/30',
    },
    {
      name: 'WhatsApp Group',
      eyebrow: 'Local Channels',
      desc: 'Connect with local Indonesian players, join localized guild groupchats, share instant drop pictures, and chat on mobile.',
      icon: Phone,
      stat: '850 Chatting Members',
      btnLabel: 'Join WA Group',
      url: 'https://chat.whatsapp.com/fabulanova',
      color: 'border-emerald-500/20 bg-emerald-600/5 hover:border-emerald-400/40 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.1)]',
      btnClass: 'bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30',
    }
  ];

  return (
    <section id="community" className="relative py-24 sm:py-32 overflow-hidden bg-[#040108]">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        {/* Glow */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 stars-bg opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Banner header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.4em] text-violet-400">
            Fabula Transmission
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Connected Across <span className="animated-gradient-text">The Galaxy</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Explore our communication nodes and stay updated on the latest server updates, patches, and starlight events.
          </p>
        </div>

        {/* Channels Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-16">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.name}
                className={`relative flex flex-col justify-between overflow-hidden rounded-[32px] border p-6 sm:p-8 backdrop-blur-xl transition duration-300 ${card.color}`}
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      {card.eyebrow}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{card.name}</h3>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                  {/* Stats bubble */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                    <Users className="h-3.5 w-3.5 text-violet-400" />
                    <span>{card.stat}</span>
                  </div>

                  {/* Join Action button */}
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-xl px-5 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white transition duration-300 ${card.btnClass}`}
                  >
                    {card.btnLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simulated feedback or developer notes block */}
        <div className="max-w-4xl mx-auto rounded-[32px] border border-white/5 bg-white/[0.01] p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Star className="h-4 w-4 text-violet-400 fill-violet-400" />
              RDP IP address redirected automatically
            </h4>
            <p className="text-zinc-500 text-xs sm:text-sm max-w-xl">
              Our proxy nodes handle all port routing (ENet channels 0 & 1). Standard UDP tunneling applies for all connections. No client modifications required.
            </p>
          </div>
          <a
            href="#tutorial"
            className="flex-shrink-0 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-bold text-zinc-300 transition duration-300"
          >
            Setup redirector
          </a>
        </div>

      </div>
    </section>
  );
}
