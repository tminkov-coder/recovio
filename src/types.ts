/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AppScreen {
  SPLASH = 'SPLASH',
  AUTH = 'AUTH',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
  MEDICAL_WAVE = 'MEDICAL_WAVE',
  MEDICAL_FREEZE = 'MEDICAL_FREEZE',
  MEDICAL_UPLOAD = 'MEDICAL_UPLOAD',
  ONBOARD_Q1 = 'ONBOARD_Q1',
  ONBOARD_Q2 = 'ONBOARD_Q2',
  ONBOARD_Q3 = 'ONBOARD_Q3',
  ONBOARD_Q4 = 'ONBOARD_Q4',
  MAIN_APP = 'MAIN_APP'
}

export enum BottomTab {
  HOME = 'HOME',
  CLINIC = 'CLINIC',
  SHOP = 'SHOP',
  CHAT = 'CHAT'
}

export enum SportType {
  FOOTBALL = 'FOOTBALL',
  BJJ = 'BJJ',
  TENNIS = 'TENNIS',
  SWIMMING = 'SWIMMING'
}

export enum OnboardingGoal {
  PERFORMANCE = 'PERFORMANCE',
  PREVENTION = 'PREVENTION',
  REHABILITATION = 'REHABILITATION'
}

export enum PainLevel {
  NONE = 'NONE',
  MILD = 'MILD',
  SEVERE = 'SEVERE'
}

export interface UserAnswers {
  ageGroup: string;
  primarySport: SportType;
  goal: OnboardingGoal;
  painLevel: PainLevel;
}

export interface Exercise {
  id: string;
  name: string;
  duration: string;
  difficulty: 'בסיס' | 'בינוני' | 'מתקדם';
  isFree: boolean;
  description: string;
}

export interface InjuryProtocol {
  id: string;
  title: string;
  symptoms: string;
  isFree: boolean;
  steps: string[];
}

export interface ShopItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string;
}
