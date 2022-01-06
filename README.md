
# Groupomania

Création d'un réseau social pour l'entreprise Groupomania.


## Run the server of your bdd

Create the database to the project

```bash
  CREATE DATABASE nameofyourbdd;
```

- In the backend directory of the project modify the file config.json with your crebentials of the bdd's server :

In the backend directory of the project run : 

```bash
  sequelize db:migrate
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/shaneal972/groupomania-2.git
```

Go to the backend project directory

```bash
  cd ./backend/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run server
```

Go to the frontend project directory

```bash
  cd ./frontend/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run serve
```
