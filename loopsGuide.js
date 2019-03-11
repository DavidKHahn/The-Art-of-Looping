/* The primary purpose of a loop is to iterate over one or a set of multiple statements. Iterating is a commonplace act in software development. To iterate simply means to repeat an action multiple times. */

/* For Loop

for (initialize; condition; increment);
for (initialize; condition; increment) single statement;
for (initialize; condition; increment) { multiple; statements; }

*/

/*
[0-index based counter]
(alternate method of stopping a for loop w/o conditional statement)

for (let i = 0;; i++) {
    console.log("loop, i = " + i);
    if (i > 1)
        break;
};
*/

/*
[Infinite for-loop]

for(;;) console.log("hi"); // defined without any statements. Program might freeze if ran.

*/

/*
[Multiple Statements]

let counter = 0;
function inc() { counter++; }
for (let i = 0; i < 10; i++, inc());
console.log(counter); // 10

*/

/*
[Increment Numbers]

let counter = 0;
for (let i = 0; i < 10; i++)
    counter++;
counter; // 10;
*/

/*
[for loops and let scope]

for (var i = 0; i < 10; i++) let x = i; ---> generates error!

A let variable cannot be defined without scope brackets. All variables defined using the let keyword require their own local scope. This is fixed by:

for (var i = 0; i < 10; i++) { let x = i; }

*/

/*
[Nested for Loops]

Because a for loop is a JavaScript statement in itself, it can be used as the iterable statement of another for loop. This hierarchical for loop is often used for working with 2-dimensional grids:

for (let y = 0; y < 2; y++)
    for (let x = 0; x < 2; x++)
        console.log(x, y);

Console output (all combinations between x / y):

0 0
1 0
0 1
1 1
*/

/*
[Loop’s Length]

The condition statement will usually check if counter has reached a limit and if so, the loop will terminate:

for (let i = 0; i < 3; i++) console.log(“loop.”);

// “loop.”
   “loop.”
   “loop.”

You can add {} brackets if you need to execute multiple statements:

for (let i = 0; i < 3; i++) { let loop = "loop."; console.log(loop) };

*/

/*
[Skipping Steps]

You can skip an iteration step by using the continue keyword:

for (let i = 0; i < 3; i++) {
    if (i == 1) continue;
    console.log( i );
    }

Output of this for-loop: (note 1 was skipped)

0
2

The continue keyword tells code flow to go to the next step without executing any next statements in this for-loop’s scope during the current iteration step.

*/


/*
[Breaking Early]

You can break out of a for loop by using the 'break' keyword:

for (let i = 0;; i++) {
    console.log("loop");
    break;
    };

Note the condition statement was skipped here. The loop will break by an explicit command from the statement itself.

In this case the for loop will print “loop.” to the console only once. The break keyword simply exits the loop whenever it’s encountered. But it can also be conditional (see next example.)

*/

/*
[Breaking To A Label]

In JavaScript, a statement can be labeled when a label_name: is prepended to a statement. Because a for loop is a statement you can label for loops.

Let’s try to increment value of c inside the inner loop. By choosing whether to break the loop and jump to the inner or mark label, we change the pattern in which the for loops will work:

1. This example produces 11 when breaking to mark:

let c = 0;
mark: for (let i = 0; i < 5; i++)
    inner: for (let j = 0; j < 5; j++)
        c++; if (i == 2) break mark;
console.log(c); // 11
2. This example produces 21 when breaking to inner:

let c = 0;
mark: for (let i = 0; i < 5; i++)
    inner: for (let j = 0; j < 5; j++)
        c++; if (i == 2) break inner;
console.log(c); // 21
The two examples are logically different.

*/

/*
[Breaking from a labeled non for-loop scope]

While we’re on the subject, you can use the break keyword to break out of regular non for-loop block scope as long as it’s labeled:

block: {
    console.log("before");
    break block;
    console.log("after");
}
Console output:

"before"
Execution flow never reaches “after”.

*/


/*
[for…of Loop]

Using indexed iterators can become a hassle when dealing with arrays or object properties. Especially when their number is not known.

for…of loops to the rescue!

[for…of Loops And Generators]
Sometimes you might want to use a for loop with a generator.

Generator executes a yield statement in an asynchronous way but it will execute only one next yield statement every time the function is called:

// Generator function:
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
for (let value of generator())
  console.log( value );
Console output:

0
1
2
 */

/*
[for…of Loops And Strings]

Strings are iterable.

You can walk each character of a string using a for…of loop:

let string = 'text';
for (let value of string)
 console.log( value );
Console:

't'
'e'
'x'
't'

*/

