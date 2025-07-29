import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">LeContinentHost</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.servicesList.shared')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.servicesList.vps')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.servicesList.dedicated')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.servicesList.domains')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.servicesList.ssl')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">{t('footer.servicesList.backup')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+237 6XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">support@lecontinent-host.cm</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>{t('footer.location.cities')}</p>
                  <p className="text-sm">{t('footer.location.country')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">{t('footer.support')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;