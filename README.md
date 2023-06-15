## Levantar el Proyecto con Docker

### Para construir la imagen

```
docker build -t my-cra-app .
```

### Para correr el contenedor con la imagen creada

```
docker run -p 3000:3000 -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules my-cra-app
```