/*
[for…of Loops And Arrays]

Let’s say we have an array:

let array = [0, 1, 2];
We can iterate through it without having to create index variables. Once the end of the array is reached the loop will end automatically:

for (let value of array)
  console.log( value );
Console output:

0
1
2

*/

/*
[for…of Loops And Objects (won’t work)]

It would be nice to iterate over object properties too, right?

let object = { a: 1, b: 2, c: 3 };
for (let value of object) // Error: object is not iterable
  console.log( value );
But for…of loops work only with iterable values. An object is not an iterable.

[for…of loops and objects that were converted to iterables]

As a remedy you can first convert an object to an iterable using some of the built-in Object methods: .keys(), .values() or .entries():

let enumerable = { property : 1, method : () => {} };
for (let key of Object.keys( enumerable )) console.log(key);
> property
> method
for (let value of Object.values( enumerable )) console.log(value);
> 1
> () => {}
for (let entry of Object.entries( enumerable )) console.log(entry);
> (2) ["prop", 1]
> (2) ["meth", ƒ()]
This is also achievable by using a for…in loop instead without Object.*
*/

/*
[for…in Loops]

The for…of loops (in the previous section) only accept iterables.

[for…in loops and enumerable object properties]

When you have an object at hand you should probably use a for…in loop.

A for…in loop will display only enumerable object properties:

let object = { a: 1, b: 2, c: 3, method: () => { } };
for (let value in object)
    console.log(value, object[value]);
Output: (Note that methods are enumerable too.)

1
2
3
() => { }

*/

/*
[Non-enumerable properties are hidden from for…in]

You won’t see constructor and prototype properties in an output from the for…in loop. Although they exist on an object they are not considered to be enumerable.
*/

/*
[While Loops]

A while loop will iterate for an indefinite number of times until the specified condition (there is only one) evaluates to false. At which point your loop will stop and execution flow will resume.

while (condition) { * do something until condition is false * }
Once condition evaluates to false the while loop will break automatically:

let c = 0;
while (c++ < 5)
    console.log(c);
Console output:

1
2
3
4
5
A secondary condition can be tested within the loop. This makes it possible to break from the loop earlier if needed:

while (condition_1) {
    if (condition_2)
        break;
}
*/

/*
[While and continue]

The 'continue' keyword can be used to skip steps:

let c = 0;
while (c++ < 1000) {
    if (c > 1)
        continue;
    console.log(c);
}
Console output:

1
*/

/*
[Arrays]

Many of the Array.* methods are iterators. Instead of passing your array into a for or a while loop you should use built-in Array methods instead. Arrays usually already have methods offering cleaner syntax for anything you would write yourself to solve the same problem. So why re-invent the wheel?

Array methods are attached to 'Array.prototype' property. This means you can execute them directly from array object like 'array.forEach()' or directly from array’s literal value like: '[1,2,3].forEach();'

[Array.forEach]

Return value: none

The forEach method will execute a function for every item in the array.

Each iteration step receives 3 arguments value, index, object.

It’s similar to a for-loop but it looks cleaner:

let fruit = ['pear', 'banana', 'orange', 'apple', 'pineapple'];
let print = function(item, index, object) { console.log(item); }
fruit.forEach( print );

Starting from ES6 it can be suggested to use arrow functions together with Array methods. The code will be easier to read and maintain when building large scale applications. Let’s take a look at how we can make syntax cleaner:

1.) Because in JavaScript functions are also expressions, you can pass the function directly into the forEach method:

fruit.forEach(function(item, index, object) {
    console.log(item, index, object);
});
2.) You might want to use an arrow function: () => {}

fruit.forEach((item, index, object) => {
    console.log(item, index, object);
});
The console output from both of the cases above:

"pear",      0, (5)["pear","banana","orange","apple","pineapple"]
"banana",    1, (5)["pear","banana","orange","apple","pineapple"]
"orange",    2, (5)["pear","banana","orange","apple","pineapple"]
"apple",     3, (5)["pear","banana","orange","apple","pineapple"]
"pineapple", 4, (5)["pear","banana","orange","apple","pineapple"]
3.) If you can get away with one argument and return statement use:

fruit.forEach(item => console.log(item));
As long as you have only one single statement, you can remove {} brackets.

"pear"
"banana"
"orange"
"apple"
"pineapple"
*/

