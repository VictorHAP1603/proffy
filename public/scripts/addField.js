// Find the button
document.querySelector("#add-time")
// When to click in the button
.addEventListener('click' , cloneField)

// To do a action
function cloneField() {
    // Duplicate 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false

    //Get the fields, what field?
    const fields = newFieldContainer.querySelectorAll('input')

    // for each fiel, clean
    fields.forEach(function(field) {
        // Get the field of moment and clean it
        field.value = ''
        
    })

    // Put in the page: where ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
