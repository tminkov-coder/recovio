/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface BjjBioClockProps {
  bjjBioDay: number;
  setBjjBioDay: (day: number) => void;
}

export const BjjBioClock: React.FC<BjjBioClockProps> = ({ bjjBioDay, setBjjBioDay }) => {
  // Data for active day
  const dayInfo = [
    {
      title: 'יום 1 - גיוס סיבי שריר אקטיבי 🏋️‍♂️',
      badge: 'עצימות עצבית גבוהה',
      desc: 'אימון בעומס מבוקר לגיוס יציבות מפרקית מירבית וחיווט דינמי. מומלץ לצרוך חלבון עשיר באמינו בסיום הסשן להאצת שיקום הרקמה.',
      metric: '⚡ רמת פוקוס תנועתי: 9/10 • שינה מומלצת: 8+ שעות',
      cues: ['הקפידו על שלב בלימה אקצנטרי איטי', 'הימנעו מתנועות אימפולסיביות ללא שליטה']
    },
    {
      title: 'יום 2 - שיקום רקמתי וסירקולציה 💧',
      badge: 'התאוששות ביו-כימית אקטיבית',
      desc: 'זרימת דם נמוכה ומבוקרת ללא עומסי התנגדות. מומלץ להשתמש במשחת Recovio Recovery Cream להגברת הסירקולציה ולבצע המסה מקומית.',
      metric: '🛁 נוזלים מומלץ: 3.5 ליטר מים • שחרור פאציה',
      cues: ['עיסוי רוטטיבי עדין בגידים רגישים', 'תרגול נשימות להורדת טון סימפטטי']
    },
    {
      title: 'יום 3 - עומס צווארי וייצוב קור 🏋️‍♂️',
      badge: 'עצימות בינונית ממוקדת BJJ',
      desc: 'דגש פיזיולוגי מיוחד על הכשרת חוליות הצוואר לספיגת הכנעות (Chokes) ועמידות בפוזיציות קשוחות. הקפידו על כיווצים איזומטריים נקיים.',
      metric: '🔋 רמת אנרגיה כוללת: 8/10 • מניעת קריסת ברך',
      cues: ['ביצוע כיווץ איזומטרי מול אצבעות היד', 'שמירה על גב יציב במנח 90-90']
    },
    {
      title: 'יום 4 - מוביליטי עמוק וטווחי ירך 🧘‍♂️',
      badge: 'גמישות מעטפת ופאציה',
      desc: 'מחזורי הבנייה של הקולגן מראים ערוצי ספיגה נהדרים. עבודה פסיבית דינמית להשגת עומק מפרקי ירך לביצוע שומרים (Open/Close Guard).',
      metric: '🤸🏽‍♂️ טווח תנועה מורחב: קל ומשוחרר • מתיחות פאציה',
      cues: ['שמירה על כתפיים מורדות וצוואר ארוך', 'נשימות פוסטרוליות עמוקות בסיום']
    },
    {
      title: 'יום 5 - כוח מתפרץ וסיבולת אחיזה 🏋️‍♂️',
      badge: 'עצימות שיא ליציבה',
      desc: 'השגת יכולות כוח מירביות המשולבות בסימולציות אחיזת חליפה (Gi Pull-ups). למדו להגדיר חלוקה שווה של סיבי האמות.',
      metric: '🔥 מדד עומס ביומכני: מקסימלי • דגש שרירי השוער',
      cues: ['תלייה מבוקרת עם שריר רחב גב פעיל', 'שמירה על מרפקים כפופים ב-90 מעלות']
    },
    {
      title: 'יום 6 - מנוחה מוחלטת ובניית קולגן 💤',
      badge: 'De-load וסינון דלקות',
      desc: 'הימנעות מוחלטת מביצוע תרגילים אקטיביים. יום הידרציה ובנייה מחדש של סיבי הקולגן בפיזיולוגיית המפרקים שלכם.',
      metric: '😴 התאוששות סיבי עצב: 10/10 • יום שינה עמוקה',
      cues: ['מנוחה מוחלטת לרקמות החיבור', 'הצמדת קומפרס לח רטוב באזורי כאב בעבר']
    },
    {
      title: 'יום 7 - מבדק ביו-מכני ומעבר שבוע 🩺',
      badge: 'מבדק מדדים קליני',
      desc: 'מילוי השאלון השבועי או הגשת סרטון בוחן תנועתי לתום הפיזיותרפיסט. עמידה במבדק תקבע פתיחת סילבוס שבועי עילאי או עליה ברמה.',
      metric: '🔬 ביקורת תנועה עצמית • משוב קליני מבית Recovio',
      cues: ['שמירה על יציבה ועמוד שדרה מאוזן מול המצלמה', 'ייצוג ישר וכנה של רמות הכאב במאמצים']
    }
  ];

  const activeDayData = dayInfo[bjjBioDay - 1] || dayInfo[0];

  return (
    <div className="pt-4 border-t border-zinc-900/60 mt-4 space-y-3 px-1 text-right font-sans" style={{ direction: 'rtl' }}>
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center gap-1.5 text-right">
          <span className="text-sm">🕒</span>
          <h4 className="text-xs font-black text-[#007BFF] uppercase tracking-wide">
            שעון התאוששות ביולוגי ל-7 ימים
          </h4>
        </div>
        <span className="text-[9px] bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/25 px-2 py-0.5 rounded font-black font-sans shrink-0">
          מחזורי סנכרון תאים
        </span>
      </div>

      <p className="text-[10px] text-zinc-400 leading-relaxed text-right mb-2">
        מעקב ביו-מכני וקליני להגברת זרימת הדם, הפחתת נוזלי דלקת, ובנייה אופטימלית של רקמות החיבור בהתאם לתדירות העומסים במזרני ה-BJJ. לחצו על ימי השבוע לצפייה בהנחיות המומחה:
      </p>

      {/* Days selector row */}
      <div className="grid grid-cols-7 gap-1">
        {[1, 2, 3, 4, 5, 6, 7].map((day) => {
          const isActive = bjjBioDay === day;
          const getMiniLabel = (d: number) => {
            if (d === 1 || d === 3 || d === 5) return 'אימון';
            if (d === 2 || d === 4) return 'שיקום';
            if (d === 6) return 'מנוחה';
            return 'מבחן';
          };
          
          const isTraining = day === 1 || day === 3 || day === 5;
          const isRehab = day === 2 || day === 4;
          const isRest = day === 6;

          return (
            <button
              key={day}
              onClick={() => setBjjBioDay(day)}
              className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-between gap-1 transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-br from-[#007BFF]/15 to-blue-950/30 border-[#007BFF] text-white ring-2 ring-[#007BFF]/15 shadow-[0_0_12px_rgba(0,123,255,0.4)]'
                  : 'bg-gradient-to-br from-[#0f0f12] to-[#040406] border-[#161619] text-zinc-400 hover:border-zinc-850 hover:text-white'
              }`}
            >
              <span className="text-xs font-black select-none">יום {day}</span>
              <div className={`w-1.5 h-1.5 rounded-full ${
                isActive
                  ? 'bg-[#007BFF] animate-pulse shadow-[0_0_8px_#007BFF]'
                  : isTraining
                    ? 'bg-indigo-500/70'
                    : isRehab
                      ? 'bg-emerald-500/70'
                      : isRest
                        ? 'bg-amber-500/70'
                        : 'bg-rose-500/70'
              }`} />
              <span className="text-[7.5px] font-medium text-zinc-500 block leading-none">{getMiniLabel(day)}</span>
            </button>
          );
        })}
      </div>

      {/* Active day diagnostic diagnostics */}
      <div className="bg-gradient-to-br from-[#0d0e12] to-[#030406] border border-[#1d1d25] p-3.5 rounded-xl space-y-3.5 relative overflow-hidden animate-slideUp">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#007BFF]/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-3 text-right">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <div className="text-right">
              <span className="text-[9px] text-[#007BFF] font-black uppercase tracking-wider block font-sans">
                {activeDayData.badge}
              </span>
              <h4 className="text-xs font-black text-white mt-0.5">
                {activeDayData.title}
              </h4>
            </div>
            <span className="text-[10px] text-zinc-500 font-mono">Day {bjjBioDay} / 7</span>
          </div>

          <p className="text-[10.5px]/relaxed text-zinc-350 text-right leading-relaxed font-sans">
            {activeDayData.desc}
          </p>

          <div className="bg-black/40 p-2.5 rounded-lg border border-[#1b1b22] text-[9.5px] text-zinc-400 font-sans flex items-center justify-between">
            <span>⚙️ פרמטר השעון:</span>
            <span className="font-extrabold text-white text-[9.5px]">{activeDayData.metric}</span>
          </div>

          <div className="p-2.5 bg-[#007BFF]/5 border border-[#007BFF]/10 rounded-lg">
            <span className="text-[9.5px] text-zinc-300 font-extrabold block mb-1">דגשים קליניים מונחי פיזיותרפיסט ספורט:</span>
            <ul className="list-disc list-inside space-y-1 text-[9.5px] text-[#007BFF] pr-1 leading-relaxed">
              {activeDayData.cues.map((cue, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="text-zinc-300 font-sans">{cue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
