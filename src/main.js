let keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

keyboard = keyboard.map((e) => {
    return e.toUpperCase()
})


const ul = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const lifes = document.querySelector('.lifes')
const lose = document.querySelector('.lose')
const guess_word = 'bicicleta'.toUpperCase()
const gws = guess_word.split('') // guess word split
const img = document.querySelector('.hangman')

lifes.innerText = `Tentativas: ${lifes.dataset.life}/6`

for (const i of gws) {
    word.innerHTML += `<li class="lett" ><p data-letter>${i}</p><div class="underline" data-underline>${i}</div></li>`
}

for (i = 0; i < keyboard.length; i++) {
    ul.innerHTML += `<li class="letter"><button data-btn>${keyboard[i]}</button></li>`
}

const Letters = document.querySelectorAll('[data-letter]')
const Underlines = document.querySelectorAll('[data-underline]')

const button = document.querySelectorAll('[data-btn]')
let count = 0

let filter = gws.filter((x, y) => {
    return gws.indexOf(x) == y
})

console.log(filter)

button.forEach(btn => {
    btn.addEventListener('click', () => {
        if (count == filter.length) return

        if (lifes.dataset.life < 6) {
            btn.style.cursor = 'default'
            
            if (gws.includes(btn.innerText)) {
                count++
                btn.style.background = '#9FA1D6'

                Letters.forEach((letter) => {
                    if (letter.innerText == btn.innerText) {
                        letter.classList.add('w_guessed') //word guessed
                    }
                })

                Underlines.forEach((underline) => {
                    if (underline.innerText == btn.innerText) {
                        underline.classList.add('u_guessed') //underline guessed
                    }
                })
                console.log(count)

            } else {
                lifes.dataset.life++
                lifes.innerText = `Tentativas: ${lifes.dataset.life}/6`
                img.src = `./assets/hangman-${lifes.dataset.life}.svg`
                btn.style.background = '#ba5e5e'
            }
        } else {
            //lifes.innerText = `Tentativas: 0`
            lose.style.visibility = 'visible'
        }
        
    }, {once: true});
});