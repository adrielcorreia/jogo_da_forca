import { random, createKeyboard } from './functions.js'

export const ul = document.querySelector('.keyboard')
export const img = document.querySelector('.hangman')
export const tip = document.querySelector('.tip')
export const word = document.querySelector('.word')
export const lifes = document.querySelector('.lifes')
export const wl_img = document.querySelector('.wl_img')
export const wl = document.querySelector('.wl')
export const answer = document.querySelector('.corrent_answer')
export const menu = document.querySelector('.menu')
export const randomAnimal = random()
export const guessWord = randomAnimal.nome
export const gws = guessWord.toUpperCase().split('') // gws = guess word split
export const gssAccents = (guessWord.normalize('NFD').replace(/[\u0300-\u036f]/g, '')).toUpperCase().split('');
export const filter = new Set(gssAccents)

for (const i of gws) {
    word.innerHTML += 

    `<li class="lett">
        <p data-letter>&nbsp</p>
        <div class="underline" data-underline>
        </div>
    </li>`
}

for (const i of createKeyboard()) {
    ul.innerHTML += 
    
    `<li class="letter">
        <button data-button="${i}">${i}</button>
    </li>`
}

export const Letters = document.querySelectorAll('[data-letter]')
export const Underlines = document.querySelectorAll('[data-underline]')
export const button = document.querySelectorAll('[data-button]')
export const letter = document.querySelectorAll('.letter')

wl_img.style.width = '45%'
tip.innerText = randomAnimal.dica
letter[20].style.gridColumn = '3'