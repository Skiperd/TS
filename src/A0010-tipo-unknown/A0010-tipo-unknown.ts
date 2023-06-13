//FUNCIONA COMO UM ANY MAIS SEGURO
//VOCE TERA QUE CHECAR O TIPO ANTES DE UTILIZAR A VARIAVEL UNKNOWN


let x: unknown;
x = 100;
x = 'Oozrio'
x = 10
const y = 900

if(typeof x === 'number') console.log(x + y)

