var tabelaa = document.querySelector("#tabela-pacientes");

tabelaa.addEventListener("dblclick", function(event) {
  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 600);
});
