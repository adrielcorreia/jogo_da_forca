const animals = [
    "Tiger", "Elephant", "Giraffe", "Kangaroo", 
    "Zebra", "Rhinoceros", "Panda", "Hippopotamus", "Koala", 
    "Gorilla", "Penguin", "Shark", "Owl", 
    "Chameleon", "Dolphin", "Cheetah", "Polar Bear", "Raven", "Ostrich", "Seagull", 
    "Lynx", "Raccoon", "Sloth", "Hedgehog", "Jaguar", 
    "Armadillo", "Meerkat", "Lemur", "Octopus", 
    "Gibbon", "Mongoose", "Chinchilla", "Hummingbird", "Vulture", 
    "Koala", "Woodpecker", "Pangolin", "Wallaby", "Hornet", 
    "Beetle", "Dromedary Camel", "Firefly", "Gazelle", "Hamster", 
    "Ibex", "Jackal", "Kestrel", "Koala", "Lynx", 
    "Macaw", "Nightingale", "Ocelot", "Platypus", "Quokka", 
    "Rattlesnake", "Sparrow", "Tarantula", "Uakari", 
    "Weasel", "X-ray Tetra", "Yak", "Zonkey", "Alligator", 
    "Baboon", "Coyote", "Dingo", "Elephant Seal", "Ferret", 
    "Gelada", "Hippopotamus", "Iguana", "Kingfisher", 
    "Lynx", "Mantis Shrimp", "Numbat", "Ox", "Peacock", 
    "Quokka", "Raccoon Dog", "Star-nosed Mole", "Tarsier", "Umbrellabird", 
    "Vampire Bat", "Wallaroo", "X-ray Fish", "Yellowjacket", "Zorse"
];

let new_word = ''

function generate_random() {
    new_word = animals[Math.floor(Math.random()*animals.length)]
    return new_word
}

var init = {
    method: "GET",
    headers: {'X-Api-Key': '8B6D5CFzigYLTX2jUNJgug==h5OleVcXvOSVVilk'},
};

async function generate_and_fetch(animal) {
    const api = `https://api.api-ninjas.com/v1/animals?name=${animal}`
    let tip = ''
    
    await fetch(api, init).then(res => res.json()).then((data) => {
        tip = data[0].characteristics.slogan
        return tip

    }).catch((e) => {
        console.log('deu erro')
    })
}

generate_and_fetch(animals[0])