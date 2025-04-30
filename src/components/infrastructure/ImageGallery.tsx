import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ImageGallery: React.FC = () => {
  const infrastructureImages = [
    {
      src: "https://i.postimg.cc/fTQT8d6x/image-2.jpg",
      alt: "Ресторан при отеле",
      title: "Рестораны и кафе",
      description: "Современные заведения общественного питания с широким выбором блюд тайской и международной кухни"
    },
    {
      src: "https://i.postimg.cc/tRV0f9tW/image-3.jpg",
      alt: "Фитнес-центр",
      title: "Фитнес-центр",
      description: "Полноценный спортивный комплекс с современным оборудованием для поддержания здорового образа жизни"
    },
    {
      src: "https://i.postimg.cc/tX7fWV6z/image-1.jpg",
      alt: "Общий бассейн",
      title: "Общие бассейны",
      description: "Просторные бассейны с зонами отдыха и обслуживанием для комфортного времяпрепровождения"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Общая инфраструктура комплекса</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infrastructureImages.map((image, index) => (
          <div key={index} className="space-y-3">
            <div className="overflow-hidden rounded-lg">
              <AspectRatio ratio={4 / 3} className="bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all hover:scale-105 duration-300"
                />
              </AspectRatio>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{image.title}</h4>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
