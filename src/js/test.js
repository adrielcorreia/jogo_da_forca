const {fetchTip} = require('./api_request')

fetchTip('Tiger').then((content) => {
    console.log(content)
})