import React from "react";
import { InfrastructureCard } from "./InfrastructureCard";
import { Hotel, Coffee, ParkingCircle, Waves, Umbrella, Shield } from "lucide-react";

interface InfrastructureFeaturesProps {
  title: string;
}

export const InfrastructureFeatures: React.FC<InfrastructureFeaturesProps> = ({ title }) => {
  const features = [
    {
      icon: <Hotel className="h-8 w-8 text-purple-500" />,
      title: "Управление отелем",
      description: "Полное обслуживание территории профессиональным оператором"
    },
    {
      icon: <Coffee className="h-8 w-8 text-purple-500" />,
      title: "Рестораны и кафе",
      description: "Несколько ресторанов с тайской и международной кухней"
    },
    {
      icon: <ParkingCircle className="h-8 w-8 text-purple-500" />,
      title: "Парковка",
      description: "Удобная парковка для личного и арендованного транспорта"
    },
    {
      icon: <Waves className="h-8 w-8 text-purple-500" />,
      title: "Бассейны",
      description: "Несколько общих бассейнов на территории комплекса"
    },
    {
      icon: <Umbrella className="h-8 w-8 text-purple-500" />,
      title: "Лаунж-зона",
      description: "Комфортные зоны отдыха с лежаками и навесами"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Безопасность",
      description: "Круглосуточная охрана и видеонаблюдение"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
