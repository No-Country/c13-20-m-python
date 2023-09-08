# Documentación de API

Bienvenido a la documentación de la API de Me Sumo App. Aquí encontrarás información sobre los endpoints disponibles en la API y cómo utilizarlos.

## Tabla de Contenidos

- [Endpoints](#endpoints)
  - [Registro de Usuario](#registro-de-usuario)
  - [Inicio de Sesión](#inicio-de-sesión)
  - [Información del usuario con sesión iniciada](#Información-del-usuario-con-sesión-iniciada)
  - [Cerrar Sesión](#cerrar-sesión)

## Endpoints

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
  - Cuerpo de respuesta: `{"message": "Registro exitoso"}`

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





## Uso

Para utilizar la API, realiza solicitudes HTTP a los endpoints correspondientes utilizando las rutas y métodos HTTP especificados anteriormente. Asegúrate de incluir los parámetros de entrada necesarios y los encabezados de autenticación cuando corresponda.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar esta documentación o agregar más información sobre los endpoints, no dudes en hacerlo.

## Licencia

Este proyecto está bajo la licencia [Licencia de Tu Proyecto]. Consulta el archivo LICENSE.md para obtener más detalles.

Este proyecto está bajo la licencia [Licencia de Tu Proyecto]. Consulta el archivo LICENSE.md para obtener más detalles.




