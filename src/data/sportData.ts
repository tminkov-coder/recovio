/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SportType, ShopItem } from '../types';

export const SPORT_INFO = {
  [SportType.FOOTBALL]: {
    name: 'כדורגל',
    icon: '⚽',
    tagline: 'שיפור כוח מתפרץ, זריזות רב-כיוונית ומניעת פציעות ברך ומפשעה.',
    color: '#0066FF'
  },
  [SportType.BJJ]: {
    name: "ג'יו-ג'יטסו",
    icon: '🥋',
    tagline: 'ייצוב מפרק הכתף והצוואר, גמישות אקטיבית וכוח בלימה.',
    color: '#9C27B0'
  },
  [SportType.TENNIS]: {
    name: 'טניס',
    icon: '🎾',
    tagline: 'מניעת מרפק טניס (Epicondylitis), כוח רוטציה והעברות משקל.',
    color: '#CDDC39'
  },
  [SportType.SWIMMING]: {
    name: 'שחייה',
    icon: '🏊',
    tagline: 'שיקום כתף שחיין, שיפור טווחי תנועה טורקליים וכוח גב.',
    color: '#00BCD4'
  }
};

export interface ExerciseItem {
  id: string;
  name: string;
  duration: string;
  difficulty: 'מתחילים' | 'בינוני' | 'עלית';
  isFree: boolean;
  description: string;
}

