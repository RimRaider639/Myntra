let digits = '1234567890'
// let loggedin = localStorage.getItem('loggedin')

// remove profile clickable on navbar
document.querySelector('.ic-text:nth-Child(1)').style.display = "none"

let card = document.querySelector('#container')
if (localStorage.getItem('phoneNum')){
    displayOTP()
} else{
    displayLogin()
}

function displayLogin(){
    // add respective stylesheet
    let style = document.createElement('link')
    style.rel = "stylesheet"
    style.href = "css/login_signup.css"
    document.head.append(style)
    // document.querySelector('link[href = "css/login_otp_signup_common.css"]').remove()

    let img = document.createElement("img")
    img.id = "coupon"
    img.src = "img/coupon.png"

    let form = document.createElement('form')
    form.addEventListener('submit', storeNum)
    let heading = document.createElement("h2")
    heading.innerHTML = "Login <span>or</span> Signup"
    let mbl = document.createElement('input')
    mbl.placeholder = "Mobile Number"
    mbl.type = "tel"
    mbl.maxLength = "10"
    mbl.minLength = "10"
    mbl.required = true
    let countryCd = document.createElement("p")
    countryCd.innerHTML = "+91  &nbsp |  &nbsp"
    countryCd.id = "cd"
    let submit = document.createElement('input')
    submit.type = "submit"
    submit.value = "CONTINUE"
    let tc = document.createElement('p')
    tc.innerHTML = "By continuing, I agree to the <a href='#'>Terms of Use</a> & <a href='#'>Privacy Policy</a>"
    let help = document.createElement('p')
    help.innerHTML = "Having trouble logging in? <a href='#'>Get help</a>"
    form.append(heading, countryCd, mbl, tc, submit, help)
    card.append(img, form)
}

function displayOTP(){
    // add respective stylesheet
    let style = document.createElement('link')
    style.rel = "stylesheet"
    style.href = "css/otp.css"
    document.head.append(style)

    let img = document.createElement("img")
    img.id = "otp_icon"
    img.src = "img/otp_icon.png"

    let form = document.createElement('form')
    form.addEventListener('submit', storeOTP)
    let heading = document.createElement("h2")
    heading.innerHTML = "Verify with OTP"
    let numInfo = document.createElement('p')
    numInfo.innerText = "Sent to "+localStorage.getItem('phoneNum')
    let otpSec = document.createElement("div")
    otpSec.id = "otp"
    for (let i=0; i<4; i++){
        let num = document.createElement('input')
        num.type="text"
        num.size = "1"
        num.maxLength = "1"
        otpSec.append(num)
        num.addEventListener('change',function(){
            console.log(!digits.includes(num.value))
            if (!digits.includes(num.value)){
                num.value = ''
            }
        })
    }
    let submit = document.createElement('input')
    submit.type = "submit"
    submit.value = "CONTINUE"
    let resend = document.createElement('p')
    resend.innerHTML = "<a href='#'>Resend OTP</a>"
    let pwd = document.createElement('p')
    pwd.innerHTML = "Login using <a href='#'>Password</a>"
    let help = document.createElement('p')
    help.innerHTML = "Having trouble logging in? <a href='#'>Get help</a>"
    form.append(heading, numInfo, otpSec, submit, resend, pwd, help)
    card.append(img, form)
}
function storeNum(event){
    event.preventDefault()
    let mbl = document.querySelector('#container>form>input').value
    if (isNaN(mbl)){
        alert("Enter valid number!")
        return
    }
    localStorage.setItem('phoneNum', mbl)
    window.location.reload()
}

function storeOTP(event){
    event.preventDefault()
    let otp = "";
    for (let i=1; i<5; i++){
        otp+= document.querySelector('#otp>input:nth-child('+i+')').value
    }
    localStorage.setItem("otp", otp)
    validate()
}

function validate(){
    let retrieved = localStorage.getItem('otp')
    console.log(retrieved)
    if (retrieved=='1234'){
        localStorage.setItem('loggedin', true)
        window.location.href = 'mens.html'
    } else{
        alert('invalid OTP')
    }
}

