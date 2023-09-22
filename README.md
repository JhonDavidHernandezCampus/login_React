# React + Vite
## creacion del proyecto de react
``` npm create vite ```

### intalacion y configuracion de dependencias

- ``` npm i ```

``` npm i -E -D save-dev jest ```
- configuramos el package.json para poder correr el test 

```json
 "scripts": {
    "test": "jest --watchAll", <--------
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },

```

##### configuramos el archivo babel.config.js

- agregamos esto en el archivo babal.config.js
```js 
module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { esmodules: true } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
};
```

##### configuramos el archivo jest.config.cjs
```js
    module.exports = {
        testEnvironment:'jest-environment-jsdom',
        setupFiles:["./jest.setup.js"]
    }
```
### instalamos la libreria 

``` npm i -E -D prop-types ```
- Esta es una libreria que me permite definir que datos y que tipos de datos puedo resivir en los props que son como los parametros que se le pasan a la funciones o componentes


## Funcionamiento

- Usuarios registrados Actuslmente por defecto
```json
{
    "username": "jhonhernandez",
    "password": "3224757531"
},
{
    "username":"Migel",
    "password":"MigelTrainer"
}
```

```Nota```: Coloca alguno de estos usuarios en los campos de usuario y contraseña
La respuesta la resiviras por consolacomo un json de la sigiente manera


```json
{
    "status": 200, 
    "sesion": false, 
    "message": "Usuario inixistente"}
```