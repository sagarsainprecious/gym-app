import { app } from "./app.js";
import { dbconnection } from "./dbconnection/dbconnection.js";

// Database connectivity
dbconnection();

// Created server
app.listen(`${process.env.PORT}`, () =>
  console.log("Listening on port", process.env.PORT)
);
