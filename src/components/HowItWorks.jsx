import { FileIcon, DollarSignIcon, CheckCircleIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    { text: 'Upload License', icon: <FileIcon className="w-12 h-12 text-blue-500" /> },
    { text: 'Get Valuation', icon: <DollarSignIcon className="w-12 h-12 text-blue-500" /> },
    { text: 'Get Paid', icon: <CheckCircleIcon className="w-12 h-12 text-blue-500" /> },
  ];

  return (
    <section className="py-16 px-6 text-center">
      <h3 className="text-2xl font-bold mb-8">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <p className="text-xl font-medium">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
