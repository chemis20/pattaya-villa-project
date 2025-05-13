import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";
import { PropertyHeader } from "@/components/property/PropertyHeader";
import { PropertyDescription } from "./property/PropertyDescription";
import { PropertyInvestment } from "./property/PropertyInvestment";
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
