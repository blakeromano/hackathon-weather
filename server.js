import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'
import('dotenv/config')

const app = express();

import('./config/database.js')


import { router as weatherRouter } from "./routes/weather.js"
import { router as spaceRouter } from "./routes/space.js"


app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'build')));



app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});