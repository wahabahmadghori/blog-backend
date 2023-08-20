"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const connection_1 = require("./utils/connection");
const express_graphql_1 = require("express-graphql");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({ schema: null, graphiql: true }));
(0, connection_1.connectToDataBase)()
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at http://localhost:${process.env.PORT}/`);
    });
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=app.js.map