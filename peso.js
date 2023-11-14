var nome = prompt('Informe seu nome: ');
var altura = prompt('Informe sua Altura(em cm): ');
altura = parseFloat(altura)/100;
var peso = prompt('Informe seu peso: ');
peso = parseFloat(peso);

var calculo = ((peso/altura**2).toFixed(2));

var resultado = null;

    if (calculo<16) //1
    {
        resultado = ('BAIXO PESO MUITO GRAVE')
    }
    else if(calculo>16 && calculo<17) //2
    {
        resultado= ('BAIXO PESO GRAVE');
    }
    else if(calculo>17 && calculo<18.49) //3
    {
        resultado= ('BAIXO PESO');
    }
    else if(calculo>=18.50 && calculo<24.99) //4
    {
        resultado= ('PESO NORMAL');
    }
    else if(calculo>25 && calculo<29.99) //5
    {
        resultado= ('SOBREPESO');
    }
    else if(calculo>30 && calculo<34.99) //6
    {
        resultado= ('OBESIDADE GRAU I');
    }
    else if(calculo>35 && calculo<39.99) //7
    {
        resultado= ('OBESIDADE GRAU II');
    }
    else if(calculo>40) //7
    {
        resultado= ('OBESIDADE GRAU III');
    }

document.write('<hr>')

document.write(nome + ' | ' + calculo + ' | ' + resultado);

document.write('<hr>')

