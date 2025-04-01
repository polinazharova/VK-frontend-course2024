import characters from '../utils/charactersCreation.mjs';

function getPlayer(req, res) {
    const playerId = (req.url).split('/').pop();

    if (!characters[playerId - 1]) {
        res.statusCode = 404;
        res.end('PLAYER NOT FOUND!');
        
        return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(characters[playerId - 1]));
}

export default getPlayer;