let footerContent = {
    _111: [{title:'Men', link:'mens.html'},{title:'Women', link:'womens.html'},{title:'Kid', link:'#'},{title:'Home & Living', link:'#'},{title:'Beauty', link:'#'},{title:'Gift Cards', link:'#'},{title:'Myntra Insider', link:'#'}],
    _112:[{title:'Blog', link:'#'}, {title:'Careers', link:'#'}, {title:'Site Map', link:'#'}, {title:'Corporate Information', link:'#'}, {title:'Whitehat', link:'#'}],
    _12:[{title:'Contact Us', link:'#'},{title:'FAQ', link:'#'},{title:'T&C', link:'#'},{title:'Terms Of Use', link:'#'},{title:'Track Orders', link:'#'},{title:'Shipping', link:'#'},{title:'Cancellation', link:'#'},{title:'Returns', link:'#'},{title:'Privacy Policy', link:'#'},{title:'Grievance Officer', link:'#'}],
    keep_in_touch:[],
    _2:'Nike,  Puma,  Adidas,  Fila , Lee,  United Colors of Benetton,  Wrangler,  Fastrack,  Woodland,  Yepme,  Levis,  Tommy Hilfiger,  peter-england,  fabindia,  nike shoes,  tops,  shirts,  jackets,  myntra coupons,  kurtis,  shoes,  tunics,  dresses,  Watches , saree,  kurtas , bags,  T-shirts,  designer saree,  sunglasses,  jeans,  trousers,  adidas shoes,  casual shoes,  sports shoes,  fastrack watches,  ethnic wear,  woodland-shoes,  mobile app,  puma shoes,  accessories,  anarkali suit,  running shoes,  reebok,  formal wear,  cat,  jewellery'.split(',')
}


for (let i in footerContent){
    footerContent[i].forEach(function(el){
        if (i=='_2'){
            let link = document.createElement('a')
            link.innerText = el
            link.href = '#'
            let sep = document.createElement('span')
            sep.innerText = ' | '
            document.querySelector('#_2').append(link, sep)
            return
        }
        let link = document.createElement('a')
        link.innerText = el.title
        link.href = el.link
        document.querySelector('#'+i).append(link)
    })
}

