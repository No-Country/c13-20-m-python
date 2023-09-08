# Documentación de API

Bienvenido a la documentación de la API de Me Sumo App. Aquí encontrarás información sobre los endpoints disponibles en la API y cómo utilizarlos.

## Tabla de Contenidos

- [Endpoints](#endpoints)
  - [Usuario](#usuario)
    - [Registro de Usuario](#registro-de-usuario)
    - [Inicio de Sesión](#inicio-de-sesión)
    - [Información del usuario con sesión iniciada](#Información-del-usuario-con-sesión-iniciada)
    - [Cerrar Sesión](#cerrar-sesión)
  - [Evento](#evento)
    - [Crear eventos](#Crear-eventos)
    - [Mostrar eventos](#mostrar-eventos)
    - [Mostrar evento específico por ID](#Mostrar-evento-específico-por-ID)
    - [Eliminar un evento](#Eliminar-un-evento)
    - [Editar TODAS las variables de un evento en especifico](#Editar-TODAS-las-variables-de-un-evento-en-especifico)
    - [Editar una variable de un evento en especifico](#Editar-una-variable-de-un-evento-en-especifico)
    - [Categorias disponibles](#Categorias-disponibles)
    - [Filtrado por categoria](#Filtrado-por-categoria)
    - [Filtrado por nombre de usuario de organizador](#Filtrado-por-nombre-de-usuario-de-organizador)
    - [Filtrado por localidad](#Filtrado-por-localidad)
    - [Filtrado por fecha y hora](#Filtrado-por-fecha-y-hora)

# Endpoints 

## Usuario

### Registro de Usuario

- **URL**: `/api/register/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios registrarse en la plataforma.
- **Parámetros de Entrada**:
  - `first_name` (string, opcional): Nombre del usuario.
  - `last_name` (string, opcional): Apellido del usuario.
  - `username` (string): Nombre de usuario del usuario.
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.
- **Respuesta Exitosa**:
  - Código de estado: 201 (Created)
  - Cuerpo de respuesta: `{'message': 'Registration successful','user':`Datos del usuario`,  'token': `token`}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Inicio de Sesión

- **URL**: `/api/login/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios iniciar sesión en la plataforma.
- **Parámetros de Entrada**:
  - `email` (string): Correo electrónico del usuario.
  - `password` (string): Contraseña del usuario.  
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message": "successful login","token":` Bearer token generado`}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 404 (Not found).
    - Cuerpo de respuesta: `{'error': 'Invalid Credentials'}`

### Información del usuario con sesión iniciada

- **URL**: `/api/me/`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint permite a los usuarios autenticados obtener sus datos de perfil.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token JWT válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Datos del usuario (ejemplo: `{"id": 1, "username": "usuario123", "email": "usuario@example.com", ...}`)

### Cerrar Sesión

- **URL**: `/api/logout/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite a los usuarios cerrar su sesión en la plataforma.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token JWT válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message": "successful logout"}`

## Evento

### Crear eventos

- **URL**: `/api/events/`
- **Método HTTP**: `POST`
- **Descripción**: Este endpoint permite crear un evento.
- **Parámetros de Entrada**:
  - `name` (string): Nombre del evento.
  - `description` (string): Descripcion del evento.
  - `capacity` (integer): Capacidad total del evento.
  - `date` (date): Fecha del evento.
  - `virtual` (boolean)(opcional): Decide si el evento sera virtual o presencial.
  - `state` (boolean)(opcional): Decide si el evento se encuentra activo o finalizó
  - `categories` (list): Listado con todas las categorias a las que el evento pertenece.
  - `ticketPrice` (float): Precio del ticket de venta.
  - `event_images` (image)(opcional): Imagen del evento.
  - `location` (string): Localidad donde se realiza el evento.
  - `tickets_sold` (integer): Contraseña del usuario.
- **Respuesta Exitosa**:
  - Código de estado: 201 (Created)
  - Cuerpo de respuesta: `{'message': 'Event was created successfully!','event':`Datos del evento `}`
- **Respuesta en Caso de Error**:
  - Codigo de estado: 400 (Bad request).

### Mostrar eventos

- **URL**: `/api/events/`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint permite mostrar todos los eventos creados hasta el momento.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Datos del evento (ejemplo: `"id":214,"eventHost":{"id":40,"username":"Prueba20"},"name":"DJ Roger Session","description":...`)

### Mostrar evento específico por ID

- **URL**: `/api/events/<pk>`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint permite mostrar un evento especificando su id.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Datos del evento (ejemplo: `"id":216,"eventHost":{"id":40,"username":"Prueba20"},"name":"Feria de Ciencias MDQ","description":...`)
- **Respuesta en Caso de Error**:
  - Código de estado: 404 (Not Found) 
    - Cuerpo de respuesta: `{"error": "Event not found"}`
  - Codigo de estado: 400 (Bad request)
    - Cuerpo de respuesta: `{'error': 'ID user not valid'}`

### Eliminar un evento

- **URL**: `/api/events/<pk>/`
- **Método HTTP**: `DELETE`
- **Descripción**: Este endpoint permite eliminar un evento.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `["message: Event successfully removed!"]`

### Editar TODAS las variables de un evento en especifico

- **URL**: `/api/events/<pk>/`
- **Método HTTP**: `PUT`
- **Descripción**: Este endpoint permite editar todos los valores dentro del evento.
- **Parámetros de Entrada**:
  - `name` (string): Nombre del evento.
  - `description` (string): Descripcion del evento.
  - `capacity` (integer): Capacidad total del evento.
  - `date` (date): Fecha del evento.
  - `virtual` (boolean)(opcional): Decide si el evento sera virtual o presencial.
  - `state` (boolean)(opcional): Decide si el evento se encuentra activo o finalizó
  - `categories` (list): Listado con todas las categorias a las que el evento pertenece.
  - `ticketPrice` (float): Precio del ticket de venta.
  - `event_images` (image)(opcional): Imagen del evento.
  - `location` (string): Localidad donde se realiza el evento.
  - `tickets_sold` (integer): Contraseña del usuario.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"message":"Event updated successfully!","event":`Muestra el evento actualizado`}`
- **Respuesta en Caso de Error**:
  - Código de estado: 404 (Not Found) 
    - Cuerpo de respuesta: `{"error": "Event not found"}`
  - Codigo de estado: 400 (Bad request)

### Editar una variable de un evento en especifico

- **URL**: `/api/events/<pk>/`
- **Método HTTP**: `PATCH`
- **Descripción**: Este endpoint permite editar un valor en especifico dentro del evento.
- **Parámetros de Entrada**:
  - Cualquier parametro que querramos editar, por ejemplo `{"description": "Webinar dictado en vivo por los conferencistas Lucas Simoes y Juan Pablo Muñoz"}` reescribiria el texto guardado en `description` por el nuevo valor que le estamos pasando.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: `{"detail": "Event updated successfully"}`
- **Respuesta en Caso de Error**:
  - Código de estado: 404 (Not Found) 
    - Cuerpo de respuesta: `{"error": "Event not found"}`
  - Codigo de estado: 400 (Bad request)

### Categorias disponibles

- **URL**: `/api/categories`
- **Método HTTP**: `GET`
- **Descripción**: Este endpoint permite visualizar todas las categorias disponibles.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Todos las categorias habilitadas (ejemplo: `[{"id": 1,"name": "Musica"},{"id": 2,"name": "Deportes"},...]`)

### Filtrado por categoria

- **URL**: `/api/events/category/<str:category_name>`
- **Método HTTP**: `GET`
- **Parametros de URL**:
  - `<str:category_name>` (Reemplaza `category_name` con el nombre de la categoria deseada, Musica por ejemplo)
- **Descripción**: Este endpoint permite filtrar los eventos creados por nombre de categoria.
- **Encabezados de Autenticación**:
  - `Authorization: Bearer [token]` (Reemplaza `[token]` con el token JWT válido)
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Todos los eventos que contengan la categoria buscada (ejemplo: `{"id":216,"eventHost":{"id":40,"username":"Prueba20"},"categories":[{"id": 2,"name": "Deportes"},{"id": 10,"name": "Teatro"}],...}`)
- **Respuesta en Caso de Error**:
  - Código de estado: 404 (Not Found) 
  - Cuerpo de respuesta: `{"detail": "Not found."}`

### Filtrado por nombre de usuario de organizador

- **URL**: `/api/events/?eventHost__username=<str:eventHost.username>`
- **Método HTTP**: `GET`
- **Parametros de URL**:
  - `<str:eventHost.username>` (Reemplaza `eventHost.username` con el nombre del organizador)
- **Descripción**: Este endpoint permite filtrar los eventos creados por un organizador en especifico.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Datos de eventos filtrados por un organizador en especifico.

### Filtrado por localidad

- **URL**: `/api/events/?location=<str:location>`
- **Método HTTP**: `GET`
- **Parametros de URL**:
  - `<str:location>` (Reemplaza `location` con el nombre de la localidad deseada, Tandil por ejemplo)
- **Descripción**: Este endpoint permite filtrar los eventos creados por su localidad.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Datos de eventos filtrados por la localidad especifica.

### Filtrado por fecha y hora

- **URL**: `/api/events/?date=<str:date>`
- **Método HTTP**: `GET`
- **Parametros de URL**:
  - `<str:date>` (Reemplaza `date` con el nombre de la fecha deseada, 2023-09-14T11:47:00Z por ejemplo)
- **Descripción**: Este endpoint permite filtrar los eventos creados por su fecha y hora.
- **Respuesta Exitosa**:
  - Código de estado: 200 (OK)
  - Cuerpo de respuesta: Datos de eventos filtrados por la fecha/hora especifica.

## Uso

Para utilizar la API, realiza solicitudes HTTP a los endpoints correspondientes utilizando las rutas y métodos HTTP especificados anteriormente. Asegúrate de incluir los parámetros de entrada necesarios y los encabezados de autenticación cuando corresponda.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta documentación o agregar más información sobre los endpoints, no dudes en hacerlo.

## Licencia

Este proyecto está bajo la licencia [Licencia de Tu Proyecto]. Consulta el archivo LICENSE.md para obtener más detalles.
