
# Cucumber-or-Pickle

![Badge](https://img.shields.io/badge/license-MIT-green?style=plastic&logo=appveyor)

## Table of Content
#### * [Project Desctiption](#description)
#### * [Deployed Application](#application)
#### * [Demo Video](#video)
#### * [Installation/Technical Requirements](#installation)
#### * [Usage](#usage)
#### * [Tests](#tests)
#### * [License](#license)
#### * [Credits](#credits)


## Project Description
Daily mini polls to see if your friends agree with your opinions. 

### User Story
As a person with opinions, 
I want to be able to share those opinions with my friends and have them agree or disagree, 
so I can feel validated or get new friends.

### Acceptance Criteria
- WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing Poll posts if any have been posted; navigation links for the homepage and the option to log in.
- WHEN I click on the homepage option, THEN I am taken to the homepage.
- WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in.
- WHEN I choose to sign up, THEN I am prompted to create a username and password.
- WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site.
- WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password.
- WHEN I am signed in to the site, THEN I see navigation links for the homepage (logo), the user Profile, and the option to log out.
- WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing Polls posts that include the Poll title and the date created.
- When I click on the Agree/Disagree button for each Poll post, THEN I am able to see the updated vote count for Agree/Disagree. 
- WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the Poll post is updated to display the comment, the comment creator’s username, and the date created.
- WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post.
- WHEN I click on the button to add a new Poll post, THEN I am prompted to enter a title for the Poll post.
- WHEN I click on the button to create a new Poll post, THEN the title of my Poll is saved and I am taken back to an updated user Profile with my new blog post.
- WHEN I click on one of my existing Polls in the user Profile, THEN I am able to delete my Poll and taken back to an updated user Profile.
- WHEN I click on the logout option in the navigation, THEN I am signed out of the site.

## Deployed Application
Application is deployed using Heroku.

Link to the deployed application: https://cucumber-or-pickle.herokuapp.com/


## Demo Video
N/A


## Installation/Technical Requirements
- User needs to install [node.js (version 18.15.0 LTS)](https://nodejs.org/en/).
- To use the application user has to list the following as dependencies in the package.json file:
  - [inquirer (version 8.2.4)](https://www.npmjs.com/package/inquirer/v/8.2.4),
  - [dotenv (version 8.2.0)](https://www.npmjs.com/package/dotenv/v/8.2.0),
  - [express (version 4.18.2)](https://www.npmjs.com/package/express),
  - [MySQL2 (version 3.2.0)](https://www.npmjs.com/package/mysql2),
  - [Sequile (version 6.30.0)](https://www.npmjs.com/package/sequelize).

## Usage
The user has to click on the application link and login into the application. 


## Tests
At this time no Unit Tests available to test the application functionalities. 


## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.


## Credits 

| Developers         | GitHub Profile|
| -----------  | ----------- |
|Jackson Maltby| [jacksonmaltby](https://github.com/jacksonmaltby)  |
|Whitney Wishart|[whitneywishart](https://github.com/whitneywishart) |
|Anastasiya Rylova|[anryl050](https://github.com/anryl050) |
