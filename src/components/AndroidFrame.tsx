/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

interface AndroidFrameProps {
  children: ReactNode;
}

export default function AndroidFrame({ children }: AndroidFrameProps) {
  // קבלת זמן נוכחי בפורמט אנדרואיד
  const currentTime = new Date().toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="relative mx-auto w-full max-w-[390px] h-[780px] bg-black rounded-[50px] p-3 shadow-2xl border-[8px] border-zinc-800 ring-1 ring-zinc-750 flex flex-col overflow-hidden" id="android-device-emulator">
      {/* Ear Speaker & Front Camera Punch Hole */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-full z-55 flex items-center justify-between px-6">
        <div className="w-12 h-1 bg-zinc-800 rounded-full"></div>
        <div className="w-3.5 h-3.5 bg-zinc-900 rounded-full border-2 border-zinc-950"></div>
      </div>

      {/* Screen Container */}
      <div className="flex-1 w-full h-full bg-[#0a0a0c] rounded-[38px] overflow-hidden flex flex-col relative" dir="rtl">
        {/* Android Status Bar */}
        <div className="h-10 px-6 pt-3 flex items-center justify-between text-xs text-white/90 z-40 select-none bg-black">
          <span className="font-semibold tracking-wide font-mono">{currentTime}</span>
          <div className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center gap-0.5">
              <span className="font-mono text-[10px] mr-1">94%</span>
              <Battery className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Dynamic Simulator Screen Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative style-scrollbar">
          {children}
        </div>

        {/* Android System Bottom Bar (Virtual Pill Navigation) */}
        <div className="h-6 w-full flex items-center justify-center bg-black z-40 select-none">
          <div className="w-28 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
