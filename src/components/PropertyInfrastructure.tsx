import React from "react";
import { InfrastructureFeatures } from "./infrastructure/InfrastructureFeatures";
import { HomeFeatures } from "./infrastructure/HomeFeatures";
import { LocationInfo } from "./infrastructure/LocationInfo";

export const PropertyInfrastructure: React.FC = () => {
  return (
    <div className="space-y-8">
      <InfrastructureFeatures title="Инфраструктура проекта MAXX PATTAYA" />
      
      <HomeFeatures />
      
      <LocationInfo />
      
      <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-lg border border-purple-100 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Преимущества инфраструктуры MAXX PATTAYA</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>Управление отелем от H World Group — крупного мирового гостиничного оператора</span>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>Профессиональное обслуживание всей территории комплекса</span>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>Закрытая охраняемая территория повышенной безопасности</span>
          </li>
          <li className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3">✦</span>
            <span>Развитие региона: новый ТЦ и игровая зона в процессе строительства</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
