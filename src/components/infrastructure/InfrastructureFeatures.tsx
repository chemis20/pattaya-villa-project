import React from "react";
import { InfrastructureCard } from "./InfrastructureCard";
import { Building, Umbrella, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

interface InfrastructureFeaturesProps {
  title: string;
}

export const InfrastructureFeatures: React.FC<InfrastructureFeaturesProps> = ({ title }) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const getFeatures = () => {
    if (language === 'en') {
      return [
        {
          icon: <Building className="h-8 w-8" />,
          title: "Territory",
          description: "Everything needed for a comfortable stay",
          gradientFrom: "blue",
          colorAccent: "blue",
          items: [
            "Swimming pools and beach area",
            "Restaurants and bars",
            "Car parking",
            "Landscape design"
          ]
        },
        {
          icon: <Umbrella className="h-8 w-8" />,
          title: "Amenities",
          description: "Services for relaxation",
          gradientFrom: "purple",
          colorAccent: "purple",
          items: [
            "Spa center and massage",
            "Fitness gym and yoga",
            "Lounge area for relaxation"
          ]
        },
        {
          icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
          title: "Security",
          description: "Reliable protection and safety",
          gradientFrom: "green",
          colorAccent: "green",
          items: [
            "24/7 security",
            "Video surveillance system",
            "Closed territory",
            "Access control"
          ]
        }
      ];
    } else if (language === 'zh') {
      return [
        {
          icon: <Building className="h-8 w-8" />,
          title: "区域",
          description: "舒适住宿所需的一切",
          gradientFrom: "blue",
          colorAccent: "blue",
          items: [
            "游泳池和沙滩区",
            "餐厅和酒吧",
            "停车场",
            "景观设计"
          ]
        },
        {
          icon: <Umbrella className="h-8 w-8" />,
          title: "设施",
          description: "休闲服务",
          gradientFrom: "purple",
          colorAccent: "purple",
          items: [
            "水疗中心和按摩",
            "健身房和瑜伽",
            "休闲休息区"
          ]
        },
        {
          icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
          title: "安全",
          description: "可靠的保护和安全",
          gradientFrom: "green",
          colorAccent: "green",
          items: [
            "24/7安保",
            "视频监控系统",
            "封闭区域",
            "门禁系统"
          ]
        }
      ];
    } else {
      return [
        {
          icon: <Building className="h-8 w-8" />,
          title: "Территория",
          description: "Всё необходимое для комфортного отдыха",
          gradientFrom: "blue",
          colorAccent: "blue",
          items: [
            "Бассейны и пляжная зона",
            "Рестораны и бары",
            "Парковка для автомобилей",
            "Ландшафтный дизайн"
          ]
        },
        {
          icon: <Umbrella className="h-8 w-8" />,
          title: "Удобства",
          description: "Услуги для отдыха",
          gradientFrom: "purple",
          colorAccent: "purple",
          items: [
            "Спа-центр и массаж",
            "Фитнес-зал и йога",
            "Лаунж-зона для отдыха"
          ]
        },
        {
          icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
          title: "Безопасность",
          description: "Надежная защита и охрана",
          gradientFrom: "green",
          colorAccent: "green",
          items: [
            "Охрана 24/7",
            "Система видеонаблюдения",
            "Закрытая территория",
            "Контроль доступа"
          ]
        }
      ];
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getFeatures().map((feature, index) => (
          <InfrastructureCard
            key={index}
            title={feature.title}
            items={feature.items}
            icon={feature.icon}
            gradientFrom={feature.gradientFrom}
            colorAccent={feature.colorAccent}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};