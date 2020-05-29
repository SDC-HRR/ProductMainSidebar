const pgp = require('pg-promise')(/* options */);

const db = pgp('postgres://postgres:postgres@localhost:5432/steamy');

db.one('SELECT $1 AS value', 'Postgres connected on port 5432')
  .then((data) => {
    console.log('DATA:', data.value);
  })
  .catch((error) => {
    console.log('ERROR:', error);
  });

const getOne = (id, callback) => {
  db.one('SELECT game FROM games WHERE proxyid=$1', id)
    .then((data) => callback(null, [data.game[0]]))
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

module.exports = { db, getOne };
