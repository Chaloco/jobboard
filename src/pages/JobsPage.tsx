import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function JobsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Empleos Disponibles</h1>
          <p className="mt-2 text-gray-600">
            Encuentra las mejores oportunidades laborales en República Dominicana
          </p>
        </div>
        <Button className="mt-4 md:mt-0">
          Publicar Empleo
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="flex items-center text-lg font-semibold text-gray-900">
            <Filter className="mr-2 h-5 w-5" />
            Filtros
          </h2>
          
          <div className="mt-6 space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Ubicación</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                <option>Santo Domingo</option>
                <option>Santiago</option>
                <option>La Romana</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Tipo de Empleo</label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">Tiempo Completo</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">Medio Tiempo</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">Remoto</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Experiencia</label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">Entry Level</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">Mid Level</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">Senior</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="flex rounded-lg bg-white shadow-md">
              <input
                type="text"
                placeholder="Buscar empleos..."
                className="w-full rounded-l-lg px-4 py-3 focus:outline-none"
              />
              <Button className="rounded-l-none">
                <Search className="mr-2 h-5 w-5" />
                Buscar
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((job) => (
              <div key={job} className="rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Desarrollador Full Stack
                    </h3>
                    <p className="mt-1 text-gray-600">Empresa Tech</p>
                    <div className="mt-2">
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                        Tiempo Completo
                      </span>
                      <span className="ml-2 text-sm text-gray-500">Santo Domingo</span>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      Buscamos un desarrollador Full Stack con experiencia en React y Node.js...
                    </p>
                  </div>
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Company logo"
                    className="h-12 w-12 rounded-full"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Publicado hace 2 días
                  </div>
                  <Button variant="outline">Ver Detalles</Button>
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
      </div>
    </div>
  );
}