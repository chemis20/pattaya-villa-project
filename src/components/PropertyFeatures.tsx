import { Card, CardContent } from "@/components/ui/card";

export const PropertyFeatures = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Общие характеристики</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Общая площадь: 115 кв.м</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>2 спальни</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>3 санузла</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Частный бассейн</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Высота потолков: 3,1 м</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Панорамные окна</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Планировка</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Первый этаж:</h4>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>Просторная прихожая с зоной отдыха</li>
                  <li>Полностью оборудованная кухня</li>
                  <li>Гостевая ванная комната с душем</li>
                  <li>Открытая терраса (возможность преобразования в доп. спальню)</li>
                  <li>Частный бассейн с шезлонгами</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Второй этаж:</h4>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>Две просторные спальни</li>
                  <li>Две ванные комнаты</li>
                  <li>Балкон с видом на бассейн</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Комплектация</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Мебель:</h4>
              <ul className="space-y-1 pl-5 list-disc text-gray-600">
                <li>Диваны и кресла</li>
                <li>Обеденный стол и стулья</li>
                <li>Кровати с матрасами</li>
                <li>Шкафы и комоды</li>
                <li>Садовая мебель</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Бытовая техника:</h4>
              <ul className="space-y-1 pl-5 list-disc text-gray-600">
                <li>Кондиционеры</li>
                <li>Холодильник</li>
                <li>Варочная панель</li>
                <li>Духовой шкаф</li>
                <li>Стиральная машина</li>
                <li>Телевизоры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Дополнительно:</h4>
              <ul className="space-y-1 pl-5 list-disc text-gray-600">
                <li>Шторы и жалюзи</li>
                <li>Освещение</li>
                <li>Декоративные элементы</li>
                <li>Кухонная утварь</li>
                <li>Бытовые принадлежности</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
