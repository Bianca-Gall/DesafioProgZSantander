const namesHeroes = ["Capitão Caverna", "Scooby", "Formiga Atômica","Jyraya","Jaspion", "Black Kame Rider"];
const xpHeroes = [100, 1005, 2000, 2001, 3040, 6000, 7800, 8900, 9100, 10000, 12000];

const nameHero = namesHeroes[Math.floor(Math.random() * namesHeroes.length)];
const xpHero = xpHeroes[Math.floor(Math.random() * xpHeroes.length)];

let levelHero;

if (xpHero < 1000) {
    levelHero = "Latão";
} else if (xpHero < 2000) {
    levelHero = "Ferro";
} else if (xpHero < 5000) {
    levelHero = "Bronze";
} else if (xpHero < 7000) {
    levelHero = "Prata";
} else if (xpHero < 8000) {
    levelHero = "Ouro";
} else if (xpHero < 9000) {
    levelHero = "Platina";
} else if (xpHero < 10000) {
    levelHero = "Ascendente";
} else if (xpHero < 12000) {
    levelHero = "Imortal";
} else {
    levelHero = "Radiante";
}

console.log("Olá " + nameHero + ", seu XP é: " + xpHero);
console.log(`O Herói de nome ${nameHero} está no nível ${levelHero} `);