export const EXERCISES: Record<SportType, ExerciseItem[]> = {
  [SportType.FOOTBALL]: [
    { id: 'fb-1', name: 'חיזוק אקצנטרי של ההמסטרינגס (Nordic Curls)', duration: '3 סטים x 6 חזרות', difficulty: 'מתחילים', isFree: true, description: 'תרגיל הדגל למניעת קרעים בשריר הירך האחורי. ירידה איטית ומבוקרת כנגד התנגדות.' },
    { id: 'fb-2', name: 'ייצוב חד-רגלי דינמי עם גומייה', duration: '4 סטים x 45 שניות לכל רגל', difficulty: 'בינוני', isFree: false, description: 'מניעת פציעות ברך (ACL) על ידי תרגול שיווי משקל דינמי במשטח לא יציב.' },
    { id: 'fb-3', name: 'ניתורים פליאומטריים רקטיביים (Crossover Jumps)', duration: '5 סטים x 8 ניתורים', difficulty: 'עלית', isFree: false, description: 'שיפור כוח מתפרץ בשילוב בלימה מהירה בשינויי כיוון פתאומיים בקצב גבוה.' },
    { id: 'fb-4', name: 'מתיחות אקטיביות למקרבי הירך (Copenhagen Plank)', duration: '3 סטים x 30 שניות', difficulty: 'בינוני', isFree: false, description: 'חיזוק מקרבי רקמת המפשעה למניעת דלקות כרוניות מבעיטות עצימות.' },
    { id: 'fb-5', name: 'שיפור קצב השקת רגל (Ankling & High Knees)', duration: '4 סטים x 20 מטר', difficulty: 'עלית', isFree: false, description: 'קואורדינציה עצבית-שרירית עילאית להגברת תדירות הצעד במאוצים קצרים.' }
  ],
  [SportType.BJJ]: [
    { id: 'bjj-1', name: 'ייצוב מפרק הכתף ברוטציה (Shoulder Halo)', duration: '3 סטים x 12 חזרות', difficulty: 'מתחילים', isFree: true, description: 'חיזוק השרוול המסובב (Rotator Cuff) מפני פריקות והכנעות לחץ כגון Kimura.' },
    { id: 'bjj-2', name: 'התנגדות צוואר איזומטרית עם משקולת רכה', duration: '3 סטים x 20 שניות לכל צד', difficulty: 'בינוני', isFree: false, description: 'הכנת חוליות הצוואר לעומסי Chokes ומצבי לחץ מקסימליים על ידי כיווץ איזומטרי.' },
    { id: 'bjj-3', name: 'הרמות אגן דינמיות עם גומיית התנגדות (Bridge Up)', duration: '4 סטים x 15 חזרות', difficulty: 'מתחילים', isFree: false, description: 'תרגול ספציפי של כוח אגן אקספוזנציאלי ליצירת מרווח בריחה ועבודה מתחת ליריב.' },
    { id: 'bjj-4', name: 'זחילות מקדימות ונמוכות (Crocodile Crawls)', duration: '3 סטים x 15 מטר', difficulty: 'עלית', isFree: false, description: 'כוח בלימה וקואורדינציה חלזונית המשלבת את כל שרשרת התנועה בגוף.' },
    { id: 'bjj-5', name: 'תליית כוח לשיפור האחיזה (Gi Pull-ups)', duration: '4 סטים x מקסימום זמן', difficulty: 'עלית', isFree: false, description: 'שיפור סיבולת האחיזה באצבעות ובאמות, מותאם לעבודת חליפה סחוטה.' }
  ],
  [SportType.TENNIS]: [
    { id: 'tn-1', name: 'פרונציה ואקסצנטריות של השורש כף היד', duration: '3 סטים x 15 חזרות', difficulty: 'מתחילים', isFree: true, description: 'חיזוק גידי המרפק למניעת כאבי "מרפק טניס" ושיפור העברת הכוח למחבט.' },
    { id: 'tn-2', name: 'כוח רוטציה עם כדור כוח כבד (Med Ball Slams)', duration: '4 סטים x 10 זריקות', difficulty: 'בינוני', isFree: false, description: 'תרגול כוח מתפרץ ברוטציה של עמוד השדרה והקור להעברת מומנטום מקסימלי.' },
    { id: 'tn-3', name: 'צעדי רדיפה צידיים בתוספת בלימה רכה', duration: '4 סטים x 1 דקה תרגול', difficulty: 'מתחילים', isFree: false, description: 'עבודה על תבניות תנועה ספציפיות המצויות על המגרש לשיפור דיוק המיקום לכדור.' },
    { id: 'tn-4', name: 'כפיפה צידית של עמוד השדרה (Band Anti-Rotations)', duration: '3 סטים x 12 חזרות', difficulty: 'בינוני', isFree: false, description: 'ייצוב מותני ומניעת עומסי יתר א-סימטריים הנגרמים מחבטות גב יד וכף יש.' },
    { id: 'tn-5', name: 'ניתור מהיר וסיבוב 180 מעלות באוויר', duration: '4 סטים x 8 ניתורים', difficulty: 'עלית', isFree: false, description: 'קואורדינציה לפניות מהירות במגרש ושינוי פאזה מהיר מהגנה להתקפה עצימה.' }
  ],
  [SportType.SWIMMING]: [
    { id: 'sw-1', name: 'מתיחה וסיבוב של חגורת הכתפיים (Scapular Y-T-W)', duration: '3 סטים x 10 חזרות', difficulty: 'מתחילים', isFree: true, description: 'תנועתיות שכמות אופטימלית להפחתת חיכוך הגיד ושמירה על טווחי חתירה ארוכים.' },
    { id: 'sw-2', name: 'חיזוק שרירי הגב הרחבים עם פולי-חבל ארוך', duration: '4 סטים x 12 חזרות', difficulty: 'בינוני', isFree: false, description: 'תרגול משיכה אקספסנציאלי המדמה את כניסת היד למים לפיתוח דחף מים גבוה.' },
    { id: 'sw-3', name: 'ייצוב הגוף במנח אופקי סטטי (Extended Plank)', duration: '3 סטים x 60 שניות', difficulty: 'בינוני', isFree: false, description: 'איזון המרכז למניעת שקיעת הרגליים והאגן בתוך המים להפחתת גרר מים מיותר.' },
    { id: 'sw-4', name: 'חיזוק כופפי ומותחי כף הרגל (Ankle Flutter)', duration: '4 סטים x 15 חזרות', difficulty: 'מתחילים', isFree: false, description: 'שיפור גמישות שורש כף הרגל להשגת אפקט סנפיר מקסימלי בכל בעיטה במים.' },
    { id: 'sw-5', name: 'משיכות כתף מהירות כנגד גומיית התנגדות עצימה', duration: '4 סטים x 30 שניות', difficulty: 'עלית', isFree: false, description: 'שיפור סיבולת אנאירובית של מייצבי הכתף לשלבים המכריעים של המקצה במים.' }
  ]
};

export interface InjuryItem {
  id: string;
  title: string;
  symptoms: string;
  isFree: boolean;
  steps: string[];
}

