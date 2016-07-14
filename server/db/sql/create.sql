-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2016-07-14 03:10:24.576

-- tables
-- Table: categories
CREATE TABLE categories (
    id int  NOT NULL,
    name varchar(100)  NOT NULL,
    CONSTRAINT categories_pk PRIMARY KEY (id)
);

-- Table: categories_recipe
CREATE TABLE categories_recipe (
    id int  NOT NULL,
    categories_id int  NOT NULL,
    recipes_id int  NOT NULL,
    CONSTRAINT categories_recipe_pk PRIMARY KEY (id)
);

-- Table: ingredients_recipes
CREATE TABLE ingredients_recipes (
    id int  NOT NULL,
    ingredient_num int  NOT NULL,
    ingredient_text varchar(400)  NOT NULL,
    recipes_id int  NOT NULL,
    CONSTRAINT ingredients_recipes_pk PRIMARY KEY (id)
);

-- Table: ratings
CREATE TABLE ratings (
    id int  NOT NULL,
    rating int  NOT NULL,
    users_id int  NOT NULL,
    recipes_id int  NOT NULL,
    CONSTRAINT ratings_pk PRIMARY KEY (id)
);

-- Table: recipes
CREATE TABLE recipes (
    id int  NOT NULL,
    name varchar(100)  NOT NULL,
    description varchar(800)  NULL,
    average_rating int  NULL,
    servings varchar(100)  NULL,
    estimated_time varchar(100)  NULL,
    CONSTRAINT recipes_pk PRIMARY KEY (id)
);

-- Table: steps_recipes
CREATE TABLE steps_recipes (
    id int  NOT NULL,
    step_num int  NOT NULL,
    step_text varchar(200)  NOT NULL,
    recipes_id int  NOT NULL,
    CONSTRAINT steps_recipes_pk PRIMARY KEY (id)
);

-- Table: users
CREATE TABLE users (
    id int  NOT NULL,
    username varchar(100)  NOT NULL,
    email varchar(100)  NOT NULL,
    first_name varchar(20)  NOT NULL,
    last_name varchar(20)  NOT NULL,
    CONSTRAINT users_pk PRIMARY KEY (id)
);

-- Table: users_comments_recipes
CREATE TABLE users_comments_recipes (
    id int  NOT NULL,
    comment varchar(1000)  NOT NULL,
    users_id int  NOT NULL,
    recipes_id int  NOT NULL,
    CONSTRAINT users_comments_recipes_pk PRIMARY KEY (id)
);

-- Table: users_created_recipes
CREATE TABLE users_created_recipes (
    id int  NOT NULL,
    users_id int  NOT NULL,
    recipes_id int  NOT NULL,
    CONSTRAINT users_created_recipes_pk PRIMARY KEY (id)
);

-- Table: users_favorite_recipes
CREATE TABLE users_favorite_recipes (
    id int  NOT NULL,
    recipes_id int  NOT NULL,
    users_id int  NOT NULL,
    CONSTRAINT users_favorite_recipes_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: category_recipe_categories (table: categories_recipe)
ALTER TABLE categories_recipe ADD CONSTRAINT category_recipe_categories
    FOREIGN KEY (categories_id)
    REFERENCES categories (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: category_recipe_recipes (table: categories_recipe)
ALTER TABLE categories_recipe ADD CONSTRAINT category_recipe_recipes
    FOREIGN KEY (recipes_id)
    REFERENCES recipes (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: ingredients_recipes_recipes (table: ingredients_recipes)
ALTER TABLE ingredients_recipes ADD CONSTRAINT ingredients_recipes_recipes
    FOREIGN KEY (recipes_id)
    REFERENCES recipes (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: ratings_recipes (table: ratings)
ALTER TABLE ratings ADD CONSTRAINT ratings_recipes
    FOREIGN KEY (recipes_id)
    REFERENCES recipes (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: ratings_users (table: ratings)
ALTER TABLE ratings ADD CONSTRAINT ratings_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: steps_recipes_recipes (table: steps_recipes)
ALTER TABLE steps_recipes ADD CONSTRAINT steps_recipes_recipes
    FOREIGN KEY (recipes_id)
    REFERENCES recipes (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: users_comments_recipes_recipes (table: users_comments_recipes)
ALTER TABLE users_comments_recipes ADD CONSTRAINT users_comments_recipes_recipes
    FOREIGN KEY (recipes_id)
    REFERENCES recipes (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: users_comments_recipes_users (table: users_comments_recipes)
ALTER TABLE users_comments_recipes ADD CONSTRAINT users_comments_recipes_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: users_created_recipes_Recipes (table: users_created_recipes)
ALTER TABLE users_created_recipes ADD CONSTRAINT users_created_recipes_Recipes
    FOREIGN KEY (recipes_id)
    REFERENCES recipes (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: users_created_recipes_users (table: users_created_recipes)
ALTER TABLE users_created_recipes ADD CONSTRAINT users_created_recipes_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: users_favorite_recipes_recipes (table: users_favorite_recipes)
ALTER TABLE users_favorite_recipes ADD CONSTRAINT users_favorite_recipes_recipes
    FOREIGN KEY (recipes_id)
    REFERENCES recipes (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- Reference: users_favorite_recipes_users (table: users_favorite_recipes)
ALTER TABLE users_favorite_recipes ADD CONSTRAINT users_favorite_recipes_users
    FOREIGN KEY (users_id)
    REFERENCES users (id)
    NOT DEFERRABLE
    INITIALLY IMMEDIATE
;

-- End of file.

