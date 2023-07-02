//GENERICS
type filtercallBack<U> = (
  valor: U,
  index?: number,
  array?: U[]
) => boolean;
//<T> Ele irá INFERIR O TIPO DO DADO QUE A FUNCAO TA RECEBENDO
function meuFilter<T>(array: T[], callbackfn:filtercallBack<T>):T[] {
  const novoArray =[];
  for(let i=0; i<array.length; i++) {
    if(callbackfn(array[i])) {
      novoArray.push(array[i])
    }
  }
  return novoArray;
}

const array = [1,2,3,4,5,6,7,8,9,10];

const arrayFiltradoOriginal = array.filter((valor) => valor < 5);
console.log(arrayFiltradoOriginal)

const ArrayFiltrado = meuFilter(array,(valor) => valor < 5)
console.log(ArrayFiltrado)