export const INJURY_PROTOCOLS: Record<SportType, InjuryItem[]> = {
  [SportType.FOOTBALL]: [
    { id: 'ib-1', title: 'פרוטוקול ראשוני לנקע בקרסול (R.I.C.E)', symptoms: 'נפיחות, רגישות במישוש קו חיצוני בקרסול וקושי בדריכה.', isFree: true, steps: ['מנוחה יחסית ללא העמסת כאב חריף', 'קירור מקומי מבוקר למשך 15 דקות', 'חבישת לחץ מתונה למניעת הצטברות נוזלים', 'הרמת הרגל מעל קו הלב לניקוז לימפטי'] },
    { id: 'ib-2', title: 'פרוטוקול מקיף לדלקת בגיד הפיצה (Patellar)', symptoms: 'כאב חד בקדמת הברך בזמן ניתור או ירידה במדרגות.', isFree: false, steps: ['עבודה אקסצנטרית איטית על ספסל בשיפוע שלילי', 'שחרור פאציה ברגל קדמית באמצעות גליל עיסוי', 'חיזוק מקרבי אגן ומותחי רוטציה חיצונית'] }
  ],
  [SportType.BJJ]: [
    { id: 'ib-3', title: 'פרוטוקול עזרה לשחרור צוואר תפוס (Grappling Neck)', symptoms: 'קושי בסיבוב הראש, כאב מקרין לשכמה לאחר אימון עציס.', isFree: true, steps: ['תרגול רוטציות עדינות ללא התנגדות בקשב נשימה קבוצתי', 'חימום מקומי באמצעות כריית חום למשך 20 דקות', 'מתיחה עדינה של הטרפזים העליונים בהטיית קו הגוף'] },
    { id: 'ib-4', title: 'פרוטוקול החלמה פוסט-מתיחה של מרפק (Armbar Stretch)', symptoms: 'כאבים עזים בחלק הפנימי של המרפק, קושי בכפיפה.', isFree: false, steps: ['הימנעות מוחלטת מתנועות יישור יתר של המפרק', 'חיזוק פסיבי דינמי של השריר הדו-ראשי', 'עיסוי רקמה עמוק לגידי מפרק המרפק וחיבור כף היד'] }
  ],
  [SportType.TENNIS]: [
    { id: 'ib-5', title: 'שיקום ראשוני למרפק טניס (Lateral Epicondylitis)', symptoms: 'כאב בצד החיצוני של המרפק המוקרן לאמה ומוחמר באחיזה.', isFree: true, steps: ['עיסוי רוחבי עמוק של גידי המרפק (Cross-friction)', 'תרגילים אקסצנטריים איטיים לידיים באמצעות משקולת קלה', 'שימוש ברצועת תמיכה ייעודית במהלך היום-יום'] },
    { id: 'ib-6', title: 'שימום יציבות כתף קדמית לשחקני קיר', symptoms: 'כאב חד בכתף בהנפת המחבט העליונה לקו חבטה.', isFree: false, steps: ['תרגול רוטציות פנימיות וחיצוניות נמוכות עם גומי אדום', 'מתיחת שריר החזה הקטן (Pectoralis minor) לשיפור מנח כתף', 'שליטה מוטורית בשכמה במצבי עומס משתנים'] }
  ],
  [SportType.SWIMMING]: [
    { id: 'ib-7', title: 'פרוטוקול החלמה מתסמונת צביטה בכתף (Impingement)', symptoms: 'כאב בעל אופי דלקתי בעת הרמת הזרוע מעבר לגובה הראש.', isFree: true, steps: ['תרגול משיכות שכמות מבוקרות מול מתח פסיבי', 'שימוש בגומיות לתרגול יציבות שרוול מסובב', 'למידת טכניקת תנועת אגן נכונה לשיפור מנח גלישה במים'] },
    { id: 'ib-8', title: 'פרוטוקול כאבי גב תחתון עקב הקשתת יתר', symptoms: 'נוקשות שרירית וכאב עמום במותניים בסיום אימון בריכה.', isFree: false, steps: ['תרגיל מרכז חלזוני (Cat-Cow) להפחתת לחץ בין החוליות', 'חיזוק שרירי הבטן העמוקים לייצוב האגן במים', 'מתיחת שרירי מכופפי הירך המקוצרים'] }
  ]
};

