---
{"
  title":".Net en Visual Studio Code", 
  "description":"En esta guias aprenderas a crear proyectos .net desde vsc"
}
---
# Net en Visual Studio Code

Se que como a mi a muchas personas les pudo a ver pasado que Visual Studio era muy pesado para su maquina o simplemente no te gustaba el entorno ni la interfaz de desarrollo.

Pero hay una solución para la mayroia de los casos y es vsc, digo la mayoria y no todos ya que por ejemplo para proyectos winforms o wpf es necesario el preview que ofrece Visual Studio.

![]()

## Instalar DotNet

Primero que nada debes buscar en google dotnet y descargar el SDK para asi podes construir proyectos.

## Creación de un proyecto

Antes de crear un proyecto mencionar que usaremos que puedes usar la terminal bash o powershell para ejecutar los comandos

Si no tienes claro de que tipo quieres que sea puedes ver la lista con el comando:

```powershell
dotnet new --list
```

En mi caso creare un proyecto ASP.NET MVC:

```powerhsell
dotnet new mvc -n MiProyectoAspNetCore
```

## Ejecutar el proyecto

Para poder ejecutar el proyecto debes escribir el comando:

```powerhsell
dotnet watch run
```
o alternativamente si deseas reload en asp:
```powershell
dotnet watch run
```

## Instalar NuGets

Te preguntaras como instalar, y es muy sencillo pero debes tener claro que nuget y el nombre para instalarlo con la consola de administración de paquetes.

Por ejemplo yo instalare Entity Framework

```powershell
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```