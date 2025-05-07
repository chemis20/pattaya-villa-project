
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

  return (
    <div className="space-y-6">
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg">
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            style={{ 
              imageRendering: "high-quality",
              objectFit: "contain", 
              backgroundSize: "cover" 
            }}
          />
        </AspectRatio>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.slice(1).map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg cursor-pointer transition-all ${selectedImage === index + 1 ? 'ring-2 ring-purple-500' : 'hover:opacity-90'}`}
            onClick={() => setSelectedImage(index + 1)}
          >
            <AspectRatio ratio={4 / 3} className="bg-muted">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                style={{ imageRendering: "high-quality" }}
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};
