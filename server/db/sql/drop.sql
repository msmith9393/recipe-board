-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-07-15 18:57:22.172

-- foreign keys
ALTER TABLE categories_recipes
    DROP CONSTRAINT category_recipe_categories;

ALTER TABLE categories_recipes
    DROP CONSTRAINT category_recipe_recipes;

ALTER TABLE ingredients_recipes
    DROP CONSTRAINT ingredients_recipes_recipes;

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

ALTER TABLE users_favorite_recipes
    DROP CONSTRAINT users_favorite_recipes_recipes;

ALTER TABLE users_favorite_recipes
    DROP CONSTRAINT users_favorite_recipes_users;

-- tables
DROP TABLE categories CASCADE;

DROP TABLE categories_recipes CASCADE;

DROP TABLE ingredients_recipes CASCADE;

DROP TABLE ratings CASCADE;

DROP TABLE recipes CASCADE;

DROP TABLE steps_recipes CASCADE;

DROP TABLE users CASCADE;

DROP TABLE users_comments_recipes CASCADE;

DROP TABLE users_favorite_recipes CASCADE;

-- End of file.

