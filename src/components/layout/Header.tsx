import React from 'react';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, MenuIcon, UserCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BriefcaseIcon className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Bolsa RD</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/jobs" className="text-gray-600 hover:text-gray-900">
            Empleos
          </Link>
          <Link to="/companies" className="text-gray-600 hover:text-gray-900">
            Empresas
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            Acerca de
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Iniciar Sesión</Button>
          <Button>Registrarse</Button>
          
          <button className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}