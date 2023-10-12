var myForm = document.getElementById("formEnviar")
var myPlaceholder = document.getElementById("placeholder")

myForm.onsubmit = (event) => {
    event.preventDefault()
    event.stopPropagation()
    var myInput = document.getElementById("inputAge")
    if (myInput.value < 18) {
        exitMessageDraw(myPlaceholder)
    } else {
        formDraw(myPlaceholder)
    }
 }

var myButton = document.getElementById("addButton")
myButton.onclick = () => {
    addItemList(myPlaceholder)
}

var myCleanButton = document.getElementById("cleanButton")
myCleanButton.onclick = () => {
    cleanList(myPlaceholder)
}