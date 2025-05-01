import React from "react";
import { PropertyGallery } from "./PropertyGallery";
import { PropertyFeatures } from "./PropertyFeatures";
import { PropertyInfrastructure } from "./PropertyInfrastructure";
import { PurchaseOptions } from "./PurchaseOptions";
import { Card, CardContent } from "@/components/ui/card";

export const Property: React.FC = () => {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">MAXX PATTAYA: Вилла с собственным бассейном</h1>
          
          <PropertyGallery />
          
          <Card>
            <CardContent className="p-6">
              <div className="prose max-w-none">
                <p className="font-semibold">Информация о вилле</p>
                Современная двухэтажная вилла площадью 115 кв.м. в престижном районе На Джомтьен в Паттайе. Вилла включает 2 спальни, 3 санузла, соединенные кухню с залом и бассейн за или перед домом (есть 2 типа планировки).
                
                <p>Полный комплект мебели, бытовая техника и система кондиционирования уже включены в стоимость. Это позволяет заселиться сразу после покупки дома без дополнительных затрат на ремонт и обустройство.</p>
                
                <p className="font-semibold">Инвестиционная привлекательность</p>
                Район активно развивается: в 15 минутах езды строится новый торговый центр от основателя крупнейшего ТЦ в Таиланде, а также первая в стране игровая зона с казино. Эти проекты значительно повысят стоимость недвижимости после завершения строительства.
                
                <p>MAXX PATTAYA реализуется компанией H World Group — одним из крупнейших мировых гостиничных операторов, управляющим более 10 800 отелями в 18 странах.</p>
                
                <p className="font-semibold">Гарантированный доход</p>
                Гостиничный оператор предлагает 7% гарантированного дохода на протяжении 10 лет. Это не только покрывает расходы по ипотеке (3% годовых), но и обеспечивает дополнительный пассивный доход.
                
                <p>Так по окончанию 10 лет вы получите недвижимость выросшую в цене в 1.5-2 раза от первоначальной стоимости и пассивный доход размером 1,3-1,6 млн. бат (3,1-3,9 млн. рублей)</p>
              </div>
            </CardContent>
          </Card>
          
          <PropertyFeatures />
          
          <PropertyInfrastructure />
        </div>
        
        <div className="md:col-span-1">
          <PurchaseOptions />
        </div>
      </div>
    </div>
  );
};
