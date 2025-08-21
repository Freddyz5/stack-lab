# Stack Lab — README introductorio

**Stack Lab** es tu espacio para experimentar y reforzar lo esencial del stack que usamos en el equipo: GraphQL, arquitectura hexagonal, frontend moderno y bases de datos (Prisma/Drizzle). Aquí encontrarás la configuración lista para practicar sin preocuparte por el setup inicial.  
(Repositorio: https://github.com/Freddyz5/stack-lab).

---

## Contenido rápido
- Propósito: repo de práctica / onboarding para reproducir la configuración del equipo.  
- Licencia: Apache-2.0.

### Estructura (resumen)
En la raíz verás carpetas y archivos típicos del monorepo: `.vscode`, `apps/`, `packages/`, `.yarnrc.yml`, `turbo.json`, `package.json`, `yarn.lock`, reglas de lint/format.

---

## Requisitos previos
- Node.js (usa `nvm` si lo prefieres).  
- **Yarn 4.9.1** (el proyecto está pensado para Yarn v4/Berry).  
  > Recomendado: instalar/activar Yarn 4.9.1 con **Volta** (método alternativo).

---

## Instalación (pasos recomendados)

> Ejecuta estos comandos desde la raíz del repo `stack-lab`.

1. Clona y entra al repo (si no lo hiciste aún)
```bash
git clone https://github.com/Freddyz5/stack-lab.git
cd stack-lab
```

2. Instalar Volta y preparar la versión específica de Yarn (4.9.1)
```bash
# instala Volta (si no lo tienes)
curl https://get.volta.sh | bash

# asegúrate de que Volta esté en tu PATH
volta install node
volta install yarn@4.9.1

# verifica la versión
yarn -v   # debería mostrar 4.9.1
```

> **Con Volta la versión de Yarn queda fijada automáticamente para este proyecto.**

3. Instalar dependencias
```bash
yarn install
```

4. Compilar todos los paquetes / construir el monorepo
```bash
yarn build
```

5. Crear archivos de entorno `.env`
- Agrega un `.env` en la raíz del repo con las variables necesarias (por ejemplo: `DATABASE_URL`, keys, etc.).  
- Agrega también un `.env` dentro del frontend (probablemente `apps/frontend/.env`) si el frontend necesita vars propias.

Ejemplo mínimo:
```bash
# en la raíz
cp .env.example .env   # si existe .env.example
# o crear manualmente:
echo "DATABASE_URL=postgresql://user:pass@localhost:5432/dbname" > .env

# en el frontend
cd apps/frontend
cp .env.example .env || echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env
cd ../..
```

6. Correr el proyecto (modo desarrollo)
- Comando para correr solo el frontend:
```bash
yarn dev:web
```
- Comando para correr solo el backend:
```bash
yarn dev:api
```
- Comando para correr frontend y backend:
```bash
yarn dev:both
```

---

## Buenas prácticas para este repo
- Haz commits pequeños y descriptivos cuando importes/ajustes configuraciones.  
- Mantén `.env` fuera del control de versiones (añádelo a `.gitignore`).  
- Si planeas compartir la configuración con el equipo, sube solo lo necesario y documenta las variables en un `.env.example`.
