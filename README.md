# Movues

## Requisitos

Para el curso sobre [VueJS2](https://vuejs.org/) es necesario tener instalado:

* Cualquier editor como [Atom](https://atom.io/),
    [Sublime](https://www.sublimetext.com/) Text,
    [VSCode](https://code.visualstudio.com/), o cualquier otro editor/IDE
    que nos guste.
* [NodeJS](https://nodejs.org/es/) en su version
    [LTS](https://nodejs.org/es/download/).
* CLI oficial de Vue, [Vue-cli](https://github.com/vuejs/vue-cli). Con el
    podremos generar una app con distintos templates que se nos ofrecen.

## Antes que nada

En este caso, y a lo largo del curso, usaremos el template `webpack` de
`vue-cli`. Este proyecto se ha generado con la instrucción
`vue init webpack movues`, que permite generar un scaffolding del proyecto
acorde al template seleccionado, en este caso, `webpack`. Además, genera una
serie de tareas automáticas como: `dev`, `build`, `unit`, `e2e`, `test`, `lint`
que iremos usando a lo largo del curso, y que ejecutaremos mediante
`npm run 'tarea'` (estas tareas estan especificadas en el fichero `package.json`).

Por otro lado, el CLI hace uso de [vue-loader](http://vue-loader.vuejs.org/en/)
que es un loader para webpack, que nos permite utilizar los ficheros con
extension `.vue`, además de otras opciones que iremos viendo a lo largo del curso.

El CLI nos proporciona 3 entornos de trabajo, `dev`, `prod` y `test`:
* dev nos permite ejecutar nuestra aplicación para desarrollo, aplicando ciertos
    loaders de webpack, usando la app sin minificar y permitiendo el uso del
    `hot-loader`, que permitirá que nuestra web se recarge cuando realicemos
    algún cambio en el código.
* `prod`, que se ejeucta con el script `build`, y nos prepara nuestra aplicación
    para desplegarla o publicarla.
* `test, que se ejecuta con os script `unit`, `e2e`, `test`, y nos pemrite
    ejecutar los test unitarios, o e2e sobre nuestra aplicación.

## Instalación

El proceos de instalación de la app es bastante sencillo, ejecutamos
`npm install` para instalar todas las dependendias, y luego, ejecutamos
`npm run dev` para ejecutar la app en modo desarrollo (con el entorno, y
variables de desarrollo)
