import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface HomeFeatureProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HomeFeature: React.FC<HomeFeatureProps> = ({ imageUrl, title, description }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-56 w-full overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h4 className="text-lg font-semibold mb-2 text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export const HomeFeatures: React.FC = () => {
  const features = [
    {
      imageUrl: "https://i.postimg.cc/5jBnXxf7/photo-2-2025-04-30-18-37-58.jpg",
      title: "Просторный первый этаж",
      description: "Светлая и элегантная гостиная с панорамными окнами, современной мебелью и открытой планировкой для комфортного отдыха всей семьи."
    },
    {
      imageUrl: "https://i.postimg.cc/D856cBJ1/photo-3-2025-04-30-18-37-58.jpg",
      title: "Комфортная спальня",
      description: "Уютная спальня с качественной кроватью, мягким освещением и стильным интерьером для полноценного отдыха после насыщенного дня."
    },
    {
      imageUrl: "https://i.postimg.cc/2L7wMxHR/photo-11-2025-04-30-18-37-58.jpg",
      title: "Приватный бассейн",
      description: "Собственный бассейн с чистой освежающей водой, окруженный зоной для загара и отдыха в атмосфере тропической роскоши."
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Особенности дома</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <HomeFeature
            key={index}
            imageUrl={feature.imageUrl}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};
