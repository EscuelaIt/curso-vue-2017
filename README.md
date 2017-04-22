# Movues

## Requisitos

Para el curso sobre [VueJS2](https://vuejs.org/) es necesario tener instalado:

* Cualquier editor como [Atom](https://atom.io/),
    [Sublime](https://www.sublimetext.com/) Text,
    [VSCode](https://code.visualstudio.com/), o cualquier otro editor/IDE
    que nos guste.
* [NodeJS](https://nodejs.org/es/) en su versión
    [LTS](https://nodejs.org/es/download/).
* CLI oficial de Vue, [Vue-cli](https://github.com/vuejs/vue-cli). Con el
    podremos generar una app con distintos templates que se nos ofrecen.

## Instalacion

Para instalar todas las dependencias deberemos utilizar `npm` o `yarn`.

Ejecutaremos

```bash
> npm install
```
ó
```bash
> yarn
```

Dependiendo del sistema de gestión de paquetes que usemos, usaremos una
instrucción, u otra.

## Antes que nada

En este caso, y a lo largo del curso, usaremos el template `webpack` de
`vue-cli`. Este proyecto se ha generado con la instrucción
`vue init webpack movues`, que permite generar un scaffolding del proyecto
acorde al template seleccionado, en este caso, `webpack`. Además, genera una
serie de tareas automáticas como: `dev`, `build`, `unit`, `e2e`, `test`, `lint`
que iremos usando a lo largo del curso, y que ejecutaremos mediante
`npm run 'tarea'` ó `yarn run 'tarea'` (estas tareas están especificadas en el fichero `package.json`).

Por otro lado, el CLI hace uso de [vue-loader](http://vue-loader.vuejs.org/en/)
que es un loader para webpack, que nos permite utilizar los ficheros con
extension `.vue`, además de otras opciones que iremos viendo a lo largo del curso.

El CLI nos proporciona 3 entornos de trabajo, `dev`, `prod` y `test`:
* dev nos permite ejecutar nuestra aplicación para desarrollo, aplicando ciertos
    loaders de webpack, usando la app sin minificar y permitiendo el uso del
    `hot-loader`, que permitirá que nuestra web se recargue cuando realicemos
    algún cambio en el código.
* `prod`, que se ejecuta con el script `build`, y nos prepara nuestra aplicación
    para desplegarla o publicarla.
* `test, que se ejecuta con os script `unit`, `e2e`, `test`, y nos permite
    ejecutar los test unitarios, o e2e sobre nuestra aplicación.

## Instalación

El proceso de instalación de la app es bastante sencillo, ejecutamos
`npm install` para instalar todas las dependencias, y luego, ejecutamos
`npm run dev` para ejecutar la app en modo desarrollo (con el entorno, y
variables de desarrollo)

## Sobre la clase

En este clase hablamos sobre las distintas formas que tenemos de conectarnos a
servicios externos, como la API de [OMDB](http://www.omdbapi.com/). Para esta
clase veremos casos de uso con la propia API de HTML5
[fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) y con
librerías externas a Vue, como [jQuery](http://api.jquery.com/jquery.ajax/).
Además, utilizaremos plugins propios para Vue como
[Vue-resource](https://github.com/pagekit/vue-resource),
[Vue-axios](https://github.com/imcvampire/vue-axios) y nos conectaremos a
[Firebase](https://firebase.google.com) mediante el plugin de Vue,
[vuefire](https://github.com/vuejs/vuefire).

Por último, en la clase hicimos un repaso del nuevo protoclo de comunicaciones
que esta pisando fuerte en el mercado web, [GraphQL](http://graphql.org/learn/),
 y explicamos como se usa medinate la
[GraphQL API de Github](https://developer.github.com/early-access/graphql/),
y cual es el plugin mas conocido para Vue,
[Vue-apollo](https://github.com/Akryum/vue-apollo).

### Ejemplo que utilizamos para la GprahQL API de Github

Obtener todos watchers, y información de este repositorio, publicado bajo
EscuelaIt.

```
query ($owner: String!, $name: String!, $first: Int) {
  repository(owner: $owner, name: $name) {
    name
    description
    path
    isFork
    license
    watchers (first: $first) {
      nodes {
        name
        company
        bio
        path
      }
    }
  }
}
```

```
{
  "owner": "EscuelaIt",
  "name": "curso-vue-2017",
  "first": 10
}
```
