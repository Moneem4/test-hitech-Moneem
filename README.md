
# Nest Movies API

A simple movies API built with NestJS . It serves movies with genres and staff, persisting data using PostgreSQL.


## Installation
To install this API and run it on your own computer, you'll need NodeJS and NPM installed beforehand.

Then, open the folder containing this code and run on terminal:

```
$ npm i
```

After installing all dependencies, you must point the API to a database, preferrably MySQL, but you can use other SQL databases too.

Copy the file `.env.example` to a new `.env`.
- Tip: You can do so using the terminal: 
```
cp .env.example .env
```

Then, fill in the spaces left with your credentials as below:

```
DATABASE_URL= "postgresql://user:password@serverAdress:port/db_name"
```



When you're done setting up the `.env` file, run: 

```
npx prisma migration dev --name init
```

This will make Prisma create the tables and relationships on your database while also creating the Prisma Client and all the methods necessary to CRUD endpoints.

## Running the app

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints

### Movies Endpoints

```
##List All Movie @GET
url/movie/listMovie

##Movie By ID @GET
url/movie/oneMovie/{id}
```
```
##Create Movie @POST
url/movie/createMovie


```
##Update Movie @PATCH
url/movie/updateMovie/{id}




```
```
##Delete Movie By ID @DELETE
url/movie/deleteMovie/{id}


```

### Genre Endpoints

```
##List All Genre @GET
url/genre/listGenre

##List Genre By ID @GET
url/genre/oneGenre/{id}
```

```
##Create @POST
url/genre/createGenre

#Example:
{
	"name": "Humour"
}
```

```
##Update @PATCH
url/genre/update/:id

#Example
{
	"name": 1
}
```

```
##Delete Genre By ID @DELETE
url/genre/deleteGenre/{id}
###########
#TEST
#Set up Swagger
Swagger is a tool to document your API using the OpenAPI specification. Nest has a dedicated module for Swagger, which you will be using shortly.

Get started by installing the required dependencies:

npm install --save @nestjs/swagger swagger-ui-express
While the application is running, open your browser and navigate to http://localhost:3000/api. You should see the Swagger UI.
#N.B : All the endpoint of movies and genres are authentificated so please first , register a user , login ,take the token provided and put it in the "authorise" section on top of page in the url