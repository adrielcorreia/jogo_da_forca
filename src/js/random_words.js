const animals = [
    "Lion", "Tiger", "Elephant", "Giraffe", "Kangaroo", 
    "Zebra", "Rhinoceros", "Panda", "Hippopotamus", "Koala", 
    "Gorilla", "Penguin", "Shark", "Cobra", "Owl", 
    "Chameleon", "Dolphin", "Squirrel", "Hawk", "Leopard", 
    "Cheetah", "Polar Bear", "Raven", "Ostrich", "Seagull", 
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