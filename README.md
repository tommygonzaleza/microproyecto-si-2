This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# **MICRO-PROYECTO 2**

En una situación hipotética, usted es amigo de Eustaquio; Eustaquio es el presidente del club de Videojuegos y le gustaría hacer una página web para atraer más personas a su club.

Eustaquio tiene un conjunto de requerimientos:

- Cada club tiene un nombre, una descripción, y un listado de videojuegos.
- Cada videojuego tiene un título, un género, una descripción.
- Debe permitir a los usuarios tener acceso al listados de los juegos que ofrece dicho club.
- Debe permitir a los usuarios hacer una búsqueda de todos los juegos del sistema.
- Por temas de escalabilidad, un usuario puede ser creado sin un club inicialmente
    - Para ingresar a un club, deberá registrar una membresía (una afiliación o suscripción) en la base de datos para dicho club.
    - Dicho usuario debe tener, nombre y apellido, Username, email, contraseña y videojuego preferido
- Un usuario deberá poder acceder a vista de su perfil para modificar su información sea nombre, apellido, videojuego preferido o retirarse de un club
- El listado de la información de videojuegos y clubes será proporcionado desde el inicio y se deben precargar en la base de datos. **Véase la última sección de este documento para los datos en formato JSON que se deben cargar.**

**REQUERIMIENTOS FUNCIONALES**

**Vista de registro**:

Esta vista es importante ya que le permite al usuario entrar a la plataforma. Si el usuario no está registrado y no inicia sesión no puede acceder al listado de juegos disponibles, entonces esta página debe mostrar un formulario en donde el usuario ingrese sus datos personales tales como nombre, correo electrónico y contraseña para poder registrarse en la plataforma. Además, deben agregarse otros métodos de registro tales como Google, Twitter, etc.  (al menos uno).

**Vista de inicio de sesión**:

En esta vista se debe mostrar un formulario para que el usuario pueda entrar a la plataforma haciendo uso de correo electrónico y contraseña. Además deben agregarse otros métodos de autenticación tales como Google, Twitter, etc.

**Vista de inicio (página principal)**:

Esta página únicamente puede ser visitada cuando un usuario ha iniciado sesión correctamente, en caso de que alguien intente entrar a esta sección sin estar autenticado, se debe redirigir inmediatamente a la vista de **inicio de sesión**.

Aquí el usuario debe encontrar el listado de los clubes.  Se debe mostrar al usuario los clubes de una forma agradable donde se pueda ver toda la información referente al mismo, incluyendo si el usuario ya está suscrito al club o no. Además, al dar click sobre un club, se debe redirigir al usuario hacia la página de detalles del mismo.

**Vista detalles de un club**:

Esta página, al igual que la anterior, es privada. Únicamente puede mostrar el detalle de un club si hay un usuario autenticado.

Aquí se debe mostrar toda la información del club y se debe permitir, a través de un botón, que el usuario se suscriba (solicite una membresía) a dicho club. En caso de que el usuario ya esté registrado en el club, el botón pasa a ser un botón para retirarse del club.

Se deben mostrar los detalles de todos los juegos que incluye el club.

**Vista de buscador**:

En esta sección el usuario debe encontrar una barra de búsqueda que le permita ingresar el nombre del juego que quiere buscar y al ejecutar la búsqueda, deben aparecer los juegos que coincidan con dicho criterio.

## **Registro de usuarios:**

Los usuarios deben poder registrarse en la página web proporcionando su nombre, apellido, nombre de usuario, email, contraseña y videojuego preferido.

La información del usuario debe almacenarse en la base de datos de Firebase Firestore.

## **Acceso a los juegos del club:**

Los usuarios registrados deben poder acceder a los juegos que ofrece el club de videojuegos.

Se deben mostrar los juegos disponibles junto con su información, como nombre, género y descripción.

## **Gestión de clubes:**

Los usuarios deben poder unirse a un club existente.

Para unirse a un club, un usuario debe solicitar una afiliación (membresía) entrando a la página del club y presionando el botón de suscripción.

La información de la membresía, relacionando el ID del club con el usuario, debe almacenarse en la base de datos.

