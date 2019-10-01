// fetch('http://puzzle.mead.io/puzzle').then((reponse) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit', (event) => {
    
    event.preventDefault();
    // const { search, value } = event.target;
    fetch('http://localhost:3000/weather?address=' + search.value).then((response) => {
        response.json().then((data) => {
            console.log(data.location);
            console.log(data.forecast);
        })
    })
    .catch((error) => {
        console.log(error)
    })

    
    console.log(search.value)
})