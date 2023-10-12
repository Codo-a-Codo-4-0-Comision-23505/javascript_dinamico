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
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json') 
    .then(response => response.json()) 
    .then(data => { 
        console.log(data)
        addItemList(myPlaceholder, data.chartName)
    });
   
}

var myCleanButton = document.getElementById("cleanButton")
myCleanButton.onclick = () => {
    cleanList(myPlaceholder)
}