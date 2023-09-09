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
            const item = new ProductInfo(data.product)
            item.testCall()
        } else {
            alert(`Product ${inputVal} was not found. Please try another`)
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

class ProductInfo {
    constructor(productData) {
        this.name = productData.product_name
        this.ingredients = productData.ingredients
        this.image = productData.image_url
    }
    testCall() {
        console.log(this.ingredients)
    }
}