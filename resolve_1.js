/**
 *  O problema de encontrar o número mais frequente em um array de números
 *  inteiros envolve percorrer o array e manter um registro da contagem de
 *  ocorrências de cada número.
 *  Ao percorrer o array, atualizamos um contador para cada número encontrado,
 *  mantendo o controle da frequência máxima e do número mais frequente
 *  encontrado até o momento.
 */

function findMostFrequentNumber(array) {
  let counter = {}
  let maxFrequency = 0
  let numberMostFrequent = null

  for (let number of array) {
    if (counter[number]) {
      counter[number]++
    } else {
      counter[number] = 1
    }

    if (counter[number] > maxFrequency) {
      maxFrequency = counter[number]
      numberMostFrequent = number
    }
  }

  return numberMostFrequent
}

let array = [1, 2, 3, 4, 5, 2, 2, 3, 3, 3]
let numberMostFrequent = findMostFrequentNumber(array)
console.log(numberMostFrequent)
