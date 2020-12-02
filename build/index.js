"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
const PORT = 3040;
app.get('/ping', (_req, res) => {
    res.send("someone pinged here");
});
app.listen(PORT, () => {
    console.log(`succesfully running the server on port ${PORT}`);
});
