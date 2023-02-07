![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# Individual Project - Repaso Rick & Morty

## Objetivos del Proyecto

- Aprender y practicar el workflow de GIT.
- Construir una App utlizando React, Redux, Node y Sequelize.
- Repasar y afirmar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.

## Horarios y Fechas

El proyecto tendrá una duración máxima de una semana.

## Comenzando

1.  Forkear el repositorio para tener una copia del mismo en sus cuentas
2.  Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendremos un `boilerplate` con la estructura general tanto del servidor como de cliente.

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienen instalada:

```bash
node -v
npm -v
```

**ACLARACIÓN:** Las dependencias actuales se encuentran en las versiones que venimos trabajando durante el bootcamp.

Versiones:

- **react**: 17.0.1
- **react-dom**: 17.0.1
- **react-router-dom**: 5.2.0
- **redux**: 4.0.5
- **react-redux**: 7.2.3

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```env
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `characters`

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos personajes disponibles junto con información relevante de los mismos utilizando la api externa [rickandmorty](https://rickandmortyapi.com/documentation) y a partir de ella poder, entre otras cosas:

- Buscar personajes
- Filtrarlos / Ordenarlos
- Agregar nuevos personajes

**IMPORTANTE**: Agregar la clave en el archivo `.env` para que la misma no se suba al repositorio por cuestiones de seguridad y utilizarla desde allí.

### URL que vamos a utilizar

- GET <https://rickandmortyapi.com/api>

### Requerimientos mínimos

A continuación se detallaran los requerimientos mínimos para el proyecto de repaso. En cuanto al diseño visual no va a haber wireframes ni prototipos prefijados sino que tendremos libertad de hacerlo a nuestro gusto pero tenemos que aplicar los conocimientos de estilos vistos en el curso para que quede agradable a la vista.

#### Tecnologías necesarias

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

**Pagina inicial**: debemos armar una landing page con

- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

**Ruta principal**: debe contener

- [ ] Input de búsqueda para encontrar personajes por nombre
- [ ] Área donde se verá el listado de personajes. Deberá mostrar su:
  - Imagen
  - Nombre
  - status
- [ ] Botones/Opciones para filtrar por status, location y por personajes existente o agregado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los personajes por orden alfabético
- [ ] Paginado para ir buscando y mostrando los siguientes personajes, 15 personajes por pagina, mostrando los primeros 15 en la primer pagina.

**IMPORTANTE**: Dentro de la Ruta Principal se deben mostrar tanto los characters traidos desde la API como así también los de la base de datos.

**Ruta de detalle del personaje**: debe contener

- [ ] Los campos mostrados en la ruta principal para cada personajes (imagen, nombre, y status)
- [ ] Genero
- [ ] Especie
- [ ] Location

**Ruta de creación de personajes**: debe contener

- [ ] Un formulario **controlado con JavaScript** con los siguientes campos:
  - Nombre
- [ ] Posibilidad de seleccionar/agregar un Genero
- [ ] Posibilidad de seleccionar/agregar un Status
- [ ] Posibilidad de seleccionar/agregar una Especie
- [ ] Posibilidad de seleccionar/agregar una Locacion
- [ ] Botón/Opción para crear un nuevo personajes

> Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del personaje no pueda contener algunos símbolos, que el rating no pueda exceder determinado valor, etc.

## Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ ] personaje con las siguientes propiedades:
  - ID: \* No puede ser un ID de un personaje ya existente en la API
  - Nombre \*
  - Status \*
  - Especie
  - Genero
  - Location \*
- [ ] Status con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de uno a muchos ya que cada personaje sólo puede tener un status mientras que muchos personajes pueden tener el mismo status

**IMPORTANTE**: Pensar como modelar los IDs de los personajes en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en algun personaje, este puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no debería haber ambigüedad en cual se debería mostrar.

## Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

**IMPORTANTE**: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ ] **GET /characters**:
  - Obtener un listado de los personajes
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] **GET /characters?name="..."**:
  - Obtener un listado de las primeros 15 personajes que contengan la palabra ingresada como query parameter
  - Si no existe ningún personaje mostrar un mensaje adecuado
- [ ] **GET /character/{character}**:
  - Obtener el detalle de un personaje en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de personaje
  - Incluir el status asociado
- [ ] **POST /character**:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de personaje por body
  - Crea un personaje en la base de datos, relacionado a su status.
- [ ] **GET /status**:
  - Obtener todos los status de personajes posibles
  - En una primera instancia deberán traerlos desde la api y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
