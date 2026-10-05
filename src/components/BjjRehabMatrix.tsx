/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Lock } from 'lucide-react';
import AndroidExoPlayer from './AndroidExoPlayer';

interface BjjRehabMatrixProps {
  bjjRehabArea: 'neck_shoulder' | 'lower_back' | 'knee' | 'hands_elbows';
  setBjjRehabArea: (area: 'neck_shoulder' | 'lower_back' | 'knee' | 'hands_elbows') => void;
  bjjIsPremium: boolean;
  setShowBjjPaywall: (show: boolean) => void;
  setBjjPaywallFeatureName: (name: string) => void;
  selectedSport: string;
}

export const BjjRehabMatrix: React.FC<BjjRehabMatrixProps> = ({
  bjjRehabArea,
  setBjjRehabArea,
  bjjIsPremium,
  setShowBjjPaywall,
  setBjjPaywallFeatureName,
  selectedSport,
}) => {
  // Determine sport-specific localized configuration
  const isFootball = selectedSport === 'FOOTBALL';
  const isTennis = selectedSport === 'TENNIS';
  const isSwimming = selectedSport === 'SWIMMING';

  // Dynamic Rehab Matrix based on sport
  const getRehabData = () => {
    if (isFootball) {
      return {
        neck_shoulder: {
          areaName: 'מפרק הקרסול והרצועות (Ankle & Ligaments)',
          acute: {
            title: '🚨 טיפול בנפיחות והורדת עומס כאב בקרסול לאחר סיקור עמוק או נקע',
            duration: '4:45 דק׳',
            desc: 'פרוטוקול תנועתי פסיבי להפחתת הנחת העומס סביב הרצועות הצידיות של פנים הקרסול.',
            videoUrl: 'https://www.youtube.com/embed/rV58Q4N7zO0',
            videoID: 'rV58Q4N7zO0',
            isFree: true
          },
          prevent: {
            title: '🔰 ייצוב אקטיבי פרופריוספטיבי סנסורי מפני נקעים חוזרים בשינוי כיוון',
            duration: '5:30 דק׳',
            desc: 'חיזוק מייצבי המפרק הקטנים במשטח לא יציב בשילוב תזוזת רגליים אקטיבית ליצירת אחיזה בכדור ובדשא.',
            videoUrl: 'https://www.youtube.com/embed/8b57-L0L24c',
            videoID: '8b57-L0L24c',
            isFree: false
          }
        },
        lower_back: {
          areaName: 'שרירי הירך האחורי (Hamstring Rehab)',
          acute: {
            title: '🚨 מה לעשות במצב של מתיחה חריפה בשריר הירך האחורי (עזרה ראשונה קלינית)',
            duration: '4:15 דק׳',
            desc: 'הורדת ספאזם שרירי מיידי והחזרת טווחי תנועה דינמיים של הברך והאגן בהפעלת שריר ההפך.',
            videoUrl: 'https://www.youtube.com/embed/V6H7HclD410',
            videoID: 'V6H7HclD410',
            isFree: true
          },
          prevent: {
            title: '🔰 ביצור שרירי האמסטרינג אקטיביים עם פרוטוקול חיזוק נורדי להתמודדות עם האצה מהירה',
            duration: '7:55 דק׳',
            desc: 'חיזוק אקטיבי אקסצנטרי המחזיר לשרירי הרגל האחורית את האלסטיות העומסית מפני דהירות ובעיטות.',
            videoUrl: 'https://www.youtube.com/embed/Mbe9fVqE900',
            videoID: 'Mbe9fVqE900',
            isFree: false
          }
        },
        knee: {
          areaName: 'מפרק הברך ושיקום רצועות (Knee & ACL Shield)',
          acute: {
            title: '🚨 תרגילי החלזת נוזלים והפחתת מתח סביב הפיקה לאחר סיבוב הברך במגרש',
            duration: '5:20 דק׳',
            desc: 'עבודה תנועתית פשוטה הפותחת את המרווח המפרקי של עצם השוק והירך להפלת כאב מקומי בספורט.',
            videoUrl: 'https://www.youtube.com/embed/_8b78R-W614',
            videoID: '_8b78R-W614',
            isFree: true
          },
          prevent: {
            title: '🔰 ייצוב רצועה צולבת (ACL/MCL) ומבנים פיזיותרפיים מונעי קריסה סיבובית',
            duration: '8:40 דק׳',
            desc: 'ביסוס השריר הארבע-ראשי וקבוצת ההמסטרינג ליצירת בלם זעזועים אקטיבי בעת נחיתה או שינוי כיוון חריף.',
            videoUrl: 'https://www.youtube.com/embed/3yN8gH0kM4M',
            videoID: '3yN8gH0kM4M',
            isFree: false
          }
        },
        hands_elbows: {
          areaName: 'שחרור גב תחתון ואגן (Low Back & Active Hip)',
          acute: {
            title: '🚨 שיכוך כאב ושחרור גב תחתון תפוס מעומסי ריצה אינטנסיבית ובעיטות',
            duration: '4:10 דק׳',
            desc: 'טכניקת מתיחה עמוקה לקבוצות מכופפי הירך (Iliopsoas) והורדת מתח בגב התחתון מהר.',
            videoUrl: 'https://www.youtube.com/embed/8vBqGf4VbT4',
            videoID: '8vBqGf4VbT4',
            isFree: true
          },
          prevent: {
            title: '🔰 חיזוק חגורת האגן והזוקפים ליצירת עמוד שדרה גמיש ועמידות בהתקלויות',
            duration: '6:00 דק׳',
            desc: 'ביסוס שרירי ליבה ורוטציה של עמוד השדרה לשיפור החלוקה הדינמית של הבעיטה מהרגליים לגו.',
            videoUrl: 'https://www.youtube.com/embed/Rk0HqSFr5U4',
            videoID: 'Rk0HqSFr5U4',
            isFree: false
          }
        }
      };
    } else if (isTennis) {
      return {
        neck_shoulder: {
          areaName: 'מרפק טניס (Tennis Elbow - Lateral Epicondylitis)',
          acute: {
            title: '🚨 מה לעשות כשהמרפק שורף? ניהול דלקת אקוטית בכפתור האחיזה',
            duration: '4:00 דק׳',
            desc: 'טכניקת עיסוי והורדת דחף עצבי בגידי פושטי האצבעות למניעת כאב אקטיבי בעת תפיסת המחבט.',
            videoUrl: 'https://www.youtube.com/embed/rV58Q4Y7zO0',
            videoID: 'rV58Q4Y7zO0',
            isFree: true
          },
          prevent: {
            title: '🔰 חיזוק איזומטרי ופרוגרסיבי של גידי פושטי כף היד לעמידות מכות',
            duration: '5:50 דק׳',
            desc: 'ביסוס גידי המכות לשרידות זעזועים מרוכבים, חבטות כף יד וגב יד ללא כאבי מרפקים בכלל.',
            videoUrl: 'https://www.youtube.com/embed/8b57-L0L24c',
            videoID: '8b57-L0L24c',
            isFree: false
          }
        },
        lower_back: {
          areaName: 'מפרק הכתף ומסובבי הכתף (Rotator Cuff Shield)',
          acute: {
            title: '🚨 הפחתת צביטה וכאב בכתף האחורית מהגשות ולחצי סרב',
            duration: '5:00 דק׳',
            desc: 'תנועתיות מבוקרת וחימום החלקה לשינוי המנח המפרקי ולהקלת כאבי מתיחה בכתף מיידית.',
            videoUrl: 'https://www.youtube.com/embed/8vBqGf4VbT4',
            videoID: '8vBqGf4VbT4',
            isFree: true
          },
          prevent: {
            title: '🔰 שיקום וחיזוק מעטפת הכתף עם מסובבי הכתף (Rotator Cuff) לעוצמת הגשה תקינה',
            duration: '7:15 דק׳',
            desc: 'חיזוק מפושט ויומי של השריר התת-קוצי והעל-קוצי למניעת פציעות עומס צביטה בכתף.',
            videoUrl: 'https://www.youtube.com/embed/Rk0HqSFr5U4',
            videoID: 'Rk0HqSFr5U4',
            isFree: false
          }
        },
        knee: {
          areaName: 'מפרק כף היד והגריפ (Thumb & Wrist Power)',
          acute: {
            title: '🚨 טיפול בכפות ידיים עייפות ושחרור מהיר של דלקת גיגי היד והאצבעות',
            duration: '4:10 דק׳',
            desc: 'שימור החציצה הרווחית של מפרק כף היד והחלקה עצבית לגידי מכופפי היד.',
            videoUrl: 'https://www.youtube.com/embed/rV58Q4N7zO0',
            videoID: 'rV58Q4N7zO0',
            isFree: true
          },
          prevent: {
            title: '🔰 בניית אחיזת ברזל גיוויוספקטיבית וזרוע חסינת זעזועים מעורבים במגרש',
            duration: '6:10 דק׳',
            desc: 'תרגילים ייעודיים לביזור הגידים של כף היד התומכים במכות קאט ופרו-ספין חזק.',
            videoUrl: 'https://www.youtube.com/embed/8b57-L0L24c',
            videoID: '8b57-L0L24c',
            isFree: false
          }
        },
        hands_elbows: {
          areaName: 'מפרק הירך והאגן (Hip Mobility & Power)',
          acute: {
            title: '🚨 שיפור תנועתיות אקוטית בירכיים והורדת תפיסה בגב מצדי המגרש',
            duration: '5:10 דק׳',
            desc: 'סיבובי ירך 90-90 פיזיותרפיים לפתיחת מפרקי הירך ושימור טווחי סיבוב תקינים בריצה לרוחב לטניס.',
            videoUrl: 'https://www.youtube.com/embed/V6H7HclD410',
            videoID: 'V6H7HclD410',
            isFree: true
          },
          prevent: {
            title: '🔰 חיזוק כוח קפיצה ומייצבי אגן דינמיים למניעת פגיעות ברך בחיבול סנסורי',
            duration: '7:40 דק׳',
            desc: 'אימון של מייצבי הירך (Gluteus Medius) ליצירת מפרק עמיד בפני עצירות קטועות פתאומיות.',
            videoUrl: 'https://www.youtube.com/embed/Mbe9fVqE900',
            videoID: 'Mbe9fVqE900',
            isFree: false
          }
        }
      };
    } else if (isSwimming) {
      return {
        neck_shoulder: {
          areaName: 'שכמות וחגורת כתפיים (Swimmer\'s Shoulder)',
          acute: {
            title: '🚨 הורדת כאב ממוקדת בצביטת כתף קדמית לאחר אימוני נפח ארוכים במים',
            duration: '4:45 דק׳',
            desc: 'טכניקת החלקה מבוקרת לשחרור הגיד הדו-ראשי והורדת דחף מפרקי בכתף שחייה.',
            videoUrl: 'https://www.youtube.com/embed/Rk0HqSFr5U4',
            videoID: 'Rk0HqSFr5U4',
            isFree: true
          },
          prevent: {
            title: '🔰 חיזוק אקטיבי של מסובבי הכתף ומייצבי השכמה (Scapular Retraction) לשחייה יעילה',
            duration: '6:30 דק׳',
            desc: 'תרגול פרוגרסיבי לחיזוק שרירי הטרפז התחתון והשריר הרחב-גבי ליציאה נכונה מעמדת הזינוק והמשיכה.',
            videoUrl: 'https://www.youtube.com/embed/8vBqGf4VbT4',
            videoID: '8vBqGf4VbT4',
            isFree: false
          }
        },
        lower_back: {
          areaName: 'צוואר וסיבובי ראש (Neck Mobility in Swimmers)',
          acute: {
            title: '🚨 שיקוי עייפות בשרירי הצוואר והטרפז מסיבוב נשימה תכוף (חתירה וגב)',
            duration: '4:05 דק׳',
            desc: 'מתיחות עדינות ושינויי לחץ מפרקי המפחיתים לחץ מפרקי המעניקים סיבובי צוואר חופשיים במים.',
            videoUrl: 'https://www.youtube.com/embed/8vBqGf4VbT4',
            videoID: '8vBqGf4VbT4',
            isFree: true
          },
          prevent: {
            title: '🔰 תרגילי חיזוק איזומטריים לצוואר שרירי ויציב המקבל כוח נשימה נכון',
            duration: '5:40 דק׳',
            desc: 'תרגול חיזוק שרירי הצוואר העמוקים הפעילים בזמן שחייה למניעת נוקשות בצוואר.',
            videoUrl: 'https://www.youtube.com/embed/8b57-L0L24c',
            videoID: '8b57-L0L24c',
            isFree: false
          }
        },
        knee: {
          areaName: 'גב תחתון והיפר-אקסטנציה (Lower Back in Butterfly & Breast)',
          acute: {
            title: '🚨 מה לעשות כשהגב התחתון שורף לאחר ריקודי מים או קבור סגנונות פרפר?',
            duration: '5:15 דק׳',
            desc: 'רווחיות מפרקית מונעת ומתיחות בשכיבה להורדת מתח בגב התחתון.',
            videoUrl: 'https://www.youtube.com/embed/V6H7HclD410',
            videoID: 'V6H7HclD410',
            isFree: true
          },
          prevent: {
            title: '🔰 ביצור ליבה של שחיינים המגנה על החוליות מפני היפר-אקסטנציה מופרזת',
            duration: '7:50 דק׳',
            desc: 'פרוטוקול כוח ממוקד לבטן העמוקה המייצב את מנח האגן הניטרלי בזמן בעיטות פרפר וקיר.',
            videoUrl: 'https://www.youtube.com/embed/Mbe9fVqE900',
            videoID: 'Mbe9fVqE900',
            isFree: false
          }
        },
        hands_elbows: {
          areaName: 'מפרק הקרסול והקצפת רגליים (Ankle Flexion & Kick)',
          acute: {
            title: '🚨 שיכוך כאב מתיחות בקרסולים לאחר דחיפת קירות וסחיטת סנפירים',
            duration: '4:20 דק׳',
            desc: 'החזרת טווחי פנלטר-פלקסיה ושיכוך דלקתי של רצועת הקרסול הקדמית בקלות.',
            videoUrl: 'https://www.youtube.com/embed/_8b78R-W614',
            videoID: '_8b78R-W614',
            isFree: true
          },
          prevent: {
            title: '🔰 הגדלת גמישות שחיינים בקרסול וחיזוק הגידים להנעה יעילה במים',
            duration: '6:15 דק׳',
            desc: 'מתיחות דינמיות וכיווצים איזומטריים של שוקיים קדמיות לשיפור דחיפת המים בבעיטה.',
            videoUrl: 'https://www.youtube.com/embed/3yN8gH0kM4M',
            videoID: '3yN8gH0kM4M',
            isFree: false
          }
        }
      };
    }

    // Default BJJ Matrix
    return {
      neck_shoulder: {
        areaName: 'צוואר וחגורת כתפיים',
        acute: {
          title: '🚨 שחרור לחץ צווארי וחגורת הכתפיים לאחר הטלות וחניקות קשות',
          duration: '4:20 דק׳',
          desc: 'טכניקת שחרור לשרירי הטרפז והורדת מתח עצבי-שרירי המעניקים טווחי סיבוב תקינים לראש.',
          videoUrl: 'https://www.youtube.com/embed/8vBqGf4VbT4',
          videoID: '8vBqGf4VbT4',
          isFree: true
        },
        prevent: {
          title: '🔰 בניית מעטפת שרירים תומכת וייצוב מסובבי הכתף למניעת פציעות גריפ',
          duration: '6:15 דק׳',
          desc: 'חיזוק אקטיבי של מייצבי השכמות ומסובבי הכתף מפני עומס צביטה מתמשך בקרבות קרקע.',
          videoUrl: 'https://www.youtube.com/embed/Rk0HqSFr5U4',
          videoID: 'Rk0HqSFr5U4',
          isFree: false
        }
      },
      lower_back: {
        areaName: 'גב תחתון ועמוד שדרה',
        acute: {
          title: '🚨 הורדת כאב אקוטי בגב התחתון ודקומפרסיה מהירה לאחר פוזיציית גארד דחוס',
          duration: '5:10 דק׳',
          desc: 'תנועתיות מבוקרת (Cat-Camel) ומתיחות אגן להפגת מתח שרירי מוגבר בעמוד השדרה.',
          videoUrl: 'https://www.youtube.com/embed/V6H7HclD410',
          videoID: 'V6H7HclD410',
          isFree: true
        },
        prevent: {
          title: '🔰 פרוטוקול חיזוק שרירי הליבה הגלובליים וזוקפי הגב לעמידות בהאבקות אקטיבית',
          duration: '7:40 דק׳',
          desc: 'אימון זוקפי גב וירכיים במתקפה ישירה לעמוד שדרה חסין זעזועים המקנה עמידות מוגברת.',
          videoUrl: 'https://www.youtube.com/embed/Mbe9fVqE900',
          videoID: 'Mbe9fVqE900',
          isFree: false
        }
      },
      knee: {
        areaName: 'מפרק הברך והמניסקוס',
        acute: {
          title: '🚨 ניהול נפיחות וסירקולציה מפרקית מיידית לאחר לכידות רגליים אגרסיביות',
          duration: '4:55 דק׳',
          desc: 'פרוטוקול תנועתי פסיבי להפחתת עומס תוך-מפרקי בברך פצועה לאחר ניסיונות סחיטה ו-Leg Locks.',
          videoUrl: 'https://www.youtube.com/embed/_8b78R-W614',
          videoID: '_8b78R-W614',
          isFree: true
        },
        prevent: {
          title: '🔰 ייצוב רצועות הברך (MCL/LCL) ואימון פרופריוספטיבי למניעת קריסה סיבובית',
          duration: '8:05 דק׳',
          desc: 'ביצור המניסקוס והשריר הארבע-ראשי כנגד בריחי ברכיים מורכבים (Knee Reap).',
          videoUrl: 'https://www.youtube.com/embed/3yN8gH0kM4M',
          videoID: '3yN8gH0kM4M',
          isFree: false
        }
      },
      hands_elbows: {
        areaName: 'כפות ידיים, מרפקים ואצבעות',
        acute: {
          title: '🚨 עזרה ראשונה והורדת כאב דלקתי במפרקי האצבעות והמרפק מסחיטת שרוולים ממושכת',
          duration: '3:50 דק׳',
          desc: 'עיסוי רקמות רכות והחלקה עצבית לשיכוך כאבים מהיר והחזרת תפקוד תנועתי בסיסי.',
          videoUrl: 'https://www.youtube.com/embed/rV58Q4N7zO0',
          videoID: 'rV58Q4N7zO0',
          isFree: true
        },
        prevent: {
          title: '🔰 ביצור גידי כף היד, האצבעות והמרפק לעמידות בגריפים קיצוניים במזרן',
          duration: '5:45 דק׳',
          desc: 'מתיחות וכיווצים איזומטריים של מכופפי ופושטי כף היד לחיזוק הגריפ הפיזיותרפי.',
          videoUrl: 'https://www.youtube.com/embed/8b57-L0L24c',
          videoID: '8b57-L0L24c',
          isFree: false
        }
      }
    };
  };

  const activeRehabData = getRehabData();
  const activeData = activeRehabData[bjjRehabArea] || activeRehabData['neck_shoulder'];

  // Helper zones response to sport type
  const getBodyZones = () => {
    if (isFootball) {
      return [
        { id: 'neck_shoulder', name: '🦵 מפרק הקרסול והרצועות', desc: 'שיקום נקעים אקוטיים ומתיחת סיבים' },
        { id: 'lower_back', name: '🍗 שרירי הירך האחורי', desc: 'שחרור כאבי האמסטרינג בריצה' },
        { id: 'knee', name: '🦿 מפרק הברך ורצועות (ACL)', desc: 'ייצוב מונע קריסה סיבובית בדשא' },
        { id: 'hands_elbows', name: '🪵 גב תחתון ואגן', desc: 'הפגת נוקשות שרירית בריצות זעזוע' }
      ];
    } else if (isTennis) {
      return [
        { id: 'neck_shoulder', name: '🎾 מרפק טניס (Epicondylitis)', desc: 'שחרור דלקת גידים ושיכוך לחץ אחיזה' },
        { id: 'lower_back', name: '🛡️ מפרק הכתף ומסובבי כתף', desc: 'הקלת כאבי הגשת סרבים אינטנסיביים' },
        { id: 'knee', name: '🖐️ מפרק כף היד והגריפ', desc: 'החלקה עצבית לשיכוך מאמצי המרקות' },
        { id: 'hands_elbows', name: '🪵 מפרק הירך והאגן', desc: 'שימור כושר קפיצי ופתיחת ציר ימין/שמאל' }
      ];
    } else if (isSwimming) {
      return [
        { id: 'neck_shoulder', name: '🏊 שכמות וחגורת כתפיים', desc: 'נטרול כאבי צביטת כתף במשיכות חתירה' },
        { id: 'lower_back', name: '💆 צוואר וסיבובי ראש', desc: 'שחרור מתחים קשים מסיבובי נשימה במים' },
        { id: 'knee', name: '🪵 גב תחתון והיפר-אקסטנציה', desc: 'הורדת לחץ מחוליות מבעיטות פרפר וחזה' },
        { id: 'hands_elbows', name: '🦶 מפרק הקרסול והנעה עמוקה', desc: 'שחרור מתיחה מגידי הרגל ועבודה עם סנפירים' }
      ];
    }

    return [
      { id: 'neck_shoulder', name: '🛡️ צוואר וחגורת כתפיים', desc: 'שחרור עומסי חניקות תכופים' },
      { id: 'lower_back', name: '🪵 גב תחתון ועמוד שדרה', desc: 'נטרול דחיסה של חוליות עמ״ש' },
      { id: 'knee', name: '🦵 מפרק הברך והמניסקוס', desc: 'עמידות ללחצי סיבוב ונעילת רגליים' },
      { id: 'hands_elbows', name: '🖐️ כפות ידיים, מרפקים ואצבעות', desc: 'שיקום דלקות גידים ועומס גריפים' }
    ];
  };

  const bodyZones = getBodyZones();

  return (
    <div className="space-y-6 text-right font-sans" dir="rtl" style={{ direction: 'rtl' }}>
      {/* Component A - Body Area Selection */}
      <div className="space-y-3">
        <div className="flex flex-col text-right">
          <span className="text-[10px] text-[#007BFF] font-extrabold uppercase tracking-widest font-mono block">שיקום פציעות ממוקד</span>
          <h4 className="text-xs font-black text-white mt-0.5">בחרו אזור פציעה או רגישות לטיפול מקומי:</h4>
        </div>
        
        <div className="grid grid-cols-2 gap-2.5">
          {bodyZones.map((area) => {
            const isActive = bjjRehabArea === area.id;
            return (
              <button
                key={area.id}
                onClick={() => setBjjRehabArea(area.id as any)}
                className={`p-3.5 rounded-xl border text-right flex flex-col gap-1 transition-all relative overflow-hidden cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-br from-[#007BFF]/15 to-blue-950/20 border-[#007BFF] text-white shadow-md shadow-[#007BFF]/15 ring-2 ring-[#007BFF]/25'
                    : 'bg-gradient-to-br from-[#111111] to-[#050505] border-[#1a1a1a] hover:bg-[#0c0c0c] text-zinc-400'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#007BFF] rounded-bl-full flex items-center justify-center text-[8px] font-bold text-white pl-2 pb-2">
                    ✔
                  </div>
                )}
                <span className="text-xs font-black text-white">{area.name}</span>
                <span className="text-[9.5px] text-zinc-500 font-sans mt-0.5 leading-normal">{area.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Component B - Categorized Rehab Videos */}
      {activeData && (
        <div className="space-y-5 pt-3 border-t border-zinc-900 animate-slideDown">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black text-[#007BFF] uppercase tracking-wider">
              פרוטוקול טיפול ממוקד: {activeData.areaName} 🧘🏥
            </h3>
            <span className="text-[9px] bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900 text-zinc-500 font-bold font-sans">
              אזור פעיל
            </span>
          </div>

          {/* Section A: Acute Pain and First Aid */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-1">
              <span className="text-xs font-black text-rose-500">🚨 מה לעשות כשכבר קרה (כאב חריף ועזרה ראשונה)</span>
              <span className="text-[8.5px] bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-black">
                פתוח חינם 🔓
              </span>
            </div>

            <div className="p-3.5 bg-gradient-to-br from-[#0c0c0f] to-[#040406] border border-zinc-900 rounded-xl space-y-3">
              <div className="flex items-start justify-between gap-2 text-right">
                <div className="text-right">
                  <h4 className="text-xs font-bold text-white leading-relaxed">{activeData.acute.title}</h4>
                  <p className="text-[10px] text-zinc-400 leading-normal mt-1 pr-1 border-r border-[#007BFF]/30">{activeData.acute.desc}</p>
                  <span className="text-[8px] text-zinc-500 block font-mono mt-1">אורך הסרטון: {activeData.acute.duration}</span>
                </div>
              </div>

              <AndroidExoPlayer 
                videoUrl={activeData.acute.videoUrl}
                videoID={activeData.acute.videoID}
                title={activeData.acute.title}
              />
            </div>
          </div>

          {/* Section B: Prevention & Long Term Strengthening */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-1">
              <span className="text-xs font-black text-emerald-400">🔰 תרגילי מניעה וחיזוק לטווח ארוך</span>
              <span className={`text-[8.5px] border px-2 py-0.5 rounded font-black ${
                bjjIsPremium 
                  ? 'bg-emerald-950/60 border-emerald-900/50 text-emerald-400' 
                  : 'bg-amber-950/60 border-amber-900/40 text-yellow-500'
              }`}>
                {bjjIsPremium ? 'פתוח 🔓' : 'מוגן פרימיום 🔒'}
              </span>
            </div>

            <div className="p-3.5 bg-gradient-to-br from-[#0c0c0f] to-[#040406] border border-zinc-900 rounded-xl space-y-3 relative overflow-hidden">
              <div className="flex items-start justify-between gap-2 text-right">
                <div className="text-right">
                  <h4 className="text-xs font-bold text-white leading-relaxed">{activeData.prevent.title}</h4>
                  <p className="text-[10px] text-zinc-400 leading-normal mt-1 pr-1 border-r border-[#007BFF]/30">{activeData.prevent.desc}</p>
                  <span className="text-[8px] text-zinc-500 block font-mono mt-1">אורך הסרטון: {activeData.prevent.duration}</span>
                </div>
              </div>

              {/* Monetization: Unlocked or locked paywall view */}
              {bjjIsPremium ? (
                <AndroidExoPlayer 
                  videoUrl={activeData.prevent.videoUrl}
                  videoID={activeData.prevent.videoID}
                  title={activeData.prevent.title}
                />
              ) : (
                <div 
                  onClick={() => {
                    setBjjPaywallFeatureName(`תרגילי מניעה: ${activeData.prevent.title}`);
                    setShowBjjPaywall(true);
                  }}
                  className="bg-gradient-to-r from-amber-500/5 via-blue-600/5 to-amber-500/5 border border-dashed border-amber-500/30 p-4 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer hover:border-amber-500/55 hover:bg-amber-950/10 transition-all shadow-[inset_0_1px_8px_rgba(245,158,11,0.03)] group"
                >
                  <Lock className="w-5 h-5 text-amber-550 mb-1.5 group-hover:scale-110 transition-transform animate-pulse" />
                  <span className="text-[10px] font-black text-amber-300">התוכן חסום למנויים בלבד (Premium Shield) 🌟</span>
                  <span className="text-[9px] text-zinc-400 mt-1 leading-relaxed max-w-[90%] font-medium">
                    סרטוני המניעה והחיזוק הביו-מכניים המלאים של אקדמיית Recovio פתוחים למנויי VIP בלבד. למדו לבצר את {activeData.areaName}!
                  </span>
                  <span className="text-[9.5px] text-[#00aaff] font-black mt-2.5 underline">לחץ לפתיחה מיידית ורכישת מנוי פרימיום ↗</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
