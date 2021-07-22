const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();

// Dotenv package to enable environment variables in .env
require("dotenv").config();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Import routes
const usersRoutes = require("./routes/receivers");
const feedbackRoutes = require("./routes/feedbacks");

// Use routes
app.use("/receivers", usersRoutes);
app.use("/feedbacks", feedbackRoutes);

//Port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Anonymous Feedback is 🏃‍♂️ on port ${port}

    `);
});
