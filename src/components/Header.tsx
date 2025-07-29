import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">LeContinentHost</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.home')}</a>
            <a href="#plans" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.plans')}</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.about')}</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.contact')}</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>{t('header.phone')}</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t('header.support')}
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.home')}</a>
              <a href="#plans" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.plans')}</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.about')}</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('header.contact')}</a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                {t('header.support')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;