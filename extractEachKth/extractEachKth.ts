export function extractEachKth(inputArray: number[], k: number): number[] {
    k = k - 1;
    for (let i = k; i < inputArray.length; i += k){
        inputArray.splice(i, 1);
    };
    return inputArray;
};

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));