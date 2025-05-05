import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Property } from "@/components/Property";
import { PropertyFeatures } from "@/components/PropertyFeatures";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyInfrastructure } from "@/components/PropertyInfrastructure";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  
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
    
    // Здесь был бы код для реальной отправки данных на сервер/email
    alert(" Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время. ");
  };

  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-purple-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/Y9Q56w2F/IMG-6432.jpg"
            alt="Вилла в Паттайе" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="max-w-3xl mb-8">
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">Премиальная недвижимость</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Двуэтажная вилла с бассейном в Паттайе</h1>
            <p className="text-xl text-white/90">Современная вилла 115 кв.м. с 2 спальнями в элитном районе На Дкеомьен</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/79142055535" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Получить консультацию</Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Property Info */}
          <div className="lg:col-span-2">
            <Property />
            
            <Tabs defaultValue="gallery" className="mt-10">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="gallery">Галерея</TabsTrigger>
                <TabsTrigger value="features">Характеристики</TabsTrigger>
                <TabsTrigger value="infrastructure">Инфраструктура</TabsTrigger>
                <TabsTrigger value="purchase">Покупка</TabsTrigger>
              </TabsList>
              <TabsContent value="gallery" className="mt-6">
                <PropertyGallery />
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <PropertyFeatures />
              </TabsContent>
              <TabsContent value="infrastructure" className="mt-6">
                <PropertyInfrastructure />
              </TabsContent>
              <TabsContent value="purchase" className="mt-6">
                <PurchaseOptions />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-purple-600">от 12,907,600 €</span>
                  <p className="text-gray-500">7% годовых в течение 10 лет</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Площадь</span>
                    <span className="font-medium">115 м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Спальни</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ванные</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Бассейн</span>
                    <span className="font-medium">Частный</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href="https://wa.me/79142055535" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Написать в What's App</Button>
                  </a>
                  
                  <div className="w-full">
                    <Button variant="outline" className="w-full mb-3" onClick={() => document.getElementById('call-form')?.classList.toggle('hidden')}> Позвонить
                    </Button>
                    
                    <div id="call-form" className="hidden p-4 bg-gray-50 rounded-lg mt-2">
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                          <Label htmlFor="name">Ваше имя</Label>
                          <Input 
                            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Иван Иванов" 
            required 
          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Номер телефона</Label>
                          <Input 
                            id="phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="+7 (XXX) XXX-XX-XX" 
            required 
          />
                        </div>
                        <div>
                          <Label htmlFor="city">Ваш город</Label>
                          <Input 
                            id="city" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Москва" 
            required 
          />
                        </div>
                        <Button type="submit" className="w-full">Отправить</Button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h3 className="font-medium text-purple-800 mb-2">Инвестиционная привлекательность</h3>
                  <p className="text-sm text-gray-600">Гарантированная доходность 7% на протяжении 10 лет. Компенсирует расходы по ипотеке (3%) и обеспечивает дополнительный доход.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;