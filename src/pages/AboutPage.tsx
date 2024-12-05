import React from 'react';
import { Users, Building2, Globe2, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Sobre Bolsa RD
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Conectando el talento dominicano con las mejores oportunidades laborales desde 2024
        </p>
      </div>

      {/* Stats Section */}
      <div className="mt-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Users className="mx-auto h-8 w-8 text-blue-600" />
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-600">Usuarios Registrados</div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Building2 className="mx-auto h-8 w-8 text-blue-600" />
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Empresas Activas</div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Globe2 className="mx-auto h-8 w-8 text-blue-600" />
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900">1,000+</div>
              <div className="text-sm text-gray-600">Empleos Publicados</div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <Mail className="mx-auto h-8 w-8 text-blue-600" />
            <div className="mt-4">
              <div className="text-2xl font-bold text-gray-900">5,000+</div>
              <div className="text-sm text-gray-600">Aplicaciones Mensuales</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900">Nuestra Misión</h2>
          <p className="mt-4 text-gray-600">
            En Bolsa RD, nos dedicamos a transformar el mercado laboral dominicano facilitando 
            la conexión entre talento y oportunidades. Nuestra plataforma está diseñada para 
            hacer el proceso de búsqueda de empleo y reclutamiento más eficiente y efectivo.
          </p>
          <p className="mt-4 text-gray-600">
            Trabajamos incansablemente para:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600">
            <li>Facilitar el acceso a oportunidades laborales de calidad</li>
            <li>Promover la transparencia en el mercado laboral</li>
            <li>Impulsar el desarrollo profesional en República Dominicana</li>
            <li>Apoyar el crecimiento económico a través del empleo</li>
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Nuestro Equipo
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: 'Darwin Garcia',
              position: 'CEO & Fundador',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
            },

          ].map((member) => (
            <div key={member.name} className="rounded-lg bg-white p-6 text-center shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-16">
        <div className="rounded-lg bg-blue-600 p-8 text-center text-white">
          <h2 className="text-2xl font-bold">¿Tienes alguna pregunta?</h2>
          <p className="mt-4">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="mt-6"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </div>
  );
}