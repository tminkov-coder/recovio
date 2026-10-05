/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { KOTLIN_PROJECT_FILES } from '../data/kotlinCodeTemplates';
import { FileCode, Clipboard, Check, BookOpen, AlertCircle } from 'lucide-react';

export default function CodeExplorer() {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeFile = KOTLIN_PROJECT_FILES[activeFileIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl" id="code-explorer-container">
      {/* IDE Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
            <FileCode className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wide">פרויקט Android - Kotlin & Compose</h2>
            <p className="text-xs text-zinc-500 font-mono">app/src/main/java/com/elite/performance/...</p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-all border border-[#1a1a1a] font-mono cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>הועתק!</span>
            </>
          ) : (
            <>
              <Clipboard className="w-3.5 h-3.5" />
              <span>העתק קוד מקור</span>
            </>
          )}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-[500px]">
        {/* Project Tree Sidebar */}
        <div className="w-64 bg-[#050505] border-l border-[#1a1a1a] p-4 flex flex-col gap-6 select-none overflow-y-auto">
          <div>
            <div className="text-[10px] font-bold tracking-wider text-zinc-500 uppercase mb-3 px-2">עץ הקבצים (RTL Supported)</div>
            <div className="flex flex-col gap-1">
              {KOTLIN_PROJECT_FILES.map((file, idx) => (
                <button
                  key={file.name}
                  onClick={() => {
                    setActiveFileIndex(idx);
                    setCopied(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-right transition-all font-mono text-xs cursor-pointer ${
                    activeFileIndex === idx
                      ? 'bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/25'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                  }`}
                >
                  <FileCode className={`w-4 h-4 shrink-0 ${activeFileIndex === idx ? 'text-[#007BFF]' : 'text-zinc-650'}`} />
                  <span className="truncate" dir="ltr">{file.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto border-t border-[#1a1a1a] pt-4 px-2">
            <div className="flex items-start gap-2.5 text-zinc-400 p-2.5 rounded-xl bg-black/40 border border-[#1a1a1a]">
              <BookOpen className="w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-semibold text-zinc-300 block mb-1">הוראות פריסה באנדרואיד:</span>
                העתק את הקודים הבאים ישירות לתוך פרויקט Jetpack Compose ב-Android Studio. דאג שהאנליזות והמפרנציות יהיו עטופות ב-RTL.
              </div>
            </div>
          </div>
        </div>

        {/* Editor Screen */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#090a0d]">
          {/* File path breadcrumb */}
          <div className="px-5 py-2.5 bg-[#080808] text-[11px] text-zinc-400 font-mono border-b border-[#1a1a1a] flex items-center gap-2">
            <span className="text-[#007BFF]">PROJECT</span>
            <span>&gt;</span>
            <span className="truncate" dir="ltr">{activeFile.path}</span>
          </div>

          {/* Actual Code View with line numbers */}
          <div className="flex-1 overflow-y-auto p-5 font-mono text-xs text-zinc-300 leading-relaxed text-left selection:bg-[#007BFF]/20 selection:text-white" dir="ltr">
            <pre className="whitespace-pre">
              <code>{activeFile.code}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Kotlin Tech Badges */}
      <div className="px-6 py-3 bg-[#0a0a0a] border-t border-[#1a1a1a] flex flex-wrap items-center gap-4 text-xs">
        <span className="text-zinc-500 font-medium font-sans">ארכטיקטורת קוד:</span>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20 font-mono">Jetpack Compose</span>
          <span className="px-2.5 py-0.5 rounded-full bg-violet-950/40 text-violet-400 border border-violet-900/30 font-mono">NavHost 2.7+</span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-900/30 font-mono">RTL Natively (Hebrew)</span>
          <span className="px-2.5 py-0.5 rounded-full bg-amber-950/40 text-amber-400 border border-amber-900/30 font-mono">Cloud Firestore SDK</span>
        </div>
      </div>
    </div>
  );
}
