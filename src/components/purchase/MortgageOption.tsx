
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

interface MortgageOptionProps {
  formProps: FormProps;
  showForm: boolean;
  toggleForm: () => void;
}

export const MortgageOption: React.FC<MortgageOptionProps> = ({ 
  formProps, 
  showForm, 
  toggleForm 
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  const { getMortgageFeatures } = usePurchaseFeatures();

  return (
    <PurchaseCard
      title={t('mortgage_purchase')}
      description={t('mortgage_desc')}
      features={getMortgageFeatures()}
      showForm={showForm}
      toggleForm={toggleForm}
      formProps={formProps}
      formId="-mortgage"
    />
  );
};
