# Truck Stop

## About

This project was created during our time as students of Code Chrysalis. Truck Stop uses a PostGreSQL database that's connected to the GraphQL library. Truck Stop will allow users to not only see the truck stops and restaurants on the map, but also the restaurant information as well. The Vue front-end application allows data to display in the browser.

## Web Demo

[Truck Stop Web Demo on Heroku](https://truckstop-project-app.herokuapp.com/)\
[Video Demo](https://www.youtube.com/shorts/d1Ykj2bbtSY)

## Set up

#### Postgres

You will need Postgres installed. Download and install the [PostgresApp](https://postgresapp.com/) and verify its working by running the command `psql` in your terminal.

#### Installing Dependencies and Startup

After forking and cloning the repository, please do the following:

To install dependencies:

```
    npm install
```

- Add a .env.localexample file to .env.local and replace the below values.

```
PORT=9000
DB_NAME=truckstop
DB_USER="your_database_user"
DB_PASSWORD="your_database_password"
```

- Create a PostgreSQL database called "truckstop" locally.

To run the server:

```
    npm run hack:server
```

- Once the server is running you can open `localhost:9000` in your browser.

To run the app in your browser:

```
    npm run hack:client
```

- Once it is running you can open `localhost:8080` in your browser.

#### Migrations

- Run the following command in the terminal to create tables in the PostgreSQL database:

```
npm run migrate
```

#### Seed

- To fill the tables in the PostgreSQL database with initial data, run the following command in the terminal:

```
npm run seed
```

## Front End

<img width="619" alt="Screen Shot 2022-05-12 at 11 10 33 PM" src="https://user-images.githubusercontent.com/78436957/168205713-82fc6bf7-7bc0-4cee-bfa4-3f84f3a3fd3a.png">

### Tech Stack

- THe frontend application is created using Vue and Vue Apollo.

### Features

- The frontend application allows users to pin the location of truck stops and restaurants on the map based on state, city, highway, and restaurant name.
  <img width="600" alt="Screen Shot 2022-05-12 at 11 11 50 PM" src="https://user-images.githubusercontent.com/78436957/168205766-66b2ca9a-3dde-48a8-984b-091020f0313f.png">

* After submitting the user selections, the restaurant contact information are displayed on the browser.

## API

### Tech stack

- The API is created using GraphQL and Apollo Server.

### Features

- The API allows users to retrieve information about truck stops filtered down based on the following conditions:

  - State
  - City
  - Highway
  - Restaurants

- You can test your GraphQL endpoints in Apollo sandbox at `localhost:9000`
