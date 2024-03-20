
fetch('localhost:3000/home', {
    method: "POST",
    body: JSON.stringify({
        c: "c"
    })
})
.then(response => {console.log(response.json)})
.catch(error => console.log(error))