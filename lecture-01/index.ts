// javascript is loosely type language
/*
    let x = 10;
    x = 'joker';
    x = true;
*/

let x = 30;
//x = 'joker' ;      //error 



let age:number = 26;        //explicitly roop se define
//age = 'shiva'               // error
age = 30;



//const name:string = null ;            //error
const user : string = 'raghav';         //always be string
let lastname:string | null = null ;    // type is string or null
    lastname=null;



let numOfChar:number | boolean |string = 'fifty';
    numOfChar = 50;
    numOfChar = true;



function add(x:number,y:number){
    return `${x+y}`;
}
//add('kamli',6);                     //error 
add(5,9);                             // return string
//let res:number = add(9,8);          // error
           


function addition(m:number , n:number|string){
    //return m+n                                  // error 
}
const find = addition(7,12)          




function mixed(x:number , y:number){
    return x + y;
}
const result:number = mixed(12,9);   // strict define number




function getFullname(user:{firstName:number , lastName:string}){
    return user.firstName + user.lastName;                          // firstName and lastName get 
}
let userName = getFullname({firstName:5775 , lastName:'shiva'});     // return type is string
console.log(userName);


function getUser(user:{firstName:string,lastName?:string}){             // lastName is optional
    return user.firstName+user.lastName
}
let fullName = getUser({firstName:'Raghav'});
console.log(fullName);




function findUser(user:{firstName:string , lastName?:string }){
    //if(user.lastName){
    //    const trimedUserName =  user.lastName.trim();
    //    return trimedUserName
    //}
    const  trimedLastName:string= user.lastName?.trim() || 'demo';
    return trimedLastName;
}
let getName = findUser({firstName:"Joker"});
console.log(getName);



interface User {
    firstName:string;
    lastName?:string;
    email:string;
    profileImageURL?:string;
}

function createUser(user:User){
    user
}
const payload:User = {
    firstName:'',
    email:''
} 
createUser(payload);




function doSomething(x:number){
    return x*10;
}
doSomething(6);
let num:number = 10;
doSomething(num);