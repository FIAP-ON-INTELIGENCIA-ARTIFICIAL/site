import { SITE_CONFIG, FALLBACK_PROJECTS } from './constants';
import type { Project, GitHubRepo } from './types';

export async function fetchGitHubProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${SITE_CONFIG.GITHUB_OWNER}/repos?per_page=12&sort=stars&direction=desc`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        // Adicionar cache para evitar rate limiting
        next: { revalidate: 3600 }, // Cache por 1 hora
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    return repos
      .filter(repo => !repo.name.startsWith('.') && repo.description) // Filtrar repos sem descrição
      .slice(0, 12) // Limitar a 12 projetos
      .map(repo => ({
        name: repo.name,
        description: repo.description || 'Sem descrição disponível',
        url: repo.html_url,
        stars: repo.stargazers_count,
        language: repo.language || 'Unknown',
      }));
  } catch (error) {
    console.error('Erro ao buscar projetos do GitHub:', error);
    console.log('Usando dados de fallback...');
    return FALLBACK_PROJECTS;
  }
}

// Função para busca no lado cliente (caso seja necessário)
export async function fetchGitHubProjectsClient(): Promise<Project[]> {
  try {
    const response = await fetch(`/api/github-projects`);
    if (!response.ok) throw new Error('API error');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    return FALLBACK_PROJECTS;
  }
}