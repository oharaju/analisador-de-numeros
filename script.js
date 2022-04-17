function adicionarNumeros() {
  let add = document.querySelector('input.add')
  let numerosDigitados = document.querySelector('div.numerosDigitados')
  let resposta = Number(add.value)


  if (add.value.length == 0 || resposta > 100) {
    alert("INVÁLIDO! Digite um número entre 1 e 100")

  } else {
    numerosDigitados.innerHTML += ` Valor ${resposta} adicionado `
  }
  console.log(add, numerosDigitados)

}



//numerosDigitados.append((` Valor ${resposta} adicionado `))