
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyGallery } from "@/components/PropertyGallery";
import { Property } from "@/components/Property";
import { PropertyFeatures } from "@/components/PropertyFeatures";
import { PropertyInfrastructure } from "@/components/PropertyInfrastructure";
import { PurchaseOptions } from "@/components/PurchaseOptions";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("property");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <PropertyGallery />
          
          <div className="mt-10">
            <Tabs defaultValue="property" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="property">Описание</TabsTrigger>
                <TabsTrigger value="features">Характеристики</TabsTrigger>
                <TabsTrigger value="infrastructure">Инфраструктура</TabsTrigger>
                <TabsTrigger value="purchase">Покупка</TabsTrigger>
              </TabsList>
              <TabsContent value="property" className="mt-6">
                <Property />
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
        </div>
        
        <div className="lg:col-span-1 order-first lg:order-last">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm sticky top-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Двухэтажная вилла с бассейном в Паттайе</h2>
            <div>
              <div className="text-center mb-6">
                <span className="text-2xl font-bold text-purple-600">от 12,907,600 ₽</span>
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
              
              <Button className="w-full group text-lg py-6">
                Узнать подробнее
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                Связаться с нами: +7 (XXX) XXX-XX-XX
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
