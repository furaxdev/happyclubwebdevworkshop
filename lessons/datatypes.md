---
path: "/datatypes"
title: "DATATYPES"
order: "2A"
section: "JAVASCRIPT"
description: "datatypes"
---
# Datatypes

We have learn about values and variable lets talk about what is datatypes.

Datatypes is what kind of data we can store in variables. It indicates the characteristics of data.

## There are two types of datatypes
1. Primitive Datatypes
2. Compositive Datatypes

### Primitive Datatypes:

Primitive datatypes are the datatypes that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null. Most of the time, a primitive value is represented directly at the lowest level of the language implementation. All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## **String:**
The String is used to represent and manipulate a sequence of characters. Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method. It is represented by either single quotes or doube quotes.
```js
const character = "This is the string"
const str = 'This is a string'
const concat = character + str

console.log(concat) //This is the stringThis is a string
// to give the space between This is the stringThis is a string
console.log(character + " " + str)
//This is the string This is a string
```
To access the character of the string we use charAt property.
```js
const character = "This is the string"
console.log(character.charAt(1)) //h
//or
console.log(character[1]) //h
```
Now lets talk about template literals. Instead of using single quote or double quote we can use back tick.
```js
const character = `This is string`
const fistName = "sulabh"
const age = 25
console.log(`My name is ${firstName} and my age is ${age}`)
//My name is sulabh and my age is 25
```
lets see string length.
```js
const club = "my favorite club of wrc is happy club"
console.log(club.length) //37
```
Now what is indexing of string??? lets see:

```js
const language = 'js is awesome'
```
In this case index is as follow:
Index always starts with 0. Character at 0, -12 is 'j', Character at 1, -11 is 's', Character at 2, -10 is ' ', Character at 3, -9 is 'i', Character at 4, -8 is 's', Character at 5, -7 is ' ', Character at 6, -6 is 'a', Character at 7, -5 is 'w', Character at 8, -4 is 'e', Character at 9, -3 is 's', Character at 10, -2 is 'o', Character at 11,-1 is 'e'

There are lots of methods in the string. Lets see some of them.
### indexOf("string", "the starting position")
The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string. If the text is not found returns -1
```js
const str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")); //7
```
### lastIndexOf("string", "the starting position")
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string. If the text is not found return -1.
```js
const str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate")); //21
```
### replace("specified", "another value")

The replace() method replaces a specified value with another value in a string. The replace() method does not change the string it is called on. It returns a new string. By default, the replace() method replaces only the first match. The replace() method is case sensitive.
```js
const str = "Please visit Microsoft and Microsoft!";
console.log(str.replace("Microsoft", "Facebook")); //Please visit Facebook and Microsoft!. completely return new string
console.log(str); //Please visit Microsoft and Microsoft!
console.log(str.replace('microsoft','facebook'))//Please visit Microsoft and Microsoft!. Didnot find the string but it return same string
```
### upper and lower case:

A string is converted to upper case with toUpperCase().
```js
const text1 = "Hello World!";
console.log(text1.toUpperCase());//HELLO WORLD!
```
And A string is converted to lower case with toLowerCase().
```js
const text1 = "Hello World!";
console.log(text1.toLowerCase()); //hello world!
```
### trim():
The trim() method removes whitespace from both sides of a string.
```js
const str = "       Hello World!        ";
console.log(str.trim());//Hello World! without any spaces
```
### includes():
The includes() method determines whether a string contains the characters of a specified string. This method returns true if the string contains the characters, and false if not. The includes() method is case sensitive.

```js
const str = "Hello world, welcome to the universe.";
console.log(str.includes("world"));//true
```
### split():
The split() method is used to split a string into an array of substrings, and returns the new array. If an empty string ("") is used as the separator, the string is split between each character. The split() method does not change the original string.
```js
const str = "How are you doing today?";
console.log(str.split());//[ 'How are you doing today?' ]
console.log(str.split(" "));//[ 'How', 'are', 'you', 'doing', 'today?' ]. splits with empty space
//without space
 console.log(str.split(""));
/*[
   'H', 'o', 'w', ' ', 'a',
   'r', 'e', ' ', 'y', 'o',
   'u', ' ', 'd', 'o', 'i',
   'n', 'g', ' ', 't', 'o',
   'd', 'a', 'y', '?'
 ]
*/
```
### slice("start", "end"):
The slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument. The original string will not be changed.
```js
const str = "How are you doing today?";
 console.log(str.slice(1, 3));//ow
 console.log(str.slice(2));//w are you doing today?
```



