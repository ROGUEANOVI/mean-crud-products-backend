import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes/product.routes'

const server = express();
// Imports modules

// Setting 
server.set("port", process.env.PORT || 3000);

// Middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

// Routes
server.use("/api/products", routes);

export default server;