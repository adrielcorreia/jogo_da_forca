var init = {
    method: "GET",
    headers: {'X-Api-Key': '8B6D5CFzigYLTX2jUNJgug==h5OleVcXvOSVVilk'},
};

function fetchTipData(animal) {
    const api = `https://api.api-ninjas.com/v1/animals?name=${animal}`
    
    fetch(api, init).then(res => res.json().then(data => {
        tip.innerText = data[0].characteristics.slogan
    }))
}