# 🦕 SIMPLE TODO APP made with  [Deno](https://deno.land) and ReactJS

### Set .env file

* Run ```docker-compose -f "docker-compose.yml" up -d --build``` at root folder to start a MongoDB container.
* Create a .env file at /server
* Copy .env.example content to the new .env file

### Run the server

```
cd server
deno run --allow-net --allow-env --allow-read --allow-write --allow-plugin --unstable app.ts
```

NOTE: the --unstable flag is needed because of the deno_mongo package.

### Run the client

```
cd client
yarn start
```


## Main Deno Packages

* [Oak](https://deno.land/x/oak) - A middleware framework for Deno's http server, including a router middleware.
* [Dotenv](https://deno.land/x/dotenv) - Dotenv handling for deno.
* [deno_mongo](https://deno.land/x/mongo) - deno_mongo is a MongoDB database driver developed for deno, based on rust's official mongodb library package.