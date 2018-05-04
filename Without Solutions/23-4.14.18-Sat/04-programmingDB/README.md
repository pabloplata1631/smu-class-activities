# **Instructions**

* Make a new database called "programming_db" and switch into it for this activity

* Create a table called "programming_languages" which includes a primary key named "id" which will automatically increment which each new row created, a string column called "languages," and a numeric column called "rating."

* Insert some data into the table and then modify the data using the id column.

* BONUS: Study up on how to add columns to a table and then create a boolean column called "mastered" which has a default value of true

* BONUS: Start looking into the concept of joins in SQL



create table favorite_food (
	food varchar(50),
    score int
    );
    
    create table favorite_songs (
    song varchar(100) not null,
    artist varchar(50),
    score integer(10)
    );
    
    create table favorite_movies (
    id int not null auto_increment,
    movie varchar(100) not null,
    five_times integer,
    score integer(10),
    primary key (id));