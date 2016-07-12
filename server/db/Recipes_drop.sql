-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-06-16 23:30:17.17

-- foreign keys
ALTER TABLE categories_recipe
    DROP CONSTRAINT category_recipe_categories;

ALTER TABLE categories_recipe
    DROP CONSTRAINT category_recipe_recipes;

ALTER TABLE ingredients_recipes
    DROP CONSTRAINT ingredients_recipes_recipes;

ALTER TABLE photos_recipes
    DROP CONSTRAINT photos_recipes_recipes;

ALTER TABLE ratings
    DROP CONSTRAINT ratings_recipes;

ALTER TABLE ratings
    DROP CONSTRAINT ratings_users;

ALTER TABLE steps_recipes
    DROP CONSTRAINT steps_recipes_recipes;

ALTER TABLE users_comments_recipes
    DROP CONSTRAINT users_comments_recipes_recipes;

ALTER TABLE users_comments_recipes
    DROP CONSTRAINT users_comments_recipes_users;

ALTER TABLE users_created_recipes
    DROP CONSTRAINT users_created_recipes_Recipes;

ALTER TABLE users_created_recipes
    DROP CONSTRAINT users_created_recipes_users;

ALTER TABLE users_favorite_recipes
    DROP CONSTRAINT users_favorite_recipes_recipes;

ALTER TABLE users_favorite_recipes
    DROP CONSTRAINT users_favorite_recipes_users;

-- tables
DROP TABLE categories;

DROP TABLE categories_recipe;

DROP TABLE ingredients_recipes;

DROP TABLE photos_recipes;

DROP TABLE ratings;

DROP TABLE recipes;

DROP TABLE steps_recipes;

DROP TABLE users;

DROP TABLE users_comments_recipes;

DROP TABLE users_created_recipes;

DROP TABLE users_favorite_recipes;

-- End of file.

