export function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
    // const filteredArr = [];
    // for (let num of arr1) {
    //     if (!arr2.includes(num)) {
    //         filteredArr.push(num);
    //     }
    // }
    // return filteredArr;


    // const filteredArr = arr1.filter(num => {
    //     return !arr2.includes(num);
    // });
    // return filteredArr;


    return arr1.filter(element => !arr2.includes(element));
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
