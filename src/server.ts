import express from 'express';
import 'dotenv/config'
import mustache from 'mustache-express';
import path from 'path';
import mainRouter from './routes';

const server = express();
const port = process.env.PORT

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRouter);

server.use((req, res) => {
    res.send('404 — Not Found')
})

server.listen(port || 8000);