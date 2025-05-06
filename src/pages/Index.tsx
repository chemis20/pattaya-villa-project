import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Property } from "@/components/Property";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyFeatures } from "@/components/PropertyFeatures";
import { PropertyInfrastructure } from "@/components/PropertyInfrastructure";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Отправка формы
    const formData = {
      name,
      phone,
      city,
      timestamp: new Date().toISOString()
    };
    
    console.log("Отправка данных:", formData);
    
    // Очистка формы после отправки
    setName("");
    setPhone("");
    setCity("");
    
    alert(t('thank_you'));
  };

  const getPrice = () => {
    if (language === 'en') return "from 159,500 $";
    if (language === 'zh') return "来自1,150,900 ¥";
    return "от 12,907,600 ₽";
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
            loading="eager"
            decoding="sync"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute top-4 right-4 z-10">
          <LanguageSwitcher />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="max-w-3xl mb-8">
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">{t('premium_property')}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t('villa_title')}</h1>
            <p className="text-xl text-white/90">{t('villa_subtitle')}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/79142055535" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">{t('get_consultation')}</Button>
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
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                <TabsTrigger value="gallery">{t('gallery')}</TabsTrigger>
                <TabsTrigger value="features">{t('features')}</TabsTrigger>
                <TabsTrigger value="infrastructure">{t('infrastructure')}</TabsTrigger>
                <TabsTrigger value="purchase">{t('purchase')}</TabsTrigger>
              </TabsList>
              <TabsContent value="gallery" className="mt-8 md:mt-6">
                <PropertyGallery />
              </TabsContent>
              <TabsContent value="features" className="mt-8 md:mt-6">
                <PropertyFeatures />
              </TabsContent>
              <TabsContent value="infrastructure" className="mt-8 md:mt-6">
                <PropertyInfrastructure />
              </TabsContent>
              <TabsContent value="purchase" className="mt-8 md:mt-6">
                <PurchaseOptions />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-purple-600">{getPrice()}</span>
                  <p className="text-gray-500">7% годовых в течение 10 лет</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('area')}</span>
                    <span className="font-medium">115 {t('sqm')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('bedrooms')}</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('bathrooms')}</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('pool')}</span>
                    <span className="font-medium">{t('private_pool')}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a href="https://wa.me/79142055535" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">{t('write_whatsapp')}</Button>
                  </a>
                  
                  <div className="w-full">
                    <Button variant="outline" className="w-full mb-3" onClick={() => document.getElementById('call-form')?.classList.toggle('hidden')}>                      {t('call')}
                    </Button>
                    
                    <div id="call-form" className="hidden p-4 bg-gray-50 rounded-lg mt-2">
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                          <Label htmlFor="name">{t('your_name')}</Label>
                          <Input 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="John Smith" 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">{t('phone_number')}</Label>
                          <Input 
                            id="phone" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            placeholder="+1 (XXX) XXX-XXXX" 
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">{t('your_city')}</Label>
                          <Input 
                            id="city" 
                            value={city} 
                            onChange={(e) => setCity(e.target.value)} 
                            placeholder="New York" 
                            required 
                          />
                        </div>
                        <Button type="submit" className="w-full">{t('send')}</Button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h3 className="font-medium text-purple-800 mb-2">{t('investment_appeal')}</h3>
                  <p className="text-sm text-gray-600">{t('investment_description')}</p>
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