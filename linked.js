let number = prompt("enter your choice number:");

let con = Number(number);
for(i=1; i<=10; i++){
    console.log(`${number}X${i} = ${number*i}`);
}

//today we practie on reverse a string.
//1st method we used built in function
let str = "javascript";
let  reversed = str.split("").reverse().join("");
console.log(reversed);

//2nd method 
let str2 = "javscript is powerfull";
let reverse1 = "";                     

for(let i=str2.length-1; i>=0; i--){
    reverse1+=str2[i];
}
console.log("this is same and original:",str2);
console.log(reverse1);

//condition used to find the number is odd or even

let number1 = prompt("enter your number");
let num = Number(number1);
if(num%2==0){
    console.log("this is even:", num);
}
else{
    console.log("this is odd", num);
}
////Print numbers from 1 to 100 but:

// If divisible by 3 print "Fizz"

// If divisible by 5 print "Buzz"

// If divisible by both print "FizzBuzz"

for(i=1; i<=100; i++){
    if(i%5==0 && i%3==0){
        console.log(i,"Fizz||buzz");
    }
    else if(i%3==0){
        console.log(i,"Fizz");
    }
    else if(i%5==0){
        console.log(i,"Buzz");
    }
    else{
        console.log(i,"this is not divisible on 5 and 3");
    }
   
    }