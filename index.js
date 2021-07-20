const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Port
const port = process.env.PORT || 3000;
