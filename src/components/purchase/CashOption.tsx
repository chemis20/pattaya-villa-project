
import React from "react";
import { PurchaseCard } from "./PurchaseCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";
import { usePurchaseFeatures } from "@/hooks/usePurchaseFeatures";

interface FormProps {
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

interface CashOptionProps {
  formProps: FormProps;
  showForm: boolean;
  toggleForm: () => void;
}

export const CashOption: React.FC<CashOptionProps> = ({ 
  formProps, 
  showForm, 
  toggleForm 
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const { getCashFeatures } = usePurchaseFeatures();

  return (
    <PurchaseCard
      title={t('cash_purchase')}
      description={t('cash_purchase_desc')}
      features={getCashFeatures()}
      showForm={showForm}
      toggleForm={toggleForm}
      formProps={formProps}
      formId="-cash"
    />
  );
};
