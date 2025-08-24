'use client';

import { useState, useEffect } from 'react';
import { Star, ExternalLink, Github } from 'lucide-react';
import { fetchGitHubProjects } from '@/lib/github';
import type { Project } from '@/lib/types';

// Mapa de cores para linguagens
const LANGUAGE_COLORS: { [key: string]: string } = {
  'JavaScript': 'bg-yellow-400',
  'TypeScript': 'bg-blue-500',
  'Python': 'bg-green-500',
  'Java': 'bg-red-500',
  'C++': 'bg-pink-500',
  'C#': 'bg-purple-500',
  'Go': 'bg-cyan-400',
  'Rust': 'bg-orange-600',
  'PHP': 'bg-indigo-500',
  'Ruby': 'bg-red-600',
  'Swift': 'bg-orange-500',
  'Kotlin': 'bg-purple-600',
  'Dart': 'bg-blue-400',
  'Shell': 'bg-gray-600',
  'HTML': 'bg-orange-400',
  'CSS': 'bg-blue-600',
  'Solidity': 'bg-gray-800',
  'Jupyter Notebook': 'bg-orange-300',
};

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        const projectData = await fetchGitHubProjects();
        setProjects(projectData);
      } catch (err) {
        setError('Erro ao carregar projetos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const getLanguageColor = (language: string): string => {
    return LANGUAGE_COLORS[language] || 'bg-gray-400';
  };

  if (loading) {
    return (
      <section id="projetos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thoughtworks font-bold text-dark mb-4">Projetos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Repositórios públicos e iniciativas do time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded mb-6"></div>
                <div className="flex justify-between items-center">
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                  <div className="h-3 bg-gray-200 rounded w-12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projetos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-thoughtworks font-bold text-dark mb-4">Projetos</h2>
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-gray-600">Visite nosso GitHub para ver todos os projetos.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da Seção */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-thoughtworks font-bold text-dark mb-4">
            Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Repositórios públicos e iniciativas do time.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group transform hover:-translate-y-1 animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header do Card */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-thoughtworks font-semibold text-dark group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-gray-400 hover:text-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded p-1"
                  aria-label={`Abrir projeto ${project.name} no GitHub`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Descrição */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                {project.description}
              </p>

              {/* Badges e Stats */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Badge da Linguagem */}
                  <span className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
                    <span className="text-sm text-gray-600 font-medium">{project.language}</span>
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center space-x-1 text-gray-500">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.stars}</span>
                </div>
              </div>

              {/* Link do Projeto */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 focus:outline-none focus:ring-4 focus:ring-primary/20 rounded-lg"
                aria-label={`Visitar projeto ${project.name}`}
              >
                <span className="sr-only">Visitar {project.name}</span>
              </a>
            </article>
          ))}
        </div>

        {/* Link para GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/AdaTuring"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-thoughtworks font-semibold rounded-lg hover:bg-dark transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary/20"
            aria-label="Ver todos os projetos no GitHub"
          >
            <Github className="mr-2 h-5 w-5" />
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
}