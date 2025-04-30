import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PurchaseOptions: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [showForm, setShowForm] = useState(false);
  
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
    setShowForm(false);
    
    // Здесь был бы код для реальной отправки данных на сервер/email
    alert("Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Условия приобретения</h2>
        <div className="flex items-center bg-purple-50 text-purple-800 px-4 py-2 rounded-md">
          <span className="text-2xl font-bold">от 12,225,000 ₽</span>
        </div>
      </div>

      <Tabs defaultValue="mortgage" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mortgage">С ипотекой</TabsTrigger>
          <TabsTrigger value="cash">Без ипотеки</TabsTrigger>
        </TabsList>

        <TabsContent value="mortgage" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Покупка в ипотеку</CardTitle>
              <CardDescription>
                Выгодные условия приобретения с гарантированным доходом
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Депозит 100 000 бат</p>
                    <p className="text-sm text-gray-500">Бронирование объекта</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Оплата 50% стоимости дома (от 4 990 000 бат)</p>
                    <p className="text-sm text-gray-500">Двумя платежами: 25% в течение 30 дней после составления договора и 25% по завершению строительства</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ипотека на 10 лет под 3% годовых</p>
                    <p className="text-sm text-gray-500">Фиксированная ставка на весь срок</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Договор на 10 лет с доходностью 7% годовых</p>
                    <p className="text-sm text-gray-500">Чистый доход 3% после выплаты ипотеки</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full mb-3" onClick={() => setShowForm(!showForm)}>Узнать подробнее</Button>
              
              {showForm && (
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-2">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="name-form">Ваше имя</Label>
                      <Input 
                        id="name-form" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Иван Иванов" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone-form">Номер телефона</Label>
                      <Input 
                        id="phone-form" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="+7 (XXX) XXX-XX-XX" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="city-form">Ваш город</Label>
                      <Input 
                        id="city-form" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        placeholder="Москва" 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </div>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="cash" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Покупка без ипотеки</CardTitle>
              <CardDescription>
                Прямое приобретение объекта недвижимости
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Депозит – 10% от общей стоимости дома</p>
                    <p className="text-sm text-gray-500">Минимум 100 000 бат</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Подписание договора в течение 7 дней</p>
                    <p className="text-sm text-gray-500">После внесения депозита</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Амортизационный фонд – 600 бат/кв.м (⁓165,600 руб.)</p>
                    <p className="text-sm text-gray-500">Единовременный платеж</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Обслуживание – 15 бат/кв.м в месяц</p>
                    <p className="text-sm text-gray-500">Оплата за 12 месяцев вперед (⁓ 49,680 руб.)</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full mb-3" onClick={() => setShowForm(!showForm)}>Узнать подробнее</Button>
              
              {showForm && (
                <div className="w-full p-4 bg-gray-50 rounded-lg mt-2">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="name-form-cash">Ваше имя</Label>
                      <Input 
                        id="name-form-cash" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Иван Иванов" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone-form-cash">Номер телефона</Label>
                      <Input 
                        id="phone-form-cash" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="+7 (XXX) XXX-XX-XX" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="city-form-cash">Ваш город</Label>
                      <Input 
                        id="city-form-cash" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        placeholder="Москва" 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </div>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
