

function unirObjetos<O1,O2>(ob1: O1,obj2:O2): O1 & O2 {
  return {...ob1,...obj2}
  // return Object.assign({}, obj1,obj2);
}

const obj1 = {chave1: 'valor1'}
const obj2 = {chave2: 'valor2'}
const uniao = unirObjetos(obj1,obj2)
console.log(uniao)
