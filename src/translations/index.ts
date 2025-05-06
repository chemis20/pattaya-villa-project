
import { Language } from '@/contexts/LanguageContext';
import { translations as ruTranslations } from './ru';
import { translations as enTranslations } from './en';
import { translations as zhTranslations } from './zh';

// Объект со всеми переводами
const translations = {
  ru: ruTranslations,
  en: enTranslations,
  zh: zhTranslations
};

// Функция для получения перевода
export function getTranslation(language: Language, key: string): string {
  const languageTranslations = translations[language];
  return languageTranslations[key] || key;
}

// Хук для использования переводов в компонентах
export function useTranslation(language: Language) {
  return {
    t: (key: string) => getTranslation(language, key)
  };
}
