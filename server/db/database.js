var pgp = require('pg-promise')();
var sql = require('./sql/sql.js');
var local_connection = {
  host: 'localhost',
  port: 5432,
  database: 'recipes',
  user: 'postgres',
  password: ''
}


var db = pgp(local_connection);

db.tx(t=> t.one(sql.test)
  .then((data) => {
    //  if users table doesn't exist, rebuild database
    if (!data.exists) {
      console.log('Rebuilding database');
      return t.batch([t.none(sql.drop), t.none(sql.build)]);
    } else {
      console.log('Users table exists, not rebuilding database');
    }
  })
  .then(pgp.end)
  .catch(error=> {
    console.log('error:', error);
  })
);

exports.db = db;
exports.pgp = pgp;