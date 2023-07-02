type ObterChaveFN = <O,K extends keyof O>(objeto: O, chave: K) => O[K]

const obterChave: ObterChaveFN = (objeto,chave) => objeto[chave];

const animal = {
  nome: 'Leão',
  cor: 'bege',
  vacina: ['Vacina raiva', 'Vacina Febre']
}

const vacinas = obterChave(animal,'vacina')
console.log(vacinas)
