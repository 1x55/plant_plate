function getFetch() {
    const choice = userInput
    const url = ` https://world.openfoodfacts.org/api/v0/product/${choice}.json`

fetch(url)
    .then(res => res.join()) //parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}