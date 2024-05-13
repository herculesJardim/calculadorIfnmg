let somar = document.getElementById('addButton')
let subtrair = document.getElementById('subtractButton')
let multiplicar = document.getElementById('multiplyButton')
let dividir = document.getElementById('divideButton')
somar.addEventListener('click',soma);
subtrair.addEventListener('click',subtracao)
multiplicar.addEventListener('click',multiplicacao)
dividir.addEventListener('click',divisao)
let resultSpan = document.getElementById('result')
function soma(){
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    if(!isNaN(n1) && !isNaN(n2)){
        let result= n1+n2
        resultSpan.textContent = result
    }
    else{
        resultSpan.textContent = "Entradas Invalidas"
    }
}
function subtracao(){
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    if(!isNaN(n1) && !isNaN(n2)){
        let result= n1-n2
        resultSpan.textContent = result
    }
    else{
        resultSpan.textContent = "Entradas Invalidas"
    }
}
function multiplicacao(){
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    if(!isNaN(n1) && !isNaN(n2)){
        let result= n1*n2
        resultSpan.textContent = result
    }
    else{
        resultSpan.textContent = "Entradas Invalidas"
    }
}

function divisao(){
    let n1 = Number(document.getElementById('num1').value)
    let n2 = Number(document.getElementById('num2').value)
    if(!isNaN(n1) && !isNaN(n2)){
        if(n2!=0){
            let result= n1/n2
            resultSpan.textContent = result
        }else{
            resultSpan.textContent='Erro: Não é possível dividir por 0'
        }
    }
    else{
        resultSpan.textContent = "Entradas Invalidas"
    }
}
