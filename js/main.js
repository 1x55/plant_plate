function getFetch() {
    let inputVal = document.getElementById("barcode").value
    const url = ` https://world.openfoodfacts.org/api/v0/product/${inputVal}.json`

    if (inputVal.length !== 12) {
        alert(`Please ensure that barcode is 12 characters`)
        return;
    }

fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => { 
        console.log(data)
        if (data.status === 1 ) {
            const item = new ProductInfo(data.product)
            // item.testCall()
            item.showInfo()
            item.listIngredients();
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
    // testCall() {
    //     console.log(this.ingredients)
    // } 

    showInfo() {
        document.getElementById('product-img').src = this.image
        document.getElementById('product-name').innerText  = this.name
    }

    listIngredients() {
        let table = document.getElementById('ingredient-table')
        //table need to be refreshed when displaying new item, otherwise, contents will reamin as append continues

        // for (let i = 1; i < table.rows.length;) {
        //     table.deleteRow(i)
        // }
        for (let i = table.rows.length - 1; i >= 1; i--) {
            table.deleteRow(i);
        }

        //use for-in loop to iterate over the properties of an object. 
        for(let key in this.ingredients) {
            let newRow = table.insertRow(-1)
            let newIngredientCell = newRow.insertCell(0)
            let newVegetarianCell = newRow.insertCell(1)

            let newIngredientText = document.createTextNode(this.ingredients[key].text)
            
            let vegStatus = this.ingredients[key].vegetarian == null ? 'unkown' : this.ingredients[key].vegetarian
            let newVegetarianText = document.createTextNode(vegStatus)

            newIngredientCell.appendChild(newIngredientText)
            newVegetarianCell.appendChild(newVegetarianText)
        }   
    }
}