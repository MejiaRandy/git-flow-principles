# git-flow-principles

I'll be using Git principles to work with this project using different branches to work beside the master branch for fixes, updates, etc.

Git Flow is the main topic for this homework using all the topics learned from the git basics video we were given, here's the video:  
[Git y Github | Curso Práctico de Git y Github Desde Cero](https://www.youtube.com/watch?v=HiXLkL42tMU&t=966s&ab_channel=Fazt) - Fazt

## Cuestionario

1- ¿Qué es Git?
  Git es un sistema de control de versiones de código abierto
  ampliamente utilizado para el desarrollo de software. Fue creado en
  2005 por Linus Torvalds como una alternativa al anterior sistema de
  control de versiones de Linux.
  
  Git se utiliza para rastrear y administrar cambios en el código fuente y
  otros archivos. Permite a los desarrolladores trabajar en equipo en el
  mismo proyecto, realizar cambios de forma independiente y fusionarlos
  en una sola versión coherente. Los cambios se realizan en ramas
  separadas y se pueden combinar mediante la creación de solicitudes
  de extracción.
  
  Git se utiliza ampliamente en la comunidad de desarrollo de software
  debido a su eficacia para colaborar en proyectos de código abierto y
  privados. Además, cuenta con una amplia documentación y una
  comunidad activa que proporciona soporte y soluciones a los
  problemas encontrados. Git también es compatible con múltiples
  plataformas y sistemas operativos, lo que lo hace versátil y accesible
  para su uso en una variedad de entornos de desarrollo.
  
2. ¿Para qué funciona el comando Git Init?
  El comando git init se utiliza para inicializar un nuevo repositorio de Git
  en un directorio específico. En otras palabras, crea un nuevo repositorio
  de Git vacío en la ubicación actual del directorio.
  
  Cuando se ejecuta git init, se crea una sub carpeta oculta llamada ".git"
  en el directorio raíz del proyecto. Esta carpeta contiene todos los
  archivos necesarios para que Git funcione, incluidos los registros de
  seguimiento de versiones, la configuración y los metadatos.
  
  Una vez que se ha ejecutado git init, se pueden realizar varias acciones
  para comenzar a trabajar con Git en el repositorio, como agregar y
  confirmar archivos, crear ramas y fusionar ramas.
  
3. ¿Qué es una rama?
  En Git, una rama es una línea de desarrollo independiente que se deriva
  del historial de confirmaciones principal, o rama principal (también
  conocida como rama "master" en algunos casos). Las ramas permiten a
  los desarrolladores trabajar en diferentes características, soluciones de
  errores, experimentos, etc., de forma independiente sin afectar el flujo de
  trabajo de otros desarrolladores en el mismo proyecto.
  
  Cada rama en Git tiene su propio conjunto de confirmaciones únicas,
  que incluyen cambios, adiciones o eliminaciones de archivos. Cuando
  se crea una rama nueva, se toma una copia exacta de la rama principal
  en ese momento, lo que permite que los desarrolladores realicen
  cambios y pruebas sin afectar la rama principal.
  
  Las ramas en Git también permiten la fusión de código entre diferentes
  ramas. Por ejemplo, una vez que un desarrollador completa una
  característica en una rama, puede fusionar los cambios en la rama
  principal para que otros desarrolladores puedan acceder a ellos.
  
  Las ramas son una parte fundamental del flujo de trabajo de Git y
  permiten a los equipos de desarrollo trabajar de manera más eficiente y
  colaborativa en proyectos de software.
  
4. ¿Cómo saber en qué rama estoy?
  Para saber en qué rama te encuentras actualmente en Git, puedes
  utilizar el comando git branch. Este comando lista todas las ramas
  disponibles en tu repositorio local y muestra con un asterisco (*) la rama
  actual en la que te encuentras.
  
  <img src="/images/gitbranch1">
  
  Esto mostrará una lista de todas las ramas en tu repositorio, con el
  asterisco indicando la rama actual en la que te encuentras. Por ejemplo,
  si estás actualmente en la rama "develop", la salida del comando se
  verá así:
  
  <img src="/images/gitbranch2">
  
  En este ejemplo, el asterisco (*indica que la rama "develop" es la rama
  actual. Si deseas cambiar a otra rama, puedes utilizar el comando git
  checkout seguido del nombre de la rama a la que deseas cambiar. Por
  ejemplo:
  
  <img src="/images/gitbranch3">
