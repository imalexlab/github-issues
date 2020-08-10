# Github Issues React App

You can see the App deployed on Github Pages here: <https://imalexlab.github.io/github-issues/>

## Prerequisites

You’ll need to have [Node >= 8.10 and npm >= 5.6](https://nodejs.org/en/) on your machine.

## Installation

Clone the project:  
`git clone https://github.com/imalexlab/github-issues`

Then, move into the folder and install the dependencies:  
`cd github-issues`  
`yarn`

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Launch the Storybook to see individual components.
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `yarn deploy`

Deploy the app on Github Pages.
It will build the app and push it to the `gh-pages` remote branch.

## About the project

The project is based on [create-react-app with the typescript template](https://create-react-app.dev/docs/adding-typescript/).

The structure of the app is:

### .storybook

Storybook configuration.
Place your addons in the `main.js` file.

### public

Public files used during the build. Icons, favicon and manifest should go here

### src

`index.css` is the main styling file for the application

`index.tsx` is the entry point of our React app

`react-app-env.d.ts` is a declaration used for typescript

`serviceWorker.ts` is where you can configure the service workers. This is the Create-React-App default configuration.

`setupTests.ts` is the file to setup the tests. We are using here [react-testing-library](https://github.com/testing-library/react-testing-library).

`storyshots.test.ts` initialize the snapshots of stories. More informations of the configuration [here](https://github.com/storybookjs/storybook/tree/master/addons/storyshots/storyshots-core).

#### components

Components of your app

Basic UI components should have this structure:

- A folder with the name of the component
- An `index.tsx` file entry point
- A `{ComponentName}.stories.tsx` file for the stories
- A `{ComponentName}.test.tsx` file for the test

#### constants

Places your constants here. If your constants are sensible (e.g. an API key), you should use the environment variables instead.

#### services

Place your function that connect to the API here.

Service is currently very specific. It could be more generic if needed.

## Improvments

Improvments could be:

- E2E Testing
- Implement the Issue Detail page with the comments
- Implement the User Detail page
- Implement filters and sorting
