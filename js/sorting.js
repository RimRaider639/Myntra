let sort=document.querySelector("#sort")
sort.addEventListener('change', function(){
    if (sort.value=='price_asc'){
        sortPrc('asc')
    } else if (sort.value=='price_dsc'){
        sortPrc('dsc')
    } else if (sort.value=='discount_dsc'){
        sortDisc()
    }
})

function sortPrc(order){
    if (order=='asc'){
      data.sort((a, b) => a.price - b.price)
    } else if (order=='dsc'){
      data.sort((b, a) => a.price- b.price)
    }
    display(data)
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
}

function sortDisc(){
    data.sort((a,b)=>(a.price/a.strike_off)-(b.price/b.strike_off))
    display(data)
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);
}