
import React from "react";
import { PurchaseCard } from "./PurchaseCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";
import { usePurchaseFeatures } from "@/hooks/usePurchaseFeatures";

export const CashOption: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const { getCashFeatures } = usePurchaseFeatures();

  return (
    <PurchaseCard
      title={t('cash_purchase')}
      description={t('cash_purchase_desc')}
      features={getCashFeatures()}
      cardType="cash"
    />
  );
};
