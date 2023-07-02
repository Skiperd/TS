//Encadeamento Opcional e Operador de coalescência nula

type Documento = {
  titulo:string;
  texto:string;
  data?: Date;
}
//ENCADEAMENTO OPCIONAL
const documento: Documento = {
  titulo: 'Iluminati',
  texto: 'Texto',
  // data: new Date()
}

console.log(documento.data?.toDateString() ?? 'Não existe data.')
console.log(undefined ?? '2-Não existe data.')
console.log(null ?? '3-Não existe data.')
console.log(false ?? '4-Não existe data.')



