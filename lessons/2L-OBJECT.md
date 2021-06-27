---
path: "/2K-OOP"
title: "Object"
order: "2K"
section: "JAVASCRIPT"
description: "Object"
---

### Property descriptor flags

Besides value a objecy property has three special attributes called flags
To see them we gave to use a special method Object.getOwnProprtydescriptor

```js
let a = {
    name : "Ravi"
}

let descriptor = Object.getOwnPropertyDescriptor(a,'name')

console.log(descriptor)
```

### Defining a object property with flags

We can define a Object property flag using the Object.defineProperty  method

```js
let a = {
    name : "Ravi"
}

let descriptor = Object.defineProperty(a,'name' , {
    writable : false,
    enumerable : true,
    configurable : false
})

```
### Role of flags 
* writable : makes the property changeable
* enumerable : makes propert visible on iteration
* configurable : when set to false object property cannot be deleted


```js
let a = {
    name : "Ravi"
}

let descriptor = Object.defineProperty(a,'name' , {
    writable : false,
})
a.name = "Hello"
console.log(a.name) // Ravi

```

```js
let a = {
    age : 22,
    name : "Ravi"
}

let descriptor = Object.defineProperty(a,'name' , {
    enumerable : false,
})
for(let i in a){
    console.log(i) 
}
// age
```

```js
let a = {
    age : 22,
    name : "Ravi"
}

let descriptor = Object.defineProperty(a,'name' , {
    configurable : false,
})
delete a.name
console.log(a) //{age : 22 ,name : "Ravi"}
```
If you set anon configurable you cannot change any property flag of a object except for setting writable true to false



> Besides setting descriptor individually we can set them globally on a object as well 

There are some methods that set the object property flags on all properties of object

* Object.preventExtensions(obj) -> cannot add new property
* Object.seal -> cannot add new property + configurable : false
* Object.freeze -> cannot add new property + configurable : false , writable : false


You can also check them 

* Object.isExtensible(obj) 
* Object.isSealed(obj) 
* Object.isFrozen(obj) 


## Getters and setters 

There are two type of properties in a object : 
1. Data Properties
1. Accessor Properties

Data properties have value and Accessor properties have getter and setters

```js
let circle = {
    radius : 4 , 
    get area(){
        return Math.PI*(this.radius**2)
    },
    set area(value){
        this.radius = Math.sqrt(value/Math.PI)
    }
}

console.log(circle.area)
circle.area  = 49

console.log(circle)

```

Rules for Accessor Properties : 
* You cannot assign a value to accessor property
* There is no writable property falg for accessor property
* You cannot pass any parameter on getters


### Reusable Objects

Every object has a special hidden property called prototyope
It is either null or referencr another object.
We can set a object prototype by different ways
Every property of protype is inherited by object

## \_\_proto__

```js
    let vehicle = {fuel : 'diesel', seats : 4}
    let car = {tyres : 4 }
    car.__proto__ = vehicle
```
The prototype chain can be longer

```js
    let vehicle = {fuel : 'diesel', seats : 4}
    let car = {tyres : 4 }
    car.__proto__ = vehicle

    let tesla = {
        fuel : 'battery'
    }
    tesla.__proto__ = car
```
## prototype

```js

    let person = function(name , surname){
        this.name = name
        this.surname = surname
    }
    a.prototype.fullName = function(){
        return this.name + this.surname
    }
```

## Object.create

We can create a new object by using Object.create and pass a object as a prototype as its first argument and second argument is a object of property descriptors

```js
    let vehicle = {fuel : 'diesel', seats : 4}
    let car = Object.create(vehicle,{
        tyres : {
            value : 2
        }
    })
   

    let tesla = Object.create(car , {
        fuel : {
            value : 'battery'
        }
    })

```


## new constructor 
we can create a reusable object by using new constructor.
We create these type of object using constructor functions.

Constructor functions are regular functions 
They are executed only with "new" operator


```js
function Person(name , surname , age){
    this.name = name
    this.surname = surname
    this.age = age
    this.legs = 2
}

let ravi = new Person("Ravi","Lamichhane",22)
console.log(ravi)

let john = new Person("John" ,"Doe", 21)

console.log(john)
```
we can also define methods 

```js
function Person(name , surname , age){
    this.name = name
    this.surname = surname
    this.age = age
    this.legs = 2

    this.introduce = function(){
        console.log("hello I am "+ this.name+' ' + this.surname)
    }
}

let ravi = new Person("Ravi","Lamichhane",22)
ravi.introduce()
```
There are different builtin Constructor functions in js



Some of them are 
* String
* Number
* Boolean
* Array
* Date etc...

Every thing in javascript is a object

```js
    let a = new String('Hello')
    console.log(a)
```
Converting to primitive 

Every Object have two prototype methodss toString and valueOf
We use them to convert them into primitives

```js
    let a = new String('11')
    let b = a.toString()
    let c = new Number(12)
    let d = c.valueOf()
    let e = new Boolean(1)
    let f = e.valueOf()
    console.log(b , typeof b)
    console.log(d , typeof d)
    console.log(f , typeof f)
```

Example how object works 

```js
let a = {
  0 : 2,
  1 : 3,
  length : 2
}

a.__proto__ = new Array

a.length
a.push(3)
a.length

String.prototype.addb = function(){
    return this.valueOf() + 'b'
}
let b = 'sdsds'
let c = b.addb()
console.log(c)
```


Exercise : Recreate the exercise we did in function using objects.