import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

interface PropertySidebarProps {
  onFormSubmit: (formData: any) => void;
}

export const PropertySidebar: React.FC<PropertySidebarProps> = ({
  onFormSubmit,
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name,
      phone,
      city,
      timestamp: new Date().toISOString(),
    };

    onFormSubmit(formData);

    setName("");
    setPhone("");
    setCity("");
  };

  const getPrice = () => {
    if (language === "en") return "from 159,500 $";
    if (language === "zh") return "来自1,150,900 ¥";
    return "от 12,907,600 ₽";
  };

  const getWhatsAppMessage = () => {
    let message = "";

    if (language === "ru") {
      message =
        "Здравствуйте! Интересует покупка виллы в Паттайе. Расскажите подробнее о...";
    } else if (language === "en") {
      message =
        "Hello! I'm interested in buying a villa in Pattaya. Please tell me more about...";
    } else {
      message = "您好！我对在芭提雅购买别墅感兴趣。请告诉我更多...";
    }

    return encodeURIComponent(message);
  };

  return (
    <Card className="sticky top-4">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <span className="text-2xl font-bold text-purple-600">
            {getPrice()}
          </span>
          <p className="text-gray-500">
            {language === "en"
              ? "7% per annum for 10 years"
              : language === "zh"
                ? "10年内每年7%收益"
                : "7% годовых в течение 10 лет"}
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">{t("area")}</span>
            <span className="font-medium">150-156 {t("sqm")}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("bedrooms")}</span>
            <span className="font-medium">2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("bathrooms")}</span>
            <span className="font-medium">3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{t("pool")}</span>
            <span className="font-medium">{t("private_pool")}</span>
          </div>
        </div>

        <div className="space-y-3">
          {language === "zh" ? (
            <a
              href="weixin://dl/chat?wxid_fzyk8aquhlad12"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                {t("write_whatsapp")}
              </Button>
            </a>
          ) : (
            <a
              href={`https://wa.me/79142055535?text=${getWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                {t("write_whatsapp")}
              </Button>
            </a>
          )}

          <div className="w-full">
            <Button
              variant="outline"
              className="w-full mb-3"
              onClick={() =>
                document.getElementById("call-form")?.classList.toggle("hidden")
              }
            >
              {t("call")}
            </Button>

            <div
              id="call-form"
              className="hidden p-4 bg-gray-50 rounded-lg mt-2"
            >
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label htmlFor="name">{t("your_name")}</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t("phone_number")}</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (XXX) XXX-XXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">{t("your_city")}</Label>
                  <Input
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="New York"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t("send")}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
          <h3 className="font-medium text-purple-800 mb-2">
            {t("investment_appeal")}
          </h3>
          <p className="text-sm text-gray-600">{t("investment_description")}</p>
        </div>
      </CardContent>
    </Card>
  );
};
