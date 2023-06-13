//SERIA FAZER UM TYPECASTING - CONVERTER DE UM TIPO PARA OUTRO

//RECOMENDADO
//CONDICIONAL
const body = document.querySelector('body')
if(body) body.style.background= 'red';

//Non-null assertion(!) - objeto não será null em nenhum momento
const body2 = document.querySelector('body')!;
body2.style.background= 'red';

//TYPE ASSERTION
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background= 'red';

//HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Ozorio';
input.focus();
