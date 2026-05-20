import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Building, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const navigate = useNavigate();

  const handleSelectPlan = () => {
    // En una app real, esto iría a Stripe. Aquí simulamos el éxito y vamos al dashboard.
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4"
          >
            Elige el plan ideal para tu negocio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500"
          >
            Escala tus reservas sin multiplicar tu trabajo. Cancela cuando quieras.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {/* Plan Básico */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Building className="w-6 h-6" /></div>
              <h3 className="text-xl font-semibold">Anfitrión</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">Perfecto para dueños de una sola propiedad.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">75€</span>
              <span className="text-gray-500">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['1 Propiedad conectada', 'Descripción que vende sola', 'Respuestas IA a mensajes (Airbnb)', 'Soporte por email'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={handleSelectPlan} className="w-full py-3 px-4 rounded-xl font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors">
              Seleccionar Plan
            </button>
          </motion.div>

          {/* Plan Pro */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Más Popular
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-500/20 text-teal-400 rounded-lg"><Zap className="w-6 h-6" /></div>
              <h3 className="text-xl font-semibold text-white">Pro</h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">Para gestores que quieren automatizarlo todo.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">150€</span>
              <span className="text-gray-400">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Hasta 3 Propiedades', 'Descripciones de alta conversión', 'Respuestas IA 24/7 (Airbnb + WhatsApp)', 'Ideas de contenido para RRSS', 'Soporte prioritario'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={handleSelectPlan} className="w-full py-3 px-4 rounded-xl font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-400 hover:to-blue-400 transition-all shadow-lg shadow-teal-500/25">
              Comenzar Prueba de 7 Días
            </button>
          </motion.div>

          {/* Plan Agencia */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Globe className="w-6 h-6" /></div>
              <h3 className="text-xl font-semibold">Agencia</h3>
            </div>
            <p className="text-gray-500 text-sm mb-6">Para grandes operadores turísticos.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">350€</span>
              <span className="text-gray-500">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Hasta 10 Propiedades', 'Todo lo del plan Pro', 'Marca Blanca (Tu logo)', 'Acceso API personalizado', 'Manager de cuenta dedicado'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={handleSelectPlan} className="w-full py-3 px-4 rounded-xl font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors">
              Contactar Ventas
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
