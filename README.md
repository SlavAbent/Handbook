# TypeScript: ручная книга

Русскоязычный handbook по встроенным Utility Types, построенный на React 19, Next.js и Nextra.

## Локальный запуск

Требуются Node.js 24 и pnpm 11.

```bash
pnpm install
pnpm dev
```

Откройте <http://localhost:3000>.

## Проверки

```bash
pnpm check      # ESLint, TypeScript и Vitest
pnpm build      # статическая production-сборка и поисковый индекс в out/
```

## Контент

Главы находятся в `content/` и написаны в MDX. Порядок и русские названия страниц задаются файлами `_meta.ts`. Для новой главы добавьте `.mdx`-файл и включите его в соседний `_meta.ts`.

## PWA

Manifest расположен в `public/manifest.webmanifest`, service worker — в `public/sw.js`. Service worker регистрируется только в production-режиме. Для локальной проверки PWA соберите проект и отдайте каталог `out/` через HTTPS или localhost.
