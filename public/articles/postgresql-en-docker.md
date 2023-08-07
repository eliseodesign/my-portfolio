---
{"title":"PostgreSQL con docker compose y bash", "description":"Aprende a lenvatar una db postgree y conectarte con linea de comandos"}
---
## PostgreSQL con Docker Compose y Bash
### 1. Crear archivo `docker-compose.yml`

Crear un archivo llamado `docker-compose.yml` y agregar el siguiente contenido:

```yaml
version: '3.8'
services:
  db:
    image: postgres:latest
    container_name: my_postgres_db
    restart: always
    ports:
      - "5432:5432"
    environment:
      POSTGRES_DB: database_name
      POSTGRES_USER: username
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 2. Levantar el contenedor

Ejecutar el siguiente comando para levantar el contenedor:

```bash
docker-compose up -d db
```

Esto descargará la imagen de PostgreSQL desde Docker Hub y creará y ejecutará un contenedor con la configuración especificada en el archivo `docker-compose.yml`.

### 3. Abrir bash

Una vez que el contenedor esté en funcionamiento, puedes abrir una terminal y ejecutar el siguiente comando para acceder al bash del contenedor:

```bash
docker exec -it my_postgres_db bash
```

`my_postgres_db` es el nombre que le hemos dado al contenedor con la opción `container_name` en el archivo `docker-compose.yml`. Puedes reemplazarlo con el nombre que hayas elegido para tu contenedor.

### 4. Conectarse a la base de datos

Dentro del bash del contenedor, puedes conectarte a la base de datos PostgreSQL utilizando el comando `psql`. Ejecuta el siguiente comando:

```bash
psql -h localhost -U username -d database_name
```

Reemplaza `username` y `database_name` con los valores que hayas configurado en el archivo `docker-compose.yml` para el usuario y el nombre de la base de datos.

### 5. Ejecutar comandos de `psql`

Una vez conectado a la base de datos, puedes ejecutar comandos de `psql` para administrar y consultar la base de datos. Aquí tienes algunos comandos útiles:

- `\l`: Lista todas las bases de datos disponibles.
- `\c <database>`: Conecta a una base de datos específica.
- `\dt`: Lista todas las tablas de la base de datos actual.
- `\du`: Lista todos los roles de la base de datos.
- `\e`: Abre el editor de texto predeterminado para escribir una consulta. Puedes usar esto para escribir consultas SQL más largas en un editor externo.
- `\q`: Sale del cliente `psql` y cierra la conexión.
- `\h`: Muestra una lista de comandos disponibles.
- `\?`: Muestra una lista de comandos de ayuda disponibles.

Con estos comandos, podrás administrar y consultar tu base de datos PostgreSQL desde el bash del contenedor.

¡Listo pana! Ahora puedes crear y conectarte a un contenedor de PostgreSQL utilizando Docker Compose y ejecutar comandos de `psql` o consultas SQL desde el bash del contenedor. Recuerda que al finalizar, puedes detener el contenedor utilizando `docker-compose down`.