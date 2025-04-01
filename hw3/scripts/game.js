import { generateLogs } from "./logs.js";
import getRandom from "./random.js";
import { player1, player2 } from "./player.js";

export default class Game {
    HIT = {
        head: 30,
        body: 25,
        foot: 20,
    }
    ATTACK = ['head', 'body', 'foot'];

    enemyAttack() {
        const hit = this.ATTACK[getRandom(0, 2)];
        const defence = this.ATTACK[getRandom(0, 2)];

        return [this.HIT[hit], hit, defence];
    }

    whoWinner(player1, player2) {
        if (player1.hp <= 0 && player2.hp <= 0) {
            generateLogs('draw', player1, player2);
            return true;
        } else if (player1.hp <= 0) {
            generateLogs('end', player2, player1);
            return true;
        } else if (player2.hp <= 0) {
            generateLogs('end', player1, player2);
            return true;
        }
        return false;
    }

    createReloadButton() {
        const reloadWrap = document.createElement('div');
        reloadWrap.classList.add('reloadWrap');
    
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'Restart';
    
        reloadWrap.appendChild(button);
    
        document.querySelector('.arenas').appendChild(reloadWrap);
    
        button.addEventListener('click', () => {
            localStorage.clear();
            window.location.href = './index.html';
        });
    }

    fightButtonListener() {
        document.querySelector('.control').addEventListener('submit', (event) => {
            event.preventDefault();
        
            let hit, defence, damage;
        
            for (let radio of document.querySelector('.control').getElementsByTagName('input')) {
                if (radio.checked === true) {
                    if (radio.name === 'hit') {
                        hit = radio.value;
                    }
                    else if (radio.name === 'defence') {
                        defence = radio.value;
                    }
                }
                radio.checked = false;
            }
        
            damage = this.HIT[hit];
    
            let [enemyDamage, hitEnemy, defenceEnemy] = this.enemyAttack();
        
            if (hit == defenceEnemy) {
                damage = 0;
            } 
            player1.attack(player2, damage);
        
            if (hitEnemy == defence) {
                enemyDamage = 0;
            }
            player2.attack(player1, enemyDamage)
        
            if (this.whoWinner(player1, player2)) {
                document.querySelector('.buttonWrap').querySelector('.button').disabled = true;
                this.createReloadButton();
            }
        });
    }

    start() {
        generateLogs('start', player1, player2);
        this.fightButtonListener();
    }
}

