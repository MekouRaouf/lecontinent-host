import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: "500+", label: t('about.stats.clients') },
    { icon: <Award className="h-8 w-8" />, number: "99.9%", label: t('about.stats.uptime') },
    { icon: <Clock className="h-8 w-8" />, number: "24/7", label: t('about.stats.support') },
    { icon: <MapPin className="h-8 w-8" />, number: "3", label: t('about.stats.cities') }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.title')}
              <span className="block text-blue-600">{t('about.subtitle')}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('about.description2')}
            </p>
            
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="text-gray-700 font-medium">
                {t('about.location')}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            {t('about.whyChoose')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-2">{t('about.reasons.infrastructure.title')}</h4>
              <p className="text-blue-100">{t('about.reasons.infrastructure.description')}</p>
            </div>
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-2">{t('about.reasons.support.title')}</h4>
              <p className="text-blue-100">{t('about.reasons.support.description')}</p>
            </div>
            <div className="text-white">
              <h4 className="text-xl font-semibold mb-2">{t('about.reasons.pricing.title')}</h4>
              <p className="text-blue-100">{t('about.reasons.pricing.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;