import React from "react";
import { LocationSection } from "./LocationSection";
import { MapPin, Truck, ShoppingBag, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const LocationInfo: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const getLocationFeatures = () => {
    if (language === 'en') {
      return {
        left: [
          {
            icon: <MapPin className="h-4 w-4" />,
            title: "Distance to the sea:",
            description: "7 kilometers",
          },
          {
            icon: <Truck className="h-4 w-4" />,
            title: "Transportation accessibility:",
            description: "Easy connection to city center and beaches",
          },
        ],
        right: [
          {
            icon: <ShoppingBag className="h-4 w-4" />,
            title: "Shopping mall:",
            description: "New mall 15 minutes away (under construction)",
          },
          {
            icon: <Users className="h-4 w-4" />,
            title: "Entertainment:",
            description: "Thailand's first gaming zone with casino nearby (under construction)",
          },
        ],
        title: "Location & Surroundings"
      };
    } else if (language === 'zh') {
      return {
        left: [
          {
            icon: <MapPin className="h-4 w-4" />,
            title: "到海的距离:",
            description: "7公里",
          },
          {
            icon: <Truck className="h-4 w-4" />,
            title: "交通便利性:",
            description: "轻松连接市中心和海滩",
          },
        ],
        right: [
          {
            icon: <ShoppingBag className="h-4 w-4" />,
            title: "购物中心:",
            description: "15分钟路程的新购物中心（在建）",
          },
          {
            icon: <Users className="h-4 w-4" />,
            title: "娱乐设施:",
            description: "泰国首个带赌场的游戏区（在建）",
          },
        ],
        title: "位置与周边环境"
      };
    } else {
      return {
        left: [
          {
            icon: <MapPin className="h-4 w-4" />,
            title: "Расстояние до моря:",
            description: "7 километров",
          },
          {
            icon: <Truck className="h-4 w-4" />,
            title: "Транспортная доступность:",
            description: "Легкое сообщение с центром города и пляжами",
          },
        ],
        right: [
          {
            icon: <ShoppingBag className="h-4 w-4" />,
            title: "Торговый центр:",
            description: "Новый ТЦ в 15 минутах езды (строится)",
          },
          {
            icon: <Users className="h-4 w-4" />,
            title: "Развлечения:",
            description: "Первая в Таиланде игровая зона с казино поблизости (строится)",
          },
        ],
        title: "Расположение и окружение"
      };
    }
  };

  const features = getLocationFeatures();

  return (
    <LocationSection
      title={features.title}
      leftFeatures={features.left}
      rightFeatures={features.right}
    />
  );
};