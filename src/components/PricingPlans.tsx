import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Star, Cpu, HardDrive, Wifi } from 'lucide-react';

const PricingPlans = () => {
  const { t } = useTranslation();
  
  const plans = [
    {
      name: t('pricing.plans.starter.name'),
      price: "15,000",
      period: t('pricing.month'),
      description: t('pricing.plans.starter.description'),
      features: t('pricing.plans.starter.features', { returnObjects: true }) as string[],
      icon: <Wifi className="h-8 w-8" />,
      popular: false
    },
    {
      name: t('pricing.plans.business.name'),
      price: "35,000",
      period: t('pricing.month'),
      description: t('pricing.plans.business.description'),
      features: t('pricing.plans.business.features', { returnObjects: true }) as string[],
      icon: <HardDrive className="h-8 w-8" />,
      popular: true
    },
    {
      name: t('pricing.plans.professional.name'),
      price: "65,000",
      period: t('pricing.month'),
      description: t('pricing.plans.professional.description'),
      features: t('pricing.plans.professional.features', { returnObjects: true }) as string[],
      icon: <Cpu className="h-8 w-8" />,
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular ? 'ring-4 ring-orange-500 ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 font-semibold">
                  <Star className="inline h-4 w-4 mr-1" />
                  {t('pricing.popular')}
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="flex items-center justify-center mb-4">
                  <div className="text-blue-600">
                    {plan.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">FCFA {plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all ${
                  plan.popular 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}>
                  {t('pricing.choosePlan')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            {t('pricing.customQuote')}
          </p>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all">
            {t('pricing.requestQuote')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;