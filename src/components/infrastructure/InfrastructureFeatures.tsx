import React from "react";
import { InfrastructureCard } from "./InfrastructureCard";
import { Building, Dumbbell, Shield } from "lucide-react";

interface InfrastructureFeaturesProps {
  title: string;
}

export const InfrastructureFeatures: React.FC<InfrastructureFeaturesProps> = ({ title }) => {
  const facilityFeatures = [
    {
      title: "Территория комплекса",
      items: [
        "5-звездочное лобби",
        "Большой общий бассейн",
        "Детский бассейн",
        "Парковка",
        "Зеленая зона (15% территории)",
      ],
      icon: <Building className="h-6 w-6" />,
      gradientFrom: "purple",
      colorAccent: "purple",
    },
    {
      title: "Удобства и сервисы",
      items: [
        "Фитнес-зал",
        "Сауна",
        "Зона барбекю",
        "Ресторан",
        "Лаунж-зона у озера",
      ],
      icon: <Dumbbell className="h-6 w-6" />,
      gradientFrom: "blue",
      colorAccent: "blue",
    },
    {
      title: "Безопасность",
      items: [
        "Охрана 24 часа",
        "Система видеонаблюдения",
        "Закрытая территория",
        "Контроль доступа",
        "Профессиональное управление",
      ],
      icon: <Shield className="h-6 w-6" />,
      gradientFrom: "green",
      colorAccent: "green",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facilityFeatures.map((feature, index) => (
          <InfrastructureCard
            key={index}
            title={feature.title}
            items={feature.items}
            icon={feature.icon}
            gradientFrom={feature.gradientFrom}
            colorAccent={feature.colorAccent}
          />
        ))}
      </div>
    </div>
  );
};
