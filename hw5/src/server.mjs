import { createServer } from 'node:http';
import getImg from './api/getImg.mjs'
import getPlayers from './api/getPlayers.mjs'
import getRandomPlayer from './api/getRandomPlayer.mjs'
import getPlayer from './api/getPlayer.mjs';
import postFightInfo from './api/postFightInfo.mjs';

const port = 3001;
const host = '127.0.0.1';

const server = createServer((req, res) => {
  const {url, method} = req;
  console.log(`URL: ${url}, METHOD: ${method} `)
  
  if (url.startsWith('/assets') && method === 'GET') {
    getImg(req, res);
  }
  else if (url === '/api/players' && method === 'GET') {
    getPlayers(req, res);
  }
  else if (url === '/api/player' && method === 'GET') {
    getRandomPlayer(req, res);
  }
  else if (url.startsWith('/api/player/') && method === 'GET') {
    getPlayer(req, res);
  }
  else if (url === '/api/player/fight' && method === 'POST') {
    postFightInfo(req, res);
  }
  else {
    res.statusCode = 404;
    res.end('PAGE NOT FOUND!');
  }

});

server.listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
});

