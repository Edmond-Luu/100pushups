export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {

    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = inputArray[i] === elemToReplace ? substitutionElem : inputArray[i];
    }
    return inputArray;

    // inputArray.forEach((element,index) => {
    //     if(element === elemToReplace){
    //         inputArray[index] = substitutionElem;
    //     }
    // });
    // return inputArray;
    
}

console.log(arrayReplace([1, 2, 1], 1, 3));