function inserir(num)
{
    document.getElementById('resultado').innerHTML += num
}

function ac()
{
    document.getElementById('resultado').innerHTML = ""
}

function DEL()
{
    const resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1)
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else
    {
        document.getElementById('resultado').innerHTML = "null"
    }
}