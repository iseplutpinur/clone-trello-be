module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "clone_trello",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "wtsodypvfhlaar",
    "password": "5cd3343c1a975445345b212a4c3cedd78bbdfac9cfb24e4832ce44e7496893c1",
    "database": "de17sjn19vrcbu",
    "host": "ec2-44-210-36-247.compute-1.amazonaws.com",
    "dialect": "postgres",
    "port": 5432,
    "dialectOptions": {
      "ssl": { "rejectUnauthorized": false }
    }
  }
}