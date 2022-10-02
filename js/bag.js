let cart = JSON.parse(localStorage.getItem('bag')) || [];
let couponCodes = ['masai30'];
let qtdList = JSON.parse(localStorage.getItem('qtdList')) || new Array(cart.length);
console.log(cart)
if (cart.length === 0){
    document.querySelector('#container > span').innerText = "No items to show";
} else{
    display();
}

function display(){
    document.querySelector('#container').innerHTML="";
    if (!loggedin){
        document.body.innerHTML = null
        document.querySelector("body>h1").innerHTML = '<h2><a href="enterPhn.html">Login</a> to continue...</h2>'
        document.querySelector("body>h1").style.fontWeight = '400'
        return
    }
    cart.forEach(function(el, i){
        displayCard(el, i)
    })
}

function displayCard(prod, i){
    console.log('display card')
    let card = document.createElement('div')

    //img
    let img = document.createElement('img')
    img.src = prod.images.split('|')[0]

    //text area
    let text_area = document.createElement("div")
    let title = document.createElement('h3')
    title.innerText = prod.title
    let price = document.createElement('h3')
    price.innerText = prod.price
    text_area.append(title, price)

    //quantity and delete
    let func = document.createElement('div')
    let qtdLabel = document.createElement('label')
    qtdLabel.innerText = "Qtd: "
    let qtd = document.createElement('input')
    qtd.type = "number"
    qtd.value = qtdList[i] || 1
    qtdList[i] = +qtd.value
    qtd.addEventListener('change', function(){
        if (+qtd.value<1){
            qtd.value = 1
            return
        }
        qtdList[i] = +qtd.value
        localStorage.setItem('qtdList', JSON.stringify(qtdList))
        document.querySelector('#cost'+i+'>span').innerText = (+qtd.value )* (+prod.price)
        ammount =  computeAmt()
        document.querySelector('#details>h3:nth-child(2)>span').innerText = ammount
    })
    let cost = document.createElement('h3')
    cost.id = "cost"+i
    cost.innerHTML = "Cost: <span>"+(+prod.price*+qtd.value)+"</span>"
    let dlt = document.createElement('button')
    dlt.innerText = 'Remove'
    dlt.addEventListener('click', function(){
        cart.splice(i, 1)
        qtdList.splice(i, 1)
        window.location.reload()
        localStorage.setItem('bag', JSON.stringify(cart))
        localStorage.setItem('qtdList', JSON.stringify(qtdList))
    })

    //appending
    func.append(cost, qtdLabel, qtd, dlt)
    card.append(img, text_area, func)
    document.querySelector('#container').append(card)
}

let ammount = computeAmt();
localStorage.setItem('qtdList', JSON.stringify(qtdList))
document.querySelector('#details>h3:nth-child(1)>span').innerText = cart.length
document.querySelector('#details>h3:nth-child(2)>span').innerText = ammount
document.querySelector('#apply').addEventListener('click', function(){
    let code = document.querySelector("#code").value
    couponCodes.forEach(function(el, i){
        if (el == code){
            ammount*=0.7
            document.querySelector('#details>h3:nth-child(2)>span').innerText = ammount.toFixed(2)
            alert('Coupon successfully applied!')
        } else{
            alert('Invalid coupon!')
        }
    })
})


function computeAmt(){
    amt = cart.reduce(function(acc, el, i){
            return acc + (qtdList[i]*(+el.price))
        }, 0)
    return amt
}

//payment
form = document.querySelector('form')
form.addEventListener('submit', redirect)
let date = new Date()
let expMonth = document.querySelector('#expMonth')
expMonth.value = (+date.getMonth()+1)
let expYear = document.querySelector('#expYear')
expYear.value = date.getFullYear()
let cardNum = document.querySelector('#cardNum')
cardNum.value = '123456789123' 
let cvv = document.querySelector('#cvv')
cvv.value = '123'
function redirect(event){
    event.preventDefault()
    let credData = {
        name: form.name.value,
        cardNum : form.cardNum.value,
        cvv : form.cvv.value,
        expMonth : form.expMonth.value,
        expYear : form.expYear.value
    }
    if (credData.cardNum === '123456789123' && credData.cvv === "123" && +date.getMonth()+1 == credData.expMonth && date.getFullYear() == credData.expYear && credData.name!=''){
        localStorage.setItem('credData', JSON.stringify(credData))
        window.location.href = "otp.html"
    } else{
        alert("Invalid or empty values!")
    }
    
}