# web-page-colmotica — Documentación completa y guía de integración

Este archivo recopila la documentación del frontend: estructura del proyecto, componentes principales, flujo de datos, cómo conectar con el backend (paso a paso), ejemplos prácticos y una checklist de verificación.

Fecha: 2025-10-24

---

## 1) Resumen rápido

Proyecto: SPA en React + TypeScript construida con Vite. Contiene dos secciones principales (Tekneo y Colmotica). Usa `react-router` (router por hash), `react-i18next` para traducciones y CSS/Tailwind para estilos.

Objetivo de esta guía: que puedas entender qué hace cada carpeta/archivo, cómo fluyen los datos, y cómo conectar la app con tu backend de forma segura y repetible.

---

## 2) Cómo ejecutar el proyecto (rápido)

Requisitos
- Node.js 16+ recomendado
- pnpm (recomendado) o npm

Instalación de dependencias

```powershell
pnpm install
# o
npm install
```

Ejecutar en desarrollo

```powershell
pnpm dev
# o
npm run dev
```

Build y preview

```powershell
pnpm build
pnpm preview
```

Variables de entorno
- Crear `.env` en la raíz con la variable pública que usa la app:

```env
VITE_API_URL="https://api.tu-dominio.com/api/"
```

Vite sólo expone variables que empiecen por `VITE_` al código cliente.

---

## 3) Estructura del proyecto (carpetas y propósito)

Raíz
- `index.html` — entrada HTML de Vite.
- `package.json`, `pnpm-lock.yaml` — dependencias y scripts.
- `vite.config.ts` — configuración del dev server, plugins y proxies.
- `public/` — recursos estáticos (imágenes, docs, svg). Se sirven directamente.

Carpeta `src/`
- `AppTekneo.tsx` — entry que monta `RouterProvider` con `routerTekneo` dentro de `SingletonProvider` y `HelmetProvider`.
- `tekneo.tsx` — posiblemente otra entrada o wrapper; revisar si requiere cambios.
- `i18n.ts` — inicialización de `i18next` (usa `locales/es.json` y `locales/en.json`).
- `vite-env.d.ts` — tipado para `import.meta.env`.

Subcarpetas clave:
- `app/`
  - `routesTekneo.tsx` — router principal (createHashRouter). Define `LayoutTekneo` y rutas hijas.
  - `routesColmotica.ts` — rutas para la sección Colmotica (montada en `/colmotica`).
- `components/` — componentes reutilizables y específicos por sección.
  - `Colmotica/` — `Header.tsx`, `LayoutColmotica.tsx`, `Footer/`, `ProductSlider/`.
  - `Tekneo/` — `LayoutTekneo.tsx`, `Header/`, `Footer/`, `login/` (Login, Registrar, Recuperar, VerificarUsuario), `Modal/`, `Slider/`, `Documentation/`.
  - `global/` — utilitarios comunes: `btnChangeLang.tsx`, `EditableTable.tsx`, `ToastPopover/`.
  - `Popover/` — componente popover genérico.
- `pages/` — páginas por ruta para Tekneo y Colmotica. Ej.: `pages/Tekneo/home.tsx`, `pages/Colmotica/products.tsx`.
- `interfaces/` — `backend.ts` con tipos `User`, `ResponseBackend`, etc.
- `requests/` — funciones que llaman al backend (`user.tsx`, y ahora `api.ts` wrapper).
- `singleton/` — `globalContext.tsx` y `singletonProvider.tsx` donde se maneja el estado compartido (idioma, user, modal ref, flags).
- `Styles/` — CSS por página/sección.

---

## 4) Componentes principales (qué hacen y dónde mirar)

Esta sección explica los componentes más importantes y qué buscar dentro de cada archivo.

- `components/Tekneo/LayoutTekneo.tsx`
  - Componente layout que incluye `Header`, `Footer` y un contenedor para las páginas Tekneo.
  - Punto de integración para `GlobalContext` y para añadir wrappers (e.g., scroll restoration, analytics).

- `components/Colmotica/LayoutColmotica.tsx`
  - Layout para la sección Colmotica; revisa cómo importan `ProductSlider` y `Footer`.

- `components/Tekneo/Header/Header.tsx` y `components/Colmotica/Header.tsx`
  - Contienen navegación principal. Revisa uso de `useTranslation()` para i18n, y `NavLink`/`Link` de `react-router`.

- `components/Tekneo/login/*` (Login.tsx, Registrar.tsx, Recuperar.tsx, VerificarUsuario.tsx)
  - Formularios y lógica de autenticación. Buscan o llaman funciones en `requests/` (p.ej. `registerUser`).
  - Debes revisar validaciones, manejo de errores y toasts aquí.

- `components/Tekneo/Modal/Modal.tsx`
  - Modal genérico; exporta un tipo `ModalHandle` para controlar apertura/cierre mediante una ref (usada en `GlobalContext.modalLoginRef`).

- `components/global/ToastPopover/*`
  - Sistema de toasts/local popovers para mostrar mensajes de éxito/error. Usarlo tras llamadas al backend.

- `components/Colmotica/ProductSlider/ProductSlider.tsx`
  - Usa `swiper` para slides de productos; revisar configuración y CSS `ProductSlider.css`.

Consejo: para entender un componente, abre el archivo y localiza:
1. Props que recibe (tipos TS). 2. Hooks usados (`useState`, `useEffect`, `useContext(GlobalContext)`). 3. Llamadas a `requests/*`.

---

## 5) Flujo de datos y estado global

- `GlobalContext` (`src/singleton/globalContext.tsx`) contiene:
  - `lang` y `setLang` — idioma actual.
  - `users`, `user`, `setUser` — info de usuarios (forma simple: `UserInfo` con email/name/password/admin).
  - `modalLoginRef` — ref a modal de login.

