//JavaScript to display alert message

function handleSubmit() {
    // Get the value of the name input field
    var name = document.getElementById("name").value;
    // Display alert message with entered name
    alert("Thank you, " + name + "! We have received your message and will get back to you soon.");
    // Optional: You can also reset the form after submission
    document.getElementById("contact-form").reset();
    // Prevent the default form submission behavior
    return false;
}
