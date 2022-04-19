let n = document.querySelector('input.add')
let lista = document.querySelector('select.numerosDigitados')
let item = document.createElement('option')
let valores = []



function adicionarNumeros() {

  if (n.value <= 0 || n.value > 100) {
    alert("INVÁLIDO! Digite um número entre 1 e 100")



  } else if(n.value === item.value) {
    alert("Número repetido, insira outro valor")


  } else {
    let resposta = Number(n.value)
    let item = document.createElement('option')
    lista.append(item)

    item.innerHTML = ` Valor ${resposta} adicionado `
  }
}
  console.log(lista)


//numerosDigitados.append((` Valor ${resposta} adicionado `))
/*
else {
  valores.push(Number(add.value))
  let item = document.createElement('option')
  item.text = ` Valor ${resposta} adicionado `
  lista.appendChild(item)
  */