Los componentes consumen `GlobalContext` con `useContext(GlobalContext)` para leer idioma, abrir el modal o acceder al usuario.

Además de `GlobalContext`, las rutas usan `Layout` components que pueden envolver la lógica local (p. ej., cargar datos en mount).

---

## 6) Integración con el backend — paso a paso

1) Definir la URL base
- Crear `.env` con:

```env
VITE_API_URL="https://api.tu-dominio.com/api/"
```

2) Probar endpoints fuera del frontend
- Usa `curl` o Postman para confirmar que los endpoints responden y CORS está habilitado.

Ejemplo (PowerShell):

```powershell
curl.exe -X POST -H "Content-Type: application/json" -d '{"EMAIL":"a@b.com","NAME":"X","PASS_HASH":"pwd"}' "https://api.tu-dominio.com/api/colmotica/users"
```

3) Wrapper HTTP centralizado (ya creado)
- Archivo: `src/requests/api.ts`.
- Funcionalidad:
  - `apiFetch(path, opts)` — concatena `VITE_API_URL` + path y realiza `fetch`.
  - Añade `Content-Type: application/json` por defecto.
  - Si existe `token` en `localStorage`, añade `Authorization: Bearer <token>`.
  - Parsea respuesta con seguridad y lanza el cuerpo si `res.ok === false`.
  - Helpers `get(path)` y `post(path, body)`.

Usar este wrapper evita duplicar lógica en cada request y facilita añadir interceptores/refresh token después.

4) Ejemplo de uso
- `src/requests/user.tsx` usa ahora `post("colmotica/users", data)` para registrar un usuario.

5) Manejo de tokens
- Si el backend retorna un token al hacer login, guarda el token en `localStorage.setItem('token', token)` o mejor en `sessionStorage` según la política de seguridad.
- Agrega `authToken` al `GlobalContext` (recomendado) para exponer `isAuthenticated`, `login()` y `logout()`.
- Para llamadas protegidas, el wrapper ya añade `Authorization` cuando `localStorage.token` existe.

6) Errores y UI
- El wrapper lanza el cuerpo en caso de error. En los componentes, captura con try/catch y muestra mensajes usando `ToastPopover`.

7) CORS
- Si recibes errores de CORS, habilítalo en el backend o define un proxy en `vite.config.ts` (dev).

Ejemplo de proxy en `vite.config.ts` (concepto):

```ts
// vite.config.ts (snippet conceptual)
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.tu-dominio.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
```

---

## 7) Código de ejemplo (usar dentro del proyecto)

Wrapper (ya presente en `src/requests/api.ts`) — ejemplo de uso:

```ts
import { post } from './api';
import type { User, ResponseBackend } from '../interfaces/backend';

export async function registerUser(data: User): Promise<ResponseBackend> {
  return post('colmotica/users', data) as Promise<ResponseBackend>;
}
```

Ejemplo de login (concepto) que guarda token y actualiza `GlobalContext`:

```ts
// Concepto: en singletonProvider
async function login(email: string, password: string) {
  const res = await post('auth/login', { email, password });
  if ((res as any).token) {
    const token = (res as any).token;
    localStorage.setItem('token', token);
    setUser({ /* map user */ });
  }
}
```

---

## 8) Checklist antes de conectar al backend

- [ ] Crear `.env` con `VITE_API_URL`.
- [ ] Probar endpoints con `curl`/Postman.
- [ ] Confirmar CORS o añadir proxy en `vite.config.ts`.
- [ ] Centralizar llamadas en `src/requests/api.ts` (ya hecho).
- [ ] Guardar token y exponer `login()`/`logout()` en `singletonProvider`.
- [ ] Manejar errores de forma uniforme y mostrar toasts.
- [ ] Añadir validaciones en formularios.

---

## 9) Casos borde / pruebas sugeridas

- Registro: campos vacíos, email inválido, password corto. Mostrar mensajes de validación locales antes de llamar al backend.
- Login: credenciales inválidas, token expirado. Forzar logout y redirigir a login si 401.
- Network: desconexión o timeout (mostrar retry o mensaje "estás sin conexión").
- Respuestas no JSON: el wrapper trata respuestas no JSON devolviendo el texto.

Tests recomendados
- Unit tests para utilidades y wrapper (`api.ts`).
- Tests de integración para formularios usando `msw` (mock service worker).

---

## 10) Mejoras proactivas que implementé y recomendaciones para continuar

Implementado
- `src/requests/api.ts` — wrapper `apiFetch`, `get`, `post`.
- `src/requests/user.tsx` refactorizado para usar el wrapper.
- `README.md` actualizado con esta documentación.

Recomendado (siguientes pasos)
1. Extender `singletonProvider` para guardar token y exponer `login()`/`logout()`.
2. Refactorizar otras funciones en `src/requests/` para usar el wrapper.
3. Añadir manejo centralizado de errores (interfaz de toasts) y estados de carga en formularios.
4. Documentar componentes más en detalle (props, ejemplos de uso). Puedo generar una sección por componente si lo deseas.

---

## 11) Cómo puedo ayudarte ahora

Elige una opción y la implemento:

- A) Implementar `login()` y `logout()` en `singletonProvider` y persistir token.
- B) Refactorizar el resto de llamadas a `requests/` para usar `apiFetch`.
- C) Generar documentación detallada por componente (cada archivo) en README o en archivos separados.
- D) Añadir tests básicos para el wrapper `api.ts` con `vitest`/`msw`.

Indica la letra y empiezo a trabajar en esa tarea.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
