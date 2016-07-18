var db = require('./database.js').db;
var recipes = require('./recipes.js');

recipes.forEach((recipe) => {
  db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES(default, $6, $7, $8) ' +
  'ON CONFLICT DO NOTHING returning id', ['recipes', 'id', 'name', 'servings', 'description', recipe.name, recipe.servings, recipe.description])
  .then((data) => {
    var res = [];
    if (data) {
      recipe.ingredients.forEach((ingredient, ind) => {
        db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES(default, $6, $7, $8) ON CONFLICT DO NOTHING', ['ingredients_recipes', 'id', 'ingredient_num', 'ingredient_text', 'recipes_id', ind, ingredient, data.id])
        .then(() => {
          console.log('Success in ingredients_recipes');
        })
        .catch((error) => {
          console.error('Error in ingredients_recipes', error);
        });
      });
      return data.id;
    }
  })
  .then((id) => {
    if (id) {
      recipe.steps.forEach((step, ind) => {
        db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES(default, $6, $7, $8) ON CONFLICT DO NOTHING', ['steps_recipes', 'id', 'step_num', 'step_text', 'recipes_id', ind, step, id])
        .then(() => {
          console.log('Success in steps_recipes');
        })
        .catch((error) => {
          console.error('Error in steps_recipes', error);
        });
      });
    }
    return id;
  })
  .then((id) => {
    var res3 = [];
    if (id) {
      recipe.categories.forEach((cat) => {
        db.oneOrNone('INSERT into $1~($2~, $3~) VALUES(default, $4) ON CONFLICT DO NOTHING', ['categories', 'id', 'name', cat])
        .then(() => {
          console.log('Success in categories');
        })
        .catch((error) => {
          console.error('Error in categories', error);
        });
      });
    }
    return id;
  })
  .then((id) => {
    if (id) {
      var res4 = [];
      recipe.categories.forEach((cat) => {
        db.one('SELECT id from categories where name=$1', [cat])
        .then((data) => {
          db.oneOrNone('INSERT into $1~($2~, $3~, $4~) VALUES(default, $5, $6) ON CONFLICT DO NOTHING', ['categories_recipes', 'id', 'categories_id', 'recipes_id', data.id, id])
          .then(() => {
            console.log('Success in categories_recipes');
          })
          .catch((error) => {
            console.error('Error in categories', error);
          });
        })
        .catch((error) => {
          console.error('Error selecting id from categories', error);
        });
      });
    }
  })
  .then(() => {
    console.log('Success for', recipe.name);
  })
  .catch((error) => {
    console.error('Error in recipes', error);
  })
});
