import { motion } from 'framer-motion';
import { Bot, MessageSquare, Sparkles, TrendingUp, Clock, AlertCircle, CheckCircle2, ChevronRight, Zap, RefreshCw, Smartphone, X, CalendarCheck, CreditCard, Camera, Settings, Link2, Search, FileText, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-teal-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center shadow-sm">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">CanaryAI</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/auth" className="text-sm font-medium text-gray-600 hover:text-gray-900 hidden sm:block">
              Acceso Miembros
            </Link>
            <Link 
              to="/auth?mode=register"
              className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-full transition-colors"
            >
              Registro
            </Link>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.jpg" 
            alt="Villa de Lujo en Canarias" 
            className="w-full h-full object-cover opacity-[0.15] mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#FAFAFA]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-8 border border-teal-100">
              <Sparkles className="w-4 h-4" />
              <span>Automatización con IA para Turismo en Canarias</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              Convierte tu alojamiento en una <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                máquina de reservas automática
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Mejores mensajes. Mejores anuncios. Más reservas. Menos trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/auth?mode=register"
                className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-medium text-lg transition-all shadow-lg shadow-gray-900/20 flex items-center justify-center gap-2 group"
              >
                Empezar Ahora
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Por qué la mayoría de alojamientos pierden dinero</h2>
              <p className="text-gray-500 text-lg">La gestión manual te está costando reservas y tranquilidad.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Respuestas lentas", icon: Clock, desc: "Cada minuto que tardas en responder a una consulta, la probabilidad de reserva cae un 50%." },
              { title: "Descripciones pobres", icon: AlertCircle, desc: "Textos genéricos en Airbnb que no venden la experiencia ni destacan tu valor único." },
              { title: "Pérdida de reservas", icon: TrendingUp, desc: "Las malas experiencias y la comunicación desorganizada generan malas reseñas y menos reservas." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">El Sistema de Automatización con IA</h2>
              <p className="text-xl text-gray-500 mb-8 font-light leading-relaxed">
                Implementamos un sistema que automatiza la comunicación, mejora tus anuncios y genera contenido de marketing automáticamente.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Mensajes Inteligentes", icon: MessageSquare },
                  { title: "Optimización de Anuncios", icon: Sparkles },
                  { title: "Generación de Contenido", icon: RefreshCw },
                  { title: "Automatización de Marketing", icon: Zap }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-500 rounded-[2.5rem] transform rotate-3 opacity-10 blur-xl"></div>
                <div className="relative bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <Bot className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Asistente de IA</h4>
                      <p className="text-sm text-green-500 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> En línea 24/7</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none w-[85%]">
                      <p className="text-sm text-gray-600">¡Hola! ¿La piscina está climatizada en diciembre?</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-2xl rounded-tr-none w-[85%] ml-auto">
                      <p className="text-sm text-teal-800">¡Hola! Sí, nuestra piscina está climatizada a unos agradables 26°C durante todo el año. Es perfecta para nadar en diciembre mientras disfrutas de las vistas al mar. ¿Te gustaría continuar con la reserva?</p>
                      <p className="text-xs text-teal-600 mt-2 opacity-70">Respondido al instante por IA</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. NEW FEATURES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Todo lo que necesitas en un solo lugar</h2>
              <p className="text-gray-500 text-lg">El ecosistema definitivo para gestionar tus reservas turísticas.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Motor de reservas en tiempo real",
                desc: "Calendario sincronizado que evita dobles reservas y precios dinámicos por temporada. Permite pagos parciales o totales.",
                icon: CalendarCheck,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Pasarela de pagos segura",
                desc: "Integración total con Stripe, Redsys o Bizum. Pagos con tarjeta, transferencias y alta seguridad garantizada.",
                icon: CreditCard,
                color: "bg-emerald-50 text-emerald-600"
              },
              {
                title: "Fichas súper completas",
                desc: "Fotos profesionales, lista de servicios detallada (wifi, AC, mascotas) y sistema de opiniones verificadas.",
                icon: Camera,
                color: "bg-purple-50 text-purple-600"
              },
              {
                title: "Mensajería automatizada",
                desc: "Emails, SMS y WhatsApp para confirmaciones, recordatorios, check-in sin contacto y petición de reseñas.",
                icon: Smartphone,
                color: "bg-pink-50 text-pink-600"
              },
              {
                title: "Panel del huésped",
                desc: "Tus clientes podrán ver su reserva, modificar fechas, solicitar limpieza extra o descargar sus facturas.",
                icon: Settings,
                color: "bg-orange-50 text-orange-600"
              },
              {
                title: "Sincronización de calendarios",
                desc: "Conexión directa con Airbnb, Booking, VRBO. Centraliza todo y olvídate de los conflictos de fechas.",
                icon: Link2,
                color: "bg-indigo-50 text-indigo-600"
              },
              {
                title: "Blog y SEO local",
                desc: "Artículos optimizados sobre rutas y eventos para que aparezcas primero en Google al buscar alojamiento.",
                icon: Search,
                color: "bg-yellow-50 text-yellow-600"
              },
              {
                title: "Políticas y RGPD 100% legales",
                desc: "Gestión transparente de cancelaciones, precios finales y tratamiento de datos con consentimiento explícito.",
                icon: FileText,
                color: "bg-teal-50 text-teal-600"
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow bg-white h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER SECTION */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">La Transformación</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6">
                  Antes
                </div>
                <ul className="space-y-4">
                  {['Textos básicos en Airbnb con errores', 'Respuestas lentas (horas o días)', 'Sin marketing ni reservas directas', 'Estrés y exceso de trabajo'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-teal-900/40 to-blue-900/40 border border-teal-500/20 relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 blur-2xl rounded-full"></div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-6">
                  Después de CanaryAI
                </div>
                <ul className="space-y-4">
                  {['Anuncios premium que cuentan una historia', 'Respuestas instantáneas 24/7 con IA', 'Sistema de contenido profesional', 'Operaciones comerciales automatizadas'].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. EXAMPLES SECTION */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Mira la IA en acción</h2>
              <p className="text-gray-500 text-lg">Ejemplos reales de lo que nuestro sistema genera para ti.</p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <div className="text-sm font-medium text-teal-600 mb-4 tracking-wide uppercase flex items-center gap-2">
                  <Smartphone className="w-4 h-4" /> Ejemplo 1
                </div>
                <h3 className="text-xl font-semibold mb-4">Bienvenida Automatizada</h3>
                <div className="bg-gray-50 p-5 rounded-2xl text-sm text-gray-700 font-mono leading-relaxed border border-gray-100">
                  "¡Bienvenido a Villa Sol! 🌴 Tu código de entrada es 4921. La red WiFi es 'VillaSol_5G' (pass: oceanview24). Soy tu conserje virtual—¡escríbeme cuando quieras si necesitas más toallas o recomendaciones de restaurantes locales!"
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <div className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Ejemplo 2
                </div>
                <h3 className="text-xl font-semibold mb-4">Optimización de Anuncios</h3>
                <div className="bg-gray-50 p-5 rounded-2xl text-sm text-gray-700 font-mono leading-relaxed border border-gray-100">
                  "Despierta con vistas panorámicas del Atlántico desde tu piscina infinita privada. Este santuario moderno en Costa Adeje combina el lujo minimalista con la cálida hospitalidad canaria. Perfecto para teletrabajadores (fibra 500Mbps) y parejas que buscan privacidad."
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full">
                <div className="text-sm font-medium text-purple-600 mb-4 tracking-wide uppercase flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" /> Ejemplo 3
                </div>
                <h3 className="text-xl font-semibold mb-4">Guía Local para Huéspedes</h3>
                <div className="bg-gray-50 p-5 rounded-2xl text-sm text-gray-700 font-mono leading-relaxed border border-gray-100">
                  <span className="font-semibold block mb-2">Mensaje día 2: "Los secretos del sur"</span>
                  ¡Hola! Ya que el día está soleado, te recomiendo visitar la Playa de Diego Hernández (a 15 min). Es una cala secreta sin turistas. Para comer, 'El Cordero' tiene la mejor carne a la brasa rodeado de plataneras. ¿Te reservo mesa? 🍷
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6.5 TESTIMONIALS SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">Lo que dicen nuestros clientes</h2>
              <p className="text-gray-500 text-lg">Anfitriones que ya han automatizado su negocio en Canarias.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendoza",
                role: "Propietario de 3 Villas en Adeje",
                text: "Antes pasaba 3 horas al día respondiendo mensajes de Airbnb. Ahora la IA lo hace al instante, y los huéspedes creen que soy yo. Mis reservas directas han subido un 40%.",
                rating: 5
              },
              {
                name: "Laura y Thomas",
                role: "Gestores de Apartamentos (Corralejo)",
                text: "El calendario sincronizado y los mensajes automáticos de WhatsApp nos han salvado la vida. Ya no tenemos dobles reservas y las reseñas de 5 estrellas no paran de llegar.",
                rating: 5
              },
              {
                name: "Elena Suárez",
                role: "Anfitriona Superhost (Maspalomas)",
                text: "No sabía cómo destacar mi piso frente a tanta competencia. La IA reescribió mi anuncio y ahora destaco como alojamiento premium. Vale cada euro que cuesta.",
                rating: 5
              }
            ].map((review, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 relative h-full">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-teal-500/20" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-50/50"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Empieza a automatizar tu negocio turístico hoy
            </h2>
            <p className="text-xl text-gray-500 mb-10">
              Crea tu cuenta en segundos y elige el plan que mejor se adapte a ti.
            </p>
            <Link 
              to="/auth?mode=register"
              className="inline-block px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-full font-medium text-lg transition-all shadow-xl shadow-gray-900/20 hover:scale-105"
            >
              Crear Cuenta Gratis
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100 text-center text-gray-500 text-sm">
        <p className="mb-2">© {new Date().getFullYear()} CanaryAI Automation Systems. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 text-xs">
          <Link to="/privacidad" className="hover:text-teal-600 transition-colors">Política de Privacidad</Link>
          <Link to="/auth" className="hover:text-teal-600 transition-colors">Acceso Miembros</Link>
        </div>
      </footer>
    </div>
  );
}
