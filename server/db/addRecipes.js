var db = require('./database.js').db;
var recipes = [
  {
    name: 'Chicken Cacciatore',
    servings: '4-6',
    estimatedTime: '1 hour',
    description: 'In cuisine, alla cacciatora refers to a meal prepared "hunter-style" with onions, herbs, usually tomatoes, often bell peppers, and sometimes wine',
    ingredients: ['chicken'],
    steps: []
  },
  {
    name: 'Tortilla Soup',
    servings: '5-8',
    estimatedTime: '1 hour',
    description: 'From south of the border comes this spicy and hearty soup ladled over crisp tortilla strips and grated cheese. The soup is chunky with chicken and avocado, but it\'s the tortillas that give it a slight thickness and a special flavor',
    ingredients: [],
    steps: []
  },
  {
    name: 'Pasta with Vodka Sauce',
    servings: '4-6',
    estimatedTime: '1 hour',
    description: 'Vodka sauce is an Italian sauce made from a smooth tomato sauce, vodka, typical Italian herbs and heavy cream, which gives the sauce its distinctive pink coloration',
    ingredients: ['1/4 cup olive oil', '1 onion', '3 cloves garlic', '1/2 tsp crushed red pepper flakes', '1 1/2 tsp dried oregano', '1 cup vodka', '2 (28 ounce) cans peeled plum tomatoes', 'Kosher salt', 'pepper', '3/4 pound penne pasta', '3/4 - 1 cup heavy cream', 'grated Parmesan cheese'],
    steps: ['Preheat oven to 375 degrees F.', 'Heat the olive oil in a large oven proof saute pan over medium heat, add the onions and garlic and cook for about 5 minutes until translucent. Add the red pepper flakes and dried oregano and cook for 1 minute more. Add the vodka and continue cooking until the mixture is reduced by half.', 'Meanwhile, drain the tomatoes through a sieve and crush them into the pan with your hands. Add 2 teaspoons salt and a pinch of black pepper. Cover the pan with a tight fitting lid and place it in the oven for 1 1/2 hours. Remove the pan from the oven and let cool for 15 minutes.', 'Meanwhile, bring a large pot of salted water to a boil and cook the pasta al dente. Drain and set aside.', 'Place the tomato mixture in a blender and puree in batches until the sauce is a smooth consistency. Return to the pan.', 'Reheat the sauce, add 2 tablespoons fresh oregano and enough heavy cream to make the sauce a creamy consistency. Add salt and pepper, to taste, and simmer for 10 minutes. Toss the pasta into the sauce and cook for 2 minutes more. Stir in 1/2 cup Parmesan. Serve with an additional sprinkle of Parmesan and a sprinkle of fresh oregano on each plate.']
  }
]

// recipes.forEach((recipe, ind) => {
//   var id = (ind + 1) * 100;
//   db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES($6, $7, $8, $9) ' +
//     'ON CONFLICT DO NOTHING returning id', ['recipes', 'id', 'name', 'servings', 'description', id, recipe.name, recipe.servings, recipe.description])
//     .then((data) => {
//         console.log('DATA', data)
//         console.log('DATA', Boolean(data))
// //       if (data) {
// //         db.tx((t) => {
// //           var arr = recipe.ingredients.map(function(ingredient, ind) {
//             var id = data.id * ((ind + 2) * 200);
//             var ingredient = 'kale'
// //             console.log('IDDDDDD', data.id)

// //           })
// //           console.log('ARR', arr);
// //           if (arr.length === recipe.ingredients.length) {
// //             return t.batch(arr);
// //           }
// //         })
// //         .then(() => {
// //           console.log('SUCCESS');
// //         })
// //         .catch((error) => {
// //           console.error('ERROR', error);
// //         })
// //       }
// //     })
//       if (ind === recipes.length - 1) {
//         db.oneOrNone('INSERT into $1~($2~, $3~, $4~, $5~) VALUES($6, $7, $8, $9) WHERE recipes.id = ingredients_recipes.recipes_id', ['ingredients_recipes', 'id', 'ingredient_num', 'ingredient_text', 'recipes_id', id, ind, ingredient, data.id])
//         .then(() => {
//           console.log('Success');
//         })
//         .catch((error) => {
//           console.error(error);
//         })
//       }
//     })
//     .catch((error) => {
//       console.log('ERROR', error);
//     });

// });