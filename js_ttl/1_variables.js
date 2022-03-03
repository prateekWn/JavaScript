/*

variables:
    let , const , var

Variable Naming Rule - 
1. alphabet, but it can not start from digit
2. name must contain only letters, digits, or symbols $ and _
3. keywords can not be used as variable name
4. case senstive
*/

// let msg; //declaration
// msg="Hey, How are you?"; //assignment

//declaration + assignment
let msg="Hey, How are you?";

console.log(msg);

let a = 12 , 
b = 23 , 
c=78;

console.log(a);
console.log(b);
console.log(c);

//main property 

msg = "Hey , I am from";

console.log(msg);

const user = "CodeWithMe";

console.log(user);

//Will give error as const can cannot be changed once assigned
// user = "HIIIII";
// console.log(user);


if(5>2){
    console.log("Inside Block");
    let address = "Delhi";
    console.log(address);
    var city = "Mumbai";
    console.log(city);
}

// it is out of scope (console error-->"address is not defined")
// console.log(address);
// var : gloabal or function scope
// var has no block scope
console.log(city);


// public String reverseString(String str){ 
    
//     StringBuilder sb=new StringBuilder(str);  

//     sb.reverse();  

//     return sb.toString();  

// }  