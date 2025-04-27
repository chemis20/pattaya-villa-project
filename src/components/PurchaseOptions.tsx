import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const PurchaseOptions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Условия приобретения</h2>
        <div className="flex items-center bg-purple-50 text-purple-800 px-4 py-2 rounded-md">
          <span className="text-2xl font-bold">от 12 325 300 ₽</span>
        </div>
      </div>

      <Tabs defaultValue="mortgage" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mortgage">С ипотекой</TabsTrigger>
          <TabsTrigger value="cash">Без ипотеки</TabsTrigger>
        </TabsList>

        <TabsContent value="mortgage" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Покупка в ипотеку</CardTitle>
              <CardDescription>
                Выгодные условия приобретения с гарантированным доходом
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Депозит 100 000 бат</p>
                    <p className="text-sm text-gray-500">Бронирование объекта</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Оплата 50% стоимости дома (от 4 990 000 бат)</p>
                    <p className="text-sm text-gray-500">Двумя платежами: 25% в течение 14 дней после составления договора и 25% по завершению строительства</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ипотека на 10 лет под 3% годовых</p>
                    <p className="text-sm text-gray-500">Фиксированная ставка на весь срок</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Договор на 10 лет с доходностью 7% годовых</p>
                    <p className="text-sm text-gray-500">Чистый доход 3% после выплаты ипотеки</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Узнать подробнее</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="cash" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Покупка без ипотеки</CardTitle>
              <CardDescription>
                Прямое приобретение объекта недвижимости
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Депозит – 10% от общей стоимости дома</p>
                    <p className="text-sm text-gray-500">Минимум 100 000 бат</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Подписание договора в течение 7 дней</p>
                    <p className="text-sm text-gray-500">После внесения депозита</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Амортизационный фонд – 600 бат/кв.м</p>
                    <p className="text-sm text-gray-500">Единовременный платеж</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Обслуживание – 15 бат/кв.м в месяц</p>
                    <p className="text-sm text-gray-500">Оплата за 12 месяцев вперед</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Узнать подробнее</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
