
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

interface LanguageOption {
  value: Language;
  label: string;
  flag: string;
}

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: LanguageOption[] = [
    { value: 'ru', label: 'Русский', flag: '🇷🇺' },
    { value: 'en', label: 'English', flag: '🇬🇧' },
    { value: 'zh', label: '中文', flag: '🇨🇳' }
  ];

  const currentLanguage = languages.find((lang) => lang.value === language) || languages[0];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="flex items-center gap-2 text-white bg-opacity-20 hover:bg-opacity-30 bg-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{currentLanguage.flag}</span>
          <span className="hidden md:inline">{currentLanguage.label}</span>
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className={`flex items-center gap-2 cursor-pointer ${language === option.value ? 'bg-accent' : ''}`}
            onClick={() => {
              setLanguage(option.value);
              setIsOpen(false);
            }}
          >
            <span>{option.flag}</span>
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
