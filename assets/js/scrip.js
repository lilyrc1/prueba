
var btn = document.getElementById("btn-form");
btn.addEventListener("click", function(){
  alert("Tu mensaje se envió correctamente.")

})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




