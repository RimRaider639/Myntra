// womens data
let womensAll = objData.map(function(prod){
    if (prod.ideal_for=="Women"){
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
  womensAll = womensAll.filter(function(prod){
    return prod!= undefined;
  })

  localStorage.getItem("womensALL") || localStorage.setItem("womensAll", JSON.stringify(womensAll))

  let brands_women = JSON.parse(localStorage.getItem("brands_women")) || {}

if (Object.keys(brands_women).length == 0){
    womensAll.forEach(function(prod){
        if (brands_women[prod.brand]==undefined){
            brands_women[prod.brand] = 1
        } else{
            brands_women[prod.brand] += 1
        }
        
    })
    localStorage.setItem("brands_women", JSON.stringify(brands_women))
}

prices_women = JSON.parse(localStorage.getItem("prices_women")) || store_prices()

function store_prices(){
    console.log('storing')
    prices_women = {1:[], 2:[], 3:[], 4:[]}
    let min_price = Infinity; let max_price = -Infinity;

        womensAll.forEach(function(prod){
            if (prod.price<min_price){
                min_price = prod.price
            } 
            if (prod.price>max_price){
                max_price = prod.price
            }
        })

    let interval = Math.ceil((max_price-min_price)/4)
    prices_women['min'] = min_price
    prices_women['max'] = max_price
    prices_women['interval'] = interval

        womensAll.forEach(function(prod){
            if (prod.price<=min_price+interval){
                prices_women[1].push(prod.product_id)
            } else if (prod.price<=min_price+interval*2){
                prices_women[2].push(prod.product_id)
            } else if (prod.price<=min_price+interval*3){
                prices_women[3].push(prod.product_id)
            } else{
                prices_women[4].push(prod.product_id)
            }
        })
    localStorage.setItem("prices_women", JSON.stringify(prices_women))
    return prices_women
}