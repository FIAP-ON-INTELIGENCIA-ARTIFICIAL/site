'use client';

import { Github, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-thoughtworks font-bold">{SITE_CONFIG.SITE_TITLE}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Time de desenvolvimento de Alunos da FIAP. 
              Transformando ideias em soluções tecnológicas inovadoras.
            </p>
          </div>

          {/* Links Úteis */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-thoughtworks font-semibold mb-4">Links Úteis</h4>
            <nav className="space-y-3">
              <a
                href={SITE_CONFIG.GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline"
                aria-label="GitHub do AdaTuring"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub do Time
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a
                href={SITE_CONFIG.FIAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline"
                aria-label="FIAP - Faculdade de Informática e Administração Paulista"
              >
                FIAP
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.CONTACT_EMAIL}`}
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline"
                aria-label="Enviar email para contato"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Seções do Site */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-thoughtworks font-semibold mb-4">Navegação</h4>
            <nav className="space-y-3">
              <button
                onClick={() => {
                  document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline text-left"
              >
                Projetos
              </button>
              <button
                onClick={() => {
                  document.getElementById('membros')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline text-left"
              >
                Membros
              </button>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus:underline text-left"
              >
                Início
              </button>
            </nav>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} AdaTuring – FIAP. Todos os direitos reservados.
            </p>

            {/* Inspiração */}
            <p className="text-gray-400 text-sm text-center sm:text-right">
              Inspirado por <span className="text-primary font-semibold">Ada Lovelace</span> e <span className="text-accent font-semibold">Alan Turing</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}