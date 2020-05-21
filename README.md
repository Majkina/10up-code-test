# 10up Code Exercise

Live website: [https://tenup-code-test.herokuapp.com/](https://tenup-code-test.herokuapp.com/)

React application for displaying posts and pages from provided Wordpress API. The below documentation describes how to run the project, technologies required, and anything I'd improve if I had no time constraints. I limited myself to 6 hours.

## The Project

### Prerequisities

- Node v12

### Other technologies used

- Create React App
- Redux
- React Router
- Axios

### Initial setup

- nvm use
- npm install

### Development mode

- npm start (runs on [http://localhost:3000](http://localhost:3000))

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Production

- npm build

Builds the app and outputs in the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Exercise notes

- Authentication flow is handled with Local Storage because cookies might become obsolete soon
- Token is then added to each following request (even though it's currently not necessary)
- I wasn't sure which pages should be public so I made Home private and accessible only after user logs in and About page is public
- Redux is set up with the possibility of scaling up the application in mind - separation of action types, actions and actions with side effects into individual files grouped by a concern

### Improvements

- Prop typing
- Tests
- Environments setup (dev and prod) - eg. loading redux tools for dev only
- Sanitizing html data received from the API that are being passed to dangerouslySetInnerHTML
- Fallback for Local Storage if unavailable, using cookies to persist the state between sessions
