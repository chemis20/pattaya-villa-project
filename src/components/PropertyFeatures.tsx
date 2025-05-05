import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, BedDouble, Bath, Home, Square, ArrowRight } from "lucide-react";

export const PropertyFeatures: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Характеристики виллы</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Square className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Площадь</p>
                <p className="font-medium">115 кв.м.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Спальни</p>
                <p className="font-medium">2</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Санузлы</p>
                <p className="font-medium">3</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Этажей</p>
                <p className="font-medium">2</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Особенности планировки</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Высокие потолки 3,1 м</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Панорамные окна</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Частный бассейн 15 кв.м</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Открытая терраса</span>
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Полная меблировка и техника</span>
              </li>
            </ul>
          </div>
        </div>
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Уникальное предложение</h3>
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm w-full">
                <p className="text-sm text-gray-500 mb-1">Стоимость виллы</p>
                <p className="text-2xl sm:text-3xl font-bold text-purple-800 whitespace-nowrap">от 12 907 600 ₽</p>
              </div>
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Тип собственности:</span>
                  <span className="font-medium">Freehold (свободное владение)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Инвестиционный доход:</span>
                  <span className="font-medium text-green-600">7% годовых гарантированно</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Срок гарантии:</span>
                  <span className="font-medium">10 лет</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Готовность:</span>
                  <span className="font-medium">Под ключ с мебелью и техникой</span>
                </div>
              </div>
              <Button className="w-full group">
                Забронировать просмотр
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-xs text-gray-500">
                * При покупке доступны различные способы оплаты, включая беспроцентную рассрочку и ипотеку под 3% годовых
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
