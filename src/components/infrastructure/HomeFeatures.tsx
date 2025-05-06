import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

interface HomeFeatureProps {
  imageUrl: string;
  title: string;
  description: string;
}

const HomeFeature: React.FC<HomeFeatureProps> = ({ imageUrl, title, description }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-44 w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h4 className="text-base font-semibold mb-2 text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export const HomeFeatures: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const getFeatures = () => {
    if (language === 'en') {
      return [
        {
          imageUrl: "https://i.postimg.cc/5jBnXxf7/photo-2-2025-04-30-18-37-58.jpg",
          title: "Spacious Ground Floor",
          description: "Bright living room with panoramic windows, modern furniture, and open layout."
        },
        {
          imageUrl: "https://i.postimg.cc/D856cBJ1/photo-3-2025-04-30-18-37-58.jpg",
          title: "Comfortable Bedroom",
          description: "Cozy bedroom with a large king-size bed, soft lighting, and stylish interior."
        },
        {
          imageUrl: "https://i.postimg.cc/2L7wMxHR/photo-11-2025-04-30-18-37-58.jpg",
          title: "Private Pool",
          description: "Personal pool with clean water (purification station already installed), surrounded by sunbathing and relaxation area."
        }
      ];
    } else if (language === 'zh') {
      return [
        {
          imageUrl: "https://i.postimg.cc/5jBnXxf7/photo-2-2025-04-30-18-37-58.jpg",
          title: "宽敞的一楼",
          description: "明亮的客厅，带全景窗户、现代家具和开放式布局。"
        },
        {
          imageUrl: "https://i.postimg.cc/D856cBJ1/photo-3-2025-04-30-18-37-58.jpg",
          title: "舒适的卧室",
          description: "舒适的卧室，配有大号特大床、柔和灯光和时尚内饰。"
        },
        {
          imageUrl: "https://i.postimg.cc/2L7wMxHR/photo-11-2025-04-30-18-37-58.jpg",
          title: "私人泳池",
          description: "私人泳池，水质干净（已安装净化站），周围有日光浴和休闲区域。"
        }
      ];
    } else {
      return [
        {
          imageUrl: "https://i.postimg.cc/5jBnXxf7/photo-2-2025-04-30-18-37-58.jpg",
          title: "Просторный первый этаж",
          description: "Светлая гостиная с панорамными окнами, современной мебелью и открытой планировкой."
        },
        {
          imageUrl: "https://i.postimg.cc/D856cBJ1/photo-3-2025-04-30-18-37-58.jpg",
          title: "Комфортная спальня",
          description: "Уютная спальня с большой кроватью (king size), мягким освещением и стильным интерьером."
        },
        {
          imageUrl: "https://i.postimg.cc/2L7wMxHR/photo-11-2025-04-30-18-37-58.jpg",
          title: "Приватный бассейн",
          description: "Собственный бассейн с чистой водой (очистительная станция уже установлена), окруженный зоной для загара и отдыха."
        }
      ];
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-900">
        {language === 'en' ? "House Features" : language === 'zh' ? "房屋特点" : "Особенности дома"}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getFeatures().map((feature, index) => (
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