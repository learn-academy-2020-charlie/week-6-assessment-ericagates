# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Animal_id is the foreign key. It would be part of the Sightings model because a sighting belongs to an animal.

  Researched answer:



2. Which routes must always be passed params and why?

  Your answer: PUT/PATCH and DELETE routes must always be passed params because these routes always act on a single record. GET can have a param passed when only one record neeeds to be retrieved but it doesn't always need one.

  Researched answer:



3. Based on your knowledge of Rails conventions, write a route for a webpage called "game" that takes in a parameter called "guess" with a controller called "main".

  Your answer: GET '/game/:guess' = "main#index"



4. Name three rails generator commands. What is created by each?

  Your answer:
  rails generate server - this starts the server and creates the webpage
  rails generate model - this creates a model or table for the object in the database, also a model class, schema, and a migration
  rails generate resource -  this creates the model, view folder, and controller for an object in the database.

  Researched answer:



5. Consider the Rails routes below. Describe the responsibility of each route.

method="GET"    /users       
This route retreives and displays all users in the database, index

method="GET"    /users/1 
This route retrieves and displays the single user with the id passed in the params. show

method="GET"    /users/new
This route is the intermediate step between reading and creating a new user in the database. It is used to display the form to gather information before creating the new user. new

method="GET"    /users/edit/1    
This route is used to edit a user, edit

method="POST"   /users/ 
This route creates a new user in the database.   create   

method="PUT"    /users/1  
This route updates the single user with the id passed in the params. update

method="DELETE" /users/1      
This route deletes the single user with the id passed in the params. destroy
