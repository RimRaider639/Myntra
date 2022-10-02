function display(list){
    let start = (+document.querySelector('#page-nav .active').innerText-1)*35
    list = list.slice(start,start+35)
    document.querySelector("#container").innerHTML = null
    list.forEach(function(prod, index){
        let card = document.createElement('div')
        card.addEventListener('click', function(){
            localStorage.setItem("prodID", prod.product_id)
            window.location.href = "product.html"
        })
        let imagesLinks = prod.images.split("|")
        let img = document.createElement("img")
        img.src = imagesLinks[0]
        let brand = document.createElement("h4")
        brand.innerText = prod.brand
        let title = document.createElement("p")
        title.innerText = prod.title.slice(0,24)
        if (prod.title.length>24){
            title.innerText+='...'
        }
        let price = document.createElement("h4")
        price.setAttribute("class", "price")
        price.innerHTML = "Rs."+prod.price + (prod.strike_off==prod.price?"":"<strike> Rs." + prod.strike_off + " </strike>") + "<span>" + (prod.strike_off==prod.price?"":"("+Math.round((1-(+prod.price/+prod.strike_off))*100)+"% OFF)") + "</span>"
        

        card.append(img, brand, title, price)
        document.querySelector("#container").append(card)
    })
    
    
}
function page_nav(){
    let pg = document.querySelector('#page-nav')
    for (let i=1; i<11; i++){
        let num = document.createElement('button')
        num.innerText = i
        num.addEventListener('click', function(){
            num.setAttribute('class', 'active')
            display(mensAll)
            for (let j=1; j<11; j++){
                if (j!=i){
                document.querySelector('#page-nav button:nth-child('+j+')').setAttribute('class', '')
                }
            }
        })
        pg.append(num)
    }
}

function reset_page(){
    document.querySelector('#page-nav button:nth-child(1)').setAttribute('class', 'active')
    for (let j=2; j<11; j++){
        document.querySelector('#page-nav button:nth-child('+j+')').setAttribute('class', '')
    }
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