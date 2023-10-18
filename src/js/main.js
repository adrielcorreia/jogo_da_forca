
import { lifes, gws, gssAccents, filter, button } from './root.js'
import { finalGame, guessed, not_guessed, createKeyboard, hyphens, ignoreHyphen } from './functions.js'

createKeyboard()
ignoreHyphen()

let count = hyphens

button.forEach(btn => {
    document.addEventListener('keydown', (e) => {
        if (e.key.toUpperCase() == btn.dataset.button) {
            btn.click()
        }
    })

    btn.addEventListener('click', () => {
        if (lifes.dataset.life < 5) {
            btn.style.cursor = 'default'
            
            if (gssAccents.includes(btn.innerText)) {
                count++
                for (let i = 0; i < gws.length; i++) {
                    if (btn.dataset.button == gssAccents[i]) {
                        guessed(i)
                        btn.style.background = '#9FA1D6'
                    }
                }

                if (count == filter.size) {
                    finalGame('Você ganhou!', 'victory')
                }

            } else {
                not_guessed()
                btn.style.background = 'var(--error-color)'
            }

        } else {
            finalGame('Você perdeu!', 'lost')
        }
    }, {once: true});
})
