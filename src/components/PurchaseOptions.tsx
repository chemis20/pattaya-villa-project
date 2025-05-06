import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PurchaseCard } from "./purchase/PurchaseCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const PurchaseOptions: React.FC = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [showMortgageForm, setShowMortgageForm] = useState(false);
  const [showCashForm, setShowCashForm] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Отправка формы на email
    const formData = {
      name,
      phone,
      city,
      timestamp: new Date().toISOString()
    };
    
    // Простая имитация отправки данных на сервер
    console.log("Отправка данных на email ilmos03@bk.ru:", formData);
    
    // Очистка формы после отправки
    setName("");
    setPhone("");
    setCity("");
    setShowMortgageForm(false);
    setShowCashForm(false);
    
    // Здесь был бы код для реальной отправки данных на сервер/email
    alert(t('thank_you'));
  };

  const getMortgageFeatures = () => {
    if (language === 'en') {
      return [
        {
          title: "Deposit 100,000 baht",
          description: "Property reservation"
        },
        {
          title: "Payment of 50% of the house cost (from 5,190,000 baht)",
          description: "In two payments: 25% within 30 days after contract signing and 25% upon construction completion"
        },
        {
          title: "Mortgage for 10 years at 3% per annum",
          description: "Fixed rate for the entire term"
        },
        {
          title: "10-year contract with 7% annual return",
          description: "Net income of 3% after mortgage payments"
        }
      ];
    } else if (language === 'zh') {
      return [
        {
          title: "100,000泰铢订金",
          description: "房产预订"
        },
        {
          title: "支付房屋成本的50%（从5,190,000泰铢起）",
          description: "分两次付款：签约后30天内支付25%，完工后支付25%"
        },
        {
          title: "10年期3%年利率抵押贷款",
          description: "整个期限固定利率"
        },
        {
          title: "10年合同，年回报率7%",
          description: "抵押贷款付款后的净收入为3%"
        }
      ];
    } else {
      return [
        {
          title: "Депозит 100 000 бат",
          description: "Бронирование объекта"
        },
        {
          title: "Оплата 50% стоимости дома (от 5 190 000 бат)",
          description: "Двумя платежами: 25% в течение 30 дней после составления договора и 25% по завершению строительства"
        },
        {
          title: "Ипотека на 10 лет под 3% годовых",
          description: "Фиксированная ставка на весь срок"
        },
        {
          title: "Договор на 10 лет с доходностью 7% годовых",
          description: "Чистый доход 3% после выплаты ипотеки"
        }
      ];
    }
  };

  const getCashFeatures = () => {
    if (language === 'en') {
      return [
        {
          title: "Deposit – 10% of the total house cost",
          description: "Minimum 100,000 baht"
        },
        {
          title: "Contract signing within 7 days",
          description: "After deposit payment"
        },
        {
          title: "Amortization fund – 600 baht/sq.m (approx. $1,840)",
          description: "One-time payment"
        },
        {
          title: "Maintenance – 15 baht/sq.m per month",
          description: "Payment for 12 months in advance (approx. $550)"
        }
      ];
    } else if (language === 'zh') {
      return [
        {
          title: "订金 – 房屋总成本的10%",
          description: "最低100,000泰铢"
        },
        {
          title: "7天内签约",
          description: "支付订金后"
        },
        {
          title: "折旧基金 – 600泰铢/平方米（约13,200人民币）",
          description: "一次性付款"
        },
        {
          title: "维护费 – 每月15泰铢/平方米",
          description: "提前12个月付款（约3,960人民币）"
        }
      ];
    } else {
      return [
        {
          title: "Депозит – 10% от общей стоимости дома",
          description: "Минимум 100 000 бат"
        },
        {
          title: "Подписание договора в течение 7 дней",
          description: "После внесения депозита"
        },
        {
          title: "Амортизационный фонд – 600 бат/кв.м (⁓165,600 руб.)",
          description: "Единовременный платеж"
        },
        {
          title: "Обслуживание – 15 бат/кв.м в месяц",
          description: "Оплата за 12 месяцев вперед (⁓ 49,680 руб.)"
        }
      ];
    }
  };

  const formProps = {
    name,
    setName,
    phone,
    setPhone,
    city,
    setCity,
    onSubmit: handleSubmit
  };

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
          <PurchaseCard
            title={t('mortgage_purchase')}
            description={t('mortgage_desc')}
            features={getMortgageFeatures()}
            showForm={showMortgageForm}
            toggleForm={() => setShowMortgageForm(!showMortgageForm)}
            formProps={formProps}
            formId="-mortgage"
          />
        </TabsContent>

        <TabsContent value="cash" className="mt-6">
          <PurchaseCard
            title={t('cash_purchase')}
            description={t('cash_purchase_desc')}
            features={getCashFeatures()}
            showForm={showCashForm}
            toggleForm={() => setShowCashForm(!showCashForm)}
            formProps={formProps}
            formId="-cash"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};