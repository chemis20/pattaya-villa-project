import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ImageGallery: React.FC = () => {
  const images = [
    {
      url: "https://cdn.poehali.dev/files/7f6d4156-8517-439d-9207-367a55fe18bc.jpg",
      alt: "Вид на комплекс MAXX PATTAYA с высоты птичьего полета",
      caption: "Панорамный вид на территорию MAXX PATTAYA"
    },
    {
      url: "https://cdn.poehali.dev/files/879cb17d-68a7-4fea-ba43-781986478350.jpg",
      alt: "Коллаж изображений комплекса MAXX PATTAYA",
      caption: "Территория комплекса и общий бассейн"
    },
    {
      url: "https://cdn.poehali.dev/files/4ab6e775-6ccf-4b41-bbfe-a94a809f0a0a.jpg",
      alt: "Вид на комплекс вилл вечером",
      caption: "Вечерний вид на резиденции MAXX PATTAYA"
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Галерея инфраструктуры комплекса</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
              />
            </div>
            <CardContent className="p-3">
              <p className="text-sm text-gray-600">{image.caption}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
