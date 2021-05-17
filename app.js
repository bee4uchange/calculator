const display = document.getElementsByClassName('display')
const numbers = document.getElementsByClassName('btn')
const theme = document.getElementsByClassName('btn-round')[0]
const page = document.getElementsByTagName('html')

let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '']

/* for (let number of numbers) {
    number.addEventListener('click', function() {
        display[0].innerHTML += this.value
        console.log(display[0].innerHTML)
    })
} */
let dot = 0
let click = false
let op = 0
let tmp = '+'

document.addEventListener("DOMContentLoaded", function () {

});

function clicked(val) {
    let len = display[0].innerHTML.toString()
    console.log(len)
    if (len == '0' && (val in number)) {
        display[0].innerHTML = ''
        display[0].innerHTML += val
        console.log('3')
        return
    } else {
        if (display[0].innerHTML == 0 && (val == '*' || val == '/' || val == '+' || val == '-' || val == '.')) {
            display[0].innerHTML = '0'
            display[0].innerHTML += val
            console.log('1')
            return
        }
    }

    while (val == '.') {
        dot = dot + 1
        if (dot > 1) {
            console.log(dot)
            val = val
        } else {
            display[0].innerHTML += val
            console.log('2')
            return
        }
    }

    while (val == '+' || val == '-' || val == '*' || val == '/') {
        op = op + 1
        if (op > 1) {
            if (val != tmp) {
                let res = display[0].innerHTML
                display[0].innerHTML = res.substring(0, res.length - 1)
                display[0].innerHTML += val
                tmp = val
                return
            }
        } else {
            display[0].innerHTML += val
            tmp = val
            return
        }
    }

    if (val == '+' || val == '-' || val == '*' || val == '/') {
        dot = 0
    }

    if (val in number) {
        op = 0
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
    display[0].innerHTML = res.substring(0, res.length - 1)
    dot--
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
    try {
        let rs = eval(res)
        display[0].innerHTML = rs.round(2)
        if (display[0].innerHTML == 'NaN') {
            display[0].innerHTML = 'ERROR'
        }
    } catch (e) {
        console.log('fixed')
        display[0].innerHTML = 'ERROR'
    }
}

Number.prototype.round = function (places) {
    return +(Math.round(this + "e+" + places) + "e-" + places);
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