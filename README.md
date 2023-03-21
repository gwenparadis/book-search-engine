# 21 MERN: Book Search Engine

## Description

I created this book search engine in order to create an place for users to create a login, search for books, and save those books to their profile. This is useful for creating future reading lists, sharing books with friends, or exploring new reads from your favorite author. The user is able to create a unique login and view the Search Books page, if the user is logged in, they can save books to their profile, and view this information on the Saved Books page.. This application utilizes Node and GraphQL to create the application routes, MongoDB and mongoose to create and modify the database, and React with bootstrap to display the information to the user.. I learned how to improve coding structure and accessibility of MongoDB databases utilizing mongoose, learned how to convert a web application from Express.js to GraphQL, and conducted testing of routes and database capabilities with the GraphQL playground Sandbox.

## Installation

This webpage can be accessed at the following URL: https://pacific-temple-68060.herokuapp.com/

## Usage

See the following Acceptance Criteria to understand how the application can be accessed and utilized:
```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Technologies Used

Node.js, ReactJS, GraphQL, MongoDB, mongoose, MongoDBCompass and GraphQL Sandbox (tests), Github (store and edit code)

## License
NA
