import React from "react";
import { Separator } from "@/components/ui/separator";
import { PropertyHeader } from "@/components/property/PropertyHeader";
import { PropertyDescription } from "@/components/property/PropertyDescription";
import { PropertyInvestment } from "@/components/property/PropertyInvestment";
import { PropertyGuarantee } from "@/components/property/PropertyGuarantee";

export const Property = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="space-y-8">
      {/* Заголовок, бейджи и местоположение */}
      <PropertyHeader />

      <div className="prose max-w-none">
        <PropertyDescription />
        <PropertyInvestment />
        <p>
          <strong>{t("guaranteed_income")}</strong>
          <br />
          {t("income_desc")}
        </p>
      </div>

      <Separator />
    </div>
  );
};
