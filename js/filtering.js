let brands_to_filter = []
let price_range_to_filter = []
    
    // filters
    // filter by brand
    let brandLbl = document.createElement("h2")
    brandLbl.innerText = "BRANDS"
    let brandSec = document.createElement("div")
    let i = 0;
    for (let brand in brands){
        let check = document.createElement('input')
        check.type = "checkbox"
        check.id = "b"+i
        check.value = brand
        check.addEventListener('change', function(b){
            if (b.target.checked && !brands_to_filter.includes(b.target.value)){
                    brands_to_filter.push(b.target.value)
            } else{
                brands_to_filter.splice(brands_to_filter.indexOf(b.target.value), 1)
            }
            filter_by_brand()
        })
        let name = document.createElement("label")
        name.innerText = brand + " (" + brands[brand] + ")"
        let br = document.createElement('br')
        brandSec.append(check, name, br)
        i++
    }

    // filter by prices
    let priceLbl = document.createElement("h2")
    priceLbl.innerText = "PRICE"
    let priceSec = document.createElement("div")
    let j = 0;
    for (let range=1; range<=4; range++){
        let check = document.createElement('input')
        check.type = "checkbox"
        check.id = "p"+j
        check.value = range
        check.addEventListener('change', function(p){
            if (p.target.checked && !price_range_to_filter.includes(p.target.value)){
                    price_range_to_filter.push(p.target.value)
            } else{
                price_range_to_filter.splice(price_range_to_filter.indexOf(p.target.value), 1)
            }
            console.log(price_range_to_filter)
            filter_by_price()
        })
        let name = document.createElement("label")
        name.innerText = (prices.min + prices.interval*(range-1)) + "-" + (prices.min + prices.interval*range) + " (" + prices[range].length + ")"
        let br = document.createElement('br')
        priceSec.append(check, name, br)
        j++
    }
    document.querySelector("#filter").append(brandLbl, brandSec, priceLbl, priceSec)

function filter_by_brand(){
    if (brands_to_filter.length == 0){
        display(data)
        return
    }
    filtered = data.filter(function(prod){
        return brands_to_filter.includes(prod.brand)
    })
    display(filtered)
}
function filter_by_price(){
    if (price_range_to_filter.length == 0){
        display(data)
        return
    }
    filtered = []
    price_range_to_filter.forEach(function(range){
        prices[range].forEach(function(id){
            data.forEach(function(prod){
                if (prod.product_id==id && !filtered.includes(prod)){
                    filtered.push(prod)
                }
            })
        })
    })
    console.log(filtered)
    display(filtered)
}