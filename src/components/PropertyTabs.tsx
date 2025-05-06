
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyFeatures } from "@/components/PropertyFeatures";
import { PropertyInfrastructure } from "@/components/PropertyInfrastructure";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PropertyTabs: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <Tabs defaultValue="gallery" className="mt-10">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
        <TabsTrigger value="gallery">{t('gallery')}</TabsTrigger>
        <TabsTrigger value="features">{t('features')}</TabsTrigger>
        <TabsTrigger value="infrastructure">{t('infrastructure')}</TabsTrigger>
        <TabsTrigger value="purchase">{t('purchase')}</TabsTrigger>
      </TabsList>
      <TabsContent value="gallery" className="mt-8 md:mt-6">
        <PropertyGallery />
      </TabsContent>
      <TabsContent value="features" className="mt-8 md:mt-6">
        <PropertyFeatures />
      </TabsContent>
      <TabsContent value="infrastructure" className="mt-8 md:mt-6">
        <PropertyInfrastructure />
      </TabsContent>
      <TabsContent value="purchase" className="mt-8 md:mt-6">
        <PurchaseOptions />
      </TabsContent>
    </Tabs>
  );
};
