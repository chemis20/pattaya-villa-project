
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/translations";

interface ContactFormProps {
  name: string;
  setName: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  city: string;
  setCity: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  formId?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  name,
  setName,
  phone,
  setPhone,
  city,
  setCity,
  onSubmit,
  formId = ""
}) => {
  const { language } = useLanguage();
  const { t } = useTranslation(language);
  
  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg mt-2">
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <Label htmlFor={`name-form${formId}`}>{t('your_name')}</Label>
          <Input 
            id={`name-form${formId}`} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="John Smith" 
            required 
          />
        </div>
        <div>
          <Label htmlFor={`phone-form${formId}`}>{t('phone_number')}</Label>
          <Input 
            id={`phone-form${formId}`} 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="+1 (XXX) XXX-XXXX" 
            required 
          />
        </div>
        <div>
          <Label htmlFor={`city-form${formId}`}>{t('your_city')}</Label>
          <Input 
            id={`city-form${formId}`} 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder="New York" 
            required 
          />
        </div>
        <Button type="submit" className="w-full">{t('send')}</Button>
      </form>
    </div>
  );
};
