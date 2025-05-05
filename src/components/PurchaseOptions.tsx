import React, { useState } from "react");
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PurchaseCard } from "./purchase/PurchaseCard";

export const PurchaseOptions: React.FC = () => {
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
    console.log(" Отправка данных на email ilmos03@bk.ru:", formData);
    
    // Очистка формы после отправки
    setName("");
    setPhone("");
    setCity("");
    setShowMortgageForm(false);
    setShowCashForm(false);
    
    // Здесь был бы код для реальной отправки данных на сервер/email
    alert(" Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.");
  };

  const mortgageFeatures = [
    {
      title: "Депозит 100 000 бат",
      description: "Бронирование объекта"
    },
    {
      title: "Оплата 50% стоимости дома (от 4 990 000 бат)",
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

  const cashFeatures = [
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

  const formProps = {
    name,
    setName,
    phone,
    setPhone,
    city,
    setCity,
    onSubmit: handleSubmit
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Условия приобретения</h2>
        <div className="flex items-center bg-purple-50 text-purple-800 px-4 py-2 rounded-md">
          <span className="text-2xl font-bold">от 12,907,600 РР</span>
        </div>
      </div>
      
      <Tabs defaultValue="mortgage" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mortgage">С ипотекой</TabsTrigger>
          <TabsTrigger value="cash">Без ипотеки</TabsTrigger>
        </TabsList>

        <TabsContent value="mortgage" className="mt-6">
          <PurchaseCard
            title="Покупка в ипотеку"
            description="Выгодные условия приобретения с гарантированным доходом"
            features={mortgageFeatures}
            showForm={showMortgageForm}
            toggleForm={() => setShowMortgageForm(!showMortgageForm)}
            formProps={formProps}
            formId="-mortgage"
          />
        </TabsContent>

        <TabsContent value="cash" className="mt-6">
          <PurchaseCard
            title="Покупка без ипотеки"
            description="Прямое приобретение объекта недвижимости"
            features={cashFeatures}
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