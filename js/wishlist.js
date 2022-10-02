let wl= JSON.parse(localStorage.getItem('wl')) || []
let bag = JSON.parse(localStorage.getItem('bag')) || []
display_wl_items(wl)
function display_wl_items(wl){
    document.querySelector("#items").innerHTML = null
    if (!loggedin){
        document.querySelector("#item-box>h2").innerHTML = '<a href="enterPhn.html">Login</a> to continue...'
        document.querySelector("#item-box>h2").style.fontWeight = '400'
        return
    }
    
    wl.forEach(function(prod, index){
        let wholeCard = document.createElement('div')
        let cancel = document.createElement('span')
        cancel.setAttribute('class', 'material-symbols-outlined cross') 
        cancel.innerText = 'cancel'
        cancel.addEventListener('click', function(){remove_from_wl(index)})
        let card = document.createElement('div')
        card.addEventListener('click', function(){
            localStorage.setItem("prodID", prod.product_id)
            window.location.href = "product.html"
        })
        let imagesLinks = prod.images.split("|")
        let img = document.createElement("img")
        img.src = imagesLinks[0]
        let title = document.createElement("p")
        title.innerText = prod.title
        let price = document.createElement("h4")
        price.setAttribute("class", "price")
        price.innerHTML = "Rs."+prod.price + (prod.strike_off==prod.price?"":"<strike> Rs." + prod.strike_off + " </strike>") + "<span>" + (prod.strike_off==prod.price?"":"("+Math.round((1-(+prod.price/+prod.strike_off))*100)+"% OFF)") + "</span>"
        card.append(img, title, price)

        let bag = document.createElement("button")
        bag.innerHTML = 'Move to bag'
        bag.addEventListener('click', function(event){
            event.preventDefault()
            store_to_bag(prod)
            alert('Product moved to bag!')
            remove_from_wl(index)
        })

        wholeCard.append(cancel, card, bag)
        document.querySelector("#items").append(wholeCard)
        document.querySelector('#item-box span').innerText = wl.length
})
}
function store_to_bag(prod){
    console.log(prod)
    bag.push(prod)
    localStorage.setItem('bag', JSON.stringify(bag))
}
function remove_from_wl(i){
    
    wl.splice(i, 1)
    console.log(wl)
    localStorage.setItem('wl', JSON.stringify(wl))
    display_wl_items(wl)
}