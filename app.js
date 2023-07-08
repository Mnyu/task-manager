const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const port = 3000;

//middleware for body json
app.use(express.json());

//middleware for routes
app.use('/api/v1/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
