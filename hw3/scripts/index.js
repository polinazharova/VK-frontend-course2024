import getRandom from './random.js'

const $parent = document.querySelector('.parent');
const $player = document.querySelector('.player');

const createElement = (tag, className) => {
    const $tag = document.createElement(tag);
    if (className) {
        if (Array.isArray(className)) {
            className.forEach(item => {
                $tag.classList.add(item);
            })
        } else {
            $tag.classList.add(className);
        }

    }

    return $tag;
}

function createEmptyPlayerBlock() {
    const el = createElement('div', ['character', 'div11', 'disabled']);
    const img = createElement('img');
    img.src = './assets/players/avatar/11.png';
    el.appendChild(img);
    $parent.appendChild(el);
}

async function init() {
    localStorage.removeItem('player1');

    const characters = ['rain', 'reptile', 'stryker', 'jax', 'nightwolf', 'jade', 'noobsaibot', 'sonya', 'kano', 'mileena', 'shaokahn', 'subzero', 'kunglao', 'sektor', 'kitana', 'ermac', 'scorpion', 'cyrax', 'kabal', 'sindel', 'smoke', 'liukang', 'shangtsung'];
    let players = [];

    for (let i = 1; i <= 23; i++) {
        const item = {
            avatar : './assets/players/avatar/' + i + '.png',
            img : './assets/players/fightingStance/' + characters[i - 1] + '.gif',
            id : i,
            name : characters[i - 1]
        }
        if (i >= 11) {
            item.avatar = './assets/players/avatar/' + (i + 1) + '.png';
            item.id = i + 1;
        }

        players.push(item);
    }

    let imgSrc = null;
    createEmptyPlayerBlock();

    players.forEach(item => {
        const el = createElement('div', ['character', `div${item.id}`]);
        const img = createElement('img');

        el.addEventListener('mousemove', () => {
            if (imgSrc === null) {
                imgSrc = item.img;
                const $img = createElement('img');
                $img.src = imgSrc;
                $player.appendChild($img);
            }
        });

        el.addEventListener('mouseout', () => {
            if (imgSrc) {
                imgSrc = null;
                $player.innerHTML = '';
            }
        });

        el.addEventListener('click', () => {
            localStorage.setItem('player1', JSON.stringify(item));

            el.classList.add('active');

            setTimeout(() => {
                window.location.href = './arenas.html';

            }, 1000);
        });

        img.src = item.avatar;
        img.alt = item.name;

        el.appendChild(img);
        $parent.appendChild(el);
    });

    localStorage.setItem('player2', JSON.stringify(players[getRandom(0, players.length - 1)]));
}

init();
