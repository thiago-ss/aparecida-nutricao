var botaoBuscar = document.querySelector("#buscar-paciente");
var erroAjax = document.querySelector("#erro-ajax");
erroAjax.classList.add("invisivel");

botaoBuscar.addEventListener("click", function () {
  console.log("Buscando pacientes...");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function() {
    if(xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var novosPacientes = JSON.parse(resposta);

      novosPacientes.forEach(function(paciente) {
        adicionarPaciente(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }

  });

  xhr.send();
});
