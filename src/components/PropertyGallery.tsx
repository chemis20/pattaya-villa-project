
import React, { useState, useEffect } from "react";

export const PropertyGallery: React.FC = () => {
  const images = [
    {
      src: "https://i.postimg.cc/02nt1yHj/photo-2025-04-30-18-43-47.jpg",
      alt: "Фасад виллы с бассейном",
    },
    {
      src: "https://i.postimg.cc/rsvnthCy/IMG-6368.jpg",
      alt: "Внешний вид виллы",
    },
    {
      src: "https://i.postimg.cc/Y9dTjfsj/IMG-6369.jpg",
      alt: "Интерьер виллы",
    },
    {
      src: "https://i.postimg.cc/wB6WJRJN/IMG-6367.jpg",
      alt: "Спальня",
    },
    {
      src: "https://i.postimg.cc/Tw1CN8tY/IMG-6374.jpg",
      alt: "Территория виллы",
    },
    {
      src: "https://i.postimg.cc/prnkxfNw/IMG-6370.jpg",
      alt: "Бассейн",
    },
    {
      src: "https://i.postimg.cc/9FNLfFyf/IMG-6433.jpg",
      alt: "Общий вид территории",
    }
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));

  // Предзагрузка изображений
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image, index) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        };
      });
    };

    preloadImages();
  }, []);

  return (
    <div className="space-y-6">
      {/* Главное изображение */}
      <div className="relative rounded-lg overflow-hidden" style={{ height: "auto", width: "100%" }}>
        <img
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          className="w-full h-auto object-contain"
          style={{
            maxHeight: "70vh",
            margin: "0 auto",
            display: "block",
            backgroundColor: "#f5f5f5"
          }}
        />
      </div>
      
      {/* Миниатюры */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`
              relative overflow-hidden rounded-lg cursor-pointer transition-all
              ${selectedImage === index ? 'ring-2 ring-purple-500' : 'hover:opacity-90'}
              aspect-[4/3]
            `}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index < 4 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
