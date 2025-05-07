import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PurchaseFeature } from "./PurchaseFeature";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

interface PurchaseFeatureData {
  title: string;
  description: string;
}

interface PurchaseCardProps {
  title: string;
  description: string;
  features: PurchaseFeatureData[];
  formId?: string;
  cardType: "mortgage" | "cash";
}

export const PurchaseCard: React.FC<PurchaseCardProps> = ({
  title,
  description,
  features,
  cardType
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  const getWhatsAppMessage = () => {
    let message = "";
    
    if (language === 'ru') {
      message = `Здравствуйте! Интересует покупка виллы в Паттайе. Расскажите подробнее о ${cardType === "mortgage" ? "покупке с ипотекой" : "прямой покупке без ипотеки"}...`;
    } else if (language === 'en') {
      message = `Hello! I'm interested in buying a villa in Pattaya. Please tell me more about ${cardType === "mortgage" ? "purchasing with a mortgage" : "direct purchase without a mortgage"}...`;
    } else {
      message = `您好！我对在芭提雅购买别墅感兴趣。请告诉我更多关于${cardType === "mortgage" ? "使用抵押贷款购买" : "不使用抵押贷款直接购买"}的信息...`;
    }
    
    return encodeURIComponent(message);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <PurchaseFeature 
              key={index} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button 
          className="w-full" 
          onClick={() => window.open(`https://wa.me/79142055535?text=${getWhatsAppMessage()}`, '_blank')}
        >
          {t('learn_more')}
        </Button>
      </CardFooter>
    </Card>
  );
};