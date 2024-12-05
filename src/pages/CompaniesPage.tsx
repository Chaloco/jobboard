import React from 'react';
import { Search, MapPin, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function CompaniesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Empresas</h1>
        <p className="mt-2 text-gray-600">
          Descubre las mejores empresas que están contratando en República Dominicana
        </p>
      </div>

      <div className="mt-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex rounded-lg bg-white shadow-md">
            <input
              type="text"
              placeholder="Buscar empresas..."
              className="w-full rounded-l-lg px-4 py-3 focus:outline-none"
            />
            <Button className="rounded-l-none">
              <Search className="mr-2 h-5 w-5" />
              Buscar
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((company) => (
          <div key={company} className="rounded-lg bg-white p-6 shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Company logo"
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Empresa Tech
                </h3>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <MapPin className="mr-1 h-4 w-4" />
                  Santo Domingo
                </div>
                <div className="mt-1 flex items-center text-sm text-gray-500">
                  <Users className="mr-1 h-4 w-4" />
                  50-200 empleados
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Empresa líder en desarrollo de software y soluciones tecnológicas...
            </p>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                  Tecnología
                </span>
                <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                  Desarrollo Web
                </span>
                <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800">
                  Innovación
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-gray-500">
                5 empleos activos
              </span>
              <Button variant="outline">Ver Perfil</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow-sm">
          <Button variant="outline" className="rounded-r-none">
            Anterior
          </Button>
          <Button variant="outline" className="rounded-none border-l-0 border-r-0">
            1
          </Button>
          <Button variant="outline" className="rounded-none border-r-0">
            2
          </Button>
          <Button variant="outline" className="rounded-none border-r-0">
            3
          </Button>
          <Button variant="outline" className="rounded-l-none">
            Siguiente
          </Button>
        </nav>
      </div>
    </div>
  );
}