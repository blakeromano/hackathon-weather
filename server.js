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
import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js' 
import { router as formRouter } from "./routes/form.js"

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'build')));

app.use('/api/weather', weatherRouter)
app.use('/api/space', spaceRouter)
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/form', formRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, ()=> {
  console.log(`Express is listening on port ${port}.`)
});