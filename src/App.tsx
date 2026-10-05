import React, { useState, useEffect, Fragment } from "react";
// @ts-ignore
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const jsxDEV = _jsxDEV;
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Activity,
  Lock,
  Check,
  AlertTriangle,
  ShoppingBag,
  ShoppingCart,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  UploadCloud,
  X,
  Plus,
  Minus,
  Trash2,
  Award,
  ShieldAlert,
  Database,
  Smartphone,
  Fingerprint,
  Camera,
  Wifi,
  WifiOff
} from "lucide-react";
import { AppScreen, BottomTab, SportType, OnboardingGoal, PainLevel } from "./types";
import { SPORT_INFO, EXERCISES, INJURY_PROTOCOLS, SHOP_ITEMS, CLINIC_INFO } from "./data/sportData";
import AndroidFrame from "./components/AndroidFrame";
import CodeExplorer from "./components/CodeExplorer";
import AndroidExoPlayer from "./components/AndroidExoPlayer";
import AnimatedSplashScreen from "./components/AnimatedSplashScreen";
import { BjjRehabMatrix } from "./components/BjjRehabMatrix";
// @ts-ignore
import appLogo from "./assets/images/app_logo_1780247868814.svg";
const BJJ_LEVELS_DATA = [
  {
    level: 1,
    name: "رמה 1: בסיס ויציבות",
    tagline: "מפרקים יציבים ושחרור לחץ עמוד השדרה להתמודדות עם עומסים ראשוניים.",
    overviewVideoUrl: "https://www.youtube.com/embed/S_8n0l6_aIE",
    exercises: [
      {
        id: 1,
        title: "מתיחת דקומפרסיה מותנית (Decompression)",
        desc: "נטרול עומס דחיסת החוליות מכניסה לגארד קשוח ושחרור גב תחתון.",
        videoUrl: "https://www.youtube.com/embed/Rk0HqSFr5U4",
        videoID: "Rk0HqSFr5U4",
        isFree: true,
        baseParams: {
          sets: [3, 4, 4],
          reps: ["45 שניות", "60 שניות", "75 שניות"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 5 - קל ורפוי", "RPE 6 - החזקה מבוקרת", "RPE 7 - שחרור עמוק"]
        },
        cues: [
          "תלייה פסיבית של האגן על מתח או מנח ילד באחיזת קו רחב.",
          "הרפו את שרירי הגב, נשמו נשימות בטן עמוקות בלבד."
        ]
      },
      {
        id: 2,
        title: "כיווץ איזומטרי תלת-ממדי לצוואר (Neck Guard)",
        desc: "ייצוב עמוד השדרה הצווארי כנגד בריחים וחניקות דוגמת גיילוטין.",
        videoUrl: "https://www.youtube.com/embed/8vBqGf4VbT4",
        videoID: "8vBqGf4VbT4",
        isFree: false,
        baseParams: {
          sets: [3, 3, 4],
          reps: ["15 שניות", "20 שניות", "25 שניות"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 6 - מתח קל", "RPE 7 - כוח בינוני", "RPE 8.5 - כוח מירבי"]
        },
        cues: [
          "הפעל כוח קבוע כנגד כפות הידיים בחלק קדמי, אחורי וצידי.",
          "שמרו על צוואר נייטרלי לחלוטין ללא תנועת כיפוף."
        ]
      },
      {
        id: 3,
        title: "רוטציית ירכיים אקטיבית במנח 90-90 (90-90 Hip Flow)",
        desc: "הגברת טווחי תנועה סיבוביים קריטיים לשם התגוננות מבריחי רגליים ומעברי גארד.",
        videoUrl: "https://www.youtube.com/embed/V6H7HclD410",
        videoID: "V6H7HclD410",
        isFree: false,
        baseParams: {
          sets: [3, 3, 4],
          reps: ["10 חזרות לצד", "12 חזרות לצד", "15 חזרות לצד"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 5 - שיפור זרימה", "RPE 6 - דגש קצה טווח", "RPE 7.5 - שליטה אקטיבית"]
        },
        cues: [
          "שבו על הרצפה כאשר הברכיים ב-90 מעלות, בצעו מעבר איטי מצד לצד.",
          "שאפו לגב זקוף ככל הניתן ללא תמיכת כפות ידיים ברצפה."
        ]
      },
      {
        id: 4,
        title: "חיזוק שרירי הטיביאליס (Tibialis Grounding)",
        desc: "בניית שריר בולם זעזועים בקדמת השוק התומך בברך מהטלות ומכות מזרן קשות.",
        videoUrl: "https://www.youtube.com/embed/Mbe9fVqE900",
        videoID: "Mbe9fVqE900",
        isFree: false,
        baseParams: {
          sets: [3, 4, 4],
          reps: ["15 חזרות", "20 חזרות", "25 חזרות"],
          rest: ["60 שניות מנוחה", "60 שניות מנוחה", "45 שניות מנוחה"],
          intensity: ["RPE 6 - כיווץ אחיד", "RPE 7.5 - שריפה ממוקדת", "RPE 9 - נפח עומס קיצוני"]
        },
        cues: [
          "הישענו על קיר, רגליים ישרות קדימה, והרמו את אצבעות הרגליים מעלה.",
          "החזיקו שנייה מלאה בכיווץ מקסימלי בחלק העליון."
        ]
      },
      {
        id: 5,
        title: "שחרור והחלקה של גידי כף היד (Finger Tendon Glide)",
        desc: "שיקום ומניעת שחיקה ודלקות במפרקי אצבעות כף היד שנגרמו מסחיטת שרוולים וצווארונים פסיבית.",
        videoUrl: "https://www.youtube.com/embed/rV58Q4N7zO0",
        videoID: "rV58Q4N7zO0",
        isFree: false,
        baseParams: {
          sets: [3, 3, 3],
          reps: ["8 מחזורים", "11 מחזורים", "15 מחזורים"],
          rest: ["60 שניות מנוחה", "45 שניות מנוחה", "45 שניות מנוחה"],
          intensity: ["RPE 5 - גיוס גידים קל", "RPE 6 - החלקה מלאה", "RPE 7 - קצב מהיר ומבוקר"]
        },
        cues: [
          "בצע את חמשת מנחי האצבעות: פתוח, טופר, חצי אגרוף, אגרוף מלא, ואגרוף ושטוח.",
          "בצע בצורה רציפה ואיטית למפרקי גידים משומנים."
        ]
      }
    ]
  },
  {
    level: 2,
    name: "רמה 2: העלאת עומס קליני",
    tagline: "פרוטוקול עומס קליני מחושב המגרה את השרירים והרצועות לעמוד בכוח הקרב.",
    overviewVideoUrl: "https://www.youtube.com/embed/Y-L7SAnp67o",
    exercises: [
      {
        id: 1,
        title: "שיווי משקל חד-רגלי בתוספת רוטציה (Single Leg Stabilizer)",
        desc: "הגברת יציבות מפרק הברך תחת עבודה אסימטרית ועמידה בלחצי הטלה.",
        videoUrl: "https://www.youtube.com/embed/_8b78R-W614",
        videoID: "_8b78R-W614",
        isFree: true,
        baseParams: {
          sets: [3, 3, 4],
          reps: ["8 רוטציות לרגל", "10 רוטציות לרגל", "12 רוטציות לרגל"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 6 - שליטה בקרקע", "RPE 7.5 - תנועה רציפה", "RPE 8.5 - קצב אתלטי מהיר"]
        },
        cues: [
          "עמדו על רגל אחת, ברך מעט כפופה, ובצעו סיבובים של פלג הגוף העליון ימינה ושמאלה.",
          "שמרו על פיקת הברך פונה קדימה ורצפת כף רגל אקטיבית בקרקע."
        ]
      },
      {
        id: 2,
        title: "גשר צוואר אחורי נתמך (Supported Neck Bridge)",
        desc: "בניית עמידות מתקדמת של זוקפי הצוואר למניעת פריקות עקב שליטת ראש.",
        videoUrl: "https://www.youtube.com/embed/3yN8gH0kM4M",
        videoID: "3yN8gH0kM4M",
        isFree: false,
        baseParams: {
          sets: [3, 3, 4],
          reps: ["10 חזרות איטיות", "12 חזרות איטיות", "15 חזרות איטיות"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 7 - החזקה מבוקרת", "RPE 8 - כוח סטטי", "RPE 9 - עומס דינמי מירבי"]
        },
        cues: [
          "שכבו על הגב, הרימו את הישבן והפעילו לחץ קל על הראש תוך תמיכת כפות הידיים לשני הצדדים.",
          "התקדמו בעדינות ועצרו מיד בכל תחושת עורף נוקשה."
        ]
      },
      {
        id: 3,
        title: "מכבש ירכיים במנח חצי-פרפר (Adductor Butterfly Press)",
        desc: "חיזוק מקרבי הירך ורצועות המפשעה לעבודה יעילה מתוך הגארד וטווח מפרק מוגן.",
        videoUrl: "https://www.youtube.com/embed/l59247R-g98",
        videoID: "l59247R-g98",
        isFree: false,
        baseParams: {
          sets: [3, 4, 4],
          reps: ["12 לחיצות", "15 לחיצות", "20 לחיצות"],
          rest: ["75 שניות מנוחה", "60 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 6 - כיווץ רך", "RPE 7.5 - התנגדות כוח", "RPE 8.5 - כיווץ אנדורנס קשה"]
        },
        cues: [
          "בצעו לחיצה איזומטרית מנוהלת של הברכיים כנגד כדור פיזיו או אגרופי הידיים.",
          "הקפידו על שמירת נשימה סדירה לאורך כל זמן הלחיצה."
        ]
      },
      {
        id: 4,
        title: "הרמות עקבים בטווח תנועה מוגדל (Deficit Calf Raise)",
        desc: "ייצוב גיד האכילס ומפרק הקרסול לביטול פציעות נקע והחלקה מהירה על הקנבס.",
        videoUrl: "https://www.youtube.com/embed/5b8r8W-l32g",
        videoID: "5b8r8W-l32g",
        isFree: false,
        baseParams: {
          sets: [3, 3, 4],
          reps: ["15 עליות", "20 עליות", "25 עליות"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 6 - דחיפה נקודתית", "RPE 7 - עבודה בקצה טווח", "RPE 8.5 - שריפה מוגברת"]
        },
        cues: [
          "עמדו על מדרגה או משטח מוגבה כך שהעקבים באוויר.",
          "רדו עמוק מתחת לקו המדרגה ועלו עד כיווץ מלא של התאומים."
        ]
      },
      {
        id: 5,
        title: "אחיזות גי איזומטריות כנגד התנגדות (Gi Grip Hold)",
        desc: "חיזוק אדיר של אחיזת הגריפ והידיים לשמירה דומיננטית על השרוול ללא עייפות.",
        videoUrl: "https://www.youtube.com/embed/8b57-L0L24c",
        videoID: "8b57-L0L24c",
        isFree: false,
        baseParams: {
          sets: [3, 3, 3],
          reps: ["20 שניות החזקה", "30 שניות החזקה", "45 שניות החזקה"],
          rest: ["90 שניות", "75 שניות", "60 שניות"],
          intensity: ["RPE 7 - סחיטה קלה", "RPE 8 - קושי בינוני-גבוה", "RPE 9.5 - כשל אחיזה מבוקר"]
        },
        cues: [
          "השתמשו בחתיכת בד גי או מגבת מלופפת על מתח או משקולת יד.",
          "אחזו בחוזקה וקבעו את הזוויות למשך הזמן המוגדר."
        ]
      }
    ]
  },
  {
    level: 3,
    name: "רמה 3: שיא ביצועים (Peak Performance)",
    tagline: "טונוס שרירי מושלם, טווחי תנועה קיצוניים ועמידות שיא לתחרויות ולאימונים מפרכים.",
    overviewVideoUrl: "https://www.youtube.com/embed/S_8n0l6_aIE",
    exercises: [
      {
        id: 1,
        title: "סקוואט קוזאק עמוק אקטיבי (Cossack Mobility Squat)",
        desc: "גמישות דינמית קיצונית של המפשעות והירך לעמידה עמוקה ברגל פרוסה ושמירת גארד אגרסיבית.",
        videoUrl: "https://www.youtube.com/embed/rV8B96_gS0L",
        videoID: "rV8B96_gS0L",
        isFree: true,
        baseParams: {
          sets: [3, 4, 4],
          reps: ["6 ירידות לכל צד", "8 ירידות לכל צד", "10 ירידות לכל צד"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 7 - שליטה בעומק", "RPE 8 - קצב דינמי מבוקר", "RPE 9 - ללא משקל יד תומך"]
        },
        cues: [
          "עמדו בפישוק רחב מאוד, רדו הצידה אל רגל אחת בעוד הרגל השנייה מתיישרת ובהונות פונות מעלה.",
          "שמרו על עקב הרגל הכפופה נעוץ היטב בקרקע וגב ישר."
        ]
      },
      {
        id: 2,
        title: "גשר צוואר מלא על משטח רך (Full Neck Bridge Flow)",
        desc: "הכנה אקסטרימית של מובילי ה-BJJ לעמידה בלחצי המזרן והגשר פוסט-טייקדאון.",
        videoUrl: "https://www.youtube.com/embed/_bT8vY_g9Xl",
        videoID: "_bT8vY_g9Xl",
        isFree: false,
        baseParams: {
          sets: [3, 3, 3],
          reps: ["8 חזרות רכות", "11 חזרות רכות", "15 חזרות רכות"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 8 - כוח משמעותי", "RPE 9 - עורף יציב", "RPE 10 - שיא קליני מקצועי"]
        },
        cues: [
          "בצעו מעברי משקל קלים ואיטיים קדימה ואחורה על מזרן או גליל ספוג רך בנקודת המגע WITH הראש.",
          "בצעו את התרגיל אך ורק לאחר חימום מלא של זוקפי הצוואר."
        ]
      },
      {
        id: 3,
        title: "פיתול עמוד שדרה אקספלוסיבי (Explosive Spine Twist)",
        desc: "שיעור כוח מתפרץ לחיבורי החוליות לשם מניעת פגיעות סיבוב פתאומיות בשערוך מהיר של מצב הגוף.",
        videoUrl: "https://www.youtube.com/embed/9b7vBqGf4Vb",
        videoID: "9b7vBqGf4Vb",
        isFree: false,
        baseParams: {
          sets: [3, 4, 4],
          reps: ["10 חזרות לצד", "13 חזרות לצד", "16 חזרות לצד"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 7.5 - סיבוב מנוהל", "RPE 8.5 - האצה מבוזרת", "RPE 9.5 - תחת התנגדות גומייה"]
        },
        cues: [
          "בעמידת חצי ברך או עמידה מלאה, בצעו פיתול פלג גוף עליון שלם בצורה מהירה ובלימה נשלטת.",
          "עליהם להרגיש את הליבה מייצבת ובולמת לאורך התנועה."
        ]
      },
      {
        id: 4,
        title: "נחיתה ובלימת זעזועים ממשטח (Drop Jump Prehab)",
        desc: "הכנת רצועות הברך ועמידות הגידים לנחיתות ועמידה פיזית מהירה לאחר הטלות וכוח דחיפה.",
        videoUrl: "https://www.youtube.com/embed/8v_Y-S6X7M3",
        videoID: "8v_Y-S6X7M3",
        isFree: false,
        baseParams: {
          sets: [3, 3, 4],
          reps: ["8 נחיתות", "11 נחיתות", "15 נחיתות"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 6 - בלימה חלקה", "RPE 8 - יציבות ללא רעידה", "RPE 9 - נחיתה אישית קשוחה לקפיצה"]
        },
        cues: [
          "שמטו עצמכם ממדרגה קטנה או קופסה בגובה 20-30 ס''מ ונחתו בשתי רגליים בשקט ובבטיחות.",
          "יש להימנע מקריסת ברכיים פנימה בעת ספיגת המשקל."
        ]
      },
      {
        id: 5,
        title: "כיווץ גריפ מקסימלי ממושך (Max-Tension Grip recovery)",
        desc: "שיא הסיבולת והתגוננות הדלקות של מפרקי היד לקראת סבבי אימון או תחרויות מלאים ללא כשל.",
        videoUrl: "https://www.youtube.com/embed/8vBqGf4Vb34",
        videoID: "8vBqGf4Vb34",
        isFree: false,
        baseParams: {
          sets: [3, 3, 3],
          reps: ["40 שניות החזקה", "50 שניות החזקה", "60 שניות החזקה"],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 8 - שחיקת כוח", "RPE 9 - אחיזה דומיננטית מירבית", "RPE 10 - כשל מלא מבוקר"]
        },
        cues: [
          "אחזו בבד גריפ כבד או בטבעות אחיזה יעודיות בלחץ שווה לאורך כל הזמן.",
          "בצעו מתיחת פשיטת שורש כף היד הנגדית להתאוששות מהירה."
        ]
      }
    ]
  }
];

const getSportLevelsData = (sport: SportType) => {
  if (sport === SportType.BJJ) {
    return BJJ_LEVELS_DATA;
  }
  const baseExercises = EXERCISES[sport] || [];
  
  return [
    {
      level: 1,
      name: "רמה 1: בקרת יציבה ובלימה ראשונית",
      tagline: SPORT_INFO[sport].tagline,
      overviewVideoUrl: "https://www.youtube.com/embed/S_8n0l6_aIE",
      exercises: baseExercises.map((ex, idx) => ({
        id: idx + 1,
        title: ex.name,
        desc: ex.description,
        videoUrl: "https://www.youtube.com/embed/Rk0HqSFr5U4",
        videoID: "Rk0HqSFr5U4",
        isFree: ex.isFree,
        baseParams: {
          sets: [3, 4, 4],
          reps: [ex.duration, ex.duration, ex.duration],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 5 - גירוי קל", "RPE 6 - החזקה מבוקרת", "RPE 7 - שחרור עמוק"]
        },
        cues: [
          "בצע את התרגול בריכוז מירבי תוך שליטה בנשימה.",
          "שמור על מנח פיזיולוגי תקין והפסק מיד בכל מקרה של אי-נוחות חריגה."
        ]
      }))
    },
    {
      level: 2,
      name: "רמה 2: חוזק מפרקי תחת עומסים",
      tagline: "פרוטוקול עומס קליני מחושב המגרה גידול עמידות ברצועות ושיפור כוח רוטציה.",
      overviewVideoUrl: "https://www.youtube.com/embed/Y-L7SAnp67o",
      exercises: baseExercises.map((ex, idx) => ({
        id: idx + 1,
        title: ex.name.includes("חיזוק") ? ex.name.replace("חיזוק", "כיול והעמסת") : "העצמת " + ex.name,
        desc: "גרסת עומס מוגבר: הגדלת משקל עבודה או הוספת לחץ התנגדות פרוגרסיבי ומניעת קריסות.",
        videoUrl: "https://www.youtube.com/embed/3yN8gH0kM4M",
        videoID: "3yN8gH0kM4M",
        isFree: false,
        baseParams: {
          sets: [3, 3, 4],
          reps: [ex.duration, ex.duration, ex.duration],
          rest: ["90 שניות מנוחה", "75 שניות מנוחה", "60 שניות מנוחה"],
          intensity: ["RPE 7 - עומס בינוני", "RPE 8 - הפעלה נשלטת", "RPE 8.5 - עמידות מתקדמת"]
        },
        cues: [
          "הקפד על כיווץ אקצנטרי איטי של 4 שניות בירידה או בחזרה.",
          "מנע שינויי מנח באגן ובכתפיים לאורך כל טווח התנועה."
        ]
      }))
    },
    {
      level: 3,
      name: "רמה 3: מהירות השק ושיגור כוח מתפרץ",
      tagline: "פיתוח כוח בלימה אולטימטיבי וקואורדינציה עצבית-שרירית מקסימלית במצבי קצה דינמיים.",
      overviewVideoUrl: "https://www.youtube.com/embed/S_8n0l6_aIE",
      exercises: baseExercises.map((ex, idx) => ({
        id: idx + 1,
        title: ex.name.includes("חיזוק") ? ex.name.replace("חיזוק", "פיצוץ ושיגור") : "מיקסום " + ex.name,
        desc: "גרסה עצימה לחלוטין: פיתוח כיווץ בליסטי, תנועות פליאומטריות מהירות ושחזור כוח בלימה.",
        videoUrl: "https://www.youtube.com/embed/Rk0HqSFr5U4",
        videoID: "Rk0HqSFr5U4",
        isFree: false,
        baseParams: {
          sets: [4, 4, 5],
          reps: ["10 חזרות מהירות", "12 חזרות מהירות", "RPE 9.5 - שיא עומס"],
          rest: ["120 שניות מנוחה", "90 שניות מנוחה", "90 שניות מנוחה"],
          intensity: ["RPE 8.5 - כוח בליסטי", "RPE 9 - גיוס כוח מרבי", "RPE 9.5 - שיא אתלטי"]
        },
        cues: [
          "התפרץ חזק לתנועה ובצע בלימה מוחלטת בשיא הטווח המפרקי.",
          "שלוט בשינויי כיוון ללא אובדן שיווי משקל דינמי."
        ]
      }))
    }
  ];
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState(AppScreen.SPLASH);
  const [authMode, setAuthMode] = useState("LOGIN");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [biometricPromptOpen, setBiometricPromptOpen] = useState(false);
  const [biometricSuccess, setBiometricSuccess] = useState(false);
  const handleSimulateBiometricSuccess = () => {
    setBiometricSuccess(true);
    setTimeout(() => {
      setBiometricPromptOpen(false);
      setBiometricSuccess(false);
      setFullName(fullName.trim() || "ספורטאי ביומטרי");
      setActiveScreen(AppScreen.MAIN_APP);
      setCurrentTab(BottomTab.HOME);
    }, 1200);
  };
  const [authError, setAuthError] = useState(null);
  const [liabilityWaiver, setLiabilityWaiver] = useState(false);
  const [qHeartHealth, setQHeartHealth] = useState(null);
  const [qConstraints, setQConstraints] = useState(null);
  const [qBalance, setQBalance] = useState(null);
  const [medicalError, setMedicalError] = useState(null);
  const [isFrozen, setIsFrozen] = useState(false);
  const [attachedFile, setAttachedFile] = useState(null);
  const [attachedFileName, setAttachedFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedToFirebase, setUploadedToFirebase] = useState(false);
  const [qAgeGroup, setQAgeGroup] = useState("");
  const [qSport, setQSport] = useState(SportType.FOOTBALL);
  const [qGoal, setQGoal] = useState(OnboardingGoal.PERFORMANCE);
  const [qPain, setQPain] = useState(PainLevel.NONE);
  const [onboardStep, setOnboardStep] = useState(1);
  const [otpDigits, setOtpDigits] = useState(Array(6).fill(""));
  const [otpCountdown, setOtpCountdown] = useState(30);
  const [otpError, setOtpError] = useState(null);
  const [focusedOtpIndex, setFocusedOtpIndex] = useState(0);
  useEffect(() => {
    let interval;
    if (activeScreen === AppScreen.EMAIL_VERIFICATION && otpCountdown > 0) {
      interval = setInterval(() => {
        setOtpCountdown((prev) => prev - 1);
      }, 1e3);
    }
    return () => clearInterval(interval);
  }, [activeScreen, otpCountdown]);
  const [currentTab, setCurrentTab] = useState(BottomTab.HOME);
  const [selectedSport, setSelectedSport] = useState(SportType.FOOTBALL);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallFeatureName, setPaywallFeatureName] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedInjury, setSelectedInjury] = useState(null);
  const [shopCategory, setShopCategory] = useState("הכל");
  const [cartCount, setCartCount] = useState(0);
  const [boughtItemName, setBoughtItemName] = useState(null);
  
  // Custom states for premium Recovio Shop
  const [cart, setCart] = useState<{ id: string; title: string; price: string; image: string; quantity: number }[]>([]);
  const [selectedShopProduct, setSelectedShopProduct] = useState<any | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'idle' | 'selection' | 'gateway'>('idle');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'bit' | 'gpay' | 'paybox' | null>(null);

  useEffect(() => {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
  }, [cart]);
  const [expandedBjjCard, setExpandedBjjCard] = useState(null);
  const [bjjCurrentLevel, setBjjCurrentLevel] = useState(() => {
    try {
      const saved = localStorage.getItem("bjjCurrentLevel");
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });
  const [bjjSelectedLevel, setBjjSelectedLevel] = useState(() => {
    try {
      const saved = localStorage.getItem("bjjCurrentLevel");
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });
  const [bjjCurrentWeek, setBjjCurrentWeek] = useState(() => {
    try {
      const saved = localStorage.getItem("bjjCurrentWeek");
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });
  const [bjjSelectedWeekView, setBjjSelectedWeekView] = useState(() => {
    try {
      const saved = localStorage.getItem("bjjCurrentWeek");
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });
  const [showBjjTestModal, setShowBjjTestModal] = useState(false);
  const [bjjTestPainInput, setBjjTestPainInput] = useState(null);
  const [bjjTestMotionInput, setBjjTestMotionInput] = useState(null);
  const [bjjTestError, setBjjTestError] = useState(null);
  const [bjjMilestoneStatus, setBjjMilestoneStatus] = useState("idle");
  const [showBjjMilestoneModal, setShowBjjMilestoneModal] = useState(false);
  const [bjjMilestoneVideoName, setBjjMilestoneVideoName] = useState(null);
  const [bjjMilestoneMethod, setBjjMilestoneMethod] = useState(null);
  const [bjjCameraCounter, setBjjCameraCounter] = useState(0);
  const [isSimulatingCamera, setIsSimulatingCamera] = useState(false);
  const [bjjWatchedKeys, setBjjWatchedKeys] = useState(() => []);
  const [bjjFirstWatchTimestamps, setBjjFirstWatchTimestamps] = useState(() => ({}));
  const [bjjRejectionNotes, setBjjRejectionNotes] = useState("");
  const [rejectionSimText, setRejectionSimText] = useState("נצפתה קריסת ברך פנימה (Valgus) במהלך מעברי 90-90. יש ליישר את הצוואר ולשמור על גב זקוף על מזרן ה-BJJ.");
  const [bjjIsPremium, setBjjIsPremium] = useState(false);
  const [bjjTab, setBjjTab] = useState("training");
  const [bjjRehabArea, setBjjRehabArea] = useState("neck_shoulder");
  const [showBjjPaywall, setShowBjjPaywall] = useState(false);
  const [bjjPaywallFeatureName, setBjjPaywallFeatureName] = useState("");
  const [bjjFullWorkoutExpanded, setBjjFullWorkoutExpanded] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(null);
  const [bjjToast, setBjjToast] = useState(null);
  const [bjjIsOffline, setBjjIsOffline] = useState(false);
  useEffect(() => {
    if (bjjSelectedLevel === bjjCurrentLevel) {
      if (bjjSelectedWeekView !== bjjCurrentWeek) {
        setBjjSelectedWeekView(bjjCurrentWeek);
      }
    } else {
      if (bjjSelectedWeekView !== 3) {
        setBjjSelectedWeekView(3);
      }
    }
  }, [bjjSelectedLevel, bjjCurrentLevel, bjjCurrentWeek, bjjSelectedWeekView]);
  useEffect(() => {
    try {
      localStorage.setItem("bjjCurrentLevel", bjjCurrentLevel.toString());
    } catch {}
  }, [bjjCurrentLevel]);
  useEffect(() => {
    try {
      localStorage.setItem("bjjCurrentWeek", bjjCurrentWeek.toString());
    } catch {}
  }, [bjjCurrentWeek]);
  useEffect(() => {
    try {
      localStorage.setItem("bjjWatchedKeys", JSON.stringify(bjjWatchedKeys));
    } catch {}
  }, [bjjWatchedKeys]);
  useEffect(() => {
    try {
      localStorage.setItem("bjjFirstWatchTimestamps", JSON.stringify(bjjFirstWatchTimestamps));
    } catch {}
  }, [bjjFirstWatchTimestamps]);
  const triggerBjjToast = (msg) => {
    setBjjToast(msg);
    setTimeout(() => {
      setBjjToast((currentMsg) => currentMsg === msg ? null : currentMsg);
    }, 3500);
  };
  const handleAddToCart = (product: any) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1
        }
      ];
    });
    triggerBjjToast(`🛒 ${product.title} התווסף לסל בהצלחה!`);
  };
  const handleQuantityChange = (id: string, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };
  const handleRemoveFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  const emailHasHebrew = /[א-ת]/.test(email);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim()) && !emailHasHebrew;
  const isPhoneValid = /^(050|052|053|054|055|058)\d{7}$/.test(phone.trim());
  const fullNameWords = fullName.trim().split(/\s+/);
  const isFullNameValid = fullNameWords.length >= 2 && fullNameWords.every((word) => word.length >= 2);
  const handleAuthSubmit = () => {
    if (authMode === "REGISTER") {
      if (!isFullNameValid) {
        setAuthError("נא להזין שם מלא (פרטי ומשפחה).");
        return;
      }
      if (emailHasHebrew) {
        setAuthError("כתובת אימייל חייבת להיות באנגלית בלבד.");
        return;
      }
      if (!isEmailValid) {
        setAuthError("כתובת אימייל לא תקינה.");
        return;
      }
      if (!isPhoneValid) {
        setAuthError("נא להזין מספר טלפון נייד תקין.");
        return;
      }
      if (password.length < 6) {
        setAuthError("הסיסמה חייבת להכיל לפחות 6 תווים לאבטחת החשבון.");
        return;
      }
      setAuthError(null);
      setOtpDigits(Array(6).fill(""));
      setOtpCountdown(30);
      setOtpError(null);
      setActiveScreen(AppScreen.EMAIL_VERIFICATION);
    } else {
      if (!isPhoneValid) {
        setAuthError("נא להזין מספר טלפון נייד תקין.");
        return;
      }
      if (password.length < 6) {
        setAuthError("הסיסמה חייבת להכיל לפחות 6 תווים לאבטחת החשבון.");
        return;
      }
      setAuthError(null);
      if (fullName === "") {
        setFullName("ספורטאי Recovio");
      }
      setActiveScreen(AppScreen.MAIN_APP);
    }
  };
  const handleMedicalSubmit = () => {
    if (!liabilityWaiver) {
      setMedicalError("יש לסמן את תיבת ההצהרה להסרת אחריות משפטית כדי להמשיך.");
      return;
    }
    if (qHeartHealth === null || qConstraints === null || qBalance === null) {
      setMedicalError("חובה לענות על כל 3 שאלות הבריאות המנדטוריות.");
      return;
    }
    setMedicalError(null);
    if (qHeartHealth === true || qConstraints === true || qBalance === true) {
      setIsFrozen(true);
      setActiveScreen(AppScreen.MEDICAL_FREEZE);
    } else {
      setActiveScreen(AppScreen.ONBOARD_Q1);
    }
  };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAttachedFile(file);
      setAttachedFileName(file.name);
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setUploadedToFirebase(true);
      }, 1500);
    }
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setAttachedFile(file);
      setAttachedFileName(file.name);
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
        setUploadedToFirebase(true);
      }, 1500);
    }
  };
  const handleOverrideUnlock = () => {
    if (uploadedToFirebase) {
      setIsFrozen(false);
      setActiveScreen(AppScreen.ONBOARD_Q1);
    }
  };
  const saveOnboardingToFirestore = () => {
    setActiveScreen(AppScreen.MAIN_APP);
    setCurrentTab(BottomTab.HOME);
    setSelectedSport(qSport);
  };
  const triggerPaywall = (feature) => {
    setPaywallFeatureName(feature);
    setPaywallOpen(true);
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-black text-white flex flex-col font-sans relative overflow-x-hidden selection:bg-[#007BFF]/30 selection:text-white", id: "applet-viewport-root", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#09090c_1px,transparent_1px),linear-gradient(to_bottom,#09090c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-50" }, void 0, false, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 606,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("header", { className: "relative w-full border-b border-[#1a1a1a] bg-[#0a0a0a]/90 backdrop-blur-md px-8 py-4 flex flex-col md:flex-row items-center justify-between z-10 gap-4", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-black border border-[#007BFF]/40 flex items-center justify-center overflow-hidden shadow-lg shadow-[#007BFF]/10 select-none", children: /* @__PURE__ */ jsxDEV("img", {
          src: appLogo,
          alt: "Recovio Logo",
          className: "w-[90%] h-[90%] object-cover rounded-full",
          referrerPolicy: "no-referrer"
        }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 612,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 611,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h1", { className: "text-md font-bold tracking-tight text-white flex items-center gap-2", children: [
            "RECOVIO ACADEMY",
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/30 px-2 py-0.5 rounded-full font-mono font-medium", children: "ANDROID SDK 34" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 617,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 615,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-400", children: "הדמיית ממשק אנדרואיד אקטיבי בעברית וסביבת פיתוח Kotlin Jetpack Compose" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 619,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 614,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 610,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 flex-wrap md:flex-nowrap", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5 text-xs bg-[#050505] border border-[#1a1a1a] rounded-xl px-4 py-2.5 text-zinc-400 max-w-sm", children: [
          /* @__PURE__ */ jsxDEV(Database, { className: `w-4 h-4 shrink-0 transition-colors ${bjjIsOffline ? "text-red-500 animate-pulse" : "text-[#007BFF]"}` }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 624,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV("span", { children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-zinc-200", children: "סטטוס פיירבייס:" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 626,
              columnNumber: 13
            }, this),
            bjjIsOffline ? " הדמיית ניתוק פעילה (מצב אופליין מקומי)" : " מחובר מקומית לשגשוג (Firestore & Storage פעילים)"
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 625,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 623,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              const nextOffline = !bjjIsOffline;
              setBjjIsOffline(nextOffline);
              triggerBjjToast(
                nextOffline
                  ? "🔌 הועבר למצב אופליין! הסרטונים והשלבים זמינים דרך מטמון האנדרואיד המקומי."
                  : "🟢 הועבר למצב אונליין! חיבור ה-Active Shield לשרתים שוקם בהצלחה."
              );
            },
            className: `px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-2 border transition-all duration-300 shadow-md ${
              bjjIsOffline
                ? "bg-red-950/40 text-red-400 border-red-500/40 hover:bg-red-900/30 hover:border-red-500/60"
                : "bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-905/30 hover:border-emerald-500/65"
            } select-none cursor-pointer`,
            children: [
              bjjIsOffline ? /* @__PURE__ */ jsxDEV(WifiOff, { className: "w-4 h-4 text-red-500 animate-pulse" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 631,
                columnNumber: 29
              }, this) : /* @__PURE__ */ jsxDEV(Wifi, { className: "w-4 h-4 text-emerald-400" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 635,
                columnNumber: 29
              }, this),
              bjjIsOffline ? "מצב אופליין פעיל 🔴" : "מדמה חיבור רשת 🟢"
            ]
          },
          void 0,
          false,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 627,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 622,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 609,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-1 w-full max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch z-10", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "lg:col-span-7 flex flex-col gap-6", id: "technical-panel", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxDEV(CodeExplorer, {}, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 639,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 638,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] p-5 rounded-2xl flex flex-col gap-4 shadow-2xl", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white flex items-center gap-2 border-b border-[#1a1a1a] pb-3", children: [
            /* @__PURE__ */ jsxDEV(Database, { className: "w-4 h-4 text-[#FFCA28]" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 645,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { children: "ניטור נתוני פיירבייס בזמן אמת (Simulated Cloud Firestore Logs)" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 646,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 644,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4 text-xs font-mono", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "bg-black/60 border border-[#1a1a1a] rounded-xl p-3 flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] text-zinc-500 uppercase font-black", children: "auth.currentUser" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 651,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white truncate", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-[#007BFF]", children: "UID:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 653,
                  columnNumber: 19
                }, this),
                " ",
                fullName ? `athlete_${fullName.toLowerCase().replace(/\s+/g, "_")}` : "טרם התחבר"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 652,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white truncate", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-[#007BFF]", children: "שם:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 656,
                  columnNumber: 19
                }, this),
                " ",
                fullName || "אורח"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 655,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white truncate", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-[#007BFF]", children: "אימייל:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 659,
                  columnNumber: 19
                }, this),
                " ",
                email || "טרם הוזן"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 658,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white truncate", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-[#007BFF]", children: "טלפון:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 662,
                  columnNumber: 19
                }, this),
                " ",
                phone || "טרם הוזן"
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 661,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 650,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "bg-black/60 border border-[#1a1a1a] rounded-xl p-3 flex flex-col gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] text-zinc-500 uppercase font-black font-mono", children: 'db.collection("athletes")' }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 667,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400", children: "ageGroup:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 669,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400", children: [
                  '"',
                  qAgeGroup || "חסר",
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 669,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 668,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400", children: "primarySport:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 672,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400", children: [
                  '"',
                  qSport ? SPORT_INFO[qSport].name : "חסר",
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 672,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 671,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400", children: "mainGoal:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 675,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400", children: [
                  '"',
                  qGoal || "חסר",
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 675,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 674,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white text-xs", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400", children: "bjjLevelStatus:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 678,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 font-extrabold", children: [
                  '"Lvl ',
                  bjjCurrentLevel,
                  " • Wk ",
                  bjjCurrentWeek,
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 678,
                  columnNumber: 75
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 677,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "text-white text-xs", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "text-amber-400", children: "bjjMilestoneStatus:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 681,
                  columnNumber: 19
                }, this),
                " ",
                /* @__PURE__ */ jsxDEV("span", { className: `px-1.5 py-0.5 rounded text-[10px] font-bold ${bjjMilestoneStatus === "pending" ? "bg-amber-950 text-amber-400 border border-amber-900" : bjjMilestoneStatus === "approved" ? "bg-emerald-950 text-emerald-400 border border-emerald-800" : "text-zinc-400"}`, children: [
                  '"',
                  bjjMilestoneStatus,
                  '"'
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 682,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 680,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 666,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 649,
            columnNumber: 13
          }, this),
          selectedSport && bjjMilestoneStatus === "pending" && /* @__PURE__ */ jsxDEV("div", { className: "bg-[#120808] border border-red-500/30 rounded-xl p-3.5 space-y-3.5 animate-fadeIn text-right", dir: "rtl", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5 text-rose-400 font-extrabold text-[11px]", children: [
                /* @__PURE__ */ jsxDEV("span", { className: "animate-pulse", children: "🩺" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 699,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("span", { children: "סנכרון קליני בזמן אמת - המחשב של תום" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 700,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 698,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] bg-red-950 text-red-400 px-1.5 py-0.5 rounded-full font-mono uppercase font-black", children: "מחכה לאישור" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 702,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 697,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-300 leading-normal font-sans", children: [
              "התקבל קובץ וידיאו בוחן ",
              /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: [
                '"',
                bjjMilestoneVideoName,
                '"'
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 706,
                columnNumber: 42
              }, this),
              " מספורטאי ",
              fullName || "האקדמיה",
              ". תום מנתח את הביו-מכניקה ומייצבי המפרקים השונים."
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 705,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxDEV("label", { className: "text-[9px] text-zinc-400 font-extrabold block", children: "✍️ הערות קליניות לתנועה (להתאמת משוב דחייה):" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 711,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  value: rejectionSimText,
                  onChange: (e) => setRejectionSimText(e.target.value),
                  placeholder: "הקלד הערות תיקון לספורטאי...",
                  className: "w-full text-[10px] text-zinc-200 bg-zinc-950 p-2 rounded border border-zinc-800/80 focus:border-red-500 font-sans leading-relaxed resize-none h-14 outline-none text-right"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 712,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 710,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    setBjjMilestoneStatus("approved");
                    setBjjRejectionNotes("");
                    if (bjjCurrentLevel < 3) {
                      const nextLvl = bjjCurrentLevel + 1;
                      setBjjCurrentLevel(nextLvl);
                      setBjjSelectedLevel(nextLvl);
                      setBjjCurrentWeek(1);
                      setBjjSelectedWeekView(1);
                    }
                    alert("החלטה קלינית נשמרה ב-Firestore בהצלחה! השלב הבא שוחרר והמחשב של תום סנכרן סטטוס ירוק. 🎉");
                  },
                  className: "flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg text-center cursor-pointer transition-all border border-emerald-500 text-[10.5px] leading-none",
                  children: "🟢 אשר סרטון והעבר רמה"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 721,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  onClick: () => {
                    setBjjMilestoneStatus("rejected");
                    setBjjRejectionNotes(rejectionSimText);
                    alert(`המבחן נדחה בהצלחה! המשוב הקליני נשלח למתאמן והאפליקציה עברה למצב אדום: "המבחן לא אושר – נדרש תיקון" ❌`);
                  },
                  className: "px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-extrabold border border-rose-500 rounded-lg text-center cursor-pointer transition-all text-[10.5px] leading-none",
                  children: "🔴 דחה עם משוב לתיקון"
                },
                void 0,
                false,
                {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 738,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 720,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 696,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0a0a0a] p-3 rounded-xl border border-[#1a1a1a] text-xs flex items-center justify-between text-zinc-400", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(UploadCloud, { className: "w-4 h-4 text-emerald-400" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 754,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: [
                /* @__PURE__ */ jsxDEV("strong", { className: "text-zinc-300", children: "Firebase Cloud Storage:" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 756,
                  columnNumber: 19
                }, this),
                " ",
                uploadedToFirebase ? /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 font-semibold", children: [
                  "הועלה קובץ אישור בהצלחה (",
                  attachedFileName,
                  ")"
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 758,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDEV("span", { children: "אין קבצים מצורפים" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 760,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 755,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 753,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] bg-black text-zinc-500 px-2 py-0.5 rounded font-mono", children: "bucket://medical_disclaimers" }, void 0, false, {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 764,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 752,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 643,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 635,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "lg:col-span-5 flex flex-col items-center justify-center p-2 relative", id: "simulator-panel", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              setActiveScreen(AppScreen.SPLASH);
            },
            title: "הדמיית לחיצה על אייקון האפליקציה להפעלת מסך הפתיחה (Splash Screen)",
            className: "absolute top-0 right-4 -mt-4 mb-2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-[#007BFF] text-[10.5px] font-black cursor-pointer shadow-md hover:border-[#007BFF]/30 transition-all select-none",
            dir: "rtl",
            children: [
              /* @__PURE__ */ jsxDEV(Activity, { className: "w-3.5 h-3.5 text-[#007BFF] animate-pulse" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 780,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("span", { children: "הקלק על אייקון האפליקציה (Splash Screen) 📱" }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 781,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 772,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-4 -mt-4 mb-2 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#007BFF]/10 text-[#007BFF] text-[10px] border border-[#007BFF]/25", children: [
          /* @__PURE__ */ jsxDEV(Smartphone, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 785,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("span", { className: "font-extrabold uppercase font-mono", children: "Android Emulator [Active]" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 786,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 784,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(AndroidFrame, { children: /* @__PURE__ */ jsxDEV(AnimatePresence, { mode: "wait", children: [
          activeScreen === AppScreen.SPLASH && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.5 },
              className: "absolute inset-0 z-55 bg-black flex-1 flex flex-col h-full w-full",
              children: /* @__PURE__ */ jsxDEV(AnimatedSplashScreen, { onComplete: () => setActiveScreen(AppScreen.AUTH) }, void 0, false, {
                fileName: "/app/applet/src/App.tsx",
                lineNumber: 801,
                columnNumber: 19
              }, this)
            },
            "screen-splash",
            false,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 794,
              columnNumber: 17
            },
            this
          ),
          activeScreen === AppScreen.AUTH && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "flex-1 flex flex-col justify-between p-6 h-full relative",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-col items-center", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-4 border border-[#007BFF]/40 shadow-inner overflow-hidden", children: /* @__PURE__ */ jsxDEV("img", {
                    src: appLogo,
                    alt: "Recovio Logo",
                    className: "w-[90%] h-[90%] object-cover rounded-full",
                    referrerPolicy: "no-referrer"
                  }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 817,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 816,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("h2", { className: "text-lg font-black text-center text-white tracking-widest uppercase", children: "RECOVIO ACADEMY" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 819,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-center text-zinc-400 mt-2", children: "רמת אימון וביומכניקה משקמת עילאית" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 820,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 815,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "my-6 space-y-3.5 flex-1 flex flex-col justify-center", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-zinc-300 text-right mb-1", children: authMode === "REGISTER" ? "צור חשבון ספורטאי חדש:" : "כניסה למערכת:" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 825,
                    columnNumber: 21
                  }, this),
                  authMode === "REGISTER" && /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 text-right", children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "text-[11px] text-zinc-400 mr-2 font-medium", children: "שם מלא" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 831,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        type: "text",
                        value: fullName,
                        onChange: (e) => setFullName(e.target.value),
                        placeholder: "ישראל ישראלי",
                        className: `w-full bg-[#070707] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none placeholder:text-zinc-600 focus:ring-1 focus:ring-[#007BFF]/50 transition-all text-right ${fullName.trim() !== "" && !isFullNameValid ? "border-rose-500/80 focus:border-rose-500" : "border-[#1a1a1a] focus:border-[#007BFF]"}`
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 832,
                        columnNumber: 25
                      },
                      this
                    ),
                    fullName.trim() !== "" && !isFullNameValid && /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-rose-500 mr-2 mt-1 font-semibold", children: "נא להזין שם מלא (פרטי ומשפחה)" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 844,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 830,
                    columnNumber: 23
                  }, this),
                  authMode === "REGISTER" && /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 text-right", children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "text-[11px] text-zinc-400 mr-2 font-medium", children: "אימייל" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 853,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        type: "email",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        placeholder: "sport@academy.co.il",
                        className: `w-full bg-[#070707] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none placeholder:text-zinc-600 focus:ring-1 focus:ring-[#007BFF]/50 transition-all text-right ${email.trim() !== "" && (emailHasHebrew || !isEmailValid) ? "border-rose-500/80 focus:border-rose-500" : "border-[#1a1a1a] focus:border-[#007BFF]"}`
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 854,
                        columnNumber: 25
                      },
                      this
                    ),
                    email.trim() !== "" && emailHasHebrew && /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-rose-500 mr-2 mt-1 font-semibold", children: "כתובת אימייל חייבת להיות באנגלית בלבד" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 866,
                      columnNumber: 27
                    }, this),
                    email.trim() !== "" && !emailHasHebrew && !isEmailValid && /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-rose-500 mr-2 mt-1 font-semibold", children: "כתובת אימייל לא תקינה" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 871,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 852,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 text-right", children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "text-[11px] text-zinc-400 mr-2 font-medium", children: authMode === "REGISTER" ? "מספר טלפון" : "מספר טלפון (שם משתמש)" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 879,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        type: "tel",
                        value: phone,
                        onChange: (e) => setPhone(e.target.value),
                        placeholder: "0541234567",
                        className: `w-full bg-[#070707] border rounded-xl px-4 py-3 text-sm text-white focus:outline-none placeholder:text-zinc-600 focus:ring-1 focus:ring-[#007BFF]/50 transition-all text-right ${phone.trim() !== "" && !/^(050|052|053|054|055|058)\d{7}$/.test(phone.trim()) ? "border-rose-500/80 focus:border-rose-500" : "border-[#1a1a1a] focus:border-[#007BFF]"}`
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 882,
                        columnNumber: 23
                      },
                      this
                    ),
                    phone.trim() !== "" && !/^(050|052|053|054|055|058)\d{7}$/.test(phone.trim()) && /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-rose-500 mr-2 mt-1 font-semibold", children: "נא להזין מספר טלפון נייד תקין" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 894,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 878,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-1 text-right", children: [
                    /* @__PURE__ */ jsxDEV("label", { className: "text-[11px] text-zinc-400 mr-2 font-medium", children: "סיסמה" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 901,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "flex gap-2", children: [
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "password",
                          value: password,
                          onChange: (e) => setPassword(e.target.value),
                          placeholder: "••••••••",
                          className: "flex-1 bg-[#070707] border border-[#1a1a1a] focus:border-[#007BFF] rounded-xl px-4 py-3 text-sm text-white focus:outline-none placeholder:text-zinc-600 focus:ring-1 focus:ring-[#007BFF]/50 transition-all text-right"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 903,
                          columnNumber: 25
                        },
                        this
                      ),
                      authMode === "LOGIN" && /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          type: "button",
                          onClick: () => setBiometricPromptOpen(true),
                          className: "w-12 h-12 shrink-0 bg-[#070707] border border-[#1a1a1a] hover:border-[#007BFF] hover:bg-[#007BFF]/5 active:bg-[#007BFF]/10 text-[#007BFF] rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-lg shadow-[#007BFF]/5",
                          title: "התחברות ביומטרית",
                          children: /* @__PURE__ */ jsxDEV(Fingerprint, { className: "w-5 h-5 animate-pulse" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 917,
                            columnNumber: 29
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 911,
                          columnNumber: 27
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 902,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 900,
                    columnNumber: 21
                  }, this),
                  authError && /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-rose-400 text-right mt-2 flex items-center gap-1.5 font-medium leading-relaxed bg-rose-500/5 p-2.5 rounded-lg border border-rose-500/10", children: [
                    /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-3.5 h-3.5 text-rose-400 shrink-0" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 925,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: authError }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 926,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 924,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 824,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: handleAuthSubmit,
                      disabled: authMode === "REGISTER" ? !isEmailValid || !isPhoneValid || !isFullNameValid : !isPhoneValid || password.length < 6,
                      className: `w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all text-center ${authMode === "REGISTER" && (!isEmailValid || !isPhoneValid || !isFullNameValid) || authMode === "LOGIN" && (!isPhoneValid || password.length < 6) ? "bg-zinc-850 text-zinc-500 cursor-not-allowed opacity-50 border border-[#1a1a1a]" : "bg-[#007BFF] hover:bg-[#0066DD] active:bg-[#0055BB] shadow-[#007BFF]/15 active:translate-y-0.5 cursor-pointer"}`,
                      children: authMode === "REGISTER" ? "צור חשבון והתחל להתאמן" : "התחבר"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 933,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        setAuthMode(authMode === "REGISTER" ? "LOGIN" : "REGISTER");
                        setAuthError(null);
                      },
                      className: "w-full text-center text-xs text-[#007BFF] hover:underline transition-all font-semibold py-2 cursor-pointer",
                      children: authMode === "REGISTER" ? "כבר יש לך חשבון? התחבר כאן" : "נרשם חדש? הרשם עכשיו והתחל להתאמן"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 950,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 932,
                  columnNumber: 19
                }, this),
                biometricPromptOpen && /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm z-40 rounded-3xl overflow-hidden flex flex-col justify-end", children: /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 150 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 150 },
                    className: "w-full bg-[#121212] border-t border-zinc-800 rounded-t-3xl p-6 text-right flex flex-col gap-5 shadow-2xl relative z-50",
                    style: { direction: "rtl" },
                    children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col items-center text-center mt-2", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-full bg-[#007BFF]/15 border border-[#007BFF]/30 flex items-center justify-center text-[#007BFF] mb-3 relative", children: !biometricSuccess ? /* @__PURE__ */ jsxDEV(Fingerprint, { className: "w-7 h-7 text-[#007BFF] animate-pulse" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 974,
                          columnNumber: 31
                        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "w-7 h-7 text-emerald-500 rounded-full flex items-center justify-center font-bold", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-6 h-6 text-emerald-500" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 977,
                          columnNumber: 33
                        }, this) }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 976,
                          columnNumber: 31
                        }, this) }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 972,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white", children: "אימות ביומטרי (Recovio Academy)" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 981,
                          columnNumber: 27
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-400 mt-1", children: "הנח את האצבע על חיישן טביעת האצבע כדי להתחבר" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 982,
                          columnNumber: 27
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 971,
                        columnNumber: 25
                      }, this),
                      biometricSuccess && /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-center text-emerald-400 font-bold bg-emerald-950/20 py-2 px-4 rounded-xl border border-emerald-900/30 animate-pulse", children: "זיהוי הושלם בהצלחה! מתחבר..." }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 986,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end gap-3 mt-2 border-t border-zinc-900 pt-4", children: [
                        /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            type: "button",
                            onClick: () => {
                              setBiometricPromptOpen(false);
                              setBiometricSuccess(false);
                            },
                            className: "px-5 py-2.5 text-xs text-zinc-400 font-bold hover:text-white transition-colors cursor-pointer",
                            children: "ביטול"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 992,
                            columnNumber: 27
                          },
                          this
                        ),
                        !biometricSuccess && /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            type: "button",
                            onClick: handleSimulateBiometricSuccess,
                            className: "px-5 py-2.5 text-xs bg-[#007BFF] hover:bg-[#0066DD] text-white rounded-xl font-bold transition-colors cursor-pointer",
                            children: "הדמיית מגע אצבע 👍"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1003,
                            columnNumber: 29
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 991,
                        columnNumber: 25
                      }, this)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 964,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 963,
                  columnNumber: 21
                }, this)
              ]
            },
            "screen-auth",
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 807,
              columnNumber: 17
            },
            this
          ),
          activeScreen === AppScreen.EMAIL_VERIFICATION && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "flex-1 flex flex-col justify-between p-6 h-full relative text-right",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mt-8 flex flex-col items-center", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-[#007BFF]/10 flex items-center justify-center mb-4 border border-[#007BFF]/20 shadow-inner", children: /* @__PURE__ */ jsxDEV(Lock, { className: "w-6 h-6 text-[#007BFF]" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1030,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1029,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white text-center", children: "אימות כתובת אימייל" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1032,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-400 text-center mt-3 leading-relaxed", children: "שלחנו קוד אימות לכתובת המייל שלך. נא להזין אותו כאן כדי להמשיך." }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1033,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-semibold text-zinc-300 mt-1 font-mono text-center truncate max-w-full", children: email }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1036,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1028,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "my-8", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center gap-2", dir: "ltr", children: otpDigits.map((digit, idx) => {
                    const isFocused = focusedOtpIndex === idx;
                    return /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        id: `otp-${idx}`,
                        type: "text",
                        maxLength: 1,
                        pattern: "[0-9]*",
                        inputMode: "numeric",
                        value: digit,
                        onFocus: () => setFocusedOtpIndex(idx),
                        onChange: (e) => {
                          const val = e.target.value;
                          if (val && !/^\d+$/.test(val)) return;
                          const nextDigits = [...otpDigits];
                          nextDigits[idx] = val;
                          setOtpDigits(nextDigits);
                          setOtpError(null);
                          if (val !== "" && idx < 5) {
                            const nextIndex = idx + 1;
                            setFocusedOtpIndex(nextIndex);
                            setTimeout(() => {
                              const nextInput = document.getElementById(`otp-${nextIndex}`) as HTMLInputElement | null;
                              if (nextInput) {
                                nextInput.focus();
                                nextInput.select();
                              }
                            }, 10);
                          }
                        },
                        onKeyDown: (e) => {
                          if (e.key === "Backspace") {
                            if (otpDigits[idx] === "" && idx > 0) {
                              const nextDigits = [...otpDigits];
                              nextDigits[idx - 1] = "";
                              setOtpDigits(nextDigits);
                              const prevIndex = idx - 1;
                              setFocusedOtpIndex(prevIndex);
                              setTimeout(() => {
                                const prevInput = document.getElementById(`otp-${prevIndex}`) as HTMLInputElement | null;
                                if (prevInput) {
                                  prevInput.focus();
                                  prevInput.select();
                                }
                              }, 10);
                            } else {
                              const nextDigits = [...otpDigits];
                              nextDigits[idx] = "";
                              setOtpDigits(nextDigits);
                            }
                          }
                        },
                        className: `w-10 h-12 bg-white rounded-xl text-center text-lg font-bold text-black focus:outline-none transition-all duration-300 font-mono ${isFocused ? "border-[3.5px] border-[#007BFF] scale-105 shadow-[0_0_22px_rgba(0,123,255,0.85),_0_0_8px_rgba(0,123,255,0.45)]" : "border border-zinc-200 hover:border-zinc-300"}`
                      },
                      idx,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1047,
                        columnNumber: 27
                      },
                      this
                    );
                  }) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1043,
                    columnNumber: 21
                  }, this),
                  otpError && /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-rose-400 text-center mt-4 flex items-center justify-center gap-1.5 font-medium leading-relaxed bg-rose-500/5 p-2.5 rounded-lg border border-rose-500/10", children: [
                    /* @__PURE__ */ jsxDEV(AlertTriangle, { className: "w-3.5 h-3.5 text-rose-400 shrink-0" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1112,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { children: otpError }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1113,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1111,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1042,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        const enteredCode = otpDigits.join("");
                        if (enteredCode.length < 4) {
                          setOtpError("אנא הזן קוד אימות מלא כדי להמשיך.");
                          return;
                        }
                        setActiveScreen(AppScreen.MEDICAL_WAVE);
                      },
                      className: "w-full py-3.5 rounded-xl bg-[#007BFF] hover:bg-[#0066DD] active:bg-[#0055BB] font-bold text-sm text-white shadow-lg shadow-[#007BFF]/15 active:translate-y-0.5 transition-all text-center cursor-pointer",
                      children: "אמת קוד והמשך"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1120,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: otpCountdown > 0 ? /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-500 font-sans", children: [
                    "ניתן לשלוח קוד חדש בעוד ",
                    /* @__PURE__ */ jsxDEV("span", { className: "font-mono font-bold text-[#007BFF]", children: otpCountdown }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1137,
                      columnNumber: 51
                    }, this),
                    " שניות"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1136,
                    columnNumber: 25
                  }, this) : /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        setOtpCountdown(30);
                        setOtpDigits(Array(6).fill(""));
                        setOtpError(null);
                      },
                      className: "text-xs text-[#007BFF] hover:underline hover:text-[#0066DD] transition-all font-bold cursor-pointer",
                      children: "שלח שוב"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1140,
                      columnNumber: 25
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1134,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setActiveScreen(AppScreen.AUTH),
                      className: "w-full text-center text-xs text-zinc-500 hover:text-zinc-300 py-1 hover:underline cursor-pointer",
                      children: "חזור למסך ההרשמה"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1153,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1119,
                  columnNumber: 19
                }, this)
              ]
            },
            "screen-email-verification",
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1020,
              columnNumber: 17
            },
            this
          ),
          activeScreen === AppScreen.MEDICAL_WAVE && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "flex-1 flex flex-col justify-between p-6 h-full relative text-right",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsxDEV(Heart, { className: "w-5 h-5 text-rose-500" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1175,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-bold text-white", children: "הצהרת בריאות ותנאי שימוש" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1176,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1174,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-400 leading-relaxed", children: "מתאמן/ת יקר/ה, על מנת להתאים לך תנאי אימון אופטימליים ולבצע מעקב בטיחות בלתי מתפשר, אנא ענה על הצהרת הבריאות הבאה:" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1178,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1173,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "my-4 space-y-4 max-h-[350px] overflow-y-auto pr-1 style-scrollbar", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] p-3 rounded-xl flex flex-col gap-2 shadow-sm", children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-zinc-200", children: "1. האם רופא אמר לך פעם שיש לך בעיית לב כלשהי או לחץ דם חריג?" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1186,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => setQHeartHealth(true),
                          className: `py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${qHeartHealth === true ? "bg-[#007BFF] border-[#0066DD] text-white shadow-md shadow-[#007BFF]/15" : "bg-[#070707] border-[#1a1a1a] hover:bg-zinc-900 text-zinc-400"}`,
                          children: "כן"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1190,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => setQHeartHealth(false),
                          className: `py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${qHeartHealth === false ? "bg-[#007BFF] border-[#0066DD] text-white shadow-md shadow-[#007BFF]/15" : "bg-[#070707] border-[#1a1a1a] hover:bg-zinc-900 text-zinc-400"}`,
                          children: "לא"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1200,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1189,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1185,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] p-3 rounded-xl flex flex-col gap-2 shadow-sm", children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-zinc-200", children: "2. האם יש לך הגבלות פיזיות, כאבים כרוניים או בעיות מפרקים פעילות המונעים ממך להתאמן?" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1214,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => setQConstraints(true),
                          className: `py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${qConstraints === true ? "bg-[#007BFF] border-[#0066DD] text-white shadow-md shadow-[#007BFF]/15" : "bg-[#070707] border-[#1a1a1a] hover:bg-zinc-900 text-zinc-400"}`,
                          children: "כן"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1218,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => setQConstraints(false),
                          className: `py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${qConstraints === false ? "bg-[#007BFF] border-[#0066DD] text-white shadow-md shadow-[#007BFF]/15" : "bg-[#070707] border-[#1a1a1a] hover:bg-zinc-900 text-zinc-400"}`,
                          children: "לא"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1228,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1217,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1213,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] p-3 rounded-xl flex flex-col gap-2 shadow-sm", children: [
                    /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-semibold text-zinc-200", children: "3. האם איבדת פעם בעקבות סחרחורת שיווי משקל, קוצר נשימה חריף או הכרה?" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1242,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => setQBalance(true),
                          className: `py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${qBalance === true ? "bg-[#007BFF] border-[#0066DD] text-white shadow-md shadow-[#007BFF]/15" : "bg-[#070707] border-[#1a1a1a] hover:bg-zinc-900 text-zinc-400"}`,
                          children: "כן"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1246,
                          columnNumber: 25
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => setQBalance(false),
                          className: `py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${qBalance === false ? "bg-[#007BFF] border-[#0066DD] text-white shadow-md shadow-[#007BFF]/15" : "bg-[#070707] border-[#1a1a1a] hover:bg-zinc-900 text-zinc-400"}`,
                          children: "לא"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1256,
                          columnNumber: 25
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1245,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1241,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2.5 py-2.5", children: [
                    /* @__PURE__ */ jsxDEV(
                      "input",
                      {
                        type: "checkbox",
                        id: "liability-checkbox",
                        checked: liabilityWaiver,
                        onChange: (e) => setLiabilityWaiver(e.target.checked),
                        className: "w-4.5 h-4.5 mt-0.5 border-[#1a1a1a] accent-[#007BFF] rounded bg-[#070707]"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1271,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV("label", { htmlFor: "liability-checkbox", className: "text-[11px] leading-relaxed text-zinc-300 cursor-pointer select-none", children: "אני מצהיר כי אני בריא פיזית ומסיר אחריות משפטית מפעילות האקדמיה וצוות השיקום והאימונים." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1278,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1270,
                    columnNumber: 21
                  }, this),
                  medicalError && /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-rose-400 text-right mt-1 bg-rose-950/20 p-2 rounded-lg border border-rose-950/30 leading-normal", children: medicalError }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1284,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1184,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: handleMedicalSubmit,
                    className: "w-full py-3 rounded-xl bg-[#007BFF] hover:bg-[#0066DD] active:bg-[#0055BB] font-bold text-sm text-white shadow-md shadow-[#007BFF]/10 active:translate-y-0.5 transition-all text-center cursor-pointer",
                    children: "המשך לשאלון התאמה"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1290,
                    columnNumber: 19
                  },
                  this
                )
              ]
            },
            "screen-medical",
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1165,
              columnNumber: 17
            },
            this
          ),
          activeScreen === AppScreen.MEDICAL_FREEZE && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
              className: "flex-1 flex flex-col justify-between p-6 h-full relative text-right",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "my-auto space-y-4 max-h-[500px] overflow-y-auto pr-1 style-scrollbar", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-rose-600/10 border border-rose-500/20 flex items-center justify-center mx-auto mb-2 select-none", children: /* @__PURE__ */ jsxDEV(ShieldAlert, { className: "w-6 h-6 text-rose-500" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1311,
                    columnNumber: 23
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1310,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("h2", { className: "text-base font-bold text-center text-rose-500", children: "⚠️ חסם בטיחות רפואי אקטיבי" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1313,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-center text-zinc-300 leading-relaxed", children: "חלק מתשובותיך העידו על מגבלות, בעיית לב או עילפון. גישתך לאימונים באפליקציה הוקפאה באופן זמני ולא ניתן להמשיך ללא בדיקה קלינית או צרוף אישור של רופא בתוקף." }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1314,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] p-4 rounded-2xl flex flex-col gap-3 shadow-sm", children: [
                    /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-bold text-white", children: 'תיאום בדיקה קלינית אישית בראשל"צ' }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1319,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-zinc-400 leading-relaxed", children: "הקליניקה מיועדת לבחינה ביומכנית מלאה של הלב והמפרקים לשלילת סממני סיכון." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1320,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => {
                          const name = fullName.trim() || "ספורטאי";
                          const msg = `שלום, שמי ${name}, הגעתי דרך האפליקציה שלכם Recovio Academy. אני מעוניין לקבוע תור לקליניקה.`;
                          window.open(`https://wa.me/972587858708?text=${encodeURIComponent(msg)}`, "_blank");
                        },
                        className: "w-full py-2.5 text-xs font-bold bg-[#007BFF] hover:bg-[#0066DD] active:bg-[#0055BB] text-white rounded-xl transition-all cursor-pointer text-center",
                        children: 'תיאום בדיקה קלינית אישית בראשל"צ (WhatsApp) ✔️'
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1324,
                        columnNumber: 23
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1318,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] p-4 rounded-2xl flex flex-col gap-2 shadow-sm", children: [
                    /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-bold text-white", children: "יש לי אישור רפואי בתוקף (העלאה)" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1337,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-zinc-400 mb-2", children: "העלה צילום אישור רפואי חתום על ידי רופא המאשר לכם להתאמן באימונים עצימים." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1338,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "label",
                      {
                        onDragOver: handleDragOver,
                        onDrop: handleDrop,
                        className: "border border-dashed border-[#1a1a1a] hover:border-[#007BFF]/50 bg-black/40 hover:bg-[#070707] p-4 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all",
                        children: [
                          /* @__PURE__ */ jsxDEV(
                            "input",
                            {
                              type: "file",
                              accept: "image/*,application/pdf",
                              onChange: handleFileChange,
                              className: "hidden"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1348,
                              columnNumber: 25
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV(UploadCloud, { className: "w-6 h-6 text-[#007BFF]" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1354,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-400 select-none", children: "לחץ לבחירת קובץ או גרור לכאן" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1355,
                            columnNumber: 25
                          }, this),
                          attachedFileName && /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-emerald-400 font-bold block bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/30 animate-pulse mt-1", children: attachedFileName }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1357,
                            columnNumber: 27
                          }, this)
                        ]
                      },
                      void 0,
                      true,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1343,
                        columnNumber: 23
                      },
                      this
                    ),
                    isUploading && /* @__PURE__ */ jsxDEV("div", { className: "text-[10px] text-[#007BFF] text-center animate-pulse mt-1", children: "מעלה קובץ ל-Firebase Cloud Storage..." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1364,
                      columnNumber: 25
                    }, this),
                    uploadedToFirebase && !isUploading && /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-emerald-400 font-bold text-center mt-1 flex items-center justify-center gap-1", children: [
                      /* @__PURE__ */ jsxDEV(Check, { className: "w-3.5 h-3.5" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1371,
                        columnNumber: 27
                      }, this),
                      " הועלה לסטורג' בהצלחה!"
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1370,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1336,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1309,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 pt-3", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: handleOverrideUnlock,
                      disabled: !uploadedToFirebase,
                      className: `w-full py-3.5 rounded-xl font-bold text-xs text-white transition-all text-center ${uploadedToFirebase ? "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-md cursor-pointer" : "bg-[#0a0a0a] text-zinc-650 cursor-not-allowed border border-[#1b1b1b]"}`,
                      children: "שלח ופתח אפליקציה"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1378,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        setActiveScreen(AppScreen.MEDICAL_WAVE);
                        setQHeartHealth(null);
                        setQConstraints(null);
                        setQBalance(null);
                        setUploadedToFirebase(false);
                      },
                      className: "w-full text-center text-xs text-zinc-500 hover:text-zinc-300 py-1 hover:underline cursor-pointer",
                      children: "חזור ועדכן הצהרת בריאות"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1390,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1377,
                  columnNumber: 19
                }, this)
              ]
            },
            "screen-freeze",
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1301,
              columnNumber: 17
            },
            this
          ),
          activeScreen >= AppScreen.ONBOARD_Q1 && activeScreen <= AppScreen.ONBOARD_Q4 && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "flex-1 flex flex-col justify-between p-6 h-full relative text-right",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: [
                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] uppercase font-bold text-[#007BFF] tracking-wide font-medium font-mono", children: "שאלון קליטה מהיר (Firestore)" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1417,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-bold text-white mt-1", children: [
                    "שלב ",
                    onboardStep,
                    " מתוך 4"
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1418,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "w-full h-1 bg-[#111111] rounded-full overflow-hidden mt-3", children: /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: "h-full bg-[#007BFF] transition-all duration-300",
                      style: { width: `${onboardStep * 25}%` }
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1422,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1421,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1416,
                  columnNumber: 19
                }, this),
                onboardStep === 4 && /* @__PURE__ */ jsxDEV("div", { className: "my-auto space-y-3", children: [
                  /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold text-white mb-4", children: "מהי רמת הכאב הנוכחית שלך במאמץ?" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1432,
                    columnNumber: 23
                  }, this),
                  [
                    { id: PainLevel.NONE, label: "🟢 ללא כאב כלל" },
                    { id: PainLevel.MILD, label: "🟡 רגישות / כאב קל ונסבל" },
                    { id: PainLevel.SEVERE, label: "🔴 כאב משבית (מונע ביצוע תנועה מורכבת)" }
                  ].map((pain) => /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        setQPain(pain.id);
                      },
                      className: `w-full text-right px-4 py-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${qPain === pain.id ? "bg-[#007BFF] text-white border-[#0066DD] shadow-md shadow-[#007BFF]/10" : "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1b] hover:bg-[#0c0c0c] text-zinc-300"}`,
                      children: pain.label
                    },
                    pain.id,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1438,
                      columnNumber: 25
                    },
                    this
                  ))
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1431,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                  onboardStep === 4 ? /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: saveOnboardingToFirestore,
                      className: "w-full py-3 bg-[#007BFF] hover:bg-[#0066DD] active:bg-[#0055BB] rounded-xl text-xs font-bold text-white shadow-lg shadow-[#007BFF]/15 active:translate-y-0.5 transition-all text-center cursor-pointer",
                      children: "השלם הרשמה ופתח מסך בית ✔️"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1457,
                      columnNumber: 23
                    },
                    this
                  ) : /* @__PURE__ */ jsxDEV("div", { className: "h-4" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1464,
                    columnNumber: 23
                  }, this),
                  onboardStep > 1 && /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setOnboardStep(onboardStep - 1),
                      className: "w-full text-center text-xs text-zinc-500 hover:text-zinc-300 py-1 hover:underline cursor-pointer",
                      children: "חזור לשלב הקודם"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1468,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1455,
                  columnNumber: 19
                }, this)
              ]
            },
            `screen-onboard-${onboardStep}`,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1408,
              columnNumber: 17
            },
            this
          ),
          activeScreen === AppScreen.MAIN_APP && /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "flex-1 flex flex-col justify-between h-full relative text-right bg-black",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "flex-1 p-5 overflow-y-auto", children: [
                  currentTab === BottomTab.HOME && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between border-b border-[#1a1a1a] pb-4", children: [
                      /* @__PURE__ */ jsxDEV("div", { children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-[#007BFF] font-extrabold uppercase tracking-widest font-mono", children: "המתאמן מחובר" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1500,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black text-white", children: [
                          fullName || "ספורטאי עלית",
                          " ⚡"
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1501,
                          columnNumber: 29
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1499,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] bg-emerald-950/60 text-emerald-400 border border-emerald-900/45 px-2 py-0.5 rounded font-mono font-medium", children: [
                        "כאב: ",
                        qPain === PainLevel.NONE ? "ללא" : qPain === PainLevel.MILD ? "קל" : "משבית"
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1503,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1498,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-bold text-zinc-400 mb-3 uppercase tracking-wider text-right", children: "פורטלים ספורטיביים" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1508,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2.5", children: Object.keys(SPORT_INFO).map((key) => {
                        const s = SPORT_INFO[key];
                        const isSelected = selectedSport === key;
                        return /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            onClick: () => setSelectedSport(key),
                            className: `p-3 rounded-xl border text-right flex flex-col gap-1 transition-all relative overflow-hidden cursor-pointer ${isSelected ? "bg-[#007BFF]/10 border-[#007BFF] text-white shadow-md shadow-[#007BFF]/10" : "bg-gradient-to-br from-[#111111] to-[#050505] border-[#1a1a1b] hover:bg-[#0c0c0c] text-zinc-400"}`,
                            children: [
                              isSelected && /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-8 h-8 bg-[#007BFF] rounded-bl-full flex items-center justify-center text-[8px] font-bold text-white pl-2 pb-2", children: "✔" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1524,
                                columnNumber: 39
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { className: "text-lg", children: s.icon }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1528,
                                columnNumber: 37
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-white", children: s.name }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1529,
                                columnNumber: 37
                              }, this)
                            ]
                          },
                          key,
                          true,
                          {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1514,
                            columnNumber: 35
                          },
                          this
                        );
                      }) }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1509,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-400 leading-normal mt-2.5 bg-black/60 p-2.5 rounded-lg border border-[#1a1a1b]", children: SPORT_INFO[selectedSport].tagline }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1535,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1507,
                      columnNumber: 25
                    }, this),
                    selectedSport ? /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 pt-4 text-right animate-fadeIn relative", dir: "rtl", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 bg-gradient-to-l from-[#0D0D11]/90 to-black p-3.5 rounded-2xl border border-[#007BFF]/25 shadow-lg shadow-[#007BFF]/5", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "w-11 h-11 rounded-xl bg-black border border-[#007BFF]/50 flex items-center justify-center overflow-hidden shrink-0 shadow-md shadow-[#007BFF]/10", children: /* @__PURE__ */ jsxDEV("img", {
                          src: appLogo,
                          alt: "Recovio Logo",
                          className: "w-[90%] h-[90%] object-cover rounded-full",
                          referrerPolicy: "no-referrer"
                        }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1541,
                          columnNumber: 33
                        }, this) }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1540,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                          /* @__PURE__ */ jsxDEV("h2", { className: "text-sm font-black text-white leading-tight tracking-wide uppercase", children: "RECOVIO ACTIVE SHIELD" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1543,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDEV("p", { className: "text-[9.5px] text-zinc-400 font-extrabold tracking-widest mt-0.5", children: selectedSport === SportType.BJJ ? "תוכנית ה-BJJ הרשמית באקדמיה 🥋🛡️" : selectedSport === SportType.FOOTBALL ? "תוכנית הכדורגל הרשמית באקדמיה ⚽🛡️" : selectedSport === SportType.TENNIS ? "תוכנית הטניס הרשמית באקדמיה 🎾🛡️" : "תוכנית השחייה הרשמית באקדמיה 🏊🛡️" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1544,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1542,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1539,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "border-b border-[#1a1a1a] pb-4 text-right", children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-[#007BFF] font-extrabold uppercase tracking-widest font-mono", children: selectedSport === SportType.BJJ ? "פורטל קליני ללוחמי BJJ" : selectedSport === SportType.FOOTBALL ? "פורטל קליני לשחקני כדורגל" : selectedSport === SportType.TENNIS ? "פורטל קליני לשחקני טניס" : "פורטל קליני לשחיינים" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1546,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("h2", { className: "text-base font-black text-white mt-1", children: SPORT_INFO[selectedSport].name }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1547,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-zinc-400 mt-1 leading-relaxed", children: SPORT_INFO[selectedSport].tagline }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1548,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1545,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 bg-[#08080a] p-4 rounded-xl border border-zinc-900/85 relative overflow-hidden", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-24 h-24 bg-[#007BFF]/5 rounded-full blur-2xl pointer-events-none" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1555,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-xs font-bold text-zinc-400 pb-1 px-1", children: [
                          /* @__PURE__ */ jsxDEV("span", { children: "רמת התוכנית (Global Level)" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1558,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/25 px-2 py-0.5 rounded text-[10px] font-black", children: bjjCurrentLevel === 1 ? "שלב הבסיס" : bjjCurrentLevel === 2 ? "שלב העמסה" : "שלב שיא הביצוניים" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1559,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1557,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "relative flex justify-between items-center py-4 px-3", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "absolute left-10 right-10 h-[3px] bg-zinc-900 top-[31px] -z-0", children: /* @__PURE__ */ jsxDEV(
                            "div",
                            {
                              className: "h-full bg-gradient-to-r from-[#007BFF] via-[#00c8ff] to-[#007BFF] transition-all duration-500 shadow-[0_0_10px_rgba(0,123,255,0.4)]",
                              style: { width: `${bjjCurrentLevel === 1 ? "0%" : bjjCurrentLevel === 2 ? "50%" : "100%"}` }
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1567,
                              columnNumber: 35
                            },
                            this
                          ) }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1566,
                            columnNumber: 33
                          }, this),
                          [1, 2, 3].map((lvl) => {
                            const isSelected = lvl === bjjSelectedLevel;
                            const isCompleted = bjjCurrentLevel > lvl;
                            const isUnlocked = bjjCurrentLevel >= lvl;
                            const levelName = lvl === 1 ? "בסיס" : lvl === 2 ? "עומס" : "שיא";
                            return /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                disabled: false,
                                onClick: () => {
                                  if (isUnlocked) {
                                    setBjjSelectedLevel(lvl);
                                    setBjjSelectedWeekView(1);
                                  } else {
                                    triggerBjjToast("נא לסיים את הרמה הנוכחית ולהגיש מבחן מעבר כדי לפתוח שלב זה.");
                                  }
                                },
                                className: `flex flex-col items-center z-10 transition-all duration-200 outline-none cursor-pointer`,
                                children: [
                                  /* @__PURE__ */ jsxDEV("div", { className: `w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${isSelected ? "bg-gradient-to-br from-[#007BFF] to-[#00c6ff] text-white ring-4 ring-[#007BFF]/20 shadow-[0_0_20px_rgba(0,123,255,0.7)] border border-white/20" : isCompleted ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.2)]" : isUnlocked ? "bg-zinc-900 text-zinc-200 border border-zinc-700 hover:border-zinc-500" : "bg-zinc-950 text-zinc-650 border border-zinc-900/60 opacity-60"}`, children: isCompleted ? /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4 text-emerald-400" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1603,
                                    columnNumber: 43
                                  }, this) : !isUnlocked ? /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5 text-zinc-500" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1605,
                                    columnNumber: 43
                                  }, this) : lvl }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1593,
                                    columnNumber: 39
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("span", { className: `text-[10px] mt-2 font-black tracking-wide transition-colors ${isSelected ? "text-[#007BFF]" : isUnlocked ? "text-zinc-300" : "text-zinc-600"}`, children: [
                                    "רמה ",
                                    lvl,
                                    ": ",
                                    levelName
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1610,
                                    columnNumber: 39
                                  }, this)
                                ]
                              },
                              lvl,
                              true,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1581,
                                columnNumber: 37
                              },
                              this
                            );
                          })
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1564,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1554,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0c0d10] p-1.5 rounded-xl border border-zinc-900 flex gap-2", children: [
                        /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            onClick: () => setBjjTab("training"),
                            className: `flex-1 py-2.5 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${bjjTab === "training" ? "bg-[#007BFF] text-white shadow-lg shadow-[#007BFF]/25 border border-[#007BFF]" : "bg-[#050505] text-zinc-400 hover:text-white hover:bg-[#0c0d10] border border-transparent"}`,
                            children: "🏋️‍♂️ אימון"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1627,
                            columnNumber: 31
                          },
                          this
                        ),
                        /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            onClick: () => setBjjTab("rehab"),
                            className: `flex-1 py-2.5 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none ${bjjTab === "rehab" ? "bg-[#007BFF] text-white shadow-lg shadow-[#007BFF]/25 border border-[#007BFF]" : "bg-[#050505] text-zinc-400 hover:text-white hover:bg-[#0c0d10] border border-transparent"}`,
                            children: "🏥 שיקום ומניעה"
                          },
                          void 0,
                          false,
                          {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1637,
                            columnNumber: 31
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1626,
                        columnNumber: 29
                      }, this),
                      bjjIsOffline && /* @__PURE__ */ jsxDEV("div", { className: "bg-red-950/25 border border-red-500/30 p-3 rounded-xl text-right animate-fadeIn flex items-start gap-2.5 shadow-md shadow-red-500/5", children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "text-red-400 shrink-0 mt-0.5 text-xs", children: "⚠️" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1645,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsxDEV("h4", { className: "text-[11.5px] font-black text-red-300 leading-normal", children: 'מצב אופליין פעיל (סימולציית ניתוק)' }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1646,
                            columnNumber: 27
                          }, this),
                          /* @__PURE__ */ jsxDEV("p", { className: "text-[9.5px] text-zinc-400 leading-relaxed mt-0.5", children: 'האפליקציה פועלת כעת במצב אופליין מלא. כל התכנים, הסרטונים, נתוני ההתקדמות המקומיים וזמן נעילת היעד (7 ימים) נשמרים מקומית על הדפדפן וזמינים לחלוטין ללא חיבור לאינטרנט.' }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1647,
                            columnNumber: 27
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1648,
                          columnNumber: 26
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1644,
                        columnNumber: 23
                      }, this),
                      bjjTab === "training" ? /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-fadeIn", children: [
                        bjjSelectedWeekView === 1 ? /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#0D0D11] to-[#040406] p-3.5 rounded-xl border border-[#1a1a1b] space-y-3 relative overflow-hidden", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-16 h-16 bg-[#007BFF]/5 rounded-full blur-xl pointer-events-none" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1653,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                              /* @__PURE__ */ jsxDEV("span", { className: "text-sm", children: "🎬" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1656,
                                columnNumber: 35
                              }, this),
                              /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-black text-white", children: "סרטון הסבר: דגשים קליניים לרמה זו" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1657,
                                columnNumber: 35
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1655,
                              columnNumber: 33
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] bg-emerald-950/60 text-emerald-400 border border-emerald-900/50 px-2 py-0.5 rounded font-black tracking-wide uppercase", children: "חינמי ופתוח לכולם" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1659,
                              columnNumber: 33
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1654,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV(
                            AndroidExoPlayer,
                            {
                              videoUrl: BJJ_LEVELS_DATA[bjjSelectedLevel - 1]?.overviewVideoUrl || "https://www.youtube.com/embed/S_8n0l6_aIE",
                              title: `סרטון הסבר: דגשים קליניים לרמה זו`
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1664,
                              columnNumber: 31
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-400 leading-normal bg-black/40 p-2.5 rounded border border-[#18181a] text-right", children: [
                            BJJ_LEVELS_DATA[bjjSelectedLevel - 1]?.tagline,
                            " הקפידו על יישום ההנחיות הקליניות, תדירות שבועית מבוקרת ועצרו בכל שלב של כאב חריג."
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1668,
                            columnNumber: 31
                          }, this)
                        ] }, "overview-video-card", true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1652,
                          columnNumber: 29
                        }, this) : null,
                        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                            /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-[#007BFF] uppercase tracking-wide", children: [
                              "🏋️ פרוטוקול תרגילים קליני - שבוע ",
                              bjjSelectedWeekView
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1677,
                              columnNumber: 33
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-0.5 rounded font-black", children: bjjSelectedWeekView === 1 ? "פרמטרים: קל" : bjjSelectedWeekView === 2 ? "פרמטרים: בינוני" : "פרמטרים: קשה" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1680,
                              columnNumber: 33
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1676,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "space-y-3.5", children: (BJJ_LEVELS_DATA[bjjSelectedLevel - 1]?.exercises || []).map((exercise) => {
                            const isUnlocked = exercise.isFree || bjjIsPremium;
                            const isExpanded = expandedBjjCard === exercise.id;
                            const setsNum = exercise.baseParams.sets[bjjSelectedWeekView - 1];
                            const repsStr = exercise.baseParams.reps[bjjSelectedWeekView - 1];
                            const restStr = exercise.baseParams.rest[bjjSelectedWeekView - 1];
                            const intensityStr = exercise.baseParams.intensity[bjjSelectedWeekView - 1];
                            return /* @__PURE__ */ jsxDEV(
                              "div",
                              {
                                className: `p-3.5 rounded-xl border relative overflow-hidden transition-all duration-300 ${isExpanded && isUnlocked ? "bg-gradient-to-br from-[#0c0d12] to-[#040507] border-[#007BFF] shadow-[0_0_15px_rgba(0,123,255,0.08)]" : "bg-gradient-to-br from-[#0e0e11] to-[#050507] border-[#1b1b22] hover:border-zinc-800"}`,
                                children: [
                                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-3", children: [
                                    /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-right", children: [
                                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-1.5", children: [
                                        /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-zinc-400", children: [
                                          "תרגיל ",
                                          exercise.id,
                                          ":"
                                        ] }, void 0, true, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1710,
                                          columnNumber: 45
                                        }, this),
                                        /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-black text-white", children: exercise.title }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1711,
                                          columnNumber: 45
                                        }, this),
                                        exercise.isFree ? /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] bg-emerald-950/60 text-emerald-400 border border-emerald-900/50 px-1.5 py-0.2 rounded font-black", children: "חינם 🔓" }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1715,
                                          columnNumber: 47
                                        }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] bg-amber-950/60 text-yellow-400 border border-amber-900/40 px-1.5 py-0.2 rounded font-black flex items-center gap-0.5", children: "פרימיום ⭐" }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1719,
                                          columnNumber: 47
                                        }, this),
                                        bjjWatchedKeys.includes(`${bjjSelectedLevel}_${bjjSelectedWeekView}_${exercise.id}`) && /* @__PURE__ */ jsxDEV("span", { className: "text-[8.5px] bg-sky-950/80 text-sky-400 border border-sky-500/40 px-1.5 py-0.2 rounded font-black animate-scaleIn flex items-center gap-0.5", children: "✔️ נצפה" }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1725,
                                          columnNumber: 47
                                        }, this),
                                        isUnlocked && /* @__PURE__ */ jsxDEV("span", { className: "text-[8.5px] bg-sky-950/40 text-sky-400 border border-sky-500/30 px-1.5 py-0.2 rounded font-black flex items-center gap-0.5 min-w-fit", children: "⬇️ זמין באופליין" }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1726,
                                          columnNumber: 48
                                        }, this)
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1709,
                                        columnNumber: 43
                                      }, this),
                                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-400 leading-normal mt-1 pr-1 border-r border-[#007BFF]/30", children: exercise.desc }, void 0, false, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1730,
                                        columnNumber: 43
                                      }, this)
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1708,
                                      columnNumber: 41
                                    }, this),
                                    isUnlocked && /* @__PURE__ */ jsxDEV(
                                      "button",
                                      {
                                        onClick: () => setExpandedBjjCard(isExpanded ? null : exercise.id),
                                        className: "text-[#007BFF] text-xs font-bold hover:text-white p-1 transition-colors outline-none cursor-pointer",
                                        children: isExpanded ? "סגור ▴" : "הצג וידאו/פרמטרים ▾"
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1736,
                                        columnNumber: 43
                                      },
                                      this
                                    )
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1707,
                                    columnNumber: 39
                                  }, this),
                                  !isUnlocked && /* @__PURE__ */ jsxDEV(
                                    "div",
                                    {
                                      onClick: () => {
                                        setBjjPaywallFeatureName(`תרגיל ${exercise.id}: ${exercise.title}`);
                                        setShowBjjPaywall(true);
                                      },
                                      className: "mt-3 bg-gradient-to-r from-amber-500/5 via-blue-600/5 to-amber-500/5 border border-dashed border-amber-500/30 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:border-amber-500/55 hover:bg-amber-950/10 transition-all shadow-[inset_0_1px_8px_rgba(245,158,11,0.03)] group",
                                      children: [
                                        /* @__PURE__ */ jsxDEV(Lock, { className: "w-5 h-5 text-amber-500 mb-1.5 group-hover:scale-110 transition-transform" }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1754,
                                          columnNumber: 43
                                        }, this),
                                        /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-black text-amber-300", children: "התוכן חסום למנויים בלבד (Premium Shield) 🌟" }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1755,
                                          columnNumber: 43
                                        }, this),
                                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-zinc-400 mt-1 leading-relaxed max-w-[90%] font-medium", children: [
                                          "מנוע השיקום המלא ו-4 התרגילים המוזהבים ברמה ",
                                          bjjSelectedLevel,
                                          " פתוחים בגרסת הפרימיום. השתלב עוד הפעם בחיזוק תנועתי דומיננטי ללא מגבלות!"
                                        ] }, void 0, true, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1756,
                                          columnNumber: 43
                                        }, this),
                                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-[#00aaff] font-black mt-2 underline", children: "לחץ לפתיחה מיידית ורכישת מנוי פרימיום ↗" }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1759,
                                          columnNumber: 43
                                        }, this)
                                      ]
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1747,
                                      columnNumber: 41
                                    },
                                    this
                                  ),
                                  isUnlocked && isExpanded && /* @__PURE__ */ jsxDEV("div", { className: "mt-3.5 pt-3.5 border-t border-zinc-900/90 space-y-3.5 text-right animate-slideDown", children: [
                                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5", children: [
                                      /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-zinc-550 font-black block", children: [
                                        "סרטון הדרכה פיזיותרפי אקטיבי תואם שבוע ",
                                        bjjSelectedWeekView,
                                        ":"
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1768,
                                        columnNumber: 45
                                      }, this),
                                      /* @__PURE__ */ jsxDEV(
                                        AndroidExoPlayer,
                                        {
                                          videoUrl: exercise.videoUrl,
                                          videoID: exercise.videoID,
                                          title: exercise.title,
                                          onPlay: () => {
                                            const key = `${bjjSelectedLevel}_${bjjSelectedWeekView}_${exercise.id}`;
                                            if (!bjjWatchedKeys.includes(key)) {
                                              setBjjWatchedKeys((prev) => [...prev, key]);
                                              const wkKey = `${bjjSelectedLevel}_${bjjSelectedWeekView}`;
                                              setBjjFirstWatchTimestamps((prevVal) => {
                                                if (prevVal[wkKey]) return prevVal;
                                                return { ...prevVal, [wkKey]: Date.now() };
                                              });
                                              triggerBjjToast(`הסרטון של תרגיל ${exercise.id} נרשם כנצפה במערכת!`);
                                            }
                                          }
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1769,
                                          columnNumber: 45
                                        },
                                        this
                                      ),
                                      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-end pt-1", children: /* @__PURE__ */ jsxDEV(
                                        "button",
                                        {
                                          onClick: () => {
                                            const key = `${bjjSelectedLevel}_${bjjSelectedWeekView}_${exercise.id}`;
                                            setBjjWatchedKeys((prev) => {
                                              if (prev.includes(key)) {
                                                return prev.filter((k) => k !== key);
                                              } else {
                                                const wkKey = `${bjjSelectedLevel}_${bjjSelectedWeekView}`;
                                                setBjjFirstWatchTimestamps((prevVal) => {
                                                  if (prevVal[wkKey]) return prevVal;
                                                  return { ...prevVal, [wkKey]: Date.now() };
                                                });
                                                return [...prev, key];
                                              }
                                            });
                                          },
                                          className: `py-1 px-3 rounded-lg border text-[9px] font-black transition-all flex items-center gap-1 cursor-pointer select-none ${bjjWatchedKeys.includes(`${bjjSelectedLevel}_${bjjSelectedWeekView}_${exercise.id}`) ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-400" : "bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:text-white"}`,
                                          children: /* @__PURE__ */ jsxDEV("span", { children: bjjWatchedKeys.includes(`${bjjSelectedLevel}_${bjjSelectedWeekView}_${exercise.id}`) ? "✓ סומן כנצפה במערכת" : "סמן כנצפה באופן ידני" }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1797,
                                            columnNumber: 49
                                          }, this)
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1782,
                                          columnNumber: 47
                                        },
                                        this
                                      ) }, void 0, false, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1781,
                                        columnNumber: 45
                                      }, this)
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1767,
                                      columnNumber: 43
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-zinc-950/80 rounded-lg border border-[#1d1d25] space-y-2", children: [
                                      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-400 font-black block border-b border-zinc-900 pb-1", children: [
                                        "⚙️ פרמטרים תנועתיים מותאמים אישית (פרוגרסיבי - שבוע ",
                                        bjjSelectedWeekView,
                                        ")"
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1804,
                                        columnNumber: 45
                                      }, this),
                                      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2 text-[10px]", children: [
                                        /* @__PURE__ */ jsxDEV("div", { className: "bg-black/50 p-2 rounded border border-zinc-900 flex justify-between items-center", children: [
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500", children: "סטים:" }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1810,
                                            columnNumber: 49
                                          }, this),
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-white font-extrabold", children: [
                                            setsNum,
                                            " סטים קליניים"
                                          ] }, void 0, true, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1811,
                                            columnNumber: 49
                                          }, this)
                                        ] }, void 0, true, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1809,
                                          columnNumber: 47
                                        }, this),
                                        /* @__PURE__ */ jsxDEV("div", { className: "bg-black/50 p-2 rounded border border-zinc-900 flex justify-between items-center", children: [
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500", children: "נפח עבודה:" }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1814,
                                            columnNumber: 49
                                          }, this),
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-[#007BFF] font-extrabold", children: repsStr }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1815,
                                            columnNumber: 49
                                          }, this)
                                        ] }, void 0, true, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1813,
                                          columnNumber: 47
                                        }, this),
                                        /* @__PURE__ */ jsxDEV("div", { className: "bg-black/50 p-2 rounded border border-zinc-900 flex justify-between items-center", children: [
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500", children: "זמן מנוחה:" }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1818,
                                            columnNumber: 49
                                          }, this),
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-yellow-500 font-extrabold", children: restStr }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1819,
                                            columnNumber: 49
                                          }, this)
                                        ] }, void 0, true, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1817,
                                          columnNumber: 47
                                        }, this),
                                        /* @__PURE__ */ jsxDEV("div", { className: "bg-black/50 p-2 rounded border border-zinc-900 flex justify-between items-center", children: [
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500", children: "עומס קליני:" }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1822,
                                            columnNumber: 49
                                          }, this),
                                          /* @__PURE__ */ jsxDEV("span", { className: "text-rose-450 font-extrabold text-[9px]", children: intensityStr }, void 0, false, {
                                            fileName: "/app/applet/src/App.tsx",
                                            lineNumber: 1823,
                                            columnNumber: 49
                                          }, this)
                                        ] }, void 0, true, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 1821,
                                          columnNumber: 47
                                        }, this)
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1808,
                                        columnNumber: 45
                                      }, this)
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1803,
                                      columnNumber: 43
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("div", { className: "p-2.5 bg-[#007BFF]/5 border border-[#007BFF]/15 rounded-lg", children: [
                                      /* @__PURE__ */ jsxDEV("span", { className: "text-[9.5px] text-zinc-300 font-extrabold block mb-1", children: "הוראות ודגשי ביצוע בטיחותיים:" }, void 0, false, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1830,
                                        columnNumber: 45
                                      }, this),
                                      /* @__PURE__ */ jsxDEV("ul", { className: "list-disc list-inside space-y-1 text-[9.5px] text-zinc-300 pr-1 leading-relaxed", children: exercise.cues.map((cue, index) => /* @__PURE__ */ jsxDEV("li", { className: "leading-relaxed", children: cue }, index, false, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1833,
                                        columnNumber: 49
                                      }, this)) }, void 0, false, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1831,
                                        columnNumber: 45
                                      }, this)
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1829,
                                      columnNumber: 43
                                    }, this)
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1765,
                                    columnNumber: 41
                                  }, this)
                                ]
                              },
                              exercise.id,
                              true,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1698,
                                columnNumber: 37
                              },
                              this
                            );
                          }) }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1685,
                            columnNumber: 31
                          }, this)
                        ] }, "exercises-list-wrapper", true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1675,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "pt-4 border-t border-zinc-900/60 mt-4 space-y-3.5 text-right font-sans", style: { direction: "rtl" }, children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between pb-1", children: [
                            /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-[#007BFF] uppercase tracking-wide", children: "🎬 סרטון האימון המלא ברצף" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1848,
                              columnNumber: 33
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: `text-[9px] border px-2 py-0.5 rounded font-black flex items-center gap-0.5 font-mono ${!bjjIsPremium ? "bg-amber-950/60 border-amber-900/40 text-yellow-500" : "bg-emerald-950/60 border-emerald-900/50 text-emerald-400"}`, children: !bjjIsPremium ? "נעול 🔒" : "פתוח 🔓" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1851,
                              columnNumber: 33
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1847,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: `p-4 rounded-xl border relative overflow-hidden transition-all duration-300 ${bjjIsPremium && bjjFullWorkoutExpanded ? "bg-gradient-to-br from-[#0c0d12] to-[#040507] border-[#007BFF] shadow-[0_0_15px_rgba(0,123,255,0.08)]" : "bg-gradient-to-br from-[#0e0e11] to-[#050507] border-[#1b1b22] hover:border-zinc-800"}`, children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between gap-3 text-right", children: [
                              /* @__PURE__ */ jsxDEV("div", { className: "flex-1", children: [
                                /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-black text-white", children: [
                                  "פרוטוקול אימון רציף מלא - רמה ",
                                  bjjSelectedLevel
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1867,
                                  columnNumber: 37
                                }, this),
                                /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-400 leading-normal mt-1 leading-relaxed font-sans", children: "סרטון וידאו שלם ורציף המאפשר לכם לבצע את כל 5 התרגילים ברצף שלב אחר שלב יחד עם תום, כולל זמני מנוחה והנחיות קוליות וביומכניות מפורטות בזמן אמת." }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1868,
                                  columnNumber: 37
                                }, this)
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1866,
                                columnNumber: 35
                              }, this),
                              bjjIsPremium && /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  onClick: () => setBjjFullWorkoutExpanded(!bjjFullWorkoutExpanded),
                                  className: "text-[#007BFF] text-xs font-bold hover:text-white p-1 transition-colors outline-none cursor-pointer font-sans",
                                  children: bjjFullWorkoutExpanded ? "סגור ▴" : "נגן אימון מלא ▾"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1874,
                                  columnNumber: 37
                                },
                                this
                              )
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1865,
                              columnNumber: 33
                            }, this),
                            !bjjIsPremium ? /* @__PURE__ */ jsxDEV(
                              "div",
                              {
                                onClick: () => {
                                  setBjjPaywallFeatureName("🎬 סרטון האימון המלא ברצף");
                                  setShowBjjPaywall(true);
                                },
                                className: "mt-3.5 bg-gradient-to-r from-amber-500/5 via-blue-600/5 to-amber-500/5 border border-dashed border-amber-500/30 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:border-amber-500/55 hover:bg-amber-950/10 transition-all shadow-[inset_0_1px_8px_rgba(245,158,11,0.03)] group",
                                children: [
                                  /* @__PURE__ */ jsxDEV(Lock, { className: "w-5 h-5 text-amber-550 mb-1.5 group-hover:scale-110 transition-transform animate-pulse" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1892,
                                    columnNumber: 37
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-black text-amber-300 font-sans", children: "סרטון האימון המלא נעול למנויים בלבד 🔒" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1893,
                                    columnNumber: 37
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-zinc-400 mt-1 leading-relaxed max-w-[90%] font-medium font-sans", children: "התאמנו יחד עם תום בוידיאו רציף ומסונכרן של כל חמשת התרגילים שלב אחר שלב! הפיקו את מירב היציבות ואחזו בלולאת האימונים המלאה והבלתי מוגבלת." }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1894,
                                    columnNumber: 37
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-[#00aaff] font-black mt-2 underline font-sans", children: "לחץ לפתיחה מיידית ורכישת מנוי פרימיום ↗" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1897,
                                    columnNumber: 37
                                  }, this)
                                ]
                              },
                              void 0,
                              true,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1885,
                                columnNumber: 35
                              },
                              this
                            ) : bjjFullWorkoutExpanded && /* @__PURE__ */ jsxDEV("div", { className: "mt-3.5 pt-3.5 border-t border-zinc-900/90 space-y-3.5 text-right animate-slideDown", children: [
                              /* @__PURE__ */ jsxDEV("span", { className: "text-[9.5px] text-zinc-500 font-black block", children: [
                                "מזרים כעת: אימון רציף - רמה ",
                                bjjSelectedLevel,
                                " - שבוע ",
                                bjjSelectedWeekView,
                                ":"
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1902,
                                columnNumber: 39
                              }, this),
                              /* @__PURE__ */ jsxDEV(
                                AndroidExoPlayer,
                                {
                                  videoUrl: BJJ_LEVELS_DATA[bjjSelectedLevel - 1]?.overviewVideoUrl || "https://www.youtube.com/embed/S_8n0l6_aIE",
                                  title: `אימון רציף מלא - רמה ${bjjSelectedLevel}`
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1903,
                                  columnNumber: 39
                                },
                                this
                              ),
                              /* @__PURE__ */ jsxDEV("div", { className: "p-2.5 bg-emerald-950/15 border border-emerald-900/40 rounded-lg text-emerald-400 text-[9.5px] font-sans flex items-center justify-center gap-1.5", children: /* @__PURE__ */ jsxDEV("span", { children: "🟢 מנוי Recovio VIP Academy פעיל! נגן האימון הרציף פתוח לשימוש מלא." }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1908,
                                columnNumber: 41
                              }, this) }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1907,
                                columnNumber: 39
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 1901,
                              columnNumber: 37
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 1860,
                            columnNumber: 31
                          }, this)
                        ] }, "full-workout-section", true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1846,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "pt-4 border-t border-zinc-900", children: (() => {
                          const currentLevelData = BJJ_LEVELS_DATA[bjjCurrentLevel - 1];
                          const currentWeekExercises = currentLevelData?.exercises || [];
                          const currentRequiredExercises = currentWeekExercises.filter((ex) => ex.isFree || bjjIsPremium);
                          const currentWeekWatchedCount = currentWeekExercises.filter(
                            (ex) => bjjWatchedKeys.includes(`${bjjCurrentLevel}_${bjjCurrentWeek}_${ex.id}`)
                          ).length;
                          const allVideosWatchedForCurrentWeek = currentWeekExercises.length > 0 && currentWeekWatchedCount === currentWeekExercises.length;
                          
                          const currentWeekKey = `${bjjCurrentLevel}_${bjjCurrentWeek}`;
                          const firstWatchTimestamp = bjjFirstWatchTimestamps[currentWeekKey] || 0;
                          const sevenDaysMs = 7 * 24 * 60 * 60 * 1000; // 168 hours
                          const bjjIsTimeLockPassed = firstWatchTimestamp > 0 && (Date.now() - firstWatchTimestamp >= sevenDaysMs);
                          
                          let daysRemaining = 7;
                          if (firstWatchTimestamp > 0) {
                            const msElapsed = Date.now() - firstWatchTimestamp;
                            const msRemaining = sevenDaysMs - msElapsed;
                            daysRemaining = Math.max(1, Math.ceil(msRemaining / (24 * 60 * 60 * 1000)));
                          }
                          
                          const bjjDoubleUnlockMet = allVideosWatchedForCurrentWeek && bjjIsTimeLockPassed;
                          if (bjjSelectedWeekView === bjjCurrentWeek && bjjSelectedLevel === bjjCurrentLevel) {
                            if (bjjCurrentWeek === 3 && bjjMilestoneStatus === "pending") {
                              return /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#120d05] to-[#080502] p-4 rounded-xl border border-amber-500/40 space-y-3.5 shadow-lg text-right relative overflow-hidden animate-fadeIn", children: [
                                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1932,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2.5", children: [
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-lg animate-pulse", children: "⏳" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1934,
                                    columnNumber: 44
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                                    /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-amber-400", children: "בדיקה קלינית ידנית בתהליך 🔬" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1936,
                                      columnNumber: 46
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-amber-250 font-bold mt-1 leading-relaxed", children: "⏳ הסרטון נשלח לבדיקה! המבחן נמצא כעת בבדיקה קלינית ידנית על ידי תום (פיזיותרפיסט ספורט). השלב הבא יפתח רק לאחר אישור סופי." }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1937,
                                      columnNumber: 46
                                    }, this)
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1935,
                                    columnNumber: 44
                                  }, this)
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1933,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV(
                                  "button",
                                  {
                                    onClick: () => setShowBjjMilestoneModal(true),
                                    className: "w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 active:bg-amber-500/30 border border-amber-500/30 rounded-lg text-[10px] font-extrabold text-amber-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer leading-none animate-pulse",
                                    children: "👁️ צפה בסרטון ועקוב אחר סטטוס בדיקת תום"
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1943,
                                    columnNumber: 42
                                  },
                                  this
                                )
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1931,
                                columnNumber: 40
                              }, this);
                            } else if (bjjCurrentWeek === 3 && bjjMilestoneStatus === "rejected") {
                              return /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#210909] to-[#0f0404] p-4 rounded-xl border border-red-500/50 space-y-4 shadow-lg text-right relative overflow-hidden animate-fadeIn", children: [
                                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1954,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2.5", children: [
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-xl", children: "⚠️" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1956,
                                    columnNumber: 44
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                                    /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-red-500", children: "המבחן לא אושר – נדרש תיקון" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1958,
                                      columnNumber: 46
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("p", { className: "text-[10.5px] text-zinc-300 mt-1 leading-relaxed", children: [
                                      "מבדק התנועה של סוף רמה ",
                                      bjjCurrentLevel,
                                      " נדחה על ידי צוות השיקום. קראו בעיון את הדגשים הקליניים למטה והעלו סרטון תנועה מתוקן."
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1959,
                                      columnNumber: 46
                                    }, this)
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1957,
                                    columnNumber: 44
                                  }, this)
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1955,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV("div", { className: "bg-zinc-950/85 border border-red-500/30 p-3 rounded-xl text-right my-1", children: [
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-red-400 font-extrabold block", children: "📝 דגשים לתיקון מתום:" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1967,
                                    columnNumber: 44
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-300 font-sans leading-relaxed break-words whitespace-pre-line mt-1", children: bjjRejectionNotes || rejectionSimText }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1968,
                                    columnNumber: 44
                                  }, this)
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1966,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV(
                                  "button",
                                  {
                                    onClick: () => setShowBjjMilestoneModal(true),
                                    className: "w-full py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-black rounded-xl text-center shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border border-red-500",
                                    children: /* @__PURE__ */ jsxDEV("span", { children: "📸 צלם והעלה סרטון מתוקן" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1977,
                                      columnNumber: 44
                                    }, this)
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1973,
                                    columnNumber: 42
                                  },
                                  this
                                )
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1953,
                                columnNumber: 40
                              }, this);
                            } else {
                              return /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#0c0d12] to-[#040508] p-4 rounded-xl border border-[#007BFF]/30 space-y-4 shadow-lg text-right relative overflow-hidden animate-fadeIn", children: [
                                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-24 h-24 bg-[#007BFF]/5 rounded-full blur-2xl pointer-events-none" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1984,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2.5", children: [
                                  /* @__PURE__ */ jsxDEV("span", { className: "text-xl", children: "🩺" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1986,
                                    columnNumber: 44
                                  }, this),
                                  /* @__PURE__ */ jsxDEV("div", { className: "text-right flex-1", children: [
                                    bjjCurrentWeek === 3 ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
                                      /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-amber-300", children: [
                                        "מבחן מסכם מעבר רמה - רמה ",
                                        bjjCurrentLevel
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1990,
                                        columnNumber: 50
                                      }, this),
                                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-400 mt-1 leading-relaxed", children: [
                                        "סיימת את תרגולי רמה ",
                                        bjjCurrentLevel,
                                        " שבוע 3! הגש כעת את סרטון מבדק התנועה לבדיקה קלינית ידנית לשם מעבר של מפרקים בטוח לרמה ",
                                        bjjCurrentLevel < 3 ? bjjCurrentLevel + 1 : "הבאה",
                                        "."
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1991,
                                        columnNumber: 50
                                      }, this)
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1989,
                                      columnNumber: 48
                                    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                                      /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-white font-sans", children: [
                                        "בדיקת כשירות שבועית - שבוע ",
                                        bjjCurrentWeek
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1997,
                                        columnNumber: 50
                                      }, this),
                                      /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-400 mt-1 leading-relaxed", children: [
                                        "סיימת את תרגול שבוע ",
                                        bjjCurrentWeek,
                                        " המעשי? הגש כעת את המדד התנועתי הקליני כדי לבדוק זכאות להתקדם לשבוע ",
                                        bjjCurrentWeek + 1,
                                        "."
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 1998,
                                        columnNumber: 50
                                      }, this)
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 1996,
                                      columnNumber: 48
                                    }, this),
                                    !allVideosWatchedForCurrentWeek ? /* @__PURE__ */ jsxDEV("div", { className: "mt-2.5 bg-red-950/10 border border-red-900/30 p-2 rounded text-[9px] text-red-400 font-sans text-right", children: [
                                      "🔒 כדי לפתוח את השאלון, יש לצפות תחילה בכל 5 סרטוני האימון של שבוע זה (נצפו ",
                                      currentWeekWatchedCount,
                                      "/5)."
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2005,
                                      columnNumber: 48
                                    }, this) : !bjjIsTimeLockPassed ? /* @__PURE__ */ jsxDEV("div", { className: "mt-2.5 bg-blue-950/20 border border-blue-500/40 p-3 rounded-xl text-[10.5px] text-blue-300 font-sans text-right leading-relaxed shadow-md relative overflow-hidden", children: [
                                      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 w-8 h-8 bg-blue-500/5 rounded-full blur-sm pointer-events-none" }, void 0, false, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 2006,
                                        columnNumber: 49
                                      }, this),
                                      /* @__PURE__ */ jsxDEV("p", { className: "font-black text-white", children: "💡 השלמת את הצפייה בתרגילים!" }),
                                      /* @__PURE__ */ jsxDEV("p", { className: "mt-1", children: [
                                        "כדי לאפשר למפרקים ולשרירים להסתגל לעומס בצורה בטוחה, האפשרות לעבור לשבוע הבא תפתח בעוד ",
                                        /* @__PURE__ */ jsxDEV("span", { className: "text-white font-black bg-blue-500/20 px-1.5 py-0.5 rounded mx-1 select-none", children: daysRemaining }, void 0, false, {
                                          fileName: "/app/applet/src/App.tsx",
                                          lineNumber: 2007,
                                          columnNumber: 50
                                        }, this),
                                        " ימים."
                                      ] }, void 0, true, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 2008,
                                        columnNumber: 50
                                      }, this),
                                      /* @__PURE__ */ jsxDEV("button", {
                                        onClick: () => {
                                          setBjjFirstWatchTimestamps(prev => ({
                                            ...prev,
                                            [currentWeekKey]: Date.now() - 7.5 * 24 * 60 * 60 * 1000
                                          }));
                                          triggerBjjToast("⚡ הזמן דומא בהצלחה! (מעל 7 ימים עברו)");
                                        },
                                        className: "mt-2 block text-[9.5px] text-[#00aaff] font-extrabold underline cursor-pointer hover:text-white transition-colors bg-transparent border-none p-0",
                                        children: "(לדמות מעבר של 7 ימים קליניים במערכת לצרכי פיתוח ⏳⚡)"
                                      }, void 0, false, {
                                        fileName: "/app/applet/src/App.tsx",
                                        lineNumber: 2009,
                                        columnNumber: 50
                                      }, this)
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2010,
                                      columnNumber: 48
                                    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "mt-2.5 bg-emerald-950/10 border border-[#10b981]/35 p-2 rounded text-[9px] text-emerald-450 font-sans text-right", children: [
                                      "🔓 כל 5 הסרטונים נצפו בהצלחה והזמן המינימלי להסתגלות חלף! מבדק הכשירות פתוח להגשה."
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2011,
                                      columnNumber: 48
                                    }, this)
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 1987,
                                    columnNumber: 44
                                  }, this)
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 1985,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV(
                                  "button",
                                  {
                                    disabled: !bjjDoubleUnlockMet,
                                    onClick: () => {
                                      if (!allVideosWatchedForCurrentWeek) {
                                        triggerBjjToast("כדי לפתוח את שאלון הסיכום, יש לצפות תחילה בכל סרטוני התרגילים של השבוע.");
                                        return;
                                      }
                                      if (!bjjIsTimeLockPassed) {
                                        triggerBjjToast("כדי להגיש את המבדק, יש להמתין לפחות 7 ימי הסתגלות קלינית מתחילת האימון.");
                                        return;
                                      }
                                      if (bjjCurrentWeek === 3) {
                                        setShowBjjMilestoneModal(true);
                                      } else {
                                        setBjjTestError(null);
                                        setBjjTestPainInput(null);
                                        setBjjTestMotionInput(null);
                                        setShowBjjTestModal(true);
                                      }
                                    },
                                    className: `w-full py-2.5 text-white font-extrabold rounded-xl text-center text-xs shadow-md flex items-center justify-center gap-2 transition-all border leading-normal ${!bjjDoubleUnlockMet ? "bg-zinc-800 border-zinc-700 text-zinc-500 opacity-60 cursor-not-allowed" : bjjCurrentWeek === 3 ? "bg-gradient-to-r from-amber-500 to-yellow-600 border-amber-500 animate-pulse shadow-amber-500/10 hover:scale-[1.01] active:scale-100 cursor-pointer" : "bg-gradient-to-r from-[#007BFF] to-[#009bf0] border-[#007BFF] shadow-[#007BFF]/10 hover:scale-[1.01] active:scale-100 cursor-pointer"}`,
                                    children: /* @__PURE__ */ jsxDEV("span", { children: [
                                      "⭐ ",
                                      bjjCurrentWeek === 3 ? "הגש מבחן מעבר לרמה הבאה 🏆" : `הגש מבחן כשירות שבועי - שעות שבוע ${bjjCurrentWeek}`
                                    ] }, void 0, true, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2039,
                                      columnNumber: 44
                                    }, this)
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 2016,
                                    columnNumber: 42
                                  },
                                  this
                                )
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 1983,
                                columnNumber: 40
                              }, this);
                            }
                          } else if (bjjSelectedLevel < bjjCurrentLevel || bjjSelectedLevel === bjjCurrentLevel && bjjSelectedWeekView < bjjCurrentWeek) {
                            return /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-emerald-950/20 border border-emerald-900/50 rounded-xl flex items-center justify-between text-right", children: [
                              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col text-right", children: [
                                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-extrabold text-white", children: "✅ שבוע זה הושלם ואושר רפואית!" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2048,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV("span", { className: "text-[9.5px] text-emerald-450 mt-0.5 font-medium", children: "עברת את מבחן הכשירות התנועתי הנדרש של שלב זה במערכת." }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2049,
                                  columnNumber: 42
                                }, this)
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2047,
                                columnNumber: 40
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] bg-emerald-900/60 text-emerald-400 px-2 py-0.5 rounded font-black", children: "מאושר" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2051,
                                columnNumber: 40
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2046,
                              columnNumber: 38
                            }, this);
                          } else {
                            return /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-zinc-950/40 border border-zinc-900/60 rounded-xl flex items-center justify-between text-right opacity-60", children: [
                              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col text-right", children: [
                                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-extrabold text-zinc-500", children: [
                                  "🔒 שבוע ",
                                  bjjSelectedWeekView,
                                  " נעול"
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2058,
                                  columnNumber: 42
                                }, this),
                                /* @__PURE__ */ jsxDEV("span", { className: "text-[9.5px] text-zinc-650 mt-0.5", children: "עליך להשלים את מבדק הכשירות השבועי הפתוח קודם לכן." }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2059,
                                  columnNumber: 42
                                }, this)
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2057,
                                columnNumber: 40
                              }, this),
                              /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5 text-zinc-650" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2061,
                                columnNumber: 40
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2056,
                              columnNumber: 38
                            }, this);
                          }
                        })() }, "weekly-validation-section", false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 1917,
                          columnNumber: 30
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 1650,
                        columnNumber: 31
                      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 animate-fadeIn", children: /* @__PURE__ */ jsxDEV(
                        BjjRehabMatrix,
                        {
                          bjjRehabArea,
                          setBjjRehabArea,
                          bjjIsPremium,
                          setShowBjjPaywall,
                          setBjjPaywallFeatureName,
                          selectedSport
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2070,
                          columnNumber: 33
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2069,
                        columnNumber: 31
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "pt-2 border-t border-[#161619]", children: /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => {
                            const name = fullName.trim() || "ספורטאי BJJ";
                            const msg = `שלום, שמי ${name}, הגעתי מתוכנית ה-BJJ באקדמיית Recovio. אני רוצה להתייעץ איתכם בשל עומס או התאוששות קריטית במפרקים.`;
                            window.open(`https://wa.me/972587858708?text=${encodeURIComponent(msg)}`, "_blank");
                          },
                          className: "w-full py-2.5 bg-[#111] hover:bg-zinc-900 active:bg-zinc-950 text-white font-bold rounded-xl text-center text-xs cursor-pointer flex items-center justify-center gap-2 transition-all border border-zinc-850 leading-normal",
                          children: "💬 פניה ישירה להתייעצות פיזיותרפיה דחופה"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2082,
                          columnNumber: 31
                        },
                        this
                      ) }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2081,
                        columnNumber: 29
                      }, this),
                      showBjjMilestoneModal && /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col text-neutral-200 animate-slideUp", dir: "rtl", children: /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col justify-between p-5 h-full overflow-y-auto", style: { direction: "rtl" }, children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between border-b border-[#1a1a1a]/80 pb-3", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-right font-sans", children: [
                            /* @__PURE__ */ jsxDEV("span", { className: "text-lg", children: "🏆" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2102,
                              columnNumber: 39
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                              /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-black text-white leading-tight", children: "מבחן מעבר מסכם (וידיאו)" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2104,
                                columnNumber: 41
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-[#007BFF] font-mono block leading-none mt-0.5", children: [
                                "רמה ",
                                bjjCurrentLevel,
                                " • סוף שבוע 3"
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2105,
                                columnNumber: 41
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2103,
                              columnNumber: 39
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2101,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => {
                                setShowBjjMilestoneModal(false);
                                setIsSimulatingCamera(false);
                              },
                              className: "text-zinc-500 hover:text-white p-1",
                              children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2115,
                                columnNumber: 39
                              }, this)
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2108,
                              columnNumber: 37
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2100,
                          columnNumber: 35
                        }, this),
                        isSimulatingCamera ? /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col justify-between bg-zinc-950 rounded-2xl border-2 border-red-600 p-4 my-3 overflow-hidden relative shadow-inner font-sans", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-4 border border-zinc-900 pointer-events-none rounded-lg" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2123,
                            columnNumber: 39
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-2 right-2 flex items-center gap-1 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-rose-500 font-extrabold uppercase animate-pulse", children: [
                            /* @__PURE__ */ jsxDEV("span", { className: "w-1.5 h-1.5 bg-rose-600 rounded-full inline-block" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2125,
                              columnNumber: 41
                            }, this),
                            "REC 00:0",
                            bjjCameraCounter
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2124,
                            columnNumber: 39
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-zinc-500", children: "1080P • 60FPS" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2128,
                            columnNumber: 39
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "my-auto flex flex-col items-center justify-center gap-4 py-8 pointer-events-none relative z-10 text-center", children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "w-20 h-20 rounded-full border border-dashed border-red-500/40 flex items-center justify-center animate-spin", children: /* @__PURE__ */ jsxDEV(Camera, { className: "w-7 h-7 text-red-500 animate-pulse" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2135,
                              columnNumber: 43
                            }, this) }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2134,
                              columnNumber: 41
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { children: [
                              /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-zinc-300 font-extrabold max-w-xs mx-auto leading-normal", children: "הדגימו מנח 90-90 פעיל או סיבוב אקטיבי של הצוואר כנגד התנגדות בטווחים מלאים מול המצלמה" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2138,
                                columnNumber: 43
                              }, this),
                              /* @__PURE__ */ jsxDEV("p", { className: "text-[9px] text-zinc-500 mt-1", children: [
                                "המערכת תשלים ותשמור אוטומטית בעוד ",
                                bjjCameraCounter,
                                " שניות"
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2141,
                                columnNumber: 43
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2137,
                              columnNumber: 41
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2132,
                            columnNumber: 39
                          }, this),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => {
                                setIsSimulatingCamera(false);
                                setBjjMilestoneStatus("recorded");
                                setBjjMilestoneVideoName("bjj_stability_rehab_recovio_rec.mp4");
                                setBjjMilestoneMethod("camera");
                              },
                              className: "w-full py-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-xs font-black rounded-xl text-center shadow-lg transition-all",
                              children: "⏹️ עצור והשתמש בהקלטה"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2145,
                              columnNumber: 39
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2121,
                          columnNumber: 37
                        }, this) : /* @__PURE__ */ jsxDEV("div", { className: "flex-1 flex flex-col justify-start gap-4 py-3", children: bjjMilestoneStatus === "pending" ? /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl border border-amber-500/40 bg-gradient-to-tr from-amber-950/20 to-black space-y-3 shadow-lg text-right", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-amber-900/10 border border-amber-550 flex items-center justify-center mx-auto text-lg animate-bounce", children: "⏳" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2163,
                            columnNumber: 43
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5 text-center", children: [
                            /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-amber-400", children: "בדיקה קלינית בתהליך 🔬" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2167,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-350 leading-relaxed font-sans max-w-xs mx-auto", children: "⏳ הסרטון נשלח לבדיקה! המבחן נמצא כעת בבדיקה קלינית ידנית על ידי תום. השלב הבא יפתח רק לאחר אישור סופי." }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2168,
                              columnNumber: 45
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2166,
                            columnNumber: 43
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0c0d10] border border-zinc-900 rounded-lg p-2.5 space-y-1.5 text-[9px] text-zinc-400", children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-emerald-400 font-bold", children: [
                              /* @__PURE__ */ jsxDEV("span", { children: "1. סינון וידיאו ראשוני (אנדרואיד קלאוד)" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2176,
                                columnNumber: 47
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { children: "הושלם ✔️" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2177,
                                columnNumber: 47
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2175,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-amber-400 font-semibold animate-pulse", children: [
                              /* @__PURE__ */ jsxDEV("span", { children: "2. הערכת ביומכניקת צוואר וירך (תום פיזיותרפיסט)" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2180,
                                columnNumber: 47
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { children: "בבדיקה..." }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2181,
                                columnNumber: 47
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2179,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-zinc-650", children: [
                              /* @__PURE__ */ jsxDEV("span", { children: "3. פתיחת רמה הבאה ודרישות מעשיות" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2184,
                                columnNumber: 47
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { children: "ממתין 🔒" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2185,
                                columnNumber: 47
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2183,
                              columnNumber: 45
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2174,
                            columnNumber: 43
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "p-2.5 border border-dashed border-amber-500/25 rounded-lg bg-amber-500/5 space-y-2", children: [
                            /* @__PURE__ */ jsxDEV("span", { className: "text-[8.5px] text-amber-400 font-mono block text-center font-bold", children: "סימולציית תפריט מנהל (לצרכי הדגמה)" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2191,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                              /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] text-zinc-400 font-bold block text-right", children: "✍️ דגשי תיקון ביו-מכניים:" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2194,
                                columnNumber: 47
                              }, this),
                              /* @__PURE__ */ jsxDEV(
                                "textarea",
                                {
                                  value: rejectionSimText,
                                  onChange: (e) => setRejectionSimText(e.target.value),
                                  placeholder: "הערות תיקון...",
                                  className: "w-full text-[9px] text-zinc-300 bg-zinc-950 p-1.5 rounded border border-zinc-800 focus:border-red-500 font-sans leading-normal h-10 outline-none text-right resize-none"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2195,
                                  columnNumber: 47
                                },
                                this
                              )
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2193,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                              /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  onClick: () => {
                                    setBjjMilestoneStatus("approved");
                                    setBjjRejectionNotes("");
                                    if (bjjCurrentLevel < 3) {
                                      const nextLvl = bjjCurrentLevel + 1;
                                      setBjjCurrentLevel(nextLvl);
                                      setBjjSelectedLevel(nextLvl);
                                      setBjjCurrentWeek(1);
                                      setBjjSelectedWeekView(1);
                                    }
                                    alert("הקונסוליה החליטה: הסרטון אושר בהצלחה! רמת ה-BJJ הבאה פתוחה ומחכה לך כעת! 🎉");
                                  },
                                  className: "py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[9px] font-black rounded cursor-pointer leading-tight text-center",
                                  children: "🟢 אשר סרטון"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2204,
                                  columnNumber: 47
                                },
                                this
                              ),
                              /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  onClick: () => {
                                    setBjjMilestoneStatus("rejected");
                                    setBjjRejectionNotes(rejectionSimText);
                                    alert(`המבחן נדחה עם משוב קליני! המערכת עברה למצב אדום: "המבחן לא אושר – נדרש תיקון" ❌`);
                                  },
                                  className: "py-1 bg-rose-600 hover:bg-rose-700 text-white text-[9px] font-black rounded cursor-pointer leading-tight text-center",
                                  children: "🔴 דחה עם משוב"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2222,
                                  columnNumber: 47
                                },
                                this
                              )
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2203,
                              columnNumber: 45
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2190,
                            columnNumber: 43
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2162,
                          columnNumber: 41
                        }, this) : bjjMilestoneStatus === "approved" ? /* @__PURE__ */ jsxDEV("div", { className: "p-4 rounded-xl border border-emerald-500/40 bg-gradient-to-tr from-emerald-950/20 to-black space-y-3 text-center text-right font-sans", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-full bg-emerald-950/40 border-2 border-emerald-500 flex items-center justify-center mx-auto text-xl animate-bounce", children: "🎉" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2237,
                            columnNumber: 43
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
                            /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black text-emerald-400", children: "המבחן אושר קלינית! 🏆" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2241,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-350 leading-relaxed mt-1", children: "איכות התנועה, סימטריית הירכיים והעמידות של עמוד השדרה הצווארי שלכם נבדקו בידי תום ונמצאו בטווח הפיזיולוגי הנהדר לעבודה על המזרנים!" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2242,
                              columnNumber: 45
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2240,
                            columnNumber: 43
                          }, this),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => {
                                setShowBjjMilestoneModal(false);
                                setBjjMilestoneStatus("idle");
                                setBjjMilestoneVideoName(null);
                                setBjjMilestoneMethod(null);
                              },
                              className: "w-full py-2 bg-[#007BFF] hover:bg-[#0066DD] text-white text-xs font-black rounded-lg leading-normal uppercase transition-all",
                              children: "🚀 המשך לאימוני הרמה החדשה"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2247,
                              columnNumber: 43
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2236,
                          columnNumber: 41
                        }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                          bjjMilestoneStatus === "rejected" && /* @__PURE__ */ jsxDEV("div", { className: "bg-[#1c0808] border border-red-500/30 p-3 rounded-xl text-right space-y-2 animate-fadeIn mb-3", children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between text-red-500 font-extrabold text-[11px]", children: [
                              /* @__PURE__ */ jsxDEV("span", { children: "המבחן לא אושר – נדרש תיקון ❌" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2264,
                                columnNumber: 49
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { className: "text-[8.5px] bg-red-950 px-1.5 py-0.5 rounded font-bold", children: "הודעה מתום" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2265,
                                columnNumber: 49
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2263,
                              columnNumber: 47
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "bg-zinc-950/90 p-2.5 rounded-lg border border-red-500/15 text-[10px]/relaxed text-right", children: [
                              /* @__PURE__ */ jsxDEV("span", { className: "text-red-400 font-extrabold block", children: "📝 דגשים לתיקון מתום:" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2268,
                                columnNumber: 49
                              }, this),
                              /* @__PURE__ */ jsxDEV("p", { className: "text-zinc-300 font-sans break-words whitespace-pre-line mt-1", children: bjjRejectionNotes || rejectionSimText }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2269,
                                columnNumber: 49
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2267,
                              columnNumber: 47
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2262,
                            columnNumber: 45
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 p-3 bg-[#0a0f18] border border-blue-900/30 rounded-xl text-right", children: [
                            /* @__PURE__ */ jsxDEV("h4", { className: "text-[11px] font-black text-blue-400", children: "📋 הנחיות רפואיות להקלטה קלינית" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2277,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-300 leading-relaxed font-sans", children: "על מנת לעבור לרמה הבאה בתוכנית שיקום ה-BJJ, עליך להקליט ולשלוח סרטון וידאו בוחן קצר המציג את איכות התנועה, יציבות הצוואר והרוטציית הירך העמוקה שלך." }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2278,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("ul", { className: "text-[9.5px] text-zinc-400 space-y-1 list-disc list-inside font-sans mt-1 pr-1", children: [
                              /* @__PURE__ */ jsxDEV("li", { children: "מקמו את הטלפון בגובה הרצפה כך שהגוף כולו בפריים." }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2282,
                                columnNumber: 47
                              }, this),
                              /* @__PURE__ */ jsxDEV("li", { children: [
                                "הדגימו ",
                                /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: "מעבר רוטציה 90-90 ירך אקטיבי" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2283,
                                  columnNumber: 58
                                }, this),
                                " למשך 3 חזרות לכל צד."
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2283,
                                columnNumber: 47
                              }, this),
                              /* @__PURE__ */ jsxDEV("li", { children: "הדגימו כיווץ צוואר סטטי מול כף היד בטווח קדמי ללא כיפוף." }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2284,
                                columnNumber: 47
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2281,
                              columnNumber: 45
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2276,
                            columnNumber: 43
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-right", children: [
                            /* @__PURE__ */ jsxDEV("label", { className: "text-[10px] font-black text-zinc-400 block uppercase tracking-wider", children: "בחרו שיטת הגשת וידיאו:" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2290,
                              columnNumber: 45
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-3.5", children: [
                              /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  onClick: () => {
                                    setIsSimulatingCamera(true);
                                    setBjjCameraCounter(8);
                                    let count = 8;
                                    const interval = setInterval(() => {
                                      count -= 1;
                                      setBjjCameraCounter(count);
                                      if (count === 0) {
                                        clearInterval(interval);
                                        setIsSimulatingCamera(false);
                                        setBjjMilestoneStatus("recorded");
                                        setBjjMilestoneVideoName("bjj_stability_rehab_recovio_rec.mp4");
                                        setBjjMilestoneMethod("camera");
                                      }
                                    }, 1e3);
                                  },
                                  className: `flex flex-col items-center gap-2 p-3.5 rounded-xl border-2 hover:border-red-650 hover:bg-red-950/10 cursor-pointer text-center transition-all ${bjjMilestoneMethod === "camera" ? "border-red-650 bg-red-950/20 text-white shadow-md" : "border-[#1a1a1a] bg-[#0c0c0e] text-zinc-400 hover:text-white"}`,
                                  children: [
                                    /* @__PURE__ */ jsxDEV("span", { className: "text-xl", children: "🎥" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2317,
                                      columnNumber: 49
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-black", children: "צלם סרטון בוחן" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2318,
                                      columnNumber: 49
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("span", { className: "text-[8.5px] text-zinc-500 leading-none", children: "הפעל מצלמת סימולציה" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2319,
                                      columnNumber: 49
                                    }, this)
                                  ]
                                },
                                void 0,
                                true,
                                {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2293,
                                  columnNumber: 47
                                },
                                this
                              ),
                              /* @__PURE__ */ jsxDEV(
                                "button",
                                {
                                  onClick: () => {
                                    setBjjMilestoneStatus("recorded");
                                    setBjjMilestoneVideoName("bjj_hip_neck_biomechanics_final.mov");
                                    setBjjMilestoneMethod("gallery");
                                    alert("קובץ וידיאו ביומכניקה נבחר בהצלחה מהגלריה! לחצו על שלח לבדיקה קלינית להעלאה.");
                                  },
                                  className: `flex flex-col items-center gap-2 p-3.5 rounded-xl border-2 hover:border-[#007BFF] hover:bg-blue-950/10 cursor-pointer text-center transition-all ${bjjMilestoneMethod === "gallery" ? "border-[#007BFF] bg-blue-950/20 text-white shadow-md" : "border-[#1a1a1a] bg-[#0c0c0e] text-zinc-400 hover:text-white"}`,
                                  children: [
                                    /* @__PURE__ */ jsxDEV("span", { className: "text-xl", children: "📁" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2336,
                                      columnNumber: 49
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("span", { className: "text-[11px] font-black", children: "העלה מהגלריה" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2337,
                                      columnNumber: 49
                                    }, this),
                                    /* @__PURE__ */ jsxDEV("span", { className: "text-[8.5px] text-zinc-500 leading-none", children: "בחר קובץ קיים" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2338,
                                      columnNumber: 49
                                    }, this)
                                  ]
                                },
                                void 0,
                                true,
                                {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2323,
                                  columnNumber: 47
                                },
                                this
                              )
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2291,
                              columnNumber: 45
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2289,
                            columnNumber: 43
                          }, this),
                          bjjMilestoneVideoName && /* @__PURE__ */ jsxDEV("div", { className: "bg-[#05090f] border border-blue-900/20 p-3 rounded-xl flex items-center justify-between text-right animate-fadeIn mt-2", children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5", children: [
                              /* @__PURE__ */ jsxDEV("span", { className: "text-base text-[#007BFF]", children: "🎞️" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2347,
                                columnNumber: 49
                              }, this),
                              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col font-sans text-right", children: [
                                /* @__PURE__ */ jsxDEV("span", { className: "text-[10.5px] font-black text-white truncate max-w-[200px]", children: bjjMilestoneVideoName }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2349,
                                  columnNumber: 51
                                }, this),
                                /* @__PURE__ */ jsxDEV("span", { className: "text-[8px] text-zinc-500 font-mono uppercase mt-0.5", children: "נפח: 12.4MB • פורמט: H.264 • סטטוס: מוכן לשליחה" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2350,
                                  columnNumber: 51
                                }, this)
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2348,
                                columnNumber: 49
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2346,
                              columnNumber: 47
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: "text-[8.5px] bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/20 px-2 py-0.5 rounded font-black shrink-0", children: "מצורף" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2353,
                              columnNumber: 47
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2345,
                            columnNumber: 45
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2260,
                          columnNumber: 41
                        }, this) }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2158,
                          columnNumber: 37
                        }, this),
                        !isSimulatingCamera && bjjMilestoneStatus !== "pending" && bjjMilestoneStatus !== "approved" && /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 mt-4 pt-3 border-t border-[#1a1a1a]", children: [
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              disabled: !bjjMilestoneVideoName,
                              onClick: () => {
                                if (!bjjMilestoneVideoName) return;
                                setBjjMilestoneStatus("pending");
                              },
                              className: `w-full py-2.5 rounded-xl text-center text-xs font-black shadow-lg transition-all border leading-normal flex items-center justify-center gap-1.5 cursor-pointer ${bjjMilestoneVideoName ? "bg-gradient-to-r from-[#007BFF] to-[#019bee] border-[#007BFF] text-white active:translate-y-0.5" : "bg-[#121214] border-zinc-950 text-zinc-500 select-none cursor-not-allowed"}`,
                              children: /* @__PURE__ */ jsxDEV("span", { children: "🧬 שלח לבדיקה קלינית" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2376,
                                columnNumber: 41
                              }, this)
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2364,
                              columnNumber: 39
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => {
                                setShowBjjMilestoneModal(false);
                                if (bjjMilestoneStatus !== "rejected") {
                                  setBjjMilestoneStatus("idle");
                                  setBjjMilestoneVideoName(null);
                                  setBjjMilestoneMethod(null);
                                } else {
                                  setBjjMilestoneVideoName(null);
                                  setBjjMilestoneMethod(null);
                                }
                              },
                              className: "w-full py-2 bg-[#0a0a0c] hover:bg-[#121214] text-zinc-400 hover:text-white font-bold rounded-xl text-center text-[10.5px] border border-zinc-900 transition-all cursor-pointer leading-normal",
                              children: "ביטול וחזרה"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2379,
                              columnNumber: 39
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2363,
                          columnNumber: 37
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2097,
                        columnNumber: 33
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2096,
                        columnNumber: 31
                      }, this),
                      showBjjTestModal && /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col justify-end text-neutral-200 animate-slideUp", dir: "rtl", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#0b0c0e] border-t-2 border-[#007BFF] rounded-t-3xl p-5 space-y-4 max-h-[85%] overflow-y-auto shadow-[0_-10px_35px_rgba(0,123,255,0.25)] text-right", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between border-b border-[#1a1a1a]/80 pb-3", children: [
                          /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-black text-white", children: [
                            "🩺 ",
                            bjjCurrentWeek === 3 ? `מבחן מעבר לרמה הבאה` : `מבדק כשירות שבועי - שבוע ${bjjCurrentWeek}`
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2408,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => {
                                setShowBjjTestModal(false);
                                setBjjTestPainInput(null);
                                setBjjTestMotionInput(null);
                                setBjjTestError(null);
                              },
                              className: "text-zinc-550 hover:text-white p-1",
                              children: /* @__PURE__ */ jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2420,
                                columnNumber: 39
                              }, this)
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2411,
                              columnNumber: 37
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2407,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-[#0a0f18] border border-blue-900/30 rounded-lg text-[10px] text-zinc-350 leading-relaxed font-sans", children: [
                          /* @__PURE__ */ jsxDEV("strong", { className: "text-white block mb-0.5", children: "פרוטוקול בקרת עומסים קליני" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2425,
                            columnNumber: 37
                          }, this),
                          "לצורך השמירה הרפואית מפני עצימות יתר במזרן ודלקתיות במפרקים, אנא ענה ביושר על מבדק המדדים הדינמי:"
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2424,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-right", children: [
                          /* @__PURE__ */ jsxDEV("label", { className: "text-[11px] font-extrabold text-zinc-300 block leading-normal", children: "1. האם חווית כאב מפרקי חד, הקרנת עורף או רעש תנועתי חולני במפרקים השבוע?" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2431,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                            /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                type: "button",
                                onClick: () => setBjjTestPainInput("yes"),
                                className: `p-2.5 rounded-lg border text-xs font-bold transition-all text-center leading-normal ${bjjTestPainInput === "yes" ? "bg-rose-950/40 border-rose-600 text-rose-300 ring-2 ring-rose-500/10" : "bg-[#121214] border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                children: "כן, חוויתי כאב חריג ⚠️"
                              },
                              void 0,
                              false,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2435,
                                columnNumber: 39
                              },
                              this
                            ),
                            /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                type: "button",
                                onClick: () => setBjjTestPainInput("no"),
                                className: `p-2.5 rounded-lg border text-xs font-bold transition-all text-center leading-normal ${bjjTestPainInput === "no" ? "bg-emerald-950/40 border-emerald-600 text-emerald-300 ring-2 ring-emerald-500/10" : "bg-[#121214] border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                children: "שקט, ללא כאבים אקטיביים 👍"
                              },
                              void 0,
                              false,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2446,
                                columnNumber: 39
                              },
                              this
                            )
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2434,
                            columnNumber: 37
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2430,
                          columnNumber: 35
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-right", children: [
                          /* @__PURE__ */ jsxDEV("label", { className: "text-[11px] font-extrabold text-zinc-300 block leading-normal", children: "2. האם הצלחת ליישם את מלוא טווחי התנועה (Range of Motion) של תרגילי השיקום השבוע?" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2462,
                            columnNumber: 37
                          }, this),
                          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-2", children: [
                            /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                type: "button",
                                onClick: () => setBjjTestMotionInput("no"),
                                className: `p-2.5 rounded-lg border text-xs font-bold transition-all text-center leading-normal ${bjjTestMotionInput === "no" ? "bg-amber-950/40 border-amber-600 text-amber-300 ring-2 ring-amber-500/10" : "bg-[#121214] border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                children: "לא, חסימה / הגבלה בטווח 🔴"
                              },
                              void 0,
                              false,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2466,
                                columnNumber: 39
                              },
                              this
                            ),
                            /* @__PURE__ */ jsxDEV(
                              "button",
                              {
                                type: "button",
                                onClick: () => setBjjTestMotionInput("yes"),
                                className: `p-2.5 rounded-lg border text-xs font-bold transition-all text-center leading-normal ${bjjTestMotionInput === "yes" ? "bg-emerald-950/40 border-emerald-600 text-emerald-300 ring-2 ring-emerald-500/10" : "bg-[#121214] border-zinc-800 text-zinc-400 hover:border-zinc-700"}`,
                                children: "כן, טווח מלא וחופשי לגמרי ✅"
                              },
                              void 0,
                              false,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2477,
                                columnNumber: 39
                              },
                              this
                            )
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2465,
                            columnNumber: 37
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2461,
                          columnNumber: 35
                        }, this),
                        bjjTestError && /* @__PURE__ */ jsxDEV("div", { className: "p-2.5 bg-rose-950/40 border border-rose-800/80 rounded-lg text-[10px] text-rose-300 text-right leading-normal font-medium", children: bjjTestError }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2492,
                          columnNumber: 37
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "pt-3 border-t border-[#1a1a1a] flex gap-2", children: [
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => {
                                if (!bjjTestPainInput || !bjjTestMotionInput) {
                                  setBjjTestError("נא להשיב על שתי השאלות לצורך ביקורת הרופא הדיגיטלי.");
                                  return;
                                }
                                setBjjTestError(null);
                                const isFailed = bjjTestPainInput === "yes" || bjjTestMotionInput === "no";
                                if (isFailed) {
                                  const uName = fullName.trim() || "ספורטאי BJJ";
                                  const nextWeekNum = bjjCurrentWeek === 3 ? "1 ברמה הבאה" : `${bjjCurrentWeek + 1}`;
                                  let conditionText = "";
                                  if (bjjTestPainInput === "yes" && bjjTestMotionInput === "no") {
                                    conditionText = "גם כאבים וגם הגבלת תנועה";
                                  } else if (bjjTestPainInput === "yes") {
                                    conditionText = "כאבים עזים";
                                  } else if (bjjTestMotionInput === "no") {
                                    conditionText = "הגבלת תנועה וללא כאבים";
                                  }
                                  const msgText = `שלום שמי ${uName}, אני משתמש באפליקציה שלכם Recovio Academy. אני רוצה לעבור לשבוע מספר ${nextWeekNum} אך יש לי ${conditionText}.`;
                                  window.open(`https://wa.me/972587858708?text=${encodeURIComponent(msgText)}`, "_blank");
                                  setShowBjjTestModal(false);
                                  setBjjTestPainInput(null);
                                  setBjjTestMotionInput(null);
                                  alert("המערכת זיהתה כאב חריג או מגבלת תנועה. מתוך אחריות לשלומך, הגישה לשלב הבא נשארה חסומה.\n\nנעזר בצוות המרפאה לתקן ולכוון מחדש את דרגת השיקום. כעת ייפתח עבורך ערוץ וואטסאפ לתיאום בירור מהיר.");
                                } else {
                                  if (bjjCurrentWeek < 3) {
                                    const nextWk = bjjCurrentWeek + 1;
                                    setBjjCurrentWeek(nextWk);
                                    setBjjSelectedWeekView(nextWk);
                                    alert(`מזל טוב! עברת בהצלחה את מבדק הכשירות השבועי ללא כאב ובטווחי תנועה מלאים. שבוע ${nextWk} פתוח לחלוטין! ממשיכים להפציץ 🔥`);
                                  } else {
                                    if (bjjCurrentLevel < 3) {
                                      const nextLvl = bjjCurrentLevel + 1;
                                      setBjjCurrentLevel(nextLvl);
                                      setBjjSelectedLevel(nextLvl);
                                      setBjjCurrentWeek(1);
                                      setBjjSelectedWeekView(1);
                                      alert(`🌟 הישג אדיר! עברת את המבחן המסכם בהצטיינות!

עשית זאת - שלב ${bjjCurrentLevel} הושלם בהצלחה מוחלטת. רמה ${nextLvl} בתוכנית ה-BJJ נפתחה עבורך לעבודה מעשית ופרוגרסיבית חדשה!`);
                                    } else {
                                      alert(`🏆 אלוף! השלמת את כל שלוש רמות המפרקים והשיקום האינטנסיביות ביותר של ה-BJJ והגראפלינג באקדמיית Recovio בהצטיינות מפרקית יתרה ששומרת עליך מהטלות וחניקות!

שמור על הגוף חזק ומפרקים גמישים לאורך זמן על המזרן! 💪`);
                                    }
                                  }
                                  setShowBjjTestModal(false);
                                  setBjjTestPainInput(null);
                                  setBjjTestMotionInput(null);
                                }
                              },
                              className: "flex-1 py-2.5 bg-[#007BFF] hover:bg-[#0066DD] active:bg-[#0055BB] text-white font-extrabold rounded-xl text-center text-xs shadow-md transition-all cursor-pointer leading-normal outline-none",
                              children: "שלח תשובות ובדוק זכאות 🧪"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2498,
                              columnNumber: 37
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              type: "button",
                              onClick: () => {
                                setShowBjjTestModal(false);
                                setBjjTestPainInput(null);
                                setBjjTestMotionInput(null);
                                setBjjTestError(null);
                              },
                              className: "px-4 py-2.5 bg-[#121214] hover:bg-zinc-850 text-zinc-300 font-bold rounded-xl text-center text-xs border border-zinc-800 transition-all cursor-pointer leading-normal outline-none",
                              children: "ביטול"
                            },
                            void 0,
                            false,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2561,
                              columnNumber: 37
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2497,
                          columnNumber: 35
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2405,
                        columnNumber: 33
                      }, this) }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2404,
                        columnNumber: 31
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 1542,
                      columnNumber: 27
                    }, this) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 pt-2", children: [
                        /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-extrabold text-[#007BFF] uppercase tracking-wider text-right", children: "תיק א׳: אימון ביצועים (Performance)" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2583,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2.5", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] rounded-xl p-3 flex flex-col gap-2", children: [
                            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                              /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-zinc-200", children: "רמה 1: בקרת יציבה ובלימה" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2590,
                                columnNumber: 37
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-emerald-400 font-bold", children: "🔓 פתוח" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2591,
                                columnNumber: 37
                              }, this)
                            ] }, void 0, true, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2589,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5 mt-2", children: EXERCISES[selectedSport].map((ex, index) => /* @__PURE__ */ jsxDEV(
                              "div",
                              {
                                onClick: () => {
                                  if (ex.isFree) {
                                    setSelectedExercise(ex);
                                  } else {
                                    triggerPaywall(ex.name);
                                  }
                                },
                                className: "p-2.5 rounded-lg bg-[#070707] hover:bg-[#111]/85 border border-[#1a1a1a]/30 flex items-center justify-between text-[11px] cursor-pointer transition-all",
                                children: [
                                  /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-zinc-300 truncate max-w-[180px]", children: [
                                    index + 1,
                                    ". ",
                                    ex.name
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 2607,
                                    columnNumber: 41
                                  }, this),
                                  ex.isFree ? /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] bg-[#007BFF]/10 text-[#007BFF] border border-[#007BFF]/30 px-1.5 py-0.5 rounded font-semibold", children: "חינם" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 2609,
                                    columnNumber: 43
                                  }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500 flex items-center gap-1 font-mono text-[9px]", children: [
                                    /* @__PURE__ */ jsxDEV(Lock, { className: "w-3 h-3 text-[#007BFF]" }, void 0, false, {
                                      fileName: "/app/applet/src/App.tsx",
                                      lineNumber: 2612,
                                      columnNumber: 45
                                    }, this),
                                    " נעול"
                                  ] }, void 0, true, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 2611,
                                    columnNumber: 43
                                  }, this)
                                ]
                              },
                              ex.id,
                              true,
                              {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2596,
                                columnNumber: 39
                              },
                              this
                            )) }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2594,
                              columnNumber: 35
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2588,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => triggerPaywall("רמה 2: חוזק מפרקי תחת עומס"),
                              className: "w-full bg-gradient-to-br from-[#0c0c0c] to-[#040404] border border-[#1a1a1a]/40 p-3 rounded-xl flex items-center justify-between text-xs text-zinc-500 cursor-pointer hover:bg-zinc-900/10 transition-all text-right",
                              children: [
                                /* @__PURE__ */ jsxDEV("span", { children: "רמה 2: חוזק מפרקי תחת עומסים" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2625,
                                  columnNumber: 35
                                }, this),
                                /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 font-mono text-[10px] text-rose-500", children: [
                                  /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 2627,
                                    columnNumber: 37
                                  }, this),
                                  " נעול [VIP]"
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2626,
                                  columnNumber: 35
                                }, this)
                              ]
                            },
                            void 0,
                            true,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2621,
                              columnNumber: 33
                            },
                            this
                          ),
                          /* @__PURE__ */ jsxDEV(
                            "button",
                            {
                              onClick: () => triggerPaywall("רמה 3: חלוקת מומנטום ופליאומטריה"),
                              className: "w-full bg-gradient-to-br from-[#0c0c0c] to-[#040404] border border-[#1a1a1a]/40 p-3 rounded-xl flex items-center justify-between text-xs text-zinc-500 cursor-pointer hover:bg-zinc-900/10 transition-all text-right",
                              children: [
                                /* @__PURE__ */ jsxDEV("span", { children: "רמה 3: מהירות השק ושיגור כוח" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2636,
                                  columnNumber: 35
                                }, this),
                                /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1 font-mono text-[10px] text-rose-500", children: [
                                  /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 2638,
                                    columnNumber: 37
                                  }, this),
                                  " נעול [VIP]"
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2637,
                                  columnNumber: 35
                                }, this)
                              ]
                            },
                            void 0,
                            true,
                            {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2632,
                              columnNumber: 33
                            },
                            this
                          )
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2586,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2582,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-2.5 pt-2", children: [
                        /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-bold text-zinc-400 uppercase tracking-widest text-right", children: "תוכנית התקדמות תלת-שבועית" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2646,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] rounded-xl flex items-center justify-between", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col text-right", children: [
                            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-white", children: "שבוע 1: בסיס וטכניקה" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2651,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-400 mt-1", children: "תרגול תחילת גיוון קצב סיבוב מוטורי" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2652,
                              columnNumber: 35
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2650,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-emerald-500 font-extrabold flex items-center gap-1", children: "✔️ פתוח" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2654,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2649,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-gradient-to-br from-[#0a0a0a] to-[#030303] border border-[#1a1a1a]/40 rounded-xl flex items-center justify-between text-zinc-500", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col text-right", children: [
                            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold", children: "שבוע 2: העלאת עומס" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2660,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-600 mt-1", children: "ייפתח באופן אוטומטי בעוד 7 ימים מההרשמה" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2661,
                              columnNumber: 35
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2659,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-rose-500/70 font-mono font-bold flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxDEV(Lock, { className: "w-3 h-3" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2664,
                              columnNumber: 35
                            }, this),
                            " נעול 7ד׳"
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2663,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2658,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-gradient-to-br from-[#0a0a0a] to-[#030303] border border-[#1a1a1a]/40 rounded-xl flex items-center justify-between text-zinc-500", children: [
                          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col text-right", children: [
                            /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold", children: "שבוע 3: שיא ויציבות מכנית" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2671,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-600 mt-1", children: "חיזוק מקס-מומנטום; ייפתח בעוד 14 ימים" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2672,
                              columnNumber: 35
                            }, this)
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2670,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-rose-500/70 font-mono font-bold flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxDEV(Lock, { className: "w-3 h-3" }, void 0, false, {
                              fileName: "/app/applet/src/App.tsx",
                              lineNumber: 2675,
                              columnNumber: 35
                            }, this),
                            " נעול 14ד׳"
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2674,
                            columnNumber: 33
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2669,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV(
                          "button",
                          {
                            disabled: true,
                            className: "w-full py-3 bg-[#0a0a0a] text-zinc-650 border border-[#1a1a1a] font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-not-allowed mt-2",
                            children: [
                              /* @__PURE__ */ jsxDEV(Lock, { className: "w-3.5 h-3.5 text-zinc-600" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2684,
                                columnNumber: 33
                              }, this),
                              /* @__PURE__ */ jsxDEV("span", { children: "הגש סרטון למבחן מעבר שלב (נעול לשבוע 3)" }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2685,
                                columnNumber: 33
                              }, this)
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2680,
                            columnNumber: 31
                          },
                          this
                        )
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2645,
                        columnNumber: 29
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-3 pt-2", children: [
                        /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-extrabold text-[#007BFF] uppercase tracking-wider text-right", children: "תיק ב׳: פציעות נפוצות ומניעה" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2691,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-right font-sans", children: INJURY_PROTOCOLS[selectedSport].map((injury) => /* @__PURE__ */ jsxDEV(
                          "div",
                          {
                            onClick: () => {
                              if (injury.isFree) {
                                setSelectedInjury(injury);
                              } else {
                                triggerPaywall(injury.title);
                              }
                            },
                            className: "p-3 bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] hover:bg-[#0c0c0c] rounded-xl flex flex-col gap-1 cursor-pointer transition-all text-right",
                            children: [
                              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between", children: [
                                /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-white transition-all", children: injury.title }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2706,
                                  columnNumber: 39
                                }, this),
                                injury.isFree ? /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] bg-[#007BFF]/15 text-[#007BFF] border border-[#007BFF]/30 px-1.5 py-0.5 rounded font-semibold", children: "חינם" }, void 0, false, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2708,
                                  columnNumber: 41
                                }, this) : /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500 flex items-center gap-1 font-mono text-[9px] font-bold", children: [
                                  /* @__PURE__ */ jsxDEV(Lock, { className: "w-3 h-3 text-[#007BFF]" }, void 0, false, {
                                    fileName: "/app/applet/src/App.tsx",
                                    lineNumber: 2711,
                                    columnNumber: 43
                                  }, this),
                                  " מוגן VIP"
                                ] }, void 0, true, {
                                  fileName: "/app/applet/src/App.tsx",
                                  lineNumber: 2710,
                                  columnNumber: 41
                                }, this)
                              ] }, void 0, true, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2705,
                                columnNumber: 37
                              }, this),
                              /* @__PURE__ */ jsxDEV("p", { className: "text-[10px] text-zinc-500 truncate mt-1 leading-normal", children: injury.symptoms }, void 0, false, {
                                fileName: "/app/applet/src/App.tsx",
                                lineNumber: 2715,
                                columnNumber: 37
                              }, this)
                            ]
                          },
                          injury.id,
                          true,
                          {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2694,
                            columnNumber: 35
                          },
                          this
                        )) }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2692,
                          columnNumber: 31
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2690,
                        columnNumber: 29
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2580,
                      columnNumber: 27
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 1495,
                    columnNumber: 23
                  }, this),
                  currentTab === BottomTab.CLINIC && /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "border-b border-[#1a1a1a] pb-3 text-right", children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black text-white", children: "הקליניקה של האקדמיה" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2730,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-[11px] text-zinc-400 mt-1", children: "אבחון מכני-תנועתי, מדרסים וסקירות ביומכניות מתקדמות" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2731,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2729,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a] rounded-2xl p-4 flex flex-col gap-3 text-right font-sans", children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-300 leading-relaxed font-normal", children: CLINIC_INFO.description }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2735,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-2.5 pt-2 text-xs text-zinc-300", children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2741,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { children: CLINIC_INFO.address }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2742,
                            columnNumber: 31
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2740,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2745,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { dir: "ltr", children: CLINIC_INFO.phone }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2746,
                            columnNumber: 31
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2744,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsxDEV(Clock, { className: "w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2749,
                            columnNumber: 31
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { children: CLINIC_INFO.hours }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2750,
                            columnNumber: 31
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2748,
                          columnNumber: 29
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2739,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2734,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-bold text-zinc-400 uppercase tracking-wider text-right", children: "בדיקות ופרוטוקולים נבחרים בקליניקה:" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2756,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: CLINIC_INFO.procedures.map((proc) => /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-gradient-to-br from-[#111111] to-[#050505] border border-[#1a1a1a]/60 rounded-xl flex items-center justify-between text-xs text-right", children: [
                        /* @__PURE__ */ jsxDEV("div", { children: [
                          /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-zinc-200 block", children: proc.title }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2761,
                            columnNumber: 35
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-500 mt-1 block", children: [
                            "משך זמן: ",
                            proc.time
                          ] }, void 0, true, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2762,
                            columnNumber: 35
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2760,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-[#007BFF] font-mono", children: proc.price }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2764,
                          columnNumber: 33
                        }, this)
                      ] }, proc.title, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2759,
                        columnNumber: 31
                      }, this)) }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2757,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2755,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => triggerPaywall("בדיקה קלינית ייעודית"),
                        className: "w-full py-3 bg-[#007BFF] hover:bg-[#0066DD] text-white rounded-xl text-xs font-bold text-center mt-3 shadow-md cursor-pointer",
                        children: 'תיאום תור באפליקציה בראשל"צ'
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2770,
                        columnNumber: 25
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2728,
                    columnNumber: 23
                  }, this),
                  currentTab === BottomTab.SHOP && (
                    <div className="space-y-6 pb-20 text-right font-sans relative" dir="rtl">
                      {/* Shop Header */}
                      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                        <div>
                          <h3 className="text-xl font-black text-white hover:text-[#007BFF] transition-colors">
                            🛒 חנות Recovio פרימיום
                          </h3>
                          <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                            תכשירי שיקום קליניים, משחות לטיפול עמוק וציוד עזר מונחה פיזיותרפיה
                          </p>
                        </div>
                        
                        {/* Interactive Trolley Icon with Badge */}
                        <button 
                          onClick={() => setIsCartOpen(true)}
                          className="relative p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#007BFF] hover:bg-zinc-900/60 shadow-[0_0_15px_rgba(0,123,255,0.05)] transition-all flex items-center justify-center cursor-pointer text-xs"
                        >
                          <ShoppingCart className="w-5 h-5 text-[#007BFF]" />
                          {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 bg-[#007BFF] text-white text-[9.5px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-black animate-pulse font-mono shadow-[0_0_10px_rgba(0,123,255,0.6)]">
                              {cartCount}
                            </span>
                          )}
                        </button>
                      </div>

                      {/* Quick Scroll Filters */}
                      <div className="flex gap-2 overflow-x-auto pb-2 shrink-0 select-none">
                        {["הכל", "🧴 תכשירים ומשחות קליניות", "🩻 אביזרים וציוד עזר"].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setShopCategory(cat)}
                            className={`px-3 py-2 rounded-xl text-[10.5px] font-black tracking-wide border shrink-0 transition-all cursor-pointer ${
                              shopCategory === cat 
                                ? "bg-[#007BFF] border-[#0066DD] text-white shadow-lg shadow-[#007BFF]/20 scale-102" 
                                : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Dual Premium Grid Layout */}
                      <div className="space-y-8 mt-4">
                        {/* Category 1: 🧴 תכשירים ומשחות קליניות */}
                        {(shopCategory === "הכל" || shopCategory === "🧴 תכשירים ומשחות קליניות") && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 border-r-4 border-[#007BFF] pr-2.5">
                              <h4 className="text-sm font-black text-white py-0.5">🧴 תכשירים ומשחות קליניות</h4>
                              <span className="text-[10px] text-zinc-500 font-medium">(כולל 18% מע"מ)</span>
                            </div>
                            
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                              {SHOP_ITEMS.filter((item) => item.category === "🧴 תכשירים ומשחות קליניות").map((item) => (
                                <div 
                                  key={item.id} 
                                  className="group bg-gradient-to-b from-[#111115] to-[#07070a] border border-[#1a1a20]/80 rounded-2xl overflow-hidden shadow-xl transition-all hover:border-[#007BFF]/60 flex flex-col justify-between"
                                >
                                  {/* Cover image & tag */}
                                  <div className="relative h-32 overflow-hidden bg-black/40">
                                    <img 
                                      src={item.image} 
                                      alt={item.title} 
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-2 right-2 bg-black/75 backdrop-blur-md border border-[#007BFF]/40 text-[#007BFF] font-black text-[9px] px-2 py-0.5 rounded-full">
                                      ⭐ 4.9 | קליני
                                    </span>
                                  </div>

                                  {/* Info details */}
                                  <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                                    <div>
                                      <h5 className="text-[12.5px] font-bold text-white leading-snug group-hover:text-[#007BFF] transition-colors">{item.title}</h5>
                                      <p className="text-[10px] text-zinc-400 leading-relaxed mt-1.5 line-clamp-2">{item.description}</p>
                                    </div>

                                    {/* Price & Action button */}
                                    <div className="flex items-center justify-between pt-2 border-t border-zinc-900/60 mt-auto">
                                      <span className="text-sm font-black text-[#007BFF] font-mono">{item.price}</span>
                                      
                                      <div className="flex gap-1.5">
                                        <button 
                                          onClick={() => setSelectedShopProduct(item)}
                                          className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 cursor-pointer transition text-xs flex items-center justify-center"
                                          title="פרטי מוצר"
                                        >
                                          🔍
                                        </button>
                                        <button 
                                          onClick={() => handleAddToCart(item)}
                                          className="px-2.5 py-1.5 bg-[#007BFF] hover:bg-[#0056b3] text-white font-bold text-[10px] rounded-lg shadow-lg shadow-[#007BFF]/10 transition-all cursor-pointer flex items-center justify-center gap-1"
                                        >
                                          <Plus className="w-3 h-3" />
                                          הוסף
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Category 2: 🩻 אביזרים וציוד עזר */}
                        {(shopCategory === "הכל" || shopCategory === "🩻 אביזרים וציוד עזר") && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 border-r-4 border-[#007BFF] pr-2.5">
                              <h4 className="text-sm font-black text-white py-0.5">🩻 אביזרים וציוד עזר</h4>
                              <span className="text-[10px] text-zinc-500 font-medium">(כולל 18% מע"מ)</span>
                            </div>
                            
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                              {SHOP_ITEMS.filter((item) => item.category === "🩻 אביזרים וציוד עזר").map((item) => (
                                <div 
                                  key={item.id} 
                                  className="group bg-gradient-to-b from-[#111115] to-[#07070a] border border-[#1a1a20]/80 rounded-2xl overflow-hidden shadow-xl transition-all hover:border-[#007BFF]/60 flex flex-col justify-between"
                                >
                                  {/* Cover image & tag */}
                                  <div className="relative h-32 overflow-hidden bg-black/40">
                                    <img 
                                      src={item.image} 
                                      alt={item.title} 
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-2 right-2 bg-black/75 backdrop-blur-md border border-[#007BFF]/40 text-[#007BFF] font-black text-[9px] px-2 py-0.5 rounded-full">
                                      ⭐ 5.0 | שיקום
                                    </span>
                                  </div>

                                  {/* Info details */}
                                  <div className="p-3.5 flex-1 flex flex-col justify-between space-y-3">
                                    <div>
                                      <h5 className="text-[12.5px] font-bold text-white leading-snug group-hover:text-[#007BFF] transition-colors">{item.title}</h5>
                                      <p className="text-[10px] text-zinc-400 leading-relaxed mt-1.5 line-clamp-2">{item.description}</p>
                                    </div>

                                    {/* Price & Action button */}
                                    <div className="flex items-center justify-between pt-2 border-t border-zinc-900/60 mt-auto">
                                      <span className="text-sm font-black text-[#007BFF] font-mono">{item.price}</span>
                                      
                                      <div className="flex gap-1.5">
                                        <button 
                                          onClick={() => setSelectedShopProduct(item)}
                                          className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 cursor-pointer transition text-xs flex items-center justify-center"
                                          title="פרטי מוצר"
                                        >
                                          🔍
                                        </button>
                                        <button 
                                          onClick={() => handleAddToCart(item)}
                                          className="px-2.5 py-1.5 bg-[#007BFF] hover:bg-[#0056b3] text-white font-bold text-[10px] rounded-lg shadow-lg shadow-[#007BFF]/10 transition-all cursor-pointer flex items-center justify-center gap-1"
                                        >
                                          <Plus className="w-3 h-3" />
                                          הוסף
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Persistent Floating Circle Shopping Cart Icon */}
                      <div className="fixed bottom-16 right-4 z-40">
                        <button
                          onClick={() => setIsCartOpen(true)}
                          className="w-13 h-13 bg-[#007BFF] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,123,255,0.6)] hover:bg-[#0056b3] hover:scale-105 active:scale-95 border border-[#0052cc] transition-all cursor-pointer relative"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-600 border border-black text-white text-[8.5px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                              {cartCount}
                            </span>
                          )}
                        </button>
                      </div>

                      {/* PRODUCT DETAIL OVERLAY MODAL */}
                      <AnimatePresence>
                        {selectedShopProduct && (
                          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-55 flex items-end justify-center animate-fadeIn" style={{ animationDuration: '200ms' }}>
                            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedShopProduct(null)} />
                            <motion.div 
                              initial={{ y: "100%" }}
                              animate={{ y: 0 }}
                              exit={{ y: "100%" }}
                              transition={{ type: "spring", damping: 25, stiffness: 280 }}
                              className="bg-[#09090C] border-t border-zinc-900 rounded-t-[32px] w-full max-w-sm max-h-[90vh] overflow-y-auto z-10 flex flex-col shadow-[0_-15px_30px_rgba(0,0,0,0.8)]"
                            >
                              {/* Top slider notch */}
                              <div className="w-12 h-1.5 bg-zinc-800 rounded-full mx-auto my-3" />

                              {/* Relative cover image */}
                              <div className="relative h-56 w-full">
                                <img 
                                  src={selectedShopProduct.image} 
                                  alt={selectedShopProduct.title} 
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                                <button 
                                  onClick={() => setSelectedShopProduct(null)}
                                  className="absolute top-4 left-4 w-9 h-9 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-300 hover:text-white border border-zinc-800 hover:bg-black/90 cursor-pointer"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                                <div className="absolute bottom-3 right-3 bg-black/75 border border-[#007BFF]/40 text-[#007BFF] font-black text-[9px] px-2.5 py-1 rounded-full backdrop-blur-sm">
                                  🛡️ מוגן במלאי קליני
                                </div>
                              </div>

                              {/* Content Details */}
                              <div className="p-5 space-y-4 text-right" dir="rtl">
                                <div>
                                  <span className="text-[10px] uppercase font-black tracking-widest text-[#007BFF]">
                                    {selectedShopProduct.category}
                                  </span>
                                  <h4 className="text-base font-black text-white leading-snug mt-1">
                                    {selectedShopProduct.title}
                                  </h4>
                                </div>

                                {/* Seal of quality/Therapist stamp */}
                                <div className="bg-[#007BFF]/5 border border-[#007BFF]/20 rounded-xl px-3.5 py-2.5 text-right flex items-start gap-2.5">
                                  <span className="text-base mt-0.5">👩‍⚕️</span>
                                  <div className="text-[10.5px] leading-relaxed">
                                    <p className="font-bold text-white text-[11px]">סימוכין קליני מוסמך</p>
                                    <p className="text-zinc-405 mt-0.5">פריט זה נבחר בקפידה על ידי מומחי הפיזיותרפיה של אקדמיית Recovio ומותאם ספציפית לפרטוקולי השיקום באפליקציה.</p>
                                  </div>
                                </div>

                                <div className="space-y-2">
                                  <p className="text-xs font-bold text-zinc-300">תיאור המוצר:</p>
                                  <p className="text-[11.5px] text-zinc-400 leading-relaxed">
                                    {selectedShopProduct.description}
                                  </p>
                                </div>

                                <div className="text-[11px] bg-zinc-950 border border-zinc-900 rounded-xl p-3 text-zinc-400 leading-relaxed text-right">
                                  <p className="font-bold text-zinc-300">💡 הנחיות שימוש מפיזיותרפיסט הבית:</p>
                                  <p className="mt-1">
                                    {selectedShopProduct.category.includes("תכשירים") 
                                      ? "הנחיות שימוש: יש למרוח או לרסס על האזור הפגוע/התפוס ולעסות בעדינות עד לספיגה מלאה. מומלץ לשימוש לפני או אחרי אימונים עצימים."
                                      : "הנחיות שימוש: יש להשתמש לפי פרוטוקולי השיקום והאימון המוגדרים באפליקציה. מיועד למניעת קריסות ושמירה על טווחי תנועה מאוזנים."}
                                  </p>
                                </div>

                                {/* Price block */}
                                <div className="flex items-center justify-between pt-3 border-t border-zinc-900">
                                  <div>
                                    <span className="block text-[10px] text-zinc-500">מחיר סופי כולל מע"מ (18%):</span>
                                    <span className="text-lg font-black text-[#007BFF] font-mono leading-none">
                                      {selectedShopProduct.price}
                                    </span>
                                  </div>

                                  <button
                                    onClick={() => {
                                      handleAddToCart(selectedShopProduct);
                                      setSelectedShopProduct(null);
                                    }}
                                    className="px-5 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-lg shadow-[#007BFF]/20 cursor-pointer transition-all hover:scale-102"
                                  >
                                    <Plus className="w-4 h-4" />
                                    ➕ הוסף לסל הקניות
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>

                      {/* STEP 1: PAYMENT METHOD SELECTION OVERLAY */}
                      <AnimatePresence>
                        {checkoutStep === 'selection' && (
                          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-60 flex items-center justify-center p-4 text-right" dir="rtl">
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 20 }}
                              className="bg-[#0C0C10] border border-zinc-800 rounded-3xl p-6 max-w-sm w-full space-y-5 shadow-2xl relative"
                            >
                              {/* Close Button */}
                              <button 
                                id="btn-close-selection"
                                onClick={() => setCheckoutStep('idle')}
                                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer hover:border-zinc-700 transition"
                              >
                                <X className="w-4 h-4" />
                              </button>

                              <div className="text-center pb-2 border-b border-zinc-900/85">
                                <span className="text-2xl">🔐</span>
                                <h4 className="text-base font-black text-white mt-1.5">בחירת אמצעי תשלום</h4>
                                <p className="text-[10.5px] text-zinc-400 mt-1">אנא בחר את הדרך המועדפת עליך להשלמת הרכישה המאובטחת</p>
                              </div>

                              {/* Payment Methods Grid */}
                              <div className="space-y-3">
                                {/* Option A: Bit */}
                                <button
                                  id="chk-method-bit"
                                  onClick={() => setSelectedPaymentMethod('bit')}
                                  className={`w-full p-3.5 bg-[#08080c] rounded-2xl border text-right flex items-start gap-3 transition-all cursor-pointer ${
                                    selectedPaymentMethod === 'bit'
                                      ? "border-[#F00078]/85 shadow-[0_0_15px_rgba(240,0,120,0.15)] ring-1 ring-[#F00078]/40 bg-[#F00078]/5"
                                      : "border-zinc-900 hover:border-zinc-850 hover:bg-zinc-950/60"
                                  }`}
                                >
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                                    selectedPaymentMethod === 'bit' ? "border-[#F00078] bg-[#F00078]/10" : "border-zinc-700"
                                  }`}>
                                    {selectedPaymentMethod === 'bit' && <div className="w-2.5 h-2.5 rounded-full bg-[#F00078]" />}
                                  </div>
                                  <div>
                                    <span className="text-xs font-black text-white block">📱 אפליקציית bit</span>
                                    <span className="text-[9.5px] text-zinc-400 leading-relaxed block mt-1">חיבור מהיר ומיידי להעברה בטוחה ללא הזנת כרטיס אשראי</span>
                                  </div>
                                </button>

                                {/* Option B: Google Pay */}
                                <button
                                  id="chk-method-gpay"
                                  onClick={() => setSelectedPaymentMethod('gpay')}
                                  className={`w-full p-3.5 bg-[#08080c] rounded-2xl border text-right flex items-start gap-3 transition-all cursor-pointer ${
                                    selectedPaymentMethod === 'gpay'
                                      ? "border-[#007BFF]/85 shadow-[0_0_15px_rgba(0,123,255,0.15)] ring-1 ring-[#007BFF]/40 bg-[#007BFF]/5"
                                      : "border-zinc-900 hover:border-zinc-850 hover:bg-zinc-950/60"
                                  }`}
                                >
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                                    selectedPaymentMethod === 'gpay' ? "border-[#007BFF] bg-[#007BFF]/10" : "border-zinc-700"
                                  }`}>
                                    {selectedPaymentMethod === 'gpay' && <div className="w-2.5 h-2.5 rounded-full bg-[#007BFF]" />}
                                  </div>
                                  <div>
                                    <span className="text-xs font-black text-white block">💳 Google Pay</span>
                                    <span className="text-[9.5px] text-zinc-400 leading-relaxed block mt-1">סנכרון מהיר עם חשבון ה-Google שלך לתשלום מוגן בלחיצת כפתור אחת</span>
                                  </div>
                                </button>

                                {/* Option C: PayBox */}
                                <button
                                  id="chk-method-paybox"
                                  onClick={() => setSelectedPaymentMethod('paybox')}
                                  className={`w-full p-3.5 bg-[#08080c] rounded-2xl border text-right flex items-start gap-3 transition-all cursor-pointer ${
                                    selectedPaymentMethod === 'paybox'
                                      ? "border-amber-500/85 shadow-[0_0_15px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/40 bg-amber-500/5"
                                      : "border-zinc-900 hover:border-zinc-850 hover:bg-zinc-950/60"
                                  }`}
                                >
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                                    selectedPaymentMethod === 'paybox' ? "border-amber-500 bg-amber-500/10" : "border-zinc-700"
                                  }`}>
                                    {selectedPaymentMethod === 'paybox' && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                                  </div>
                                  <div>
                                    <span className="text-xs font-black text-white block">🅿️ אפליקציית PayBox</span>
                                    <span className="text-[9.5px] text-zinc-400 leading-relaxed block mt-1">חיוב פשוט בעזרת יתרת הפיבוקס האישית או כרטיסי אשראי שמורים</span>
                                  </div>
                                </button>
                              </div>

                              {/* Pricing & Checkout Continuation */}
                              <div className="pt-3 border-t border-zinc-900 flex flex-col gap-3">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="text-zinc-400 font-bold">סך הכל לתשלום (כולל מע"מ):</span>
                                  <span className="font-mono text-white font-black text-sm">
                                    ₪{cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity), 0)}
                                  </span>
                                </div>

                                <button
                                  id="btn-confirm-selection"
                                  onClick={() => {
                                    if (selectedPaymentMethod) {
                                      setCheckoutStep('gateway');
                                    }
                                  }}
                                  disabled={!selectedPaymentMethod}
                                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                                    selectedPaymentMethod
                                      ? "bg-[#007BFF] hover:bg-[#0056b3] text-white shadow-lg shadow-[#007BFF]/20 cursor-pointer hover:scale-102"
                                      : "bg-zinc-900 border border-zinc-800 text-zinc-650 cursor-not-allowed"
                                  }`}
                                >
                                  <span>המשך לאישור התשלום</span>
                                  <span>←</span>
                                </button>
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>

                      {/* STEP 2: SECURE PAYMENT GATEWAY PAGE */}
                      <AnimatePresence>
                        {checkoutStep === 'gateway' && (
                          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-60 flex items-center justify-center p-4 text-right" dir="rtl">
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95, y: 15 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: 15 }}
                              className="bg-[#0B0B0E] border border-zinc-805 rounded-3xl p-6 max-w-sm w-full space-y-6 shadow-2xl relative overflow-hidden"
                            >
                              {/* Glow effect matching brand colors */}
                              <div className={`absolute -top-16 -left-16 w-32 h-32 rounded-full blur-[60px] opacity-20 ${
                                selectedPaymentMethod === 'bit' ? 'bg-[#F00078]' :
                                selectedPaymentMethod === 'gpay' ? 'bg-[#007BFF]' : 'bg-amber-500'
                              }`} />

                              {/* Back and Close buttons */}
                              <div className="flex justify-between items-center relative z-10">
                                <button 
                                  id="btn-back-to-selection"
                                  onClick={() => setCheckoutStep('selection')}
                                  className="text-[10.5px] font-bold text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
                                >
                                  <span>→</span>
                                  <span>חזרה לבחירה</span>
                                </button>
                                
                                <button 
                                  id="btn-close-gateway"
                                  onClick={() => {
                                    setCheckoutStep('idle');
                                    setSelectedPaymentMethod(null);
                                  }}
                                  className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white cursor-pointer"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              {/* Gateway Brand Header and Logo */}
                              <div className="text-center space-y-2 relative z-10 pt-1">
                                <div className="flex justify-center">
                                  {selectedPaymentMethod === 'bit' && (
                                    <div className="px-4 py-2 rounded-2xl bg-[#F00078]/10 border border-[#F00078]/30 flex items-center justify-center text-[#F00078] text-base font-black font-sans shadow-md shadow-[#F00078]/5">
                                      📱 bit
                                    </div>
                                  )}
                                  {selectedPaymentMethod === 'gpay' && (
                                    <div className="px-4 py-2 rounded-2xl bg-[#007BFF]/10 border border-[#007BFF]/30 flex items-center justify-center text-[#007BFF] text-base font-black font-sans shadow-md shadow-[#007BFF]/5">
                                      💳 Google Pay
                                    </div>
                                  )}
                                  {selectedPaymentMethod === 'paybox' && (
                                    <div className="px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 text-base font-black font-sans shadow-md shadow-amber-500/5">
                                      🅿️ PayBox
                                    </div>
                                  )}
                                </div>

                                <div>
                                  <h4 className="text-[14.5px] font-black text-white mt-2">
                                    {selectedPaymentMethod === 'bit' && "דף תשלום מאובטח של אפליקציית bit"}
                                    {selectedPaymentMethod === 'gpay' && "דף תשלום מאובטח של Google Pay"}
                                    {selectedPaymentMethod === 'paybox' && "דף תשלום מאובטח של אפליקציית PayBox"}
                                  </h4>
                                  <div className="flex flex-col items-center gap-1.5 mt-1.5">
                                    <span className="inline-flex items-center gap-1 text-[9.5px] px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                                      <Check className="w-2.5 h-2.5" /> שער תשלום מאובטח ומוצפן 256-bit
                                    </span>
                                    {(selectedPaymentMethod === 'bit' || selectedPaymentMethod === 'paybox') && (
                                      <span className="text-[10px] font-semibold text-[#007BFF] bg-[#007BFF]/5 px-2.5 py-1 rounded-md border border-[#007BFF]/20 mt-0.5">
                                        🔐 העברה מאובטחת לחשבון Recovio (058-5885818)
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* Order Details box */}
                              <div className="bg-[#050508] rounded-2xl p-4 border border-zinc-900 space-y-3 relative z-10 text-right">
                                <div className="text-[10px] text-zinc-400 border-b border-zinc-900 pb-2 flex justify-between">
                                  <span className="font-bold">מוטב קליני:</span>
                                  <span className="text-zinc-300 font-bold">Recovio Shop Ltd</span>
                                </div>
                                
                                <div className="space-y-1.5 text-[10.5px] leading-relaxed">
                                  <div className="flex justify-between">
                                    <span className="text-zinc-500">פריטים לתשלום:</span>
                                    <span className="text-zinc-200 font-bold truncate max-w-[170px]">
                                      {cart.map(i => i.title).join(', ')}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-zinc-500">דואר אלקטרוני:</span>
                                    <span className="text-zinc-200 font-mono">{email || "מנוי פרימיום Recovio"}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-zinc-500">חשבון ומע"מ (18% מחושב):</span>
                                    <span className="text-zinc-300">כלול במחיר הסופי</span>
                                  </div>
                                </div>

                                <div className="pt-2.5 border-t border-zinc-900 flex justify-between items-center">
                                  <span className="text-[11px] font-bold text-white">סך הכל לחיוב:</span>
                                  <span className="text-base font-black text-[#007BFF] font-mono">
                                    ₪{cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity), 0)}
                                  </span>
                                </div>
                              </div>

                              {/* Secure Connection Simulation */}
                              <div className="flex items-center gap-2.5 bg-zinc-950/70 p-3 rounded-xl border border-zinc-900 text-right">
                                <div className="w-5 h-5 border-2 border-[#007BFF] border-t-transparent rounded-full animate-spin shrink-0" />
                                <div className="text-[9.5px] text-zinc-400 leading-relaxed">
                                  <p className="font-bold text-zinc-200">יוצר התקשרות מוצפנת...</p>
                                  <p className="text-zinc-500 mt-0.5">המערכת מוכנה כעת לקבלת אישור החיוב מאפליקציית הבנק או הנייד.</p>
                                </div>
                              </div>

                              {/* Action button */}
                              <div className="space-y-2 relative z-10">
                                <button
                                  id="btn-confirm-payment"
                                  onClick={() => {
                                    setCart([]); // Auto empty shopping cart local state
                                    setCheckoutStep('idle');
                                    setSelectedPaymentMethod(null);
                                    setShowCheckoutSuccess(true); // Open success dialog (Step 3)
                                  }}
                                  className={`w-full py-3.5 rounded-xl text-xs font-bold transition-all shadow-lg text-white font-sans flex items-center justify-center cursor-pointer hover:scale-102 ${
                                    selectedPaymentMethod === 'bit' ? 'bg-[#F00078] hover:bg-[#d00068] shadow-[#F00078]/20' :
                                    selectedPaymentMethod === 'gpay' ? 'bg-[#007BFF] hover:bg-[#0056b3] shadow-[#007BFF]/20' : 
                                    'bg-amber-600 hover:bg-amber-500 shadow-amber-600/20'
                                  }`}
                                >
                                  <span>מאשר תשלום וביצוע רכישה 🔒</span>
                                </button>
                                
                                <p className="text-[9.5px] text-zinc-550 text-center leading-normal">
                                  לחיצה על הכפתור מאשרת את החיוב הישיר על סך ₪{cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity), 0)}
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>

                      {/* SECURED CHECKOUT SUCCESS DIALOG */}
                      <AnimatePresence>
                        {showCheckoutSuccess && (
                          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-60 flex items-center justify-center p-4 text-right" dir="rtl">
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.92 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.92 }}
                              className="bg-[#0D0D11] border border-[#1a1a24] rounded-3xl p-6 max-w-xs w-full text-center space-y-4 shadow-2xl"
                            >
                              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                                <Check className="w-7 h-7" />
                              </div>
                              
                              <div className="space-y-1.5 text-center">
                                <h4 className="text-base font-black text-white">הרכישה בוצעה בהצלחה! 🎉</h4>
                                <p className="text-[11px] text-zinc-400 leading-relaxed">
                                  קבלה מפורטת, מספר מעקב ופרטי משלוח נשלחו ישירות למייל שלך. המשלוח יגיע אליך תוך 3 ימי עסקים.
                                </p>
                              </div>

                              <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-900 text-[10px] text-zinc-400 flex items-center justify-between font-mono font-bold">
                                <span>אימייל לפרטים:</span>
                                <span>{email || "ספורטאי פרימיום"}</span>
                              </div>

                              <button
                                id="btn-checkout-done"
                                onClick={() => {
                                  setShowCheckoutSuccess(false);
                                }}
                                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/10 cursor-pointer transition-all active:scale-95"
                              >
                                המשך קניות באפליקציה ושמירת כושר
                              </button>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>

                      {/* SHOPPING CART OVERLAY DRAWER */}
                      <AnimatePresence>
                        {isCartOpen && (
                          <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-55 flex justify-end animate-fadeIn" style={{ animationDuration: '200ms' }}>
                            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsCartOpen(false)} />
                            <motion.div 
                              initial={{ x: "100%" }}
                              animate={{ x: 0 }}
                              exit={{ x: "100%" }}
                              transition={{ type: "spring", damping: 25, stiffness: 280 }}
                              className="w-full max-w-sm bg-[#09090C] border-r border-[#15151A] h-full shadow-2xl flex flex-col p-5 text-right relative z-10"
                            >
                              {/* Cart Header */}
                              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                                <div className="flex items-center gap-2">
                                  <ShoppingCart className="w-5 h-5 text-[#007BFF]" />
                                  <h4 className="text-base font-black text-white">סל הקניות שלי</h4>
                                </div>
                                <button 
                                  onClick={() => setIsCartOpen(false)}
                                  className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer text-xs"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>

                              {/* Cart items list */}
                              <div className="flex-1 overflow-y-auto space-y-4 pr-1 mt-4">
                                {cart.length === 0 ? (
                                  <div className="flex flex-col items-center justify-center h-64 text-center space-y-3.5">
                                    <span className="text-3xl">🛒</span>
                                    <div>
                                      <p className="font-bold text-white text-sm">סל הקניות שלך ריק</p>
                                      <p className="text-[11px] text-zinc-500 mt-1 max-w-[180px]">מוזמן להתרשם מתכשירי הפרימיום והציוד ולשפר את השיקום שלך!</p>
                                    </div>
                                    <button 
                                      onClick={() => setIsCartOpen(false)}
                                      className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-bold rounded-lg border border-zinc-800 cursor-pointer"
                                    >
                                      המשך לקנות
                                    </button>
                                  </div>
                                ) : (
                                  cart.map((item) => (
                                    <div 
                                      key={item.id} 
                                      className="flex items-center justify-between gap-3 p-2.5 bg-zinc-950/60 border border-zinc-900 rounded-xl text-right"
                                      dir="rtl"
                                    >
                                      <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        referrerPolicy="no-referrer"
                                        className="w-12 h-12 object-cover rounded-lg bg-black/50 shrink-0" 
                                      />
                                      <div className="flex-1 min-w-0 text-right">
                                        <p className="text-[10.5px] font-black text-white leading-normal truncate">{item.title}</p>
                                        <p className="text-[10px] text-[#007BFF] font-mono font-bold mt-0.5">{item.price}</p>
                                      </div>

                                      {/* Quantity Adjusters */}
                                      <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-1.5 py-1 rounded-lg">
                                        <button 
                                          onClick={() => handleQuantityChange(item.id, -1)}
                                          className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                                        >
                                          <Minus className="w-3 h-3" />
                                        </button>
                                        <span className="text-[11px] font-bold text-white font-mono px-0.5">{item.quantity}</span>
                                        <button 
                                          onClick={() => handleQuantityChange(item.id, 1)}
                                          className="p-1 text-zinc-400 hover:text-white cursor-pointer"
                                        >
                                          <Plus className="w-3 h-3" />
                                        </button>
                                      </div>

                                      {/* Delete item button */}
                                      <button 
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="p-1.5 text-zinc-500 hover:text-red-500 cursor-pointer transition"
                                        title="הסר מהסל"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  ))
                                )}
                              </div>

                              {/* Cashier / checkout summation zone */}
                              {cart.length > 0 && (
                                <div className="border-t border-zinc-900 pt-4 mt-auto space-y-4 text-right" dir="rtl">
                                  <div className="space-y-1.5 text-xs text-zinc-450 font-sans">
                                    <div className="flex justify-between items-center text-[11px] text-zinc-400">
                                      <span>שווי מוצרים בסל:</span>
                                      <span className="font-mono font-bold text-white">
                                        ₪{cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity), 0)}
                                      </span>
                                    </div>
                                    <div className="flex justify-between items-center text-[11px] text-zinc-400">
                                      <span>מס ערך מוסף (18% מע"מ כלול):</span>
                                      <span className="text-zinc-500">פירוט בקבלה במייל</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-zinc-900 text-sm font-black text-white">
                                      <span>סך הכל עבור לתשלום:</span>
                                      <span className="font-mono text-[#007BFF] text-base">
                                        ₪{cart.reduce((sum, item) => sum + (parseInt(item.price.replace(/[^\d]/g, ''), 10) * item.quantity), 0)}
                                      </span>
                                    </div>
                                  </div>

                                  {/* Fast secured checkout buttons */}
                                  <div className="space-y-1.5">
                                    <button
                                      id="btn-cart-checkout"
                                      onClick={() => {
                                        setIsCartOpen(false);
                                        setCheckoutStep('selection');
                                        setSelectedPaymentMethod(null);
                                      }}
                                      className="w-full py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-xl text-xs font-bold shadow-[0_4px_15px_rgba(0,123,255,0.3)] transition-all cursor-pointer flex items-center justify-center gap-1.5 hover:scale-102"
                                    >
                                      <span>💳 מעבר לתשלום (עבור לבחירת אמצעי תשלום)</span>
                                    </button>
                                    <p className="text-[10px] text-zinc-500 text-center leading-normal mt-1">🔒 הצפנת SSL מאובטחת במחמיר ביותר כנגד תקני PCI-DSS</p>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>

                      {/* SECURED CHECKOUT SUCCESS DIALOG */}
                      <AnimatePresence>
                        {showCheckoutSuccess && (
                          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-60 flex items-center justify-center p-4 text-right" dir="rtl">
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.92 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.92 }}
                              className="bg-[#0D0D11] border border-[#1a1a24] rounded-3xl p-6 max-w-xs w-full text-center space-y-4 shadow-2xl"
                            >
                              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                                <Check className="w-7 h-7" />
                              </div>
                              
                              <div className="space-y-1.5 text-center">
                                <h4 className="text-base font-black text-white">הרכישה בוצעה בהצלחה! 🎉</h4>
                                <p className="text-[11px] text-zinc-400 leading-relaxed">
                                  קבלה מפורטת, מספר מעקב ופרטי משלוח נשלחו ישירות למייל שלך. המשלוח יגיע אליך תוך 3 ימי עסקים.
                                </p>
                              </div>

                              <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-900 text-[10px] text-zinc-400 flex items-center justify-between font-mono font-bold">
                                <span>אימייל לפרטים:</span>
                                <span>{email || "ספורטאי פרימיום"}</span>
                              </div>

                              <button
                                onClick={() => {
                                  setCart([]);
                                  setShowCheckoutSuccess(false);
                                }}
                                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-emerald-600/10 cursor-pointer transition-all active:scale-95"
                              >
                                המשך קניות באפליקציה ושמירת כושר
                              </button>
                            </motion.div>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 1491,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "bg-black/95 border-t border-[#1a1a1a] px-3 py-2 grid grid-cols-4 items-center justify-center select-none z-20", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setCurrentTab(BottomTab.HOME),
                      className: `flex flex-col items-center justify-center gap-1.5 py-1.5 transition cursor-pointer ${currentTab === BottomTab.HOME ? "text-[#007BFF] font-bold" : "text-zinc-500 hover:text-zinc-300"}`,
                      children: [
                        /* @__PURE__ */ jsxDEV(Activity, { className: "w-4 h-4" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2855,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px]", children: "מסך בית" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2856,
                          columnNumber: 23
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2849,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => {
                        const name = fullName.trim() || "ספורטאי";
                        const msg = `שלום, שמי ${name}, הגעתי דרך האפליקציה שלכם Recovio Academy. אני מעוניין לקבוע תור לקליניקה.`;
                        window.open(`https://wa.me/972587858708?text=${encodeURIComponent(msg)}`, "_blank");
                      },
                      className: "flex flex-col items-center justify-center gap-1.5 py-1.5 text-zinc-500 hover:text-[#007BFF] transition cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 text-zinc-500 hover:text-[#007BFF]" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2867,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px]", children: "הקליניקה" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2868,
                          columnNumber: 23
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2859,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setCurrentTab(BottomTab.SHOP),
                      className: `flex flex-col items-center justify-center gap-1.5 py-1.5 transition cursor-pointer ${currentTab === BottomTab.SHOP ? "text-[#007BFF] font-bold" : "text-zinc-500 hover:text-zinc-300"}`,
                      children: [
                        /* @__PURE__ */ jsxDEV(ShoppingBag, { className: "w-4 h-4" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2877,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px]", children: "החנות" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2878,
                          columnNumber: 23
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2871,
                      columnNumber: 21
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => triggerPaywall("צ'אט תמיכה VIP"),
                      className: "flex flex-col items-center justify-center gap-1.5 py-1.5 text-zinc-500 hover:text-zinc-300 transition cursor-pointer",
                      children: [
                        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxDEV(MessageSquare, { className: "w-4 h-4 text-[#007BFF]" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2886,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ jsxDEV("span", { className: "absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full animate-ping" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2887,
                            columnNumber: 25
                          }, this)
                        ] }, void 0, true, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2885,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9px]", children: "צ'אט תמיכה [VIP]" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2889,
                          columnNumber: 23
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2881,
                      columnNumber: 21
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 2848,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV(AnimatePresence, { children: bjjToast && /* @__PURE__ */ jsxDEV(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 15, scale: 0.95 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, y: 10, scale: 0.95 },
                    transition: { duration: 0.2 },
                    className: "absolute bottom-16 left-3 right-3 z-50 bg-[#007BFF] border border-[#00c6ff]/40 text-white p-3 rounded-xl shadow-[0_10px_30px_rgba(0,123,255,0.35)] flex items-start gap-2.5 text-right font-sans",
                    style: { direction: "rtl" },
                    children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-sm shrink-0", children: "⚠️" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2904,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex-1 text-[11px] font-black leading-relaxed", children: bjjToast }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2905,
                        columnNumber: 25
                      }, this),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => setBjjToast(null),
                          className: "text-white hover:text-white/80 transition-colors p-0.5",
                          children: /* @__PURE__ */ jsxDEV(X, { className: "w-3.5 h-3.5" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 2912,
                            columnNumber: 27
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 2908,
                          columnNumber: 25
                        },
                        this
                      )
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2896,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 2894,
                  columnNumber: 19
                }, this)
              ]
            },
            "screen-main-app",
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 1481,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 790,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 789,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 770,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 632,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AnimatePresence, { children: [
      selectedExercise && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4",
          children: /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { scale: 0.95 },
              animate: { scale: 1 },
              exit: { scale: 0.95 },
              className: "bg-[#050505] border border-[#1a1a1a] w-full max-w-md rounded-2xl p-6 text-right relative shadow-2xl",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setSelectedExercise(null),
                    className: "absolute top-4 left-4 p-2 rounded-lg bg-[#111111] hover:bg-[#1c1c1c] border border-[#1a1a1a] transition text-zinc-400 cursor-pointer",
                    children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2949,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2945,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-[#007BFF]/10 border border-[#007BFF]/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-5 h-5 text-[#007BFF]" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2954,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2953,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-500 font-bold", children: [
                      "מדריך תרגילים חופשי - ",
                      SPORT_INFO[selectedSport].name
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2957,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold text-white mt-0.5", children: selectedExercise.name }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2958,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2956,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 2952,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-xs leading-relaxed text-zinc-300", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "p-3 bg-black/60 rounded-xl border border-[#1a1a1a]", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-zinc-400 block mb-1 font-sans", children: "מטרה וביקוש תנועתי:" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2964,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-zinc-300", children: selectedExercise.description }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2965,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2963,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center p-3 bg-gradient-to-br from-[#111] to-[#050505] rounded-xl border border-[#1a1a1a] text-xs", children: [
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500 block", children: "מחזור עצימות:" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2970,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-white", children: selectedExercise.duration }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2971,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2969,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-500 block", children: "רמת קושי:" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2974,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-[#007BFF]", children: selectedExercise.difficulty }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 2975,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2973,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 2968,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 2962,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex gap-3", children: [
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setSelectedExercise(null),
                      className: "flex-1 py-2.5 text-xs font-bold bg-[#007BFF] hover:bg-[#0066DD] text-white rounded-xl text-center cursor-pointer shadow-md shadow-[#007BFF]/10",
                      children: "התחל תרגיל במגרש"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2981,
                      columnNumber: 17
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV(
                    "button",
                    {
                      onClick: () => setSelectedExercise(null),
                      className: "px-4 py-2.5 text-xs font-bold bg-[#111111] hover:bg-[#1a1a1a] text-zinc-300 rounded-xl border border-[#1a1a1a] text-center cursor-pointer",
                      children: "סגור"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 2987,
                      columnNumber: 17
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 2980,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 2938,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 2932,
          columnNumber: 11
        },
        this
      ),
      selectedInjury && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4",
          children: /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { scale: 0.95 },
              animate: { scale: 1 },
              exit: { scale: 0.95 },
              className: "bg-[#050505] border border-[#1a1a1a] w-full max-w-lg rounded-2xl p-6 text-right relative shadow-2xl",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setSelectedInjury(null),
                    className: "absolute top-4 left-4 p-2 rounded-lg bg-[#111111] hover:bg-[#1a1a1a] border border-[#1a1a1a] transition text-zinc-400 cursor-pointer",
                    children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3017,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3013,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2.5 mb-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Heart, { className: "w-5 h-5 text-rose-500 animate-pulse" }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3022,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3021,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-500 uppercase font-black", children: "פרוטוקול עזרה ועמיחת כאב" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3025,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("h4", { className: "text-sm font-bold text-white mt-0.5", children: selectedInjury.title }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3026,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3024,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3020,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-xs leading-relaxed text-zinc-300", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-rose-400 bg-rose-950/10 p-2.5 rounded-lg border border-rose-950/30 text-[11px]", children: [
                    /* @__PURE__ */ jsxDEV("strong", { children: "סימפטומים מובילים:" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3032,
                      columnNumber: 19
                    }, this),
                    " ",
                    selectedInjury.symptoms
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3031,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-right", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-zinc-400 block font-sans", children: "צעדי שיקום אקטיביים:" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3036,
                      columnNumber: 19
                    }, this),
                    selectedInjury.steps.map((step, idx) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 bg-black/60 p-2.5 rounded-lg border border-[#1a1a1a]", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "w-5 h-5 rounded-full bg-[#007BFF]/10 border border-[#007BFF]/30 text-[#007BFF] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5", children: idx + 1 }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3039,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { children: step }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3042,
                        columnNumber: 23
                      }, this)
                    ] }, idx, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3038,
                      columnNumber: 21
                    }, this))
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3035,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3030,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex justify-end gap-3", children: /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setSelectedInjury(null),
                    className: "px-6 py-2.5 text-xs font-bold bg-[#111111] hover:bg-[#1a1a1a] text-zinc-300 rounded-xl border border-[#1a1a1a] text-center cursor-pointer",
                    children: "הבנתי, סגור"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3049,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3048,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 3006,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 3e3,
          columnNumber: 11
        },
        this
      ),
      showBjjPaywall && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-4",
          children: /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { scale: 0.95, y: 20 },
              animate: { scale: 1, y: 0 },
              exit: { scale: 0.95, y: 20 },
              className: "bg-zinc-950 border border-zinc-900/85 w-full max-w-md rounded-2xl p-6 text-center relative overflow-hidden shadow-2xl font-sans",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#007BFF]/15 rounded-full blur-3xl pointer-events-none animate-pulse" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3076,
                  columnNumber: 15
                }, this),
                !isProcessingPayment && /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => {
                      setShowBjjPaywall(false);
                      setIsProcessingPayment(null);
                    },
                    className: "absolute top-4 left-4 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 transition text-zinc-400 cursor-pointer",
                    children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3087,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3080,
                    columnNumber: 17
                  },
                  this
                ),
                isProcessingPayment ? (
                  /* Payment Processing Spinner Screen */
                  /* @__PURE__ */ jsxDEV("div", { className: "py-8 space-y-6 flex flex-col items-center justify-center min-h-[300px]", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-full border-4 border-[#007BFF]/25 border-t-[#007BFF] animate-spin" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3094,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 text-center text-right pr-2", children: [
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-sm font-black text-white text-center", children: "מעבד תשלום מאובטח..." }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3096,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-400 font-sans leading-normal text-center", children: isProcessingPayment === "googlepay" ? "מתחבר ל-Google Pay ומאמת כרטיס אשראי קבוע..." : "מעביר בקשת תשלום מאובטחת לאפליקציית Bit בטלפון האישי שלך..." }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3097,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-655 font-mono block text-center", children: "SSL Encryption Protected • Recovio Secure Gate" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3102,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3095,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3093,
                    columnNumber: 17
                  }, this)
                ) : bjjIsPremium ? (
                  /* Payment Success Screen */
                  /* @__PURE__ */ jsxDEV("div", { className: "py-6 space-y-5 text-center min-h-[300px] flex flex-col justify-between", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 my-auto", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-16 rounded-full bg-emerald-950/40 border-2 border-emerald-500 flex items-center justify-center mx-auto text-3xl animate-bounce shadow-lg shadow-emerald-500/10 text-emerald-400 font-extrabold pb-1", children: "✓" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3109,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black text-emerald-400", children: "החברות שודרגה בהצלחה! 🏆" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3113,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-zinc-300 leading-relaxed font-medium", children: "רכשת גישה מלאה ל-Recovio Academy. כל הסרטונים, פרוטוקולי השיקום, והמבדקים הקליניים של תום פתוחים כעת באופן חופשי!" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3114,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3112,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3108,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV(
                      "button",
                      {
                        onClick: () => {
                          setShowBjjPaywall(false);
                        },
                        className: "w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 font-extrabold text-xs rounded-xl text-white tracking-wide transition shadow-lg shadow-emerald-500/10 text-center cursor-pointer",
                        children: "🚀 התחל להתאמן בגרסת הפרימיום עכשיו!"
                      },
                      void 0,
                      false,
                      {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3120,
                        columnNumber: 19
                      },
                      this
                    )
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3107,
                    columnNumber: 17
                  }, this)
                ) : (
                  /* Standard Paywall Interface Screen */
                  /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-tr from-[#007BFF] to-violet-600 flex items-center justify-center mx-auto text-white shadow-lg shadow-[#007BFF]/15", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-5 h-5 animate-pulse" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3133,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3132,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-1", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-[#007BFF] font-black uppercase tracking-wider font-mono", children: "RECOVIO ACADEMY PREMIUM" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3137,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-black text-white leading-snug", children: "חומת תשלום קלינית" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3138,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3136,
                      columnNumber: 19
                    }, this),
                    bjjPaywallFeatureName && /* @__PURE__ */ jsxDEV("div", { className: "bg-zinc-900/60 border border-zinc-900 p-2.5 rounded-xl text-right", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-[9px] text-zinc-500 font-bold block", children: "התוכן שברצונך לפתוח:" }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3143,
                        columnNumber: 23
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-black text-amber-400 mt-0.5 block", children: bjjPaywallFeatureName }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3144,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3142,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-br from-[#120a05] to-[#0c0502] border border-amber-500/20 p-4 rounded-xl text-right", children: /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-amber-250 leading-relaxed font-sans font-extrabold text-center", children: "רוצה למנוע את הפציעה הבאה? פתח גישה מלאה לכל התוכניות, הסרטונים ומבחני הכשירות של Recovio Academy." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3149,
                      columnNumber: 21
                    }, this) }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3148,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-2 pr-1.5 text-right py-1", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 text-xs", children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 shrink-0 mt-0.5", children: "✔️" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3156,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-300 font-medium", children: "פתיחת כל 5 תרגילי ה-BJJ המוזהבים לסימטריה ומניעת פציעות." }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3157,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3155,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 text-xs font-sans", children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 shrink-0 mt-0.5", children: "✔️" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3160,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-300 font-medium", children: "צפייה בנגן סרטון האימון הרציף לשימוש מיושר מול המזרנים." }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3161,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3159,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 text-xs font-sans", children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "text-emerald-400 shrink-0 mt-0.5", children: "✔️" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3164,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-300 font-medium", children: "הגשת סרטוני מבדק שבועיים תחת העלאת קבצים לבדיקת תום (פיזיותרפיסט מומחה)." }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3165,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3163,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3154,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "bg-zinc-900/40 border border-[#1a1a20] p-3 rounded-xl flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                        /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-white block font-sans", children: "חברות חודשית קבועה" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3171,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[9.5px] text-zinc-500", children: "ניתן לביטול ללא כל התחייבות" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3172,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3170,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("span", { className: "font-extrabold text-base text-[#007BFF] font-mono", children: [
                        "₪49 ",
                        /* @__PURE__ */ jsxDEV("span", { className: "text-[10.5px] text-zinc-500 font-normal font-sans", children: "/חודש" }, void 0, false, {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3174,
                          columnNumber: 93
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3174,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3169,
                      columnNumber: 19
                    }, this),
                    bjjIsOffline && /* @__PURE__ */ jsxDEV("div", { className: "bg-red-950/30 border border-red-500/20 p-3 rounded-xl text-center animate-fadeIn", children: [
                      /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-red-300 font-extrabold leading-normal text-center", children: "💳 כדי להשלים את הרכישה, יש להתחבר מחדש לאינטרנט." }, void 0, false, {
                        fileName: "/app/applet/src/App.tsx",
                        lineNumber: 3177,
                        columnNumber: 23
                      }, this)
                    ] }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3176,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { className: "space-y-2.5 pt-2", children: [
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => {
                            if (bjjIsOffline) {
                              triggerBjjToast("💳 כדי להשלים את הרכישה, יש להתחבר מחדש לאינטרנט.");
                              return;
                            }
                            setIsProcessingPayment("googlepay");
                            setTimeout(() => {
                              setBjjIsPremium(true);
                              setIsProcessingPayment(null);
                            }, 1800);
                          },
                          className: `w-full py-3 bg-black text-white rounded-xl font-extrabold text-xs shadow-md border ${bjjIsOffline ? "border-red-900/30 opacity-50 cursor-not-allowed" : "border-zinc-900 hover:bg-neutral-950 hover:scale-[1.01] active:translate-y-0.5"} flex items-center justify-center gap-2 transition-all cursor-pointer font-sans`,
                          children: /* @__PURE__ */ jsxDEV("span", { children: "💳 תשלום מהיר באמצעות Google Pay" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 3190,
                            columnNumber: 23
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3180,
                          columnNumber: 21
                        },
                        this
                      ),
                      /* @__PURE__ */ jsxDEV(
                        "button",
                        {
                          onClick: () => {
                            if (bjjIsOffline) {
                              triggerBjjToast("💳 כדי להשלים את הרכישה, יש להתחבר מחדש לאינטרנט.");
                              return;
                            }
                            setIsProcessingPayment("bit");
                            setTimeout(() => {
                              setBjjIsPremium(true);
                              setIsProcessingPayment(null);
                            }, 1800);
                          },
                          className: `w-full py-3 text-white rounded-xl font-extrabold text-xs shadow-md ${bjjIsOffline ? "bg-[#00D0C5]/40 opacity-50 cursor-not-allowed" : "bg-[#00D0C5] hover:bg-[#00b0a7] hover:scale-[1.01] active:translate-y-0.5"} flex items-center justify-center gap-2 transition-all cursor-pointer font-sans`,
                          children: /* @__PURE__ */ jsxDEV("span", { children: "📱 תשלום מאובטח באמצעות Bit" }, void 0, false, {
                            fileName: "/app/applet/src/App.tsx",
                            lineNumber: 3204,
                            columnNumber: 23
                          }, this)
                        },
                        void 0,
                        false,
                        {
                          fileName: "/app/applet/src/App.tsx",
                          lineNumber: 3194,
                          columnNumber: 21
                        },
                        this
                      )
                    ] }, void 0, true, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3178,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3131,
                    columnNumber: 17
                  }, this)
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 3068,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 3062,
          columnNumber: 11
        },
        this
      ),
      paywallOpen && /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 bg-black/92 backdrop-blur-md flex items-center justify-center z-50 p-4",
          children: /* @__PURE__ */ jsxDEV(
            motion.div,
            {
              initial: { scale: 0.95, y: 15 },
              animate: { scale: 1, y: 0 },
              exit: { scale: 0.95, y: 15 },
              className: "bg-black border border-blue-950/40 w-full max-w-md rounded-2xl p-6 text-center relative overflow-hidden shadow-2xl",
              style: { direction: "rtl" },
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#007BFF]/10 rounded-full blur-3xl pointer-events-none" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3229,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => setPaywallOpen(false),
                    className: "absolute top-4 left-4 p-2 rounded-lg bg-[#111111] hover:bg-[#1c1c1c] border border-[#1a1a1a] transition text-zinc-400 cursor-pointer",
                    children: /* @__PURE__ */ jsxDEV(X, { className: "w-4 h-4" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3235,
                      columnNumber: 17
                    }, this)
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3231,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#007BFF] to-indigo-600 flex items-center justify-center mx-auto mb-4 text-white shadow-lg shadow-[#007BFF]/20", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-6 h-6 animate-pulse" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3239,
                  columnNumber: 17
                }, this) }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3238,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-[#007BFF] font-extrabold uppercase tracking-widest font-mono", children: "חברות Recovio VIP Premium" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3242,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-base font-black text-white mt-1", children: "פתח את כל התרגילים והפרוטוקולים!" }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3243,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-blue-300/80 bg-blue-950/20 p-2.5 rounded-xl border border-blue-900/20 mt-3 mx-4 leading-medium text-center", children: [
                  "ניסית לגשת אל: ",
                  /* @__PURE__ */ jsxDEV("strong", { className: "text-white", children: [
                    '"',
                    paywallFeatureName,
                    '"'
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3246,
                    columnNumber: 32
                  }, this),
                  " אשר מוגן לחברי VIP בלבד."
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3245,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "my-6 space-y-3 pr-2 text-right", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3251,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-300", children: "גישה מלאה ל-50 תרגילי עילית נוספים לכל 4 ענפי הספורט." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3252,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3250,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3255,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-300", children: "צ'אט תמיכה קליני-פיזיותרפי VIP ישיר עם דוקטור פיזיותרפיה." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3256,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3254,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3259,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-300", children: "פרוטוקולים מפורטים ומחייבי מעקב לכל סוגי פציעות הסחיטה." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3260,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3258,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsxDEV(Check, { className: "w-4 h-4 text-[#007BFF] shrink-0 mt-0.5" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3263,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-zinc-300", children: "העלאת סרטונים קבועה למבחני מעבר שלבים (לפידבק ביומכני אישי)." }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3264,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3262,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3249,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV("div", { className: "bg-[#111111] border border-[#1a1a1a] p-4 rounded-xl flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsxDEV("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs font-bold text-white block", children: "חברות חודשית קבועה" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3270,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] text-zinc-500", children: "ניתן לביטול בכל עת" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3271,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3269,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { className: "font-extrabold text-lg text-[#007BFF] font-mono", children: [
                    "₪49 ",
                    /* @__PURE__ */ jsxDEV("span", { className: "text-xs text-zinc-500 font-normal", children: "/חודש" }, void 0, false, {
                      fileName: "/app/applet/src/App.tsx",
                      lineNumber: 3273,
                      columnNumber: 87
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3273,
                    columnNumber: 17
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3268,
                  columnNumber: 15
                }, this),
                bjjIsOffline && /* @__PURE__ */ jsxDEV("div", { className: "bg-red-950/30 border border-red-500/20 p-3 rounded-xl text-center mb-4 animate-fadeIn", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-red-300 font-extrabold leading-normal text-center", children: "💳 כדי להשלים את הרכישה, יש להתחבר מחדש לאינטרנט." }, void 0, false, {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3274,
                    columnNumber: 23
                  }, this)
                ] }, void 0, false, {
                  fileName: "/app/applet/src/App.tsx",
                  lineNumber: 3273,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    onClick: () => {
                      if (bjjIsOffline) {
                        triggerBjjToast("💳 כדי להשלים את הרכישה, יש להתחבר מחדש לאינטרנט.");
                        return;
                      }
                      setPaywallOpen(false);
                    },
                    className: `w-full py-3 text-white rounded-xl font-extrabold text-xs shadow-md ${bjjIsOffline ? "bg-red-950/40 border border-red-500/30 opacity-50 cursor-not-allowed" : "bg-[#007BFF] hover:bg-[#0066DD] active:bg-[#0055BB] hover:scale-[1.01] active:translate-y-0.5"} transition-all text-center cursor-pointer`,
                    children: "הצטרף לעלית VIP עכשיו"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/applet/src/App.tsx",
                    lineNumber: 3276,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "/app/applet/src/App.tsx",
              lineNumber: 3221,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 3215,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 2928,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { className: "mt-auto border-t border-[#1a1a1a] bg-black py-4 px-8 text-xs text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxDEV("span", { children: "© 2026 אקדמיית עלית לביצועים ושיקום אתלטי. כל הזכויות שמורות." }, void 0, false, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 3290,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "w-2 h-2 bg-emerald-500 rounded-full" }, void 0, false, {
            fileName: "/app/applet/src/App.tsx",
            lineNumber: 3292,
            columnNumber: 53
          }, this),
          " סימולציה מבוססת-מצב מקומי מושלמת"
        ] }, void 0, true, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 3292,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("span", { children: "עיריית ראשון לציון אקדמית תקינה" }, void 0, false, {
          fileName: "/app/applet/src/App.tsx",
          lineNumber: 3293,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/app/applet/src/App.tsx",
        lineNumber: 3291,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/applet/src/App.tsx",
      lineNumber: 3289,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/applet/src/App.tsx",
    lineNumber: 603,
    columnNumber: 5
  }, this);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDaGFuZ2VFdmVudCwgRHJhZ0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHtcbiAgSGVhcnQsXG4gIEFjdGl2aXR5LFxuICBMb2NrLFxuICBVbmxvY2ssXG4gIENoZWNrLFxuICBBbGVydFRyaWFuZ2xlLFxuICBDaGV2cm9uUmlnaHQsXG4gIEJvb2tPcGVuLFxuICBTaG9wcGluZ0JhZyxcbiAgTWVzc2FnZVNxdWFyZSxcbiAgUGhvbmUsXG4gIE1hcFBpbixcbiAgQ2xvY2ssXG4gIFNwYXJrbGVzLFxuICBVcGxvYWRDbG91ZCxcbiAgWCxcbiAgQXdhcmQsXG4gIFNoaWVsZEFsZXJ0LFxuICBGaWxlVGV4dCxcbiAgRGF0YWJhc2UsXG4gIFNtYXJ0cGhvbmUsXG4gIFNoYXJlMixcbiAgRmluZ2VycHJpbnQsXG4gIENhbWVyYVxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbXBvcnQgeyBBcHBTY3JlZW4sIEJvdHRvbVRhYiwgU3BvcnRUeXBlLCBPbmJvYXJkaW5nR29hbCwgUGFpbkxldmVsIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTUE9SVF9JTkZPLCBFWEVSQ0lTRVMsIElOSlVSWV9QUk9UT0NPTFMsIFNIT1BfSVRFTVMsIENMSU5JQ19JTkZPLCBFeGVyY2lzZUl0ZW0sIEluanVyeUl0ZW0gfSBmcm9tICcuL2RhdGEvc3BvcnREYXRhJztcbmltcG9ydCBBbmRyb2lkRnJhbWUgZnJvbSAnLi9jb21wb25lbnRzL0FuZHJvaWRGcmFtZSc7XG5pbXBvcnQgQ29kZUV4cGxvcmVyIGZyb20gJy4vY29tcG9uZW50cy9Db2RlRXhwbG9yZXInO1xuaW1wb3J0IEFuZHJvaWRFeG9QbGF5ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FuZHJvaWRFeG9QbGF5ZXInO1xuaW1wb3J0IEFuaW1hdGVkU3BsYXNoU2NyZWVuIGZyb20gJy4vY29tcG9uZW50cy9BbmltYXRlZFNwbGFzaFNjcmVlbic7XG5pbXBvcnQgeyBCampSZWhhYk1hdHJpeCB9IGZyb20gJy4vY29tcG9uZW50cy9CampSZWhhYk1hdHJpeCc7XG5cbmNvbnN0IEJKSl9MRVZFTFNfREFUQSA9IFtcbiAge1xuICAgIGxldmVsOiAxLFxuICAgIG5hbWU6IFwi2LHXnteUIDE6INeR16HXmdehINeV15nXpteZ15HXldeqXCIsXG4gICAgdGFnbGluZTogXCLXntek16jXp9eZ150g15nXpteZ15HXmdedINeV16nXl9eo15XXqCDXnNeX16Ug16LXnteV15Mg15TXqdeT16jXlCDXnNeU16rXnteV15PXk9eV16og16LXnSDXoteV157XodeZ150g16jXkNep15XXoNeZ15nXnS5cIixcbiAgICBvdmVydmlld1ZpZGVvVXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1NfOG4wbDZfYUlFXCIsXG4gICAgZXhlcmNpc2VzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICB0aXRsZTogXCLXnteq15nXl9eqINeT16fXldee16TXqNeh15nXlCDXnteV16rXoNeZ16ogKERlY29tcHJlc3Npb24pXCIsXG4gICAgICAgIGRlc2M6IFwi16DXmNeo15XXnCDXoteV157XoSDXk9eX15nXodeqINeU15fXldec15nXldeqINee15vXoNeZ16HXlCDXnNeS15DXqNeTINen16nXldeXINeV16nXl9eo15XXqCDXkteRINeq15fXqteV158uXCIsXG4gICAgICAgIHZpZGVvVXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1JrMEhxU0ZyNVU0XCIsXG4gICAgICAgIHZpZGVvSUQ6IFwiUmswSHFTRnI1VTRcIixcbiAgICAgICAgaXNGcmVlOiB0cnVlLFxuICAgICAgICBiYXNlUGFyYW1zOiB7XG4gICAgICAgICAgc2V0czogWzMsIDQsIDRdLFxuICAgICAgICAgIHJlcHM6IFtcIjQ1INep16DXmdeV16pcIiwgXCI2MCDXqdeg15nXldeqXCIsIFwiNzUg16nXoNeZ15XXqlwiXSxcbiAgICAgICAgICByZXN0OiBbXCI5MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI3NSDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIl0sXG4gICAgICAgICAgaW50ZW5zaXR5OiBbXCJSUEUgNSAtINen15wg15XXqNek15XXmVwiLCBcIlJQRSA2IC0g15TXl9eW16fXlCDXnteR15XXp9eo16pcIiwgXCJSUEUgNyAtINep15fXqNeV16gg16LXnteV16dcIl1cbiAgICAgICAgfSxcbiAgICAgICAgY3VlczogW1xuICAgICAgICAgIFwi16rXnNeZ15nXlCDXpNeh15nXkdeZ16og16nXnCDXlNeQ15LXnyDXotecINee16rXlyDXkNeVINee16DXlyDXmdec15Mg15HXkNeX15nXlteqINen15Ug16jXl9eRLlwiLFxuICAgICAgICAgIFwi15TXqNek15Ug15DXqiDXqdeo15nXqNeZINeU15LXkSwg16DXqdee15Ug16DXqdeZ157XldeqINeR15jXnyDXotee15XXp9eV16og15HXnNeR15MuXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIteb15nXldeV16Ug15DXmdeW15XXnteY16jXmSDXqtec16ot157XnteT15kg15zXpteV15XXkNeoIChOZWNrIEd1YXJkKVwiLFxuICAgICAgICBkZXNjOiBcIteZ15nXpteV15Eg16LXnteV15Mg15TXqdeT16jXlCDXlNem15XXldeQ16jXmSDXm9eg15LXkyDXkdeo15nXl9eZ150g15XXl9eg15nXp9eV16og15PXldeS157XqiDXkteZ15nXnNeV15jXmdefLlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC84dkJxR2Y0VmJUNFwiLFxuICAgICAgICB2aWRlb0lEOiBcIjh2QnFHZjRWYlQ0XCIsXG4gICAgICAgIGlzRnJlZTogZmFsc2UsXG4gICAgICAgIGJhc2VQYXJhbXM6IHtcbiAgICAgICAgICBzZXRzOiBbMywgMywgNF0sXG4gICAgICAgICAgcmVwczogW1wiMTUg16nXoNeZ15XXqlwiLCBcIjIwINep16DXmdeV16pcIiwgXCIyNSDXqdeg15nXldeqXCJdLFxuICAgICAgICAgIHJlc3Q6IFtcIjkwINep16DXmdeV16og157XoNeV15fXlFwiLCBcIjc1INep16DXmdeV16og157XoNeV15fXlFwiLCBcIjYwINep16DXmdeV16og157XoNeV15fXlFwiXSxcbiAgICAgICAgICBpbnRlbnNpdHk6IFtcIlJQRSA2IC0g157XqteXINen15xcIiwgXCJSUEUgNyAtINeb15XXlyDXkdeZ16DXldeg15lcIiwgXCJSUEUgOC41IC0g15vXldeXINee15nXqNeR15lcIl1cbiAgICAgICAgfSxcbiAgICAgICAgY3VlczogW1xuICAgICAgICAgIFwi15TXpNei15wg15vXldeXINen15HXldeiINeb16DXkteTINeb16TXldeqINeU15nXk9eZ15nXnSDXkdeX15zXpyDXp9eT157XmSwg15DXl9eV16jXmSDXldem15nXk9eZLlwiLFxuICAgICAgICAgIFwi16nXnteo15Ug16LXnCDXpteV15XXkNeoINeg15nXmdeY16jXnNeZINec15fXnNeV15jXmdefINec15zXkCDXqteg15XXoteqINeb15nXpNeV16MuXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiBcIteo15XXmNem15nXmdeqINeZ16jXm9eZ15nXnSDXkNen15jXmdeR15nXqiDXkdee16DXlyA5MC05MCAoOTAtOTAgSGlwIEZsb3cpXCIsXG4gICAgICAgIGRlc2M6IFwi15TXkteR16jXqiDXmNeV15XXl9eZINeq16DXldei15Qg16HXmdeR15XXkdeZ15nXnSDXp9eo15nXmNeZ15nXnSDXnNep150g15TXqteS15XXoNeg15XXqiDXnteR16jXmdeX15kg16jXktec15nXmdedINeV157XoteR16jXmSDXkteQ16jXky5cIixcbiAgICAgICAgdmlkZW9Vcmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvVjZIN0hjbEQ0MTBcIixcbiAgICAgICAgdmlkZW9JRDogXCJWNkg3SGNsRDQxMFwiLFxuICAgICAgICBpc0ZyZWU6IGZhbHNlLFxuICAgICAgICBiYXNlUGFyYW1zOiB7XG4gICAgICAgICAgc2V0czogWzMsIDMsIDRdLFxuICAgICAgICAgIHJlcHM6IFtcIjEwINeX15bXqNeV16og15zXpteTXCIsIFwiMTIg15fXlteo15XXqiDXnNem15NcIiwgXCIxNSDXl9eW16jXldeqINec16bXk1wiXSxcbiAgICAgICAgICByZXN0OiBbXCI5MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI3NSDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIl0sXG4gICAgICAgICAgaW50ZW5zaXR5OiBbXCJSUEUgNSAtINep15nXpNeV16gg15bXqNeZ157XlFwiLCBcIlJQRSA2IC0g15PXktepINen16bXlCDXmNeV15XXl1wiLCBcIlJQRSA3LjUgLSDXqdec15nXmNeUINeQ16fXmNeZ15HXmdeqXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGN1ZXM6IFtcbiAgICAgICAgICBcItep15HXlSDXotecINeU16jXptek15Qg15vXkNep16gg15TXkdeo15vXmdeZ150g15EtOTAg157Xotec15XXqiwg15HXptei15Ug157XoteR16gg15DXmdeY15kg157XpteTINec16bXky5cIixcbiAgICAgICAgICBcItep15DXpNeVINec15LXkSDXlten15XXoyDXm9eb15wg15TXoNeZ16rXnyDXnNec15Ag16rXnteZ15vXqiDXm9ek15XXqiDXmdeT15nXmdedINeR16jXptek15QuXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHRpdGxlOiBcIteX15nXlteV16cg16nXqNeZ16jXmSDXlNeY15nXkdeZ15DXnNeZ16EgKFRpYmlhbGlzIEdyb3VuZGluZylcIixcbiAgICAgICAgZGVzYzogXCLXkdeg15nXmdeqINep16jXmdeoINeR15XXnNedINeW16LXlteV16LXmdedINeR16fXk9ee16og15TXqdeV16cg15TXqteV157XmiDXkdeR16jXmiDXnteU15jXnNeV16og15XXnteb15XXqiDXnteW16jXnyDXp9ep15XXqi5cIixcbiAgICAgICAgdmlkZW9Vcmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTWJlOWZWcUU5MDBcIixcbiAgICAgICAgdmlkZW9JRDogXCJNYmU5ZlZxRTkwMFwiLFxuICAgICAgICBpc0ZyZWU6IGZhbHNlLFxuICAgICAgICBiYXNlUGFyYW1zOiB7XG4gICAgICAgICAgc2V0czogWzMsIDQsIDRdLFxuICAgICAgICAgIHJlcHM6IFtcIjE1INeX15bXqNeV16pcIiwgXCIyMCDXl9eW16jXldeqXCIsIFwiMjUg15fXlteo15XXqlwiXSxcbiAgICAgICAgICByZXN0OiBbXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI0NSDXqdeg15nXldeqINee16DXldeX15RcIl0sXG4gICAgICAgICAgaW50ZW5zaXR5OiBbXCJSUEUgNiAtINeb15nXldeV16Ug15DXl9eZ15NcIiwgXCJSUEUgNy41IC0g16nXqNeZ16TXlCDXntee15XXp9eT16pcIiwgXCJSUEUgOSAtINeg16TXlyDXoteV157XoSDXp9eZ16bXldeg15lcIl1cbiAgICAgICAgfSxcbiAgICAgICAgY3VlczogW1xuICAgICAgICAgIFwi15TXmdep16LXoNeVINei15wg16fXmdeoLCDXqNeS15zXmdeZ150g15nXqdeo15XXqiDXp9eT15nXnteULCDXldeU16jXnteVINeQ16og15DXpteR16LXldeqINeU16jXktec15nXmdedINee16LXnNeULlwiLFxuICAgICAgICAgIFwi15TXl9eW15nXp9eVINep16DXmdeZ15Qg157XnNeQ15Qg15HXm9eZ15XXldelINee16fXodeZ157XnNeZINeR15fXnNenINeU16LXnNeZ15XXny5cIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgdGl0bGU6IFwi16nXl9eo15XXqCDXldeU15fXnNen15Qg16nXnCDXkteZ15PXmSDXm9ejINeU15nXkyAoRmluZ2VyIFRlbmRvbiBHbGlkZSlcIixcbiAgICAgICAgZGVzYzogXCLXqdeZ16fXldedINeV157XoNeZ16LXqiDXqdeX15nXp9eUINeV15PXnNen15XXqiDXkdee16TXqNen15kg15DXpteR16LXldeqINeb16Mg15TXmdeTINep16DXkteo157XlSDXnteh15fXmdeY16og16nXqNeV15XXnNeZ150g15XXpteV15XXkNeo15XXoNeZ150g16TXodeZ15HXmdeqLlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9yVjU4UTRON3pPMFwiLFxuICAgICAgICB2aWRlb0lEOiBcInJWNThRNE43ek8wXCIsXG4gICAgICAgIGlzRnJlZTogZmFsc2UsXG4gICAgICAgIGJhc2VQYXJhbXM6IHtcbiAgICAgICAgICBzZXRzOiBbMywgMywgM10sXG4gICAgICAgICAgcmVwczogW1wiOCDXnteX15bXldeo15nXnVwiLCBcIjExINee15fXlteV16jXmdedXCIsIFwiMTUg157Xl9eW15XXqNeZ151cIl0sXG4gICAgICAgICAgcmVzdDogW1wiNjAg16nXoNeZ15XXqiDXnteg15XXl9eUXCIsIFwiNDUg16nXoNeZ15XXqiDXnteg15XXl9eUXCIsIFwiNDUg16nXoNeZ15XXqiDXnteg15XXl9eUXCJdLFxuICAgICAgICAgIGludGVuc2l0eTogW1wiUlBFIDUgLSDXkteZ15XXoSDXkteZ15PXmdedINen15xcIiwgXCJSUEUgNiAtINeU15fXnNen15Qg157XnNeQ15RcIiwgXCJSUEUgNyAtINen16bXkSDXnteU15nXqCDXldee15HXlden16hcIl1cbiAgICAgICAgfSxcbiAgICAgICAgY3VlczogW1xuICAgICAgICAgIFwi15HXpteiINeQ16og15fXntep16og157XoNeX15kg15TXkNem15HXoteV16o6INek16rXldeXLCDXmNeV16TXqCwg15fXpteZINeQ15LXqNeV16MsINeQ15LXqNeV16Mg157XnNeQLCDXldeQ15LXqNeV16Mg15XXqdeY15XXly5cIixcbiAgICAgICAgICBcIteR16bXoiDXkdem15XXqNeUINeo16bXmdek15Qg15XXkNeZ15jXmdeqINec157XpNeo16fXmSDXkteZ15PXmdedINee16nXldee16DXmdedLlwiXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsZXZlbDogMixcbiAgICBuYW1lOiBcIteo157XlCAyOiDXlNei15zXkNeqINei15XXntehINen15zXmdeg15lcIixcbiAgICB0YWdsaW5lOiBcItek16jXldeY15XXp9eV15wg16LXldee16Eg16fXnNeZ16DXmSDXnteX15XXqdeRINeU157Xkteo15Qg15DXqiDXlNep16jXmdeo15nXnSDXldeU16jXpteV16LXldeqINec16LXnteV15Mg15HXm9eV15cg15TXp9eo15EuXCIsXG4gICAgb3ZlcnZpZXdWaWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ZLUw3U0FucDY3b1wiLFxuICAgIGV4ZXJjaXNlczogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwi16nXmdeV15XXmSDXntep16fXnCDXl9eTLdeo15LXnNeZINeR16rXldeh16TXqiDXqNeV15jXpteZ15QgKFNpbmdsZSBMZWcgU3RhYmlsaXplcilcIixcbiAgICAgICAgZGVzYzogXCLXlNeS15HXqNeqINeZ16bXmdeR15XXqiDXntek16jXpyDXlNeR16jXmiDXqteX16og16LXkdeV15PXlCDXkNeh15nXnteY16jXmdeqINeV16LXnteZ15PXlCDXkdec15fXpteZINeU15jXnNeULlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9fOGI3OFItVzYxNFwiLFxuICAgICAgICB2aWRlb0lEOiBcIl84Yjc4Ui1XNjE0XCIsXG4gICAgICAgIGlzRnJlZTogdHJ1ZSxcbiAgICAgICAgYmFzZVBhcmFtczoge1xuICAgICAgICAgIHNldHM6IFszLCAzLCA0XSxcbiAgICAgICAgICByZXBzOiBbXCI4INeo15XXmNem15nXldeqINec16jXktecXCIsIFwiMTAg16jXldeY16bXmdeV16og15zXqNeS15xcIiwgXCIxMiDXqNeV15jXpteZ15XXqiDXnNeo15LXnFwiXSxcbiAgICAgICAgICByZXN0OiBbXCI5MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI3NSDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIl0sXG4gICAgICAgICAgaW50ZW5zaXR5OiBbXCJSUEUgNiAtINep15zXmdeY15Qg15HXp9eo16fXolwiLCBcIlJQRSA3LjUgLSDXqteg15XXoteUINeo16bXmdek15RcIiwgXCJSUEUgOC41IC0g16fXpteRINeQ16rXnNeY15kg157XlNeZ16hcIl1cbiAgICAgICAgfSxcbiAgICAgICAgY3VlczogW1xuICAgICAgICAgIFwi16LXnteT15Ug16LXnCDXqNeS15wg15DXl9eqLCDXkdeo15og157XoteYINeb16TXldek15QsINeV15HXptei15Ug16HXmdeR15XXkdeZ150g16nXnCDXpNec15Ig15TXkteV16Mg15TXotec15nXldefINeZ157Xmdeg15Qg15XXqdee15DXnNeULlwiLFxuICAgICAgICAgIFwi16nXnteo15Ug16LXnCDXpNeZ16fXqiDXlNeR16jXmiDXpNeV16DXlCDXp9eT15nXnteUINeV16jXptek16og15vXoyDXqNeS15wg15DXp9eY15nXkdeZ16og15HXp9eo16fXoi5cIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgdGl0bGU6IFwi15LXqdeoINem15XXldeQ16gg15DXl9eV16jXmSDXoNeq157XmiAoU3VwcG9ydGVkIE5lY2sgQnJpZGdlKVwiLFxuICAgICAgICBkZXNjOiBcIteR16DXmdeZ16og16LXnteZ15PXldeqINee16rXp9eT157XqiDXqdecINeW15XXp9ek15kg15TXpteV15XXkNeoINec157XoNeZ16LXqiDXpNeo15nXp9eV16og16LXp9eRINep15zXmdeY16og16jXkNepLlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8zeU44Z0gwa000TVwiLFxuICAgICAgICB2aWRlb0lEOiBcIjN5TjhnSDBrTTRNXCIsXG4gICAgICAgIGlzRnJlZTogZmFsc2UsXG4gICAgICAgIGJhc2VQYXJhbXM6IHtcbiAgICAgICAgICBzZXRzOiBbMywgMywgNF0sXG4gICAgICAgICAgcmVwczogW1wiMTAg15fXlteo15XXqiDXkNeZ15jXmdeV16pcIiwgXCIxMiDXl9eW16jXldeqINeQ15nXmNeZ15XXqlwiLCBcIjE1INeX15bXqNeV16og15DXmdeY15nXldeqXCJdLFxuICAgICAgICAgIHJlc3Q6IFtcIjkwINep16DXmdeV16og157XoNeV15fXlFwiLCBcIjc1INep16DXmdeV16og157XoNeV15fXlFwiLCBcIjYwINep16DXmdeV16og157XoNeV15fXlFwiXSxcbiAgICAgICAgICBpbnRlbnNpdHk6IFtcIlJQRSA3IC0g15TXl9eW16fXlCDXnteR15XXp9eo16pcIiwgXCJSUEUgOCAtINeb15XXlyDXodeY15jXmVwiLCBcIlJQRSA5IC0g16LXldee16Eg15PXmdeg157XmSDXnteZ16jXkdeZXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGN1ZXM6IFtcbiAgICAgICAgICBcItep15vXkdeVINei15wg15TXkteRLCDXlNeo15nXnteVINeQ16og15TXmdep15HXnyDXldeU16TXoteZ15zXlSDXnNeX16Ug16fXnCDXotecINeU16jXkNepINeq15XXmiDXqtee15nXm9eqINeb16TXldeqINeU15nXk9eZ15nXnSDXnNep16DXmSDXlNem15PXk9eZ150uXCIsXG4gICAgICAgICAgXCLXlNeq16fXk9ee15Ug15HXoteT15nXoNeV16og15XXotem16jXlSDXnteZ15Mg15HXm9ecINeq15fXldep16og16LXldeo16Mg16DXlden16nXlC5cIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6IFwi157Xm9eR16kg15nXqNeb15nXmdedINeR157XoNeXINeX16bXmS3XpNeo16TXqCAoQWRkdWN0b3IgQnV0dGVyZmx5IFByZXNzKVwiLFxuICAgICAgICBkZXNjOiBcIteX15nXlteV16cg157Xp9eo15HXmSDXlNeZ16jXmiDXldeo16bXldei15XXqiDXlNee16TXqdei15Qg15zXoteR15XXk9eUINeZ16LXmdec15Qg157XqteV15og15TXkteQ16jXkyDXldeY15XXldeXINee16TXqNenINee15XXktefLlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9sNTkyNDdSLWc5OFwiLFxuICAgICAgICB2aWRlb0lEOiBcImw1OTI0N1ItZzk4XCIsXG4gICAgICAgIGlzRnJlZTogZmFsc2UsXG4gICAgICAgIGJhc2VQYXJhbXM6IHtcbiAgICAgICAgICBzZXRzOiBbMywgNCwgNF0sXG4gICAgICAgICAgcmVwczogW1wiMTIg15zXl9eZ16bXldeqXCIsIFwiMTUg15zXl9eZ16bXldeqXCIsIFwiMjAg15zXl9eZ16bXldeqXCJdLFxuICAgICAgICAgIHJlc3Q6IFtcIjc1INep16DXmdeV16og157XoNeV15fXlFwiLCBcIjYwINep16DXmdeV16og157XoNeV15fXlFwiLCBcIjYwINep16DXmdeV16og157XoNeV15fXlFwiXSxcbiAgICAgICAgICBpbnRlbnNpdHk6IFtcIlJQRSA2IC0g15vXmdeV15XXpSDXqNeaXCIsIFwiUlBFIDcuNSAtINeU16rXoNeS15PXldeqINeb15XXl1wiLCBcIlJQRSA4LjUgLSDXm9eZ15XXldelINeQ16DXk9eV16jXoNehINen16nXlFwiXVxuICAgICAgICB9LFxuICAgICAgICBjdWVzOiBbXG4gICAgICAgICAgXCLXkdem16LXlSDXnNeX15nXpteUINeQ15nXlteV157XmNeo15nXqiDXnteg15XXlNec16og16nXnCDXlNeR16jXm9eZ15nXnSDXm9eg15LXkyDXm9eT15XXqCDXpNeZ15bXmdeVINeQ15Ug15DXkteo15XXpNeZINeU15nXk9eZ15nXnS5cIixcbiAgICAgICAgICBcIteU16fXpNeZ15PXlSDXotecINep157Xmdeo16og16DXqdeZ157XlCDXodeT15nXqNeUINec15DXldeo15og15vXnCDXltee158g15TXnNeX15nXpteULlwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXRsZTogXCLXlNeo157XldeqINei16fXkdeZ150g15HXmNeV15XXlyDXqteg15XXoteUINee15XXkteT15wgKERlZmljaXQgQ2FsZiBSYWlzZSlcIixcbiAgICAgICAgZGVzYzogXCLXmdeZ16bXldeRINeS15nXkyDXlNeQ15vXmdec16Eg15XXntek16jXpyDXlNen16jXodeV15wg15zXkdeZ15jXldecINek16bXmdei15XXqiDXoNen16Ig15XXlNeX15zXp9eUINee15TXmdeo15Qg16LXnCDXlNen16DXkdehLlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC81YjhyOFctbDMyZ1wiLFxuICAgICAgICB2aWRlb0lEOiBcIjViOHI4Vy1sMzJnXCIsXG4gICAgICAgIGlzRnJlZTogZmFsc2UsXG4gICAgICAgIGJhc2VQYXJhbXM6IHtcbiAgICAgICAgICBzZXRzOiBbMywgMywgNF0sXG4gICAgICAgICAgcmVwczogW1wiMTUg16LXnNeZ15XXqlwiLCBcIjIwINei15zXmdeV16pcIiwgXCIyNSDXotec15nXldeqXCJdLFxuICAgICAgICAgIHJlc3Q6IFtcIjkwINep16DXmdeV16og157XoNeV15fXlFwiLCBcIjc1INep16DXmdeV16og157XoNeV15fXlFwiLCBcIjYwINep16DXmdeV16og157XoNeV15fXlFwiXSxcbiAgICAgICAgICBpbnRlbnNpdHk6IFtcIlJQRSA2IC0g15PXl9eZ16TXlCDXoNen15XXk9eq15nXqlwiLCBcIlJQRSA3IC0g16LXkdeV15PXlCDXkden16bXlCDXmNeV15XXl1wiLCBcIlJQRSA4LjUgLSDXqdeo15nXpNeUINee15XXkteR16jXqlwiXVxuICAgICAgICB9LFxuICAgICAgICBjdWVzOiBbXG4gICAgICAgICAgXCLXotee15PXlSDXotecINee15PXqNeS15Qg15DXlSDXntep15jXlyDXnteV15LXkdeUINeb15og16nXlNei16fXkdeZ150g15HXkNeV15XXmdeoLlwiLFxuICAgICAgICAgIFwi16jXk9eVINei157XldenINee16rXl9eqINec16fXlSDXlNee15PXqNeS15Qg15XXotec15Ug16LXkyDXm9eZ15XXldelINee15zXkCDXqdecINeU16rXkNeV157XmdedLlwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICB0aXRsZTogXCLXkNeX15nXlteV16og15LXmSDXkNeZ15bXldee15jXqNeZ15XXqiDXm9eg15LXkyDXlNeq16DXkteT15XXqiAoR2kgR3JpcCBIb2xkKVwiLFxuICAgICAgICBkZXNjOiBcIteX15nXlteV16cg15DXk9eZ16gg16nXnCDXkNeX15nXlteqINeU15LXqNeZ16Qg15XXlNeZ15PXmdeZ150g15zXqdee15nXqNeUINeT15XXnteZ16DXoNeY15nXqiDXotecINeU16nXqNeV15XXnCDXnNec15Ag16LXmdeZ16TXldeqLlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC84YjU3LUwwTDI0Y1wiLFxuICAgICAgICB2aWRlb0lEOiBcIjhiNTctTDBMMjRjXCIsXG4gICAgICAgIGlzRnJlZTogZmFsc2UsXG4gICAgICAgIGJhc2VQYXJhbXM6IHtcbiAgICAgICAgICBzZXRzOiBbMywgMywgM10sXG4gICAgICAgICAgcmVwczogW1wiMjAg16nXoNeZ15XXqiDXlNeX15bXp9eUXCIsIFwiMzAg16nXoNeZ15XXqiDXlNeX15bXp9eUXCIsIFwiNDUg16nXoNeZ15XXqiDXlNeX15bXp9eUXCJdLFxuICAgICAgICAgIHJlc3Q6IFtcIjkwINep16DXmdeV16pcIiwgXCI3NSDXqdeg15nXldeqXCIsIFwiNjAg16nXoNeZ15XXqlwiXSxcbiAgICAgICAgICBpbnRlbnNpdHk6IFtcIlJQRSA3IC0g16HXl9eZ15jXlCDXp9ec15RcIiwgXCJSUEUgOCAtINen15XXqdeZINeR15nXoNeV16DXmS3XkteR15XXlFwiLCBcIlJQRSA5LjUgLSDXm9ep15wg15DXl9eZ15bXlCDXnteR15XXp9eoXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGN1ZXM6IFtcbiAgICAgICAgICBcIteU16nXqtee16nXlSDXkdeX16rXmdeb16og15HXkyDXkteZINeQ15Ug157XkteR16og157XnNeV16TXpNeqINei15wg157XqteXINeQ15Ug157Xqden15XXnNeqINeZ15MuXCIsXG4gICAgICAgICAgXCLXkNeX15bXlSDXkdeX15XXlten15Qg15XXp9eR16LXlSDXkNeqINeU15bXldeV15nXldeqINec157XqdeaINeU15bXntefINeU157XldeS15PXqC5cIlxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgbGV2ZWw6IDMsXG4gICAgbmFtZTogXCLXqNee15QgMzog16nXmdeQINeR15nXpteV16LXmdedIChQZWFrIFBlcmZvcm1hbmNlKVwiLFxuICAgIHRhZ2xpbmU6IFwi15jXldeg15XXoSDXqdeo15nXqNeZINee15XXqdec150sINeY15XXldeX15kg16rXoNeV16LXlCDXp9eZ16bXldeg15nXmdedINeV16LXnteZ15PXldeqINep15nXkCDXnNeq15fXqNeV15nXldeqINeV15zXkNeZ157Xldeg15nXnSDXntek16jXm9eZ150uXCIsXG4gICAgb3ZlcnZpZXdWaWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9TXzhuMGw2X2FJRVwiLFxuICAgIGV4ZXJjaXNlczogW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwi16HXp9eV15XXkNeYINen15XXlteQ16cg16LXnteV16cg15DXp9eY15nXkdeZIChDb3NzYWNrIE1vYmlsaXR5IFNxdWF0KVwiLFxuICAgICAgICBkZXNjOiBcIteS157Xmdep15XXqiDXk9eZ16DXnteZ16og16fXmdem15XXoNeZ16og16nXnCDXlNee16TXqdei15XXqiDXldeU15nXqNeaINec16LXnteZ15PXlCDXotee15XXp9eUINeR16jXktecINek16jXldeh15Qg15XXqdee15nXqNeqINeS15DXqNeTINeQ15LXqNeh15nXkdeZ16ouXCIsXG4gICAgICAgIHZpZGVvVXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL3JWOEI5Nl9nUzBMXCIsXG4gICAgICAgIHZpZGVvSUQ6IFwiclY4Qjk2X2dTMExcIixcbiAgICAgICAgaXNGcmVlOiB0cnVlLFxuICAgICAgICBiYXNlUGFyYW1zOiB7XG4gICAgICAgICAgc2V0czogWzMsIDQsIDRdLFxuICAgICAgICAgIHJlcHM6IFtcIjYg15nXqNeZ15PXldeqINec15vXnCDXpteTXCIsIFwiOCDXmdeo15nXk9eV16og15zXm9ecINem15NcIiwgXCIxMCDXmdeo15nXk9eV16og15zXm9ecINem15NcIl0sXG4gICAgICAgICAgcmVzdDogW1wiOTAg16nXoNeZ15XXqiDXnteg15XXl9eUXCIsIFwiNzUg16nXoNeZ15XXqiDXnteg15XXl9eUXCIsIFwiNjAg16nXoNeZ15XXqiDXnteg15XXl9eUXCJdLFxuICAgICAgICAgIGludGVuc2l0eTogW1wiUlBFIDcgLSDXqdec15nXmNeUINeR16LXldee16dcIiwgXCJSUEUgOCAtINen16bXkSDXk9eZ16DXnteZINee15HXlden16hcIiwgXCJSUEUgOSAtINec15zXkCDXntep16fXnCDXmdeTINeq15XXnteaXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGN1ZXM6IFtcbiAgICAgICAgICBcItei157Xk9eVINeR16TXmdep15XXpyDXqNeX15Eg157XkNeV15MsINeo15PXlSDXlNem15nXk9eUINeQ15wg16jXktecINeQ15fXqiDXkdei15XXkyDXlNeo15LXnCDXlNep16DXmdeZ15Qg157XqteZ15nXqdeo16og15XXkdeU15XXoNeV16og16TXldeg15XXqiDXntei15zXlC5cIixcbiAgICAgICAgICBcItep157XqNeVINei15wg16LXp9eRINeU16jXktecINeU15vXpNeV16TXlCDXoNei15XXpSDXlNeZ15jXkSDXkden16jXp9eiINeV15LXkSDXmdep16guXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIteS16nXqCDXpteV15XXkNeoINee15zXkCDXotecINee16nXmNeXINeo15ogKEZ1bGwgTmVjayBCcmlkZ2UgRmxvdylcIixcbiAgICAgICAgZGVzYzogXCLXlNeb16DXlCDXkNen16HXmNeo15nXnteZ16og16nXnCDXnteV15HXmdec15kg15QtQkpKINec16LXnteZ15PXlCDXkdec15fXpteZINeU157Xlteo158g15XXlNeS16nXqCDXpNeV16HXmC3XmNeZ15nXp9eT15DXldefLlwiLFxuICAgICAgICB2aWRlb1VybDogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9fYlQ4dllfZzlYbFwiLFxuICAgICAgICB2aWRlb0lEOiBcIl9iVDh2WV9nOVhsXCIsXG4gICAgICAgIGlzRnJlZTogZmFsc2UsXG4gICAgICAgIGJhc2VQYXJhbXM6IHtcbiAgICAgICAgICBzZXRzOiBbMywgMywgM10sXG4gICAgICAgICAgcmVwczogW1wiOCDXl9eW16jXldeqINeo15vXldeqXCIsIFwiMTEg15fXlteo15XXqiDXqNeb15XXqlwiLCBcIjE1INeX15bXqNeV16og16jXm9eV16pcIl0sXG4gICAgICAgICAgcmVzdDogW1wiOTAg16nXoNeZ15XXqiDXnteg15XXl9eUXCIsIFwiNzUg16nXoNeZ15XXqiDXnteg15XXl9eUXCIsIFwiNjAg16nXoNeZ15XXqiDXnteg15XXl9eUXCJdLFxuICAgICAgICAgIGludGVuc2l0eTogW1wiUlBFIDggLSDXm9eV15cg157Xqdee16LXldeq15lcIiwgXCJSUEUgOSAtINei15XXqNejINeZ16bXmdeRXCIsIFwiUlBFIDEwIC0g16nXmdeQINen15zXmdeg15kg157Xp9em15XXoteZXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGN1ZXM6IFtcbiAgICAgICAgICBcIteR16bXoteVINee16LXkdeo15kg157Xqden15wg16fXnNeZ150g15XXkNeZ15jXmdeZ150g16fXk9eZ157XlCDXldeQ15fXldeo15Qg16LXnCDXnteW16jXnyDXkNeVINeS15zXmdecINeh16TXldeSINeo15og15HXoNen15XXk9eqINeU157XkteiIFdJVEgg15TXqNeQ16kuXCIsXG4gICAgICAgICAgXCLXkdem16LXlSDXkNeqINeU16rXqNeS15nXnCDXkNeaINeV16jXpyDXnNeQ15fXqCDXl9eZ157XldedINee15zXkCDXqdecINeW15XXp9ek15kg15TXpteV15XXkNeoLlwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogXCLXpNeZ16rXldecINei157XldeTINep15PXqNeUINeQ16fXodek15zXldeh15nXkdeZIChFeHBsb3NpdmUgU3BpbmUgVHdpc3QpXCIsXG4gICAgICAgIGRlc2M6IFwi16nXmdei15XXqCDXm9eV15cg157Xqtek16jXpSDXnNeX15nXkdeV16jXmSDXlNeX15XXnNeZ15XXqiDXnNep150g157XoNeZ16LXqiDXpNeS15nXoteV16og16HXmdeR15XXkSDXpNeq15DXldee15nXldeqINeR16nXoteo15XXmiDXnteU15nXqCDXqdecINee16bXkSDXlNeS15XXoy5cIixcbiAgICAgICAgdmlkZW9Vcmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvOWI3dkJxR2Y0VmJcIixcbiAgICAgICAgdmlkZW9JRDogXCI5Yjd2QnFHZjRWYlwiLFxuICAgICAgICBpc0ZyZWU6IGZhbHNlLFxuICAgICAgICBiYXNlUGFyYW1zOiB7XG4gICAgICAgICAgc2V0czogWzMsIDQsIDRdLFxuICAgICAgICAgIHJlcHM6IFtcIjEwINeX15bXqNeV16og15zXpteTXCIsIFwiMTMg15fXlteo15XXqiDXnNem15NcIiwgXCIxNiDXl9eW16jXldeqINec16bXk1wiXSxcbiAgICAgICAgICByZXN0OiBbXCI5MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI3NSDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIl0sXG4gICAgICAgICAgaW50ZW5zaXR5OiBbXCJSUEUgNy41IC0g16HXmdeR15XXkSDXnteg15XXlNecXCIsIFwiUlBFIDguNSAtINeU15DXpteUINee15HXldeW16jXqlwiLCBcIlJQRSA5LjUgLSDXqteX16og15TXqteg15LXk9eV16og15LXldee15nXmdeUXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGN1ZXM6IFtcbiAgICAgICAgICBcIteR16LXnteZ15PXqiDXl9em15kg15HXqNeaINeQ15Ug16LXnteZ15PXlCDXntec15DXlCwg15HXptei15Ug16TXmdeq15XXnCDXpNec15Ig15LXldejINei15zXmdeV158g16nXnNedINeR16bXldeo15Qg157XlNeZ16jXlCDXldeR15zXmdee15Qg16DXqdec15jXqi5cIixcbiAgICAgICAgICBcItei15zXmdeU150g15zXlNeo15LXmdepINeQ16og15TXnNeZ15HXlCDXnteZ15nXpteR16og15XXkdeV15zXnteqINec15DXldeo15og15TXqteg15XXoteULlwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXRsZTogXCLXoNeX15nXqteUINeV15HXnNeZ157XqiDXltei15bXldei15nXnSDXntee16nXmNeXIChEcm9wIEp1bXAgUHJlaGFiKVwiLFxuICAgICAgICBkZXNjOiBcIteU15vXoNeqINeo16bXldei15XXqiDXlNeR16jXmiDXldei157XmdeT15XXqiDXlNeS15nXk9eZ150g15zXoNeX15nXqteV16og15XXotee15nXk9eUINek15nXlteZ16og157XlNeZ16jXlCDXnNeQ15fXqCDXlNeY15zXldeqINeV15vXldeXINeT15fXmdek15QuXCIsXG4gICAgICAgIHZpZGVvVXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLzh2X1ktUzZYN00zXCIsXG4gICAgICAgIHZpZGVvSUQ6IFwiOHZfWS1TNlg3TTNcIixcbiAgICAgICAgaXNGcmVlOiBmYWxzZSxcbiAgICAgICAgYmFzZVBhcmFtczoge1xuICAgICAgICAgIHNldHM6IFszLCAzLCA0XSxcbiAgICAgICAgICByZXBzOiBbXCI4INeg15fXmdeq15XXqlwiLCBcIjExINeg15fXmdeq15XXqlwiLCBcIjE1INeg15fXmdeq15XXqlwiXSxcbiAgICAgICAgICByZXN0OiBbXCI5MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI3NSDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIl0sXG4gICAgICAgICAgaW50ZW5zaXR5OiBbXCJSUEUgNiAtINeR15zXmdee15Qg15fXnNen15RcIiwgXCJSUEUgOCAtINeZ16bXmdeR15XXqiDXnNec15Ag16jXoteZ15PXlFwiLCBcIlJQRSA5IC0g16DXl9eZ16rXlCDXkNeZ16nXmdeqINen16nXldeX15Qg15zXp9ek15nXpteUXCJdXG4gICAgICAgIH0sXG4gICAgICAgIGN1ZXM6IFtcbiAgICAgICAgICBcItep157XmNeVINei16bXnteb150g157XnteT16jXkteUINen15jXoNeUINeQ15Ug16fXldek16HXlCDXkdeS15XXkdeUIDIwLTMwINehJyfXniDXldeg15fXqteVINeR16nXqteZINeo15LXnNeZ15nXnSDXkdep16fXmCDXldeR15HXmNeZ15fXldeqLlwiLFxuICAgICAgICAgIFwi15nXqSDXnNeU15nXnteg16Ig157Xp9eo15nXodeqINeR16jXm9eZ15nXnSDXpNeg15nXnteUINeR16LXqiDXodek15nXkteqINeU157Xqden15wuXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHRpdGxlOiBcIteb15nXldeV16Ug15LXqNeZ16Qg157Xp9eh15nXntec15kg157XnteV16nXmiAoTWF4LVRlbnNpb24gR3JpcCByZWNvdmVyeSlcIixcbiAgICAgICAgZGVzYzogXCLXqdeZ15Ag15TXodeZ15HXldec16og15XXlNeq15LXldeg16DXldeqINeU15PXnNen15XXqiDXqdecINee16TXqNen15kg15TXmdeTINec16fXqNeQ16og16HXkdeR15kg15DXmdee15XXnyDXkNeVINeq15fXqNeV15nXldeqINee15zXkNeZ150g15zXnNeQINeb16nXnC5cIixcbiAgICAgICAgdmlkZW9Vcmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvOHZCcUdmNFZiMzRcIixcbiAgICAgICAgdmlkZW9JRDogXCI4dkJxR2Y0VmIzNFwiLFxuICAgICAgICBpc0ZyZWU6IGZhbHNlLFxuICAgICAgICBiYXNlUGFyYW1zOiB7XG4gICAgICAgICAgc2V0czogWzMsIDMsIDNdLFxuICAgICAgICAgIHJlcHM6IFtcIjQwINep16DXmdeV16og15TXl9eW16fXlFwiLCBcIjUwINep16DXmdeV16og15TXl9eW16fXlFwiLCBcIjYwINep16DXmdeV16og15TXl9eW16fXlFwiXSxcbiAgICAgICAgICByZXN0OiBbXCI5MCDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI3NSDXqdeg15nXldeqINee16DXldeX15RcIiwgXCI2MCDXqdeg15nXldeqINee16DXldeX15RcIl0sXG4gICAgICAgICAgaW50ZW5zaXR5OiBbXCJSUEUgOCAtINep15fXmden16og15vXldeXXCIsIFwiUlBFIDkgLSDXkNeX15nXlteUINeT15XXnteZ16DXoNeY15nXqiDXnteZ16jXkdeZ16pcIiwgXCJSUEUgMTAgLSDXm9ep15wg157XnNeQINee15HXlden16hcIl1cbiAgICAgICAgfSxcbiAgICAgICAgY3VlczogW1xuICAgICAgICAgIFwi15DXl9eW15Ug15HXkdeTINeS16jXmdekINeb15HXkyDXkNeVINeR15jXkdei15XXqiDXkNeX15nXlteUINeZ16LXldeT15nXldeqINeR15zXl9elINep15XXldeUINec15DXldeo15og15vXnCDXlNeW157Xny5cIixcbiAgICAgICAgICBcIteR16bXoteVINee16rXmdeX16og16TXqdeZ15jXqiDXqdeV16jXqSDXm9ejINeU15nXkyDXlNeg15LXk9eZ16og15zXlNeq15DXldep16nXldeqINee15TXmdeo15QuXCJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICAvLyBBcHBsaWNhdGlvbiBNYWluIFZpZXdzIFN0YXRlcyAoT3JjaGVzdHJhdG9yIHNwbGl0cyB2aXN1YWwgc2ltdWxhdG9yIGFuZCBJREUgY29kZSBjb3B5IG1hY2hpbmUpXG4gIGNvbnN0IFthY3RpdmVTY3JlZW4sIHNldEFjdGl2ZVNjcmVlbl0gPSB1c2VTdGF0ZTxBcHBTY3JlZW4+KEFwcFNjcmVlbi5TUExBU0gpO1xuICBcbiAgLy8gU2ltdWxhdGVkIFVzZXIgU2Vzc2lvbiBEYXRhYmFzZSBTdGF0ZSAoU3luY2luZyB2aXN1YWwgd2l0aCByZWFsLXRpbWUgVUkgbG9nZ2luZyB3aWRnZXQhKVxuICBjb25zdCBbYXV0aE1vZGUsIHNldEF1dGhNb2RlXSA9IHVzZVN0YXRlPCdMT0dJTicgfCAnUkVHSVNURVInPignTE9HSU4nKTtcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICAvLyBCaW9tZXRyaWMgbG9naW4gZW11bGF0aW9uIHN0YXRlc1xuICBjb25zdCBbYmlvbWV0cmljUHJvbXB0T3Blbiwgc2V0QmlvbWV0cmljUHJvbXB0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtiaW9tZXRyaWNTdWNjZXNzLCBzZXRCaW9tZXRyaWNTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTaW11bGF0ZUJpb21ldHJpY1N1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgc2V0QmlvbWV0cmljU3VjY2Vzcyh0cnVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEJpb21ldHJpY1Byb21wdE9wZW4oZmFsc2UpO1xuICAgICAgc2V0QmlvbWV0cmljU3VjY2VzcyhmYWxzZSk7XG4gICAgICBzZXRGdWxsTmFtZShmdWxsTmFtZS50cmltKCkgfHwgJ9eh16TXldeo15jXkNeZINeR15nXldee15jXqNeZJyk7XG4gICAgICBzZXRBY3RpdmVTY3JlZW4oQXBwU2NyZWVuLk1BSU5fQVBQKTtcbiAgICAgIHNldEN1cnJlbnRUYWIoQm90dG9tVGFiLkhPTUUpO1xuICAgIH0sIDEyMDApO1xuICB9O1xuICBcbiAgLy8gRm9ybSB2YWxpZGF0aW9ucyBzdGF0ZVxuICBjb25zdCBbYXV0aEVycm9yLCBzZXRBdXRoRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gTWVkaWNhbCBXYWl2ZXIgUmVzcG9uc2VzIFN0YXRlXG4gIGNvbnN0IFtsaWFiaWxpdHlXYWl2ZXIsIHNldExpYWJpbGl0eVdhaXZlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtxSGVhcnRIZWFsdGgsIHNldFFIZWFydEhlYWx0aF0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtxQ29uc3RyYWludHMsIHNldFFDb25zdHJhaW50c10gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtxQmFsYW5jZSwgc2V0UUJhbGFuY2VdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbWVkaWNhbEVycm9yLCBzZXRNZWRpY2FsRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gRnJlZXplIGZsb3cgY29udHJvbFxuICBjb25zdCBbaXNGcm96ZW4sIHNldElzRnJvemVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2F0dGFjaGVkRmlsZSwgc2V0QXR0YWNoZWRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2F0dGFjaGVkRmlsZU5hbWUsIHNldEF0dGFjaGVkRmlsZU5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXBsb2FkZWRUb0ZpcmViYXNlLCBzZXRVcGxvYWRlZFRvRmlyZWJhc2VdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgLy8gUXVlc3Rpb25uYWlyZSBGbG93XG4gIGNvbnN0IFtxQWdlR3JvdXAsIHNldFFBZ2VHcm91cF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW3FTcG9ydCwgc2V0UVNwb3J0XSA9IHVzZVN0YXRlPFNwb3J0VHlwZT4oU3BvcnRUeXBlLkZPT1RCQUxMKTtcbiAgY29uc3QgW3FHb2FsLCBzZXRRR29hbF0gPSB1c2VTdGF0ZTxPbmJvYXJkaW5nR29hbD4oT25ib2FyZGluZ0dvYWwuUEVSRk9STUFOQ0UpO1xuICBjb25zdCBbcVBhaW4sIHNldFFQYWluXSA9IHVzZVN0YXRlPFBhaW5MZXZlbD4oUGFpbkxldmVsLk5PTkUpO1xuICBjb25zdCBbb25ib2FyZFN0ZXAsIHNldE9uYm9hcmRTdGVwXSA9IHVzZVN0YXRlKDEpO1xuXG4gIC8vIEVtYWlsIFZlcmlmaWNhdGlvbiAoT1RQKSBTdGF0ZVxuICBjb25zdCBbb3RwRGlnaXRzLCBzZXRPdHBEaWdpdHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KEFycmF5KDYpLmZpbGwoJycpKTtcbiAgY29uc3QgW290cENvdW50ZG93biwgc2V0T3RwQ291bnRkb3duXSA9IHVzZVN0YXRlKDMwKTtcbiAgY29uc3QgW290cEVycm9yLCBzZXRPdHBFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZvY3VzZWRPdHBJbmRleCwgc2V0Rm9jdXNlZE90cEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWw6IGFueTtcbiAgICBpZiAoYWN0aXZlU2NyZWVuID09PSBBcHBTY3JlZW4uRU1BSUxfVkVSSUZJQ0FUSU9OICYmIG90cENvdW50ZG93biA+IDApIHtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRPdHBDb3VudGRvd24ocHJldiA9PiBwcmV2IC0gMSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCBbYWN0aXZlU2NyZWVuLCBvdHBDb3VudGRvd25dKTtcblxuXG4gIC8vIEhvbWUgU2NyZWVuIFN0YXRlc1xuICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZTxCb3R0b21UYWI+KEJvdHRvbVRhYi5IT01FKTtcbiAgY29uc3QgW3NlbGVjdGVkU3BvcnQsIHNldFNlbGVjdGVkU3BvcnRdID0gdXNlU3RhdGU8U3BvcnRUeXBlPihTcG9ydFR5cGUuRk9PVEJBTEwpO1xuXG4gIC8vIE92ZXJsYXkgSW50ZXJhY3RpdmUgTW9kYWxzIFN0YXRlc1xuICBjb25zdCBbcGF5d2FsbE9wZW4sIHNldFBheXdhbGxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BheXdhbGxGZWF0dXJlTmFtZSwgc2V0UGF5d2FsbEZlYXR1cmVOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlbGVjdGVkRXhlcmNpc2UsIHNldFNlbGVjdGVkRXhlcmNpc2VdID0gdXNlU3RhdGU8RXhlcmNpc2VJdGVtIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtzZWxlY3RlZEluanVyeSwgc2V0U2VsZWN0ZWRJbmp1cnldID0gdXNlU3RhdGU8SW5qdXJ5SXRlbSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbc2hvcENhdGVnb3J5LCBzZXRTaG9wQ2F0ZWdvcnldID0gdXNlU3RhdGU8J9ee16nXl9eV16onIHwgJ9eh16TXqNeZ15knIHwgJ9em15nXldeTJyB8ICfXlNeb15wnPign15TXm9ecJyk7XG4gIGNvbnN0IFtjYXJ0Q291bnQsIHNldENhcnRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2JvdWdodEl0ZW1OYW1lLCBzZXRCb3VnaHRJdGVtTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2V4cGFuZGVkQmpqQ2FyZCwgc2V0RXhwYW5kZWRCampDYXJkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYmpqQ3VycmVudExldmVsLCBzZXRCampDdXJyZW50TGV2ZWxdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgW2JqalNlbGVjdGVkTGV2ZWwsIHNldEJqalNlbGVjdGVkTGV2ZWxdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgW2JqakN1cnJlbnRXZWVrLCBzZXRCampDdXJyZW50V2Vla10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbYmpqU2VsZWN0ZWRXZWVrVmlldywgc2V0QmpqU2VsZWN0ZWRXZWVrVmlld10gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbc2hvd0JqalRlc3RNb2RhbCwgc2V0U2hvd0JqalRlc3RNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtiampUZXN0UGFpbklucHV0LCBzZXRCampUZXN0UGFpbklucHV0XSA9IHVzZVN0YXRlPCd5ZXMnIHwgJ25vJyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYmpqVGVzdE1vdGlvbklucHV0LCBzZXRCampUZXN0TW90aW9uSW5wdXRdID0gdXNlU3RhdGU8J3llcycgfCAnbm8nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtiampUZXN0RXJyb3IsIHNldEJqalRlc3RFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICAvLyBNaWxlc3RvbmUgbWFudWFsIHZpZGVvIHJldmlldyBzdGF0ZXNcbiAgY29uc3QgW2Jqak1pbGVzdG9uZVN0YXR1cywgc2V0QmpqTWlsZXN0b25lU3RhdHVzXSA9IHVzZVN0YXRlPCdpZGxlJyB8ICdyZWNvcmRpbmcnIHwgJ3JlY29yZGVkJyB8ICdwZW5kaW5nJyB8ICdhcHByb3ZlZCcgfCAncmVqZWN0ZWQnPignaWRsZScpO1xuICBjb25zdCBbc2hvd0Jqak1pbGVzdG9uZU1vZGFsLCBzZXRTaG93QmpqTWlsZXN0b25lTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYmpqTWlsZXN0b25lVmlkZW9OYW1lLCBzZXRCampNaWxlc3RvbmVWaWRlb05hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtiampNaWxlc3RvbmVNZXRob2QsIHNldEJqak1pbGVzdG9uZU1ldGhvZF0gPSB1c2VTdGF0ZTwnY2FtZXJhJyB8ICdnYWxsZXJ5JyB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbYmpqQ2FtZXJhQ291bnRlciwgc2V0QmpqQ2FtZXJhQ291bnRlcl0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbaXNTaW11bGF0aW5nQ2FtZXJhLCBzZXRJc1NpbXVsYXRpbmdDYW1lcmFdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbYmpqV2F0Y2hlZEtleXMsIHNldEJqaldhdGNoZWRLZXlzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtiampSZWplY3Rpb25Ob3Rlcywgc2V0QmpqUmVqZWN0aW9uTm90ZXNdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW3JlamVjdGlvblNpbVRleHQsIHNldFJlamVjdGlvblNpbVRleHRdID0gdXNlU3RhdGU8c3RyaW5nPihcIteg16bXpNeq15Qg16fXqNeZ16HXqiDXkdeo15og16TXoNeZ157XlCAoVmFsZ3VzKSDXkdee15TXnNeaINee16LXkdeo15kgOTAtOTAuINeZ16kg15zXmdeZ16nXqCDXkNeqINeU16bXldeV15DXqCDXldec16nXnteV16gg16LXnCDXkteRINeW16fXldejINei15wg157Xlteo158g15QtQkpKLlwiKTtcblxuICAvLyBJbi1hcHAgcHJlbWl1bSBzdWJzY3JpcHRpb24gYW5kIHBheXdhbGwgc3RhdGVzIGZvciBCSkogUG9ydGFsXG4gIGNvbnN0IFtiampJc1ByZW1pdW0sIHNldEJqaklzUHJlbWl1bV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtiampUYWIsIHNldEJqalRhYl0gPSB1c2VTdGF0ZTwndHJhaW5pbmcnIHwgJ3JlaGFiJz4oJ3RyYWluaW5nJyk7XG4gIGNvbnN0IFtiampSZWhhYkFyZWEsIHNldEJqalJlaGFiQXJlYV0gPSB1c2VTdGF0ZTwnbmVja19zaG91bGRlcicgfCAnbG93ZXJfYmFjaycgfCAna25lZScgfCAnaGFuZHNfZWxib3dzJz4oJ25lY2tfc2hvdWxkZXInKTtcbiAgY29uc3QgW3Nob3dCampQYXl3YWxsLCBzZXRTaG93QmpqUGF5d2FsbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtiampQYXl3YWxsRmVhdHVyZU5hbWUsIHNldEJqalBheXdhbGxGZWF0dXJlTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgW2JqakZ1bGxXb3Jrb3V0RXhwYW5kZWQsIHNldEJqakZ1bGxXb3Jrb3V0RXhwYW5kZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbaXNQcm9jZXNzaW5nUGF5bWVudCwgc2V0SXNQcm9jZXNzaW5nUGF5bWVudF0gPSB1c2VTdGF0ZTwnZ29vZ2xlcGF5JyB8ICdiaXQnIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtiampUb2FzdCwgc2V0QmpqVG9hc3RdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gU3luYyBzZWxlY3RlZCB3ZWVrIHZpZXcgd2l0aCB0aGUgY3VycmVudCBhY3RpdmUgd2Vla1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChiampTZWxlY3RlZExldmVsID09PSBiampDdXJyZW50TGV2ZWwpIHtcbiAgICAgIGlmIChiampTZWxlY3RlZFdlZWtWaWV3ICE9PSBiampDdXJyZW50V2Vlaykge1xuICAgICAgICBzZXRCampTZWxlY3RlZFdlZWtWaWV3KGJqakN1cnJlbnRXZWVrKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGJqalNlbGVjdGVkV2Vla1ZpZXcgIT09IDMpIHtcbiAgICAgICAgc2V0QmpqU2VsZWN0ZWRXZWVrVmlldygzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtiampTZWxlY3RlZExldmVsLCBiampDdXJyZW50TGV2ZWwsIGJqakN1cnJlbnRXZWVrLCBiampTZWxlY3RlZFdlZWtWaWV3XSk7XG5cbiAgY29uc3QgdHJpZ2dlckJqalRvYXN0ID0gKG1zZzogc3RyaW5nKSA9PiB7XG4gICAgc2V0QmpqVG9hc3QobXNnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEJqalRvYXN0KGN1cnJlbnRNc2cgPT4gY3VycmVudE1zZyA9PT0gbXNnID8gbnVsbCA6IGN1cnJlbnRNc2cpO1xuICAgIH0sIDM1MDApO1xuICB9O1xuXG4gIC8vIEJhc2ljIHZhbGlkYXRpb24gcnVsZXMgZm9yIEhlYnJldyBpbnB1dCAmIEVuZ2xpc2ggUkZDIDUzMjIgZW1haWwgdmFsaWRhdGlvblxuICBjb25zdCBlbWFpbEhhc0hlYnJldyA9IC9b15At16pdLy50ZXN0KGVtYWlsKTtcbiAgY29uc3QgaXNFbWFpbFZhbGlkID0gL15bYS16QS1aMC05Ll8lKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsfSQvLnRlc3QoZW1haWwudHJpbSgpKSAmJiAhZW1haWxIYXNIZWJyZXc7XG4gIGNvbnN0IGlzUGhvbmVWYWxpZCA9IC9eKDA1MHwwNTJ8MDUzfDA1NHwwNTV8MDU4KVxcZHs3fSQvLnRlc3QocGhvbmUudHJpbSgpKTtcbiAgXG4gIGNvbnN0IGZ1bGxOYW1lV29yZHMgPSBmdWxsTmFtZS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgY29uc3QgaXNGdWxsTmFtZVZhbGlkID0gZnVsbE5hbWVXb3Jkcy5sZW5ndGggPj0gMiAmJiBmdWxsTmFtZVdvcmRzLmV2ZXJ5KHdvcmQgPT4gd29yZC5sZW5ndGggPj0gMik7XG5cbiAgY29uc3QgaGFuZGxlQXV0aFN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoYXV0aE1vZGUgPT09ICdSRUdJU1RFUicpIHtcbiAgICAgIGlmICghaXNGdWxsTmFtZVZhbGlkKSB7XG4gICAgICAgIHNldEF1dGhFcnJvcign16DXkCDXnNeU15bXmdefINep150g157XnNeQICjXpNeo15jXmSDXldee16nXpNeX15QpLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZW1haWxIYXNIZWJyZXcpIHtcbiAgICAgICAgc2V0QXV0aEVycm9yKCfXm9eq15XXkdeqINeQ15nXnteZ15nXnCDXl9eZ15nXkdeqINec15TXmdeV16og15HXkNeg15LXnNeZ16og15HXnNeR15MuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghaXNFbWFpbFZhbGlkKSB7XG4gICAgICAgIHNldEF1dGhFcnJvcign15vXqteV15HXqiDXkNeZ157XmdeZ15wg15zXkCDXqten15nXoNeULicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWlzUGhvbmVWYWxpZCkge1xuICAgICAgICBzZXRBdXRoRXJyb3IoJ9eg15Ag15zXlNeW15nXnyDXnteh16TXqCDXmNec16TXldefINeg15nXmdeTINeq16fXmdefLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgICBzZXRBdXRoRXJyb3IoJ9eU16HXmdeh157XlCDXl9eZ15nXkdeqINec15TXm9eZ15wg15zXpNeX15XXqiA2INeq15XXldeZ150g15zXkNeR15jXl9eqINeU15fXqdeR15XXny4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0QXV0aEVycm9yKG51bGwpO1xuICAgICAgc2V0T3RwRGlnaXRzKEFycmF5KDYpLmZpbGwoJycpKTtcbiAgICAgIHNldE90cENvdW50ZG93bigzMCk7XG4gICAgICBzZXRPdHBFcnJvcihudWxsKTtcbiAgICAgIHNldEFjdGl2ZVNjcmVlbihBcHBTY3JlZW4uRU1BSUxfVkVSSUZJQ0FUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW4gTG9naW4gTW9kZVxuICAgICAgaWYgKCFpc1Bob25lVmFsaWQpIHtcbiAgICAgICAgc2V0QXV0aEVycm9yKCfXoNeQINec15TXlteZ158g157Xodek16gg15jXnNek15XXnyDXoNeZ15nXkyDXqten15nXny4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgc2V0QXV0aEVycm9yKCfXlNeh15nXodee15Qg15fXmdeZ15HXqiDXnNeU15vXmdecINec16TXl9eV16ogNiDXqteV15XXmdedINec15DXkdeY15fXqiDXlNeX16nXkdeV158uJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldEF1dGhFcnJvcihudWxsKTtcbiAgICAgIC8vIERpcmVjdGx5IGNoZWNrIGlmIHVzZXIgaGFzIGFscmVhZHkgZmlsbGVkIHF1ZXN0aW9ubmFpcmUgaW4gb3VyIHNlc3Npb25cbiAgICAgIGlmIChmdWxsTmFtZSA9PT0gJycpIHtcbiAgICAgICAgc2V0RnVsbE5hbWUoJ9eh16TXldeo15jXkNeZIFJlY292aW8nKTsgLy8gZGVmYXVsdCBwbGFjZWhvbGRlciBpZiB0aGV5IGp1c3QgbG9nIGluXG4gICAgICB9XG4gICAgICBzZXRBY3RpdmVTY3JlZW4oQXBwU2NyZWVuLk1BSU5fQVBQKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTWVkaWNhbFN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoIWxpYWJpbGl0eVdhaXZlcikge1xuICAgICAgc2V0TWVkaWNhbEVycm9yKCfXmdepINec16HXntefINeQ16og16rXmdeR16og15TXlNem15TXqNeUINec15TXodeo16og15DXl9eo15nXldeqINee16nXpNeY15nXqiDXm9eT15kg15zXlNee16nXmdeaLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocUhlYXJ0SGVhbHRoID09PSBudWxsIHx8IHFDb25zdHJhaW50cyA9PT0gbnVsbCB8fCBxQmFsYW5jZSA9PT0gbnVsbCkge1xuICAgICAgc2V0TWVkaWNhbEVycm9yKCfXl9eV15HXlCDXnNei16DXldeqINei15wg15vXnCAzINep15DXnNeV16og15TXkdeo15nXkNeV16og15TXnteg15PXmNeV16jXmdeV16ouJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TWVkaWNhbEVycm9yKG51bGwpO1xuXG4gICAgLy8gSUYgVVNFUiBBTlNXRVJTIFwiWUVTXCIgKHRydWUpIFRPIEFOWSBPRiBUSEUgMyBRVUVTVElPTlMgLT4gRlJFRVpFIEFQUCBBQ0NFU1MgSU1NRURJQVRFTFkhXG4gICAgaWYgKHFIZWFydEhlYWx0aCA9PT0gdHJ1ZSB8fCBxQ29uc3RyYWludHMgPT09IHRydWUgfHwgcUJhbGFuY2UgPT09IHRydWUpIHtcbiAgICAgIHNldElzRnJvemVuKHRydWUpO1xuICAgICAgc2V0QWN0aXZlU2NyZWVuKEFwcFNjcmVlbi5NRURJQ0FMX0ZSRUVaRSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGl2ZVNjcmVlbihBcHBTY3JlZW4uT05CT0FSRF9RMSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFNpbXVsYXRpbmcgRmlsZSBBdHRhY2htZW50IGFuZCB1cGxvYWQgdG8gRmlyZWJhc2UgQ2xvdWQgU3RvcmFnZVxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICBzZXRBdHRhY2hlZEZpbGUoZmlsZSk7XG4gICAgICBzZXRBdHRhY2hlZEZpbGVOYW1lKGZpbGUubmFtZSk7XG4gICAgICBcbiAgICAgIC8vIFNpbXVsYXRlIGhpZ2gtdGVjaCBwcm9ncmVzcyB1cGxvYWQgdG8gRmlyZWJhc2UgQ2xvdWQgU3RvcmFnZVxuICAgICAgc2V0SXNVcGxvYWRpbmcodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRVcGxvYWRlZFRvRmlyZWJhc2UodHJ1ZSk7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRHJhZ092ZXIgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5maWxlcyAmJiBlLmRhdGFUcmFuc2Zlci5maWxlc1swXSkge1xuICAgICAgY29uc3QgZmlsZSA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdO1xuICAgICAgc2V0QXR0YWNoZWRGaWxlKGZpbGUpO1xuICAgICAgc2V0QXR0YWNoZWRGaWxlTmFtZShmaWxlLm5hbWUpO1xuICAgICAgXG4gICAgICBzZXRJc1VwbG9hZGluZyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRJc1VwbG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldFVwbG9hZGVkVG9GaXJlYmFzZSh0cnVlKTtcbiAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgfTtcblxuICAvLyBTYWZlIHJlbGVhc2UgYWZ0ZXIgRmlyZWJhc2UgQ2xvdWQgU3RvcmFnZSBVcGxvYWQgQ29tcGxldGVcbiAgY29uc3QgaGFuZGxlT3ZlcnJpZGVVbmxvY2sgPSAoKSA9PiB7XG4gICAgaWYgKHVwbG9hZGVkVG9GaXJlYmFzZSkge1xuICAgICAgc2V0SXNGcm96ZW4oZmFsc2UpO1xuICAgICAgLy8gQWR2YW5jZSB0byBxdWljayBxdWVzdGlvbm5haXJlIGludGFrZVxuICAgICAgc2V0QWN0aXZlU2NyZWVuKEFwcFNjcmVlbi5PTkJPQVJEX1ExKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQ29tcGxldGUgb25ib2FyZGluZyBzZXJpZXMsIHNhdmUgdG8gTG9jYWwgU3RhdGUgYW5kIHdyaXRlIEZpcmViYXNlIFNpbXVsYXRpb24gdHJpZ2dlcnNcbiAgY29uc3Qgc2F2ZU9uYm9hcmRpbmdUb0ZpcmVzdG9yZSA9ICgpID0+IHtcbiAgICAvLyBUaGlzIHJlcHJlc2VudHMgdGhlIEZpcmVzdG9yZSB3cml0ZSBpbiBLb3RsaW4gSmV0cGFjayBDb21wb3NlXG4gICAgc2V0QWN0aXZlU2NyZWVuKEFwcFNjcmVlbi5NQUlOX0FQUCk7XG4gICAgc2V0Q3VycmVudFRhYihCb3R0b21UYWIuSE9NRSk7XG4gICAgc2V0U2VsZWN0ZWRTcG9ydChxU3BvcnQpO1xuICB9O1xuXG4gIGNvbnN0IHRyaWdnZXJQYXl3YWxsID0gKGZlYXR1cmU6IHN0cmluZykgPT4ge1xuICAgIHNldFBheXdhbGxGZWF0dXJlTmFtZShmZWF0dXJlKTtcbiAgICBzZXRQYXl3YWxsT3Blbih0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLWJsYWNrIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBmb250LXNhbnMgcmVsYXRpdmUgb3ZlcmZsb3cteC1oaWRkZW4gc2VsZWN0aW9uOmJnLVsjMDA3QkZGXS8zMCBzZWxlY3Rpb246dGV4dC13aGl0ZVwiIGlkPVwiYXBwbGV0LXZpZXdwb3J0LXJvb3RcIj5cbiAgICAgIFxuICAgICAgey8qIEJhY2tncm91bmQgSGlnaC1UZWNoIE1lc2ggLyBHcmlkIEFjY2VudHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctW2xpbmVhci1ncmFkaWVudCh0b19yaWdodCwjMDkwOTBjXzFweCx0cmFuc3BhcmVudF8xcHgpLGxpbmVhci1ncmFkaWVudCh0b19ib3R0b20sIzA5MDkwY18xcHgsdHJhbnNwYXJlbnRfMXB4KV0gYmctW3NpemU6NHJlbV80cmVtXSBbbWFzay1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoZWxsaXBzZV82MCVfNTAlX2F0XzUwJV8wJSwjMDAwXzcwJSx0cmFuc3BhcmVudF8xMDAlKV0gcG9pbnRlci1ldmVudHMtbm9uZSB6LTAgb3BhY2l0eS01MFwiIC8+XG5cbiAgICAgIHsvKiBIZWFkZXIgQmFubmVyICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLVsjMWExYTFhXSBiZy1bIzBhMGEwYV0vOTAgYmFja2Ryb3AtYmx1ci1tZCBweC04IHB5LTQgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHotMTAgZ2FwLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQteGwgYmctWyMwMDdCRkZdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGUgc2hhZG93LWxnIHNoYWRvdy1bIzAwN0JGRl0vMjAgZm9udC1ib2xkIHRleHQtbGcgc2VsZWN0LW5vbmVcIj5cbiAgICAgICAgICAgIFJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgUkVDT1ZJTyBBQ0FERU1ZXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJnLVsjMDA3QkZGXS8xMCB0ZXh0LVsjMDA3QkZGXSBib3JkZXIgYm9yZGVyLVsjMDA3QkZGXS8zMCBweC0yIHB5LTAuNSByb3VuZGVkLWZ1bGwgZm9udC1tb25vIGZvbnQtbWVkaXVtXCI+QU5EUk9JRCBTREsgMzQ8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXppbmMtNDAwXCI+15TXk9ee15nXmdeqINee157XqdenINeQ16DXk9eo15XXkNeZ15Mg15DXp9eY15nXkdeZINeR16LXkdeo15nXqiDXldeh15HXmdeR16og16TXmdeq15XXlyBLb3RsaW4gSmV0cGFjayBDb21wb3NlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQteHMgYmctWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHJvdW5kZWQteGwgcHgtNCBweS0yIHRleHQtemluYy00MDAgbWF4LXctc21cIj5cbiAgICAgICAgICA8RGF0YWJhc2UgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjMDA3QkZGXSBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtemluYy0yMDBcIj7XodeY15jXldehINek15nXmdeo15HXmdeZ16E6PC9zdHJvbmc+INee15fXldeR16gg157Xp9eV157XmdeqINec16nXktep15XXkiAoRmlyZXN0b3JlICZhbXA7IENsb3VkIFN0b3JhZ2Ug157Xldeb16DXmdedINec16nXmden15XXoylcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIHsvKiBDb250ZW50IENvbHVtbnMgQ29udGFpbmVyICovfVxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHctZnVsbCBtYXgtdy03eGwgbXgtYXV0byBweC02IHB5LTYgZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTYgaXRlbXMtc3RyZXRjaCB6LTEwXCI+XG4gICAgICAgIFxuICAgICAgICB7LyogTGVmdCBTaWRlOiBBbmRyb2lkIFN0dWRpbyBDb2RlICYgVGVjaG5pY2FsIERhc2hib2FyZCAoQ29sIDcpICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi03IGZsZXggZmxleC1jb2wgZ2FwLTZcIiBpZD1cInRlY2huaWNhbC1wYW5lbFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBLb3RsaW4gQ29kZSBFeHBsb3JlciBUYWIgSW50ZWdyYXRpb24gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPENvZGVFeHBsb3JlciAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFZpc3VhbCBGaXJlYmFzZSBDb25zb2xlIExpdmUgU3RyZWFtIE1pcnJvciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMxMTExMTFdIHRvLVsjMDUwNTA1XSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSBwLTUgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCBnYXAtNCBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItWyMxYTFhMWFdIHBiLTNcIj5cbiAgICAgICAgICAgICAgPERhdGFiYXNlIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1bI0ZGQ0EyOF1cIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj7XoNeZ15jXldeoINeg16rXldeg15kg16TXmdeZ16jXkdeZ15nXoSDXkdeW157XnyDXkNee16ogKFNpbXVsYXRlZCBDbG91ZCBGaXJlc3RvcmUgTG9ncyk8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgdGV4dC14cyBmb250LW1vbm9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSByb3VuZGVkLXhsIHAtMyBmbGV4IGZsZXgtY29sIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXppbmMtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrXCI+YXV0aC5jdXJyZW50VXNlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMDA3QkZGXVwiPlVJRDo8L3NwYW4+IHtmdWxsTmFtZSA/IGBhdGhsZXRlXyR7ZnVsbE5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJyl9YCA6ICfXmNeo150g15TXqteX15HXqCd9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyMwMDdCRkZdXCI+16nXnTo8L3NwYW4+IHtmdWxsTmFtZSB8fCAn15DXldeo15cnfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMDA3QkZGXVwiPteQ15nXnteZ15nXnDo8L3NwYW4+IHtlbWFpbCB8fCAn15jXqNedINeU15XXltefJ31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzAwN0JGRl1cIj7XmNec16TXldefOjwvc3Bhbj4ge3Bob25lIHx8ICfXmNeo150g15TXldeW158nfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay82MCBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSByb3VuZGVkLXhsIHAtMyBmbGV4IGZsZXgtY29sIGdhcC0xLjVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXppbmMtNTAwIHVwcGVyY2FzZSBmb250LWJsYWNrIGZvbnQtbW9ub1wiPmRiLmNvbGxlY3Rpb24oXCJhdGhsZXRlc1wiKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMFwiPmFnZUdyb3VwOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMFwiPlwie3FBZ2VHcm91cCB8fCAn15fXodeoJ31cIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDBcIj5wcmltYXJ5U3BvcnQ6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwXCI+XCJ7cVNwb3J0ID8gU1BPUlRfSU5GT1txU3BvcnRdLm5hbWUgOiAn15fXodeoJ31cIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDBcIj5tYWluR29hbDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC00MDBcIj5cIntxR29hbCB8fCAn15fXodeoJ31cIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWFtYmVyLTQwMFwiPmJqakxldmVsU3RhdHVzOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMCBmb250LWV4dHJhYm9sZFwiPlwiTHZsIHtiampDdXJyZW50TGV2ZWx9IOKAoiBXayB7YmpqQ3VycmVudFdlZWt9XCI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1hbWJlci00MDBcIj5iampNaWxlc3RvbmVTdGF0dXM6PC9zcGFuPnsnICd9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BweC0xLjUgcHktMC41IHJvdW5kZWQgdGV4dC1bMTBweF0gZm9udC1ib2xkICR7XG4gICAgICAgICAgICAgICAgICAgIGJqak1pbGVzdG9uZVN0YXR1cyA9PT0gJ3BlbmRpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYmctYW1iZXItOTUwIHRleHQtYW1iZXItNDAwIGJvcmRlciBib3JkZXItYW1iZXItOTAwJ1xuICAgICAgICAgICAgICAgICAgICAgIDogYmpqTWlsZXN0b25lU3RhdHVzID09PSAnYXBwcm92ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYmctZW1lcmFsZC05NTAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtODAwJ1xuICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtemluYy00MDAnXG4gICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgIFwie2Jqak1pbGVzdG9uZVN0YXR1c31cIlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge3NlbGVjdGVkU3BvcnQgPT09IFNwb3J0VHlwZS5CSkogJiYgYmpqTWlsZXN0b25lU3RhdHVzID09PSAncGVuZGluZycgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMTIwODA4XSBib3JkZXIgYm9yZGVyLXJlZC01MDAvMzAgcm91bmRlZC14bCBwLTMuNSBzcGFjZS15LTMuNSBhbmltYXRlLWZhZGVJbiB0ZXh0LXJpZ2h0XCIgZGlyPVwicnRsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXJvc2UtNDAwIGZvbnQtZXh0cmFib2xkIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFuaW1hdGUtcHVsc2VcIj7wn6m6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Xodeg15vXqNeV158g16fXnNeZ16DXmSDXkdeW157XnyDXkNee16ogLSDXlNee15fXqdeRINep15wg16rXldedPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLXJlZC05NTAgdGV4dC1yZWQtNDAwIHB4LTEuNSBweS0wLjUgcm91bmRlZC1mdWxsIGZvbnQtbW9ubyB1cHBlcmNhc2UgZm9udC1ibGFja1wiPtee15fXm9eUINec15DXmdep15XXqDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtMzAwIGxlYWRpbmctbm9ybWFsIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICAgICAg15TXqten15HXnCDXp9eV15HXpSDXldeZ15PXmdeQ15Ug15HXldeX158gPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XCJ7YmpqTWlsZXN0b25lVmlkZW9OYW1lfVwiPC9zdHJvbmc+INee16HXpNeV16jXmNeQ15kge2Z1bGxOYW1lIHx8ICdCSkonfS4g16rXldedINee16DXqteXINeQ16og16jXnteV16og16HXmdee15jXqNeZ15nXqiDXlNeZ16jXm9eZ15nXnSDXldeU15vXldeXINeU16bXldeV15DXqNeZINeU16HXmNeY15kuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgey8qIFNpbXVsYXRlZCBDbGluaWNhbCBBZHZpY2UgSW5wdXQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtemluYy00MDAgZm9udC1leHRyYWJvbGQgYmxvY2tcIj7inI3vuI8g15TXoteo15XXqiDXp9ec15nXoNeZ15XXqiDXnNeq16DXldei15QgKNec15TXqteQ157XqiDXntep15XXkSDXk9eX15nXmdeUKTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWplY3Rpb25TaW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlamVjdGlvblNpbVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIteU16fXnNeTINeU16LXqNeV16og16rXmden15XXnyDXnNeh16TXldeo15jXkNeZLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtWzEwcHhdIHRleHQtemluYy0yMDAgYmctemluYy05NTAgcC0yIHJvdW5kZWQgYm9yZGVyIGJvcmRlci16aW5jLTgwMC84MCBmb2N1czpib3JkZXItcmVkLTUwMCBmb250LXNhbnMgbGVhZGluZy1yZWxheGVkIHJlc2l6ZS1ub25lIGgtMTQgb3V0bGluZS1ub25lIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lU3RhdHVzKCdhcHByb3ZlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEJqalJlamVjdGlvbk5vdGVzKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoYmpqQ3VycmVudExldmVsIDwgMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEx2bCA9IGJqakN1cnJlbnRMZXZlbCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCampDdXJyZW50TGV2ZWwobmV4dEx2bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCampTZWxlY3RlZExldmVsKG5leHRMdmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqQ3VycmVudFdlZWsoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCampTZWxlY3RlZFdlZWtWaWV3KDEpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIteU15fXnNeY15Qg16fXnNeZ16DXmdeqINeg16nXnteo15Qg15EtRmlyZXN0b3JlINeR15TXptec15fXlCEg15TXqdec15Eg15TXkdeQINep15XXl9eo16gg15XXlNee15fXqdeRINep15wg16rXldedINeh16DXm9eo158g16HXmNeY15XXoSDXmdeo15XXpy4g8J+OiVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTEuNSBiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIHJvdW5kZWQtbGcgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTUwMCB0ZXh0LVsxMC41cHhdIGxlYWRpbmctbm9uZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIPCfn6Ig15DXqdeoINeh16jXmNeV158g15XXlNei15HXqCDXqNee15RcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lU3RhdHVzKCdyZWplY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldEJqalJlamVjdGlvbk5vdGVzKHJlamVjdGlvblNpbVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGDXlNee15HXl9efINeg15PXl9eUINeR15TXptec15fXlCEg15TXntep15XXkSDXlNen15zXmdeg15kg16DXqdec15cg15zXnteq15DXntefINeV15TXkNek15zXmden16bXmdeUINei15HXqNeUINec157XpteRINeQ15PXldedOiBcIteU157XkdeX158g15zXkCDXkNeV16nXqCDigJMg16DXk9eo16kg16rXmden15XXn1wiIOKdjGApO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEuNSBiZy1yb3NlLTYwMCBob3ZlcjpiZy1yb3NlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtZXh0cmFib2xkIGJvcmRlciBib3JkZXItcm9zZS01MDAgcm91bmRlZC1sZyB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCB0ZXh0LVsxMC41cHhdIGxlYWRpbmctbm9uZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIPCflLQg15PXl9eUINei150g157XqdeV15Eg15zXqteZ16fXldefXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMGEwYTBhXSBwLTMgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSB0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXppbmMtNDAwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8VXBsb2FkQ2xvdWQgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMFwiPkZpcmViYXNlIENsb3VkIFN0b3JhZ2U6PC9zdHJvbmc+eycgJ31cbiAgICAgICAgICAgICAgICAgIHt1cGxvYWRlZFRvRmlyZWJhc2UgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC00MDAgZm9udC1zZW1pYm9sZFwiPteU15XXotec15Qg16fXldeR16Ug15DXmdep15XXqCDXkdeU16bXnNeX15QgKHthdHRhY2hlZEZpbGVOYW1lfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XkNeZ158g16fXkdem15nXnSDXntem15XXqNek15nXnTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gYmctYmxhY2sgdGV4dC16aW5jLTUwMCBweC0yIHB5LTAuNSByb3VuZGVkIGZvbnQtbW9ub1wiPmJ1Y2tldDovL21lZGljYWxfZGlzY2xhaW1lcnM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIHsvKiBSaWdodCBTaWRlOiBIaWdoIEZpZGVsaXR5IEFuZHJvaWQgTW9iaWxlIFNpbXVsYXRvciAoQ29sIDUpICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMiByZWxhdGl2ZVwiIGlkPVwic2ltdWxhdG9yLXBhbmVsXCI+XG4gICAgICAgICAgXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRBY3RpdmVTY3JlZW4oQXBwU2NyZWVuLlNQTEFTSCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdGl0bGU9XCLXlNeT157XmdeZ16og15zXl9eZ16bXlCDXotecINeQ15nXmden15XXnyDXlNeQ16TXnNeZ16fXpteZ15Qg15zXlNek16LXnNeqINee16HXmiDXlNek16rXmdeX15QgKFNwbGFzaCBTY3JlZW4pXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTQgLW10LTQgbWItMiB6LTIwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBiZy16aW5jLTk1MCBob3ZlcjpiZy16aW5jLTkwMCBib3JkZXIgYm9yZGVyLXppbmMtODAwIHRleHQtemluYy0zMDAgaG92ZXI6dGV4dC1bIzAwN0JGRl0gdGV4dC1bMTAuNXB4XSBmb250LWJsYWNrIGN1cnNvci1wb2ludGVyIHNoYWRvdy1tZCBob3Zlcjpib3JkZXItWyMwMDdCRkZdLzMwIHRyYW5zaXRpb24tYWxsIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgIGRpcj1cInJ0bFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEFjdGl2aXR5IGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtWyMwMDdCRkZdIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgPHNwYW4+15TXp9ec16cg16LXnCDXkNeZ15nXp9eV158g15TXkNek15zXmden16bXmdeUIChTcGxhc2ggU2NyZWVuKSDwn5OxPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTQgLW10LTQgbWItMiB6LTEwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xIHJvdW5kZWQtZnVsbCBiZy1bIzAwN0JGRl0vMTAgdGV4dC1bIzAwN0JGRl0gdGV4dC1bMTBweF0gYm9yZGVyIGJvcmRlci1bIzAwN0JGRl0vMjVcIj5cbiAgICAgICAgICAgIDxTbWFydHBob25lIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHVwcGVyY2FzZSBmb250LW1vbm9cIj5BbmRyb2lkIEVtdWxhdG9yIFtBY3RpdmVdPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEFuZHJvaWRGcmFtZT5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cIndhaXRcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHsvKiBTQ1JFRU4gMDogU1BMQVNIIFNDUkVFTiAqL31cbiAgICAgICAgICAgICAge2FjdGl2ZVNjcmVlbiA9PT0gQXBwU2NyZWVuLlNQTEFTSCAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT1cInNjcmVlbi1zcGxhc2hcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTU1IGJnLWJsYWNrIGZsZXgtMSBmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxBbmltYXRlZFNwbGFzaFNjcmVlbiBvbkNvbXBsZXRlPXsoKSA9PiBzZXRBY3RpdmVTY3JlZW4oQXBwU2NyZWVuLkFVVEgpfSAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogU0NSRUVOIDE6IEFVVEhFTlRJQ0FUSU9OICovfVxuICAgICAgICAgICAgICB7YWN0aXZlU2NyZWVuID09PSBBcHBTY3JlZW4uQVVUSCAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT1cInNjcmVlbi1hdXRoXCJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiAtMjAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTYgaC1mdWxsIHJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpcmVjdGlvbjogJ3J0bCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1bIzAwN0JGRl0vMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNCBib3JkZXIgYm9yZGVyLVsjMDA3QkZGXS8yMCBzaGFkb3ctaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QWN0aXZpdHkgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LVsjMDA3QkZGXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJsYWNrIHRleHQtY2VudGVyIHRleHQtd2hpdGUgdHJhY2tpbmctd2lkZXN0IHVwcGVyY2FzZVwiPlJFQ09WSU8gQUNBREVNWTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1jZW50ZXIgdGV4dC16aW5jLTQwMCBtdC0yXCI+16jXnteqINeQ15nXnteV158g15XXkdeZ15XXnteb16DXmden15Qg157Xqden157XqiDXoteZ15zXkNeZ16o8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIEZpZWxkcyBDb250YWluZXIgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTYgc3BhY2UteS0zLjUgZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtemluYy0zMDAgdGV4dC1yaWdodCBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAge2F1dGhNb2RlID09PSAnUkVHSVNURVInID8gJ9em15XXqCDXl9ep15HXldefINeh16TXldeo15jXkNeZINeX15PXqTonIDogJ9eb16DXmdeh15Qg15zXntei16jXm9eqOid9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICB7YXV0aE1vZGUgPT09ICdSRUdJU1RFUicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC16aW5jLTQwMCBtci0yIGZvbnQtbWVkaXVtXCI+16nXnSDXntec15A8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Z1bGxOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZ1bGxOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLXmdep16jXkNecINeZ16nXqNeQ15zXmVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBiZy1bIzA3MDcwN10gYm9yZGVyIHJvdW5kZWQteGwgcHgtNCBweS0zIHRleHQtc20gdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXI6dGV4dC16aW5jLTYwMCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1bIzAwN0JGRl0vNTAgdHJhbnNpdGlvbi1hbGwgdGV4dC1yaWdodCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lLnRyaW0oKSAhPT0gJycgJiYgIWlzRnVsbE5hbWVWYWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXJvc2UtNTAwLzgwIGZvY3VzOmJvcmRlci1yb3NlLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1bIzFhMWExYV0gZm9jdXM6Ym9yZGVyLVsjMDA3QkZGXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxOYW1lLnRyaW0oKSAhPT0gJycgJiYgIWlzRnVsbE5hbWVWYWxpZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtcm9zZS01MDAgbXItMiBtdC0xIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDXoNeQINec15TXlteZ158g16nXnSDXntec15AgKNek16jXmNeZINeV157Xqdek15fXlClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7YXV0aE1vZGUgPT09ICdSRUdJU1RFUicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC16aW5jLTQwMCBtci0yIGZvbnQtbWVkaXVtXCI+15DXmdee15nXmdecPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNwb3J0QGFjYWRlbXkuY28uaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgYmctWyMwNzA3MDddIGJvcmRlciByb3VuZGVkLXhsIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIHBsYWNlaG9sZGVyOnRleHQtemluYy02MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctWyMwMDdCRkZdLzUwIHRyYW5zaXRpb24tYWxsIHRleHQtcmlnaHQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbC50cmltKCkgIT09ICcnICYmIChlbWFpbEhhc0hlYnJldyB8fCAhaXNFbWFpbFZhbGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXJvc2UtNTAwLzgwIGZvY3VzOmJvcmRlci1yb3NlLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1bIzFhMWExYV0gZm9jdXM6Ym9yZGVyLVsjMDA3QkZGXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2VtYWlsLnRyaW0oKSAhPT0gJycgJiYgZW1haWxIYXNIZWJyZXcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXJvc2UtNTAwIG1yLTIgbXQtMSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg15vXqteV15HXqiDXkNeZ157XmdeZ15wg15fXmdeZ15HXqiDXnNeU15nXldeqINeR15DXoNeS15zXmdeqINeR15zXkdeTXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZW1haWwudHJpbSgpICE9PSAnJyAmJiAhZW1haWxIYXNIZWJyZXcgJiYgIWlzRW1haWxWYWxpZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtcm9zZS01MDAgbXItMiBtdC0xIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDXm9eq15XXkdeqINeQ15nXnteZ15nXnCDXnNeQINeq16fXmdeg15RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTEgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXppbmMtNDAwIG1yLTIgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gJ1JFR0lTVEVSJyA/ICfXnteh16TXqCDXmNec16TXldefJyA6ICfXnteh16TXqCDXmNec16TXldefICjXqdedINee16nXqtee16kpJ31cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBob25lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMDU0MTIzNDU2N1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgYmctWyMwNzA3MDddIGJvcmRlciByb3VuZGVkLXhsIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIHBsYWNlaG9sZGVyOnRleHQtemluYy02MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctWyMwMDdCRkZdLzUwIHRyYW5zaXRpb24tYWxsIHRleHQtcmlnaHQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmUudHJpbSgpICE9PSAnJyAmJiAhL14oMDUwfDA1MnwwNTN8MDU0fDA1NXwwNTgpXFxkezd9JC8udGVzdChwaG9uZS50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLXJvc2UtNTAwLzgwIGZvY3VzOmJvcmRlci1yb3NlLTUwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItWyMxYTFhMWFdIGZvY3VzOmJvcmRlci1bIzAwN0JGRl0nXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtwaG9uZS50cmltKCkgIT09ICcnICYmICEvXigwNTB8MDUyfDA1M3wwNTR8MDU1fDA1OClcXGR7N30kLy50ZXN0KHBob25lLnRyaW0oKSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1yb3NlLTUwMCBtci0yIG10LTEgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDXoNeQINec15TXlteZ158g157Xodek16gg15jXnNek15XXnyDXoNeZ15nXkyDXqten15nXn1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtemluYy00MDAgbXItMiBmb250LW1lZGl1bVwiPteh15nXodee15Q8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJnLVsjMDcwNzA3XSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSBmb2N1czpib3JkZXItWyMwMDdCRkZdIHJvdW5kZWQteGwgcHgtNCBweS0zIHRleHQtc20gdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXI6dGV4dC16aW5jLTYwMCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1bIzAwN0JGRl0vNTAgdHJhbnNpdGlvbi1hbGwgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F1dGhNb2RlID09PSAnTE9HSU4nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJpb21ldHJpY1Byb21wdE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHNocmluay0wIGJnLVsjMDcwNzA3XSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSBob3Zlcjpib3JkZXItWyMwMDdCRkZdIGhvdmVyOmJnLVsjMDA3QkZGXS81IGFjdGl2ZTpiZy1bIzAwN0JGRl0vMTAgdGV4dC1bIzAwN0JGRl0gcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciBzaGFkb3ctbGcgc2hhZG93LVsjMDA3QkZGXS81XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIteU16rXl9eR16jXldeqINeR15nXldee15jXqNeZ16pcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbmdlcnByaW50IGNsYXNzTmFtZT1cInctNSBoLTUgYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2F1dGhFcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXJvc2UtNDAwIHRleHQtcmlnaHQgbXQtMiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IGZvbnQtbWVkaXVtIGxlYWRpbmctcmVsYXhlZCBiZy1yb3NlLTUwMC81IHAtMi41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTUwMC8xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1yb3NlLTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXV0aEVycm9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIFN1Ym1pc3Npb24gYW5kIFN3aXRjaGluZyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBdXRoU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhNb2RlID09PSAnUkVHSVNURVInXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gKCFpc0VtYWlsVmFsaWQgfHwgIWlzUGhvbmVWYWxpZCB8fCAhaXNGdWxsTmFtZVZhbGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICghaXNQaG9uZVZhbGlkIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBweS0zLjUgcm91bmRlZC14bCBmb250LWJvbGQgdGV4dC1zbSB0ZXh0LXdoaXRlIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCB0ZXh0LWNlbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgKGF1dGhNb2RlID09PSAnUkVHSVNURVInICYmICghaXNFbWFpbFZhbGlkIHx8ICFpc1Bob25lVmFsaWQgfHwgIWlzRnVsbE5hbWVWYWxpZCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAoYXV0aE1vZGUgPT09ICdMT0dJTicgJiYgKCFpc1Bob25lVmFsaWQgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXppbmMtODUwIHRleHQtemluYy01MDAgY3Vyc29yLW5vdC1hbGxvd2VkIG9wYWNpdHktNTAgYm9yZGVyIGJvcmRlci1bIzFhMWExYV0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLVsjMDA3QkZGXSBob3ZlcjpiZy1bIzAwNjZERF0gYWN0aXZlOmJnLVsjMDA1NUJCXSBzaGFkb3ctWyMwMDdCRkZdLzE1IGFjdGl2ZTp0cmFuc2xhdGUteS0wLjUgY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7YXV0aE1vZGUgPT09ICdSRUdJU1RFUicgPyAn16bXldeoINeX16nXkdeV158g15XXlNeq15fXnCDXnNeU16rXkNee158nIDogJ9eU16rXl9eR16gnfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QXV0aE1vZGUoYXV0aE1vZGUgPT09ICdSRUdJU1RFUicgPyAnTE9HSU4nIDogJ1JFR0lTVEVSJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBdXRoRXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC14cyB0ZXh0LVsjMDA3QkZGXSBob3Zlcjp1bmRlcmxpbmUgdHJhbnNpdGlvbi1hbGwgZm9udC1zZW1pYm9sZCBweS0yIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHthdXRoTW9kZSA9PT0gJ1JFR0lTVEVSJyA/ICfXm9eR16gg15nXqSDXnNeaINeX16nXkdeV158/INeU16rXl9eR16gg15vXkNefJyA6ICfXoNeo16nXnSDXl9eT16k/INeU16jXqdedINei15vXqdeZ15Ug15XXlNeq15fXnCDXnNeU16rXkNee158nfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogQW5kcm9pZCBCaW9tZXRyaWMgRGlhbG9nIEJvdHRvbSBPdmVybGF5ICovfVxuICAgICAgICAgICAgICAgICAge2Jpb21ldHJpY1Byb21wdE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svNjAgYmFja2Ryb3AtYmx1ci1zbSB6LTQwIHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTUwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogMTUwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctWyMxMjEyMTJdIGJvcmRlci10IGJvcmRlci16aW5jLTgwMCByb3VuZGVkLXQtM3hsIHAtNiB0ZXh0LXJpZ2h0IGZsZXggZmxleC1jb2wgZ2FwLTUgc2hhZG93LTJ4bCByZWxhdGl2ZSB6LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpcmVjdGlvbjogJ3J0bCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTE0IGgtMTQgcm91bmRlZC1mdWxsIGJnLVsjMDA3QkZGXS8xNSBib3JkZXIgYm9yZGVyLVsjMDA3QkZGXS8zMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjMDA3QkZGXSBtYi0zIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFiaW9tZXRyaWNTdWNjZXNzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbmdlcnByaW50IGNsYXNzTmFtZT1cInctNyBoLTcgdGV4dC1bIzAwN0JGRl0gYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03IGgtNyB0ZXh0LWVtZXJhbGQtNTAwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1lbWVyYWxkLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGVcIj7XkNeZ157XldeqINeR15nXldee15jXqNeZIChSZWNvdmlvIEFjYWRlbXkpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXppbmMtNDAwIG10LTFcIj7XlNeg15cg15DXqiDXlNeQ16bXkdeiINei15wg15fXmdeZ16nXnyDXmNeR15nXoteqINeU15DXpteR16Ig15vXk9eZINec15TXqteX15HXqDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmlvbWV0cmljU3VjY2VzcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtY2VudGVyIHRleHQtZW1lcmFsZC00MDAgZm9udC1ib2xkIGJnLWVtZXJhbGQtOTUwLzIwIHB5LTIgcHgtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZW1lcmFsZC05MDAvMzAgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINeW15nXlNeV15kg15TXldep15zXnSDXkdeU16bXnNeX15QhINee16rXl9eR16guLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zIG10LTIgYm9yZGVyLXQgYm9yZGVyLXppbmMtOTAwIHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJpb21ldHJpY1Byb21wdE9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmlvbWV0cmljU3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC01IHB5LTIuNSB0ZXh0LXhzIHRleHQtemluYy00MDAgZm9udC1ib2xkIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg15HXmdeY15XXnFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyFiaW9tZXRyaWNTdWNjZXNzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpbXVsYXRlQmlvbWV0cmljU3VjY2Vzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMi41IHRleHQteHMgYmctWyMwMDdCRkZdIGhvdmVyOmJnLVsjMDA2NkREXSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgZm9udC1ib2xkIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXlNeT157XmdeZ16og157XkteiINeQ16bXkdeiIPCfkY1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogU0NSRUVOOiBFTUFJTCBWRVJJRklDQVRJT04gKE9UUCkgKi99XG4gICAgICAgICAgICAgIHthY3RpdmVTY3JlZW4gPT09IEFwcFNjcmVlbi5FTUFJTF9WRVJJRklDQVRJT04gJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9XCJzY3JlZW4tZW1haWwtdmVyaWZpY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiAtMjAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTYgaC1mdWxsIHJlbGF0aXZlIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlyZWN0aW9uOiAncnRsJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLVsjMDA3QkZGXS8xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi00IGJvcmRlciBib3JkZXItWyMwMDdCRkZdLzIwIHNoYWRvdy1pbm5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMb2NrIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1bIzAwN0JGRl1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJvbGQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPteQ15nXnteV16og15vXqteV15HXqiDXkNeZ157XmdeZ15w8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtemluYy00MDAgdGV4dC1jZW50ZXIgbXQtMyBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICDXqdec15fXoNeVINen15XXkyDXkNeZ157XldeqINec15vXqteV15HXqiDXlNee15nXmdecINep15zXmi4g16DXkCDXnNeU15bXmdefINeQ15XXqteVINeb15DXnyDXm9eT15kg15zXlNee16nXmdeaLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXppbmMtMzAwIG10LTEgZm9udC1tb25vIHRleHQtY2VudGVyIHRydW5jYXRlIG1heC13LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogRGlnaXQgSW5wdXRzIEdyaWQgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGdhcC0yXCIgZGlyPVwibHRyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge290cERpZ2l0cy5tYXAoKGRpZ2l0LCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRm9jdXNlZCA9IGZvY3VzZWRPdHBJbmRleCA9PT0gaWR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BvdHAtJHtpZHh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbMC05XSpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TW9kZT1cIm51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWdpdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c2VkT3RwSW5kZXgoaWR4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAmJiAhL15cXGQrJC8udGVzdCh2YWwpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHREaWdpdHMgPSBbLi4ub3RwRGlnaXRzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHREaWdpdHNbaWR4XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE90cERpZ2l0cyhuZXh0RGlnaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE90cEVycm9yKG51bGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBdXRvIGZvY3VzIG5leHQgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwgIT09ICcnICYmIGlkeCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gaWR4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNlZE90cEluZGV4KG5leHRJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvdHAtJHtuZXh0SW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRJbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50KS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5leHRJbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG90cERpZ2l0c1tpZHhdID09PSAnJyAmJiBpZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dERpZ2l0cyA9IFsuLi5vdHBEaWdpdHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHREaWdpdHNbaWR4IC0gMV0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPdHBEaWdpdHMobmV4dERpZ2l0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldkluZGV4ID0gaWR4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGb2N1c2VkT3RwSW5kZXgocHJldkluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBvdHAtJHtwcmV2SW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldklucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcmV2SW5wdXQgYXMgSFRNTElucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByZXZJbnB1dCBhcyBIVE1MSW5wdXRFbGVtZW50KS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dERpZ2l0cyA9IFsuLi5vdHBEaWdpdHNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHREaWdpdHNbaWR4XSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE90cERpZ2l0cyhuZXh0RGlnaXRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMCBoLTEyIGJnLXdoaXRlIHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1ibGFjayBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGZvbnQtbW9ubyAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2N1c2VkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItWzMuNXB4XSBib3JkZXItWyMwMDdCRkZdIHNjYWxlLTEwNSBzaGFkb3ctWzBfMF8yMnB4X3JnYmEoMCwxMjMsMjU1LDAuODUpLF8wXzBfOHB4X3JnYmEoMCwxMjMsMjU1LDAuNDUpXScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlciBib3JkZXItemluYy0yMDAgaG92ZXI6Ym9yZGVyLXppbmMtMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge290cEVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcm9zZS00MDAgdGV4dC1jZW50ZXIgbXQtNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IGZvbnQtbWVkaXVtIGxlYWRpbmctcmVsYXhlZCBiZy1yb3NlLTUwMC81IHAtMi41IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yb3NlLTUwMC8xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1yb3NlLTQwMCBzaHJpbmstMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57b3RwRXJyb3J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogU3VibWl0ICYgUmVzZW5kIENvbnRyb2xzICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGVyZWRDb2RlID0gb3RwRGlnaXRzLmpvaW4oJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGVyZWRDb2RlLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3RwRXJyb3IoJ9eQ16DXkCDXlNeW158g16fXldeTINeQ15nXnteV16og157XnNeQINeb15PXmSDXnNeU157XqdeZ15ouJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVNjcmVlbihBcHBTY3JlZW4uTUVESUNBTF9XQVZFKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zLjUgcm91bmRlZC14bCBiZy1bIzAwN0JGRl0gaG92ZXI6YmctWyMwMDY2RERdIGFjdGl2ZTpiZy1bIzAwNTVCQl0gZm9udC1ib2xkIHRleHQtc20gdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LVsjMDA3QkZGXS8xNSBhY3RpdmU6dHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgINeQ157XqiDXp9eV15Mg15XXlNee16nXmlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAge290cENvdW50ZG93biA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtemluYy01MDAgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgINeg15nXqtefINec16nXnNeV15cg16fXldeTINeX15PXqSDXkdei15XXkyA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtWyMwMDdCRkZdXCI+e290cENvdW50ZG93bn08L3NwYW4+INep16DXmdeV16pcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3RwQ291bnRkb3duKDMwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPdHBEaWdpdHMoQXJyYXkoNikuZmlsbCgnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE90cEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtWyMwMDdCRkZdIGhvdmVyOnVuZGVybGluZSBob3Zlcjp0ZXh0LVsjMDA2NkREXSB0cmFuc2l0aW9uLWFsbCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDXqdec15cg16nXldeRXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU2NyZWVuKEFwcFNjcmVlbi5BVVRIKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgdGV4dC14cyB0ZXh0LXppbmMtNTAwIGhvdmVyOnRleHQtemluYy0zMDAgcHktMSBob3Zlcjp1bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg15fXlteV16gg15zXnteh15og15TXlNeo16nXnteUXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBTQ1JFRU4gMjogTUVESUNBTCBESVNDTEFJTUVSICovfVxuICAgICAgICAgICAgICB7YWN0aXZlU2NyZWVuID09PSBBcHBTY3JlZW4uTUVESUNBTF9XQVZFICYmIChcbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAga2V5PVwic2NyZWVuLW1lZGljYWxcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAyMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHAtNiBoLWZ1bGwgcmVsYXRpdmUgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXJlY3Rpb246ICdydGwnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFydCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcm9zZS01MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtd2hpdGVcIj7XlNem15TXqNeqINeR16jXmdeQ15XXqiDXldeq16DXkNeZINep15nXnteV16k8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXppbmMtNDAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgINee16rXkNee158v16og15nXp9eoL9eULCDXotecINee16DXqiDXnNeU16rXkNeZ150g15zXmiDXqteg15DXmSDXkNeZ157XldefINeQ15XXpNeY15nXntec15nXmdedINeV15zXkdem16Ig157Xoten15Eg15HXmNeZ15fXldeqINeR15zXqteZINee16rXpNep16gsINeQ16DXkCDXoteg15Qg16LXnCDXlNem15TXqNeqINeU15HXqNeZ15DXldeqINeU15HXkNeUOlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIFllcy9ObyBNYW5kYXRvcmllcyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBzcGFjZS15LTQgbWF4LWgtWzM1MHB4XSBvdmVyZmxvdy15LWF1dG8gcHItMSBzdHlsZS1zY3JvbGxiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMTExMTExXSB0by1bIzA1MDUwNV0gYm9yZGVyIGJvcmRlci1bIzFhMWExYV0gcC0zIHJvdW5kZWQteGwgZmxleCBmbGV4LWNvbCBnYXAtMiBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC16aW5jLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgMS4g15TXkNedINeo15XXpNeQINeQ157XqCDXnNeaINek16LXnSDXqdeZ16kg15zXmiDXkdei15nXmdeqINec15Eg15vXnNep15TXmSDXkNeVINec15fXpSDXk9edINeX16jXmdeSP1xuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UUhlYXJ0SGVhbHRoKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxSGVhcnRIZWFsdGggPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMDA3QkZGXSBib3JkZXItWyMwMDY2RERdIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1bIzAwN0JGRl0vMTUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1bIzA3MDcwN10gYm9yZGVyLVsjMWExYTFhXSBob3ZlcjpiZy16aW5jLTkwMCB0ZXh0LXppbmMtNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg15vXn1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFFIZWFydEhlYWx0aChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFIZWFydEhlYWx0aCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMDA3QkZGXSBib3JkZXItWyMwMDY2RERdIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1bIzAwN0JGRl0vMTUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1bIzA3MDcwN10gYm9yZGVyLVsjMWExYTFhXSBob3ZlcjpiZy16aW5jLTkwMCB0ZXh0LXppbmMtNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg15zXkFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzExMTExMV0gdG8tWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHAtMyByb3VuZGVkLXhsIGZsZXggZmxleC1jb2wgZ2FwLTIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtemluYy0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDIuINeU15DXnSDXmdepINec15og15TXkteR15zXldeqINek15nXlteZ15XXqiwg15vXkNeR15nXnSDXm9eo15XXoNeZ15nXnSDXkNeVINeR16LXmdeV16og157XpNeo16fXmdedINek16LXmdec15XXqiDXlNee15XXoNei15nXnSDXntee15og15zXlNeq15DXntefP1xuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UUNvbnN0cmFpbnRzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweS0xLjUgcm91bmRlZC1sZyB0ZXh0LXhzIGZvbnQtYm9sZCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxQ29uc3RyYWludHMgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMDA3QkZGXSBib3JkZXItWyMwMDY2RERdIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1bIzAwN0JGRl0vMTUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1bIzA3MDcwN10gYm9yZGVyLVsjMWExYTFhXSBob3ZlcjpiZy16aW5jLTkwMCB0ZXh0LXppbmMtNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg15vXn1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFFDb25zdHJhaW50cyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFDb25zdHJhaW50cyA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMDA3QkZGXSBib3JkZXItWyMwMDY2RERdIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1bIzAwN0JGRl0vMTUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1bIzA3MDcwN10gYm9yZGVyLVsjMWExYTFhXSBob3ZlcjpiZy16aW5jLTkwMCB0ZXh0LXppbmMtNDAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg15zXkFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzExMTExMV0gdG8tWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHAtMyByb3VuZGVkLXhsIGZsZXggZmxleC1jb2wgZ2FwLTIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtemluYy0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDMuINeU15DXnSDXkNeZ15HXk9eqINek16LXnSDXkdei16fXkdeV16og16HXl9eo15fXldeo16og16nXmdeV15XXmSDXntep16fXnCwg16fXldem16gg16DXqdeZ157XlCDXl9eo15nXoyDXkNeVINeU15vXqNeUP1xuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UUJhbGFuY2UodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFCYWxhbmNlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1bIzAwN0JGRl0gYm9yZGVyLVsjMDA2NkREXSB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctWyMwMDdCRkZdLzE1J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctWyMwNzA3MDddIGJvcmRlci1bIzFhMWExYV0gaG92ZXI6YmctemluYy05MDAgdGV4dC16aW5jLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgINeb159cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRQmFsYW5jZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTEuNSByb3VuZGVkLWxnIHRleHQteHMgZm9udC1ib2xkIGJvcmRlciB0cmFuc2l0aW9uLWFsbCBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHFCYWxhbmNlID09PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctWyMwMDdCRkZdIGJvcmRlci1bIzAwNjZERF0gdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LVsjMDA3QkZGXS8xNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLVsjMDcwNzA3XSBib3JkZXItWyMxYTFhMWFdIGhvdmVyOmJnLXppbmMtOTAwIHRleHQtemluYy00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDXnNeQXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIENoZWNrYm94IExpYWJpbGl0eSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yLjUgcHktMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJsaWFiaWxpdHktY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGlhYmlsaXR5V2FpdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMaWFiaWxpdHlXYWl2ZXIoZS50YXJnZXQuY2hlY2tlZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQuNSBoLTQuNSBtdC0wLjUgYm9yZGVyLVsjMWExYTFhXSBhY2NlbnQtWyMwMDdCRkZdIHJvdW5kZWQgYmctWyMwNzA3MDddXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGlhYmlsaXR5LWNoZWNrYm94XCIgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gbGVhZGluZy1yZWxheGVkIHRleHQtemluYy0zMDAgY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINeQ16DXmSDXntem15TXmdeoINeb15kg15DXoNeZINeR16jXmdeQINek15nXlteZ16og15XXnteh15nXqCDXkNeX16jXmdeV16og157Xqdek15jXmdeqINee16TXoteZ15zXldeqINeU15DXp9eT157XmdeUINeV16bXldeV16og15TXqdeZ16fXldedINeV15TXkNeZ157Xldeg15nXnS5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7bWVkaWNhbEVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcm9zZS00MDAgdGV4dC1yaWdodCBtdC0xIGJnLXJvc2UtOTUwLzIwIHAtMiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcm9zZS05NTAvMzAgbGVhZGluZy1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZWRpY2FsRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVkaWNhbFN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgcm91bmRlZC14bCBiZy1bIzAwN0JGRl0gaG92ZXI6YmctWyMwMDY2RERdIGFjdGl2ZTpiZy1bIzAwNTVCQl0gZm9udC1ib2xkIHRleHQtc20gdGV4dC13aGl0ZSBzaGFkb3ctbWQgc2hhZG93LVsjMDA3QkZGXS8xMCBhY3RpdmU6dHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg15TXntep15og15zXqdeQ15zXldefINeU16rXkNee15RcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogU0NSRUVOIDIgKEZST1pFTiBTVEFURSk6IFNBRkVUWSBERVRFTlRJT04gKi99XG4gICAgICAgICAgICAgIHthY3RpdmVTY3JlZW4gPT09IEFwcFNjcmVlbi5NRURJQ0FMX0ZSRUVaRSAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT1cInNjcmVlbi1mcmVlemVcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NSB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHAtNiBoLWZ1bGwgcmVsYXRpdmUgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXJlY3Rpb246ICdydGwnIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS1hdXRvIHNwYWNlLXktNCBtYXgtaC1bNTAwcHhdIG92ZXJmbG93LXktYXV0byBwci0xIHN0eWxlLXNjcm9sbGJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLXhsIGJnLXJvc2UtNjAwLzEwIGJvcmRlciBib3JkZXItcm9zZS01MDAvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi0yIHNlbGVjdC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNoaWVsZEFsZXJ0IGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1yb3NlLTUwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXJvc2UtNTAwXCI+4pqg77iPINeX16HXnSDXkdeY15nXl9eV16og16jXpNeV15DXmSDXkNen15jXmdeR15k8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtY2VudGVyIHRleHQtemluYy0zMDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAg15fXnNenINee16rXqdeV15HXldeq15nXmiDXlNei15nXk9eVINei15wg157XkteR15zXldeqLCDXkdei15nXmdeqINec15Eg15DXlSDXoteZ15zXpNeV158uINeS15nXqdeq15og15zXkNeZ157Xldeg15nXnSDXkdeQ16TXnNeZ16fXpteZ15Qg15TXlden16TXkNeUINeR15DXldek158g15bXnteg15kg15XXnNeQINeg15nXqtefINec15TXntep15nXmiDXnNec15Ag15HXk9eZ16fXlCDXp9ec15nXoNeZ16og15DXlSDXpteo15XXoyDXkNeZ16nXldeoINep15wg16jXldek15Ag15HXqteV16fXoy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzExMTExMV0gdG8tWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHAtNCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGdhcC0zIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+16rXmdeQ15XXnSDXkdeT15nXp9eUINen15zXmdeg15nXqiDXkNeZ16nXmdeqINeR16jXkNep15xcItemPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXppbmMtNDAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg15TXp9ec15nXoNeZ16fXlCDXnteZ15XXoteT16og15zXkdeX15nXoNeUINeR15nXldee15vXoNeZ16og157XnNeQ15Qg16nXnCDXlNec15Eg15XXlNee16TXqNen15nXnSDXnNep15zXmdec16og16HXntee16DXmSDXodeZ15vXldefLlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmdWxsTmFtZS50cmltKCkgfHwgJ9eh16TXldeo15jXkNeZJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnID0gYNep15zXldedLCDXqdee15kgJHtuYW1lfSwg15TXktei16rXmSDXk9eo15og15TXkNek15zXmden16bXmdeUINep15zXm9edIFJlY292aW8gQWNhZGVteS4g15DXoNeZINee16LXldeg15nXmdefINec16fXkdeV16Ig16rXldeoINec16fXnNeZ16DXmden15QuYDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vd2EubWUvOTcyNTg3ODU4NzA4P3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQobXNnKX1gLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSB0ZXh0LXhzIGZvbnQtYm9sZCBiZy1bIzAwN0JGRl0gaG92ZXI6YmctWyMwMDY2RERdIGFjdGl2ZTpiZy1bIzAwNTVCQl0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDXqteZ15DXldedINeR15PXmden15Qg16fXnNeZ16DXmdeqINeQ15nXqdeZ16og15HXqNeQ16nXnFwi16YgKFdoYXRzQXBwKSDinJTvuI9cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMTExMTExXSB0by1bIzA1MDUwNV0gYm9yZGVyIGJvcmRlci1bIzFhMWExYV0gcC00IHJvdW5kZWQtMnhsIGZsZXggZmxleC1jb2wgZ2FwLTIgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj7XmdepINec15kg15DXmdep15XXqCDXqNek15XXkNeZINeR16rXlden16MgKNeU16LXnNeQ15QpPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXppbmMtNDAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINeU16LXnNeUINem15nXnNeV150g15DXmdep15XXqCDXqNek15XXkNeZINeX16rXldedINei15wg15nXk9eZINeo15XXpNeQINeU157XkNep16gg15zXm9edINec15TXqteQ157XnyDXkdeQ15nXnteV16DXmdedINei16bXmdee15nXnS5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogRmlsZSBQaWNrZXIgRHJhZyBzaW11bGF0ZWQgd3JhcHBlciAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2hhbmRsZURyYWdPdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXtoYW5kbGVEcm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLVsjMWExYTFhXSBob3Zlcjpib3JkZXItWyMwMDdCRkZdLzUwIGJnLWJsYWNrLzQwIGhvdmVyOmJnLVsjMDcwNzA3XSBwLTQgcm91bmRlZC14bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKixhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkQ2xvdWQgY2xhc3NOYW1lPVwidy02IGgtNiB0ZXh0LVsjMDA3QkZGXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtNDAwIHNlbGVjdC1ub25lXCI+15zXl9elINec15HXl9eZ16jXqiDXp9eV15HXpSDXkNeVINeS16jXldeoINec15vXkNefPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2F0dGFjaGVkRmlsZU5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtYm9sZCBibG9jayBiZy1lbWVyYWxkLTk1MC8zMCBweC0yIHB5LTAuNSByb3VuZGVkIGJvcmRlciBib3JkZXItZW1lcmFsZC05MDAvMzAgYW5pbWF0ZS1wdWxzZSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2F0dGFjaGVkRmlsZU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgIHtpc1VwbG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyMwMDdCRkZdIHRleHQtY2VudGVyIGFuaW1hdGUtcHVsc2UgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICDXntei15zXlCDXp9eV15HXpSDXnC1GaXJlYmFzZSBDbG91ZCBTdG9yYWdlLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAge3VwbG9hZGVkVG9GaXJlYmFzZSAmJiAhaXNVcGxvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1lbWVyYWxkLTQwMCBmb250LWJvbGQgdGV4dC1jZW50ZXIgbXQtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPiDXlNeV16LXnNeUINec16HXmNeV16jXkicg15HXlNem15zXl9eUIVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIHB0LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU92ZXJyaWRlVW5sb2NrfVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdXBsb2FkZWRUb0ZpcmViYXNlfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBweS0zLjUgcm91bmRlZC14bCBmb250LWJvbGQgdGV4dC14cyB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIHRleHQtY2VudGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRlZFRvRmlyZWJhc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZW1lcmFsZC02MDAgaG92ZXI6YmctZW1lcmFsZC01MDAgYWN0aXZlOmJnLWVtZXJhbGQtNzAwIHNoYWRvdy1tZCBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctWyMwYTBhMGFdIHRleHQtemluYy02NTAgY3Vyc29yLW5vdC1hbGxvd2VkIGJvcmRlciBib3JkZXItWyMxYjFiMWJdJ1xuICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAg16nXnNeXINeV16TXqteXINeQ16TXnNeZ16fXpteZ15RcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVNjcmVlbihBcHBTY3JlZW4uTUVESUNBTF9XQVZFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFFIZWFydEhlYWx0aChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFFDb25zdHJhaW50cyhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFFCYWxhbmNlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXBsb2FkZWRUb0ZpcmViYXNlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtemluYy01MDAgaG92ZXI6dGV4dC16aW5jLTMwMCBweS0xIGhvdmVyOnVuZGVybGluZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICDXl9eW15XXqCDXldei15PXm9efINeU16bXlNeo16og15HXqNeZ15DXldeqXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBTQ1JFRU4gMzogT05CT0FSRElORyBJTlRFTlNJRklFRCBRVUVTVElPTk5BSVJFICovfVxuICAgICAgICAgICAgICB7YWN0aXZlU2NyZWVuID49IEFwcFNjcmVlbi5PTkJPQVJEX1ExICYmIGFjdGl2ZVNjcmVlbiA8PSBBcHBTY3JlZW4uT05CT0FSRF9RNCAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17YHNjcmVlbi1vbmJvYXJkLSR7b25ib2FyZFN0ZXB9YH1cbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiAtMjAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTYgaC1mdWxsIHJlbGF0aXZlIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlyZWN0aW9uOiAncnRsJyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtWyMwMDdCRkZdIHRyYWNraW5nLXdpZGUgZm9udC1tZWRpdW0gZm9udC1tb25vXCI+16nXkNec15XXnyDXp9ec15nXmNeUINee15TXmdeoIChGaXJlc3RvcmUpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC0xXCI+16nXnNeRIHtvbmJvYXJkU3RlcH0g157XqteV15ogNDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogUHJvZ3Jlc3MgQmFyIGluZGljYXRvciAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0xIGJnLVsjMTExMTExXSByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgYmctWyMwMDdCRkZdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7b25ib2FyZFN0ZXAgKiAyNX0lYCB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBTdGVwIDQ6IEN1cnJlbnQgUGFpbiBMZXZlbHMgKi99XG4gICAgICAgICAgICAgICAgICB7b25ib2FyZFN0ZXAgPT09IDQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG8gc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNFwiPtee15TXmSDXqNee16og15TXm9eQ15Eg15TXoNeV15vXl9eZ16og16nXnNeaINeR157XkNee16U/PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICB7KFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6IFBhaW5MZXZlbC5OT05FLCBsYWJlbDogJ/Cfn6Ig15zXnNeQINeb15DXkSDXm9ec15wnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBQYWluTGV2ZWwuTUlMRCwgbGFiZWw6ICfwn5+hINeo15LXmdep15XXqiAvINeb15DXkSDXp9ecINeV16DXodeR15wnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiBQYWluTGV2ZWwuU0VWRVJFLCBsYWJlbDogJ/CflLQg15vXkNeRINee16nXkdeZ16ogKNee15XXoNeiINeR15nXpteV16Ig16rXoNeV16LXlCDXnteV16jXm9eR16opJyB9XG4gICAgICAgICAgICAgICAgICAgICAgXSBhcyBjb25zdCkubWFwKChwYWluKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGFpbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFFQYWluKHBhaW4uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgdGV4dC1yaWdodCBweC00IHB5LTMgdGV4dC14cyBmb250LXNlbWlib2xkIHJvdW5kZWQteGwgYm9yZGVyIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcVBhaW4gPT09IHBhaW4uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMDA3QkZGXSB0ZXh0LXdoaXRlIGJvcmRlci1bIzAwNjZERF0gc2hhZG93LW1kIHNoYWRvdy1bIzAwN0JGRl0vMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMTExMTExXSB0by1bIzA1MDUwNV0gYm9yZGVyIGJvcmRlci1bIzFhMWExYl0gaG92ZXI6YmctWyMwYzBjMGNdIHRleHQtemluYy0zMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFpbi5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtvbmJvYXJkU3RlcCA9PT0gNCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzYXZlT25ib2FyZGluZ1RvRmlyZXN0b3JlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgYmctWyMwMDdCRkZdIGhvdmVyOmJnLVsjMDA2NkREXSBhY3RpdmU6YmctWyMwMDU1QkJdIHJvdW5kZWQteGwgdGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LVsjMDA3QkZGXS8xNSBhY3RpdmU6dHJhbnNsYXRlLXktMC41IHRyYW5zaXRpb24tYWxsIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDXlNep15zXnSDXlNeo16nXnteUINeV16TXqteXINee16HXmiDXkdeZ16og4pyU77iPXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7b25ib2FyZFN0ZXAgPiAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPbmJvYXJkU3RlcChvbmJvYXJkU3RlcCAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIHRleHQteHMgdGV4dC16aW5jLTUwMCBob3Zlcjp0ZXh0LXppbmMtMzAwIHB5LTEgaG92ZXI6dW5kZXJsaW5lIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICDXl9eW15XXqCDXnNep15zXkSDXlNen15XXk9edXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIFNDUkVFTiA0OiBIT01FIFNDUkVFTiAmIENIQU5ORUxTICovfVxuICAgICAgICAgICAgICB7YWN0aXZlU2NyZWVuID09PSBBcHBTY3JlZW4uTUFJTl9BUFAgJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9XCJzY3JlZW4tbWFpbi1hcHBcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGgtZnVsbCByZWxhdGl2ZSB0ZXh0LXJpZ2h0IGJnLWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpcmVjdGlvbjogJ3J0bCcgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBBY3RpdmUgVGFiIFNjcmVlbiBSb3V0aW5nICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcC01IG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgey8qIFRBQiAxOiBIT01FIChQT1JUQUxTICYgRFJJTExTKSAqL31cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IEJvdHRvbVRhYi5IT01FICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogQXRobGV0ZSB3ZWxjb21lIGJhbm5lciAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1bIzFhMWExYV0gcGItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyMwMDdCRkZdIGZvbnQtZXh0cmFib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1tb25vXCI+15TXnteq15DXntefINee15fXldeR16g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWJsYWNrIHRleHQtd2hpdGVcIj57ZnVsbE5hbWUgfHwgJ9eh16TXldeo15jXkNeZINei15zXmdeqJ30g4pqhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJnLWVtZXJhbGQtOTUwLzYwIHRleHQtZW1lcmFsZC00MDAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTkwMC80NSBweC0yIHB5LTAuNSByb3VuZGVkIGZvbnQtbW9ubyBmb250LW1lZGl1bVwiPteb15DXkToge3FQYWluID09PSBQYWluTGV2ZWwuTk9ORSA/ICfXnNec15AnIDogcVBhaW4gPT09IFBhaW5MZXZlbC5NSUxEID8gJ9en15wnIDogJ9ee16nXkdeZ16onfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogNCBTcG9ydCBQb3J0YWxzIFNlbGVjdG9yIENhcmRzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtemluYy00MDAgbWItMyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1yaWdodFwiPtek15XXqNeY15zXmdedINeh16TXldeo15jXmdeR15nXmdedPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KE9iamVjdC5rZXlzKFNQT1JUX0lORk8pIGFzIFNwb3J0VHlwZVtdKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gU1BPUlRfSU5GT1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRTcG9ydCA9PT0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTcG9ydChrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQteGwgYm9yZGVyIHRleHQtcmlnaHQgZmxleCBmbGV4LWNvbCBnYXAtMSB0cmFuc2l0aW9uLWFsbCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjMDA3QkZGXS8xMCBib3JkZXItWyMwMDdCRkZdIHRleHQtd2hpdGUgc2hhZG93LW1kIHNoYWRvdy1bIzAwN0JGRl0vMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzExMTExMV0gdG8tWyMwNTA1MDVdIGJvcmRlci1bIzFhMWExYl0gaG92ZXI6YmctWyMwYzBjMGNdIHRleHQtemluYy00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCB3LTggaC04IGJnLVsjMDA3QkZGXSByb3VuZGVkLWJsLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1bOHB4XSBmb250LWJvbGQgdGV4dC13aGl0ZSBwbC0yIHBiLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDinJRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntzLmljb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtNDAwIGxlYWRpbmctbm9ybWFsIG10LTIuNSBiZy1ibGFjay82MCBwLTIuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyMxYTFhMWJdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1NQT1JUX0lORk9bc2VsZWN0ZWRTcG9ydF0udGFnbGluZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkU3BvcnQgPT09IFNwb3J0VHlwZS5CSkogPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IHB0LTQgdGV4dC1yaWdodCBhbmltYXRlLWZhZGVJbiByZWxhdGl2ZVwiIGRpcj1cInJ0bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEYXNoYm9hcmQgSGVhZGVyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjMWExYTFhXSBwYi00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyMwMDdCRkZdIGZvbnQtZXh0cmFib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlc3QgZm9udC1tb25vXCI+16TXldeo15jXnCDXp9ec15nXoNeZINec15zXldeX157XmSBCSko8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSBtdC0xXCI+16rXldeb16DXmdeqINep15nXp9eV150g15XXqdeZ16TXldeoINecLdeSJ9eZ15Ug15In15nXmNeh15Ug15XXkteo15DXpNec15nXoNeSIPCfpYs8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC16aW5jLTQwMCBtdC0xIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXpNeo15XXmNeV16fXldecINek16jXldeS16jXodeZ15HXmSDXqtec16ot16nXnNeR15kg15nXmdei15XXk9eZINec15TXldeo15PXqiDXoteV157XodeZ150sINeX15nXlteV16cg157XpNeo16fXmSDXlNem15XXldeQ16gg15XXlNeQ16bXkdei15XXqiwg15XXqdeZ157XldeoINeY15XXldeX15kg15nXqNeaINei157Xlden15nXnSDXnNee16DXmdei16og16TXpteZ16LXldeqINei15wg15TXnteW16jXny5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMZXZlbCBQcm9ncmVzcyB0aW1lbGluZSAtIExldmVsIGpvdXJuZXkgKDMgTGV2ZWxzKSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBiZy1bIzA4MDgwYV0gcC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci16aW5jLTkwMC84NSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctMjQgaC0yNCBiZy1bIzAwN0JGRl0vNSByb3VuZGVkLWZ1bGwgYmx1ci0yeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgZm9udC1ib2xkIHRleHQtemluYy00MDAgcGItMSBweC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPteo157XqiDXlNeq15XXm9eg15nXqiAoR2xvYmFsIExldmVsKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctWyMwMDdCRkZdLzEwIHRleHQtWyMwMDdCRkZdIGJvcmRlciBib3JkZXItWyMwMDdCRkZdLzI1IHB4LTIgcHktMC41IHJvdW5kZWQgdGV4dC1bMTBweF0gZm9udC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiampDdXJyZW50TGV2ZWwgPT09IDEgPyAn16nXnNeRINeU15HXodeZ16EnIDogYmpqQ3VycmVudExldmVsID09PSAyID8gJ9ep15zXkSDXlNei157XodeUJyA6ICfXqdec15Eg16nXmdeQINeU15HXmdem15XXoNeZ15nXnSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweS00IHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENvbm5lY3RpbmcgUHJvZ3Jlc3MgQmFyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMTAgcmlnaHQtMTAgaC1bM3B4XSBiZy16aW5jLTkwMCB0b3AtWzMxcHhdIC16LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzAwN0JGRl0gdmlhLVsjMDBjOGZmXSB0by1bIzAwN0JGRl0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHNoYWRvdy1bMF8wXzEwcHhfcmdiYSgwLDEyMywyNTUsMC40KV1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBgJHtiampDdXJyZW50TGV2ZWwgPT09IDEgPyAnMCUnIDogYmpqQ3VycmVudExldmVsID09PSAyID8gJzUwJScgOiAnMTAwJSd9YCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtbMSwgMiwgM10ubWFwKChsdmwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBLZWVwIExldmVsIDEgYWN0aXZlICh1bmxvY2tlZCksIExldmVsIDIgJiAzIGxvY2tlZCB3aXRoIHRvYXN0IG1lc3NhZ2UgYWxlcnQgdG8gZmluaXNoIGxldmVsIDEgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1VubG9ja2VkID0gbHZsID09PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBsdmwgPT09IGJqalNlbGVjdGVkTGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZXZlbE5hbWUgPSBsdmwgPT09IDEgPyAn15HXodeZ16EnIDogbHZsID09PSAyID8gJ9eU16LXnNeQ16og16LXldee16EnIDogJ9ep15nXkCDXkdeZ16bXldei15nXnSc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2x2bH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1VubG9ja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampTZWxlY3RlZExldmVsKGx2bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampTZWxlY3RlZFdlZWtWaWV3KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQmpqVG9hc3QoXCLXoNeQINec16HXmdeZ150g15DXqiDXlNeo157XlCDXlNeg15XXm9eX15nXqiDXldec15TXkteZ16kg157XkdeX158g157XoteR16gg15vXk9eZINec16TXqteV15cg16nXnNeRINeW15QuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgei0xMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgb3V0bGluZS1ub25lIGN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTkgaC05IHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzAwN0JGRl0gdG8tWyMwMGM2ZmZdIHRleHQtd2hpdGUgcmluZy00IHJpbmctWyMwMDdCRkZdLzIwIHNoYWRvdy1bMF8wXzIwcHhfcmdiYSgwLDEyMywyNTUsMC43KV0gYm9yZGVyIGJvcmRlci13aGl0ZS8yMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNDb21wbGV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZW1lcmFsZC05NTAvODAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtNTAwIHNoYWRvdy1bMF8wXzhweF9yZ2JhKDE2LDE4NSwxMjksMC4yKV0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNVbmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLXppbmMtOTAwIHRleHQtemluYy0yMDAgYm9yZGVyIGJvcmRlci16aW5jLTcwMCBob3Zlcjpib3JkZXItemluYy01MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctemluYy05NTAgdGV4dC16aW5jLTY1MCBib3JkZXIgYm9yZGVyLXppbmMtOTAwLzYwIG9wYWNpdHktNjAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNDb21wbGV0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogIWlzVW5sb2NrZWQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXppbmMtNTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbHZsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtWzEwcHhdIG10LTIgZm9udC1ibGFjayB0cmFja2luZy13aWRlIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RleHQtWyMwMDdCRkZdJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXNVbmxvY2tlZCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC16aW5jLTMwMCcgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ3RleHQtemluYy02MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXqNee15Qge2x2bH06IHtsdmwgPT09IDEgPyAn15HXodeZ16EnIDogbHZsID09PSAyID8gJ9eU16LXnNeQ15QnIDogJ9ep15nXkCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUHJlbWl1bSBUb2dnbGUgLyBTcGxpdCBCdXR0b24gQ29tcG9uZW50ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMwYzBkMTBdIHAtMS41IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci16aW5jLTkwMCBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJqalRhYigndHJhaW5pbmcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHB5LTIuNSB0ZXh0LXhzIGZvbnQtYmxhY2sgcm91bmRlZC1sZyB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IGN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmpqVGFiID09PSAndHJhaW5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1bIzAwN0JGRl0gdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LVsjMDA3QkZGXS8yNSBib3JkZXIgYm9yZGVyLVsjMDA3QkZGXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLVsjMDUwNTA1XSB0ZXh0LXppbmMtNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctWyMwYzBkMTBdIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn4+L77iP4oCN4pmC77iPINeQ15nXnteV159cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRCampUYWIoJ3JlaGFiJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXgtMSBweS0yLjUgdGV4dC14cyBmb250LWJsYWNrIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJqalRhYiA9PT0gJ3JlaGFiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctWyMwMDdCRkZdIHRleHQtd2hpdGUgc2hhZG93LWxnIHNoYWRvdy1bIzAwN0JGRl0vMjUgYm9yZGVyIGJvcmRlci1bIzAwN0JGRl0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1bIzA1MDUwNV0gdGV4dC16aW5jLTQwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJnLVsjMGMwZDEwXSBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+PpSDXqdeZ16fXldedINeV157XoNeZ16LXlFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmpqVGFiID09PSAndHJhaW5pbmcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgYW5pbWF0ZS1mYWRlSW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1haW4gUHJvZ3JhbSBPdmVydmlldyBWaWRlbyBDYXJkIC0gT1BFTiBUTyBBTEwgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMEQwRDExXSB0by1bIzA0MDQwNl0gcC0zLjUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjMWExYTFiXSBzcGFjZS15LTMgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0xNiBoLTE2IGJnLVsjMDA3QkZGXS81IHJvdW5kZWQtZnVsbCBibHVyLXhsIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbVwiPvCfjqw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ibGFjayB0ZXh0LXdoaXRlXCI+16HXqNeY15XXnyDXlNeh15HXqDog15PXktep15nXnSDXp9ec15nXoNeZ15nXnSDXnNeo157XlCDXlteVPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gYmctZW1lcmFsZC05NTAvNjAgdGV4dC1lbWVyYWxkLTQwMCBib3JkZXIgYm9yZGVyLWVtZXJhbGQtOTAwLzUwIHB4LTIgcHktMC41IHJvdW5kZWQgZm9udC1ibGFjayB0cmFja2luZy13aWRlIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINeX15nXoNee15kg15XXpNeq15XXlyDXnNeb15XXnNedXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5kcm9pZEV4b1BsYXllciBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e0JKSl9MRVZFTFNfREFUQVtiampTZWxlY3RlZExldmVsIC0gMV0/Lm92ZXJ2aWV3VmlkZW9VcmwgfHwgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9TXzhuMGw2X2FJRVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YNeh16jXmNeV158g15TXodeR16g6INeT15LXqdeZ150g16fXnNeZ16DXmdeZ150g15zXqNee15Qg15bXlWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC16aW5jLTQwMCBsZWFkaW5nLW5vcm1hbCBiZy1ibGFjay80MCBwLTIuNSByb3VuZGVkIGJvcmRlciBib3JkZXItWyMxODE4MWFdIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0JKSl9MRVZFTFNfREFUQVtiampTZWxlY3RlZExldmVsIC0gMV0/LnRhZ2xpbmV9INeU16fXpNeZ15PXlSDXotecINeZ15nXqdeV150g15TXlNeg15fXmdeV16og15TXp9ec15nXoNeZ15XXqiwg16rXk9eZ16jXldeqINep15HXldei15nXqiDXnteR15XXp9eo16og15XXotem16jXlSDXkdeb15wg16nXnNeRINep15wg15vXkNeRINeX16jXmdeSLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBNZWRpYSAmIEV4ZXJjaXNlIEZyZWVtaXVtIFBheXdhbGwgTWF0cml4ICg1IGxldmVsIGV4ZXJjaXNlcykgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYmxhY2sgdGV4dC1bIzAwN0JGRl0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn4+L77iPINek16jXldeY15XXp9eV15wg16rXqNeS15nXnNeZ150g16fXnNeZ16DXmSAtINep15HXldeiIHtiampTZWxlY3RlZFdlZWtWaWV3fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLXppbmMtOTAwIGJvcmRlciBib3JkZXItemluYy04MDAgdGV4dC16aW5jLTQwMCBweC0yLjUgcHktMC41IHJvdW5kZWQgZm9udC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiampTZWxlY3RlZFdlZWtWaWV3ID09PSAxID8gJ9ek16jXnteY16jXmdedOiDXp9ecJyA6IGJqalNlbGVjdGVkV2Vla1ZpZXcgPT09IDIgPyAn16TXqNee15jXqNeZ1506INeR15nXoNeV16DXmScgOiAn16TXqNee15jXqNeZ1506INen16nXlCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoQkpKX0xFVkVMU19EQVRBW2JqalNlbGVjdGVkTGV2ZWwgLSAxXT8uZXhlcmNpc2VzIHx8IFtdKS5tYXAoKGV4ZXJjaXNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhlcmNpc2UgMSBpcyBGcmVlLCAyLTUgYXJlIFByZW1pdW0gTG9ja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNVbmxvY2tlZCA9IGV4ZXJjaXNlLmlzRnJlZSB8fCBiampJc1ByZW1pdW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IGV4cGFuZGVkQmpqQ2FyZCA9PT0gZXhlcmNpc2UuaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGR5bmFtaWNhbGx5IGFkYXB0aW5nIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWxlY3RlZCB3ZWVrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0c051bSA9IGV4ZXJjaXNlLmJhc2VQYXJhbXMuc2V0c1tiampTZWxlY3RlZFdlZWtWaWV3IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwc1N0ciA9IGV4ZXJjaXNlLmJhc2VQYXJhbXMucmVwc1tiampTZWxlY3RlZFdlZWtWaWV3IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdFN0ciA9IGV4ZXJjaXNlLmJhc2VQYXJhbXMucmVzdFtiampTZWxlY3RlZFdlZWtWaWV3IC0gMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZW5zaXR5U3RyID0gZXhlcmNpc2UuYmFzZVBhcmFtcy5pbnRlbnNpdHlbYmpqU2VsZWN0ZWRXZWVrVmlldyAtIDFdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXhlcmNpc2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMy41IHJvdW5kZWQteGwgYm9yZGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0V4cGFuZGVkICYmIGlzVW5sb2NrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMwYzBkMTJdIHRvLVsjMDQwNTA3XSBib3JkZXItWyMwMDdCRkZdIHNoYWRvdy1bMF8wXzE1cHhfcmdiYSgwLDEyMywyNTUsMC4wOCldJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzBlMGUxMV0gdG8tWyMwNTA1MDddIGJvcmRlci1bIzFiMWIyMl0gaG92ZXI6Ym9yZGVyLXppbmMtODAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEhlYWRlciBvZiBFeGVyY2lzZSBDYXJkICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtemluYy00MDBcIj7Xqteo15LXmdecIHtleGVyY2lzZS5pZH06PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtd2hpdGVcIj57ZXhlcmNpc2UudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBGcmVlIFRhZyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V4ZXJjaXNlLmlzRnJlZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs4cHhdIGJnLWVtZXJhbGQtOTUwLzYwIHRleHQtZW1lcmFsZC00MDAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTkwMC81MCBweC0xLjUgcHktMC4yIHJvdW5kZWQgZm9udC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg15fXmdeg150g8J+Uk1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs4cHhdIGJnLWFtYmVyLTk1MC82MCB0ZXh0LXllbGxvdy00MDAgYm9yZGVyIGJvcmRlci1hbWJlci05MDAvNDAgcHgtMS41IHB5LTAuMiByb3VuZGVkIGZvbnQtYmxhY2sgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg16TXqNeZ157XmdeV150g4q2QXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiampXYXRjaGVkS2V5cy5pbmNsdWRlcyhgJHtiampTZWxlY3RlZExldmVsfV8ke2JqalNlbGVjdGVkV2Vla1ZpZXd9XyR7ZXhlcmNpc2UuaWR9YCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzguNXB4XSBiZy1za3ktOTUwLzgwIHRleHQtc2t5LTQwMCBib3JkZXIgYm9yZGVyLXNreS01MDAvNDAgcHgtMS41IHB5LTAuMiByb3VuZGVkIGZvbnQtYmxhY2sgYW5pbWF0ZS1zY2FsZUluIGZsZXggaXRlbXMtY2VudGVyIGdhcC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKclO+4jyDXoNem16TXlFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC16aW5jLTQwMCBsZWFkaW5nLW5vcm1hbCBtdC0xIHByLTEgYm9yZGVyLXIgYm9yZGVyLVsjMDA3QkZGXS8zMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UuZGVzY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1VubG9ja2VkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWRCampDYXJkKGlzRXhwYW5kZWQgPyBudWxsIDogZXhlcmNpc2UuaWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjMDA3QkZGXSB0ZXh0LXhzIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHAtMSB0cmFuc2l0aW9uLWNvbG9ycyBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNFeHBhbmRlZCA/ICfXodeS15XXqCDilrQnIDogJ9eU16bXkiDXldeZ15PXkNeVL9ek16jXnteY16jXmdedIOKWvid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogTG9ja2VkIG92ZXJsYXkgcGxhY2Vob2xkZXIgZm9yIEV4ZXJjaXNlcyAyLDMsNCw1ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzVW5sb2NrZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalBheXdhbGxGZWF0dXJlTmFtZShg16rXqNeS15nXnCAke2V4ZXJjaXNlLmlkfTogJHtleGVyY2lzZS50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0JqalBheXdhbGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMyBiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNTAwLzUgdmlhLWJsdWUtNjAwLzUgdG8tYW1iZXItNTAwLzUgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLWFtYmVyLTUwMC8zMCBwLTQgcm91bmRlZC1sZyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciBob3Zlcjpib3JkZXItYW1iZXItNTAwLzU1IGhvdmVyOmJnLWFtYmVyLTk1MC8xMCB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctW2luc2V0XzBfMXB4XzhweF9yZ2JhKDI0NSwxNTgsMTEsMC4wMyldIGdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtYW1iZXItNTAwIG1iLTEuNSBncm91cC1ob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gZm9udC1ibGFjayB0ZXh0LWFtYmVyLTMwMFwiPteU16rXldeb158g15fXodeV150g15zXnteg15XXmdeZ150g15HXnNeR15MgKFByZW1pdW0gU2hpZWxkKSDwn4yfPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LXppbmMtNDAwIG10LTEgbGVhZGluZy1yZWxheGVkIG1heC13LVs5MCVdIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINee16DXldeiINeU16nXmden15XXnSDXlNee15zXkCDXlS00INeU16rXqNeS15nXnNeZ150g15TXnteV15bXlNeR15nXnSDXkdeo157XlCB7YmpqU2VsZWN0ZWRMZXZlbH0g16TXqteV15fXmdedINeR15LXqNeh16og15TXpNeo15nXnteZ15XXnS4g15TXqdeq15zXkSDXoteV15Mg15TXpNei150g15HXl9eZ15bXldenINeq16DXldei16rXmSDXk9eV157Xmdeg16DXmNeZINec15zXkCDXnteS15HXnNeV16ohXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtWyMwMGFhZmZdIGZvbnQtYmxhY2sgbXQtMiB1bmRlcmxpbmVcIj7XnNeX16Ug15zXpNeq15nXl9eUINee15nXmdeT15nXqiDXldeo15vXmdep16og157XoNeV15kg16TXqNeZ157XmdeV150g4oaXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBVbmxvY2tlZCBJbm5lciBDb250ZW50IChWaWRlbyAmIER5bmFtaWMgUHJvZ3Jlc3MgUGFyYW1ldGVycykgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1VubG9ja2VkICYmIGlzRXhwYW5kZWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMy41IHB0LTMuNSBib3JkZXItdCBib3JkZXItemluYy05MDAvOTAgc3BhY2UteS0zLjUgdGV4dC1yaWdodCBhbmltYXRlLXNsaWRlRG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE1pbmkgVmlkZW8gUGxheWVyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtemluYy01NTAgZm9udC1ibGFjayBibG9ja1wiPteh16jXmNeV158g15TXk9eo15vXlCDXpNeZ15bXmdeV16rXqNek15kg15DXp9eY15nXkdeZINeq15XXkNedINep15HXldeiIHtiampTZWxlY3RlZFdlZWtWaWV3fTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmRyb2lkRXhvUGxheWVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZGVvVXJsPXtleGVyY2lzZS52aWRlb1VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0lEPXtleGVyY2lzZS52aWRlb0lEfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtleGVyY2lzZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBsYXk9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2JqalNlbGVjdGVkTGV2ZWx9XyR7YmpqU2VsZWN0ZWRXZWVrVmlld31fJHtleGVyY2lzZS5pZH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiampXYXRjaGVkS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqaldhdGNoZWRLZXlzKHByZXYgPT4gWy4uLnByZXYsIGtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQmpqVG9hc3QoYNeU16HXqNeY15XXnyDXqdecINeq16jXkteZ15wgJHtleGVyY2lzZS5pZH0g16DXqNep150g15vXoNem16TXlCDXkdee16LXqNeb16ohYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHB0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGAke2JqalNlbGVjdGVkTGV2ZWx9XyR7YmpqU2VsZWN0ZWRXZWVrVmlld31fJHtleGVyY2lzZS5pZH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampXYXRjaGVkS2V5cyhwcmV2ID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYuaW5jbHVkZXMoa2V5KSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJldi5maWx0ZXIoayA9PiBrICE9PSBrZXkpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbLi4ucHJldiwga2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LTEgcHgtMyByb3VuZGVkLWxnIGJvcmRlciB0ZXh0LVs5cHhdIGZvbnQtYmxhY2sgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmUgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmpqV2F0Y2hlZEtleXMuaW5jbHVkZXMoYCR7YmpqU2VsZWN0ZWRMZXZlbH1fJHtiampTZWxlY3RlZFdlZWtWaWV3fV8ke2V4ZXJjaXNlLmlkfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZW1lcmFsZC05NTAvNDAgYm9yZGVyLWVtZXJhbGQtNTAwLzQwIHRleHQtZW1lcmFsZC00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctemluYy05NTAvODAgYm9yZGVyLXppbmMtODAwIHRleHQtemluYy00MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntiampXYXRjaGVkS2V5cy5pbmNsdWRlcyhgJHtiampTZWxlY3RlZExldmVsfV8ke2JqalNlbGVjdGVkV2Vla1ZpZXd9XyR7ZXhlcmNpc2UuaWR9YCkgPyAn4pyTINeh15XXntefINeb16DXptek15Qg15HXntei16jXm9eqJyA6ICfXodee158g15vXoNem16TXlCDXkdeQ15XXpNefINeZ15PXoNeZJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBQcm9ncmVzc2l2ZSBEeW5hbWljIFBhcmFtZXRlcnMgQm94IChzaGlmdGVkIHRvIGJlIGhhcmRlciB3ZWVrLWJ5LXdlZWspICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctemluYy05NTAvODAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLVsjMWQxZDI1XSBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC16aW5jLTQwMCBmb250LWJsYWNrIGJsb2NrIGJvcmRlci1iIGJvcmRlci16aW5jLTkwMCBwYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pqZ77iPINek16jXnteY16jXmdedINeq16DXldei16rXmdeZ150g157Xldeq15DXnteZ150g15DXmdep15nXqiAo16TXqNeV15LXqNeh15nXkdeZIC0g16nXkdeV16Ige2JqalNlbGVjdGVkV2Vla1ZpZXd9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgdGV4dC1bMTBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzUwIHAtMiByb3VuZGVkIGJvcmRlciBib3JkZXItemluYy05MDAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+16HXmNeZ1506PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZFwiPntzZXRzTnVtfSDXodeY15nXnSDXp9ec15nXoNeZ15nXnTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzUwIHAtMiByb3VuZGVkIGJvcmRlciBib3JkZXItemluYy05MDAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+16DXpNeXINei15HXldeT15Q6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bIzAwN0JGRl0gZm9udC1leHRyYWJvbGRcIj57cmVwc1N0cn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay81MCBwLTIgcm91bmRlZCBib3JkZXIgYm9yZGVyLXppbmMtOTAwIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTUwMFwiPteW157XnyDXnteg15XXl9eUOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBmb250LWV4dHJhYm9sZFwiPntyZXN0U3RyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrLzUwIHAtMiByb3VuZGVkIGJvcmRlciBib3JkZXItemluYy05MDAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+16LXldee16Eg16fXnNeZ16DXmTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXJvc2UtNDUwIGZvbnQtZXh0cmFib2xkIHRleHQtWzlweF1cIj57aW50ZW5zaXR5U3RyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENsaW5pY2FsIEN1ZXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMi41IGJnLVsjMDA3QkZGXS81IGJvcmRlciBib3JkZXItWyMwMDdCRkZdLzE1IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOS41cHhdIHRleHQtemluYy0zMDAgZm9udC1leHRyYWJvbGQgYmxvY2sgbWItMVwiPteU15XXqNeQ15XXqiDXldeT15LXqdeZINeR15nXpteV16Ig15HXmNeZ15fXldeq15nXmdedOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTEgdGV4dC1bOS41cHhdIHRleHQtemluYy0zMDAgcHItMSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXhlcmNpc2UuY3Vlcy5tYXAoKGN1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWRcIj57Y3VlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU2VjdGlvbjogRnVsbCBXb3Jrb3V0IFZpZGVvIC0gUHJlbWl1bSB0cmFpbmluZyBjb250aW51b3VzIHByb3RvY29sICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBib3JkZXItdCBib3JkZXItemluYy05MDAvNjAgbXQtNCBzcGFjZS15LTMuNSB0ZXh0LXJpZ2h0IGZvbnQtc2Fuc1wiIHN0eWxlPXt7IGRpcmVjdGlvbjogJ3J0bCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYmxhY2sgdGV4dC1bIzAwN0JGRl0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDwn46sINeh16jXmNeV158g15TXkNeZ157XldefINeU157XnNeQINeR16jXptejXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHRleHQtWzlweF0gYm9yZGVyIHB4LTIgcHktMC41IHJvdW5kZWQgZm9udC1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMC41IGZvbnQtbW9ubyAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFiampJc1ByZW1pdW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1hbWJlci05NTAvNjAgYm9yZGVyLWFtYmVyLTkwMC80MCB0ZXh0LXllbGxvdy01MDAnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctZW1lcmFsZC05NTAvNjAgYm9yZGVyLWVtZXJhbGQtOTAwLzUwIHRleHQtZW1lcmFsZC00MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWJqaklzUHJlbWl1bSA/ICfXoNei15XXnCDwn5SSJyA6ICfXpNeq15XXlyDwn5STJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcC00IHJvdW5kZWQteGwgYm9yZGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmpqSXNQcmVtaXVtICYmIGJqakZ1bGxXb3Jrb3V0RXhwYW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMGMwZDEyXSB0by1bIzA0MDUwN10gYm9yZGVyLVsjMDA3QkZGXSBzaGFkb3ctWzBfMF8xNXB4X3JnYmEoMCwxMjMsMjU1LDAuMDgpXSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMGUwZTExXSB0by1bIzA1MDUwN10gYm9yZGVyLVsjMWIxYjIyXSBob3Zlcjpib3JkZXItemluYy04MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gZ2FwLTMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtd2hpdGVcIj7XpNeo15XXmNeV16fXldecINeQ15nXnteV158g16jXpteZ16Mg157XnNeQIC0g16jXnteUIHtiampTZWxlY3RlZExldmVsfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtNDAwIGxlYWRpbmctbm9ybWFsIG10LTEgbGVhZGluZy1yZWxheGVkIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXodeo15jXldefINeV15nXk9eQ15Ug16nXnNedINeV16jXpteZ16Mg15TXnteQ16TXqdeoINec15vXnSDXnNeR16bXoiDXkNeqINeb15wgNSDXlNeq16jXkteZ15zXmdedINeR16jXptejINep15zXkSDXkNeX16gg16nXnNeRINeZ15fXkyDXotedINeq15XXnSwg15vXldec15wg15bXnteg15kg157XoNeV15fXlCDXldeU16DXl9eZ15XXqiDXp9eV15zXmdeV16og15XXkdeZ15XXnteb16DXmdeV16og157XpNeV16jXmNeV16og15HXltee158g15DXnteqLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JqaklzUHJlbWl1bSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJqakZ1bGxXb3Jrb3V0RXhwYW5kZWQoIWJqakZ1bGxXb3Jrb3V0RXhwYW5kZWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsjMDA3QkZGXSB0ZXh0LXhzIGZvbnQtYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHAtMSB0cmFuc2l0aW9uLWNvbG9ycyBvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXIgZm9udC1zYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JqakZ1bGxXb3Jrb3V0RXhwYW5kZWQgPyAn16HXkteV16gg4pa0JyA6ICfXoNeS158g15DXmdee15XXnyDXntec15Ag4pa+J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMb2NrZWQgQ2FyZCBvdmVybGF5ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWJqaklzUHJlbWl1bSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampQYXl3YWxsRmVhdHVyZU5hbWUoJ/Cfjqwg16HXqNeY15XXnyDXlNeQ15nXnteV158g15TXntec15Ag15HXqNem16MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0JqalBheXdhbGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMy41IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1hbWJlci01MDAvNSB2aWEtYmx1ZS02MDAvNSB0by1hbWJlci01MDAvNSBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItYW1iZXItNTAwLzMwIHAtNCByb3VuZGVkLWxnIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci1hbWJlci01MDAvNTUgaG92ZXI6YmctYW1iZXItOTUwLzEwIHRyYW5zaXRpb24tYWxsIHNoYWRvdy1baW5zZXRfMF8xcHhfOHB4X3JnYmEoMjQ1LDE1OCwxMSwwLjAzKV0gZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NrIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1hbWJlci01NTAgbWItMS41IGdyb3VwLWhvdmVyOnNjYWxlLTExMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDAgZm9udC1zYW5zXCI+16HXqNeY15XXnyDXlNeQ15nXnteV158g15TXntec15Ag16DXoteV15wg15zXnteg15XXmdeZ150g15HXnNeR15Mg8J+Ukjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC16aW5jLTQwMCBtdC0xIGxlYWRpbmctcmVsYXhlZCBtYXgtdy1bOTAlXSBmb250LW1lZGl1bSBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg15TXqteQ157XoNeVINeZ15fXkyDXotedINeq15XXnSDXkdeV15nXk9eZ15DXlSDXqNem15nXoyDXldee16HXldeg15vXqNefINep15wg15vXnCDXl9ee16nXqiDXlNeq16jXkteZ15zXmdedINep15zXkSDXkNeX16gg16nXnNeRISDXlNek15nXp9eVINeQ16og157Xmdeo15Eg15TXmdem15nXkdeV16og15XXkNeX15bXlSDXkdec15XXnNeQ16og15TXkNeZ157Xldeg15nXnSDXlNee15zXkNeUINeV15TXkdec16rXmSDXnteV15LXkdec16ouXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtWyMwMGFhZmZdIGZvbnQtYmxhY2sgbXQtMiB1bmRlcmxpbmUgZm9udC1zYW5zXCI+15zXl9elINec16TXqteZ15fXlCDXnteZ15nXk9eZ16og15XXqNeb15nXqdeqINee16DXldeZINek16jXmdee15nXldedIOKGlzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiampGdWxsV29ya291dEV4cGFuZGVkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMy41IHB0LTMuNSBib3JkZXItdCBib3JkZXItemluYy05MDAvOTAgc3BhY2UteS0zLjUgdGV4dC1yaWdodCBhbmltYXRlLXNsaWRlRG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5LjVweF0gdGV4dC16aW5jLTUwMCBmb250LWJsYWNrIGJsb2NrXCI+157Xlteo15nXnSDXm9ei16o6INeQ15nXnteV158g16jXpteZ16MgLSDXqNee15Qge2JqalNlbGVjdGVkTGV2ZWx9IC0g16nXkdeV16Ige2JqalNlbGVjdGVkV2Vla1ZpZXd9Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuZHJvaWRFeG9QbGF5ZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9Vcmw9e0JKSl9MRVZFTFNfREFUQVtiampTZWxlY3RlZExldmVsIC0gMV0/Lm92ZXJ2aWV3VmlkZW9VcmwgfHwgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9TXzhuMGw2X2FJRVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtg15DXmdee15XXnyDXqNem15nXoyDXntec15AgLSDXqNee15QgJHtiampTZWxlY3RlZExldmVsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yLjUgYmctZW1lcmFsZC05NTAvMTUgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTkwMC80MCByb3VuZGVkLWxnIHRleHQtZW1lcmFsZC00MDAgdGV4dC1bOS41cHhdIGZvbnQtc2FucyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+foiDXnteg15XXmSBSZWNvdmlvIFZJUCBBY2FkZW15INek16LXmdecISDXoNeS158g15TXkNeZ157XldefINeU16jXpteZ16Mg16TXqteV15cg15zXqdeZ157XldepINee15zXkC48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlY3Rpb246IFRoZSBXZWVrbHkgTWlsZXN0b25lIFRlc3QgJiBMZXZlbC1VcCBmbG93ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgYm9yZGVyLXQgYm9yZGVyLXppbmMtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TGV2ZWxEYXRhID0gQkpKX0xFVkVMU19EQVRBW2JqakN1cnJlbnRMZXZlbCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFdlZWtFeGVyY2lzZXMgPSBjdXJyZW50TGV2ZWxEYXRhPy5leGVyY2lzZXMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UmVxdWlyZWRFeGVyY2lzZXMgPSBjdXJyZW50V2Vla0V4ZXJjaXNlcy5maWx0ZXIoZXggPT4gZXguaXNGcmVlIHx8IGJqaklzUHJlbWl1bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50V2Vla1dhdGNoZWRDb3VudCA9IGN1cnJlbnRSZXF1aXJlZEV4ZXJjaXNlcy5maWx0ZXIoZXggPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJqaldhdGNoZWRLZXlzLmluY2x1ZGVzKGAke2JqakN1cnJlbnRMZXZlbH1fJHtiampDdXJyZW50V2Vla31fJHtleC5pZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbGxWaWRlb3NXYXRjaGVkRm9yQ3VycmVudFdlZWsgPSBjdXJyZW50UmVxdWlyZWRFeGVyY2lzZXMubGVuZ3RoID4gMCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFdlZWtXYXRjaGVkQ291bnQgPT09IGN1cnJlbnRSZXF1aXJlZEV4ZXJjaXNlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiampTZWxlY3RlZFdlZWtWaWV3ID09PSBiampDdXJyZW50V2VlayAmJiBiampTZWxlY3RlZExldmVsID09PSBiampDdXJyZW50TGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJqakN1cnJlbnRXZWVrID09PSAzICYmIGJqak1pbGVzdG9uZVN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzEyMGQwNV0gdG8tWyMwODA1MDJdIHAtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItYW1iZXItNTAwLzQwIHNwYWNlLXktMy41IHNoYWRvdy1sZyB0ZXh0LXJpZ2h0IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBhbmltYXRlLWZhZGVJblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTI0IGgtMjQgYmctYW1iZXItNTAwLzUgcm91bmRlZC1mdWxsIGJsdXItMnhsIHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgYW5pbWF0ZS1wdWxzZVwiPuKPszwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYmxhY2sgdGV4dC1hbWJlci00MDBcIj7XkdeT15nXp9eUINen15zXmdeg15nXqiDXmdeT16DXmdeqINeR16rXlNec15nXmiDwn5SsPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtYW1iZXItMjUwIGZvbnQtYm9sZCBtdC0xIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDij7Mg15TXodeo15jXldefINeg16nXnNeXINec15HXk9eZ16fXlCEg15TXnteR15fXnyDXoNee16bXkCDXm9ei16og15HXkdeT15nXp9eUINen15zXmdeg15nXqiDXmdeT16DXmdeqINei15wg15nXk9eZINeq15XXnSAo16TXmdeW15nXldeq16jXpNeZ16HXmCDXodek15XXqNeYKS4g15TXqdec15Eg15TXkdeQINeZ16TXqteXINeo16cg15zXkNeX16gg15DXmdep15XXqCDXodeV16TXmS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0Jqak1pbGVzdG9uZU1vZGFsKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIGJnLWFtYmVyLTUwMC8xMCBob3ZlcjpiZy1hbWJlci01MDAvMjAgYWN0aXZlOmJnLWFtYmVyLTUwMC8zMCBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8zMCByb3VuZGVkLWxnIHRleHQtWzEwcHhdIGZvbnQtZXh0cmFib2xkIHRleHQtYW1iZXItMzAwIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgY3Vyc29yLXBvaW50ZXIgbGVhZGluZy1ub25lIGFuaW1hdGUtcHVsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+Rge+4jyDXptek15Qg15HXodeo15jXldefINeV16LXp9eV15Eg15DXl9eoINeh15jXmNeV16Eg15HXk9eZ16fXqiDXqteV151cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJqakN1cnJlbnRXZWVrID09PSAzICYmIGJqak1pbGVzdG9uZVN0YXR1cyA9PT0gJ3JlamVjdGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMyMTA5MDldIHRvLVsjMGYwNDA0XSBwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXJlZC01MDAvNTAgc3BhY2UteS00IHNoYWRvdy1sZyB0ZXh0LXJpZ2h0IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBhbmltYXRlLWZhZGVJblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LTI0IGgtMjQgYmctcmVkLTUwMC81IHJvdW5kZWQtZnVsbCBibHVyLTJ4bCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+4pqg77iPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ibGFjayB0ZXh0LXJlZC01MDBcIj7XlNee15HXl9efINec15Ag15DXldep16gg4oCTINeg15PXqNepINeq15nXp9eV1588L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTAuNXB4XSB0ZXh0LXppbmMtMzAwIG10LTEgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINee15HXk9enINeU16rXoNeV16LXlCDXqdecINeh15XXoyDXqNee15Qge2JqakN1cnJlbnRMZXZlbH0g16DXk9eX15Qg16LXnCDXmdeT15kg16bXldeV16og15TXqdeZ16fXldedLiDXp9eo15DXlSDXkdei15nXldefINeQ16og15TXk9eS16nXmdedINeU16fXnNeZ16DXmdeZ150g15zXnteY15Qg15XXlNei15zXlSDXodeo15jXldefINeq16DXldei15Qg157XqteV16fXny5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFJlamVjdGlvbiBOb3RlICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXppbmMtOTUwLzg1IGJvcmRlciBib3JkZXItcmVkLTUwMC8zMCBwLTMgcm91bmRlZC14bCB0ZXh0LXJpZ2h0IG15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXJlZC00MDAgZm9udC1leHRyYWJvbGQgYmxvY2tcIj7wn5OdINeT15LXqdeZ150g15zXqteZ16fXldefINee16rXldedOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtMzAwIGZvbnQtc2FucyBsZWFkaW5nLXJlbGF4ZWQgYnJlYWstd29yZHMgd2hpdGVzcGFjZS1wcmUtbGluZSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmpqUmVqZWN0aW9uTm90ZXMgfHwgcmVqZWN0aW9uU2ltVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93QmpqTWlsZXN0b25lTW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIuNSBiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC03MDAgYWN0aXZlOnNjYWxlLTk1IHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJsYWNrIHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyIGJvcmRlciBib3JkZXItcmVkLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7wn5O4INem15zXnSDXldeU16LXnNeUINeh16jXmNeV158g157XqteV16fXnzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMwYzBkMTJdIHRvLVsjMDQwNTA4XSBwLTQgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjMDA3QkZGXS8zMCBzcGFjZS15LTQgc2hhZG93LWxnIHRleHQtcmlnaHQgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGFuaW1hdGUtZmFkZUluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctMjQgaC0yNCBiZy1bIzAwN0JGRl0vNSByb3VuZGVkLWZ1bGwgYmx1ci0yeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bFwiPvCfqbo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JqakN1cnJlbnRXZWVrID09PSAzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYmxhY2sgdGV4dC1hbWJlci0zMDBcIj7XnteR15fXnyDXnteh15vXnSDXntei15HXqCDXqNee15QgLSDXqNee15Qge2JqakN1cnJlbnRMZXZlbH08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy00MDAgbXQtMSBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINeh15nXmdee16og15DXqiDXqteo15LXldec15kg16jXnteUIHtiampDdXJyZW50TGV2ZWx9INep15HXldeiIDMhINeU15LXqSDXm9ei16og15DXqiDXodeo15jXldefINee15HXk9enINeU16rXoNeV16LXlCDXnNeR15PXmden15Qg16fXnNeZ16DXmdeqINeZ15PXoNeZ16og15zXqdedINee16LXkdeoINep15wg157XpNeo16fXmdedINeR15jXldeXINec16jXnteUIHtiampDdXJyZW50TGV2ZWwgPCAzID8gYmpqQ3VycmVudExldmVsICsgMSA6ICfXlNeR15DXlCd9LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSBmb250LXNhbnNcIj7XkdeT15nXp9eqINeb16nXmdeo15XXqiDXqdeR15XXoteZ16ogLSDXqdeR15XXoiB7YmpqQ3VycmVudFdlZWt9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtNDAwIG10LTEgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXodeZ15nXnteqINeQ16og16rXqNeS15XXnCDXqdeR15XXoiB7YmpqQ3VycmVudFdlZWt9INeU157Xotep15k/INeU15LXqSDXm9ei16og15DXqiDXlNee15PXkyDXlNeq16DXldei16rXmSDXlNen15zXmdeg15kg15vXk9eZINec15HXk9eV16cg15bXm9eQ15XXqiDXnNeU16rXp9eT150g15zXqdeR15XXoiB7YmpqQ3VycmVudFdlZWsgKyAxfS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFhbGxWaWRlb3NXYXRjaGVkRm9yQ3VycmVudFdlZWsgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMi41IGJnLXJlZC05NTAvMTAgYm9yZGVyIGJvcmRlci1yZWQtOTAwLzMwIHAtMiByb3VuZGVkIHRleHQtWzlweF0gdGV4dC1yZWQtNDAwIGZvbnQtc2FucyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+UkiDXm9eT15kg15zXpNeq15XXlyDXkNeqINeU16nXkNec15XXnywg15nXqSDXnNem16TXldeqINeq15fXmdec15Qg15HXm9ecIHtjdXJyZW50UmVxdWlyZWRFeGVyY2lzZXMubGVuZ3RofSDXodeo15jXldeg15kg15TXkNeZ157XldefINep15wg16nXkdeV16Ig15bXlCAo16DXptek15Uge2N1cnJlbnRXZWVrV2F0Y2hlZENvdW50fS97Y3VycmVudFJlcXVpcmVkRXhlcmNpc2VzLmxlbmd0aH0pLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMi41IGJnLWVtZXJhbGQtOTUwLzEwIGJvcmRlciBib3JkZXItWyMxMGI5ODFdLzM1IHAtMiByb3VuZGVkIHRleHQtWzlweF0gdGV4dC1lbWVyYWxkLTQ1MCBmb250LXNhbnMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCflJMg15vXnCB7Y3VycmVudFJlcXVpcmVkRXhlcmNpc2VzLmxlbmd0aH0g15TXodeo15jXldeg15nXnSDXoNem16TXlSDXkdeU16bXnNeX15QhINee15HXk9enINeU15vXqdeZ16jXldeqINek16rXldeXINec15TXktep15QuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYWxsVmlkZW9zV2F0Y2hlZEZvckN1cnJlbnRXZWVrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCampUb2FzdChcIteb15PXmSDXnNek16rXldeXINeQ16og16nXkNec15XXnyDXlNeh15nXm9eV150sINeZ16kg15zXptek15XXqiDXqteX15nXnNeUINeR15vXnCDXodeo15jXldeg15kg15TXqteo15LXmdec15nXnSDXqdecINeU16nXkdeV16IuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmpqQ3VycmVudFdlZWsgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0Jqak1pbGVzdG9uZU1vZGFsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqVGVzdEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampUZXN0UGFpbklucHV0KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampUZXN0TW90aW9uSW5wdXQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dCampUZXN0TW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHktMi41IHRleHQtd2hpdGUgZm9udC1leHRyYWJvbGQgcm91bmRlZC14bCB0ZXh0LWNlbnRlciB0ZXh0LXhzIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uLWFsbCBib3JkZXIgbGVhZGluZy1ub3JtYWwgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFhbGxWaWRlb3NXYXRjaGVkRm9yQ3VycmVudFdlZWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctemluYy04MDAgYm9yZGVyLXppbmMtNzAwIHRleHQtemluYy01MDAgb3BhY2l0eS02MCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYmpqQ3VycmVudFdlZWsgPT09IDMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZ3JhZGllbnQtdG8tciBmcm9tLWFtYmVyLTUwMCB0by15ZWxsb3ctNjAwIGJvcmRlci1hbWJlci01MDAgYW5pbWF0ZS1wdWxzZSBzaGFkb3ctYW1iZXItNTAwLzEwIGhvdmVyOnNjYWxlLVsxLjAxXSBhY3RpdmU6c2NhbGUtMTAwIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzAwN0JGRl0gdG8tWyMwMDliZjBdIGJvcmRlci1bIzAwN0JGRl0gc2hhZG93LVsjMDA3QkZGXS8xMCBob3ZlcjpzY2FsZS1bMS4wMV0gYWN0aXZlOnNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuKtkCB7YmpqQ3VycmVudFdlZWsgPT09IDMgPyAn15TXktepINee15HXl9efINee16LXkdeoINec16jXnteUINeU15HXkNeUIPCfj4YnIDogYNeU15LXqSDXnteR15fXnyDXm9ep15nXqNeV16og16nXkdeV16LXmSAtINep16LXldeqINep15HXldeiICR7YmpqQ3VycmVudFdlZWt9YH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoYmpqU2VsZWN0ZWRMZXZlbCA8IGJqakN1cnJlbnRMZXZlbCkgfHwgKGJqalNlbGVjdGVkTGV2ZWwgPT09IGJqakN1cnJlbnRMZXZlbCAmJiBiampTZWxlY3RlZFdlZWtWaWV3IDwgYmpqQ3VycmVudFdlZWspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctZW1lcmFsZC05NTAvMjAgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTkwMC81MCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtZXh0cmFib2xkIHRleHQtd2hpdGVcIj7inIUg16nXkdeV16Ig15bXlCDXlNeV16nXnNedINeV15DXldep16gg16jXpNeV15DXmdeqITwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOS41cHhdIHRleHQtZW1lcmFsZC00NTAgbXQtMC41IGZvbnQtbWVkaXVtXCI+16LXkdeo16og15DXqiDXnteR15fXnyDXlNeb16nXmdeo15XXqiDXlNeq16DXldei16rXmSDXlNeg15PXqNepINep15wg16nXnNeRINeW15Qg15HXntei16jXm9eqLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSBiZy1lbWVyYWxkLTkwMC82MCB0ZXh0LWVtZXJhbGQtNDAwIHB4LTIgcHktMC41IHJvdW5kZWQgZm9udC1ibGFja1wiPtee15DXldep16g8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLXppbmMtOTUwLzQwIGJvcmRlciBib3JkZXItemluYy05MDAvNjAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1yaWdodCBvcGFjaXR5LTYwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtZXh0cmFib2xkIHRleHQtemluYy01MDBcIj7wn5SSINep15HXldeiIHtiampTZWxlY3RlZFdlZWtWaWV3fSDXoNei15XXnDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOS41cHhdIHRleHQtemluYy02NTAgbXQtMC41XCI+16LXnNeZ15og15zXlNep15zXmdedINeQ16og157XkdeT16cg15TXm9ep15nXqNeV16og15TXqdeR15XXoteZINeU16TXqteV15cg16fXldeT150g15zXm9efLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC16aW5jLTY1MFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02IGFuaW1hdGUtZmFkZUluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCampSZWhhYk1hdHJpeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJqalJlaGFiQXJlYT17YmpqUmVoYWJBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalJlaGFiQXJlYT17c2V0QmpqUmVoYWJBcmVhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJqaklzUHJlbWl1bT17YmpqSXNQcmVtaXVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dCampQYXl3YWxsPXtzZXRTaG93QmpqUGF5d2FsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampQYXl3YWxsRmVhdHVyZU5hbWU9e3NldEJqalBheXdhbGxGZWF0dXJlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNob3J0Y3V0IFVyZ2VudCBBc3Npc3RhbmNlIHRvIENsaW5pYyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgYm9yZGVyLXQgYm9yZGVyLVsjMTYxNjE5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGZ1bGxOYW1lLnRyaW0oKSB8fCAn16HXpNeV16jXmNeQ15kgQkpKJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBg16nXnNeV150sINep157XmSAke25hbWV9LCDXlNeS16LXqteZINee16rXldeb16DXmdeqINeULUJKSiDXkdeQ16fXk9ee15nXmdeqIFJlY292aW8uINeQ16DXmSDXqNeV16bXlCDXnNeU16rXmdeZ16LXpSDXkNeZ16rXm9edINeR16nXnCDXoteV157XoSDXkNeVINeU16rXkNeV16nXqdeV16og16fXqNeZ15jXmdeqINeR157XpNeo16fXmdedLmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oYGh0dHBzOi8vd2EubWUvOTcyNTg3ODU4NzA4P3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQobXNnKX1gLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yLjUgYmctWyMxMTFdIGhvdmVyOmJnLXppbmMtOTAwIGFjdGl2ZTpiZy16aW5jLTk1MCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLXhsIHRleHQtY2VudGVyIHRleHQteHMgY3Vyc29yLXBvaW50ZXIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgdHJhbnNpdGlvbi1hbGwgYm9yZGVyIGJvcmRlci16aW5jLTg1MCBsZWFkaW5nLW5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfkqwg16TXoNeZ15Qg15nXqdeZ16jXlCDXnNeU16rXmdeZ16LXpteV16og16TXmdeW15nXldeq16jXpNeZ15Qg15PXl9eV16TXlFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQkpKIE1pbGVzdG9uZSBWaWRlbyBTdWJtaXNzaW9uIFNjcmVlbiAtIFByZW1pdW0gSGlnaCBDb250cmFzdCBMYXlvdXQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dCampNaWxlc3RvbmVNb2RhbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svOTUgYmFja2Ryb3AtYmx1ci1tZCB6LTUwIGZsZXggZmxleC1jb2wgdGV4dC1uZXV0cmFsLTIwMCBhbmltYXRlLXNsaWRlVXBcIiBkaXI9XCJydGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcC01IGgtZnVsbCBvdmVyZmxvdy15LWF1dG9cIiBzdHlsZT17eyBkaXJlY3Rpb246ICdydGwnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLVsjMWExYTFhXS84MCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtcmlnaHQgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj7wn4+GPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtd2hpdGUgbGVhZGluZy10aWdodFwiPtee15HXl9efINee16LXkdeoINee16HXm9edICjXldeZ15PXmdeQ15UpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIHRleHQtWyMwMDdCRkZdIGZvbnQtbW9ubyBibG9jayBsZWFkaW5nLW5vbmUgbXQtMC41XCI+16jXnteUIHtiampDdXJyZW50TGV2ZWx9IOKAoiDXodeV16Mg16nXkdeV16IgMzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93QmpqTWlsZXN0b25lTW9kYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2ltdWxhdGluZ0NhbWVyYShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtemluYy01MDAgaG92ZXI6dGV4dC13aGl0ZSBwLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENhbWVyYSBTaW11bGF0aW9uIFZpZXdwb3J0ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1NpbXVsYXRpbmdDYW1lcmEgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBiZy16aW5jLTk1MCByb3VuZGVkLTJ4bCBib3JkZXItMiBib3JkZXItcmVkLTYwMCBwLTQgbXktMyBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgc2hhZG93LWlubmVyIGZvbnQtc2Fuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogVmlld2ZpbmRlciBPdmVybGF5IExpbmVzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTQgYm9yZGVyIGJvcmRlci16aW5jLTkwMCBwb2ludGVyLWV2ZW50cy1ub25lIHJvdW5kZWQtbGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgYmctYmxhY2svODAgcHgtMiBweS0wLjUgcm91bmRlZCB0ZXh0LVs4cHhdIGZvbnQtbW9ubyB0ZXh0LXJvc2UtNTAwIGZvbnQtZXh0cmFib2xkIHVwcGVyY2FzZSBhbmltYXRlLXB1bHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xLjUgaC0xLjUgYmctcm9zZS02MDAgcm91bmRlZC1mdWxsIGlubGluZS1ibG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVDIDAwOjB7YmpqQ2FtZXJhQ291bnRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgbGVmdC0yIGJnLWJsYWNrLzgwIHB4LTIgcHktMC41IHJvdW5kZWQgdGV4dC1bOHB4XSBmb250LW1vbm8gdGV4dC16aW5jLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwODBQIOKAoiA2MEZQU1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgcHktOCBwb2ludGVyLWV2ZW50cy1ub25lIHJlbGF0aXZlIHotMTAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogRHluYW1pYyBnbG93aW5nIGJvZHkgam9pbnQgd2lyZWZyYW1lIHNpbXVsYXRpb24gZm9yIHByZW1pdW0gbG9vayAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjAgaC0yMCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1kYXNoZWQgYm9yZGVyLXJlZC01MDAvNDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYW5pbWF0ZS1zcGluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FtZXJhIGNsYXNzTmFtZT1cInctNyBoLTcgdGV4dC1yZWQtNTAwIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXppbmMtMzAwIGZvbnQtZXh0cmFib2xkIG1heC13LXhzIG14LWF1dG8gbGVhZGluZy1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg15TXk9eS15nXnteVINee16DXlyA5MC05MCDXpNei15nXnCDXkNeVINeh15nXkdeV15Eg15DXp9eY15nXkdeZINep15wg15TXpteV15XXkNeoINeb16DXkteTINeU16rXoNeS15PXldeqINeR15jXldeV15fXmdedINee15zXkNeZ150g157XldecINeU157Xptec157XlFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB0ZXh0LXppbmMtNTAwIG10LTFcIj7XlNee16LXqNeb16og16rXqdec15nXnSDXldeq16nXnteV16gg15DXldeY15XXnteY15nXqiDXkdei15XXkyB7YmpqQ2FtZXJhQ291bnRlcn0g16nXoNeZ15XXqjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2ltdWxhdGluZ0NhbWVyYShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVTdGF0dXMoJ3JlY29yZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVWaWRlb05hbWUoJ2Jqal9zdGFiaWxpdHlfcmVoYWJfcmVjb3Zpb19yZWMubXA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVNZXRob2QoJ2NhbWVyYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgYmctcmVkLTYwMCBob3ZlcjpiZy1yZWQtNzAwIGFjdGl2ZTpiZy1yZWQtODAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJsYWNrIHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKPue+4jyDXotem15XXqCDXldeU16nXqtee16kg15HXlNen15zXmNeUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBnYXAtNCBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogU3RhdHVzIGRpc3BsYXkgb3IgcGVuZGluZyBzdGF0ZSBibG9jayAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jqak1pbGVzdG9uZVN0YXR1cyA9PT0gJ3BlbmRpbmcnID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1hbWJlci01MDAvNDAgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1hbWJlci05NTAvMjAgdG8tYmxhY2sgc3BhY2UteS0zIHNoYWRvdy1sZyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctYW1iZXItOTAwLzEwIGJvcmRlciBib3JkZXItYW1iZXItNTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gdGV4dC1sZyBhbmltYXRlLWJvdW5jZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDij7NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtYW1iZXItNDAwXCI+15HXk9eZ16fXlCDXp9ec15nXoNeZ16og15HXqteU15zXmdeaIPCflKw8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtMzUwIGxlYWRpbmctcmVsYXhlZCBmb250LXNhbnMgbWF4LXcteHMgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKPsyDXlNeh16jXmNeV158g16DXqdec15cg15zXkdeT15nXp9eUISDXlNee15HXl9efINeg157XpteQINeb16LXqiDXkdeR15PXmden15Qg16fXnNeZ16DXmdeqINeZ15PXoNeZ16og16LXnCDXmdeT15kg16rXldedLiDXlNep15zXkSDXlNeR15Ag15nXpNeq15cg16jXpyDXnNeQ15fXqCDXkNeZ16nXldeoINeh15XXpNeZLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENsaW5pY2FsIFJldmlldyBTdGVwcyBWaXN1YWxpemVyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzBjMGQxMF0gYm9yZGVyIGJvcmRlci16aW5jLTkwMCByb3VuZGVkLWxnIHAtMi41IHNwYWNlLXktMS41IHRleHQtWzlweF0gdGV4dC16aW5jLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjEuINeh15nXoNeV158g15XXmdeT15nXkNeVINeo15DXqdeV16DXmSAo15DXoNeT16jXldeQ15nXkyDXp9ec15DXldeTKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XlNeV16nXnNedIOKclO+4jzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtYW1iZXItNDAwIGZvbnQtc2VtaWJvbGQgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjIuINeU16LXqNeb16og15HXmdeV157Xm9eg15nXp9eqINem15XXldeQ16gg15XXmdeo15ogKNeq15XXnSDXpNeZ15bXmdeV16rXqNek15nXodeYKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XkdeR15PXmden15QuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXppbmMtNjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+My4g16TXqteZ15fXqiDXqNee15Qg15TXkdeQ15Qg15XXk9eo15nXqdeV16og157Xotep15nXldeqPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtee157XqteZ158g8J+Ukjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIERlbW8gUXVpY2sgQWRtaW4gT3ZlcnJpZGUgb24gU2NyZWVuIGZvciBjb252ZW5pZW50IHJldmlld2VyIHRlc3RpbmchICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSBib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItYW1iZXItNTAwLzI1IHJvdW5kZWQtbGcgYmctYW1iZXItNTAwLzUgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzguNXB4XSB0ZXh0LWFtYmVyLTQwMCBmb250LW1vbm8gYmxvY2sgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+16HXmdee15XXnNem15nXmdeqINeq16TXqNeZ15gg157XoNeU15wgKNec16bXqNeb15kg15TXk9eS157XlCk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzhweF0gdGV4dC16aW5jLTQwMCBmb250LWJvbGQgYmxvY2sgdGV4dC1yaWdodFwiPuKcje+4jyDXk9eS16nXmSDXqteZ16fXldefINeR15nXlS3Xnteb16DXmdeZ1506PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlamVjdGlvblNpbVRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlamVjdGlvblNpbVRleHQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLXlNei16jXldeqINeq15nXp9eV158uLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtWzlweF0gdGV4dC16aW5jLTMwMCBiZy16aW5jLTk1MCBwLTEuNSByb3VuZGVkIGJvcmRlciBib3JkZXItemluYy04MDAgZm9jdXM6Ym9yZGVyLXJlZC01MDAgZm9udC1zYW5zIGxlYWRpbmctbm9ybWFsIGgtMTAgb3V0bGluZS1ub25lIHRleHQtcmlnaHQgcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lU3RhdHVzKCdhcHByb3ZlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampSZWplY3Rpb25Ob3RlcygnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb2dyZXNzIHVzZXIgdG8gdGhlIG5leHQgTGV2ZWwgYXV0b21hdGljYWxseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmpqQ3VycmVudExldmVsIDwgMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRMdmwgPSBiampDdXJyZW50TGV2ZWwgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqakN1cnJlbnRMZXZlbChuZXh0THZsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampTZWxlY3RlZExldmVsKG5leHRMdmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqakN1cnJlbnRXZWVrKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalNlbGVjdGVkV2Vla1ZpZXcoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCLXlNen15XXoNeh15XXnNeZ15Qg15TXl9ec15nXmNeUOiDXlNeh16jXmNeV158g15DXldep16gg15HXlNem15zXl9eUISDXqNee16og15QtQkpKINeU15HXkNeUINek16rXldeX15Qg15XXnteX15vXlCDXnNeaINeb16LXqiEg8J+OiVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0xIGJnLWVtZXJhbGQtNjAwIGhvdmVyOmJnLWVtZXJhbGQtNzAwIHRleHQtd2hpdGUgdGV4dC1bOXB4XSBmb250LWJsYWNrIHJvdW5kZWQgY3Vyc29yLXBvaW50ZXIgbGVhZGluZy10aWdodCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+foiDXkNep16gg16HXqNeY15XXn1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lU3RhdHVzKCdyZWplY3RlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampSZWplY3Rpb25Ob3RlcyhyZWplY3Rpb25TaW1UZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYNeU157XkdeX158g16DXk9eX15Qg16LXnSDXntep15XXkSDXp9ec15nXoNeZISDXlNee16LXqNeb16og16LXkdeo15Qg15zXntem15Eg15DXk9eV1506IFwi15TXnteR15fXnyDXnNeQINeQ15XXqdeoIOKAkyDXoNeT16jXqSDXqteZ16fXldefXCIg4p2MYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMSBiZy1yb3NlLTYwMCBob3ZlcjpiZy1yb3NlLTcwMCB0ZXh0LXdoaXRlIHRleHQtWzlweF0gZm9udC1ibGFjayByb3VuZGVkIGN1cnNvci1wb2ludGVyIGxlYWRpbmctdGlnaHQgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCflLQg15PXl9eUINei150g157XqdeV15FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IGJqak1pbGVzdG9uZVN0YXR1cyA9PT0gJ2FwcHJvdmVkJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItZW1lcmFsZC01MDAvNDAgYmctZ3JhZGllbnQtdG8tdHIgZnJvbS1lbWVyYWxkLTk1MC8yMCB0by1ibGFjayBzcGFjZS15LTMgdGV4dC1jZW50ZXIgdGV4dC1yaWdodCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTk1MC80MCBib3JkZXItMiBib3JkZXItZW1lcmFsZC01MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byB0ZXh0LXhsIGFuaW1hdGUtYm91bmNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPCfjolcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtZW1lcmFsZC00MDBcIj7XlNee15HXl9efINeQ15XXqdeoINen15zXmdeg15nXqiEg8J+PhjwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy0zNTAgbGVhZGluZy1yZWxheGVkIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXkNeZ15vXldeqINeU16rXoNeV16LXlCwg16HXmdee15jXqNeZ15nXqiDXlNeZ16jXm9eZ15nXnSDXldeU16LXnteZ15PXldeqINep15wg16LXnteV15Mg15TXqdeT16jXlCDXlNem15XXldeQ16jXmSDXqdec15vXnSDXoNeR15PXp9eVINeR15nXk9eZINeq15XXnSDXldeg157XpteQ15Ug15HXmNeV15XXlyDXlNek15nXlteZ15XXnNeV15LXmSDXlNeg15TXk9eoINec16LXkdeV15PXlCDXotecINeU157Xlteo16DXmdedIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0Jqak1pbGVzdG9uZU1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVTdGF0dXMoJ2lkbGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVWaWRlb05hbWUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lTWV0aG9kKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBiZy1bIzAwN0JGRl0gaG92ZXI6YmctWyMwMDY2RERdIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJsYWNrIHJvdW5kZWQtbGcgbGVhZGluZy1ub3JtYWwgdXBwZXJjYXNlIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+agCDXlNee16nXmiDXnNeQ15nXnteV16DXmSDXlNeo157XlCDXlNeX15PXqdeUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jqak1pbGVzdG9uZVN0YXR1cyA9PT0gJ3JlamVjdGVkJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxYzA4MDhdIGJvcmRlciBib3JkZXItcmVkLTUwMC8zMCBwLTMgcm91bmRlZC14bCB0ZXh0LXJpZ2h0IHNwYWNlLXktMiBhbmltYXRlLWZhZGVJbiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1yZWQtNTAwIGZvbnQtZXh0cmFib2xkIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XlNee15HXl9efINec15Ag15DXldep16gg4oCTINeg15PXqNepINeq15nXp9eV158g4p2MPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOC41cHhdIGJnLXJlZC05NTAgcHgtMS41IHB5LTAuNSByb3VuZGVkIGZvbnQtYm9sZFwiPteU15XXk9ei15Qg157XqteV1508L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy16aW5jLTk1MC85MCBwLTIuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItcmVkLTUwMC8xNSB0ZXh0LVsxMHB4XS9yZWxheGVkIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMCBmb250LWV4dHJhYm9sZCBibG9ja1wiPvCfk50g15PXktep15nXnSDXnNeq15nXp9eV158g157XqteV1506PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMCBmb250LXNhbnMgYnJlYWstd29yZHMgd2hpdGVzcGFjZS1wcmUtbGluZSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiampSZWplY3Rpb25Ob3RlcyB8fCByZWplY3Rpb25TaW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIHAtMyBiZy1bIzBhMGYxOF0gYm9yZGVyIGJvcmRlci1ibHVlLTkwMC8zMCByb3VuZGVkLXhsIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtYmxhY2sgdGV4dC1ibHVlLTQwMFwiPvCfk4sg15TXoNeX15nXldeqINeo16TXldeQ15nXldeqINec15TXp9ec15jXlCDXp9ec15nXoNeZ16o8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtMzAwIGxlYWRpbmctcmVsYXhlZCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXotecINee16DXqiDXnNei15HXldeoINec16jXnteUINeU15HXkNeUINeR16rXldeb16DXmdeqINep15nXp9eV150g15QtQkpKLCDXotec15nXmiDXnNeU16fXnNeZ15gg15XXnNep15zXldeXINeh16jXmNeV158g15XXmdeT15DXlSDXkdeV15fXnyDXp9em16gg15TXntem15nXkiDXkNeqINeQ15nXm9eV16og15TXqteg15XXoteULCDXmdem15nXkdeV16og15TXpteV15XXkNeoINeV15TXqNeV15jXpteZ15nXqiDXlNeZ16jXmiDXlNei157Xlden15Qg16nXnNeaLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LVs5LjVweF0gdGV4dC16aW5jLTQwMCBzcGFjZS15LTEgbGlzdC1kaXNjIGxpc3QtaW5zaWRlIGZvbnQtc2FucyBtdC0xIHByLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+157Xp9ee15Ug15DXqiDXlNeY15zXpNeV158g15HXkteV15HXlCDXlNeo16bXpNeUINeb15og16nXlNeS15XXoyDXm9eV15zXlSDXkdek16jXmdeZ150uPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+15TXk9eS15nXnteVIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPtee16LXkdeoINeo15XXmNem15nXlCA5MC05MCDXmdeo15og15DXp9eY15nXkdeZPC9zdHJvbmc+INec157XqdeaIDMg15fXlteo15XXqiDXnNeb15wg16bXky48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT7XlNeT15LXmdee15Ug15vXmdeV15XXpSDXpteV15XXkNeoINeh15jXmNeZINee15XXnCDXm9ejINeU15nXkyDXkdeY15XXldeXINen15PXnteZINec15zXkCDXm9eZ16TXldejLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFR3byBwcm9taW5lbnQgYWN0aW9uIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBmb250LWJsYWNrIHRleHQtemluYy00MDAgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+15HXl9eo15Ug16nXmdeY16og15TXktep16og15XXmdeT15nXkNeVOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMy41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJ1dHRvbiBBOiBSZWNvcmQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1NpbXVsYXRpbmdDYW1lcmEodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqakNhbWVyYUNvdW50ZXIoOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHNpbXVsYXRpb24gY291bnRkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50IC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqQ2FtZXJhQ291bnRlcihjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzU2ltdWxhdGluZ0NhbWVyYShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVTdGF0dXMoJ3JlY29yZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVWaWRlb05hbWUoJ2Jqal9zdGFiaWxpdHlfcmVoYWJfcmVjb3Zpb19yZWMubXA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVNZXRob2QoJ2NhbWVyYScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0zLjUgcm91bmRlZC14bCBib3JkZXItMiBob3Zlcjpib3JkZXItcmVkLTY1MCBob3ZlcjpiZy1yZWQtOTUwLzEwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJqak1pbGVzdG9uZU1ldGhvZCA9PT0gJ2NhbWVyYSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItcmVkLTY1MCBiZy1yZWQtOTUwLzIwIHRleHQtd2hpdGUgc2hhZG93LW1kJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JvcmRlci1bIzFhMWExYV0gYmctWyMwYzBjMGVdIHRleHQtemluYy00MDAgaG92ZXI6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGxcIj7wn46lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1ibGFja1wiPtem15zXnSDXodeo15jXldefINeR15XXl9efPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOC41cHhdIHRleHQtemluYy01MDAgbGVhZGluZy1ub25lXCI+15TXpNei15wg157Xptec157XqiDXodeZ157Xldec16bXmdeUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJ1dHRvbiBCOiBHYWxsZXJ5ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lU3RhdHVzKCdyZWNvcmRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVWaWRlb05hbWUoJ2Jqal9oaXBfbmVja19iaW9tZWNoYW5pY3NfZmluYWwubW92Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqak1pbGVzdG9uZU1ldGhvZCgnZ2FsbGVyeScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIten15XXkdelINeV15nXk9eZ15DXlSDXkdeZ15XXnteb16DXmden15Qg16DXkdeX16gg15HXlNem15zXl9eUINee15TXktec16jXmdeUISDXnNeX16bXlSDXotecINep15zXlyDXnNeR15PXmden15Qg16fXnNeZ16DXmdeqINec15TXotec15DXlC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0zLjUgcm91bmRlZC14bCBib3JkZXItMiBob3Zlcjpib3JkZXItWyMwMDdCRkZdIGhvdmVyOmJnLWJsdWUtOTUwLzEwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJqak1pbGVzdG9uZU1ldGhvZCA9PT0gJ2dhbGxlcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLVsjMDA3QkZGXSBiZy1ibHVlLTk1MC8yMCB0ZXh0LXdoaXRlIHNoYWRvdy1tZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdib3JkZXItWyMxYTFhMWFdIGJnLVsjMGMwYzBlXSB0ZXh0LXppbmMtNDAwIGhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+8J+TgTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtYmxhY2tcIj7XlNei15zXlCDXnteU15LXnNeo15nXlDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzguNXB4XSB0ZXh0LXppbmMtNTAwIGxlYWRpbmctbm9uZVwiPteR15fXqCDXp9eV15HXpSDXp9eZ15nXnTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIENhcHR1cmVkIGZpbGUgc3RhdHVzIGNhcmQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmpqTWlsZXN0b25lVmlkZW9OYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzA1MDkwZl0gYm9yZGVyIGJvcmRlci1ibHVlLTkwMC8yMCBwLTMgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1yaWdodCBhbmltYXRlLWZhZGVJbiBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1bIzAwN0JGRl1cIj7wn46e77iPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZvbnQtc2FucyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwLjVweF0gZm9udC1ibGFjayB0ZXh0LXdoaXRlIHRydW5jYXRlIG1heC13LVsyMDBweF1cIj57YmpqTWlsZXN0b25lVmlkZW9OYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOHB4XSB0ZXh0LXppbmMtNTAwIGZvbnQtbW9ubyB1cHBlcmNhc2UgbXQtMC41XCI+16DXpNeXOiAxMi40TUIg4oCiINek15XXqNee15g6IEguMjY0IOKAoiDXodeY15jXldehOiDXnteV15vXnyDXnNep15zXmdeX15Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs4LjVweF0gYmctWyMwMDdCRkZdLzEwIHRleHQtWyMwMDdCRkZdIGJvcmRlciBib3JkZXItWyMwMDdCRkZdLzIwIHB4LTIgcHktMC41IHJvdW5kZWQgZm9udC1ibGFjayBzaHJpbmstMFwiPtee16bXldeo16M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogQm90dG9tIEFjdGlvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1NpbXVsYXRpbmdDYW1lcmEgJiYgYmpqTWlsZXN0b25lU3RhdHVzICE9PSAncGVuZGluZycgJiYgYmpqTWlsZXN0b25lU3RhdHVzICE9PSAnYXBwcm92ZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIG10LTQgcHQtMyBib3JkZXItdCBib3JkZXItWyMxYTFhMWFdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWJqak1pbGVzdG9uZVZpZGVvTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJqak1pbGVzdG9uZVZpZGVvTmFtZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lU3RhdHVzKCdwZW5kaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgcHktMi41IHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgdGV4dC14cyBmb250LWJsYWNrIHNoYWRvdy1sZyB0cmFuc2l0aW9uLWFsbCBib3JkZXIgbGVhZGluZy1ub3JtYWwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTEuNSBjdXJzb3ItcG9pbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmpqTWlsZXN0b25lVmlkZW9OYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1bIzAwN0JGRl0gdG8tWyMwMTliZWVdIGJvcmRlci1bIzAwN0JGRl0gdGV4dC13aGl0ZSBhY3RpdmU6dHJhbnNsYXRlLXktMC41J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1bIzEyMTIxNF0gYm9yZGVyLXppbmMtOTUwIHRleHQtemluYy01MDAgc2VsZWN0LW5vbmUgY3Vyc29yLW5vdC1hbGxvd2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+nrCDXqdec15cg15zXkdeT15nXp9eUINen15zXmdeg15nXqjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0Jqak1pbGVzdG9uZU1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiampNaWxlc3RvbmVTdGF0dXMgIT09ICdyZWplY3RlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lU3RhdHVzKCdpZGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqak1pbGVzdG9uZVZpZGVvTmFtZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lTWV0aG9kKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqTWlsZXN0b25lVmlkZW9OYW1lKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampNaWxlc3RvbmVNZXRob2QobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBiZy1bIzBhMGEwY10gaG92ZXI6YmctWyMxMjEyMTRdIHRleHQtemluYy00MDAgaG92ZXI6dGV4dC13aGl0ZSBmb250LWJvbGQgcm91bmRlZC14bCB0ZXh0LWNlbnRlciB0ZXh0LVsxMC41cHhdIGJvcmRlciBib3JkZXItemluYy05MDAgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgbGVhZGluZy1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg15HXmdeY15XXnCDXldeX15bXqNeUXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJKSiBNaWxlc3RvbmUgVGVzdCBNb2RhbCBPdmVybGF5IC0gU3RyaWN0bHkgcmVuZGVyZWQgYWJzb2x1dGUgaW5zaWRlIHRoZSBzaW11bGF0ZWQgZnJhbWUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dCampUZXN0TW9kYWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrLzk1IGJhY2tkcm9wLWJsdXItc20gei01MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kIHRleHQtbmV1dHJhbC0yMDAgYW5pbWF0ZS1zbGlkZVVwXCIgZGlyPVwicnRsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMwYjBjMGVdIGJvcmRlci10LTIgYm9yZGVyLVsjMDA3QkZGXSByb3VuZGVkLXQtM3hsIHAtNSBzcGFjZS15LTQgbWF4LWgtWzg1JV0gb3ZlcmZsb3cteS1hdXRvIHNoYWRvdy1bMF8tMTBweF8zNXB4X3JnYmEoMCwxMjMsMjU1LDAuMjUpXSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLVsjMWExYTFhXS84MCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJsYWNrIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg8J+puiB7YmpqQ3VycmVudFdlZWsgPT09IDMgPyBg157XkdeX158g157XoteR16gg15zXqNee15Qg15TXkdeQ15RgIDogYNee15HXk9enINeb16nXmdeo15XXqiDXqdeR15XXoteZIC0g16nXkdeV16IgJHtiampDdXJyZW50V2Vla31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93QmpqVGVzdE1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampUZXN0UGFpbklucHV0KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalRlc3RNb3Rpb25JbnB1dChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampUZXN0RXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtemluYy01NTAgaG92ZXI6dGV4dC13aGl0ZSBwLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctWyMwYTBmMThdIGJvcmRlciBib3JkZXItYmx1ZS05MDAvMzAgcm91bmRlZC1sZyB0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtMzUwIGxlYWRpbmctcmVsYXhlZCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBibG9jayBtYi0wLjVcIj7XpNeo15XXmNeV16fXldecINeR16fXqNeqINei15XXnteh15nXnSDXp9ec15nXoNeZPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXnNem15XXqNeaINeU16nXnteZ16jXlCDXlNeo16TXldeQ15nXqiDXntek16DXmSDXotem15nXnteV16og15nXqteoINeR157Xlteo158g15XXk9ec16fXqteZ15XXqiDXkdee16TXqNen15nXnSwg15DXoNeQINei16DXlCDXkdeZ15XXqdeoINei15wg157XkdeT16cg15TXnteT15PXmdedINeU15PXmdeg157XmTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBRMTogUGFpbiBsZXZlbCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1leHRyYWJvbGQgdGV4dC16aW5jLTMwMCBibG9jayBsZWFkaW5nLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLiDXlNeQ150g15fXldeV15nXqiDXm9eQ15Eg157XpNeo16fXmSDXl9eTLCDXlNen16jXoNeqINei15XXqNejINeQ15Ug16jXotepINeq16DXldei16rXmSDXl9eV15zXoNeZINeR157XpNeo16fXmdedINeU16nXkdeV16I/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRCampUZXN0UGFpbklucHV0KCd5ZXMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIuNSByb3VuZGVkLWxnIGJvcmRlciB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCB0ZXh0LWNlbnRlciBsZWFkaW5nLW5vcm1hbCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmpqVGVzdFBhaW5JbnB1dCA9PT0gJ3llcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctcm9zZS05NTAvNDAgYm9yZGVyLXJvc2UtNjAwIHRleHQtcm9zZS0zMDAgcmluZy0yIHJpbmctcm9zZS01MDAvMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLVsjMTIxMjE0XSBib3JkZXItemluYy04MDAgdGV4dC16aW5jLTQwMCBob3Zlcjpib3JkZXItemluYy03MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXm9efLCDXl9eV15XXmdeq15kg15vXkNeRINeX16jXmdeSIOKaoO+4j1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEJqalRlc3RQYWluSW5wdXQoJ25vJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0yLjUgcm91bmRlZC1sZyBib3JkZXIgdGV4dC14cyBmb250LWJvbGQgdHJhbnNpdGlvbi1hbGwgdGV4dC1jZW50ZXIgbGVhZGluZy1ub3JtYWwgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJqalRlc3RQYWluSW5wdXQgPT09ICdubydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctZW1lcmFsZC05NTAvNDAgYm9yZGVyLWVtZXJhbGQtNjAwIHRleHQtZW1lcmFsZC0zMDAgcmluZy0yIHJpbmctZW1lcmFsZC01MDAvMTAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLVsjMTIxMjE0XSBib3JkZXItemluYy04MDAgdGV4dC16aW5jLTQwMCBob3Zlcjpib3JkZXItemluYy03MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDXqden15gsINec15zXkCDXm9eQ15HXmdedINeQ16fXmNeZ15HXmdeZ150g8J+RjVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFEyOiBSYW5nZSBvZiBNb3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtZXh0cmFib2xkIHRleHQtemluYy0zMDAgYmxvY2sgbGVhZGluZy1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi4g15TXkNedINeU16bXnNeX16og15zXmdeZ16nXnSDXkNeqINee15zXldeQINeY15XXldeX15kg15TXqteg15XXoteUIChSYW5nZSBvZiBNb3Rpb24pINep15wg16rXqNeS15nXnNeZINeU16nXmden15XXnSDXlNep15HXldeiP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QmpqVGVzdE1vdGlvbklucHV0KCdubycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMi41IHJvdW5kZWQtbGcgYm9yZGVyIHRleHQteHMgZm9udC1ib2xkIHRyYW5zaXRpb24tYWxsIHRleHQtY2VudGVyIGxlYWRpbmctbm9ybWFsICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiampUZXN0TW90aW9uSW5wdXQgPT09ICdubydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctYW1iZXItOTUwLzQwIGJvcmRlci1hbWJlci02MDAgdGV4dC1hbWJlci0zMDAgcmluZy0yIHJpbmctYW1iZXItNTAwLzEwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1bIzEyMTIxNF0gYm9yZGVyLXppbmMtODAwIHRleHQtemluYy00MDAgaG92ZXI6Ym9yZGVyLXppbmMtNzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg15zXkCwg15fXodeZ157XlCAvINeU15LXkdec15Qg15HXmNeV15XXlyDwn5S0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QmpqVGVzdE1vdGlvbklucHV0KCd5ZXMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwLTIuNSByb3VuZGVkLWxnIGJvcmRlciB0ZXh0LXhzIGZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbCB0ZXh0LWNlbnRlciBsZWFkaW5nLW5vcm1hbCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmpqVGVzdE1vdGlvbklucHV0ID09PSAneWVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1lbWVyYWxkLTk1MC80MCBib3JkZXItZW1lcmFsZC02MDAgdGV4dC1lbWVyYWxkLTMwMCByaW5nLTIgcmluZy1lbWVyYWxkLTUwMC8xMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctWyMxMjEyMTRdIGJvcmRlci16aW5jLTgwMCB0ZXh0LXppbmMtNDAwIGhvdmVyOmJvcmRlci16aW5jLTcwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINeb158sINeY15XXldeXINee15zXkCDXldeX15XXpNep15kg15zXktee16jXmSDinIVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiampUZXN0RXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSBiZy1yb3NlLTk1MC80MCBib3JkZXIgYm9yZGVyLXJvc2UtODAwLzgwIHJvdW5kZWQtbGcgdGV4dC1bMTBweF0gdGV4dC1yb3NlLTMwMCB0ZXh0LXJpZ2h0IGxlYWRpbmctbm9ybWFsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiampUZXN0RXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zIGJvcmRlci10IGJvcmRlci1bIzFhMWExYV0gZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiampUZXN0UGFpbklucHV0IHx8ICFiampUZXN0TW90aW9uSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalRlc3RFcnJvcign16DXkCDXnNeU16nXmdeRINei15wg16nXqteZINeU16nXkNec15XXqiDXnNem15XXqNeaINeR15nXp9eV16jXqiDXlNeo15XXpNeQINeU15PXmdeS15nXmNec15kuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalRlc3RFcnJvcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0ZhaWxlZCA9IGJqalRlc3RQYWluSW5wdXQgPT09ICd5ZXMnIHx8IGJqalRlc3RNb3Rpb25JbnB1dCA9PT0gJ25vJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvY2sgcHJvZ3Jlc3Npb24gYW5kIGRpcmVjdCB0byBzdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1TmFtZSA9IGZ1bGxOYW1lLnRyaW0oKSB8fCAn16HXpNeV16jXmNeQ15kgQkpKJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRXZWVrTnVtID0gYmpqQ3VycmVudFdlZWsgPT09IDMgPyAnMSDXkdeo157XlCDXlNeR15DXlCcgOiBgJHtiampDdXJyZW50V2VlayArIDF9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbmRpdGlvblRleHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiampUZXN0UGFpbklucHV0ID09PSAneWVzJyAmJiBiampUZXN0TW90aW9uSW5wdXQgPT09ICdubycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uVGV4dCA9ICfXktedINeb15DXkdeZ150g15XXktedINeU15LXkdec16og16rXoNeV16LXlCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJqalRlc3RQYWluSW5wdXQgPT09ICd5ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblRleHQgPSAn15vXkNeR15nXnSDXoteW15nXnSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJqalRlc3RNb3Rpb25JbnB1dCA9PT0gJ25vJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25UZXh0ID0gJ9eU15LXkdec16og16rXoNeV16LXlCDXldec15zXkCDXm9eQ15HXmdedJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnVGV4dCA9IGDXqdec15XXnSDXqdee15kgJHt1TmFtZX0sINeQ16DXmSDXntep16rXntepINeR15DXpNec15nXp9em15nXlCDXqdec15vXnSBSZWNvdmlvIEFjYWRlbXkuINeQ16DXmSDXqNeV16bXlCDXnNei15HXldeoINec16nXkdeV16Ig157Xodek16ggJHtuZXh0V2Vla051bX0g15DXmiDXmdepINec15kgJHtjb25kaXRpb25UZXh0fS5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly93YS5tZS85NzI1ODc4NTg3MDg/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChtc2dUZXh0KX1gLCAnX2JsYW5rJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93QmpqVGVzdE1vZGFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalRlc3RQYWluSW5wdXQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampUZXN0TW90aW9uSW5wdXQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgn15TXntei16jXm9eqINeW15nXlNeq15Qg15vXkNeRINeX16jXmdeSINeQ15Ug157XkteR15zXqiDXqteg15XXoteULiDXnteq15XXmiDXkNeX16jXmdeV16og15zXqdec15XXnteaLCDXlNeS15nXqdeUINec16nXnNeRINeU15HXkCDXoNep15DXqNeUINeX16HXldee15QuXFxuXFxu16DXoteW16gg15HXpteV15XXqiDXlNee16jXpNeQ15Qg15zXqten158g15XXnNeb15XXldefINee15fXk9epINeQ16og15PXqNeS16og15TXqdeZ16fXldedLiDXm9ei16og15nXmdek16rXlyDXoteR15XXqNeaINei16jXldelINeV15XXkNeY16HXkNekINec16rXmdeQ15XXnSDXkdeZ16jXldeoINee15TXmdeoLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IFBhc3NlZCFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiampDdXJyZW50V2VlayA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm9ybWFsIHdlZWsgdHJhbnNpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0V2sgPSBiampDdXJyZW50V2VlayArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqakN1cnJlbnRXZWVrKG5leHRXayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalNlbGVjdGVkV2Vla1ZpZXcobmV4dFdrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYNee15bXnCDXmNeV15EhINei15HXqNeqINeR15TXptec15fXlCDXkNeqINee15HXk9enINeU15vXqdeZ16jXldeqINeU16nXkdeV16LXmSDXnNec15Ag15vXkNeRINeV15HXmNeV15XXl9eZINeq16DXldei15Qg157XnNeQ15nXnS4g16nXkdeV16IgJHtuZXh0V2t9INek16rXldeXINec15fXnNeV15jXmdefISDXntee16nXmdeb15nXnSDXnNeU16TXpteZ16Ug8J+UpWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWlsZXN0b25lIFdlZWsgMyBUZXN0IFBhc3NlZCAtIFByb2dyZXNzIHRvIG5leHQgTGV2ZWwhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiampDdXJyZW50TGV2ZWwgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEx2bCA9IGJqakN1cnJlbnRMZXZlbCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqQ3VycmVudExldmVsKG5leHRMdmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJqalNlbGVjdGVkTGV2ZWwobmV4dEx2bCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqQ3VycmVudFdlZWsoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqU2VsZWN0ZWRXZWVrVmlldygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChg8J+MnyDXlNeZ16nXkiDXkNeT15nXqCEg16LXkdeo16og15DXqiDXlNee15HXl9efINeU157Xodeb150g15HXlNem15jXmdeZ16DXldeqIVxcblxcbtei16nXmdeqINeW15DXqiAtINep15zXkSAke2JqakN1cnJlbnRMZXZlbH0g15TXldep15zXnSDXkdeU16bXnNeX15Qg157XldeX15zXmNeqLiDXqNee15QgJHtuZXh0THZsfSDXkdeq15XXm9eg15nXqiDXlC1CSkog16DXpNeq15fXlCDXoteR15XXqNeaINec16LXkdeV15PXlCDXntei16nXmdeqINeV16TXqNeV15LXqNeh15nXkdeZ16og15fXk9ep15QhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gR3JhZHVhdGVkIGFsbCAzIGxldmVsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGDwn4+GINeQ15zXldejISDXlNep15zXnteqINeQ16og15vXnCDXqdec15XXqSDXqNee15XXqiDXlNee16TXqNen15nXnSDXldeU16nXmden15XXnSDXlNeQ15nXoNeY16DXodeZ15HXmdeV16og15HXmdeV16rXqCDXqdecINeULUJKSiDXldeU15LXqNeQ16TXnNeZ16DXkiDXkdeQ16fXk9ee15nXmdeqIFJlY292aW8g15HXlNem15jXmdeZ16DXldeqINee16TXqNen15nXqiDXmdeq16jXlCDXqdep15XXnteo16og16LXnNeZ15og157XlNeY15zXldeqINeV15fXoNeZ16fXldeqIVxcblxcbtep157XldeoINei15wg15TXkteV16Mg15fXltenINeV157XpNeo16fXmdedINeS157Xmdep15nXnSDXnNeQ15XXqNeaINeW157XnyDXotecINeU157Xlteo158hIPCfkqpgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0JqalRlc3RNb2RhbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampUZXN0UGFpbklucHV0KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqVGVzdE1vdGlvbklucHV0KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIuNSBiZy1bIzAwN0JGRl0gaG92ZXI6YmctWyMwMDY2RERdIGFjdGl2ZTpiZy1bIzAwNTVCQl0gdGV4dC13aGl0ZSBmb250LWV4dHJhYm9sZCByb3VuZGVkLXhsIHRleHQtY2VudGVyIHRleHQteHMgc2hhZG93LW1kIHRyYW5zaXRpb24tYWxsIGN1cnNvci1wb2ludGVyIGxlYWRpbmctbm9ybWFsIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINep15zXlyDXqtep15XXkdeV16og15XXkdeT15XXpyDXlteb15DXldeqIPCfp6pcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0JqalRlc3RNb2RhbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqVGVzdFBhaW5JbnB1dChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRCampUZXN0TW90aW9uSW5wdXQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqVGVzdEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIuNSBiZy1bIzEyMTIxNF0gaG92ZXI6YmctemluYy04NTAgdGV4dC16aW5jLTMwMCBmb250LWJvbGQgcm91bmRlZC14bCB0ZXh0LWNlbnRlciB0ZXh0LXhzIGJvcmRlciBib3JkZXItemluYy04MDAgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgbGVhZGluZy1ub3JtYWwgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg15HXmdeY15XXnFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNlY3Rpb24gQTogQXRobGV0aWMgUGVyZm9ybWFuY2UgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1leHRyYWJvbGQgdGV4dC1bIzAwN0JGRl0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtcmlnaHRcIj7XqteZ16cg15DXszog15DXmdee15XXnyDXkdeZ16bXldei15nXnSAoUGVyZm9ybWFuY2UpPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIExldmVsIDEgKFVubG9ja2VkKSBhbmQgTGV2ZWwgMiAmIDMgKExvY2tlZCkgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMRVZFTCAxICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMxMTExMTFdIHRvLVsjMDUwNTA1XSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSByb3VuZGVkLXhsIHAtMyBmbGV4IGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtemluYy0yMDBcIj7XqNee15QgMTog15HXp9eo16og15nXpteZ15HXlCDXldeR15zXmdee15Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtYm9sZFwiPvCflJMg16TXqteV15c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFWEVSQ0lTRVNbc2VsZWN0ZWRTcG9ydF0ubWFwKChleCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZXguaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4LmlzRnJlZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEV4ZXJjaXNlKGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJQYXl3YWxsKGV4Lm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yLjUgcm91bmRlZC1sZyBiZy1bIzA3MDcwN10gaG92ZXI6YmctWyMxMTFdLzg1IGJvcmRlciBib3JkZXItWyMxYTFhMWFdLzMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxMXB4XSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXppbmMtMzAwIHRydW5jYXRlIG1heC13LVsxODBweF1cIj57aW5kZXggKyAxfS4ge2V4Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtleC5pc0ZyZWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLVsjMDA3QkZGXS8xMCB0ZXh0LVsjMDA3QkZGXSBib3JkZXIgYm9yZGVyLVsjMDA3QkZGXS8zMCBweC0xLjUgcHktMC41IHJvdW5kZWQgZm9udC1zZW1pYm9sZFwiPteX15nXoNedPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NrIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1bIzAwN0JGRl1cIiAvPiDXoNei15XXnFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMRVZFTCAyICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdHJpZ2dlclBheXdhbGwoJ9eo157XlCAyOiDXl9eV15bXpyDXntek16jXp9eZINeq15fXqiDXoteV157XoScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMGMwYzBjXSB0by1bIzA0MDQwNF0gYm9yZGVyIGJvcmRlci1bIzFhMWExYV0vNDAgcC0zIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC16aW5jLTUwMCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy16aW5jLTkwMC8xMCB0cmFuc2l0aW9uLWFsbCB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPteo157XlCAyOiDXl9eV15bXpyDXntek16jXp9eZINeq15fXqiDXoteV157XodeZ1508L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgZm9udC1tb25vIHRleHQtWzEwcHhdIHRleHQtcm9zZS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NrIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz4g16DXoteV15wgW1ZJUF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBMRVZFTCAzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdHJpZ2dlclBheXdhbGwoJ9eo157XlCAzOiDXl9ec15XXp9eqINee15XXnteg15jXldedINeV16TXnNeZ15DXldee15jXqNeZ15QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzBjMGMwY10gdG8tWyMwNDA0MDRdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdLzQwIHAtMyByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtemluYy01MDAgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctemluYy05MDAvMTAgdHJhbnNpdGlvbi1hbGwgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7XqNee15QgMzog157XlNeZ16jXldeqINeU16nXpyDXldep15nXkteV16gg15vXldeXPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB0ZXh0LXJvc2UtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+INeg16LXldecIFtWSVBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFByb2dyZXNzaW9uIDMgV2Vla3MgRHJpbGxzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yLjUgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtemluYy00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LXJpZ2h0XCI+16rXldeb16DXmdeqINeU16rXp9eT157XldeqINeq15zXqi3XqdeR15XXoteZ16o8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogV2VlayAxICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzExMTExMV0gdG8tWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZVwiPtep15HXldeiIDE6INeR16HXmdehINeV15jXm9eg15nXp9eUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy00MDAgbXQtMVwiPteq16jXkteV15wg16rXl9eZ15zXqiDXkteZ15XXldefINen16bXkSDXodeZ15HXldeRINee15XXmNeV16jXmTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtZW1lcmFsZC01MDAgZm9udC1leHRyYWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj7inJTvuI8g16TXqteV15c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFdlZWsgMiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMwYTBhMGFdIHRvLVsjMDMwMzAzXSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXS80MCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXppbmMtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGRcIj7XqdeR15XXoiAyOiDXlNei15zXkNeqINei15XXntehPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy02MDAgbXQtMVwiPteZ15nXpNeq15cg15HXkNeV16TXnyDXkNeV15jXldee15jXmSDXkdei15XXkyA3INeZ157XmdedINee15TXlNeo16nXnteUPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1yb3NlLTUwMC83MCBmb250LW1vbm8gZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2sgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+INeg16LXldecIDfXk9ezXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogV2VlayAzICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzBhMGEwYV0gdG8tWyMwMzAzMDNdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdLzQwIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtemluYy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZFwiPtep15HXldeiIDM6INep15nXkCDXldeZ16bXmdeR15XXqiDXnteb16DXmdeqPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy02MDAgbXQtMVwiPteX15nXlteV16cg157Xp9ehLdee15XXnteg15jXldedOyDXmdeZ16TXqteXINeR16LXldeTIDE0INeZ157XmdedPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1yb3NlLTUwMC83MCBmb250LW1vbm8gZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2sgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+INeg16LXldecIDE015PXs1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEJvdHRvbSBUcmFuc2l0aW9uIERyaWxsIEJ1dHRvbiAtIExPQ0tFRCB0aWxsIHdlZWsgMyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLVsjMGEwYTBhXSB0ZXh0LXppbmMtNjUwIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIGZvbnQtYm9sZCB0ZXh0LXhzIHJvdW5kZWQteGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgY3Vyc29yLW5vdC1hbGxvd2VkIG10LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXppbmMtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+15TXktepINeh16jXmNeV158g15zXnteR15fXnyDXntei15HXqCDXqdec15EgKNeg16LXldecINec16nXkdeV16IgMyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTZWN0aW9uIEI6IENvbW1vbiBJbmp1cmllcyAo16TXpteZ16LXldeqINeg16TXldem15XXqikgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1leHRyYWJvbGQgdGV4dC1bIzAwN0JGRl0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtcmlnaHRcIj7XqteZ16cg15HXszog16TXpteZ16LXldeqINeg16TXldem15XXqiDXldee16DXmdei15Q8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC1yaWdodCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0lOSlVSWV9QUk9UT0NPTFNbc2VsZWN0ZWRTcG9ydF0ubWFwKChpbmp1cnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luanVyeS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluanVyeS5pc0ZyZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEluanVyeShpbmp1cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJQYXl3YWxsKGluanVyeS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzExMTExMV0gdG8tWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIGhvdmVyOmJnLVsjMGMwYzBjXSByb3VuZGVkLXhsIGZsZXggZmxleC1jb2wgZ2FwLTEgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbi1hbGwgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiPntpbmp1cnkudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5qdXJ5LmlzRnJlZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdIGJnLVsjMDA3QkZGXS8xNSB0ZXh0LVsjMDA3QkZGXSBib3JkZXIgYm9yZGVyLVsjMDA3QkZGXS8zMCBweC0xLjUgcHktMC41IHJvdW5kZWQgZm9udC1zZW1pYm9sZFwiPteX15nXoNedPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtemluYy01MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgZm9udC1tb25vIHRleHQtWzlweF0gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtWyMwMDdCRkZdXCIgLz4g157XldeS158gVklQXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtNTAwIHRydW5jYXRlIG10LTEgbGVhZGluZy1ub3JtYWxcIj57aW5qdXJ5LnN5bXB0b21zfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFRBQiAyOiBDTElOSUMgSU5GTyAqL31cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IEJvdHRvbVRhYi5DTElOSUMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1bIzFhMWExYV0gcGItMyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ibGFjayB0ZXh0LXdoaXRlXCI+15TXp9ec15nXoNeZ16fXlCDXqdecINeU15DXp9eT157XmdeUPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC16aW5jLTQwMCBtdC0xXCI+15DXkdeX15XXnyDXnteb16DXmS3Xqteg15XXoteq15ksINee15PXqNeh15nXnSDXldeh16fXmdeo15XXqiDXkdeZ15XXnteb16DXmdeV16og157Xqten15PXnteV16o8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMTExMTExXSB0by1bIzA1MDUwNV0gYm9yZGVyIGJvcmRlci1bIzFhMWExYV0gcm91bmRlZC0yeGwgcC00IGZsZXggZmxleC1jb2wgZ2FwLTMgdGV4dC1yaWdodCBmb250LXNhbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXppbmMtMzAwIGxlYWRpbmctcmVsYXhlZCBmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDTElOSUNfSU5GTy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yLjUgcHQtMiB0ZXh0LXhzIHRleHQtemluYy0zMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjMDA3QkZGXSBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e0NMSU5JQ19JTkZPLmFkZHJlc3N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1bIzAwN0JGRl0gc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRpcj1cImx0clwiPntDTElOSUNfSU5GTy5waG9uZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjMDA3QkZGXSBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e0NMSU5JQ19JTkZPLmhvdXJzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtemluYy00MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtcmlnaHRcIj7XkdeT15nXp9eV16og15XXpNeo15XXmNeV16fXldec15nXnSDXoNeR15fXqNeZ150g15HXp9ec15nXoNeZ16fXlDo8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDTElOSUNfSU5GTy5wcm9jZWR1cmVzLm1hcCgocHJvYykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2MudGl0bGV9IGNsYXNzTmFtZT1cInAtMyBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMTExMTExXSB0by1bIzA1MDUwNV0gYm9yZGVyIGJvcmRlci1bIzFhMWExYV0vNjAgcm91bmRlZC14bCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtemluYy0yMDAgYmxvY2tcIj57cHJvYy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC16aW5jLTUwMCBtdC0xIGJsb2NrXCI+157XqdeaINeW157Xnzoge3Byb2MudGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1bIzAwN0JGRl0gZm9udC1tb25vXCI+e3Byb2MucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdHJpZ2dlclBheXdhbGwoJ9eR15PXmden15Qg16fXnNeZ16DXmdeqINeZ15nXoteV15PXmdeqJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLVsjMDA3QkZGXSBob3ZlcjpiZy1bIzAwNjZERF0gdGV4dC13aGl0ZSByb3VuZGVkLXhsIHRleHQteHMgZm9udC1ib2xkIHRleHQtY2VudGVyIG10LTMgc2hhZG93LW1kIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAg16rXmdeQ15XXnSDXqteV16gg15HXkNek15zXmden16bXmdeUINeR16jXkNep15xcItemXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7LyogVEFCIDM6IFRIRSBSRUNPVkVSWSBTSE9QICovfVxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFRhYiA9PT0gQm90dG9tVGFiLlNIT1AgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS04NTAgcGItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ibGFjayB0ZXh0LXdoaXRlXCI+15fXoNeV16og15TXkNen15PXnteZ15Q8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtZ3JheS00MDBcIj7Xl9eV157XqNeZINep15nXp9eV150g157Xp9eV157XmdeZ150g15XXnteV16bXqNeZINei15bXqCDXnNeh16TXldeo15jXkNeZINei15zXmdeqPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy16aW5jLTkwMCBweC0zIHB5LTEuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItemluYy04MDAgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LWJsdWUtNDAwIGZvbnQtYm9sZFwiPntjYXJ0Q291bnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtZ3JheS01MDAgbXItMS41XCI+16TXqNeZ15jXmdedPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogRmlsdGVyIGNhdGVnb3JpZXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEuNSBvdmVyZmxvdy14LWF1dG8gcGItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KFsn15TXm9ecJywgJ9ee16nXl9eV16onLCAn16HXpNeo15nXmScsICfXpteZ15XXkyddIGFzIGNvbnN0KS5tYXAoKGNhdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvcENhdGVnb3J5KGNhdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zIHB5LTEuNSByb3VuZGVkLWxnIHRleHQtWzEwcHhdIGZvbnQtYm9sZCBib3JkZXIgc2hyaW5rLTAgdHJhbnNpdGlvbi1hbGwgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcENhdGVnb3J5ID09PSBjYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1bIzAwN0JGRl0gYm9yZGVyLVsjMDA2NkREXSB0ZXh0LXdoaXRlIHNoYWRvdy1tZCBzaGFkb3ctWyMwMDdCRkZdLzEwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMxMTExMTFdIHRvLVsjMDUwNTA1XSBib3JkZXItWyMxYTFhMWFdIHRleHQtemluYy00MDAgaG92ZXI6YmctWyMwYzBjMGNdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge2JvdWdodEl0ZW1OYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIuNSBiZy1lbWVyYWxkLTk1MC8yMCB0ZXh0LWVtZXJhbGQtNDAwIGJvcmRlciBib3JkZXItZW1lcmFsZC05MDAvNDAgcm91bmRlZC14bCB0ZXh0LWNlbnRlciB0ZXh0LXhzIGFuaW1hdGUtYm91bmNlIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg16DXldeh16Mg15zXodecOiB7Ym91Z2h0SXRlbU5hbWV9IOKclO+4j1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1NIT1BfSVRFTVMuZmlsdGVyKGl0ZW0gPT4gc2hvcENhdGVnb3J5ID09PSAn15TXm9ecJyB8fCBpdGVtLmNhdGVnb3J5ID09PSBzaG9wQ2F0ZWdvcnkpLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJwLTMgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bIzExMTExMV0gdG8tWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHJvdW5kZWQtMnhsIGZsZXggZ2FwLTMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2V9IGFsdD17aXRlbS50aXRsZX0gY2xhc3NOYW1lPVwidy0yMCBoLTIwIHJvdW5kZWQteGwgb2JqZWN0LWNvdmVyIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHNocmluay0wIGJnLWJsYWNrLzYwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZSBibG9jayBsZWFkaW5nLW5vcm1hbFwiPntpdGVtLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjODg4ODg4XSBsZWFkaW5nLXJlbGF4ZWQgbXQtMSBsaW5lLWNsYW1wLTJcIj57aXRlbS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC0yIHB0LTEgYm9yZGVyLXQgYm9yZGVyLVsjMWExYTFhXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtWyMwMDdCRkZdIGZvbnQtbW9ub1wiPntpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENhcnRDb3VudChwcmV2ID0+IHByZXYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Qm91Z2h0SXRlbU5hbWUoaXRlbS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Qm91Z2h0SXRlbU5hbWUobnVsbCksIDMwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMSBiZy1bIzExMTExMV0gaG92ZXI6YmctWyMxYTFhMWFdIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtWzEwcHhdIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1bIzFhMWExYV0gdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyDXlNeV16HXoyDXnNeh15xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBTQ1JFRU4gNDogUEVSU0lTVEVOVCBCT1RUT00gTkFWSUdBVElPTiBCQVIgKFJUTCBPUkdBTklaRUQpICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjay85NSBib3JkZXItdCBib3JkZXItWyMxYTFhMWFdIHB4LTMgcHktMiBncmlkIGdyaWQtY29scy00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzZWxlY3Qtbm9uZSB6LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VGFiKEJvdHRvbVRhYi5IT01FKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHB5LTEuNSB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiID09PSBCb3R0b21UYWIuSE9NRSA/ICd0ZXh0LVsjMDA3QkZGXSBmb250LWJvbGQnIDogJ3RleHQtemluYy01MDAgaG92ZXI6dGV4dC16aW5jLTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxBY3Rpdml0eSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdXCI+157XodeaINeR15nXqjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmdWxsTmFtZS50cmltKCkgfHwgJ9eh16TXldeo15jXkNeZJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IGDXqdec15XXnSwg16nXnteZICR7bmFtZX0sINeU15LXoteq15kg15PXqNeaINeU15DXpNec15nXp9em15nXlCDXqdec15vXnSBSZWNvdmlvIEFjYWRlbXkuINeQ16DXmSDXntei15XXoNeZ15nXnyDXnNen15HXldeiINeq15XXqCDXnNen15zXmdeg15nXp9eULmA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgaHR0cHM6Ly93YS5tZS85NzI1ODc4NTg3MDg/dGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudChtc2cpfWAsICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0xLjUgcHktMS41IHRleHQtemluYy01MDAgaG92ZXI6dGV4dC1bIzAwN0JGRl0gdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC16aW5jLTUwMCBob3Zlcjp0ZXh0LVsjMDA3QkZGXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XVwiPteU16fXnNeZ16DXmden15Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50VGFiKEJvdHRvbVRhYi5TSE9QKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHB5LTEuNSB0cmFuc2l0aW9uIGN1cnNvci1wb2ludGVyICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFiID09PSBCb3R0b21UYWIuU0hPUCA/ICd0ZXh0LVsjMDA3QkZGXSBmb250LWJvbGQnIDogJ3RleHQtemluYy01MDAgaG92ZXI6dGV4dC16aW5jLTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTaG9wcGluZ0JhZyBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdXCI+15TXl9eg15XXqjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRyaWdnZXJQYXl3YWxsKCfXplxcJ9eQ15gg16rXnteZ15vXlCBWSVAnKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMS41IHB5LTEuNSB0ZXh0LXppbmMtNTAwIGhvdmVyOnRleHQtemluYy0zMDAgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyMwMDdCRkZdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtMSAtcmlnaHQtMSB3LTIgaC0yIGJnLXJlZC02MDAgcm91bmRlZC1mdWxsIGFuaW1hdGUtcGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs5cHhdXCI+16Yn15DXmCDXqtee15nXm9eUIFtWSVBdPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogQkpKIEN1c3RvbSBUb2FzdCBBbGVydCBvbi1zY3JlZW4gKi99XG4gICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7YmpqVG9hc3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE1LCBzY2FsZTogMC45NSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwLCBzY2FsZTogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAxMCwgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTE2IGxlZnQtMyByaWdodC0zIHotNTAgYmctWyMwMDdCRkZdIGJvcmRlciBib3JkZXItWyMwMGM2ZmZdLzQwIHRleHQtd2hpdGUgcC0zIHJvdW5kZWQteGwgc2hhZG93LVswXzEwcHhfMzBweF9yZ2JhKDAsMTIzLDI1NSwwLjM1KV0gZmxleCBpdGVtcy1zdGFydCBnYXAtMi41IHRleHQtcmlnaHQgZm9udC1zYW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpcmVjdGlvbjogJ3J0bCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHNocmluay0wXCI+4pqg77iPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1bMTFweF0gZm9udC1ibGFjayBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2JqalRvYXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRCampUb2FzdChudWxsKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC13aGl0ZS84MCB0cmFuc2l0aW9uLWNvbG9ycyBwLTAuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICA8L0FuZHJvaWRGcmFtZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiBQT1BVUCBPVkVSTEFZIElOVEVSQUNUSVZFIE1PREFMUyAqL31cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIFxuICAgICAgICB7LyogTU9EQUwgMTogRVhFUkNJU0UgREVUQUlMIE1PREFMICovfVxuICAgICAgICB7c2VsZWN0ZWRFeGVyY2lzZSAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2svODUgYmFja2Ryb3AtYmx1ci1zbSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB6LTUwIHAtNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMC45NSB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxIH19XG4gICAgICAgICAgICAgIGV4aXQ9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMwNTA1MDVdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHctZnVsbCBtYXgtdy1tZCByb3VuZGVkLTJ4bCBwLTYgdGV4dC1yaWdodCByZWxhdGl2ZSBzaGFkb3ctMnhsXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlyZWN0aW9uOiAncnRsJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRFeGVyY2lzZShudWxsKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTQgcC0yIHJvdW5kZWQtbGcgYmctWyMxMTExMTFdIGhvdmVyOmJnLVsjMWMxYzFjXSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSB0cmFuc2l0aW9uIHRleHQtemluYy00MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgbWItNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtbGcgYmctWyMwMDdCRkZdLzEwIGJvcmRlciBib3JkZXItWyMwMDdCRkZdLzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8QXdhcmQgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LVsjMDA3QkZGXVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy01MDAgZm9udC1ib2xkXCI+157Xk9eo15nXmiDXqteo15LXmdec15nXnSDXl9eV16TXqdeZIC0ge1NQT1JUX0lORk9bc2VsZWN0ZWRTcG9ydF0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC0wLjVcIj57c2VsZWN0ZWRFeGVyY2lzZS5uYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00IHRleHQteHMgbGVhZGluZy1yZWxheGVkIHRleHQtemluYy0zMDBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBiZy1ibGFjay82MCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItWyMxYTFhMWFdXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC16aW5jLTQwMCBibG9jayBtYi0xIGZvbnQtc2Fuc1wiPtee15jXqNeUINeV15HXmden15XXqSDXqteg15XXoteq15k6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMFwiPntzZWxlY3RlZEV4ZXJjaXNlLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMyBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjMTExXSB0by1bIzA1MDUwNV0gcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwIGJsb2NrXCI+157Xl9eW15XXqCDXotem15nXnteV16o6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC13aGl0ZVwiPntzZWxlY3RlZEV4ZXJjaXNlLmR1cmF0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTUwMCBibG9ja1wiPteo157XqiDXp9eV16nXmTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LVsjMDA3QkZGXVwiPntzZWxlY3RlZEV4ZXJjaXNlLmRpZmZpY3VsdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRFeGVyY2lzZShudWxsKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yLjUgdGV4dC14cyBmb250LWJvbGQgYmctWyMwMDdCRkZdIGhvdmVyOmJnLVsjMDA2NkREXSB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgc2hhZG93LW1kIHNoYWRvdy1bIzAwN0JGRl0vMTBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINeU16rXl9ecINeq16jXkteZ15wg15HXnteS16jXqVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkRXhlcmNpc2UobnVsbCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIuNSB0ZXh0LXhzIGZvbnQtYm9sZCBiZy1bIzExMTExMV0gaG92ZXI6YmctWyMxYTFhMWFdIHRleHQtemluYy0zMDAgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg16HXkteV16hcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBNT0RBTCAyOiBJTkpVUlkgU1RFUFMgREVUQUlMIE1PREFMICovfVxuICAgICAgICB7c2VsZWN0ZWRJbmp1cnkgJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzg1IGJhY2tkcm9wLWJsdXItc20gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgei01MCBwLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSB9fVxuICAgICAgICAgICAgICBleGl0PXt7IHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjMDUwNTA1XSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSB3LWZ1bGwgbWF4LXctbGcgcm91bmRlZC0yeGwgcC02IHRleHQtcmlnaHQgcmVsYXRpdmUgc2hhZG93LTJ4bFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpcmVjdGlvbjogJ3J0bCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSW5qdXJ5KG51bGwpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IGxlZnQtNCBwLTIgcm91bmRlZC1sZyBiZy1bIzExMTExMV0gaG92ZXI6YmctWyMxYTFhMWFdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHRyYW5zaXRpb24gdGV4dC16aW5jLTQwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWxnIGJnLXJvc2UtNTAwLzEwIGJvcmRlciBib3JkZXItcm9zZS01MDAvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxIZWFydCBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtcm9zZS01MDAgYW5pbWF0ZS1wdWxzZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy01MDAgdXBwZXJjYXNlIGZvbnQtYmxhY2tcIj7XpNeo15XXmNeV16fXldecINei15bXqNeUINeV16LXnteZ15fXqiDXm9eQ15E8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC0wLjVcIj57c2VsZWN0ZWRJbmp1cnkudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgdGV4dC14cyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC16aW5jLTMwMFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcm9zZS00MDAgYmctcm9zZS05NTAvMTAgcC0yLjUgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXJvc2UtOTUwLzMwIHRleHQtWzExcHhdXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPteh15nXntek15jXldee15nXnSDXnteV15HXmdec15nXnTo8L3N0cm9uZz4ge3NlbGVjdGVkSW5qdXJ5LnN5bXB0b21zfVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXppbmMtNDAwIGJsb2NrIGZvbnQtc2Fuc1wiPtem16LXk9eZINep15nXp9eV150g15DXp9eY15nXkdeZ15nXnTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJbmp1cnkuc3RlcHMubWFwKChzdGVwLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMiBiZy1ibGFjay82MCBwLTIuNSByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItWyMxYTFhMWFdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy01IGgtNSByb3VuZGVkLWZ1bGwgYmctWyMwMDdCRkZdLzEwIGJvcmRlciBib3JkZXItWyMwMDdCRkZdLzMwIHRleHQtWyMwMDdCRkZdIHRleHQtWzEwcHhdIGZvbnQtYm9sZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzaHJpbmstMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpZHggKyAxfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57c3RlcH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkSW5qdXJ5KG51bGwpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0yLjUgdGV4dC14cyBmb250LWJvbGQgYmctWyMxMTExMTFdIGhvdmVyOmJnLVsjMWExYTFhXSB0ZXh0LXppbmMtMzAwIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1bIzFhMWExYV0gdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgINeU15HXoNeq15ksINeh15LXldeoXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogTU9EQUwgNDogQ1VTVE9NIE5BVElWRSBQQVlXQUxMIEZPUiBCSkogKEdPT0dMRSBQQVkgJiBCSVQpICovfVxuICAgICAgICB7c2hvd0JqalBheXdhbGwgJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzk1IGJhY2tkcm9wLWJsdXItbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgei01MCBwLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuOTUsIHk6IDIwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBzY2FsZTogMC45NSwgeTogMjAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctemluYy05NTAgYm9yZGVyIGJvcmRlci16aW5jLTkwMC84NSB3LWZ1bGwgbWF4LXctbWQgcm91bmRlZC0yeGwgcC02IHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsIGZvbnQtc2Fuc1wiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpcmVjdGlvbjogJ3J0bCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIGJhY2tncm91bmQgZmxvdyBjb2xvciBnbG93ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTEvMiB0cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTQ4IGgtNDggYmctWyMwMDdCRkZdLzE1IHJvdW5kZWQtZnVsbCBibHVyLTN4bCBwb2ludGVyLWV2ZW50cy1ub25lIGFuaW1hdGUtcHVsc2VcIiAvPlxuXG4gICAgICAgICAgICAgIHsvKiBDbG9zZSBCdXR0b24gdW5sZXNzIHByb2Nlc3NpbmcgKi99XG4gICAgICAgICAgICAgIHshaXNQcm9jZXNzaW5nUGF5bWVudCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93QmpqUGF5d2FsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldElzUHJvY2Vzc2luZ1BheW1lbnQobnVsbCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgbGVmdC00IHAtMiByb3VuZGVkLWxnIGJnLXppbmMtOTAwIGhvdmVyOmJnLXppbmMtODAwIGJvcmRlciBib3JkZXItemluYy04NTAgdHJhbnNpdGlvbiB0ZXh0LXppbmMtNDAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7aXNQcm9jZXNzaW5nUGF5bWVudCA/IChcbiAgICAgICAgICAgICAgICAvKiBQYXltZW50IFByb2Nlc3NpbmcgU3Bpbm5lciBTY3JlZW4gKi9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggc3BhY2UteS02IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLVszMDBweF1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItWyMwMDdCRkZdLzI1IGJvcmRlci10LVsjMDA3QkZGXSBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC1jZW50ZXIgdGV4dC1yaWdodCBwci0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYmxhY2sgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPtee16LXkdeTINeq16nXnNeV150g157XkNeV15HXmNeXLi4uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXppbmMtNDAwIGZvbnQtc2FucyBsZWFkaW5nLW5vcm1hbCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtpc1Byb2Nlc3NpbmdQYXltZW50ID09PSAnZ29vZ2xlcGF5JyBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ9ee16rXl9eR16gg15wtR29vZ2xlIFBheSDXldee15DXnteqINeb16jXmNeZ16Eg15DXqdeo15DXmSDXp9eR15XXoi4uLicgXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICfXntei15HXmdeoINeR16fXqdeqINeq16nXnNeV150g157XkNeV15HXmNeX16og15zXkNek15zXmden16bXmdeZ16ogQml0INeR15jXnNek15XXnyDXlNeQ15nXqdeZINep15zXmi4uLid9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC16aW5jLTY1NSBmb250LW1vbm8gYmxvY2sgdGV4dC1jZW50ZXJcIj5TU0wgRW5jcnlwdGlvbiBQcm90ZWN0ZWQg4oCiIFJlY292aW8gU2VjdXJlIEdhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IGJqaklzUHJlbWl1bSA/IChcbiAgICAgICAgICAgICAgICAvKiBQYXltZW50IFN1Y2Nlc3MgU2NyZWVuICovXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IHNwYWNlLXktNSB0ZXh0LWNlbnRlciBtaW4taC1bMzAwcHhdIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNCBteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBiZy1lbWVyYWxkLTk1MC80MCBib3JkZXItMiBib3JkZXItZW1lcmFsZC01MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byB0ZXh0LTN4bCBhbmltYXRlLWJvdW5jZSBzaGFkb3ctbGcgc2hhZG93LWVtZXJhbGQtNTAwLzEwIHRleHQtZW1lcmFsZC00MDAgZm9udC1leHRyYWJvbGQgcGItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIOKck1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ibGFjayB0ZXh0LWVtZXJhbGQtNDAwXCI+15TXl9eR16jXldeqINep15XXk9eo15LXlCDXkdeU16bXnNeX15QhIPCfj4Y8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC16aW5jLTMwMCBsZWFkaW5nLXJlbGF4ZWQgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINeo15vXqdeqINeS15nXqdeUINee15zXkNeUINecLVJlY292aW8gQWNhZGVteS4g15vXnCDXlNeh16jXmNeV16DXmdedLCDXpNeo15XXmNeV16fXldec15kg15TXqdeZ16fXldedLCDXldeU157XkdeT16fXmdedINeU16fXnNeZ16DXmdeZ150g16nXnCDXqteV150g16TXqteV15fXmdedINeb16LXqiDXkdeQ15XXpNefINeX15XXpNep15khXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93QmpqUGF5d2FsbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1lbWVyYWxkLTUwMCB0by10ZWFsLTYwMCBob3Zlcjpmcm9tLWVtZXJhbGQtNjAwIGhvdmVyOnRvLXRlYWwtNzAwIGZvbnQtZXh0cmFib2xkIHRleHQteHMgcm91bmRlZC14bCB0ZXh0LXdoaXRlIHRyYWNraW5nLXdpZGUgdHJhbnNpdGlvbiBzaGFkb3ctbGcgc2hhZG93LWVtZXJhbGQtNTAwLzEwIHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg8J+agCDXlNeq15fXnCDXnNeU16rXkNee158g15HXkteo16HXqiDXlNek16jXmdee15nXldedINei15vXqdeZ15UhXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAvKiBTdGFuZGFyZCBQYXl3YWxsIEludGVyZmFjZSBTY3JlZW4gKi9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC14bCBiZy1ncmFkaWVudC10by10ciBmcm9tLVsjMDA3QkZGXSB0by12aW9sZXQtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG14LWF1dG8gdGV4dC13aGl0ZSBzaGFkb3ctbGcgc2hhZG93LVsjMDA3QkZGXS8xNVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy01IGgtNSBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSB0ZXh0LVsjMDA3QkZGXSBmb250LWJsYWNrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBmb250LW1vbm9cIj5SRUNPVklPIEFDQURFTVkgUFJFTUlVTTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ibGFjayB0ZXh0LXdoaXRlIGxlYWRpbmctc251Z1wiPteX15XXnteqINeq16nXnNeV150g16fXnNeZ16DXmdeqPC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7YmpqUGF5d2FsbEZlYXR1cmVOYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy16aW5jLTkwMC82MCBib3JkZXIgYm9yZGVyLXppbmMtOTAwIHAtMi41IHJvdW5kZWQteGwgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdGV4dC16aW5jLTUwMCBmb250LWJvbGQgYmxvY2tcIj7XlNeq15XXm9efINep15HXqNem15XXoNeaINec16TXqteV15c6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ibGFjayB0ZXh0LWFtYmVyLTQwMCBtdC0wLjUgYmxvY2tcIj57YmpqUGF5d2FsbEZlYXR1cmVOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMxMjBhMDVdIHRvLVsjMGMwNTAyXSBib3JkZXIgYm9yZGVyLWFtYmVyLTUwMC8yMCBwLTQgcm91bmRlZC14bCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1hbWJlci0yNTAgbGVhZGluZy1yZWxheGVkIGZvbnQtc2FucyBmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgINeo15XXpteUINec157XoNeV16Ig15DXqiDXlNek16bXmdei15Qg15TXkdeQ15Q/INek16rXlyDXkteZ16nXlCDXntec15DXlCDXnNeb15wg15TXqteV15vXoNeZ15XXqiwg15TXodeo15jXldeg15nXnSDXldee15HXl9eg15kg15TXm9ep15nXqNeV16og16nXnCBSZWNvdmlvIEFjYWRlbXkuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBwci0xLjUgdGV4dC1yaWdodCBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMCBzaHJpbmstMCBtdC0wLjVcIj7inJTvuI88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMCBmb250LW1lZGl1bVwiPtek16rXmdeX16og15vXnCA1INeq16jXkteZ15zXmSDXlC1CSkog15TXnteV15bXlNeR15nXnSDXnNeh15nXnteY16jXmdeUINeV157XoNeZ16LXqiDXpNem15nXoteV16ouPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQteHMgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMCBzaHJpbmstMCBtdC0wLjVcIj7inJTvuI88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMCBmb250LW1lZGl1bVwiPtem16TXmdeZ15Qg15HXoNeS158g16HXqNeY15XXnyDXlNeQ15nXnteV158g15TXqNem15nXoyDXnNep15nXnteV16kg157XmdeV16nXqCDXnteV15wg15TXnteW16jXoNeZ150uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQteHMgZm9udC1zYW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMCBzaHJpbmstMCBtdC0wLjVcIj7inJTvuI88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMCBmb250LW1lZGl1bVwiPteU15LXqdeqINeh16jXmNeV16DXmSDXnteR15PXpyDXqdeR15XXoteZ15nXnSDXqteX16og15TXotec15DXqiDXp9eR16bXmdedINec15HXk9eZ16fXqiDXqteV150gKNek15nXlteZ15XXqteo16TXmdeh15gg157Xldee15fXlCkuPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXppbmMtOTAwLzQwIGJvcmRlciBib3JkZXItWyMxYTFhMjBdIHAtMyByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJsb2NrIGZvbnQtc2Fuc1wiPteX15HXqNeV16og15fXldeT16nXmdeqINen15HXldei15Q8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOS41cHhdIHRleHQtemluYy01MDBcIj7XoNeZ16rXnyDXnNeR15nXmNeV15wg15zXnNeQINeb15wg15TXqteX15nXmdeR15XXqjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQtYmFzZSB0ZXh0LVsjMDA3QkZGXSBmb250LW1vbm9cIj7igqo0OSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMC41cHhdIHRleHQtemluYy01MDAgZm9udC1ub3JtYWwgZm9udC1zYW5zXCI+L9eX15XXk9epPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7LyogUGF5bWVudCBNZXRob2RzIFNlY3Rpb24gKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMi41IHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIEdvb2dsZSBQYXkgQnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQcm9jZXNzaW5nUGF5bWVudCgnZ29vZ2xlcGF5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqSXNQcmVtaXVtKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1Byb2Nlc3NpbmdQYXltZW50KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTgwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMyBiZy1ibGFjayBob3ZlcjpiZy1uZXV0cmFsLTk1MCB0ZXh0LXdoaXRlIHJvdW5kZWQteGwgZm9udC1leHRyYWJvbGQgdGV4dC14cyBzaGFkb3ctbWQgYm9yZGVyIGJvcmRlci16aW5jLTkwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzY2FsZS1bMS4wMV0gYWN0aXZlOnRyYW5zbGF0ZS15LTAuNSBjdXJzb3ItcG9pbnRlciBmb250LXNhbnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+SsyDXqtep15zXldedINee15TXmdeoINeR15DXntem16LXldeqIEdvb2dsZSBQYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBCaXQgQnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNQcm9jZXNzaW5nUGF5bWVudCgnYml0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmpqSXNQcmVtaXVtKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJc1Byb2Nlc3NpbmdQYXltZW50KG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTgwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMyBiZy1bIzAwRDBDNV0gaG92ZXI6YmctWyMwMGIwYTddIHRleHQtd2hpdGUgcm91bmRlZC14bCBmb250LWV4dHJhYm9sZCB0ZXh0LXhzIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0cmFuc2l0aW9uLWFsbCBob3ZlcjpzY2FsZS1bMS4wMV0gYWN0aXZlOnRyYW5zbGF0ZS15LTAuNSBjdXJzb3ItcG9pbnRlciBmb250LXNhbnNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+8J+TsSDXqtep15zXldedINee15DXldeR15jXlyDXkdeQ157Xptei15XXqiBCaXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBNT0RBTCAzOiBWSVAgUFJFTUlVTSBQQVlXQUxMICovfVxuICAgICAgICB7cGF5d2FsbE9wZW4gJiYgKFxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrLzkyIGJhY2tkcm9wLWJsdXItbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgei01MCBwLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuOTUsIHk6IDE1IH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBzY2FsZTogMC45NSwgeTogMTUgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgYm9yZGVyIGJvcmRlci1ibHVlLTk1MC80MCB3LWZ1bGwgbWF4LXctbWQgcm91bmRlZC0yeGwgcC02IHRleHQtY2VudGVyIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZGlyZWN0aW9uOiAncnRsJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogYmFja2dyb3VuZCBjb2xvciBmbGFyZSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0xLzIgdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgdy00OCBoLTQ4IGJnLVsjMDA3QkZGXS8xMCByb3VuZGVkLWZ1bGwgYmx1ci0zeGwgcG9pbnRlci1ldmVudHMtbm9uZVwiIC8+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFBheXdhbGxPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCBsZWZ0LTQgcC0yIHJvdW5kZWQtbGcgYmctWyMxMTExMTFdIGhvdmVyOmJnLVsjMWMxYzFjXSBib3JkZXIgYm9yZGVyLVsjMWExYTFhXSB0cmFuc2l0aW9uIHRleHQtemluYy00MDAgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHJvdW5kZWQtMnhsIGJnLWdyYWRpZW50LXRvLXRyIGZyb20tWyMwMDdCRkZdIHRvLWluZGlnby02MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi00IHRleHQtd2hpdGUgc2hhZG93LWxnIHNoYWRvdy1bIzAwN0JGRl0vMjBcIj5cbiAgICAgICAgICAgICAgICA8U3BhcmtsZXMgY2xhc3NOYW1lPVwidy02IGgtNiBhbmltYXRlLXB1bHNlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTBweF0gdGV4dC1bIzAwN0JGRl0gZm9udC1leHRyYWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCBmb250LW1vbm9cIj7Xl9eR16jXldeqIFJlY292aW8gVklQIFByZW1pdW08L3NwYW4+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ibGFjayB0ZXh0LXdoaXRlIG10LTFcIj7XpNeq15cg15DXqiDXm9ecINeU16rXqNeS15nXnNeZ150g15XXlNek16jXldeY15XXp9eV15zXmdedITwvaDM+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmx1ZS0zMDAvODAgYmctYmx1ZS05NTAvMjAgcC0yLjUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWJsdWUtOTAwLzIwIG10LTMgbXgtNCBsZWFkaW5nLW1lZGl1bSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgINeg15nXodeZ16og15zXktep16og15DXnDogPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XCJ7cGF5d2FsbEZlYXR1cmVOYW1lfVwiPC9zdHJvbmc+INeQ16nXqCDXnteV15LXnyDXnNeX15HXqNeZIFZJUCDXkdec15HXky5cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiBzcGFjZS15LTMgcHItMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyMwMDdCRkZdIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtMzAwXCI+15LXmdep15Qg157XnNeQ15Qg15wtNTAg16rXqNeS15nXnNeZINei15nXnNeZ16og16DXldeh16TXmdedINec15vXnCA0INei16DXpNeZINeU16HXpNeV16jXmC48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyMwMDdCRkZdIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtMzAwXCI+16Yn15DXmCDXqtee15nXm9eUINen15zXmdeg15kt16TXmdeW15nXldeq16jXpNeZIFZJUCDXmdep15nXqCDXotedINeT15XXp9eY15XXqCDXpNeZ15bXmdeV16rXqNek15nXlC48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtWyMwMDdCRkZdIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtMzAwXCI+16TXqNeV15jXlden15XXnNeZ150g157XpNeV16jXmNeZ150g15XXnteX15nXmdeR15kg157Xoten15Eg15zXm9ecINeh15XXkteZINek16bXmdei15XXqiDXlNeh15fXmdeY15QuPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMiB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LVsjMDA3QkZGXSBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC16aW5jLTMwMFwiPteU16LXnNeQ16og16HXqNeY15XXoNeZ150g16fXkdeV16LXlCDXnNee15HXl9eg15kg157XoteR16gg16nXnNeR15nXnSAo15zXpNeZ15PXkdenINeR15nXldee15vXoNeZINeQ15nXqdeZKS48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMxMTExMTFdIGJvcmRlciBib3JkZXItWyMxYTFhMWFdIHAtNCByb3VuZGVkLXhsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJsb2NrXCI+15fXkdeo15XXqiDXl9eV15PXqdeZ16og16fXkdeV16LXlDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtemluYy01MDBcIj7XoNeZ16rXnyDXnNeR15nXmNeV15wg15HXm9ecINei16o8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1sZyB0ZXh0LVsjMDA3QkZGXSBmb250LW1vbm9cIj7igqo0OSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtemluYy01MDAgZm9udC1ub3JtYWxcIj4v15fXldeT16k8L3NwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UGF5d2FsbE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLVsjMDA3QkZGXSBob3ZlcjpiZy1bIzAwNjZERF0gYWN0aXZlOmJnLVsjMDA1NUJCXSBmb250LWJvbGQgdGV4dC14cyByb3VuZGVkLXhsIHRleHQtd2hpdGUgdHJhY2tpbmctd2lkZSB0cmFuc2l0aW9uIHNoYWRvdy1sZyBzaGFkb3ctWyMwMDdCRkZdLzE1IHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgINeU16bXmNeo16Mg15zXotec15nXqiBWSVAg16LXm9ep15nXlVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICl9XG5cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuXG4gICAgICB7LyogRk9PVEVSIE1FVFJJQ1MgSU5GTyAqL31cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwibXQtYXV0byBib3JkZXItdCBib3JkZXItWyMxYTFhMWFdIGJnLWJsYWNrIHB5LTQgcHgtOCB0ZXh0LXhzIHRleHQtemluYy01MDAgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0zXCI+XG4gICAgICAgIDxzcGFuPsKpIDIwMjYg15DXp9eT157XmdeZ16og16LXnNeZ16og15zXkdeZ16bXldei15nXnSDXldep15nXp9eV150g15DXqtec15jXmS4g15vXnCDXlNeW15vXldeZ15XXqiDXqdee15XXqNeV16ouPC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj48c3BhbiBjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLWVtZXJhbGQtNTAwIHJvdW5kZWQtZnVsbFwiPjwvc3Bhbj4g16HXmdee15XXnNem15nXlCDXnteR15XXodeh16ot157XpteRINee16fXldee15kg157Xldep15zXnteqPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPtei15nXqNeZ15nXqiDXqNeQ16nXldefINec16bXmdeV158g15DXp9eT157XmdeqINeq16fXmdeg15Q8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiJBQTZsQk0sU0F1MkN5QyxVQXYyQ3pDO0FBN2xCTjtBQUFBO0FBQUE7QUFBQTtBQUtBLFNBQVMsVUFBVSxpQkFBeUM7QUFDNUQsU0FBUyxRQUFRLHVCQUF1QjtBQUN4QztBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFHQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBRUE7QUFBQSxFQUNBO0FBQUEsRUFFQTtBQUFBLEVBQ0E7QUFBQSxPQUNLO0FBRVAsU0FBUyxXQUFXLFdBQVcsV0FBVyxnQkFBZ0IsaUJBQWlCO0FBQzNFLFNBQVMsWUFBWSxXQUFXLGtCQUFrQixZQUFZLG1CQUE2QztBQUMzRyxPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLHNCQUFzQjtBQUM3QixPQUFPLDBCQUEwQjtBQUNqQyxTQUFTLHNCQUFzQjtBQUUvQixNQUFNLGtCQUFrQjtBQUFBLEVBQ3RCO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxNQUFNO0FB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