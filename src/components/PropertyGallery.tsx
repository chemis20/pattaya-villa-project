
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PropertyGallery: React.FC = () => {
  const images = [
    {
      src: "https://i.postimg.cc/5XHpnjLV/IMG-6535.jpg",
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://i.postimg.cc/ZvhLqLMY/IMG-6530.jpg",
      alt: "Вид на виллу",
    },
    {
      src: "https://i.postimg.cc/ZBNcZQjD/IMG-6531.png",
      alt: "Спальня с видом на бассейн",
    },
    {
      src: "https://i.postimg.cc/PPT4s2D2/IMG-6532.png",
      alt: "Ванная комната с душем",
    },
    {
      src: "https://i.postimg.cc/Wq6wqJBG/IMG-6534.jpg",
      alt: "Зона отдыха на открытом воздухе",
    },
    {
      src: "https://i.postimg.cc/Thr94ZKK/IMG-6533.jpg",
      alt: "Вид на территорию",
    },
    {
      src: "https://i.postimg.cc/2bxxVWR4/IMG-6433.jpg",
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
            style={{ imageRendering: "high-quality" }}
            loading="eager"
            decoding="async"
          />
        </AspectRatio>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg cursor-pointer ${selectedImage === index ? 'ring-2 ring-purple-600' : ''}`}
            onClick={() => setSelectedImage(index)}
          >
            <AspectRatio ratio={4 / 3} className="bg-muted">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{ imageRendering: "high-quality" }}
                loading="eager"
                decoding="async"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
