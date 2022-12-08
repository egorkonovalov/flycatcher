---
layout: post.njk
title: Polymorphism and Generic Types
tags: post
date: Last Modified
---

## {{ title }}

Concrete types in TypeScript are the pillars of the language. You literally can't go anywhere without letting the compiler now that `myDogAge` is going to be a `number` and `myFriendsBirthdays` will be nothing but a `Date[]`. Concrete types are helpful when you are certain about the type you're expecting to use in your function. But sometimes it's better if the function accepts several types, still being type safe.

Say you want to write a function which returns a new array with values that satisfy some rule. That's how you would do it in JS:

```js
function filter(arr, func) {
  let result = []
  for (let i in arr) {
    let item = arr[i]
    if (func(item)) {
      result.push(item)
    }
  }
  return result
}

filter(['a', 'ab', 'abc', 'abcd'], x => x.length > 2) // returns ['abc', 'abcd']
```

Since we want it to be type-proven, let's limit the signature with a concrete type:

```ts
type Filter = {
  (arr: string[], f: (item: string) => boolean): string[]
}
```

Alright, that's type-proven and... yet too concrete. What if we want to filter numbers or objects? Of course we can use **generic type**!

```ts
type Filter = {
  <T>(arr: T[], f: (item: T) => boolean): T[]
}

let filter: Filter = (arr, func) => {
  ```function code```
}

filter(['a', 'ab', 'abc', 'abcd'], x => x.length > 2) // returns ['abc', 'abcd']

filter([1, 2, 3, 4], x => x > 2) // returns [3, 4]

let cars = [
  {mark: 'Toyouta'},
  {mark: 'Ford'},
  {mark: 'Lada'}
]

filter(cars, x => x.mark.startsWith('T')) // returns [{ "mark": "Toyouta"}]
```

What happens above is that we are saying TypeScript that the type of the argument which the function accepts can be anything. Wait... "anything"? Doesn't it contradicts the type safety? In fact, it doesn't. While it seems like we have blured the lines between types for this function, we actually have asked TypeScript to infer what T is for a given call to filter and substitute that type in for every T it sees. As strict as possible!

Or is it? Well, we can make it more strict and place an alias for a generic type rigth after the type name in the type declaration:

```ts
type Filter<T> = {
  (arr: T[], f: (item: T) => boolean): T[]
}
```

Now you *must* declare which type will be substituted in for every T in your signature, otherwise the compiler will throw an error:

```ts
let filter: Filter = (arr, func) => {
  ```function code```
} // <--- Generic type 'Filter' requires 1 type argument(s).

let filterForNumbers: Filter<number> = (arr, func) => {
  ```function code```
} // <--- OK!
```

This was a simple example of how to achieve polymorphism using generic types in TypeScript. This is only a small piece of abilities that generics can give us for making our code explicit and error-proven.
