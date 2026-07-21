# Aitak Odontologia

Landing page institucional da Aitak Odontologia, clínica localizada no Centro de Sorocaba/SP. O projeto reúne apresentação dos tratamentos, tecnologia, equipe, convênios, avaliações, localização, perguntas frequentes e canais de agendamento.

## Tecnologias

- React 19
- Next.js 16 com Vinext
- TypeScript
- Vite
- Tailwind CSS
- Cloudflare Worker
- Tabler Icons

## Requisitos

- Node.js 22.13 ou superior
- npm, utilizando o `package-lock.json` existente
- Linux para executar os scripts de build exatamente como configurados

## Instalação e uso

```bash
npm ci
npm run dev
```

Comandos disponíveis:

```bash
npm run dev       # ambiente de desenvolvimento
npm run lint      # análise estática
npm run build     # build de produção e validação do artefato
npm run start     # prévia local do build
npm test          # build e testes do HTML renderizado
```

## Estrutura principal

```text
aitak-odontologia/
├── app/                 # páginas, layout e estilos globais
├── components/aitak/    # componentes e dados da landing page
├── config/seo.ts        # configuração centralizada de SEO e indexação
├── public/              # imagens, favicons, manifest e robots.txt
├── scripts/             # build e validação
├── tests/               # testes do HTML final
├── worker/              # entrada do Cloudflare Worker
├── package.json
├── package-lock.json
└── .env.example
```

## Domínio oficial

Copie `.env.example` para o arquivo de ambiente compatível com a hospedagem e informe apenas o domínio oficial, sem barra final:

```bash
NEXT_PUBLIC_SITE_URL=https://www.dominio-oficial.com.br
```

Enquanto essa variável estiver vazia, o projeto não gera canonical, `og:url`, URLs absolutas da imagem social nem URLs no sitemap. Isso evita registrar o endereço temporário de preview como domínio definitivo.

## Situação atual: indexação bloqueada

O site está intencionalmente configurado como:

```text
noindex, nofollow, noarchive, nosnippet, noimageindex
```

O bloqueio é aplicado em três camadas:

- `config/seo.ts`: `allowIndexing: false`;
- `public/robots.txt`: `Disallow: /`;
- cabeçalho HTTP `X-Robots-Tag` nas respostas HTML.

O bloqueio é temporário. A imagem social continua sendo um arquivo público e não recebe uma regra própria de `noimageindex`.

## Publicação e indexação

Somente após a aprovação final e a definição do domínio oficial:

1. Preencha `NEXT_PUBLIC_SITE_URL` com o domínio oficial.
2. Altere `allowIndexing` para `true` em `config/seo.ts`.
3. Atualize `public/robots.txt` para:

   ```text
   User-agent: *
   Allow: /

   Sitemap: https://www.dominio-oficial.com.br/sitemap.xml
   ```

4. Confirme canonical, Open Graph e sitemap no HTML do build.
5. Execute `npm run build` e publique a nova versão.
6. Cadastre o domínio no Google Search Console.
7. Envie o sitemap e solicite a indexação.

Não libere apenas o `robots.txt`: a configuração `allowIndexing` também precisa ser alterada.

## Favicon e manifest

Os favicons ficam diretamente em `public/`:

- `favicon.ico`
- `favicon.svg`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-48x48.png`
- `favicon-64x64.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `maskable-icon-512x512.png`
- `safari-pinned-tab.svg`
- `site.webmanifest`

O manifest fornece nome, cores e ícones instaláveis, mas o projeto não registra service worker e não se apresenta como PWA completa.

## Imagem social e Open Graph

A imagem principal de compartilhamento é:

```text
public/social/aitak-og-image-1200x630.jpg
```

Também existem versões PNG e WebP na mesma pasta. O JPG de 1200×630 é a referência principal por compatibilidade com WhatsApp, Facebook, LinkedIn e X/Twitter.

As metatags Open Graph e Twitter Cards recebem a URL absoluta somente quando `NEXT_PUBLIC_SITE_URL` estiver configurada.

## Sitemap

`app/sitemap.ts` está preparado para gerar o sitemap. Enquanto o domínio oficial estiver vazio, ele não publica URLs temporárias. Durante o bloqueio atual, o sitemap não é anunciado em `robots.txt`.

## Dados estruturados

O projeto inclui JSON-LD dos tipos `Dentist` e `FAQPage`. O conteúdo utiliza apenas dados confirmados da clínica. Não há `aggregateRating`, contagem de avaliações, nota média, faixa de preço, horários ou outras informações não confirmadas.

## Envio para GitHub

1. Extraia o ZIP do projeto.
2. Crie um repositório vazio no GitHub.
3. Na pasta raiz, execute:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin URL_DO_REPOSITORIO
   git push -u origin main
   ```

4. Configure `NEXT_PUBLIC_SITE_URL` apenas no ambiente de hospedagem ou em arquivo `.env` local não versionado.

O `.gitignore` exclui dependências, builds, caches, logs, credenciais e arquivos `.env`, preservando `.env.example`.

## Privacidade e cookies

As rotas de Política de Privacidade e Política de Cookies permanecem com `noindex`. Antes da publicação oficial, os textos jurídicos devem ser revisados e aprovados por profissional responsável e ajustados às integrações efetivamente utilizadas pelo site.
