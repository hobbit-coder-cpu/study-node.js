const axios = require('axios')

axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
.then(response => console.log(response))
.catch(error => console.log(error))

// fetch('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
// .then(response => console.log(response))
// .catch(error => console.log(error))