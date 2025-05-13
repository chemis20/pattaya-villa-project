
import React from "react";
import { Separator } from "@/components/ui/separator";
import { PropertyHeader } from "@/components/property/PropertyHeader";
import { PropertyDescription } from "@/components/property/PropertyDescription";
import { PropertyInvestment } from "@/components/property/PropertyInvestment";
import { PropertyGuarantee } from "@/components/property/PropertyGuarantee";

export const Property: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Заголовок, бейджи и местоположение */}
      <PropertyHeader />

      <div className="prose max-w-none">
        {/* Основное описание виллы */}
        <PropertyDescription />
        
        {/* Информация об инвестиционной привлекательности */}
        <PropertyInvestment />
        
        {/* Информация о гарантированном доходе */}
        <PropertyGuarantee />
      </div>
      
      <Separator />
    </div>
  );
};
