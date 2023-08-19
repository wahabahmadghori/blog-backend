import express from "express";
import { config } from "dotenv";
import { connectToDataBase } from "./utils/connection";
config();

const app = express();

connectToDataBase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
