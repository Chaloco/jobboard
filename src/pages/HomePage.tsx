import React from 'react';
import { Search, Building2, Users, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Encuentra tu próximo empleo en República Dominicana
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
              Miles de oportunidades laborales te esperan. Conectamos el talento dominicano con las mejores empresas.
            </p>
            
            <div className="mt-10">
              <div className="relative mx-auto max-w-2xl">
                <div className="flex rounded-lg bg-white shadow-lg">
                  <input
                    type="text"
                    placeholder="¿Qué empleo buscas?"
                    className="w-full rounded-l-lg px-4 py-3 text-gray-900 focus:outline-none"
                  />
                  <Button className="rounded-l-none px-8">
                    <Search className="mr-2 h-5 w-5" />
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Búsqueda Inteligente</h3>
              <p className="mt-4 text-gray-600">
                Encuentra el empleo perfecto con nuestro sistema de búsqueda avanzado
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Empresas Destacadas</h3>
              <p className="mt-4 text-gray-600">
                Conecta con las mejores empresas de República Dominicana
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Bell className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">Alertas Personalizadas</h3>
              <p className="mt-4 text-gray-600">
                Recibe notificaciones de empleos que coincidan con tu perfil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Empleos Destacados
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Las últimas oportunidades laborales de las mejores empresas
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Job cards will be dynamically rendered here */}
            {[1, 2, 3].map((job) => (
              <div key={job} className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Desarrollador Frontend
                    </h3>
                    <p className="mt-2 text-gray-600">Empresa Tecnológica</p>
                  </div>
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Company logo"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    Tiempo Completo
                  </span>
                  <span className="ml-2 text-sm text-gray-500">Santo Domingo</span>
                </div>
                <Button variant="outline" className="mt-4 w-full">
                  Ver Detalles
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg">Ver Todos los Empleos</Button>
          </div>
        </div>
      </section>
    </div>
  );
}