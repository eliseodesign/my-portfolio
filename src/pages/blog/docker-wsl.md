---
{"title":"Instalar Docker en windows", "description":"Guía basica para instalar docker en ubunto desde wsl"}
---
# Instalar Docker en WSL ubuntu

## Instalar WSL

Primero necesitas WSL, abre `powershell` como administrador y ejecuta

```cmd
wsl --install
```

o puedes ver la lista de distros disponibles y elejir otra

```cmd
wsl --list --online
wsl --install debian
```

Probablemente debas reinicar el PC, al cargar se abrira tu distro y te pedira un **usuario** y **contraseña**

---

## Configuraciones en WSL

Abre tu distro en WSL, puedes hacerlo tipeando `wsl` en cmd o powershell

1. Actualiza los paquetes existentes en el sistema:

   ```cmd
   sudo apt update
   ```

2. Asegúrate de tener instaladas las herramientas necesarias para permitir que apt utilice repositorios a través de HTTPS y descargue paquetes usando HTTPs:
   ```bash
   sudo apt install apt-transport-https ca-certificates curl software-properties-common
   ```

---

## Instalar Docker

1. Descarga e importa la clave GPG oficial de Docker ejecutando el siguiente comando:

   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   ```

2. Agrega el repositorio de Docker a las fuentes de apt ejecutando el siguiente comando:

   ```bash
   echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

3. Actualiza los paquetes de apt nuevamente para incluir el nuevo repositorio de Docker:

   ```bash
   sudo apt update
   ```

4. Instala Docker ejecutando el siguiente comando:
   ```bash
   sudo apt install docker-ce docker-ce-cli containerd.io
   ```

---

## Para finalizar

1. Cierra la terminal y vuelve abrirla

2. Verifica que Docker se haya instalado correctamente ejecutando el siguiente comando para obtener la versión de Docker instalada:
   ```bash
   docker --version
   ```
3. Ahora puedes ejecutar algunos comandos pero necesitas agregar permisos a tu usuario

   ```bash
   sudo usermod -aG docker $USER
   ```
   
> Si no le gusto, instale Docker Desktop 🤞😉 