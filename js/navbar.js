let nav = document.querySelector('#nav')
// logo
let imgdiv = document.createElement('div')
let img = document.createElement('img')
img.src = "img/myntra_navbar_logo.png"
imgdiv.append(img)
// categories
let catdiv = document.createElement('div')
let titles = ["MEN", "WOMEN", "KIDS", "HOME & LIVING", "BEAUTY", "STUDIO"]
let hrefs = ["mens.html", "womens.html", "#", "#", "#", "#"]
titles.forEach(function(title, i){
    let div = document.createElement('div')
    div.innerHTML = "<a href="+hrefs[i]+">"+title+"</a"
    catdiv.append(div)
})
// searchbar
let searchdiv = document.createElement("div")
searchdiv.innerHTML = '<span class="material-symbols-outlined">search</span><input type="text" id="search" placeholder="Search for products, brands and more">'
// profile, wishlist, bag
let endsec = document.createElement('div')
let icons = ['person', 'favorite', 'shopping_bag']
let content = ['Profile', 'Wishlist', 'Bag']
content.forEach(function(name, i){
    let icTxt = document.createElement("div")
    icTxt.setAttribute('class', 'ic-text')
    icTxt.innerHTML = '<span class="material-symbols-outlined">'+icons[i]+'</span><span>'+content[i]+'</span>'
    endsec.append(icTxt)
})

nav.append(imgdiv, catdiv, searchdiv, endsec)
document.body.append(nav)