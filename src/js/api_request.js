var init = {
    method: "GET",
    headers: {'X-Api-Key': '8B6D5CFzigYLTX2jUNJgug==h5OleVcXvOSVVilk'},
}

export async function fetchTip(animal) {
    const api = `https://api.api-ninjas.com/v1/animals?name=${animal}`
    let name = ''
    let slogan = ''
    
    await fetch(api, init).then((res) => res.json().then(data => {
        slogan = data[0].characteristics.slogan
        name = data[0].name
        
    }).catch(() => {
        if (name == '' || name == undefined || name == ' ') {
            console.log(`animal inexistente:`, name)
        } else {
            console.log('deu erro na hora do fetch')
        }
    }))

    return slogan
}