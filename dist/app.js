"use strict";
// import  express  from "express";
// // import router from "express";
// import {z} from 'zod'
// const  app= express();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.use(express.json());
//const router =express.Router;
//const schema
const express_1 = __importDefault(require("express"));
const park_router_1 = __importDefault(require("./router/park.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/park', park_router_1.default);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server listeng on port ${PORT}`);
});
