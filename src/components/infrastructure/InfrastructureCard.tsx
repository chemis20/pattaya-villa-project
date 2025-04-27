import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface InfrastructureItem {
  title: string;
  items: string[];
}

interface InfrastructureCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  gradientFrom: string;
  colorAccent: string;
}

export const InfrastructureCard: React.FC<InfrastructureCardProps> = ({
  title,
  items,
  icon,
  gradientFrom,
  colorAccent,
}) => {
  return (
    <Card className={`bg-gradient-to-br from-${gradientFrom}-50 to-white`}>
      <CardContent className="p-6">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-${colorAccent}-100 text-${colorAccent}-600 mb-4`}>
          {icon}
        </div>
        <h4 className="text-lg font-medium text-gray-900 mb-2">{title}</h4>
        <ul className="space-y-2 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <svg 
                className={`h-4 w-4 text-${colorAccent}-600 mr-2`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
