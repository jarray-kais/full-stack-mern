const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

//an array of pokémon objects where the id is evenly divisible by 3

const evenlyDivisibleByThree = pokemon.filter(pokemon => pokemon.id % 3 === 0);
console.log(evenlyDivisibleByThree);

//an array of pokémon objects that are "fire" type
const firetypes = pokemon.filter(pokemon => pokemon.types.includes('fire'))
console.log(firetypes);

//an array of pokémon objects that have more than one type
const moreTypes = pokemon.filter(pokemon => pokemon.types.length > 1)
console.log(moreTypes);

//an array with just the names of the pokémon
const names = pokemon.map(x => x.name)
console.log(names);

//an array with just the names of pokémon with an id greater than 99
const nameGreaterthan99 = pokemon.filter(x => x.id >99).map(x => x.name)
console.log(nameGreaterthan99);

//an array with just the names of the pokémon whose only type is poison
const nameWithtypePoison = pokemon.filter(x => x.types.includes('poison')).map(x => x.name)
console.log(nameWithtypePoison);

//an array containing just the first type of all the pokémon whose second type is "flying"


const firstype = pokemon.filter(x => x.types.length > 1 && x.types[1] === 'flying').map(x => x.types[0])
console.log(firstype)

//a count of the number of pokémon that are "normal" type 
const normlatype = pokemon.filter(x => x.types.includes('normal')).length
console.log(normlatype)

//an array with all pokemon except the pokemon with the id of 148

const not148 = pokemon.filter(x => x.id !== 148)
console.log(not148)

//an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
const replacenormal = pokemon.map(x => {
    if(x.id === 35){
        x.types = ['fairy']
    }
    return x
})

console.log(replacenormal)