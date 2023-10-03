let keyboard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z'];
keyboard = keyboard.map((e) => {
    return e.toUpperCase();
})

const ul = document.querySelector('.keyboard')
const ulTeste = document.querySelector('.test')
const lifesText = document.querySelector('.lifes')
let lifes = 5; lifesText.innerHTML = `Tentativas: ${lifes}`
const lose = document.querySelector('.lose')
const guess_word = 'bicicleta'.toUpperCase()
const guess_word_split = guess_word.split('')
console.log(lifesText)

for (const i of guess_word_split) {
    ulTeste.innerHTML += `<li class="lett" data-letter>${i}</li>`
}

const Letters = document.querySelectorAll('[data-letter]')

Letters.forEach((e) => {
    e.style.opacity = '0'
})

console.log(Letters)

for (i = 0; i < keyboard.length; i++) {
    ul.innerHTML += `<li class="letter" ><button data-btn>${keyboard[i]}</button></li>`
}

const btn = document.querySelectorAll('[data-btn]')
const li = document.querySelectorAll('.letter')
li[18].style.gridColumn = '2'

btn.forEach(e => {
    e.addEventListener('click', () => {
        if (lifes != 1) {
            if (guess_word_split.includes(e.innerText)) {
                console.log(e.innerText)
                e.style.background = '#9FA1D6'

                Letters.forEach((l) => {
                    if (l.innerText == e.innerText) {
                        l.style.opacity = '1'
                    }
                })
            } else {
                lifes--
                lifesText.innerText = `Tentativas: ${lifes}`
                e.style.background = '#ba5e5e'
            }
        } else {
            lifesText.innerText = `Tentativas: 0`
            console.log('Gamer over')
            lose.style.visibility = 'visible'
        }
        
    }, {once: true});
});