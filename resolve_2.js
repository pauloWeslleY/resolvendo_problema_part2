/**
 * @function findSumIndices() Nesta função eu começo com um objeto vazio chamado
 * index, dentro dele ficara armazenados o números e seus indices logo em
 * seguida faço um loop FOR para percorrer a matriz dos números a cada número
 * atual eu calculo o complemento para conseguir obter o resultado da soma igual
 * ao alvo e depois subtraio com o número atual, depois eu faço a verificação
 * se existe o operador in dentro do objeto index, caso ele não exista armazeno
 * o número atual.
 */

const findSumIndices = (matrix, target) => {
  let index = {}

  for (let i = 0; i < matrix.length; i++) {
    let complement = target - matrix[i]

    if (complement in index) {
      return [index[complement], i]
    }

    index[matrix[i]] = i
  }

  return []
}

let matrix = [2, 7, 11, 15]
let target = 9
let response = findSumIndices(matrix, target)

console.log('Saída esperada: ', response)
