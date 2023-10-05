let number = document.getElementById('input')
let result = document.getElementById('result')
let change = 2
let change_2 = 10
const Btn = document.getElementById('submit')
const SelectElement_1 = document.querySelector("#selecter1")
const SelectElement_2 = document.querySelector("#selecter2")

Btn.onclick = function () {
    result.textContent = parseInt(number.value, change).toString(change_2)
}

SelectElement_1.addEventListener("change", (event) => {
    change = +event.target.value
    result.textContent = parseInt(number.value, change).toString(change_2)
  

}
)
SelectElement_2.addEventListener("change", (event) => {
    change_2 = +event.target.value
    result.textContent = parseInt(number.value, change).toString(change_2)
  
}
)


