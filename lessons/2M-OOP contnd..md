---
path: "/2M-OOP-contnd"
title: "Object"
order: "2M"
section: "JAVASCRIPT"
description: "Object contnd"
---

## Class

Object can be created by using the class syntax.

```js
class Person {
    constructor(name , age){
        this.name = name
        this.age = age
    }
    function speak(){
        console.log('hello')
    }
}
let john = new Person('john', 22)

console.log(john.name)
console.log(john.age)
john.speak()
console.log(typeof Person , Person)
```

A constructor function is a function that is executed first at object creation


The above code is equivalent as : 
```js
function Person(name , age) {
   
        this.name = name
        this.age = age
 

}
Person.prototype.speak = function(){
        console.log('hello')
}

let john = new Person('john', 22)

console.log(john.name)
console.log(john.age)
john.speak()

```


### class Expression

```js
let Person = class {
    constructor(name , age){
        this.name = name
        this.age = age
    }
}

let john = new Person('john', 22)
console.log(john.name)
console.log(john.age)

```

### Dynamic Classes

Classes can also br created dynamically

```js
    function makeAnimal(sound){
        return class {
            speak(){
                console.log(sound)
            }
        }
    }

    let Dog = makeAnimal('bark')
    let Cow = makeAnimal('moo')

    let puppy = new Dog()
    puppy.speak()
    
```

#### Getters and setters 


```js
let Person = class {
    constructor(name ,surname, age){
        this.name = name
        this.surname = surname
        this.age = age
    }
    get fullName(){
        return this.name + ' ' + this.surname
    }
    set fullName(value){
        let nameArray = value.split(' ')
        this.name = nameArray[0]
        this.surname = nameArray[1]
    }
}

let john = new Person('john' , 'doe' , 22)
console.log(john.fullName)
john.fullName = 'John Stark'
console.log(john.name)
console.log(john.surname)
console.log(john.fullName)

```

### class inheritence

```js
class Animal {
    constructor(){
        this.eats = true
    }
    walk(){
        console.log('walk')
    }
}
class Dog extends Animal{
    bark(){
        console.log('bark')
    }
}

let puppy = new Dog()
puppy.walk()
puppy.bark()
puppy.eats
```

we can also extend a expression
```js
function a(text){
    return class {
        log(){
            console.log(text)
        }
    }
}

class Person extends a('hello'){
  run(){
    console.log('run')
  }
}
let john = new Person()

john.run()
john.log()
```

### overriding methods

```js
  class Animal {
    constructor(){
        this.eats = true
    }
    walk(){
        console.log('walk')
    }
}
class Turtle extends Animal{
    walk(){
        console.log('crawl')
    }
}  
let turtle = new Turtle()
turtle.walk()
```

### super()

super is used to call the constructor of parent

```js
class Person{
    constructor(name){
        this.name = name
    }
}
class Boy extends Person{
    constructor(name){
        super(name)
        this.gender = 'male'
    }
}

let john = new Boy('john')
console.log(john.name , john.gender)
```

## Static properties and methods

static properties and methods are available without invoking the constructor

```js
class Person{
    constructor(){
        this.legs = 2
    }
    walk(){
        console.log('walk')
    }
}
class Person2{
    eyes = 2
    static legs = 2

    static walk(){
        console.log('walk')
    }
}
console.log(Person2.legs)
Person2.walk()
```

### private properties and methods
static properties and methods are available only inside a object
```js
class Person{
    constructor(){
        this.legs = 2
    }
    walk(){
        console.log('walk')
    }
}
class Person2{
    #eyes
    constructor(){
      this.#eyes = 3
    }
    static legs = 2

    #walk(){
        console.log('walk')
    }
    log(){
      this.#walk()
    }
}
```


### instance of
```js
class Person {
  constructor(name){  
    this.name = name
  }
}

class Boy extends Person{
  constructor(name){
    super(name)
    this.gender = 'male'
  }
}
let boy = new Boy('john')
console.log(boy instanceof Person)
console.log(boy instanceof Boy)
```



