const express = require('express');
const tasksRouter = require('./routes/tasks');
const connectDB = require('./database/connect');
require('dotenv').config();

const app = express();
const port = 3000;

//middleware for body json
app.use(express.json());

//middleware for routes
app.use('/api/v1/tasks', tasksRouter);

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
