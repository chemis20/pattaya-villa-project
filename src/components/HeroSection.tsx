import React from "react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-purple-800 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://i.postimg.cc/Y9Q56w2F/IMG-6432.jpg"
          alt="Вилла в Паттайе" 
          className="w-full h-full object-cover opacity-80"
          loading="eager"
          decoding="sync"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
        <div className="max-w-3xl mb-8">
          <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">{t('premium_property')}</span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 break-words">{t('villa_title')}</h1>
          <p className="text-base sm:text-xl text-white/90">{t('villa_subtitle')}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="https://wa.me/79142055535" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">{t('get_consultation')}</Button>
          </a>
        </div>
      </div>
    </div>
  );
};