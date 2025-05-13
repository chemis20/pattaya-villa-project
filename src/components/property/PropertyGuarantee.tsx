
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PropertyGuarantee: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div>
      <p>
        <strong>{t('guaranteed_income')}</strong><br />
        {t('income_desc')}
      </p>

      <p className="mt-4">
        {t('final_desc')}
      </p>
    </div>
  );
};
