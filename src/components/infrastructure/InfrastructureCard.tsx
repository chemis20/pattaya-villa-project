import React, { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface InfrastructureCardProps {
  title: string;
  items: string[];
  icon: ReactNode;
  gradientFrom: string;
  colorAccent: string;
  description?: string;
}

export const InfrastructureCard: React.FC<InfrastructureCardProps> = ({
  title,
  items,
  icon,
  gradientFrom,
  colorAccent,
  description
}) => {
  const getGradientClass = (from: string) => {
    const gradients = {
      blue: "from-blue-50 to-white border-blue-100",
      green: "from-green-50 to-white border-green-100",
      purple: "from-purple-50 to-white border-purple-100",
      pink: "from-pink-50 to-white border-pink-100"
    };
    return gradients[from as keyof typeof gradients] || gradients.blue;
  };

  const getIconClass = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getCheckClass = (color: string) => {
    const colors = {
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500",
      pink: "text-pink-500"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Card className={`overflow-hidden bg-gradient-to-r ${getGradientClass(gradientFrom)} border`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full ${getIconClass(colorAccent)} flex items-center justify-center mr-3`}>
            {icon}
          </div>
          <h4 className="text-base font-medium text-gray-900">{title}</h4>
        </div>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <Check className={`h-4 w-4 mr-2 mt-0 flex-shrink-0 ${getCheckClass(colorAccent)}`} />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