/* 
[Array.every]

Return value: BOOLEAN

Not to be confused with the “execute for every item” logic of forEach. In many cases method every will actually not run on every item in the array when at least one item doesn’t evaluate to true based on specified condition.

The method every will return true if the value of every single item in the array satisfies the condition specified in its function argument:

let numbers = [0,1,2,3,4,5,6,7];
let result = numbers.every(value => value < 10 );
result; // true
The result is true because none of the numbers in the array are greater than or equal to 10. Let’s take at the same function with a different value set. If 10 or a greater number was present in the array the result would be false:

let numbers = [0,1,256,3,4,5,6,7];
let result = numbers.every(value => value < 10 );
result; // false
Here one of the numbers is 256. Which can be translated to “not every value in the array is < 10”. Hence, false is returned. It’s important to note that once Array.every method encounters 256 the condition function will not execute on the remaining items. Just a single failed test will cause false.

Array.every does not modify the original array. The value inside the function is a copy, not a reference to the value in the original array:

let numbers = [0,1,256,3,4,5,6,7];
let result = numbers.every(value => value++ < 10 );
console.log(result); // false
console.log(numbers); // Original array is unchanged
*/

/*
[Array.some]

Return value: BOOLEAN

Similar to Array.every except it stops looping whenever it encounters a value that evaluates to true (and not false like in Array.every) Let’s compare:

let numbers = [0,10,2,3,4,5,6,7];
let condition = value => value < 10; // value is less than 10
let some = numbers.some(condition); // true
let every = numbers.every(condition); // false

Here, some returns true because it checks first value: 0 for < 10 and immediately returns true without having to check the rest of the values.

The every method returns false on the same data set. That’s because when it reaches the second item whose value is 10, the < 10 test fails.

Note: Try not to think of some as an “opposite” of every. In some cases they return the same result on the same data set.
*/

/* 
[Array.filter]

Return value: New array consisting only of items that passed a condition.

let numbers = [0,10,2,3,4,5,6,7];
let condition = value => value < 10;
let filtered = numbers.filter(condition);
console.log(filtered); // [0,2,3,4,5,6,7] // 10 is filtered out!
console.log(numbers); // Original array remains unchanged

The new filtered array contains all original items except 10. Because it did not pass the < 10 test. In a real-world scenario the condition can be much more complex and involve larger objects sets.
*/

/* 
[Array.map]

Return value: a copy of the original array with modified values (if any.)

let numbers = [0,1,256,3,4,5,6,7];
let result = numbers.map(value => value = value + 1 );
console.log(result); // [1,2,257,4,5,6,7,8] // incremented by 1
console.log(numbers); // Original array is unchanged

Array.map is like Array.forEach but it returns a copy of the modified array. Note that the original array is still unchanged.
*/

/*
[Array.reduce]

Return value: Accumulator

Reducers are similar to other methods. Yet they are unique because they have an accumulator value. The accumulator value must be initialized. There are different types of reducers. In this first example, we’ll take a simple case.

As values are iterated, this accumulator adds all numbers into a single value:

const R = (accumulator, currentValue) => accumulator + currentValue;

Like any other Array method that works with iterables, a reducer has access to the value it is currently iterating (currentValue).

const numbers = [1, 2, 4];
const R = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(R)); // 7

This reducer added up all the numbers into the single accumulator value and returned it: 1 + 2 + 4 = 7.
*/

/* 
[How to understand reducers in more complex, practical situations?]

When developing software in the real world you won’t be using reducers to count numbers. This can be done with a simple for loop. You will encounter plenty of situations where a set of data should be “reduced” only to the set of important values based on some criteria.
*/

/* 
[Array.reduce or Array.filter?]

When it comes to Array methods, always try to to choose a proper tool for the task. Don’t use reduce just because you want to use reduce. You’ll notice that some things you plan to use reduce for can be done with filter.

However, one of the most common use cases for a reducer is updating the application view and/or properties of a database entry, via some API call.
*/

/* 
[Reducers And Updating Object Properties In A Database]

After a database action round trip, you may want to update the application view. But why update all objects everywhere, when you can “reduce” which object properties should be affected, without having to copy the entire object?

Let’s say your car listing management application has a button that updates the price of a particular vehicle. The user sets a new price and clicks on the button. An action is dispatched to update the vehicle in the database. Then the callback function returns containing the object with all properties for that vehicle ID. But, we only need to update the price. A reducer can make sure to update only the price not the entire object. The object is then sent back to the database and the application view is updated.
*/

/* 
[Creating Your Own Object Iterables With [Symbol.iterator]]

In some advanced cases you might be interested in this pattern for creating your own iterable object.

let iterable = {
  [Symbol.iterator]() {
    return {
      i : 0,
      next() {
        if (this.i < 3)
          return { value : this.i++, done : false }
        return { value : 1, done : true }
      }
    }
  }
}
for (let value of iterable)
  console.log( value );
*/