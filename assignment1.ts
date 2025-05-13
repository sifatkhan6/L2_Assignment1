function formatString(input: string, toUpper?: boolean): string {
    if(toUpper===false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((arr, curr) => arr.concat(curr));
}

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }
    else return value * 2;
}

console.log(processValue('sifat'));