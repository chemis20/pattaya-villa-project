import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Property } from "@/components/Property";
import { PropertyFeatures } from "@/components/PropertyFeatures";
import { PropertyGallery } from "@/components/PropertyGallery";
import { PropertyInfrastructure } from "@/components/PropertyInfrastructure";
import { PurchaseOptions } from "@/components/PurchaseOptions";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F7]">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-purple-800 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/B26Hx8W/background.jpg" // Исправлено с https://ibb.co/B26Hx8WK
            alt="Вилла в Паттайе" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="max-w-3xl mb-8">
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">Премиальная недвижимость</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Двухэтажная вилла с бассейном в Паттайе</h1>
            <p className="text-xl text-white/90">Современная вилла 115 кв.м. с 2 спальнями в элитном районе На Джомтьен</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Получить консультацию</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">Смотреть презентацию</Button>
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
                  <span className="text-3xl font-bold text-purple-600">от 12,225,000 ₽</span>
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
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Забронировать просмотр</Button>
                  <Button variant="outline" className="w-full">Скачать презентацию</Button>
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
