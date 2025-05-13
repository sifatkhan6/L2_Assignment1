**1. What are some differences between interfaces and types in TypeScript?**
*Answer:* Interface and Type Alias are kind of same but they has many differences. Interface can be extend with 'Extends' but type need to extend with intersections. We can declare multiple declarations with interface but its not possible with type alias. Interface is ideal for object on the other hand we can use type alias in object, primitive, funstion, union, tuple. Type alias supports unions but interface doesn't. Using type alias is more suitable for me. But when its coming to object and multiple type declaration, I preder interface. </br>

**2.What is the use of the keyof keyword in TypeScript? Provide an example.**
*Answer:* We use 'keyof' to get union of all property names of object. Keyof helps us to write more flexible and type-safe code, at the same time ensure, only valid property names will be used. For example, if we have Person type with properties name, age, and isStudent, then keyof Person will be the union "name" | "age" | "isStudent". For creating generic functions, keyof is more helpful. such as a function to safely get a value by key. Keyof also reduce bugs and improve code reliability. Example: 

```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person;
```