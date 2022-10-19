
* iniciar el proyecto de node.js  en la carpeta backend ==> "npm init -y"
* Instalar las dependecias ==> "npm install express mongoose morgan donenv cors"
* Instalar las dependecias de desarrollo ==> "npm install typescript ts-node-dev @types/express @types/morgan @types/cors"

* Crear el archivo .env para las variables de entorno.
* Agregar en el archivo package.json dentro de "script":{ "dev": "ts-node-dev src/index.ts"} y correr el servidor con el comando ==> "npm run dev" que se actualicen los cambios con el servidor en ejecucion.

* Crear la carpeta src donde van a estar todos los archivos fuentes.
* Crear dentro de la carpeta src los archivos index.ts, server.ts y database.ts
* Crear dentro de la carpeta src la caperta models y dentro de models el archivo product.model.ts
* Crear dentro de la carpeta src la caperta controlllers y dentro de controllers el archivo product.controller.ts
* Crear dentro de la carpeta src la caperta routes y dentro de routes el archivo product.routrs.ts

* Crear el archivo tsconfig.json ==> "npx tsc --init"
* Habilitar las siguientes configuracion en el archivo tsconfig.json:
 *  {
    "compilerOptions": {
        "target": "ES2021",
        "module": "commonjs",
        "outDir": "dist",
        "sourceMap": true,
        "esModuleInterop" : true,
        "strict": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
* Agregar en el archivo package.json dentro de "script":{ "build": "tsc"} y ejecuta el siguiente comando "npm run build" para traspilar todo el codigo de typescript a javascript y lo almacena en la carpeta dist que se genera utomaticamente.
* Ejecutar "node dist" o "node dist/index.js" para correr el servidor desde el codigo javascript. 

* Crear el archivo .gitignore especial de node.js para ignorar los archivos o carpetas que no se suben al repositorio o a produccion.
 
