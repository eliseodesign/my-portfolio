---
{"title":"Dockerizar API ASP.Net Core", "description":"Levantar API ASP.NET Core desde contenedor docker"}
---
# Guía para Dockerizar un Proyecto ASP.NET con .NET 7

## **Introducción:**

Docker es una tecnología ampliamente utilizada para empacar, enviar y ejecutar aplicaciones en contenedores. En esta guía, te mostraremos cómo dockerizar un proyecto ASP.NET con .NET 7. Esto facilitará la implementación y la ejecución de tu aplicación en diferentes entornos sin problemas. Sigue estos pasos para dockerizar tu proyecto ASP.NET.

### **Paso 1: Preparación del Entorno:**

Asegúrate de tener Docker instalado en tu máquina. Puedes descargar Docker Desktop para Windows o macOS desde el sitio web de Docker. Para sistemas Linux, sigue las instrucciones en la documentación oficial.

### **Paso 2: Creación de un Dockerfile:**

Un Dockerfile es un archivo de configuración que define cómo se debe construir una imagen de Docker. En la raíz de tu proyecto ASP.NET, crea un archivo llamado `Dockerfile` (sin extensión). Abre este archivo en un editor de texto y agrega las siguientes líneas:

```Dockerfile
# Utiliza la imagen oficial de .NET SDK 7
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copia el archivo del proyecto y restaura las dependencias
COPY Chatbot.csproj .
RUN dotnet restore

# Copia todo el contenido del proyecto y compila la aplicación
COPY . .
RUN dotnet publish -c Release -o out

# Publica la aplicación en una imagen de ASP.NET Core
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .
EXPOSE 80
ENTRYPOINT ["dotnet", "Chatbot.dll"]
```

Este Dockerfile consta de dos partes: una para compilar el proyecto y otra para ejecutarlo. Asegúrate de reemplazar `Chatbot` con el nombre de tu proyecto.

### **Paso 3: Creación de la Imagen de Docker:**

Abre una terminal en la ubicación de tu Dockerfile y ejecuta el siguiente comando para crear la imagen de Docker:

```bash
docker build -t nombre-proyecto-docker .
```

Reemplaza `nombre-proyecto-docker` con el nombre que desees para tu imagen de Docker.

### **Paso 4: Ejecución del Contenedor:**

Una vez que se ha construido la imagen, puedes ejecutar un contenedor Docker con tu aplicación ASP.NET. Utiliza el siguiente comando:

```bash
docker run -p 8080:80 nombre-proyecto-docker
```

Esto ejecutará tu aplicación en el puerto 8080 del host. Puedes cambiar el puerto según tus preferencias.

### **Paso 5: Acceso a la Aplicación:**

Abre un navegador web y navega a `http://localhost:8080` (o el puerto que hayas especificado). Deberías ver tu aplicación ASP.NET ejecutándose en un contenedor Docker.

### **Paso 6: Configuración Adicional en el Program.cs:**

En el archivo `Program.cs` de tu proyecto ASP.NET, puedes realizar configuraciones adicionales, como habilitar CORS y configurar el puerto de escucha. Asegúrate de agregar el código necesario para habilitar el acceso desde otros dominios y configurar el puerto en el entorno de desarrollo.

```csharp
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// ... (otras configuraciones)

// Configuración de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder => builder
            .WithOrigins("http://localhost:3000", "http://tu-otro-frontend.com")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
});

// Configuración de HTTPS
if (builder.Environment.IsDevelopment())
{
    builder.WebHost.UseUrls("http://*:5000");
}

// ... (otras configuraciones)

// En el método Configure
app.UseCors("CorsPolicy");

// ... (otras configuraciones)
```

## **Conclusión:**

Dockerizar tu proyecto ASP.NET con .NET 7 simplifica la implementación y la ejecución de tu aplicación en diferentes entornos. Con un Dockerfile bien configurado y algunas modificaciones en `Program.cs`, tu aplicación estará lista para funcionar en contenedores Docker. Esto ofrece una mayor flexibilidad y portabilidad para tu proyecto.

¡Esperamos que esta guía te haya ayudado a comprender cómo dockerizar tu proyecto ASP.NET con .NET 7!