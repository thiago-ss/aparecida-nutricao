var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = extraiPaciente(form);


  var erros = validaPaciente(paciente);

  if(erros.length > 0) {
    exibeErro(erros);
    return;
  }

  adicionarPaciente(paciente);

  form.reset();
  var mensagemErro = document.querySelector("#mensagens-erro")
  mensagemErro.innerHTML = "";
});

function adicionarPaciente(paciente) {
  var pacienteTr = criaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach((erro) => {
    var li = document.createElement("li")
    li.textContent = erro;
    ul.appendChild(li)
  });
}

function extraiPaciente(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function criaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(criaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function criaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPeso(peso) {
  if(peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura >= 0 && altura < 3.0) {
    return true;
  } else {
    return false;
  }
}

function validaPaciente(paciente) {
  var erros = [];

  if(paciente.nome.length == 0) {
    erros.push("Preencha o campo de nome")
  }

  if(!validaPeso(paciente.peso)) {
    erros.push("Peso invalido");
  }
  if(!validaAltura(paciente.altura)) {
    erros.push("Altura invalida");
  }

  if(paciente.gordura.length == 0) {
    erros.push("Preencha o campo de gordura");
  }

  if(paciente.peso.length == 0) {
    erros.push("Preencha o campo de peso");
  }

  if(paciente.altura.length == 0) {
    erros.push("Preencha o campo de altura");
  }

  return erros;
}
