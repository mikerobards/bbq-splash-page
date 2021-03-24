let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", e=> {
    e.preventDefault()

    let ourFormData = new FormData(e.target)

    let userFirstName = ourFormData.get("firstName")

    let updatedHtmlContent = `    <h2>Congratulations, ${userFirstName}!</h2>
    <p>You're on your way to becoming a BBQ Master!</p>
    
    <p class="fine-print">
      We'll never share your information without your permission
    </p>`

    let ourMainContent = document.getElementById("Main-Content")
    ourMainContent.innerHTML = updatedHtmlContent

})