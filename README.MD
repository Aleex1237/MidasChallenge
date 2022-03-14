# Challenge Midas

API realizada como parte del challenge Back End de Midas.

API realizada en NodeJs, sequelize como ORM, JWT para el inicio de sesión, bcrypt para el encriptado de contraseñas, etc...

## Comandos para correr el proyecto.
  -----------------   ------------------------------------------------------
| Comando            | Descripcion                                            |
| -----------------  | ------------------------------------------------------ |
| npm i              | Instalar las dependecias del proyecto                  |
| npm run db:up      | Ejecutar el archivo Docker compose para la bd          |
| npm run db:migrate | Para migrar tablas a la base de datos                  |
| npm run db:mysql   | Para interactuar con la base de datos mediante consola |
| nodemon            | Para correr el proyecto en desarrollo                  |
  -----------------   ------------------------------------------------------
## Como probar la API

    - La Api fue probada en Postman. Para poder probar la Api se deberá ejecutar el archivo Starwars.postman_collection.json con Postman.
    - Para realizar pedidos a la Api nos registraremos en el endpoint POST register y luego deberemos logearnos en POST login. 
    - Esta ultima ruta nos devolverá un token, el cual copiaremos, iremos en la pestaña Authorization y en type seleccionaremos la opción Bearer Token e insertaremos el token obtenido. 
    - Deberemos insertar el Token en todos los endpoints que sean de movies.
