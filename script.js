/*
```
// 1 - Select the section with an id of container without using querySelector.
document.getElementById("container");
```
*/

/*

Write the code necessary to do the following:
1) Select the section with an id of container without using querySelector.
2) Select the section with an id of container using querySelector.
3) Select all of the list items with a class of "second".
4) Select a list item with a class of third, but only the list item inside of the ol tag.
5) Give the section with an id of container the text "Hello!".
6) Add the class main to the div with a class of footer.
7) Remove the class main on the div with a class of footer.
8) Create a new li element.
9) Give the li the text "four".
10) Append the li to the ul element.
12) Loop over all of the lis inside the ol tag and give them a background color of "green".
13) Remove the div with a class of footer.


*/


/*
1) Select the section with an id of container without using querySelector.
*/

let container1 = document.getElementById("container");
// console.log(container1);
console.log(document.getElementById("container"));

// console.log(document.getElementById("test"));


//2) Select the section with an id of container using querySelector.

let container2 = document.querySelector("#container");
console.log(container2);

//3) Select all of the list items with a class of "second".

let second = document.getElementsByClassName("second");
console.log(second);

//4) Select a list item with a class of third, but only the list item inside of the ol tag.

let third1 = document.querySelector("ol");
let third2 = third1.lastElementChild;

console.log(third2);

// 5) Give the section with an id of container the text "Hello!".
// 6) Add the class main to the div with a class of footer.
// 7) Remove the class main on the div with a class of footer.
// 8) Create a new li element.