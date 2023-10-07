var init = {
    method: "GET",
    headers: {'X-Api-Key': '8B6D5CFzigYLTX2jUNJgug==h5OleVcXvOSVVilk'},
};
export async function fetchTip(animal) {
    const api = `https://api.api-ninjas.com/v1/animals?name=${animal}`
    let slogan = ''
    
    await fetch(api, init).then((res) => res.json().then(data => {
        slogan = data[0].characteristics.slogan
        
    }).catch((err) => {
        console.log('Ocorreu um erro durante a execução do fetch:', err)
    }))

    return slogan
}