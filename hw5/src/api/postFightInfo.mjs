import getRandom from '../utils/randomizer.mjs';

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

function postFightInfo(req, res) {
    let data = '';

    req.on('data', chunk => {
        data += chunk.toString();
    });

    req.on('end', () => {
        try {
            data = JSON.parse(data);
        } catch (err) {
            res.statusCode = 400;
            res.end('WRONG JSON DATA!');
            return;
        }
    });

    if (!(data.hit && data.defence)) {
        res.statusCode = 400;
        res.end('WRONG DATA WAS SENT!');
        return;
    }

    const enemyHit = ATTACK[getRandom(0, 2)];
    const enemyDefence = ATTACK[getRandom(0, 2)];

    const responseData = {
        player1: {
            value: enemyDefence === data.hit ? 0 : HIT[data.hit],
            hit: data.hit,
            defence: data.defence
        },
        player2: {
            value: data.defence === enemyHit ? 0 : HIT[enemyHit],
            hit: enemyHit,
            defence: enemyDefence
        }
    }

    console.log(`The response is ${responseData}`);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
}

export default postFightInfo;