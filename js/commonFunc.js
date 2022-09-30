function display(list){
    document.querySelector("#container").innerHTML = null
    list.forEach(function(prod, index){
        let card = document.createElement('div')
        card.addEventListener('click', function(){
            console.log("id:",prod.product_id)
            localStorage.setItem("prodID", prod.product_id)
            window.location.href = "product.html"
        })
        let imagesLinks = prod.images.split("|")
        let img = document.createElement("img")
        img.src = imagesLinks[0]
        let brand = document.createElement("h4")
        brand.innerText = prod.brand
        let title = document.createElement("p")
        title.innerText = prod.title
        let price = document.createElement("h4")
        price.setAttribute("class", "price")
        price.innerHTML = "Rs."+prod.price + (prod.strike_off==prod.price?"":"<strike> Rs." + prod.strike_off + " </strike>") + "<span>" + (prod.strike_off==prod.price?"":"("+Math.round((1-(+prod.price/+prod.strike_off))*100)+"% OFF)") + "</span>"
        

        card.append(img, brand, title, price)
        document.querySelector("#container").append(card)
    })
    
}

// function displayProd(prodID){
//     let product;
//     objData.forEach(function(prod, i){
//         if (prod.product_id == prodID){
//             product = prod
//             return
//         }
//     })
    
// }