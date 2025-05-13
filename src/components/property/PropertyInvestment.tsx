
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PropertyInvestment: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  // URL для ссылки на информацию о казино
  const casinoUrl = "https://pattayapeople.ru/news/thailand-casinos-2-pattaya-thailand";
  
  // Компонент для ссылки на информацию о казино с соответствующим локализованным текстом
  const CasinoLink: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <a 
      href={casinoUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-purple-600 hover:text-purple-800 transition-colors"
    >
      {children}
    </a>
  );

  // URL для ссылки на информацию о H World Group
  const hotelGroupUrl = "https://www.bowo.fr/en/blog/the-worlds-top-10-hotel-groups-in-2020";
  
  // Компонент для ссылки на информацию о гостиничной группе с соответствующим локализованным текстом
  const HotelGroupLink: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <a 
      href={hotelGroupUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-purple-600 hover:text-purple-800 transition-colors"
    >
      {children}
    </a>
  );
  
  const renderLocalizedInvestmentInfo = () => {
    switch (language) {
      case 'ru':
        return (
          <>
            Район активно развивается: в 15 минутах езды строится новый торговый центр от основателя крупнейшего ТЦ в Таиланде, а также <CasinoLink>первая в стране игровая зона с казино</CasinoLink>. 
            Эти проекты значительно повысят стоимость недвижимости после завершения строительства.
          </>
        );
      case 'en':
        return (
          <>
            The area is actively developing: a new shopping center from the founder of the largest shopping mall in Thailand is being built 15 minutes away, as well as the <CasinoLink>country's first gaming zone with a casino</CasinoLink>. 
            These projects will significantly increase the value of real estate after completion.
          </>
        );
      case 'zh':
        return (
          <>
            该地区正在积极发展：15分钟路程内，泰国最大购物中心的创始人正在建设新的购物中心，以及<CasinoLink>国内第一个带赌场的游戏区</CasinoLink>。
            这些项目完成后将显著提高房地产价值。
          </>
        );
      default:
        return null;
    }
  };

  const renderLocalizedOperatorInfo = () => {
    switch (language) {
      case 'ru':
        return (
          <>
            MAXX PATTAYA реализуется компанией <HotelGroupLink>H World Group</HotelGroupLink> — одним из крупнейших мировых гостиничных операторов, управляющим более 8 800 отелями в 18 странах.
          </>
        );
      case 'en':
        return (
          <>
            MAXX PATTAYA is implemented by <HotelGroupLink>H World Group</HotelGroupLink> — one of the world's largest hotel operators, managing more than 8,800 hotels in 18 countries.
          </>
        );
      case 'zh':
        return (
          <>
            MAXX PATTAYA由<HotelGroupLink>华住集团</HotelGroupLink>实施 — 全球最大的酒店运营商之一，管理着18个国家的8,800多家酒店。
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-6">
      <p>
        <strong>{t('investment_title')}</strong><br />
        {renderLocalizedInvestmentInfo()}
      </p>
      
      <p className="mt-4">
        {renderLocalizedOperatorInfo()}
      </p>
    </div>
  );
};
