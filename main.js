
const form = document.getElementById("formulario");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    
    let numeroA = parseInt(document.getElementById("numero-a").value);
    let numeroB = parseInt(document.getElementById("numero-b").value);
    let messageDiv = document.getElementById("message");

    if (numeroB > numeroA) {
        messageDiv.textContent = "Parabéns, o formulário é válido!";
        messageDiv.classList.remove("invalido");
        messageDiv.classList.add("valido");
    }   else {
        messageDiv.textContent = "Infelizmente o campo A é maior ou igual o campo B, tente novamente!"
        messageDiv.classList.remove("valido");
        messageDiv.classList.add("invalido");
    }
    setTimeout(() => {
        form.reset();
    }, 2000);
})

form.addEventListener('reset', function(e){

    let messageDiv = document.getElementById("message");
    messageDiv.textContent = "";
    
})