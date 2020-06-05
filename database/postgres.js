const pgp = require('pg-promise')(/* options */);
const redis = require('redis');
const addressRedis = process.env.REDIS_ADDRESS || 'redis://steamy.xmpekd.ng.0001.use1.cache.amazonaws.com:6379';
const client = redis.createClient(addressRedis);

const db = pgp('postgres://postgres:postgres@35.153.78.250:5432/steamy');

db.one('SELECT $1 AS value', 'Postgres connected on port 5432')
  .then((data) => {
    console.log('DATA:', data.value);
  })
  .catch((error) => {
    console.log('ERROR:', error);
  });

const getOne = (id, callback) => {
  db.one('SELECT game FROM games WHERE proxyid=$1', id)
    .then((data) => {
      client.set(id, JSON.stringify(data.game[0]));
      callback(null, [data.game[0]]);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

module.exports = { db, getOne };
