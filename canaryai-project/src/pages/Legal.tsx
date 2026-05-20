import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100">
        <Link to="/" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mb-8">
          <ChevronLeft className="w-4 h-4" />
          Volver a inicio
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Políticas de Privacidad y Aviso Legal</h1>
        
        <div className="prose prose-teal max-w-none text-gray-600 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Identidad del titular</h2>
            <p>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que esta web pertenece a CanaryAI Automation Systems, operando en las Islas Canarias, España.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Protección de Datos (RGPD)</h2>
            <p>
              De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), te informamos que los datos personales recogidos en el formulario de contacto (nombre, email, tipo de propiedad) serán tratados con la única finalidad de atender tu solicitud de demostración o información sobre nuestros servicios.
            </p>
            <p className="mt-2">
              Los datos no serán cedidos a terceros salvo obligación legal. Tienes derecho a acceder, rectificar y suprimir tus datos en cualquier momento escribiendo a admin@canaryai.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Uso de Cookies</h2>
            <p>
              Esta web utiliza cookies técnicas estrictamente necesarias para su correcto funcionamiento (como mantener la sesión del administrador). No utilizamos cookies de rastreo publicitario de terceros sin tu consentimiento previo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
