function getFetch() {
    let inputVal = document.getElementById("barcode").value
    const url = ` https://world.openfoodfacts.org/api/v0/product/${inputVal}.json`

    if (inputVal.length !== 13) {
        alert(`Please ensure that barcode is 13 characters`)
        return;
    }

fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => { 
        console.log(data)
        if (data.status === 1 ) {
            //call additional stuff
        } else {
            alert(`Product ${inputVal} was not found. Please try another`)
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}