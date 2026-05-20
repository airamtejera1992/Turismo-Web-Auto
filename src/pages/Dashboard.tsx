import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../lib/supabase';
import { Bot, LogOut, Home, MessageSquare, TrendingUp, Settings, Plus, Bell } from 'lucide-react';
import { Session } from '@supabase/supabase-js';

export default function Dashboard() {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate('/auth');
      else setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate('/auth');
      else setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">CanaryAI</span>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-teal-50 text-teal-700 rounded-xl font-medium">
            <Home className="w-5 h-5" /> Resumen
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <MessageSquare className="w-5 h-5" /> Mensajes IA
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <TrendingUp className="w-5 h-5" /> Rendimiento
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <Settings className="w-5 h-5" /> Configuración
          </a>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-medium w-full transition-colors">
            <LogOut className="w-5 h-5" /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-900">Bienvenido de nuevo 👋</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
              {session.user.email?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Propiedades Activas</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">2</h3>
                </div>
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Home className="w-6 h-6" /></div>
              </div>
              <div className="text-sm text-green-600 font-medium flex items-center gap-1">Plan Pro activo</div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Mensajes Automatizados</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">142</h3>
                </div>
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl"><MessageSquare className="w-6 h-6" /></div>
              </div>
              <div className="text-sm text-green-600 font-medium">+12% vs mes anterior</div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Horas Ahorradas</p>
                  <h3 className="text-3xl font-bold text-gray-900 mt-1">38h</h3>
                </div>
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
              </div>
              <div className="text-sm text-gray-500">Este mes</div>
            </div>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Acciones Rápidas</h2>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-teal-500 hover:bg-teal-50 transition-all group">
                  <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"><Plus className="w-6 h-6" /></div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-gray-900">Añadir Propiedad</h4>
                    <p className="text-sm text-gray-500">Conecta un nuevo anuncio de Airbnb</p>
                  </div>
                </button>
                <button className="w-full flex items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all group">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"><Bot className="w-6 h-6" /></div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-gray-900">Entrenar IA</h4>
                    <p className="text-sm text-gray-500">Añade reglas y respuestas personalizadas</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Actividad Reciente</h2>
              <div className="space-y-6">
                {[
                  { title: 'Respuesta automática enviada', desc: 'A "Villa Sol" sobre disponibilidad de piscina', time: 'Hace 5 min', color: 'text-teal-500', bg: 'bg-teal-50' },
                  { title: 'Anuncio optimizado', desc: 'Se mejoró el SEO de "Apartamento Costa"', time: 'Hace 2 horas', color: 'text-purple-500', bg: 'bg-purple-50' },
                  { title: 'Reserva confirmada', desc: 'Nuevo huésped para Diciembre', time: 'Ayer', color: 'text-green-500', bg: 'bg-green-50' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.bg} ${item.color}`}>
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                      <span className="text-xs text-gray-400 mt-1 block">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
