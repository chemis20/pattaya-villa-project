import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Property = () => {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Новостройка</Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">Инвестиция</Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">С мебелью</Badge>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Двухэтажная вилла 115 кв.м. с бассейном в Паттайе
        </h2>
        
        <div className="flex items-center text-gray-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Паттайя, район На Джомтьен, 7 км от моря</span>
        </div>
      </div>

      <div className="prose max-w-none">
        <p>
          Современная двухэтажная вилла площадью 115 кв.м. расположена в престижном районе На Джомтьен в Паттайе. 
          Вилла включает 2 спальни, 3 санузла и полностью меблированную кухню с залом.
        </p>

        <p>
          В стоимость входит полный комплект мебели, бытовая техника и система кондиционирования, 
          что позволяет заселиться сразу после покупки без дополнительных затрат на обустройство.
        </p>
        
        <h3>Инвестиционная привлекательность</h3>
        <p>
          Район активно развивается: в 15 минутах езды строится новый торговый центр от основателя крупнейшего ТЦ в Таиланде, 
          а также первая в стране игровая зона с казино. Эти проекты значительно повысят стоимость недвижимости после завершения строительства.
        </p>
        
        <p>
          MAXX PATTAYA реализуется компанией H World Group — одним из крупнейших мировых гостиничных операторов, 
          управляющим более 10 800 отелями в 18 странах. Группа объединяет такие известные бренды, как Steigenberger Hotels & Resorts, 
          IntercityHotel, Mercure, Novotel, Ibis и другие.
        </p>
        
        <h3>Гарантированный доход</h3>
        <p>
          Проект предлагает 7% гарантированного дохода на протяжении 10 лет, что не только покрывает расходы 
          по ипотеке (3% годовых), но и обеспечивает дополнительный пассивный доход.
        </p>
      </div>
      
      <Separator />
    </div>
  );
};
