import React from "react";

interface LocationFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const LocationFeature: React.FC<LocationFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <li className="flex items-start">
      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
        {icon}
      </span>
      <div>
        <span className="font-medium text-gray-900">{title}</span>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
};
