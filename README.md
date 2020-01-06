# neuroFlowUserStories
Display an audio collection to the user. Built primarily in React.


Goal of the application:

1. Fulfill 3 use cases detailed below:
    a. As a user, I want to be able to browse audio collection, find content relevant to a category I’m interested in, and play each audio file
        i. For the listing view, do not show the full description (see second story), but can show any combination of the other attributes to give a good experience to the user
    b. As a user, I want to be able to view a full description of a given audio file
        i. Show full description for the audio file
    c. As a user, I want an error from attempting to play an audio file to be handled gracefully and let me know something went wrong
        i. There are intentional errors in some URLs in the JSON

NPM Packages:

1. React
2. React-router-dom
3. React-bootstrap


Directory Structure:


How to run application: 

Since this application has not been deployed to a hosting service such as Heroku, you will need to follow the steps below to load the application in your browser:

1. Clone the git repository to your machine
2. Navigate to the 'client' directory
3. In the command line, run 'npm init'
4. The previous command will install all dependencies for this application to your machine. Note: this may take a little while, i.e. a few minutes, as React has quite a few built in dependencies.
5. Once the dependencies have finished installing, type 'npm start' into the command line.
6. The application will begin! You'll receive any notifications in the command line. Hopefully everything will be hunky-dory and the app will open automatically in your browser.
7. Note: The application will try to run on //localhost:3001/ if it is available. If port 3001 is not available, React will ask via the command line whether you would like to use another port. Say yes to continue to see the application via an available port, or cancel to cancel the process. 

Email: jack.jackryan@gmail.com
GitHub: JackRyan1989
LinkedIn: https://www.linkedin.com/in/johnanthonyryan/