"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const connection_1 = require("./utils/connection");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
(0, connection_1.connectToDataBase)()
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server is running");
    });
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=app.js.map