## **Perfil de usuario:**

Los usuarios deben poder acceder a su perfil para ver y modificar su información personal.

Deben poder editar su nombre, apellido y videojuego preferido.

Los usuarios deben poder retirarse de un club al que están afiliados.

## **Interfaz de usuario:**

La aplicación debe tener una interfaz de usuario clara y fácil de usar.

La interfaz debe ser responsive, adaptándose a diferentes dispositivos como teléfonos móviles, tabletas y computadoras de escritorio.

Se deben aplicar estilos con CSS para hacer que la aplicación sea visualmente atractiva y coherente.

Se debe utilizar React para estructurar el contenido de la aplicación, incluyendo formularios, tablas y elementos visuales.

Se debe utilizar Firebase como plataforma de desarrollo y Firestore como base de datos para almacenar la información de los usuarios, clubes y membresías.

La aplicación debe ser capaz de leer y escribir datos en la base de datos de Firestore.

## **Esquema de Base de Datos**

https://lh7-us.googleusercontent.com/4njFoUfq_BItch7SWBBIYKw0MmIrYKOdDvwjV11YQa_Iq1ed1C6RgA-sLQIMxZzNcP00PggxGmhPGhUTatVbE7V-bjHT2m4vgR8ysO6oUVApTfogMHlYwDNT-iWbehcOtgbDVlwC-K7WEVjv3iZbBwU

**Nota:**

Los ID de Videojuegos y Clubes serán proporcionados junto con los datos iniciales.

El ID de cada Usuario corresponde a su identificador de usuario (UID) generado por Firebase Auth al registrarse.

**CONDICIONES DE ENTREGA**

### **Control de versiones y alojamiento**

- Utilizar git para el control de versiones del proyecto.
- Subir el proyecto a un repositorio de GitHub. **Se debe evidenciar la participación de ambos integrantes.**
- Debe utilizar React como librería de desarrollo web.
- Debe utilizar React Router o librerías similares para habilitar la navegación por URL dentro del sistema.
- Debe utilizar los componentes de Firebase para alojar el sistema:
    - Publicar la página web utilizando Firebase Hosting.
    - Gestionar el inicio de sesión y registro con Firebase Auth.
    - Todos los datos de la página (usuarios, clubes y membresías) deben almacenarse en una base de datos Cloud Firestore. **Recuerde que no se deben guardar contraseñas en esta base de datos**

## **Entrega**

- La actividad es en parejas**,** cualquier intento de plagio será penalizado con 0
- El micro-proyecto comienza el día viernes a las 9:00 a.m. y finaliza a las 11:59 p.m. el día domingo. Por lo tanto, su entrega deberá ser hecha dentro de ese tiempo.
- Debe enviar lo siguiente:
    - Link del repositorio con el proyecto
    - Link de la página publicada con Firebase Hosting
- Al correo de su respectivo preparador:
    - [goncalves.andres@correo.unimet.edu.ve](mailto:goncalves.andres@correo.unimet.edu.ve) (sección 1)
    - [michelle.villegas@correo.unimet.edu.ve](mailto:michelle.villegas@correo.unimet.edu.ve) (sección 2)
    - [sergio.suarez@correo.unimet.edu.ve](mailto:sergio.suarez@correo.unimet.edu.ve) (sección 3)

## **Evaluación**

- Estructura de componentes de React: 1 pto
- Responsive: 1 pts
- Estructura del Router: 1 pto
- Funcionalidad: (10 pts)
    - Registro de nuevos usuarios e inicio de sesión: 2 pts
    - Gestión correcta de la membresía (creación y retiro): 2 pts
    - Mostrar información de los clubes: 2 pts
    - Buscador de juegos: 2 pts
    - Página de perfil: 2 pts
- Configuración de Firebase: (4 pts)
    - Autenticación con correo y contraseña: 1pto
    - Autenticación con otro proveedor (Google, Facebook…): 1 pto
    - Base de datos Firestore: 2 pts
- Apreciación (esfuerzo y estética): 3 pts

**En caso de que el proyecto no esté alojado en Firebase Hosting, se evaluará con una puntuación máxima de 10 puntos.**
