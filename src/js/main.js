const ul = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const lifes = document.querySelector('.lifes')
const lose = document.querySelector('.lose')
const img = document.querySelector('.hangman')
const guess_word = generate_random()
const gws = guess_word.toUpperCase().split('') // guess word split
const all = document.querySelector('.all')
const menu = document.querySelector('.menu')
const correct_answer = document.querySelector('.corrent_answer')
const tip = document.querySelector('.tip')

let keyboard = []

const t = generate_and_fetch(guess_word)
console.log(tip.innerText)

if (t) {
    console.log('bla')
}

correct_answer.innerText = `The correct word was ${guess_word}`
lifes.innerText = `Incorrent guesses: ${lifes.dataset.life}/6`

for (i=65; i<90; i++) {keyboard.push(String.fromCharCode(i))}

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
    const wl_img = document.querySelector('.wl_img')
    const wl = document.querySelector('.wl')
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
                }

                for (i = 0; i < gws.length; i++) {
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
            final('Game Over!', 'lost')
        }
    }, {once: true});
});