'use client';

import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '@/lib/constants';
import { Github, Users, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">          
          <img
            src="./logo.png"
            alt="Logo AdaTuring"
            className="w-66 h-96 object-contain"
          />          
        </div>

        {/* Descrição */}
        <div className="mb-12 px-2 sm:px-4">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify text-pretty">
            {SITE_CONFIG.SITE_DESCRIPTION}
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-2">
          <a
            href={SITE_CONFIG.GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-thoughtworks font-semibold rounded-lg hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary/20"
            aria-label="Visitar repositórios do AdaTuring no GitHub"
          >
            <Github className="mr-3 h-5 w-5" />
            Ver projetos no GitHub
          </a>
          <button
            onClick={() => scrollToSection('membros')}
            className="inline-flex items-center px-8 py-4 bg-accent text-white font-thoughtworks font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/20"
            aria-label="Navegar para a seção de membros do time"
          >
            <Users className="mr-3 h-5 w-5" />
            Junte-se ao time
          </button>
        </div>
      </div>
    </header>
  );
}