export const SHOP_ITEMS: ShopItem[] = [
  { 
    id: 'sh-1', 
    title: 'משחת מגנזיום מועשרת בארניקה (Recovio Recovery)', 
    description: 'פורמולת ארניקה ומגנזיום בריכוז גבוה ביותר לעיסוי ספורטאים ממוקד, מיועד לשיקום רקמות, הפחתת נוקשות שרירים ושיכוך כאבי מפרקים לאחר מאמץ קשה.', 
    price: '₪129', 
    category: '🧴 תכשירים ומשחות קליניות', 
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'sh-2', 
    title: 'ספריי מגנזיום טהור לספיגה מהירה', 
    description: 'תרסיס מגנזיום כלוריד טהור לספיגה עורית מהירה ביותר. מונע התכווצויות שרירים ליליות ומסייע באיזון אלקטרוליטים מהיר.', 
    price: '₪89', 
    category: '🧴 תכשירים ומשחות קליניות', 
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'sh-3', 
    title: 'משחת חימום טיפולית להזרמת דם מוגברת', 
    description: 'באלם חימום עצימתי מרחיב כלי דם וממריץ מחזור הדם המקומי. להכנת שרירים, גידים ורצועות לקראת אימון ועומסים משתנים.', 
    price: '₪119', 
    category: '🧴 תכשירים ומשחות קליניות', 
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'sh-4', 
    title: 'תומך גב אורתופדי מקצועי', 
    description: 'חגורת גב ארגונומית בעלת תמיכות קינזיו-לטרליות ויציבה מוגנת. שומרת על עמוד השדרה המותני במנח נכון בעת העמסות אימון.', 
    price: '₪249', 
    category: '🩻 אביזרים וציוד עזר', 
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'sh-5', 
    title: 'גליל עיסוי (Foam Roller) עמוק לשחרור פאסיה', 
    description: 'גליל שחרור מיופאציאלי בעל מרקמים קשיחים ונקודות הדק (Trigger Points) ממוקדות להקלה על עייפות שרירים כרונית.', 
    price: '₪149', 
    category: '🩻 אביזרים וציוד עזר', 
    image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'sh-6', 
    title: 'סט גומיות התנגדות (Loop Bands) לפי רמות עומס', 
    description: 'חמש גומיות לטקס פרימיום בעוביים שונים לתרגול פרוגרסיבי לחיזוק מייצבי ירך, מקרבי ברך ורוטציות כתף.', 
    price: '₪99', 
    category: '🩻 אביזרים וציוד עזר', 
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'sh-7', 
    title: 'מזרן אימון ויוגה פרימיום בעובי מוגן מפרקים', 
    description: 'מזרן מחוזק ומונע החלקה בעל בלימת זעזועים כפולה (10 מ"מ) להגנה על המפרקים, השכמות והברכיים בעבודה על הקרקע.', 
    price: '₪189', 
    category: '🩻 אביזרים וציוד עזר', 
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=300&q=80' 
  }
];

export const CLINIC_INFO = {
  address: 'רחוב הרצל 102, ראשון לציון (קומה 2, מתחם העלית)',
  phone: '03-9654321',
  hours: 'ימים א\'-ה\': 08:00 - 20:00, יום ו\': 08:00 - 13:00',
  description: 'הקליניקה הרפואית שלנו בראשון לציון מתמחה באבחון קליני-מכאני, בדיקות ארגומטריה, שלילת פתולוגיות והתאמת מדרסי תנועה מתקדמים לספורטאי הישג. צוות הפיזיותרפיסטים ומדעני הספורט מצוידים במערכות מצלמות תלת-מימד וחיישני כוח המתקדמים בישראל.',
  procedures: [
    { title: 'בדיקת סקירה ביומכנית מלאה', time: '45 דקות', price: '₪350' },
    { title: 'צילום אנליזת תנועה בתלת-מימד', time: '60 דקות', price: '₪480' },
    { title: 'מבחני כוח שריר איזוקינטיים (Cybex)', time: '30 דקות', price: '₪290' },
    { title: 'שיקום פציעות סחיטה מותאם אישי', time: '50 דקות', price: '₪320' }
  ]
};
