let bag = JSON.parse(localStorage.getItem("bag")) || []
let wishlist = JSON.parse(localStorage.getItem("wl")) || []

displayProd(localStorage.getItem("prodID"))
function displayProd(prodID){
    let product;
    objData.forEach(function(prod, i){
        if (prod.product_id == prodID){
            product = prod
            return
        }
    })
    let imgsec = document.querySelector("#model")
    let images = product.images.split("|")
    images.forEach(function(link){
        let img = document.createElement("img")
        img.src = link
        imgsec.append(img)
    })

    let details = document.querySelector("#details")
    let brand = document.createElement('h2')
    brand.innerText = product.brand
    let title = document.createElement('h2')
    title.innerText = product.title
    let rate = document.createElement("p")
    rate.innerHTML = "<span>4.3 ★ | 8.6k Ratings</span>"
    let price = document.createElement("h2")
    price.innerHTML="Rs."+product.variant_price + (product.variant_compare_at_price==product.variant_price?"":"<strike> Rs." + product.variant_compare_at_price + " </strike>") + "<span>" + (product.variant_compare_at_price==product.variant_price?"":"("+Math.round((1-(+product.variant_price/+product.variant_compare_at_price))*100)+"% OFF)") + "</span><br><span>inclusive of all taxes</span>"
    price.id = 'rate'
    let add2bag = document.createElement("button")
    add2bag.innerHTML = '<span class="material-symbols-outlined material">shopping_bag</span> Add to bag'
    add2bag.addEventListener('click', function(){
        storeItems('bag', product)
    })
    let wl = document.createElement("button")
    wl.innerHTML = '<span class="material-symbols-outlined">favorite</span>Add to wishlist'
    wl.addEventListener('click', function(){
        storeItems('wl', product)
    })
    
    let sizeLbl = document.createElement('h3')
    sizeLbl.innerHTML = "SELECT SIZE &nbsp &nbsp <a href='#'>SIZE CHART ></a>"
    let allSizes = document.createElement('div')
    let size = document.createElement('button')
    size.innerText = product.size //create a loop for multiple sizes
    allSizes.append(size)

    let descLbl=document.createElement('h2')
    descLbl.innerText = "PRODUCT DETAILS"
    let desc = document.createElement('p')
    desc.innerText = product.product_details
    
    details.append(brand, title, rate, price, add2bag, wl, sizeLbl, allSizes, descLbl, desc)
}

function storeItems(place, prod){
    let prodInfo = {
        product_id: prod.product_id,
        size: prod.size,
        price: prod.variant_price,
        strike_off: prod.variant_compare_at_price,
        brand: prod.brand,
        title: prod.title,
        color: prod.dominant_color,
        images: prod.images,
        in_stock: prod.is_in_stock,
        inventory: +prod.inventory
    }
    if (place=='bag'){
        bag = JSON.parse(localStorage.getItem('bag'))
        bag.push(prodInfo)
        localStorage.setItem('bag', JSON.stringify(bag))
        
    } else if (place=='wl'){
        wishlist = JSON.parse(localStorage.getItem('wl'))
        wishlist.push(prodInfo)
        localStorage.setItem('wl', JSON.stringify(wishlist))
        
    }
}
