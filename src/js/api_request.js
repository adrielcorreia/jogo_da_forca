var init = {
    method: "GET",
    headers: {'X-Api-Key': '8B6D5CFzigYLTX2jUNJgug==h5OleVcXvOSVVilk'},
};

function generate_and_fetch(animal) {
    const api = `https://api.api-ninjas.com/v1/animals?name=${animal}`
    
    fetch(api, init).then(res => res.json().then(data => {
        const slogan = data[0].characteristics.slogan
        tip.innerText = slogan

        if (tip.innerText === 'undefined') {
            console.log('deu indefinido, o animal foi:', animal)
        }
        
        console.log(data[0], 'tipo:', typeof(slogan))

        return slogan
    }).catch(() => {
        console.log('deu erro')
    }))
}