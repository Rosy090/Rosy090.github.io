const numberInput = document.getElementById("numberInput");

numberInput.addEventListener("input", function(event) {
    const value = event.target.value;
    event.target.value = value.replace(/\D/g, '');
});