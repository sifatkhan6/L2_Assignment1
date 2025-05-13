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

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  else {
    return products.reduce((currentProduct, nextProduct) => {
        return currentProduct.price > nextProduct.price ? currentProduct : nextProduct;
    })
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((solve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      }
      
      else {
        solve(n * n);
      }
    }, 1000);
  })
}

