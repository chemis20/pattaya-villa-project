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
          <strong>Информация о вилле</strong><br />
          Современная двухэтажная вилла площадью 115 кв.м. в <a href="https://www.google.com/maps/place/MAXXPATTAYA/@12.8399765,100.9375112,12.19z/data=!4m6!3m5!1s0x310293f3ed72f1f9:0x164cbdc5735f41ae!8m2!3d12.8470104!4d100.9678802!16s%2Fg%2F11lm6s2qcy?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">престижном районе На Джомтьен в Паттайе</a>. Вилла включает 2 спальни, 3 санузла, соединенные кухню с залом и бассейн за или перед домом (есть 2 типа планировки).
        </p>

        <p>
          Полный комплект мебели, бытовая техника и система кондиционирования уже включены в стоимость. Это позволяет заселиться сразу после покупки дома без дополнительных затрат на ремонт и обустройство.
        </p>
        
        <p>
          <strong>Инвестиционная привлекательность</strong><br />
          Район активно развивается: в 15 минутах езды строится новый торговый центр от основателя крупнейшего ТЦ в Таиланде, а также <a href="https://pattayapeople.ru/news/thailand-casinos-2-pattaya-thailand" target="_blank" rel="noopener noreferrer">первая в стране игровая зона с казино</a>. Эти проекты значительно повысят стоимость недвижимости после завершения строительства.
        </p>

        <p>
          MAXX PATTAYA реализуется компанией <a href="https://www.bowo.fr/en/blog/the-worlds-top-10-hotel-groups-in-2020" target="_blank" rel="noopener noreferrer">H World Group</a> — одним из крупнейших мировых гостиничных операторов, управляющим более 8 800 отелями в 18 странах.
        </p>
        
        <p>
          <strong>Гарантированный доход</strong><br />
          Гостиничный оператор предлагает 7% гарантированного дохода на протяжении 10 лет. Это не только покрывает расходы по ипотеке (3% годовых), но и обеспечивает дополнительный пассивный доход.
        </p>

        <p>
          Так по окончанию 10 лет вы получите недвижимость выросшую в цене в 1.5-2 раза от первоначальной стоимости и пассивный доход размером 1,3-1,6 млн. бат (3,1-3,9 млн. рублей)
        </p>
      </div>
      
      <Separator />
    </div>
  );
};