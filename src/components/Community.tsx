import { MessageSquare, Phone, Users, ShieldAlert } from 'lucide-react';

export default function Community() {
  const rifts = [
    {
      name: 'Sanctuary Guild',
      eyebrow: 'Discord Server',
      desc: 'Join the central hub to chat with staff, report issues, trade rare items, participate in starlight gem giveaways, and receive direct patch notes.',
      icon: MessageSquare,
      stat: '1,420 connected',
      btnLabel: 'Join Server',
      url: 'https://discord.gg/fabulanova',
      color: 'border-emerald-500/10 bg-emerald-500/[0.01] hover:border-emerald-500/30 text-emerald-400 shadow-[0_4px_25px_rgba(0,0,0,0.15)]',
      btnClass: 'bg-gradient-to-r from-emerald-400 to-teal-500 text-black shadow-md',
    },
    {
      name: 'WhatsApp Community',
      eyebrow: 'Local Mobile Groupchat',
      desc: 'Join localized Indonesian group chats to interact directly on your phone, arrange item drops, and trade starlight items securely.',
      icon: Phone,
      stat: '850 members',
      btnLabel: 'Join Group',
      url: 'https://chat.whatsapp.com/fabulanova',
      color: 'border-sky-500/10 bg-sky-500/[0.01] hover:border-sky-500/30 text-sky-400 shadow-[0_4px_25px_rgba(0,0,0,0.15)]',
      btnClass: 'bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md',
    }
  ];

  return (
    <section id="community" className="relative py-24 sm:py-32 overflow-hidden bg-[#060813]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 filter blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 sandbox-stars opacity-15"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-display text-xs uppercase font-bold tracking-[0.4em] text-emerald-400">
            The Gathering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Realm <span className="gem-text-gradient font-black">Portals</span>
          </h2>
          <p className="text-zinc-500 text-sm font-semibold">
            Establish links with other starlight sandbox explorers across our public chat groups.
          </p>
        </div>

        {/* Portal cards grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto mb-16">
          {rifts.map((rift) => {
            const Icon = rift.icon;
            return (
              <div
                key={rift.name}
                className={`relative flex flex-col justify-between overflow-hidden rounded-[32px] border p-6 sm:p-8 backdrop-blur-xl transition duration-300 ${rift.color}`}
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                      {rift.eyebrow}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-white">
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
                    <Users className="h-3.5 w-3.5 text-emerald-400/60" />
                    <span>{rift.stat}</span>
                  </div>

                  {/* Button */}
                  <a
                    href={rift.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full font-display text-[10px] tracking-wider uppercase font-bold px-5 py-2.5 text-center transition duration-300 ${rift.btnClass}`}
                  >
                    {rift.btnLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tunnel stats card */}
        <div className="max-w-3xl mx-auto rounded-[32px] border border-white/5 bg-[#0b0e25]/60 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h4 className="font-display text-sm font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <ShieldAlert className="h-4.5 w-4.5 text-emerald-400" />
              Gateway Port Redirections
            </h4>
            <p className="text-zinc-500 text-xs max-w-xl">
              Port forward mappings routing to RDP channels: ENet port 17000 (channel 0 & 1 auto-balanced). Realm proxy firewalls active 24/7.
            </p>
          </div>
          <a
            href="#tutorial"
            className="flex-shrink-0 font-display text-[10px] tracking-wider uppercase font-bold rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-zinc-300 transition duration-300"
          >
            Redirection Node
          </a>
        </div>

      </div>
    </section>
  );
}
