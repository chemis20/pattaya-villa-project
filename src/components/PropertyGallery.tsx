
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PropertyGallery: React.FC = () => {
  const images = [
    {
      src: "https://i.postimg.cc/02nt1yHj/photo-2025-04-30-18-43-47.jpg",
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://i.postimg.cc/MfmbCmFg/IMG-6368.jpg",
      alt: "Внешний вид виллы",
    },
    {
      src: "https://i.postimg.cc/XGyszF30/IMG-6369.jpg",
      alt: "Интерьер виллы",
    },
    {
      src: "https://i.postimg.cc/jDFQY5Mq/IMG-6367.jpg",
      alt: "Спальня",
    },
    {
      src: "https://i.postimg.cc/MMk7XLkh/IMG-6374.jpg",
      alt: "Территория виллы",
    },
    {
      src: "https://i.postimg.cc/2Lrn7BSG/IMG-6370.jpg",
      alt: "Бассейн",
    },
    {
      src: "https://i.postimg.cc/9FNLfFyf/IMG-6433.jpg",
      alt: "Общий вид территории",
    }
  ];

  const [selectedImage, setSelectedImage] = useState(0);

  // Функция для предзагрузки изображений
  React.useEffect(() => {
    // Предзагрузка всех изображений
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="bg-muted overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="w-full h-full"
            style={{ 
              objectFit: "cover",
              maxHeight: "100%",
              maxWidth: "100%",
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg cursor-pointer transition-all ${selectedImage === index ? 'ring-2 ring-purple-500' : 'hover:opacity-90'}`}
            onClick={() => setSelectedImage(index)}
          >
            <div style={{ aspectRatio: "4/3" }} className="bg-muted">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
