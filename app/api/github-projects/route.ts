import { NextResponse } from 'next/server';
import { fetchGitHubProjects } from '@/lib/github';

export async function GET() {
  try {
    const projects = await fetchGitHubProjects();
    
    return NextResponse.json(projects, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Erro na API GitHub:', error);
    
    return NextResponse.json(
      { error: 'Erro ao buscar projetos do GitHub' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-cache',
        },
      }
    );
  }
}

// Configuração para deployment estático
export const runtime = 'edge';
export const revalidate = 3600; // 1 hora