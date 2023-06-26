/**
 *  @function findMostFrequentNumber() A função consiste em encontrar o número
 *  mais frequente dentro do array de números inteiros, e envolve percorrer o array
 *  e manter um registro da contagem de de cada número. Ao percorrer o array,
 *  atualizar um counter para cada número encontrado no array, mantendo o
 *  controle da frequência máxima e do número mais frequente encontrado.
 */

const findMostFrequentNumber = array => {
  let counter = {}
  let maxFrequency = 0
  let numberMostFrequent

  // Iteração para contagem dos números
  for (let i = 0; i < array.length; i++) {
    const num = array[i]

    // Faz a verificação incremento da contagem do número atual
    if (counter[num]) {
      counter[num]++
    } else {
      counter[num] = 1
    }
  }

  // Iteração para encontrar o número mais frequente
  for (const num in counter) {
    if (counter[num] > maxFrequency) {
      maxFrequency = counter[num]
      numberMostFrequent = num
    }
  }

  return numberMostFrequent
}

let arrNumber = [1, 3, 5, 3, 1, 1, 5, 1, 4]
let numberMostFrequent = findMostFrequentNumber(arrNumber)

console.log('Saída esperada: ', numberMostFrequent)
