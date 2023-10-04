let keyboard = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

keyboard = keyboard.map((e) => {
    return e.toUpperCase()
})

const guess_word = generate_random().toUpperCase()

const ul = document.querySelector('.keyboard')
const word = document.querySelector('.word')
const lifes = document.querySelector('.lifes')
const lose = document.querySelector('.lose')
const gws = guess_word.split('') // guess word split
const img = document.querySelector('.hangman')
const all = document.querySelector('.all')
const menu = document.querySelector('.menu')
const correct_answer = document.querySelector('.corrent_answer')
correct_answer.innerText = `The correct word was ${guess_word}`

lifes.innerText = `Incorrent guesses: ${lifes.dataset.life}/6`

for (const i of gws) {
    word.innerHTML += `<li class="lett" ><p data-letter>&nbsp</p><div class="underline" data-underline>${i}</div></li>`
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
        if (lifes.dataset.life < 5) {
            btn.style.cursor = 'default'

            for (i = 0; i < gws.length; i++) {
                if (btn.innerText == gws[i]) {
                    console.log(btn.innerText);
                    Letters[i].innerText = gws[i]
                    Letters[i].classList.add('w_guessed') //word guessed
                    Underlines[i].classList.add('u_guessed')
                    btn.style.background = '#9FA1D6'
                }
            }
            
            if (gws.includes(btn.innerText)) {
                count++
                if (count == filter.length) {
                    console.log('win')
                    const wl_img = document.querySelector('.wl_img')
                    wl_img.src = './assets/victory.gif'
                    menu.style.visibility = 'visible'
                    menu.style.opacity = '1'
                    menu.style.background = 'background: rgba(0, 0, 0, .5);'
                    const wl = document.querySelector('.wl')
                    wl.innerText = 'You Win!'
                    return
                }

            } else {
                lifes.dataset.life++
                lifes.innerText = `Incorrent guesses: ${lifes.dataset.life}/6`
                img.src = `./assets/hangman-${lifes.dataset.life}.svg`
                btn.style.background = 'var(--error-color)'
            }
        } else {
            const wl = document.querySelector('.wl')
            wl.innerText = 'Game Over!'
            lifes.dataset.life++
            lifes.innerText = `Incorrect guesses: ${lifes.dataset.life}/6`
            img.src = `./assets/hangman-${lifes.dataset.life}.svg`
            menu.style.visibility = 'visible'
            menu.style.opacity = '1'
            menu.style.background = 'background: rgba(0, 0, 0, .5);'
            return
        }
        
    }, {once: true});
});