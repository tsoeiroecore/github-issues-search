﻿# github-issues-search

Goal

We would like to have an opportunity to learn about your skills. This is an open ended project where you should put as much effort as you consider right to show what you think is important.

Delivery of Code

Please share a Github repo with your code.

Task

Using Github's API (https://developer.github.com/), build an application with an autocomplete input box for searching issues for React's repo (https://github.com/facebook/react/issues). Input and results should be able to navigate via keyboard shortcuts. Each result should have but not limited to, the issue's title and labels.


### Components:
+ Frontend: AngularJS + Angular Material
+ Backend: Node.js + Mongoose + node-fetch + nock

### To run the backend application:
1. Change location to project root folder path (api-github-search)
2. Run npm install
3. Run npm start (This will serve the app onto http://localhost:3000/)

### To run the frontend application:
1. Change location to project root folder path (github-search)
2. Run npm install
3. Run npm start (This will serve the app onto http://localhost:8000/) PS: Make sure backend service is already running

### To test the application:
1. Change location to backend root folder path (api-github-search)
2. Run npm test

## Improvements To-do: 
- ~~Search Github issues~~
- Add separate service for API calls (frontend only)
- Proposal to change autocomplete input component. Component should allow enabling pagination logic on infinite scrolling
- Add build process for production deployment (gulp, grunt, etc..)

## Considerations: 
- Added in-memory DB to simulate mongo inserts to store recent searchs
- Added caching strategy
- Configure backend application to use environment variables - optional (Ex: To store optional Github personal access token)

