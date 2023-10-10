const animals = [
    'Bengar Tiger', 'Elephant', 'Giraffe', 
    'Kangaroo', 'Zebra', 'Rhinoceros', 
    'Panda', 'Hippopotamus', 'Koala', 
    'Gorilla', 'Penguin', 'Shark', 
    'Owl', 'Chameleon', 'Dolphin', 
    'Cheetah', 'Polar Bear', 'Ostrich', 
    'Raccoon', 'Sloth', 'Hedgehog', 
    'Jaguar', 'Armadillo', 'Meerkat', 
    'Gibbon', 'Mongoose', 'Chinchilla', 
    'Hummingbird', 'Koala', 'Wallaby', 
    'Hornet', 'Jackal', 'Koala', 'Macaw', 
    'Nightingale', 'Ocelot', 'Platypus', 
    'Quokka', 'Uakari', 'Weasel', 
    'Yak', 'Zonkey', 'Alligator', 'Baboon', 
    'Coyote', 'Dingo', 'Elephant Seal', 'Hippopotamus', 
    'Kingfisher', 'Numbat', 'Ox', 'Peacock', 'Quokka', 'Raccoon Dog', 'Tarsier', 'Umbrellabird', 'Vampire Bat', 'Zorse'
]

export function random() {
    return animals[Math.floor(Math.random()*animals.length)]
}