// import  express  from "express";
// // import router from "express";
// import {z} from 'zod'
// const  app= express();

// app.use(express.json());
//const router =express.Router;
//const schema

import express from 'express';
import parkRouter from './router/park.router'
import { z } from 'zod';
const app = express();

app.use(express.json());

app.use('/api/v1/park', parkRouter);


const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)
});