import { FaCcVisa, FaCcMastercard, FaCcAmex, FaApplePay, FaGooglePay, FaCreditCard } from 'react-icons/fa';

export default function PaymentMethods() {
  const paymentMethods: Array<{ icon: any; name: string; isText?: boolean }> = [
    { icon: FaCcVisa, name: 'Visa' },
    { icon: FaCcMastercard, name: 'Mastercard' },
    { icon: FaCcAmex, name: 'American Express' },
    { icon: FaCreditCard, name: 'Interac', isText: true },
    { icon: FaApplePay, name: 'Apple Pay' },
    { icon: FaGooglePay, name: 'Google Pay' },
  ];

  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-light text-luxury-black mb-2">
            Multiple Payment Options
          </h3>
          <p className="text-sm text-gray-600 font-light">
            We accept all major payment methods for your convenience
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group flex items-center justify-center p-4 border border-gray-200 hover:border-gold-500 transition-all duration-300 w-24 h-16"
                title={method.name}
              >
                {method.isText ? (
                  <div className="text-center">
                    <Icon className="w-8 h-8 text-gray-400 group-hover:text-gray-900 transition-colors mx-auto mb-1" />
                    <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900">Interac</span>
                  </div>
                ) : (
                  <Icon className="w-12 h-12 text-gray-400 group-hover:text-gray-900 transition-colors" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 font-light">
            Corporate billing & invoice options available
          </p>
        </div>
      </div>
    </section>
  );
}

