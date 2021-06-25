---
path: "/2H-Objects"
title: "Objects"
order: "2H"
section: "JAVASCRIPT"
description: "Objects"
---

### Creating a object

##### 1  Using Object literal

```js
let person = {
    name : "Ravi Lamichhane",
    age : 22,
    address : "Lamachaur 13"
}
```

```js
    let animal = {}
    animal.type = "Dog"
    animal.breed = "labrador"
```

#### 2 Using the nw keyword

```js
    const person = new Object()
    person.name = "Ravi Lamichhane"
    person.age = 22 
    person.address = "Lamachaur 13"
```

```js
    let animal = new Object({
        type : "dog",
        breed : "labrador"
    })
```

Objects are mutable 

```js
let a = {hello : 'world'}
let b = a
b.hello = "hi"
console.log(a)
```

Accessing Object properties

```js
let a = {
    hello :"hi"

}

console.log(a.hello)
console.log(a.['hello'])
console.log(a.['he'+'llo'])

```

#### Looping Through a object

```js
let a = {a: 1, b : 2 , c : 3}
for(let key  in a){
    console.log(key,a[key])
}

```

#### Deleting proberty 

```js
let a = {a: 1, b : 2 , c : 3}
delete a.b
console.log(a)
```

#### Nested Objects

```js
    let a = {
        a : [1,2,3],
        b : {a:1 ,
             b:2 ,
             c :[1 ,2 3] ,
             d : {hello : hi}
           }
    }

```


#### Object Methods 
```js
    let a = {
        foo : 'bar',
        hello : function() {
            console.log('Hello World')
        }
    }
    a.hello()
```

#### This keyword 

this keyword is used to reference the owner of the function


```js
    let person = {
        firstName: "John",
        lastName: "Doe",
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
```

https://codesandbox.io/s/great-meadow-n4jzv?file=/src/index.js

#### Some Builtin Objects

##### The Date Object
```js
    let  d = new Date()
    console.log (d)

    let e = new Date (2020 , 11, 5 ,11 , 30 , 40 , 5)
    console.log(e)

    let f = new Date ("December 15, 2021 4:15:22" )
    console.log(f)
```

### Date Methods

* getFullYear()


Returns the year (4 digits)
```js
    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getFullYear())
```

* getMonth()


Returns the month, from 0 to 11.
```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getMonth())

```

* getDate()


Returns the day of month, from 1 to 31,
```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getDate())

```

* getHours()

```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getHours())

```

* getMinutes()

```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getMinutes())

```

* getSeconds()

```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getSeconds())

```

* getMilliseconds()

```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getMilliseconds())

```
* getDay()
  
Returns the day of week, from 0 (Sunday) to 6 (Saturday).
```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getDay())

```

* getTime()


Returns the timestamp for the date 
```js

    let f = new Date ("December 15, 2021 4:15:22" )

    console.log(f.getTime())

```



# Math Object

The math object is used to do mathematical tasks.

It is not a constructor


#### Properties of math Object

* PI : 3.14
* LN10 :  natural logarithm of 10
* LN2 :  natural logarithm of
* E : Eulers Number (2.718)
* SQRT2 : Square root of 2


#### Math methods

* round()

returns the nearest integer
```js
   console.log( Math.round(3.3))
```

* ceil()

returns the value rounded up to its nearest integer:
```js
  console.log( Math.ceil(3.3))
```

* floor()

returns the value rounded downal

```js
  console.log( Math.floor(3.3))
```

* trunc()

returns the integer part

```js
  console.log( Math.trunc(3.3))
```

* pow(a,b)

return a to the power of b

```js
    console.log(Math.pow(3,2))
```

* sqrt()

returns square root of number

```js
    console.log(Math.sqrt(64))
```

* abs()

Returns positive value

```js
console.log(Math.abs(-4.3))
```

* min() and max()

```js
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))

```


* random()

returns a random integer

```js
    console.log(Math.random())
```