
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PurchaseFeature } from "./PurchaseFeature";
import { ContactForm } from "./ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

interface PurchaseFeatureData {
  title: string;
  description: string;
}

interface PurchaseCardProps {
  title: string;
  description: string;
  features: PurchaseFeatureData[];
  showForm: boolean;
  toggleForm: () => void;
  formProps: {
    name: string;
    setName: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    city: string;
    setCity: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
  };
  formId?: string;
}

export const PurchaseCard: React.FC<PurchaseCardProps> = ({
  title,
  description,
  features,
  showForm,
  toggleForm,
  formProps,
  formId = ""
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <PurchaseFeature 
              key={index} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button className="w-full mb-3" onClick={toggleForm}>
          {t('learn_more')}
        </Button>
        
        {showForm && (
          <ContactForm
            name={formProps.name}
            setName={formProps.setName}
            phone={formProps.phone}
            setPhone={formProps.setPhone}
            city={formProps.city}
            setCity={formProps.setCity}
            onSubmit={formProps.onSubmit}
            formId={formId}
          />
        )}
      </CardFooter>
    </Card>
  );
};
