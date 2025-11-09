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

