import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeCheck,
  BedDouble,
  Bath,
  Home,
  Square,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PropertyFeatures: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const getPrice = () => {
    if (language === "en") return "from 159,500 $";
    if (language === "zh") return "来自1,150,900 ¥";
    return "от 12,907,600 ₽";
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {t("villa_characteristics")}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Square className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">{t("area")}</p>
                <p className="font-medium">150-156 {t("sqm")}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">{t("bedrooms")}</p>
                <p className="font-medium">2</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Bath className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">{t("bathrooms")}</p>
                <p className="font-medium">3</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">{t("bedrooms")}</p>
                <p className="font-medium">2</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {t("features")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{t("high_ceilings")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{t("panoramic_windows")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{t("private_pool_15")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{t("open_terrace")}</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{t("furniture_included")}</span>
              </li>
            </ul>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                {t("unique_offer")}
              </h3>

              <div className="bg-white px-6 py-4 rounded-lg shadow-sm w-full">
                <p className="text-sm text-gray-500 mb-1">{t("villa_cost")}</p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-800 whitespace-nowrap">
                  {getPrice()}
                </p>
              </div>

              <div className="space-y-4 w-full">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t("property_type")}</span>
                  <span className="font-medium">{t("freehold")}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">
                    {t("investment_income")}
                  </span>
                  <span className="font-medium text-green-600">
                    {t("guaranteed_7")}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t("guarantee_period")}</span>
                  <span className="font-medium">{t("10_years")}</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{t("readiness")}</span>
                  <span className="font-medium">{t("turnkey")}</span>
                </div>
              </div>

              <Button className="w-full group">
                {t("book_viewing")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-gray-500">{t("payment_note")}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
