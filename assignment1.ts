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


class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
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


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

console.log(getDayType(Day.Sunday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      }
      
      else {
        resolve(n * n);
      }
    }, 1000);
  })
}

