let brands_to_filter = []
let price_range_to_filter = []
let filtered_price = []
let filtered_brand = []
let sorted_brands = [] 
    
    // filters
    // filter by brand
    let brandSec = document.createElement("div")
    brandSec.innerHTML = "<h3>BRANDS</h3>"
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
            reset_page()
            displayFilteredProd()
        })
        let name = document.createElement("label")
        name.innerText = brand + " (" + brands[brand] + ")"
        let br = document.createElement('br')
        brandSec.append(check, name, br)
        i++
    }

    // filter by prices
    let priceSec = document.createElement("div")
    priceSec.innerHTML = "<h3>PRICE</h3>"
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
            filter_by_price()
            reset_page()
            displayFilteredProd()
        })
        let name = document.createElement("label")
        name.innerText = (prices.min + prices.interval*(range-1)) + "-" + (prices.min + prices.interval*range) + " (" + prices[range].length + ")"
        let br = document.createElement('br')
        priceSec.append(check, name, br)
        j++
    }
    document.querySelector("#filter").append(brandSec, priceSec)

function filter_by_brand(){
    let filtered = []
    data.forEach(function(prod){
        if (brands_to_filter.includes(prod.brand)){
            filtered.push(prod.product_id)
        }
    })
    filtered_brand = filtered
}
function filter_by_price(){
    let filtered = []
    price_range_to_filter.forEach(function(range){
        prices[range].forEach(function(id){
            if (!filtered.includes(id)){
                filtered.push(id)
            }
        })
    })
    filtered_price = filtered
}

function displayFilteredProd(){
    filtered = []
    data.forEach(function(prod){
        if (filtered_price.includes(prod.product_id) && filtered_brand.includes(prod.product_id)){
            filtered.push(prod)
        } else if(filtered_price.length===0 && filtered_brand.includes(prod.product_id)){
            filtered.push(prod)
        } else if(filtered_brand.length===0 && filtered_price.includes(prod.product_id)){
            filtered.push(prod)
        } 
    })
    if (brands_to_filter.length===0 && price_range_to_filter.length===0){
        display(data)
    } else{
        display(filtered)
    }
    
}