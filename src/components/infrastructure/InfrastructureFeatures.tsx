import React from "react";
import { InfrastructureCard } from "./InfrastructureCard";
import { Home, Sofa, Bed } from "lucide-react";

interface InfrastructureFeaturesProps {
  title: string;
}

export const InfrastructureFeatures: React.FC<InfrastructureFeaturesProps> = ({ title }) => {
  const features = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "Дом",
      description: "Просторный дом с современной планировкой",
      gradientFrom: "blue",
      colorAccent: "blue",
      items: [
        "1-2 этажа",
        "Общая площадь от 124 м²",
        "Собственный участок",
        "Виды на район и горы"
      ]
    },
    {
      icon: <Sofa className="h-8 w-8" />,
      title: "Гостиная",
      description: "Комфортная гостиная для отдыха и приема гостей",
      gradientFrom: "purple",
      colorAccent: "purple",
      items: [
        "Просторная зона отдыха",
        "Панорамные окна",
        "Высокие потолки",
        "Выход к бассейну"
      ]
    },
    {
      icon: <Bed className="h-8 w-8" />,
      title: "Спальни и бассейн",
      description: "Комфортные спальни и собственный бассейн",
      gradientFrom: "pink",
      colorAccent: "pink",
      items: [
        "2-3 спальни",
        "Главная спальня с ванной",
        "Частный бассейн",
        "Терраса для отдыха"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
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
