import { ShieldCheck, Zap, Handshake, Phone } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { icon: <ShieldCheck size={32} />, text: 'Secure Transactions' },
    { icon: <Zap size={32} />, text: 'Quick Payments' },
    { icon: <Handshake size={32} />, text: 'Trusted by 100+ companies' },
    { icon: <Phone size={32} />, text: '24/7 Support' },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <h3 className="text-2xl font-bold mb-8 text-center">Why Choose Us</h3>
      <div className="grid md:grid-cols-4 gap-6 text-center">
        {reasons.map((item, i) => (
          <div key={i} className="p-4 border rounded">
            <div className="mb-2 flex justify-center">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
