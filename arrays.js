/*function getSumOfEvenNumbers(array) {
    let sum = 0;
 
    function recursiveHelper(array) {
        if (array.length === 0) {
            return sum;
        } else if (array[0] % 2 === 0) {
            sum += array[0];
        }
        recursiveHelper(array.slice(1));
    } recursiveHelper(array);
    return sum;
}
    console.log(getSumOfEvenNumbers([1, 2, 3, 4, 5])); */


/*function findSmallestNumber(array) {
   return array.sort()[0];
}

console.log(findSmallestNumber([51, 22, 49, 83, 74]));*/


/*function arrayToString(array) {
    return array.join(',');
}

console.log(arrayToString(['Mango', 'Poly', 'Ajax']));*/


function sumElementsOfTwoArrays(array1, array2) {
    return [...array1, ...array2].reduce((total, num) => {
        return total += num
    }, 0);
}

console.log(sumElementsOfTwoArrays([1, 2, 3], [4, 5, 6]))