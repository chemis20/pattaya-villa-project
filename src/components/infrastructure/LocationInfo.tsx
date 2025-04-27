import React from "react";
import { LocationSection } from "./LocationSection";
import { MapPin, Truck, ShoppingBag, Users } from "lucide-react";

export const LocationInfo: React.FC = () => {
  const leftFeatures = [
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
  ];

  const rightFeatures = [
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
  ];

  return (
    <LocationSection
      title="Расположение и окружение"
      leftFeatures={leftFeatures}
      rightFeatures={rightFeatures}
    />
  );
};
