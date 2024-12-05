import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <BriefcaseIcon className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Bolsa RD</span>
            </Link>
            <p className="mt-4 text-sm">
              La plataforma líder de empleos en la República Dominicana
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empleos
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/jobs/search" className="hover:text-white">
                  Buscar Empleos
                </Link>
              </li>
              <li>
                <Link to="/jobs/post" className="hover:text-white">
                  Publicar Empleo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="hover:text-white">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Síguenos
            </h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Bolsa RD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}