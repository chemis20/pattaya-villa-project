import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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
  return (
    <div className="w-full p-4 bg-gray-50 rounded-lg mt-2">
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <Label htmlFor={`name-form${formId}`}>Ваше имя</Label>
          <Input 
            id={`name-form${formId}`} 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Иван Иванов" 
            required 
          />
        </div>
        <div>
          <Label htmlFor={`phone-form${formId}`}>Номер телефона</Label>
          <Input 
            id={`phone-form${formId}`} 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="+7 (XXX) XXX-XX-XX" 
            required 
          />
        </div>
        <div>
          <Label htmlFor={`city-form${formId}`}>Ваш город</Label>
          <Input 
            id={`city-form${formId}`} 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Москва" 
            required 
          />
        </div>
        <Button type="submit" className="w-full">Отправить</Button>
      </form>
    </div>
  );
};
