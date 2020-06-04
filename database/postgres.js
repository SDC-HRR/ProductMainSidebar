const pgp = require('pg-promise')(/* options */);
const redis = require('redis');
const addressRedis = process.env.REDIS_ADDRESS || 'redis://steamy.xmpekd.ng.0001.use1.cache.amazonaws.com:6379';
const client = redis.createClient(addressRedis);

const db = pgp('postgres://postgres:postgres@35.153.78.250:5432/steamy');

const getOne = (id, callback) => {
  db.one('SELECT game FROM games WHERE proxyid=$1', id)
    .then((data) => {
      client.set(id, data);
      callback(null, [data.game[0]]);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
};

module.exports = { db, getOne };
