var db = require('./database.js').db;
var recipes = [
  {
    name: 'Chicken Cacciatore',
    servings: '4-6',
    estimatedTime: '1 hour',
    categories: ['main course', 'chicken', 'italian'],
    description: 'In cuisine, alla cacciatora refers to a meal prepared "hunter-style" with onions, herbs, usually tomatoes, often bell peppers, and sometimes wine',
    ingredients: ['chicken'],
    steps: []
  },
  {
    name: 'Chicken Tortilla Soup',
    servings: '5-8',
    estimatedTime: '1 hour',
    categories: ['main course', 'soup', 'mexican', 'chicken'],
    description: 'From south of the border comes this spicy and hearty soup ladled over crisp tortilla strips and grated cheese. The soup is chunky with chicken and avocado, but it\'s the tortillas that give it a slight thickness and a special flavor',
    ingredients: [],
    steps: []
  },
  {
    name: 'Pasta with Vodka Sauce',
    servings: '4-6',
    estimatedTime: '1 hour',
    categories: ['main course', 'pasta', 'italian', 'vegetarian'],
    description: 'Vodka sauce is an Italian sauce made from a smooth tomato sauce, vodka, typical Italian herbs and heavy cream, which gives the sauce its distinctive pink coloration',
    ingredients: ['1/4 cup olive oil', '1 onion', '3 cloves garlic', '1/2 tsp crushed red pepper flakes', '1 1/2 tsp dried oregano', '1 cup vodka', '2 (28 ounce) cans peeled plum tomatoes', 'Kosher salt', 'pepper', '3/4 pound penne pasta', '3/4 - 1 cup heavy cream', 'grated Parmesan cheese'],
    steps: ['Preheat oven to 375 degrees F.', 'Heat the olive oil in a large oven proof saute pan over medium heat, add the onions and garlic and cook for about 5 minutes until translucent. Add the red pepper flakes and dried oregano and cook for 1 minute more. Add the vodka and continue cooking until the mixture is reduced by half.', 'Meanwhile, drain the tomatoes through a sieve and crush them into the pan with your hands. Add 2 teaspoons salt and a pinch of black pepper. Cover the pan with a tight fitting lid and place it in the oven for 1 1/2 hours. Remove the pan from the oven and let cool for 15 minutes.', 'Meanwhile, bring a large pot of salted water to a boil and cook the pasta al dente. Drain and set aside.', 'Place the tomato mixture in a blender and puree in batches until the sauce is a smooth consistency. Return to the pan.', 'Reheat the sauce, add 2 tablespoons fresh oregano and enough heavy cream to make the sauce a creamy consistency. Add salt and pepper, to taste, and simmer for 10 minutes. Toss the pasta into the sauce and cook for 2 minutes more. Stir in 1/2 cup Parmesan. Serve with an additional sprinkle of Parmesan and a sprinkle of fresh oregano on each plate.']
  }
]

recipes.forEach((recipe, ind) => {
  var uniqueInd = (ind + 1) * 100;
  db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES($6, $7, $8, $9) ' +
  'ON CONFLICT DO NOTHING returning id', ['recipes', 'id', 'name', 'servings', 'description', uniqueInd, recipe.name, recipe.servings, recipe.description])
  .then((data) => {
    var res = [];
    if (data) {
      recipe.ingredients.forEach((ingredient, ind2) => {
        var uniqueInd2 = (ind2 + 2) * data.id;
        res.push(db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES($6, $7, $8, $9) ON CONFLICT DO NOTHING', ['ingredients_recipes', 'id', 'ingredient_num', 'ingredient_text', 'recipes_id', uniqueInd2, ind2, ingredient, data.id]));
      });
      if (res.length === recipe.ingredients.length) {
        db.tx((t) => {
          return t.batch(res);
        })
        .then(() => {
          console.log('Success in ingredients_recipes');
        })
        .catch((error) => {
          console.error('Error in ingredients_recipes', error);
        });
      }
      return data.id;
    }
  })
  .then((id) => {
    var res2 = [];
    if (id) {
      recipe.steps.forEach((step, ind3) => {
        var uniqueInd3 = (ind3 + 3) * id;
        res2.push(db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES($6, $7, $8, $9) ON CONFLICT DO NOTHING', ['steps_recipes', 'id', 'step_num', 'step_text', 'recipes_id', uniqueInd3, ind3, step, id]));
      });
      if (res2.length === recipe.steps.length) {
        db.tx((t) => {
          return t.batch(res2);
        })
        .then(() => {
          console.log('Success in steps_recipes');
        })
        .catch((error) => {
          console.error('Error in steps_recipes', error);
        });
      }
    }
    return id;
  })
  .then((id) => {
    var res3 = [];
    if (id) {
      recipe.categories.forEach((cat, ind4) => {
        var uniqueInd4 = (ind4 + 4) * id;
        db.oneOrNone('INSERT into $1~($2~, $3~) VALUES($4, $5) ON CONFLICT DO NOTHING', ['categories', 'id', 'name', uniqueInd4, cat]);
      });
      if (res3.length === recipe.categories.length) {
        // db.tx((t) => {
        //   return t.batch(res3);
        // })
        // .then(() => {
        //   console.log('Success in categories');
        // })
        // .catch((error) => {
        //   console.error('Error in categories', error);
        // });
      }
    }
    return id;
  })
  .then((id) => {
    if (id) {
      var res4 = [];
      recipe.categories.forEach((cat, ind4) => {
        var uniqueInd4 = (ind4 + 4) * id;
        var uniqueInd5 = (uniqueInd4 + 1) * id;
        db.one('SELECT id from categories where name=$1', [cat])
        .then((data) => {
          db.oneOrNone('INSERT into $1~($2~, $3~, $4~) VALUES($5, $6, $7) ON CONFLICT DO NOTHING', ['categories_recipes', 'id', 'categories_id', 'recipes_id', uniqueInd5, data.id, id]);
        })
        .catch((error) => {
          console.error('Error selecting id from categories', error);
        });
      });
      if (res4.length === recipe.categories.length) {
        // console.log('HEEEEY');
        // db.tx((t) => {
        //   return t.batch(res4);
        // })
        // .then(() => {
        //   console.log('Success in categories_recipes');
        // })
        // .catch((error) => {
        //   console.error('Error in categories', error);
        // });
      }
    }
  })
  .then(() => {
    console.log('Success for', recipe.name);
  })
  .catch((error) => {
    console.error('Error in recipes', error);
  })
});
