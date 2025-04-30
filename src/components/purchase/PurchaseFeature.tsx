import React from "react";
import { CheckCircle } from "lucide-react";

interface PurchaseFeatureProps {
  title: string;
  description: string;
}

export const PurchaseFeature: React.FC<PurchaseFeatureProps> = ({
  title,
  description
}) => {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};
