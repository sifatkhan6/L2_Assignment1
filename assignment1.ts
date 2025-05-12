function formatString(input: string, toUpper?: boolean): string {
    if(toUpper===false){
        return input.toLowerCase();
    }
    else{
        return input.toUpperCase();
    }
}

console.log(formatString('HEllo', true));