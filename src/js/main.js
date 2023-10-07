// import section
import { fetchTip } from './api_request.js'
import { random } from './random.js'

const ul = document.querySelector('.keyboard')
const img = document.querySelector('.hangman')
const tip = document.querySelector('.tip')
const word = document.querySelector('.word')
const lifes = document.querySelector('.lifes')
const wl_img = document.querySelector('.wl_img')
const wl = document.querySelector('.wl')
const answer = document.querySelector('.corrent_answer')
const menu = document.querySelector('.menu')

const gssWord = random()
const gws = gssWord.toUpperCase().split('') // guess word split
let keyboard = []

fetchTip(gssWord).then((slogan) => {
    tip.innerText = slogan
})

answer.innerText = `The correct word was ${gssWord}`
lifes.innerText = `Incorrent guesses: ${lifes.dataset.life}/6`

for (let i = 65; i < 90; i++) {keyboard.push(String.fromCharCode(i))}

for (const i of gws) {word.innerHTML += `<li class="lett" ><p data-letter>&nbsp</p><div class="underline" data-underline></div></li>`}

for (const i of keyboard) {ul.innerHTML += `<li class="letter"><button data-btn>${i}</button></li>`}

const Letters = document.querySelectorAll('[data-letter]')
const Underlines = document.querySelectorAll('[data-underline]')
const button = document.querySelectorAll('[data-btn]')
const letter = document.querySelectorAll('.letter')
let count = 0

letter[20].style.gridColumn = '3'

let filter = gws.filter((x, y) => {
    return gws.indexOf(x) == y
})

function final(msg, img) {
    wl_img.src = `./assets/${img}.gif`
    wl.innerText = msg
    menu.style.visibility = 'visible'
    menu.style.opacity = '1'
    menu.style.background = 'background: rgba(0, 0, 0, .5);'
    return
}

function guessed(i) {
    Letters[i].innerText = gws[i]
    Letters[i].classList.add('w_guessed') //word guessed
    Underlines[i].classList.add('u_guessed')
}

function not_guessed() {
    lifes.dataset.life++
    lifes.innerText = `Incorrent guesses: ${lifes.dataset.life}/6`
    img.src = `./assets/hangman-${lifes.dataset.life}.svg`
}

if (gws.includes(' ')) {
    count++
}

//---------------------------------------------------------------------------
button.forEach(btn => {
    document.addEventListener('keydown', (e) => {
        var name = e.key.toUpperCase()
        if (name == btn.innerText) {
            btn.click()
        }
    }, false)

    btn.addEventListener('click', () => {
        if (lifes.dataset.life < 5) {
            btn.style.cursor = 'default'
            
            if (gws.includes(btn.innerText)) {
                count++
                if (count == filter.length) {
                    final('You Win!', 'victory')
                    wl_img.style.width = '45%'
                }

                for (let i = 0; i < gws.length; i++) {
                    if (btn.innerText == gws[i]) {
                        guessed(i)
                        btn.style.background = '#9FA1D6'
                    }
                }
            } else {
                not_guessed()
                btn.style.background = 'var(--error-color)'
            }
        } else {
            not_guessed()
            final('Game Over!', 'lost')
            wl_img.style.width = '45%'
        }
    }, {once: true});
});