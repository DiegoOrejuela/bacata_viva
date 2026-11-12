<p align="center">
  <img src="icons/bacata-viva-192.png" alt="Logo de Bacatá Viva" width="120" height="120">
</p>

<h1 align="center">Bacatá Viva</h1>

<p align="center"><strong>De Bacatá a Santafé, descubre Bogotá</strong></p>

<p align="center">
  Una guía para descubrir la historia, la cultura y la naturaleza de Bogotá a través de 12 lugares emblemáticos.
</p>

<p align="center">
  HTML · CSS · JavaScript · IndexedDB · Service Worker
</p>

## 📒 Índice

- [Acerca del proyecto](#acerca-del-proyecto)
- [Uso](#uso)
  - [Instalación](#instalacion)
  - [Comandos](#comandos)
- [Desarrollo](#desarrollo)
  - [Requisitos](#requisitos)
  - [Entorno de desarrollo](#entorno-de-desarrollo)
  - [Estructura de archivos](#estructura-de-archivos)
  - [Compilación y comprobaciones](#compilacion-y-comprobaciones)
  - [Publicación en GitHub Pages](#publicacion-en-github-pages)
- [Colaboración](#colaboracion)
  - [Contribuciones](#contribuciones)
  - [Ramas](#ramas)
  - [Convenciones](#convenciones)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [Recursos](#recursos)
- [Galería](#galeria)
- [Créditos y agradecimientos](#creditos-y-agradecimientos)
- [Licencia](#licencia)

<a id="acerca-del-proyecto"></a>

## 🔰 Acerca del proyecto

**Bacatá Viva** es un proyecto académico desarrollado a partir de los archivos base proporcionados por el profesor del curso de **Profundización de la programación orientada a objetos II**. Aplica clases, herencia y manejo del DOM para presentar lugares de Bogotá en una interfaz adaptable a computadores y dispositivos móviles.

Cada publicación incluye una fotografía, una categoría, una descripción y una ubicación. El visitante puede buscar por nombre y abrir el detalle en un modal sin salir de la página.

### Funciones principales

- Catálogo de **12 lugares**, ordenado con un criterio editorial que prioriza los referentes turísticos más emblemáticos.
- Búsqueda por nombre mientras se escribe.
- Detalles en un modal que se puede cerrar con el botón de cierre, la tecla `Escape` o un clic fuera del cuadro.
- Persistencia del catálogo en **IndexedDB**, dentro del navegador.
- Consulta sin conexión después de completar la descarga inicial de los recursos y la activación del **service worker**.
- Manifiesto e iconos para la instalación como aplicación en navegadores compatibles.
- Navegación por teclado, etiquetas accesibles y respeto por la preferencia de movimiento reducido.

### Lugares incluidos

| Orden | Lugar |
| --- | --- |
| 1 | Monserrate |
| 2 | Museo del Oro |
| 3 | La Candelaria |
| 4 | Plaza de Bolívar |
| 5 | Teatro Colón |
| 6 | Casa de Nariño |
| 7 | Parque Simón Bolívar |
| 8 | Biblioteca Virgilio Barco |
| 9 | Parque Nacional Enrique Olaya Herrera |
| 10 | Basílica de Nuestra Señora de Lourdes |
| 11 | Estadio El Campín |
| 12 | Plaza Cultural La Santamaría |

### Identidad visual

La identidad combina referencias al patrimonio, los cerros y la vida urbana de Bogotá.

| Color | Valor hexadecimal |
| --- | --- |
| Terracota | `#B76543` |
| Oro muisca | `#C79A48` |
| Verde cerros | `#426E58` |
| Crema colonial | `#F3E7CF` |
| Gris urbano | `#35414A` |

<a id="uso"></a>

## ⚡ Uso

Abre la página desde un servidor web y selecciona **Comienza a explorar**. Recorre las tarjetas, utiliza el buscador para encontrar un lugar y pulsa **Ver más** para consultar su ubicación y descripción.

<a id="instalacion"></a>

### 🔌 Instalación

1. Clona el repositorio y entra en su carpeta:

   ```bash
   git clone https://github.com/DiegoOrejuela/bacata_viva.git
   cd bacata_viva
   ```

2. Inicia un servidor HTTP estático desde esa carpeta. Si tienes Node.js y npm, puedes utilizar [serve](https://github.com/vercel/serve):

   ```bash
   npx serve . --listen 3000
   ```

   La primera vez, `npx` puede solicitar permiso para descargar la herramienta. Este comando funciona en macOS, Linux y Windows con Node.js y npm instalados.

3. Abre [Bacatá Viva en tu equipo](http://localhost:3000). Si el puerto está ocupado, consulta la dirección que indique la terminal.

La aplicación no tiene dependencias de npm ni necesita un backend. `serve` es una herramienta opcional para el desarrollo: también puedes usar el servidor HTTP de tu editor. Los visitantes del sitio publicado solo necesitan un navegador.

<a id="comandos"></a>

### 📦 Comandos

Ejecuta estos comandos desde la raíz del proyecto:

| Comando | Propósito |
| --- | --- |
| `npx serve . --listen 3000` | Servir los archivos para el desarrollo local. |
| `node --check app.js` | Comprobar la sintaxis del JavaScript de la página. |
| `node --check service-worker.js` | Comprobar la sintaxis del service worker. |

Para detener el servidor, presiona `Ctrl+C` en la terminal donde se está ejecutando.

<a id="desarrollo"></a>

## 🔧 Desarrollo

<a id="requisitos"></a>

### 📓 Requisitos

- Un navegador actualizado con soporte para JavaScript, IndexedDB, service workers y el elemento `<dialog>`.
- Un editor de código.
- Git, si vas a clonar el repositorio o contribuir.
- Un servidor HTTP estático. Para los comandos de esta guía, una versión LTS vigente de Node.js con npm.

Los service workers requieren un contexto seguro: **HTTPS** en el sitio publicado o **localhost** durante el desarrollo. Abrir `index.html` mediante `file://` no permite comprobar esta funcionalidad. Consulta la [documentación de Service Worker en MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API).

<a id="entorno-de-desarrollo"></a>

### 🔩 Entorno de desarrollo

Abre la carpeta del repositorio en tu editor e inicia el servidor. No hace falta ejecutar `npm install`: no hay un archivo `package.json` ni un proceso de construcción.

El flujo de datos está concentrado en `app.js`:

1. Las clases `LugarTuristico` y `LugarHistorico` representan las publicaciones.
2. El arreglo `lugares` define el catálogo y su orden visual. Los identificadores se mantienen estables aunque cambie ese orden.
3. `mostrarLugares()` dibuja las tarjetas antes de esperar a IndexedDB.
4. La base `BogotaExplorando`, versión `2`, guarda los registros en el almacén `lugares`. El catálogo del código actualiza los campos de las publicaciones conocidas y conserva los campos adicionales guardados.
5. Al reconstruir las instancias se mantienen los métodos de las clases. Si falla la apertura de IndexedDB, las publicaciones iniciales siguen disponibles.

El service worker utiliza una estrategia que consulta primero la caché. Los archivos disponibles sin conexión se enumeran en `urlsToCache`, dentro de `service-worker.js`.

<a id="estructura-de-archivos"></a>

### 📁 Estructura de archivos

```text
bacata_viva/
├── icons/              # Iconos del navegador y de la aplicación
├── imagenes/           # Fotografías de los 12 lugares, logo y portada
├── .gitignore          # Archivos locales excluidos del repositorio
├── app.js              # Clases, catálogo, búsqueda, modales e IndexedDB
├── index.html          # Estructura de la página
├── manifest.json       # Nombre, colores e iconos de la aplicación
├── README.md           # Documentación del proyecto
├── service-worker.js   # Caché de recursos para consulta sin conexión
└── style.css           # Identidad visual, componentes y adaptación a pantallas
```

<a id="compilacion-y-comprobaciones"></a>

### 🔨 Compilación y comprobaciones

**No se requiere compilación.** El navegador interpreta directamente los archivos HTML, CSS y JavaScript.

Antes de proponer cambios, comprueba lo siguiente:

1. Aparecen las 12 publicaciones, en el orden previsto y sin imágenes rotas.
2. El buscador filtra los lugares y recupera la lista completa al borrar el texto.
3. Cada modal muestra los datos correctos y se cierra con el botón, `Escape` y un clic fuera del cuadro.
4. La página se adapta a una pantalla pequeña sin desplazamiento horizontal.
5. Al recargar, el catálogo mantiene sus datos y su orden, incluso si ya había registros anteriores en IndexedDB.
6. Tras completar el almacenamiento de los recursos y activar el service worker, la página vuelve a cargar sin conexión.

Los comandos `node --check` solo validan la sintaxis; las comprobaciones de interacción se realizan en el navegador. El repositorio todavía no incluye una suite de pruebas automatizadas.

<a id="publicacion-en-github-pages"></a>

### 🚀 Publicación en GitHub Pages

El proyecto puede publicarse directamente desde la raíz del repositorio:

1. Sube los cambios de la página y sus recursos a la rama `master` de GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch** como origen.
4. Selecciona la rama **master**, la carpeta **/ (root)** y guarda la configuración.
5. Espera a que termine el despliegue y abre el enlace que muestre GitHub Pages.

Sin un dominio personalizado, la dirección esperada para este repositorio es [DiegoOrejuela.github.io/bacata_viva](https://DiegoOrejuela.github.io/bacata_viva/). Este enlace depende de que Pages esté habilitado y el despliegue haya finalizado.

Conserva las rutas relativas de las imágenes, estilos y scripts para que funcionen bajo `/bacata_viva/`. Guía de referencia: [configurar el origen de publicación de GitHub Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

<a id="colaboracion"></a>