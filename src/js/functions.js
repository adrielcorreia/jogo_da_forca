import { img, wl, menu, lifes, Letters, guessWord, gws, Underlines, wl_img, answer } from './root.js'
import { animais } from "./words.js"

export function random() {
    return animais[Math.floor(Math.random()*animais.length)]
}

export function createKeyboard() {
    let keyboard = []

    for (let i = 65; i < 91; i++) {
        keyboard.push(String.fromCharCode(i))
    }

    return keyboard
}

export let hyphens = 0

export function ignoreHyphen() {
    for (let i = 0; i < gws.length; i++) {
        if (gws[i] == '-') {
            hyphens++
            Underlines[i].classList.add('u_guessed')
            Letters[i].classList.add('w_guessed')
        }
    }
}

export function guessed(i) {
    Letters[i].innerText = gws[i]
    Letters[i].classList.add('w_guessed') //word guessed
    Underlines[i].classList.add('u_guessed')
}

export function not_guessed() {
    lifes.dataset.life++
    lifes.innerText = `Tentativas: ${lifes.dataset.life}/6`
    img.src = `./assets/hangman-${lifes.dataset.life}.svg`
}

export function finalGame(msg, img) {
    not_guessed()
    wl_img.src = `./assets/${img}.gif`
    wl.innerText = msg
    menu.style.visibility = 'visible'
    menu.style.opacity = '1'
    menu.style.background = 'background: rgba(0, 0, 0, .5);'
    
    if (lifes.dataset.life < 5) {
        answer.innerText = `A palavra era ${guessWord}`
    }
}