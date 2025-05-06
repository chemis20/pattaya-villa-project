import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

export const Property = () => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">{t('new_building')}</Badge>
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">{t('investment')}</Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">{t('with_furniture')}</Badge>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t('villa_full_title')}
        </h2>
        
        <div className="flex items-center text-gray-600 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <a href="https://www.google.com/maps/place/MAXXPATTAYA/@12.8399765,100.9375112,12.19z/data=!4m6!3m5!1s0x310293f3ed72f1f9:0x164cbdc5735f41ae!8m2!3d12.8470104!4d100.9678802!16s%2Fg%2F11lm6s2qcy?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
            {t('villa_location')}
          </a>
        </div>
      </div>

      <div className="prose max-w-none">
        <p>
          <strong>{t('villa_info')}</strong><br />
          {language === 'ru' ? (
            <>
              Современная двухэтажная вилла площадью 115 кв.м. в <a href="https://www.google.com/maps/place/MAXXPATTAYA/@12.8399765,100.9375112,12.19z/data=!4m6!3m5!1s0x310293f3ed72f1f9:0x164cbdc5735f41ae!8m2!3d12.8470104!4d100.9678802!16s%2Fg%2F11lm6s2qcy?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">престижном районе На Джомтьен в Паттайе</a>. Вилла включает 2 спальни, 3 санузла, соединенные кухню с залом и бассейн за или перед домом (есть 2 типа планировки).
            </>
          ) : language === 'en' ? (
            <>
              Modern two-story villa with an area of 115 sq.m. in the <a href="https://www.google.com/maps/place/MAXXPATTAYA/@12.8399765,100.9375112,12.19z/data=!4m6!3m5!1s0x310293f3ed72f1f9:0x164cbdc5735f41ae!8m2!3d12.8470104!4d100.9678802!16s%2Fg%2F11lm6s2qcy?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">prestigious Na Jomtien area in Pattaya</a>. The villa includes 2 bedrooms, 3 bathrooms, connected kitchen with a hall, and a pool behind or in front of the house (there are 2 types of layouts).
            </>
          ) : (
            <>
              芭堤雅那镇区<a href="https://www.google.com/maps/place/MAXXPATTAYA/@12.8399765,100.9375112,12.19z/data=!4m6!3m5!1s0x310293f3ed72f1f9:0x164cbdc5735f41ae!8m2!3d12.8470104!4d100.9678802!16s%2Fg%2F11lm6s2qcy?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">高级区域的现代双层别墅</a>，面积115平方米。别墅包括2间卧室，3间浴室，连接厨房和大厅，以及房屋后面或前面的游泳池（有2种布局类型）。
            </>
          )}
        </p>

        <p>
          {t('furniture_desc')}
        </p>
        
        <p>
          <strong>{t('investment_title')}</strong><br />
          {language === 'ru' ? (
            <>
              Район активно развивается: в 15 минутах езды строится новый торговый центр от основателя крупнейшего ТЦ в Таиланде, а также <a href="https://pattayapeople.ru/news/thailand-casinos-2-pattaya-thailand" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">первая в стране игровая зона с казино</a>. Эти проекты значительно повысят стоимость недвижимости после завершения строительства.
            </>
          ) : language === 'en' ? (
            <>
              The area is actively developing: a new shopping center from the founder of the largest shopping mall in Thailand is being built 15 minutes away, as well as the <a href="https://pattayapeople.ru/news/thailand-casinos-2-pattaya-thailand" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">country's first gaming zone with a casino</a>. These projects will significantly increase the value of real estate after completion.
            </>
          ) : (
            <>
              该地区正在积极发展：15分钟路程内，泰国最大购物中心的创始人正在建设新的购物中心，以及<a href="https://pattayapeople.ru/news/thailand-casinos-2-pattaya-thailand" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">国内第一个带赌场的游戏区</a>。这些项目完成后将显著提高房地产价值。
            </>
          )}
        </p>

        <p>
          {language === 'ru' ? (
            <>
              MAXX PATTAYA реализуется компанией <a href="https://www.bowo.fr/en/blog/the-worlds-top-10-hotel-groups-in-2020" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">H World Group</a> — одним из крупнейших мировых гостиничных операторов, управляющим более 8 800 отелями в 18 странах.
            </>
          ) : language === 'en' ? (
            <>
              MAXX PATTAYA is implemented by <a href="https://www.bowo.fr/en/blog/the-worlds-top-10-hotel-groups-in-2020" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">H World Group</a> — one of the world's largest hotel operators, managing more than 8,800 hotels in 18 countries.
            </>
          ) : (
            <>
              MAXX PATTAYA由<a href="https://www.bowo.fr/en/blog/the-worlds-top-10-hotel-groups-in-2020" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">华住集团</a>实施 — 全球最大的酒店运营商之一，管理着18个国家的8,800多家酒店。
            </>
          )}
        </p>
        
        <p>
          <strong>{t('guaranteed_income')}</strong><br />
          {t('income_desc')}
        </p>

        <p>
          {t('final_desc')}
        </p>
      </div>
      
      <Separator />
    </div>
  );
};