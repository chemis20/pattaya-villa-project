import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ImageGallery: React.FC = () => {
  const images = [
    {
      url: "https://cdn.poehali.dev/files/30ed802f-06f8-4333-a88f-824675b14e6d.jpg",
      alt: "Гостиная с панорамными окнами в MAXX PATTAYA",
      caption: "Просторная гостиная с выходом во двор"
    },
    {
      url: "https://cdn.poehali.dev/files/076a664b-6df0-49f0-960e-d3f614528afb.jpg",
      alt: "Комфортабельная спальня в MAXX PATTAYA",
      caption: "Уютная спальня с видом на зелень"
    },
    {
      url: "https://cdn.poehali.dev/files/5cbb0f6e-8d1c-4dab-9954-0b0eb275391c.jpg",
      alt: "Частный бассейн на территории виллы",
      caption: "Собственный бассейн с деревянной террасой"
    }
  ];

  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Галерея интерьеров и экстерьеров виллы</h3>
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
