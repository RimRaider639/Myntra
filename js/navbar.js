let nav = document.querySelector('#nav')
let loggedin = localStorage.getItem('loggedin')
// logo
let imgdiv = document.createElement('div')
let img = document.createElement('img')
img.src = "img/myntra_navbar_logo.png"
img.addEventListener('click', function(){
    window.location.href = 'index.html'
})
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
    if (i>0){
        icTxt.addEventListener('click', function(){
            window.open(name[0].toLowerCase()+name.slice(1,10)+'.html')
        })
    } else{
        let bound = document.createElement('div')
        bound.id = 'border'
        let drop = document.createElement('div')
        let login = document.createElement('button')
        drop.id = 'profile'
        let wlc = document.createElement('h3')
        let mbl = document.createElement('p')
        if (loggedin){
            wlc.innerText = 'Hello Madhurima'
            mbl.innerText = localStorage.getItem('phoneNum')
        } else{
            wlc.innerText = 'Welcome'
            mbl.innerText = ''
        }
        
        let txt = document.createElement('p')
        txt.innerText = 'To access account and manage orders'
        login.innerText = 'Login/Signup'
        login.addEventListener('click', function(){
            window.location.href = 'enterPhn.html'
        })
        if (loggedin){
            login.innerHTML = '<a href>Sign Out</a>'
            login.addEventListener('click',function(){
                localStorage.clear()
                window.location.reload()
            })
            txt.innerHTML = null
        }
        drop.append(wlc, mbl, txt, login)
        bound.append(drop)
        icTxt.append(bound)
        bound.addEventListener('mouseover', function(){
            drop.style.display = 'inline-block'
        })
        drop.addEventListener('mouseover', function(){
            drop.style.display = 'inline-block'
        })
        bound.addEventListener('mouseout', function(){
            drop.style.display = 'none'
        })
    }
    endsec.append(icTxt)
})

nav.append(imgdiv, catdiv, searchdiv, endsec)
document.body.append(nav)