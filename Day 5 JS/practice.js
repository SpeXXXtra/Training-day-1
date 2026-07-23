// let a = 10;
// var b = 20;
// const c = 30;

// {
//     let a = 100;// this will print A= 100 within this block
//     var b = 25; //this will override the var b outside the block since its global scope
//     // const c = 250;// this will throw error if we try to reassign c within this block since const is block scoped and cannot be reassigned
//     console.log("A= " + a);
//     console.log("B= " + b);
//     console.log("C= " + c);
// }

// console.log("A= " + a);
// console.log("B= " + b);
// console.log("C= " + c);

// let a = 5;
// let name = "John Doe";
// let b;
// let c=null;

// console.log(typeof a);
// console.log(typeof name);
// console.log(typeof b);
// console.log(typeof c);

// const name = "nihal";

// console.log(name.length); // this will print the length of the string
// console.log(name.toUpperCase()); // this will print the string in uppercase
// console.log(name.toLowerCase()); // this will print the string in lowercase
// console.log(name.includes("ni")); // this will check if the string includes the substring "ni" and return true or false
// console.log(name.slice(0,3)); //slices the name a tht e given 
// console.log(name.trim()); //removes all the leading and trailing spaces
// console.log(name.replace("nihal", "Nihal")); //replaces the string with the given string
// console.log(name.split("")); //splits the string into an array of characters

const fruits = ["apple", "banana", "orange", "mango", "grapes"];
// console.log(`Current fruits ${fruits}`)//Current fruits

// fruits.push("kiwi"); //adds the element at the end of the array
// console.log(`After push ${fruits}`)//After push

// fruits.pop(); //removes the last element of the array
// console.log(`After pop ${fruits}`)//After pop

// fruits.unshift("kiwi"); // adds element at the beginning of the array
// console.log(`After unshift ${fruits}`)//After unshift

// fruits.shift(); //removes element from the start of the array
// console.log(`After shift ${fruits}`)//After shift

// fruits.splice(2,1,"lemon") //removes the element at index 2 and adds "lemon" at that index
// console.log(`After splice ${fruits}`)//After splice

// fruits.sort(); //sorts the array in ascending order
// console.log(`After sort ${fruits}`)//After sort

// console.log(fruits.at(-1));//gives the last element of the array
// console.log(fruits.includes("apple"));//check if arrah has apple as a value
// console.log(fruits.indexOf("banana"));//gives the index of the value in the array
// console.log(fruits.join(" - "));//joins the array elements with the given string
// console.log(fruits.includes("kiwi"));//check if arrah has kiwi as a value

// const obj1 = {
//     name:"Nihal Sulthan",
//     age:18,
//     address:{
//         city:"Kozhikode",
//         state:"Kerala",
//         country:"India"
//     },
//     languages:["English","Hindi","Malayalam"],
//     greet:function(){
//         console.log("da da poda");
//     }

// }

// console.log(obj1.name);//accessing the name property of the object
// console.log(obj1.age);
// console.log(obj1.address.city);//accessing the city property of the address object
// console.log(obj1.languages[0]);

// console.log(Object.keys(obj1));//gives the keys of the object
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));//gives the key value pairs of the object in an array

// const arr = [1,2,3,4,5];

// for(const ele of arr){
//     console.log(ele);//this will give the elements of the array
// }

// for (const index in arr){
//     console.log(index);//this will give the index of the array
// }

// function outter(){
//     console.log("Hello im the outter function being run from the inner function!");
// }

// function inner(func){
//     console.log("Hello im the inner function!");
//     func()
// }

// function greet(name,func){
//     console.log(`Hello ${name}`);
//     let done = false;
//     setTimeout(()=>{
//         done = func(name);
//     },2000);

//     console.log(`${name} please wait while the greetings are in order!`);
//     if(done){
//         console.log("greetings done!");
//     }

// }

// function greetings(name){
//     console.log(`Greetings ${name}`);
// }

// greet("Nihal",greetings)

const a = (a,b) =>{
    return a+b;
}

console.log(a(5,10))