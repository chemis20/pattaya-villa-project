import React from "react";
import { InfrastructureCard } from "./InfrastructureCard";
import { Building, Umbrella, ShieldCheck } from "lucide-react";

interface InfrastructureFeaturesProps {
  title: string;
}

export const InfrastructureFeatures: React.FC<InfrastructureFeaturesProps> = ({ title }) => {
  const features = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Территория комплекса",
      description: "Всё необходимое для комфортного отдыха",
      gradientFrom: "blue",
      colorAccent: "blue",
      items: [
        "Бассейны и пляжная зона",
        "Рестораны и бары",
        "Парковка для автомобилей",
        "Ландшафтный дизайн"
      ]
    },
    {
      icon: <Umbrella className="h-8 w-8" />,
      title: "Дополнительные удобства",
      description: "Услуги для незабываемого отдыха",
      gradientFrom: "purple",
      colorAccent: "purple",
      items: [
        "Спа-центр и массаж",
        "Фитнес-зал и йога",
        "Лаунж-зона для отдыха"
      ]
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Безопасность",
      description: "Надежная защита и круглосуточная охрана",
      gradientFrom: "green",
      colorAccent: "green",
      items: [
        "Охрана 24/7",
        "Система видеонаблюдения",
        "Закрытая территория",
        "Контроль доступа"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
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
