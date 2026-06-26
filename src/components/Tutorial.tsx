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
      title: 'Android APK Setup',
      sub: 'Download the custom application package directly on your mobile device.',
      icon: Smartphone,
      steps: [
        { number: 1, text: 'Uninstall the standard Growtopia application from your device to prevent conflicts.' },
        { number: 2, text: 'Enable "Allow installs from Unknown Sources" inside settings.' },
        { 
          number: 3, 
          text: 'Download the customized starlight client APK package.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-apk',
          downloadLabel: 'Download Android APK Client',
          subText: 'Package: 135 MB • Version: 1.4.2'
        },
        { number: 4, text: 'Launch the application, wait for resources to extract, and start playing!' }
      ]
    },
    windows: {
      title: 'Windows Launcher Guide',
      sub: 'Play with full graphics on your PC using our lightweight redirection proxy.',
      icon: Monitor,
      steps: [
        { number: 1, text: 'Ensure that the official PC client of Growtopia is installed.' },
        { 
          number: 2, 
          text: 'Download the FabulaNova PC RDP redirection package.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-win',
          downloadLabel: 'Download PC Redirection Tool',
          subText: 'Package: 12.4 MB • Version: 2.1.0'
        },
        { number: 3, text: 'Extract all the directory contents into a local folder.' },
        { number: 4, text: 'Open the "FabulaNova.exe" program and hit "Connect" to launch standard GT redirected!' }
      ]
    },
    macos: {
      title: 'macOS Installation',
      sub: 'Connect to our server natively on Apple macOS platforms.',
      icon: Cpu,
      steps: [
        { number: 1, text: 'Verify installation of the official Growtopia for Mac client.' },
        { 
          number: 2, 
          text: 'Download our custom redirection hosts profile.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-mac',
          downloadLabel: 'Download macOS profile rules',
          subText: 'Package: 1.2 MB • Profile'
        },
        { number: 3, text: 'Open "System Settings" -> "Profiles" and install the downloaded redirect profile.' },
        { number: 4, text: 'Start Growtopia natively to access the FabulaNova realm!' }
      ]
    },
    dns: {
      title: 'DNS Redirection Tunnel (iOS & No-Root)',
      sub: 'Connect to RDP ports using secure hosts mapping applications.',
      icon: Wifi,
      steps: [
        { number: 1, text: 'Download "DNSCloak" (iOS) or "HostsGo" (Android) from the app stores.' },
        { number: 2, text: 'Access hosts file editor in the app.' },
        { 
          number: 3, 
          text: 'Load the domain name redirect parameters.',
          isDownload: true,
          downloadUrl: 'https://pastebin.com/raw/fabulanova-hosts',
          downloadLabel: 'View Redirection Host File rules',
          subText: 'Target IP: 103.189.140.22'
        },
        { number: 4, text: 'Toggle the VPN button inside the utility, then open official apps to play!' }
      ]
    }
  };

  const platforms = [
    { id: 'apk', label: 'Android APK', icon: Smartphone },
    { id: 'windows', label: 'Windows PC', icon: Monitor },
    { id: 'macos', label: 'macOS Client', icon: Cpu },
    { id: 'dns', label: 'Hosts Tunnel', icon: Wifi },
  ] as const;

  const currentGuide = guides[activePlatform];
  const PlatformIcon = currentGuide.icon;

  return (
    <section id="tutorial" className="relative py-24 sm:py-32 overflow-hidden bg-[#060813]">
      {/* Background stardust */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 sandbox-stars opacity-15"></div>
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-emerald-500/5 filter blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-display text-xs uppercase font-bold tracking-[0.4em] text-emerald-400">
            Installation Setup
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Connection <span className="gem-text-gradient font-black">Gateways</span>
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base font-semibold">
            Choose your device platform and follow the steps below to connect to the server.
          </p>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const active = activePlatform === plat.id;
            return (
              <button
                key={plat.id}
                onClick={() => setActivePlatform(plat.id)}
                className={`flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-display tracking-wider uppercase font-bold transition duration-300 ${
                  active 
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_5px_15px_rgba(52,211,153,0.15)]' 
                    : 'border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="h-4 w-4" />
                {plat.label}
              </button>
            );
          })}
        </div>

        {/* Wizard Guide card */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0b0e25]/60 backdrop-blur-xl shadow-2xl p-6 sm:p-10">
          
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-6 border-b border-white/5 text-left mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-emerald-400">
              <PlatformIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest font-display">Instruction Log</p>
              <h3 className="text-xl font-black font-display text-white mt-0.5">{currentGuide.title}</h3>
              <p className="text-zinc-500 text-xs sm:text-sm mt-0.5">{currentGuide.sub}</p>
            </div>
          </div>

          {/* Steps list */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.ol
                key={activePlatform}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                {currentGuide.steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    {/* Step indicator bubble */}
                    <div className="flex-shrink-0 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 font-display font-black text-emerald-400 text-xs shadow-md">
                      {step.number}
                    </div>

                    {/* Step description */}
                    <div className="flex-1 space-y-4 pt-0.5 pl-1">
                      <p className="text-zinc-300 text-xs sm:text-sm font-semibold">
                        {step.text}
                      </p>

                      {/* Download package button card */}
                      {step.isDownload && (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition duration-300 mt-2">
                          <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/5 text-zinc-400">
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
                            className="flex items-center gap-2 rounded-full font-display text-[10px] tracking-wider uppercase font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-500 px-5 py-2.5 shadow-md shadow-emerald-500/10 transition duration-300 hover:scale-105"
                          >
                            <Download className="h-3.5 w-3.5" />
                            Download
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
