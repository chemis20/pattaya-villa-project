
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PropertyGallery: React.FC = () => {
  const images = [
    {
      src: "https://i.postimg.cc/02nt1yHj/photo-2025-04-30-18-43-47.jpg",
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://i.postimg.cc/5jBnXxf7/photo-2-2025-04-30-18-37-58.jpg",
      alt: "Просторный первый этаж",
    },
    {
      src: "https://i.postimg.cc/zLHk8Ndk/photo-6-2025-04-30-18-37-58.jpg",
      alt: "Интерьер виллы",
    },
    {
      src: "https://i.postimg.cc/D856cBJ1/photo-3-2025-04-30-18-37-58.jpg",
      alt: "Комфортная спальня",
    },
    {
      src: "https://i.postimg.cc/2L7wMxHR/photo-11-2025-04-30-18-37-58.jpg",
      alt: "Приватный бассейн",
    },
    {
      src: "https://i.postimg.cc/RJ417HvP/photo-10-2025-04-30-18-37-58.jpg",
      alt: "Вид на территорию",
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
            decoding="async"
            style={{ imageRendering: "high-quality" }}
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
