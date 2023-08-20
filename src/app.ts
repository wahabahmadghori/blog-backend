import express from "express";
import { config } from "dotenv";
import { connectToDataBase } from "./utils/connection";
import { graphqlHTTP } from "express-graphql";
config();

const app = express();

app.use('/graphql', graphqlHTTP({schema : null, graphiql:true}))

connectToDataBase()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
