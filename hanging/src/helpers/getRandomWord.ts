const words: string[] = [
  "Atletismo",
  "Baloncesto",
  "Balonmano",
  "Biatlon",
  "Bobsleigh",
  "Boxeo",
  "Breaking",
  "Badminton",
  "Beisbol",
  "Ciclismo",
  "Combinada",
  "Curling",
  "Escalada",
  "Esgrima",
  "Esqui",
  "Futbol",
  "Gimnasia",
  "Golf",
  "Halterofilia",
  "Hockey",
  "Hipica",
  "Judo",
  "Karate",
  "Lucha",
  "Luge",
  "Natacion",
  "Patinaje",
  "Pentatlon",
  "Remo",
  "Rugby",
  "Salto",
  "Skateboarding",
  "Skeleton",
  "Snowboard",
  "Surf",
  "Taekwondo",
  "Tenis",
  "Tiro",
  "Triatlon",
  "Vela",
  "Voleibol",
  "Waterpolo",
];

/*export function getRandomWord2(){
    const randomIndex = Math.floor(Math.random()*words.length);
    return words[randomIndex].toUpperCase();
}*/

// => arreglo [posición random] .en mayusculas para evitar el case sensitive
export const getRandomWord = () =>
  words[Math.floor(Math.random() * words.length)].toUpperCase();
