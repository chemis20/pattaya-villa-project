import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PurchaseOptions = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Условия покупки</h3>
      
      <Tabs defaultValue="mortgage" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mortgage">С ипотекой</TabsTrigger>
          <TabsTrigger value="full">Полная оплата</TabsTrigger>
        </TabsList>

        <TabsContent value="mortgage" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-3xl font-bold text-purple-600">от 4,990,000 ฿</span>
                  <span className="text-gray-500">с ипотекой на 10 лет</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">Основные условия</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Депозит: 100.000 ฿</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Ипотека: 10 лет под 3% годовых (фиксированная ставка)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Доходность: 7% годовых в течение 10 лет на сдачу дома в аренду</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Чистый доход: 3% годовых с учётом выплаты ипотеки</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Порядок оплаты</h4>
                    <ol className="space-y-4 pl-6 list-decimal text-gray-700">
                      <li>
                        <span className="font-medium text-gray-900">Депозит:</span> 100.000 ฿ при бронировании
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Первый платеж (25%):</span> в течение 14 дней после составления договора
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Второй платеж (25%):</span> по завершению строительства виллы
                      </li>
                      <li>
                        <span className="font-medium text-gray-900">Оставшиеся 50%:</span> с помощью ипотеки на 10 лет под 3% годовых
                      </li>
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">После выплаты ипотеки</h4>
                    <p className="text-gray-700 mb-4">По завершению ипотеки вы можете:</p>
                    <ul className="space-y-2 pl-6 list-disc text-gray-700">
                      <li>Продлить договор с отелем еще на 10 лет</li>
                      <li>Перевести дом в собственность на тайскую компанию (Freehold)</li>
                    </ul>
                    <p className="text-gray-700 mt-4">При переводе дома в собственность отель сделает капитальный ремонт и вернет его в первоначальном виде.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="full" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <span className="text-3xl font-bold text-purple-600">9,980,000 ฿</span>
                  <span className="text-gray-500">полная стоимость</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">Основные условия</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Депозит: 10% от стоимости (минимум 100.000 ฿)</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Подписание договора: в течение 7 дней после внесения депозита</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Возможность получения 7% годовых на сдачу дома в аренду на 10 лет</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Дополнительные платежи</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex justify-between items-center">
                        <span>Амортизационный фонд</span>
                        <span className="font-medium">600 ฿/кв.м (единовременно)</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Обслуживание жилого помещения</span>
                        <span className="font-medium">15 ฿/кв.м (за 12 месяцев вперед)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Преимущества полной оплаты</h4>
                    <ul className="space-y-2 text-gray-700 pl-6 list-disc">
                      <li>Отсутствие процентных платежей</li>
                      <li>Полное право собственности после завершения строительства</li>
                      <li>Возможность сразу получать максимальный доход от аренды</li>
                      <li>Отсутствие риска изменения процентных ставок</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="bg-purple-900 p-6 rounded-lg text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="md:flex-1">
            <h3 className="text-xl font-semibold mb-2">Инвестируйте в лучшую недвижимость Паттайи</h3>
            <p className="text-purple-100">
              MAXX PATTAYA – проект от H World Group, входящей в ТОП-3 мировых гостиничных операторов.
              Гарантированный доход 7% в течение 10 лет и растущая стоимость актива в развивающемся районе.
            </p>
          </div>
          <div className="shrink-0">
            <button className="bg-white text-purple-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Получить презентацию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
