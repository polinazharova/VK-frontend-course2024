import characters from '../utils/charactersCreation.mjs';

function getPlayers(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(characters));
}

export default getPlayers;