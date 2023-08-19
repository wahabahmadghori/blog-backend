"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDataBase = void 0;
const mongoose_1 = require("mongoose");
const connectToDataBase = async () => {
    try {
        await (0, mongoose_1.connect)(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster-free.0clb2wc.mongodb.net/?retryWrites=true&w=majority`);
    }
    catch (error) {
        return error;
    }
};
exports.connectToDataBase = connectToDataBase;
//# sourceMappingURL=connection.js.map