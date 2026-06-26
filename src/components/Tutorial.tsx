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
      sub: 'Install the native client directly on your Android phone.',
      icon: Smartphone,
      steps: [
        { number: 1, text: 'Uninstall the official Growtopia application from your device to avoid conflicts.' },
        { number: 2, text: 'Enable "Unknown Sources" in your device security settings if you have not done so.' },
        { 
          number: 3, 
          text: 'Download and install the FabulaNova Android APK.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-apk',
          downloadLabel: 'Download FabulaNova APK',
          subText: 'Size: 135 MB • Version: 1.4.2'
        },
        { number: 4, text: 'Open the application, wait for initial items extraction, and enter the lobby!' }
      ]
    },
    windows: {
      title: 'Windows Setup Guide',
      sub: 'Play with high FPS on PC using our native proxy launcher.',
      icon: Monitor,
      steps: [
        { number: 1, text: 'Make sure you have the official Growtopia installed on your Windows PC.' },
        { 
          number: 2, 
          text: 'Download the FabulaNova Windows Launcher archive.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-win',
          downloadLabel: 'Download Windows Launcher',
          subText: 'Size: 12.4 MB • Version: 2.1.0'
        },
        { number: 3, text: 'Extract the contents of the archive into a dedicated folder.' },
        { number: 4, text: 'Launch "FabulaNova.exe", wait for verification, click "Connect", and standard GT will load redirected to our RDP node!' }
      ]
    },
    macos: {
      title: 'macOS Client Guide',
      sub: 'Access our private server natively on macOS.',
      icon: Cpu,
      steps: [
        { number: 1, text: 'Ensure you have the Mac client setup installed.' },
        { 
          number: 2, 
          text: 'Download the macOS redirection profile.', 
          isDownload: true, 
          downloadUrl: 'https://mediafire.com/download/fabulanova-mac',
          downloadLabel: 'Download macOS profile',
          subText: 'Size: 1.2 MB • Extension: .mobileconfig'
        },
        { number: 3, text: 'Open "System Settings" -> "Profiles" and install the downloaded redirection config.' },
        { number: 4, text: 'Run the Growtopia launcher and join the game natively!' }
      ]
    },
    dns: {
      title: 'DNS Redirection Setup (iOS/No-Root)',
      sub: 'Connect without installing unofficial apps using tunneling tools.',
      icon: Wifi,
      steps: [
        { number: 1, text: 'Download "DNSCloak" or "HostsGo" app from the App Store / Play Store.' },
        { number: 2, text: 'Configure custom redirection IP in the hosts configuration.' },
        { 
          number: 3, 
          text: 'Load the FabulaNova hosts profile rules.',
          isDownload: true,
          downloadUrl: 'https://pastebin.com/raw/fabulanova-hosts',
          downloadLabel: 'View Hosts Rule Text',
          subText: 'RDP IP Target: 103.189.140.22'
        },
        { number: 4, text: 'Toggle the VPN button in the hosts tool, and open the official Growtopia app to login!' }
      ]
    }
  };

  const platforms = [
    { id: 'apk', label: 'Android APK', icon: Smartphone },
    { id: 'windows', label: 'Windows', icon: Monitor },
    { id: 'macos', label: 'macOS', icon: Cpu },
    { id: 'dns', label: 'Hosts/DNS Redirect', icon: Wifi },
  ] as const;

  const currentGuide = guides[activePlatform];
  const PlatformIcon = currentGuide.icon;

  return (
    <section id="tutorial" className="relative py-24 sm:py-32 overflow-hidden bg-[#04010a]">
      {/* Background stardust */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 stars-bg opacity-10"></div>
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-violet-500/5 blur-[100px]" />
        <div className="absolute bottom-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.4em] text-violet-400">
            Installation Tutorial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
            Quick Start <span className="animated-gradient-text">Redirection</span> Guide
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Follow our clean setup wizards to play FabulaNova on any device without root or complex scripting.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const active = activePlatform === plat.id;
            return (
              <button
                key={plat.id}
                onClick={() => setActivePlatform(plat.id)}
                className={`flex items-center gap-2 rounded-2xl border px-5 py-3.5 text-sm font-bold tracking-wide transition duration-300 ${
                  active 
                    ? 'border-violet-500/30 bg-violet-600/10 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.15)]' 
                    : 'border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Icon className="h-4 w-4" />
                {plat.label}
              </button>
            );
          })}
        </div>

        {/* Guide Content Panel */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-cosmic-card backdrop-blur-xl shadow-2xl p-6 sm:p-10">
          
          {/* Panel Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-8 border-b border-white/5 text-left mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300 border border-violet-400/20">
              <PlatformIcon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-bold text-violet-400 uppercase tracking-widest">Platform Guide</p>
              <h3 className="text-2xl font-black font-display text-white mt-0.5">{currentGuide.title}</h3>
              <p className="text-zinc-500 text-sm mt-0.5">{currentGuide.sub}</p>
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.ol
                key={activePlatform}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-left"
              >
                {currentGuide.steps.map((step) => (
                  <li key={step.number} className="flex gap-4">
                    {/* Rank Circle */}
                    <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600/20 border border-violet-400/30 font-display font-black text-violet-300 text-sm">
                      {step.number}
                    </div>

                    {/* Step Description */}
                    <div className="flex-1 space-y-4 pt-1">
                      <p className="text-zinc-200 text-sm sm:text-base font-semibold">
                        {step.text}
                      </p>

                      {/* Customized Package Downloader Box */}
                      {step.isDownload && (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition duration-300 mt-2">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 border border-violet-400/15">
                              <Cpu className="h-5 w-5" />
                            </div>
                            <div className="text-left">
                              <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Package payload</p>
                              <p className="text-sm font-black text-white">{step.downloadLabel}</p>
                              {step.subText && <p className="text-xs text-zinc-500 font-semibold mt-0.5">{step.subText}</p>}
                            </div>
                          </div>

                          <a
                            href={step.downloadUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg transition duration-300"
                          >
                            <Download className="h-4 w-4" />
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
