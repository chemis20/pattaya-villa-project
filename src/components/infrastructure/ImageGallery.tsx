import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const ImageGallery: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const getInfrastructureImages = () => {
    if (language === 'en') {
      return [
        {
          src: "https://i.postimg.cc/fTQT8d6x/image-2.jpg",
          alt: "Hotel restaurant",
          title: "Restaurants and cafes",
          description: "Modern dining establishments with a wide selection of Thai and international cuisine"
        },
        {
          src: "https://i.postimg.cc/tRV0f9tW/image-3.jpg",
          alt: "Fitness center",
          title: "Fitness center",
          description: "Full-service sports complex with modern equipment for maintaining a healthy lifestyle"
        },
        {
          src: "https://i.postimg.cc/tX7fWV6z/image-1.jpg",
          alt: "Common pool",
          title: "Common pools",
          description: "Spacious pools with relaxation areas and service for comfortable leisure time"
        }
      ];
    } else if (language === 'zh') {
      return [
        {
          src: "https://i.postimg.cc/fTQT8d6x/image-2.jpg",
          alt: "酒店餐厅",
          title: "餐厅和咖啡馆",
          description: "现代化的餐饮场所，提供泰国和国际美食"
        },
        {
          src: "https://i.postimg.cc/tRV0f9tW/image-3.jpg",
          alt: "健身中心",
          title: "健身中心",
          description: "配备现代化设备的全方位体育综合体，保持健康生活方式"
        },
        {
          src: "https://i.postimg.cc/tX7fWV6z/image-1.jpg",
          alt: "公共泳池",
          title: "公共泳池",
          description: "宽敞的泳池区，带有休息区和服务，提供舒适的休闲时光"
        }
      ];
    } else {
      return [
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
    }
  };

  const infrastructureImages = getInfrastructureImages();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">
        {language === 'en' 
          ? "General Complex Infrastructure" 
          : language === 'zh' 
            ? "综合设施" 
            : "Общая инфраструктура комплекса"}
      </h3>
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