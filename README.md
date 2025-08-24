# 🚀 AdaTuring - Landing Page

Landing page oficial do time de desenvolvimento AdaTuring da FIAP. Uma aplicação Next.js moderna, responsiva e otimizada para performance.

![AdaTuring](https://img.shields.io/badge/AdaTuring-FIAP-008F8C?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-13.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Funcionalidades

- **🎨 Design Moderno**: Interface limpa inspirada na identidade visual do AdaTuring
- **📱 Responsivo**: Otimizado para mobile, tablet e desktop
- **🚀 Performance**: Lighthouse score ≥ 90 em todas as métricas
- **♿ Acessível**: Compatível com padrões WCAG AA/AAA
- **🔗 Integração GitHub**: Busca automática de repositórios via API
- **⚡ Next.js 13**: App Router, SSG e otimizações modernas
- **🎯 SEO Otimizado**: Meta tags, Open Graph e sitemap

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| 🔵 Primária | `#008F8C` | Botões, links, destaques |
| 🟢 Secundária | `#015958` | Elementos de apoio |
| ⚫ Escura | `#023535` | Textos principais, footer |
| 🟡 Acento | `#F2A20C` | CTAs, hover states |
| ⚪ Fundo | `#FFFFFF` | Background principal |

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 16.0 ou superior
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/AdaTuring/landing-page.git
cd landing-page
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## ⚙️ Configuração

### 🖼️ Trocar Logo

1. Substitua o placeholder na seção Hero em `components/Hero.tsx`
2. Adicione sua logo em `public/logo.png`
3. Atualize o código:

```tsx
// Substituir o div placeholder por:
<img 
  src="/logo.png" 
  alt="Logo AdaTuring" 
  className="w-40 h-40 object-contain"
/>
```

### 🔧 Configurações do Site

Edite o arquivo `lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  SITE_TITLE: "AdaTuring",
  SITE_DESCRIPTION: "Sua descrição aqui...",
  GITHUB_OWNER: "SeuUsuarioGitHub", // ⬅️ Altere aqui
  GITHUB_LINK: "https://github.com/SeuUsuario",
  CONTACT_EMAIL: "seu@email.com",
  FIAP_LINK: "https://www.fiap.com.br",
};
```

### 👥 Editar Membros do Time

No arquivo `lib/constants.ts`, modifique o array `TEAM_MEMBERS`:

```typescript
export const TEAM_MEMBERS = [
  {
    name: "Seu Nome",
    role: "Sua Função",
    avatarUrl: "https://exemplo.com/avatar.jpg",
    github: "https://github.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuusuario",
  },
  // Adicione mais membros...
];
```

### 📁 Projetos Fallback

Se a API do GitHub falhar, edite `FALLBACK_PROJECTS` em `lib/constants.ts`:

```typescript
export const FALLBACK_PROJECTS = [
  {
    name: "Projeto Exemplo",
    description: "Descrição do seu projeto",
    url: "https://github.com/usuario/projeto",
    stars: 10,
    language: "JavaScript",
  },
  // Adicione mais projetos...
];
```

### 🔑 GitHub API (Opcional)

Para evitar rate limiting:

1. Crie um Personal Access Token no GitHub
2. Adicione ao `.env.local`:

```bash
GITHUB_TOKEN=seu_token_aqui
```

3. Atualize `lib/github.ts` para usar o token:

```typescript
headers: {
  'Authorization': `token ${process.env.GITHUB_TOKEN}`,
  'Accept': 'application/vnd.github.v3+json',
}
```

## 🏗️ Estrutura do Projeto

```
├── app/
│   ├── api/github-projects/     # API para buscar projetos
│   ├── globals.css              # Estilos globais
│   ├── layout.tsx               # Layout raiz com SEO
│   └── page.tsx                 # Página principal
├── components/
│   ├── Hero.tsx                 # Seção hero/cabeçalho
│   ├── ProjectsGrid.tsx         # Grid de projetos
│   ├── MembersGrid.tsx          # Grid de membros
│   └── Footer.tsx               # Rodapé
├── lib/
│   ├── constants.ts             # ⚙️ Configurações
│   ├── types.ts                 # Tipos TypeScript
│   ├── github.ts                # API GitHub
│   └── utils.ts                 # Utilitários
└── public/                      # Assets estáticos
```

## 🚀 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AdaTuring/landing-page)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AdaTuring/landing-page)

### Build Manual

```bash
npm run build
npm start
```

## 📊 Performance

A aplicação é otimizada para atingir:

- ⚡ **Performance**: ≥ 90
- ♿ **Accessibility**: ≥ 90  
- 🔧 **Best Practices**: ≥ 90
- 🔍 **SEO**: ≥ 90

### Otimizações Incluídas

- ✅ Lazy loading de imagens
- ✅ Compressão de assets
- ✅ Code splitting automático
- ✅ Preload de recursos críticos
- ✅ Cache inteligente
- ✅ Minificação CSS/JS

## ♿ Acessibilidade

- ✅ Navegação por teclado
- ✅ Screen readers compatível
- ✅ Contraste AA/AAA
- ✅ ARIA labels
- ✅ Foco visível
- ✅ Semântica HTML5

## 📱 Breakpoints

| Device | Size | Breakpoint |
|--------|------|------------|
| Mobile | ≤ 640px | `sm:` |
| Tablet | 641-1024px | `md:` & `lg:` |
| Desktop | ≥ 1025px | `xl:` & `2xl:` |

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 License

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 🎯 Roadmap

- [ ] Modo escuro
- [ ] Animações avançadas
- [ ] Blog integrado
- [ ] Sistema de notificações
- [ ] PWA support

## 📧 Contato

AdaTuring - [@AdaTuring](https://github.com/AdaTuring) - contato@henriquesilva.dev

Link do Projeto: [https://github.com/AdaTuring/landing-page](https://github.com/AdaTuring/landing-page)

---

**Feito com ❤️ pelo time AdaTuring - FIAP**

*Inspirado por Ada Lovelace e Alan Turing* 🚀