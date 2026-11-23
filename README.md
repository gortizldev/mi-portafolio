# mi-portafolio

Portafolio personal de **gortizldev** con enfoque **backend**. SPA construida con React, Vite y TypeScript, con una interfaz tipo editor/terminal.

> **Estado:** en construcción. No se publica contenido personal inventado; los datos que faltan se muestran como empty states explícitos.

## Stack

- React 19
- Vite 8
- TypeScript 7
- CSS Modules + variables CSS (tokens de diseño)
- Hash routing propio (planificado, sin router externo)

Sin dependencias adicionales (sin Tailwind, router, librerías de iconos/animo, tests ni lint) por decisión del proyecto.

## Estado actual

| Fase | Estado |
|---|---|
| Scaffold Vite + React + TS | Completado |
| Tokens, tema claro/oscuro y estilos globales | Completado |
| Shell tipo IDE (top bar, explorador, panel, status bar) | Pendiente |
| Secciones y empty states | Pendiente |
| Hash routing y toggle de tema | Pendiente |
| Responsive y accesibilidad | Pendiente |
| Verificación final y deploy en Vercel | Pendiente |

El contenido real (nombre, rol, enlaces, experiencia, educación, proyecto) se incorporará cuando el autor lo entregue.

## Scripts

```bash
npm install    # instalar dependencias
npm run dev    # servidor de desarrollo
npm run build  # build de producción (tsc + vite)
npm run preview # previsualizar el build
```

## Estructura

```text
.
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── App.module.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── styles/
│       └── tokens.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Accesibilidad y tema

- `lang="es"` y landmarks semánticos.
- Tema claro/oscuro que sigue la preferencia del sistema, con override persistente.
- Foco visible y respeto por `prefers-reduced-motion`.

## Notas

- `AGENTS.md` y `docs/` son memoria local del proyecto y no se publican en este repositorio (excluidos en `.gitignore`).
- Deploy previsto en Vercel.
