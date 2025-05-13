import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PropertyDescription: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  // URL для ссылки на карте
  const mapUrl =
    "https://www.google.com/maps/place/MAXXPATTAYA/@12.8399765,100.9375112,12.19z/data=!4m6!3m5!1s0x310293f3ed72f1f9:0x164cbdc5735f41ae!8m2!3d12.8470104!4d100.9678802!16s%2Fg%2F11lm6s2qcy?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D";

  // Компонент для ссылки на карте с соответствующим локализованным текстом
  const MapLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-600 hover:text-purple-800 transition-colors"
    >
      {children}
    </a>
  );

  const renderLocalizedDescription = () => {
    switch (language) {
      case "ru":
        return (
          <>
            Современная двухэтажная вилла площадью 150-156 кв.м. в{" "}
            <MapLink>престижном тихом районе Хуай Яй в Паттайе</MapLink>. Вилла
            включает 2 спальни, 3 санузла, соединенные кухню с залом и бассейн
            за или перед домом (есть 2 типа планировки).
          </>
        );
      case "en":
        return (
          <>
            Modern two-story villa with an area of 150-156 sq.m. in the{" "}
            <MapLink>prestigious quiet Huai Yai area in Pattaya</MapLink>. The
            villa includes 2 bedrooms, 3 bathrooms, connected kitchen with a
            hall, and a pool behind or in front of the house (there are 2 types
            of layouts).
          </>
        );
      case "zh":
        return (
          <>
            芭堤雅淮耶区<MapLink>安静区域的现代双层别墅</MapLink>
            ，面积150-156平方米。
            别墅包括2间卧室，3间浴室，连接厨房和大厅，以及房屋后面或前面的游泳池（有2种布局类型）。
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-6">
      <p>
        <strong>{t("villa_info")}</strong>
        <br />
        {renderLocalizedDescription()}
      </p>
      <p className="mt-4">{t("furniture_desc")}</p>
    </div>
  );
};
