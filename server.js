const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config();
// const taskRoutes = require("./routes/tasksRoutes");
// const { errorHandler } = require("./middlewares");
const cronJobs = require("./jobs/cronJobs");
const { processBirthdays } = require("./jobs/cronJobs");
const connectDB = require("./db");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

// app.use('/tasks', tasksRoute)
// app.use("/", taskRoutes);
// app.use(errorHandler);

app.get("/", (req, res) => {
  res.json("Jai Mata Di");
});

app.get("/happy-birthday", (req, res) => {
  processBirthdays();
  res.json("Hello");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// connectDB()
//   .then((res) => {
//     console.log("Connected");
//     app.listen(port, () => {
//       console.log(`Server started at ${port}`);
//     });

//     //Initializing the cron job
//     cronJobs;
//   })
//   .catch((err) => {
//     console.log(err);
//   });
