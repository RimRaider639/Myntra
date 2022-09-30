function display(list){
    document.querySelector("#container").innerHTML = null
    list.forEach(function(prod, index){
        let card = document.createElement('div')
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