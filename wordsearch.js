// collaboration of @souravbadhan & @keeganpearson

// transpose function to swap rows with columns
const transpose = function (matrix) {
    // if matrix empty, return empty array
    if (matrix.length === 0) {
        return [];
    }

    // create matrix with undefined values with as many rows as columns and vice versa
    let transposed = Array(matrix[0].length).fill().map(() => Array(matrix.length));

    // iterate over rows/columns of original matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
        // for each (i, j) position in original, switch them to (j, i) in new transposed matrix
            transposed[j][i] = matrix[i][j];
        }
    }

    // return transposed matrix
    return transposed;
}

// takes 2D array of letters and word as input
const wordSearch = (letters, word) => { 
    // if array is empty, return false
    if (letters.length === 0) {
        return false;
    }

    // concatates each row into single string, making array of strings with each representing horizontal line of characters
    const horizontalJoin = letters.map(ls => ls.join(''))
    // iterates through each string
    for (l of horizontalJoin) {
        // if contains word, return true immediately
        if (l.includes(word)) return true
    }

    // if word not found on horizontal, check vertical
    // transpose the matrix, rows become columns and vice versa
    const transposed = transpose(letters);

    // concatenates each row of transposed matrix, making array of strings each representing vertical line of characters in original matrixl
    const verticalJoin = transposed.map(ls => ls.join(''))

    // iterate over all strings
    for (l of verticalJoin) {
        // if string has word, return true immediately
        if (l.includes(word)) return true
    }
    // if no word on horizontal or vertical, return false
    return false;
}

module.exports = wordSearch