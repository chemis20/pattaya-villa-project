
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

import { HeroSection } from "@/components/HeroSection";
import { Property } from "@/components/Property";
import { PropertyTabs } from "@/components/PropertyTabs";
import { PropertySidebar } from "@/components/PropertySidebar";

const Index = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const { toast } = useToast();

  const handleFormSubmit = (formData: any) => {
    console.log("Отправка данных:", formData);
    toast({
      title: t('thank_you'),
      description: language === 'en' 
        ? "Your application has been received. We will contact you shortly." 
        : language === 'zh' 
          ? "您的申请已收到。我们将尽快与您联系。" 
          : "Ваша заявка принята. Мы свяжемся с вами в ближайшее время."
    });
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Property Info */}
          <div className="lg:col-span-2">
            <Property />
            <PropertyTabs />
          </div>

          {/* Sidebar */}
          <div>
            <PropertySidebar onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
