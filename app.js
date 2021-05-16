const display = document.getElementsByClassName('display')
const numbers = document.getElementsByClassName('btn')
const theme = document.getElementsByClassName('btn-round')[0]
const theme_change = document.querySelector('btn-round')

let number = ['1', '2', '3', '4', '5', '6', '7' , '8', '9', '']
let operator = ['+', '-', '*', '/', '']

/* for (let number of numbers) {
    number.addEventListener('click', function() {
        display[0].innerHTML += this.value
        console.log(display[0].innerHTML)
    })
} */
let dot = 0
let click = false

function clicked(val) {
    if (display[0].innerHTML == 0 && (val in number || val == '+' || val == '-')) {
        display[0].innerHTML = ''
        display[0].innerHTML += val
        return
    } else {
        if (display[0].innerHTML == 0 && (val == '*' || val == '/')) {
            display[0].innerHTML = 0
            return
        }
    }

    while (val == '.') {
        dot = dot + 1
        if (dot > 1) {
            console.log(dot)
            val = ''
        } else {
            display[0].innerHTML += val
            return
        }
    }

    if (val == '+' || val == '-' || val == '*' || val == '/') {
        dot = 0
    }
    
    display[0].innerHTML += val     
}

    
function reset() {
    display[0].innerHTML = 0
    dot = 0
}

function del() {
    let res = display[0].innerHTML
    if (res == 'ERROR') {
        display[0].innerHTML = 0
        return
    }
    display[0].innerHTML = res.substring(0, res.length -1)
    dot --
    if (display[0].innerHTML == '') {
        display[0].innerHTML = 0
    }
}

function cal() {
    click = true
    let res = display[0].innerHTML
    if (res.includes('--')) {
        res = res.replace('--', '+')
    }
    let rs = eval(res)
    display[0].innerHTML = rs.round(2)
    if (display[0].innerHTML == 'NaN') {
        display[0].innerHTML = 'ERROR'
    }
}

Number.prototype.round = function(places) {
    return +(Math.round(this + "e+" + places)  + "e-" + places);
}

function change1() {
    document.documentElement.setAttribute('data-theme', '1')
    theme.style.transform = 'translateX(0)'
    theme.style.transition = '0.3s ease-in-out'
}

function change2() {
    document.documentElement.setAttribute('data-theme', '2')
    theme.style.transform = 'translateX(20px)'
    theme.style.transition = '0.3s ease-in-out'
}

function change3() {
    document.documentElement.setAttribute('data-theme', '3')
    theme.style.transform = 'translateX(44px)'
    theme.style.transition = '0.3s ease-in-out'
}