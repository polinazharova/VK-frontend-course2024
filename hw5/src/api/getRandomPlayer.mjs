import characters from '../utils/charactersCreation.mjs';
import getRandom from '../utils/randomizer.mjs';

function getRandomPlayer(req, res) {
    const id = getRandom(0, characters.length - 1);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(characters[id]));
}

export default getRandomPlayer;