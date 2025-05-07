
import React from "react";
import { PurchaseCard } from "./PurchaseCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";
import { usePurchaseFeatures } from "@/hooks/usePurchaseFeatures";

export const MortgageOption: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const { getMortgageFeatures } = usePurchaseFeatures();

  return (
    <PurchaseCard
      title={t('mortgage_purchase')}
      description={t('mortgage_desc')}
      features={getMortgageFeatures()}
      cardType="mortgage"
    />
  );
};
