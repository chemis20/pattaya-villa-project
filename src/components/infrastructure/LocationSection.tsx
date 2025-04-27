import React from "react";
import { LocationFeature } from "./LocationFeature";

interface LocationInfo {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface LocationSectionProps {
  title: string;
  leftFeatures: LocationInfo[];
  rightFeatures: LocationInfo[];
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  title,
  leftFeatures,
  rightFeatures,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ul className="space-y-3">
            {leftFeatures.map((feature, index) => (
              <LocationFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-3">
            {rightFeatures.map((feature, index) => (
              <LocationFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
