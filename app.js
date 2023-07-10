const express = require('express');
const tasksRouter = require('./routes/tasks');
const connectDB = require('./database/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

const app = express();
const port = 3000;

// middlewares
app.use(express.static('./public')); // for static assets from public folder
app.use(express.json()); // for request body json
app.use('/api/v1/tasks', tasksRouter); // for routes
app.use(notFound); // for non existing routes - 404
app.use(errorHandlerMiddleware); // to add custom error handling mechanism

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(err);
  }
};

start();
