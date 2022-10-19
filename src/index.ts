import dotenv from 'dotenv';
dotenv.config();

import server from './server';
import {startConnection} from './database';

startConnection();

server.listen(server.get("port"));
console.log("Server is running on port", server.get("port"));
