// remove profile clickable on navbar
document.querySelector('.ic-text:nth-Child(1)').style.display = "none"

let card = document.querySelector('#container')
// displayLogin()
displayOTP()

function displayLogin(){
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
    let img = document.createElement("img")
    img.id = "otp_icon"
    img.src = "img/otp_icon.png"

    let form = document.createElement('form')
    form.addEventListener('submit', storeNum)
    let heading = document.createElement("h2")
    heading.innerHTML = "Verify with OTP"
    let numInfo = document.createElement('p')
    numInfo.innerText = "Sent to "+localStorage.getItem('phoneNum')
    form.append(heading, numInfo)
    for (let i=0; i<4; i++){
        let num = document.createElement('input')
        num.type="number"
        num.size = "1"
        num.maxLength = "1"
        form.append(num)
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
    form.append(submit,resend, pwd, help)
    card.append(img, form)
}
function storeNum(){
    console.log(isNaN(+mbl.value))
    if (isNaN(+mbl.value)){
        alert("Enter valid number!")
        return
    }
    localStorage.setItem('phoneNum', mbl.value)
    Validite(mbl.value)
}

function validate(num){
    // let retrieveNum =  
}

