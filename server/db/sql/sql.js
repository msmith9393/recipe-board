var QueryFile = require('pg-promise').QueryFile;

// links to external query files
var sql = function (file) {
  return new QueryFile(__dirname + '/' + file, {minify: true});
};

// sets up the queries we want to use
var sqlProvider = {
  test: sql('test.sql'),
  drop: sql('drop.sql'),
  build: sql('create.sql')
};

module.exports = sqlProvider;
