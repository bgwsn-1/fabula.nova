import { MessageSquare, Phone, Users } from 'lucide-react';

export default function Community() {
  const rifts = [
    {
      name: 'Sanctuary Rift',
      eyebrow: 'Discord Transmission',
      desc: 'Step into the primary gathering chambers to converse with realm gatekeepers, resolve errors, coordinate guild campaigns, and trade items.',
      icon: MessageSquare,
      stat: '1,420 Souls connected',
      btnLabel: 'Open Rift Server',
      url: 'https://discord.gg/fabulanova',
      color: 'border-amber-500/20 bg-amber-500/[0.01] hover:border-amber-400/40 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.03)]',
      btnClass: 'border border-amber-500/30 text-amber-200 hover:bg-amber-500/5',
    },
    {
      name: 'Local Group Rift',
      eyebrow: 'WhatsApp Groupchat',
      desc: 'Join the Indonesian explorer circles to chat directly on mobile devices, swap trade offers, and collaborate with local guilds.',
      icon: Phone,
      stat: '850 Explorers online',
      btnLabel: 'Open Group Rift',
      url: 'https://chat.whatsapp.com/fabulanova',
      color: 'border-emerald-500/20 bg-emerald-500/[0.01] hover:border-emerald-400/40 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.03)]',
      btnClass: 'border border-emerald-500/30 text-emerald-200 hover:bg-emerald-500/5',
    }
  ];

  return (
    <section id="community" className="relative py-24 sm:py-32 overflow-hidden bg-[#020106]">
      {/* Background starlight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-violet-600/5 filter blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 star-field opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-display text-xs uppercase font-bold tracking-[0.4em] text-amber-400">
            The Congregation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Rift <span className="gold-text-gradient font-black">Portals</span>
          </h2>
          <p className="text-zinc-500 text-sm font-semibold">
            Establish connections with other starlight explorers across our communication network links.
          </p>
        </div>

        {/* Portal cards grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto mb-16">
          {rifts.map((rift) => {
            const Icon = rift.icon;
            return (
              <div
                key={rift.name}
                className={`relative flex flex-col justify-between overflow-hidden rounded-none border p-6 sm:p-8 backdrop-blur-xl transition duration-500 ${rift.color}`}
              >
                {/* Corner diamonds */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-amber-500/20" />
                <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-amber-500/20" />
                <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-amber-500/20" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-amber-500/20" />

                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                      {rift.eyebrow}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">{rift.name}</h3>
                  </div>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {rift.desc}
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-white/5">
                  {/* Status */}
                  <div className="inline-flex items-center gap-1.5 text-xs text-zinc-500 font-semibold">
                    <Users className="h-3.5 w-3.5 text-amber-500/60" />
                    <span>{rift.stat}</span>
                  </div>

                  {/* Button */}
                  <a
                    href={rift.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-none font-display text-[10px] tracking-widest uppercase font-bold px-5 py-2.5 text-center transition duration-300 ${rift.btnClass}`}
                  >
                    {rift.btnLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tunnel stats card */}
        <div className="max-w-4xl mx-auto border border-amber-500/10 bg-[#080512]/60 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-display text-sm font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <div className="w-1.5 h-1.5 rotate-45 bg-amber-400" />
              Gateway Port Redirection Active
            </h4>
            <p className="text-zinc-500 text-xs max-w-xl">
              Port forward mappings routing to RDP channels: ENet port 17000 (channel 0 & 1 auto-balanced). Realm proxy firewalls active 24/7.
            </p>
          </div>
          <a
            href="#tutorial"
            className="flex-shrink-0 font-display text-[10px] tracking-widest uppercase font-bold rounded-none border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-zinc-300 transition duration-300"
          >
            Ascension Node
          </a>
        </div>

      </div>
    </section>
  );
}
