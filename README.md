# 🎬 PM2-CINEGO - Catálogo de Películas

---

## 📖 About

Aplicación web **Full Stack** para gestión y visualización de un catálogo de películas. Permite explorar películas, crear nuevas entradas con validación de datos y eliminarlas directamente desde la interfaz.

El proyecto está construido con una arquitectura **cliente-servidor** separada, donde el backend expone una **API REST** conectada a **MongoDB Atlas** y el frontend consume dicha API mediante peticiones HTTP con Axios.

---

## 🛠️ Tecnologías Usadas

### Backend
- **Node.js** — Entorno de ejecución de JavaScript en el servidor
- **Express** — Framework para construir la API REST
- **Mongoose** — ODM para modelar los datos en MongoDB
- **MongoDB Atlas** — Base de datos NoSQL en la nube
- **dotenv** — Manejo de variables de entorno
- **Morgan** — Middleware de logging de peticiones HTTP
- **CORS** — Habilitación de solicitudes entre dominios
- **Nodemon** — Reinicio automático del servidor en desarrollo

### Frontend
- **HTML5 / CSS3** — Estructura y estilos personalizados con diseño responsivo
- **JavaScript (Vanilla)** — Lógica del DOM y manejo de eventos
- **Axios** — Peticiones HTTP hacia el backend
- **Webpack** — Empaquetado de módulos JavaScript
- **Bootstrap 4** — Componentes visuales y estilos responsivos
- **jQuery** — Librería de utilidades para el DOM
- **Google Fonts** — Tipografías: Chewy, Delius, Knewave

### Testing
- **Jest** — Pruebas unitarias para el módulo `carritoCompra`

---

## ✨ Funcionalidades Principales

- 🎥 **Listado de películas** — Visualización de todas las películas con poster, título, año, director, duración, género y rating
- ➕ **Crear película** — Formulario con validación en frontend y backend para agregar nuevas películas al catálogo
- 🗑️ **Eliminar película** — Botón de eliminación directamente desde la tarjeta de cada película
- 🔍 **Vista detallada** — Overlay interactivo al hacer clic en el poster con toda la información de la película
- 🎞️ **Historia del Cine** — Página informativa sobre las primeras películas del mundo, Colombia y Argentina
- 💡 **Sobre mi proyecto** — Carrusel con todas las tecnologías utilizadas en el desarrollo
- ✅ **Validaciones** — Los campos `title`, `director`, `poster` (URL válida), `year` (1888–9999), `duration`, `genre` (mínimo uno) y `rate` (0.1–10) son validados tanto en el cliente como en el servidor

---

## 🏗️ Arquitectura

Arquitectura **cliente-servidor** con separación clara de responsabilidades:

```
PM2-LACanonNieto/
│
├── back/                            # Servidor — API REST
│   ├── index.js                     # Punto de entrada: inicia servidor y conexión DB
│   └── src/
│       ├── server.js                # Configuración de Express (middlewares y rutas)
│       ├── config/
│       │   └── conDb.js             # Conexión a MongoDB Atlas con Mongoose
│       ├── models/
│       │   └── Movie.js             # Modelo Mongoose (Schema de película)
│       ├── routes/
│       │   └── moviesRouter.js      # Rutas: GET, POST, DELETE /movies
│       ├── controllers/
│       │   └── moviesController.js  # Lógica de cada endpoint
│       ├── services/
│       │   └── movieService.js      # Interacción directa con la base de datos
│       └── middlewares/
│           └── validateMovie.js     # Validación de datos antes de crear película
│
├── front/                           # Cliente — Interfaz de usuario
│   ├── index.html                   # Página principal: listado de películas
│   ├── HTML/
│   │   ├── crearPelicula.html       # Formulario para crear películas
│   │   ├── historiaCine.html        # Historia del cine
│   │   └── sobreMiProyecto.html     # Tecnologías utilizadas (carrusel)
│   ├── scripts/
│   │   ├── index.js                 # Llama al backend y renderiza películas
│   │   ├── renderMovies.js          # Genera las tarjetas en el DOM
│   │   └── createMovieDOM.js        # Maneja el formulario y envío al backend
│   ├── Styles/
│   │   ├── styles.css               # Estilos principales
│   │   └── reset.css                # Reset de estilos base
│   └── webpack.config.js            # Configuración de empaquetado
│
└── Challenge-testing/               # Pruebas unitarias con Jest
    ├── index.js                     # Clase carritoCompra
    └── carritoCompra.test.js        # Tests: constructor, agregar, calcular, descuento
```

- Separación clara de capas: **Routes → Controllers → Services → Models**
- Middleware de validación independiente antes de los controladores
- Conexión a base de datos centralizada en `config/conDb.js`
- Frontend empaquetado con **Webpack** y servido con **live-server**

---

## ⚙️ Instalación y Ejecución

### Requisitos previos
- Node.js instalado
- Cuenta en MongoDB Atlas con un cluster disponible

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/LACanonNieto/PM2-CINEGO-CatalogoPeliculas.git
cd PM2-CINEGO-CatalogoPeliculas
```

### 2️⃣ Configurar y ejecutar el Backend

```bash
cd back
npm install
```

Crear un archivo `.env` en la carpeta `back/` con el siguiente contenido:

```env
MONGO_URI=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Iniciar el servidor:

```bash
npm start
```

El servidor quedará corriendo en: `http://localhost:3001`

### 3️⃣ Configurar y ejecutar el Frontend

```bash
cd front
npm install
```

En una terminal, compilar los scripts con Webpack:

```bash
npm run build
```

En otra terminal, levantar el servidor de desarrollo:

```bash
npm start
```

El frontend quedará disponible en: `http://127.0.0.1:8080`

### 4️⃣ Ejecutar los Tests

```bash
cd Challenge-testing
npm install
npm test
```

---

## 🔗 Endpoints de la API

| Método | Ruta | Descripción |
|--------|------|-------------|
| `GET` | `/movies` | Obtiene todas las películas |
| `POST` | `/movies` | Crea una nueva película |
| `DELETE` | `/movies/:id` | Elimina una película por ID |
