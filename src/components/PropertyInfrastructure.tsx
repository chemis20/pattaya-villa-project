
import React from "react";
import { InfrastructureFeatures } from "./infrastructure/InfrastructureFeatures";
import { HomeFeatures } from "./infrastructure/HomeFeatures";
import { LocationInfo } from "./infrastructure/LocationInfo";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PropertyInfrastructure: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="space-y-8">
      <InfrastructureFeatures title={t('complex_infrastructure')} />
      
      <HomeFeatures />
      
      <LocationInfo />
      
      <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border border-purple-100 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('infrastructure_advantages')}</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>{t('hotel_management')}</span>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>{t('professional_service')}</span>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>{t('secured_area')}</span>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>{t('region_development')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
