// class9 Functions
//     type sum = ( num1:number, num2:number) =>number


//     let add: sum = function(num1, num2){
//         return num1 + num2;
//     } 

// let result = add(3 , 6):
// console.log(result);

// arrow function
// let sum = (num1:number, num2:number):number =>  num1 + num2;
// let result = sum (3,6):
// console.log(result);


// let sum=(num1:number,num2:number):number=>num1=num2;
// let result=sum(3,6);
// console.log(result);

// let add:sum = function(num1,num2){
//     return num1=num2;
// }

// // optionalfunctions:( ap ke parameter ko optional bana rha h )
// let fullname = (fisrtname: string, lastname?: string) => fisrtname +''+ lastname;

// let fullN = fullname('hifza')
// console.log(fullN);


// let fullname = (fisrtname: string, lastname?: string) => {
//     if(lastname === undefined){
//         return fisrtname
//     } else{
//         return fisrtname + ' ' + lastname;     
//     }
// }

// let fullN = fullname('hifza', 'zafar')
// console.log(fullN);


// Default function
// let fullname = (fisrtname: string, lastname:string = "") => {
//     // console.log(fisrtname , lastname)
//     return fisrtname + ' ' + "";
// }

// let fullN = fullname('hifza', 'zafar')
// console.log(fullN);  // undifined aaye ga


// let makeMessage = (name: string, ...message:string[]) =>{
//     console.log(message)
// }
// makeMessage("hifza", "hello", "world", "how", "are", "you")



// let makeMessage = (name: string, ...message:string[]) =>{
//     console.log(message.join(" "))
// }
// makeMessage("hifza", "hello", "world", "how", "are", "you")


// function overloading

// function add(arg1:string, arg2:number): string;  //option1
// function add(arg1:number, arg2:number): string;  //option1
// function add(arg1:any, arg2:any): any{ 
//     function add(arg1:any , arg2:any){
//         return arg1 + arg2;
//     }    //option2
//     return arg1 + arg2;
// }

// let result = add(4,7);
// console.log(result);
// w
// // add("hifza","zafar")
// // add(2,"hifza")
// // add(2 ,  3)
// // add("hifza", 5)

let fruits:[string,string,number] = ["orange","mango", 2];

fruits.push("apple");
// fruits.3  is not in typescript but its add in js
// console.log(fruits);
