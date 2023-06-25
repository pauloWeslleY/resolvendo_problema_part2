function findSumIndices(matrix, target) {
  let map = {}

  for (let i = 0; i < matrix.length; i++) {
    let complement = target - matrix[i]

    if (complement in map) {
      return [map[complement], i]
    }

    map[matrix[i]] = i
  }

  return []
}

let matrix = [2, 7, 11, 15]
let target = 9
let index = findSumIndices(matrix, target)
console.log(index) // Output: [0, 1]
