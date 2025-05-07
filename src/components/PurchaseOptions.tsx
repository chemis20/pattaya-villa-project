
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";
import { MortgageOption } from "./purchase/MortgageOption";
import { CashOption } from "./purchase/CashOption";

export const PurchaseOptions: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const getPrice = () => {
    if (language === 'en') return "from 159,500 $";
    if (language === 'zh') return "来自1,150,900 ¥";
    return "от 12,907,600 ₽";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{t('purchase_conditions')}</h2>
        <div className="flex items-center bg-purple-50 text-purple-800 px-4 py-2 rounded-md">
          <span className="text-2xl font-bold">{getPrice()}</span>
        </div>
      </div>

      <Tabs defaultValue="mortgage" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mortgage">{t('with_mortgage')}</TabsTrigger>
          <TabsTrigger value="cash">{t('without_mortgage')}</TabsTrigger>
        </TabsList>

        <TabsContent value="mortgage" className="mt-6">
          <MortgageOption />
        </TabsContent>

        <TabsContent value="cash" className="mt-6">
          <CashOption />
        </TabsContent>
      </Tabs>
    </div>
  );
};
