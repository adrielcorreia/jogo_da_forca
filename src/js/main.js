// import section
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
const randomAnimal = random()
const gssWord = randomAnimal.nome
const gws = gssWord.toUpperCase().split('') // guess word split
const gssAccents = (gssWord.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).toUpperCase().split('');
const filter = new Set(gssAccents)
let keyboard = []

for (let i = 65; i < 91; i++) {keyboard.push(String.fromCharCode(i))}
for (const i of gws) {word.innerHTML += `<li class="lett" ><p data-letter>&nbsp</p><div class="underline" data-underline></div></li>`}
for (const i of keyboard) {ul.innerHTML += `<li class="letter"><button data-btn="${i}">${i}</button></li>`}

const Letters = document.querySelectorAll('[data-letter]')
const Underlines = document.querySelectorAll('[data-underline]')
const button = document.querySelectorAll('[data-btn]')
const letter = document.querySelectorAll('.letter')
let count = 0

wl_img.style.width = '45%'
tip.innerText = randomAnimal.dica
letter[20].style.gridColumn = '3'

function final(msg, img) {
    wl_img.src = `./assets/${img}.gif`
    wl.innerText = msg
    menu.style.visibility = 'visible'
    menu.style.opacity = '1'
    menu.style.background = 'background: rgba(0, 0, 0, .5);'
    if (msg == 'Você perdeu!') {
        answer.innerText = `A palavra era ${gssWord}`
    }
}

function guessed(i) {
    Letters[i].innerText = gws[i]
    Letters[i].classList.add('w_guessed') //word guessed
    Underlines[i].classList.add('u_guessed')
}

function not_guessed() {
    lifes.dataset.life++
    lifes.innerText = `Tentativas: ${lifes.dataset.life}/6`
    img.src = `./assets/hangman-${lifes.dataset.life}.svg`
}

for (let i = 0; i < gws.length; i++) {
    if (gws[i] == '-') {
        count++
        Underlines[i].classList.add('u_guessed')
        Letters[i].classList.add('w_guessed')
    }
}
//---------------------------------------------------------------------------
button.forEach(btn => {
    document.addEventListener('keydown', (e) => {
        if (e.key.toUpperCase() == btn.dataset.btn) {
            btn.click()
        }
    }, false)

    btn.addEventListener('click', () => {
        if (lifes.dataset.life < 5) {
            btn.style.cursor = 'default'
            
            if (gssAccents.includes(btn.innerText)) {
                count++
                if (count == filter.size) {
                    final('Você ganhou!', 'victory')
                }

                for (let i = 0; i < gws.length; i++) {
                    if (btn.dataset.btn == gssAccents[i]) {
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
            final('Você perdeu!', 'lost')
        }
    }, {once: true});
})