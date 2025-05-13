
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PropertyHeader: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
          {t('new_building')}
        </Badge>
        <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">
          {t('investment')}
        </Badge>
        <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
          {t('with_furniture')}
        </Badge>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        {t('villa_full_title')}
      </h2>
      
      <div className="flex items-center text-gray-600 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <a 
          href="https://www.google.com/maps/place/MAXXPATTAYA/@12.8399765,100.9375112,12.19z/data=!4m6!3m5!1s0x310293f3ed72f1f9:0x164cbdc5735f41ae!8m2!3d12.8470104!4d100.9678802!16s%2Fg%2F11lm6s2qcy?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-600 hover:text-purple-800 transition-colors"
        >
          {t('villa_location')}
        </a>
      </div>
    </div>
  );
};
