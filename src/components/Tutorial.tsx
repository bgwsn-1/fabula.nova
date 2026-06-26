import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Monitor, Download, Cpu, Wifi } from 'lucide-react';

interface GuideStep {
  number: number;
  text: string;
  isDownload?: boolean;
  downloadUrl?: string;
  downloadLabel?: string;
  subText?: string;
}

export default function Tutorial() {
  const [activePlatform, setActivePlatform] = useState<'apk' | 'windows' | 'macos' | 'dns'>('apk');

  const guides: Record<'apk' | 'windows' | 'macos' | 'dns', {
    title: string;
    sub: string;
    icon: any;
    steps: GuideStep[];
  }> = {
    apk: {
      title: 'Android Ascension',
      sub: 'Install the native client to access FabulaNova directly on mobile.',
      icon: Smartphone,
      steps: [
        { number: 1, text: 'Uninstall official Growtopia versions to avoid security collisions.' },
        { number: 2, text: 'Enable "Unknown Sources" verification inside settings to load files.' },
        { 
          number: 3, 
          text: 'Download the starlight client APK package.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-apk',
          downloadLabel: 'Download Android Client APK',
          subText: 'Payload: 135 MB • Version: 1.4.2'
        },
        { number: 4, text: 'Open the launcher, allow starlight indices extraction, and log in!' }
      ]
    },
    windows: {
      title: 'Windows Sanctuary',
      sub: 'Run the optimized RDP proxy launcher for high FPS gaming on PC.',
      icon: Monitor,
      steps: [
        { number: 1, text: 'Ensure official Growtopia installation is present on your storage.' },
        { 
          number: 2, 
          text: 'Download the lightweight RDP proxy package.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-win',
          downloadLabel: 'Download RDP Windows Launcher',
          subText: 'Payload: 12.4 MB • Version: 2.1.0'
        },
        { number: 3, text: 'Extract file directories into a dedicated workspace.' },
        { number: 4, text: 'Launch "FabulaNova.exe" and click Connect to automatically reroute client paths!' }
      ]
    },
    macos: {
      title: 'macOS Core Redirect',
      sub: 'Setup a secure local redirect configuration on Mac.',
      icon: Cpu,
      steps: [
        { number: 1, text: 'Verify installation of standard Growtopia for Mac.' },
        { 
          number: 2, 
          text: 'Download the macOS local configuration rules.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-mac',
          downloadLabel: 'Download macOS profile config',
          subText: 'Payload: 1.2 MB • Profile'
        },
        { number: 3, text: 'Load the config profile within System Settings -> Profiles.' },
        { number: 4, text: 'Initialize your launcher to start playing natively!' }
      ]
    },
    dns: {
      title: 'Hosts Redirect (No-Root / iOS)',
      sub: 'Tunnel peer traffic utilizing secure DNS Cloaking tools.',
      icon: Wifi,
      steps: [
        { number: 1, text: 'Install DNSCloak (iOS) or HostsGo (Android) from application stores.' },
        { number: 2, text: 'Declare custom redirections targeting our RDP node ip address.' },
        { 
          number: 3, 
          text: 'Load the domain config mapping table.',
          isDownload: true,
          downloadUrl: 'https://pastebin.com/raw/fabulanova-hosts',
          downloadLabel: 'Open Realm Redirection Host rules',
          subText: 'RDP Address: 103.189.140.22'
        },
        { number: 4, text: 'Toggle VPN service inside the utility, then open official apps to play!' }
      ]
    }
  };

  const platforms = [
    { id: 'apk', label: 'Android APK', icon: Smartphone },
    { id: 'windows', label: 'Windows PC', icon: Monitor },
    { id: 'macos', label: 'macOS Client', icon: Cpu },
    { id: 'dns', label: 'Hosts Redirect', icon: Wifi },
  ] as const;

  const currentGuide = guides[activePlatform];
  const PlatformIcon = currentGuide.icon;

  return (
    <section id="tutorial" className="relative py-24 sm:py-32 overflow-hidden bg-[#04010a]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 star-field opacity-10"></div>
        <div className="absolute bottom-[20%] left-[20%] w-[350px] h-[350px] rounded-full bg-amber-500/5 filter blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-display text-xs uppercase font-bold tracking-[0.4em] text-amber-400">
            Path of Ascension
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Connection <span className="gold-text-gradient font-black">Rituals</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm font-semibold">
            Choose your device structure and follow simple runic step logs to connect with the server.
          </p>
        </div>

        {/* Platforms selection tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const active = activePlatform === plat.id;
            return (
              <button
                key={plat.id}
                onClick={() => setActivePlatform(plat.id)}
                className={`flex items-center gap-2 rounded-none border px-5 py-3 text-xs font-display tracking-wider uppercase font-bold transition duration-300 ${
                  active 
                    ? 'border-amber-500/30 bg-amber-500/5 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.15)]' 
                    : 'border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="h-4 w-4" />
                {plat.label}
              </button>
            );
          })}
        </div>

        {/* Main Wizards container */}
        <div className="relative overflow-hidden rounded-none border border-amber-500/10 bg-[#090513]/40 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
          {/* Decorative corner diamonds */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/20" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-500/20" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-500/20" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/20" />

          {/* Header info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-white/5 text-left mb-8">
            <div className="flex h-12 w-12 items-center justify-center border border-amber-500/20 bg-amber-500/5 text-amber-300">
              <PlatformIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-display">Instructions</p>
              <h3 className="text-xl font-black font-display text-white mt-0.5">{currentGuide.title}</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-0.5">{currentGuide.sub}</p>
            </div>
          </div>

          {/* Wizard step loops */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.ol
                key={activePlatform}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                {currentGuide.steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    {/* Index Indicator */}
                    <div className="flex-shrink-0 flex h-7 w-7 items-center justify-center border border-amber-500/20 bg-amber-500/5 font-display font-black text-amber-300 text-xs rotate-45">
                      <div className="-rotate-45 font-black">{step.number}</div>
                    </div>

                    {/* Step Description copy */}
                    <div className="flex-1 space-y-4 pt-0.5 pl-2">
                      <p className="text-zinc-300 text-xs sm:text-sm font-semibold">
                        {step.text}
                      </p>

                      {/* Download package button block */}
                      {step.isDownload && (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-none border border-amber-500/10 bg-white/[0.01] hover:bg-white/[0.02] transition duration-300 mt-2">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center border border-zinc-500/20 text-zinc-400">
                              <Cpu className="h-4.5 w-4.5" />
                            </div>
                            <div className="text-left">
                              <p className="text-[9px] font-bold uppercase tracking-wider text-zinc-500">Starchanneled payload</p>
                              <p className="text-xs sm:text-sm font-black text-white">{step.downloadLabel}</p>
                              {step.subText && <p className="text-[10px] text-zinc-500 font-semibold mt-0.5">{step.subText}</p>}
                            </div>
                          </div>

                          <a
                            href={step.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-display text-[10px] tracking-widest uppercase font-bold text-[#05010a] bg-gradient-to-r from-amber-200 to-amber-400 px-5 py-2.5 shadow-md shadow-amber-500/10 transition duration-300 hover:scale-105"
                          >
                            <Download className="h-3.5 w-3.5" />
                            Extract
                          </a>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
