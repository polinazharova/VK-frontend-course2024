const charactersNames = ['rain', 'reptile', 'stryker', 'jax', 'nightwolf', 'jade', 'noobsaibot', 'sonya', 'kano', 'mileena', 'shaokahn', 'subzero', 'kunglao', 'sektor', 'kitana', 'ermac', 'scorpion', 'cyrax', 'kabal', 'sindel', 'smoke', 'liukang', 'shangtsung'];
let characters = [];

for (let i = 1; i <= 23; i++) {
    const item = {
        id : i,
        name : charactersNames[i - 1],
        img : 'http://localhost:3001/assets/mk/fightingStance/' + charactersNames[i - 1] + '.gif',
        hp: 100,
        avatar : 'http://localhost:3001/assets/mk/avatar/' + i + '.png'
    }
    if (i >= 11) {
        item.avatar = 'http://localhost:3001/assets/mk/avatar/' + (i + 1) + '.png';
        item.id = i + 1;
    }

    characters.push(item);
}

export default characters;