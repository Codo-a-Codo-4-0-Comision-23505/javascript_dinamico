var myForm = document.getElementById("formEnviar")
myForm.onsubmit = (event) => {
    
    event.preventDefault()
    event.stopPropagation()

    var myPlaceholder = document.getElementById("placeholder")
    
    var myInput = document.getElementById("inputAge")
    
    if (myInput.value < 18) {
        exitMessageDraw(myPlaceholder)
    } else {
        formDraw(myPlaceholder)
    }
 }
