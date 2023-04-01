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
  
  ![Screenshot](/assets/images/gitbranch1.png)
  
  Esto mostrará una lista de todas las ramas en tu repositorio, con el
  asterisco indicando la rama actual en la que te encuentras. Por ejemplo,
  si estás actualmente en la rama "develop", la salida del comando se
  verá así:
  
  ![Screenshot](/assets/images/gitbranch2.png)
  
  En este ejemplo, el asterisco (*indica que la rama "develop" es la rama
  actual. Si deseas cambiar a otra rama, puedes utilizar el comando git
  checkout seguido del nombre de la rama a la que deseas cambiar. Por
  ejemplo:
  
  ![Screenshot](/assets/images/gitbranch3.png)

5. Quién creó Git?

  Git fue creado por Linus Torvalds, el mismo creador del kernel de Linux.
  En el año 2005, Torvalds inició el desarrollo de Git como una herramienta
  de control de versiones para el desarrollo del kernel de Linux.
  
  6. Cuáles son los comandos más esenciales de Git?
  Hay varios comandos esenciales en Git que son fundamentales para
  trabajar con control de versiones. A continuación se presentan algunos
  de los comandos más utilizados en Git:
  
  1. git init: Este comando se utiliza para inicializar un nuevo repositorio
  de Git en un directorio.
  
  2. git clone: Este comando se utiliza para crear una copia de un
  repositorio Git existente en una nueva ubicación.
  
  3. git add: Este comando se utiliza para agregar archivos al área de
  preparación (staging area) para ser incluidos en la próxima
  confirmación.
  
  4. git commit: Este comando se utiliza para crear una nueva
  confirmación con los archivos del área de preparación (staging
  area).
  
  5. git push: Este comando se utiliza para subir los cambios locales en
  un repositorio local a un repositorio remoto.
  
  6. git pull: Este comando se utiliza para descargar y fusionar los
  cambios remotos en un repositorio local.
  
  7. git branch: Este comando se utiliza para listar, crear o eliminar
  ramas.
  
  8. git checkout: Este comando se utiliza para cambiar entre ramas o
  restaurar archivos a una versión anterior.
  
  9. git merge: Este comando se utiliza para fusionar una rama con
  otra rama activa.
  
  10. git status: Este comando se utiliza para mostrar el estado actual
  del repositorio, incluyendo los archivos que se han modificado,
  eliminado o agregado.

7. ¿Qué es Git Flow?

  Git Flow es una estrategia de flujo de trabajo o modelo de ramificación
  para Git, que fue desarrollado por Vincent Driessen. Este modelo
  establece una serie de reglas y pautas para administrar y organizar las
  ramas de Git en un proyecto.

  El modelo Git Flow se basa en dos ramas principales: master y develop.
  La rama master contiene la versión más estable del proyecto y es
  utilizada para producir lanzamientos oficiales, mientras que la rama
  develop se utiliza para integrar todas las características nuevas y
  cambios realizados en el proyecto.

  Además de estas dos ramas principales, el modelo Git Flow utiliza una
  serie de ramas adicionales para facilitar el desarrollo de nuevas
  características y la solución de problemas. Algunas de estas ramas
  adicionales incluyen:

  feature: Una rama utilizada para desarrollar nuevas características en el
  proyecto.
  release: Una rama utilizada para preparar y probar la versión actual del
  proyecto para su lanzamiento.
  hotfix: Una rama utilizada para solucionar problemas críticos en la
  versión actual del proyecto.
  El uso de Git Flow proporciona una estructura clara y organizada para el
  desarrollo de software, lo que puede ayudar a mantener el control de
  versiones del proyecto de manera más eficiente y eficaz.
  Además, al utilizar ramas separadas para el desarrollo de nuevas
  características y la solución de problemas, los desarrolladores pueden
  trabajar de manera más aislada y reducir el riesgo de conflictos y
  errores en el código.
  
8. ¿Qué es Trunk Based Development?

  Trunk Based Development (TBD) es un modelo de desarrollo de software
  en el que todas las ramas del proyecto se basan en una única rama
  principal, a menudo llamada trunk o main. En lugar de crear ramas
  separadas para cada nueva característica o corrección de errores, los
  desarrolladores realizan todos sus cambios directamente en la rama
  principal y utilizan técnicas de integración continua y entrega continua
  para garantizar que los cambios se prueben y se publiquen de manera
  continua y rápida.

  A diferencia de otros modelos de ramificación como Git Flow, Trunk
  Based Development se centra en mantener una única rama principal,
  con el objetivo de mantener un proceso de desarrollo más simple y
  eficiente. Al mantener un historial de cambios más simplificado, los
  desarrolladores pueden reducir el riesgo de conflictos y errores en el
  código y pueden tomar decisiones más informadas sobre la priorización
  de nuevas características y correcciones de errores.

  Sin embargo, Trunk Based Development no es adecuado para todos los
  proyectos y requiere un conjunto diferente de herramientas y prácticas
  para funcionar de manera efectiva. Por ejemplo, los desarrolladores
  deben confiar en las pruebas automatizadas y los sistemas de
  integración continua para detectar y corregir problemas de forma
  rápida y precisa. Además, los desarrolladores también deben ser
  capaces de realizar cambios en pequeñas iteraciones, para que los
  cambios se puedan probar y publicar de forma continua.
