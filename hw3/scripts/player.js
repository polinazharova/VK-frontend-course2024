import { generateLogs } from "./logs.js";

class Player {
    constructor(id, name, hp, img) {
        this.id = id,
        this.name = name;
        this.hp = hp;
        this.img = img;
    }

    attack(player2, damage) {
        if (damage > 0) {
            player2.changeHP(damage);
            player2.renderHP(player2.elHP());
            generateLogs('hit', this, player2, damage);
        } else {
            generateLogs('defence', player2, this);
        }
    }

    changeHP(damage) {
        if (this.hp - damage < 0) {
            this.hp = 0;
            return;
        }
        this.hp -= damage;
    }

    elHP() {
        return document.querySelector('.player' + this.id).querySelector('.life');
    }

    renderHP(elemHP) {
        elemHP.style.width = this.hp + '%';
    }
};

function createPlayer(objPlayer) {
    const player = document.createElement('div');
    player.classList.add('player' + objPlayer.id);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const character = document.createElement('div');
    character.classList.add('character');

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = objPlayer.hp + '%';

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = objPlayer.name;

    progressbar.appendChild(life);
    progressbar.appendChild(name);

    const img = document.createElement('img');
    img.setAttribute('src', objPlayer.img);

    character.appendChild(img);

    player.appendChild(progressbar);
    player.appendChild(character);

    document.getElementsByClassName('arenas')[0].appendChild(player);
};

export let player1 = new Player(1, JSON.parse(localStorage.getItem('player1')).name, 100, JSON.parse(localStorage.getItem('player1')).img);
export let player2 = new Player(2, JSON.parse(localStorage.getItem('player2')).name, 100, JSON.parse(localStorage.getItem('player2')).img);

createPlayer(player1);
createPlayer(player2);