const ul = document.querySelector('.keyboard')
const word = document.querySelector('.word').innerHTML
const split = word.split('');
const lifesText = document.querySelector('.lifes')
let lifes = 5; lifesText.innerHTML = `Lifes: ${lifes}`

const lose = document.querySelector('.lose')

const guess_word = 'BICICLE'
const guess_word_split = guess_word.split('')
console.log(guess_word_split)

let keyboard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];

keyboard = keyboard.map((e) => {
    return e.toUpperCase();
})

for (i = 0; i < keyboard.length; i++) {
    ul.innerHTML += `<li class="letter"> <button data-btn>${keyboard[i]}</button> </li>`
}

const btn = document.querySelectorAll('[data-btn')

console.log(split)

btn.forEach(e => {
    e.addEventListener('click', () => {
        if (lifes != 1) {
            e.style.background = '#9FA1D6'

            if (split.includes(e.innerText)) {
            console.log(e.innerText)

            } else {
                lifes--
                lifesText.innerText = `Lifes: ${lifes}`
                e.style.background = '#ba5e5e'
            }
        } else {
            lifesText.innerText = `Lifes: 0`
            console.log('Gamer over')
            lose.style.visibility = 'visible'
        }
        
    }, {once: true});
});