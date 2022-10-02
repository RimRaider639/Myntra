// mens data
let mensAll = objData.map(function(prod){
    if (prod.ideal_for=="Men"){
        return {
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
    }
})
mensAll = mensAll.filter(function(prod){
    return prod!= undefined;
})

localStorage.getItem("mensALL") || localStorage.setItem("mensAll", JSON.stringify(mensAll))

let brands_men = JSON.parse(localStorage.getItem("brands_men")) || {}

if (Object.keys(brands_men).length == 0){
    mensAll.forEach(function(prod){
        if (brands_men[prod.brand]==undefined){
            brands_men[prod.brand] = 1
        } else{
            brands_men[prod.brand] += 1
        }
        
    })
    localStorage.setItem("brands_men", JSON.stringify(brands_men))
}

prices_men = JSON.parse(localStorage.getItem("prices_men")) || store_prices()

function store_prices(){
    console.log('storing')
    prices_men = {1:[], 2:[], 3:[], 4:[]}
    let min_price = Infinity; let max_price = -Infinity;

        mensAll.forEach(function(prod){
            if (prod.price<min_price){
                min_price = prod.price
            } 
            if (prod.price>max_price){
                max_price = prod.price
            }
        })

    let interval = Math.ceil((max_price-min_price)/4)
    prices_men['min'] = min_price
    prices_men['max'] = max_price
    prices_men['interval'] = interval

        mensAll.forEach(function(prod){
            if (prod.price<=min_price+interval){
                prices_men[1].push(prod.product_id)
            } else if (prod.price<=min_price+interval*2){
                prices_men[2].push(prod.product_id)
            } else if (prod.price<=min_price+interval*3){
                prices_men[3].push(prod.product_id)
            } else{
                prices_men[4].push(prod.product_id)
            }
        })
    localStorage.setItem("prices_men", JSON.stringify(prices_men))
    return prices_men
}