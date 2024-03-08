# climate-app

Climate App is an inventory management system that is used to track the location of any item. With ability to hide sections, items or even be notified about an items expiration date beforehand. It also allows you to keep a threshold and will notify the user if the item is falling below the threshold that the clients can set themselves.

## For devs

### Required dependencies

1. Mongodb
2. React v18+
3. Express and Nodejs

### Build and test the app

There are many factors to consider during build and deployment of an application. For a developmental build, please follow related guide and for production deployment please follow related guide.

#### Development

1. Run `npm start` for the ui layer to kick in.
2. Run `cd server && npm start` for the backend to kick in.

This will start both the frontend and API. Both will be reloaded automatically when you make changes. Create React App and the Express server are running on different processes. This is so that React can still use in memory Webpack to do hot reloads really fast.

All AJAX/fetch requests to `/api` are sent back to the Express server which is serving all `/api` routes from the `routes/index.js` file. This is done via a proxy setup in the `package.json` file.

#### Production

In production, you want Express to serve up your app.

1. Run `npm build` for both layers to kick in.
2. Run `npm start` for the ui layer to display the build folder.
3. Now simply visit the Express app and you will see your app served from the 'build' folder.
