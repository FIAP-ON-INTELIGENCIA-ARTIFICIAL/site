'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { TEAM_MEMBERS, SITE_CONFIG } from '@/lib/constants';
import type { Member } from '@/lib/types';

export default function MembersGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="membros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-thoughtworks font-bold text-dark mb-4">
            Membros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os desenvolvedores e especialistas que fazem parte do time AdaTuring.
          </p>
        </div>

        {/* Grid de Membros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TEAM_MEMBERS.map((member, index) => (
            <article
              key={member.name}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="text-center mb-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.avatarUrl}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Nome */}
                <h3 className="text-xl font-thoughtworks font-bold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Função/Stack */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.role}
                </p>
              </div>

              {/* Links Sociais */}
              <div className="flex justify-center space-x-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 transform hover:scale-110"
                  aria-label={`GitHub de ${member.name}`}
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600/20 transform hover:scale-110"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA para novos membros */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-thoughtworks font-bold text-dark mb-4">
              Quer participar? Fale com a gente.
            </h3>
            <p className="text-gray-600 mb-6">
              Estamos sempre procurando novos talentos para fazer parte do time AdaTuring. 
              Entre em contato e venha contribuir com nossos projetos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${SITE_CONFIG.CONTACT_EMAIL}?subject=Interesse em participar do AdaTuring`}
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-thoughtworks font-semibold rounded-lg hover:bg-secondary transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/20"
                aria-label="Enviar email para entrar em contato"
              >
                <Mail className="mr-2 h-5 w-5" />
                Entrar em contato
              </a>
              <a
                href={SITE_CONFIG.GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-thoughtworks font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-200/50"
                aria-label="Visitar nossos projetos no GitHub"
              >
                <Github className="mr-2 h-5 w-5" />
                Ver nossos projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}