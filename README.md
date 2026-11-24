# kauanallyson.com.br

Portfólio pessoal de Kauan Allyson: Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · Biome.

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # biome check
npm run format   # biome check --write
npm run build
```

## Onde editar

- **Todo o texto** (hero, projetos, serviços, sobre, contatos): `src/content/site.ts`
- Foto: `public/kauan.webp` · Prints dos projetos: `public/projects/*.png`
- Páginas: `src/app/(page|sobre|projetos|contato)`
- Componentes: `src/components/`

## Deploy

Docker (`Dockerfile` + `compose.yaml` com Traefik/Let's Encrypt) em uma VM A1 da Oracle Cloud,
atualizada pelo GitHub Actions a cada push na `main`. Passo a passo em [`deploy/README.md`](deploy/README.md).
