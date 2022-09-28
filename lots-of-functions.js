/*
sayHi

Write a function called sayHi that takes in a name string and adds "Hi, " before the name. Return the newly modified string.

function name - sayHi
parameters: nameStr - string
return string
concatenation
interpolation
alternative // return `Hi, ${name}`;
*/

function sayHi(name){
         let newStr = `Hi, ${name}`;
         return newStr;
         }

         console.log(sayHi(" Greyson "));
         console.log(sayHi(" Jimmy "));
         console.log(sayHi(" Bob "));




/*
bigString

Write a function called bigString that takes in 2 strings and returns which one is bigger. If the strings are equal in size, tell the user and prints both.

functionName: bigString
parameters: str1 str2
if equal - don't return, just console.log that are equal
if str1 is bigger than str2 - return str1
if str2 is bigger than str1 - return str2
.length - used to determine how big each string is
// else if(str1.length === str2.length)
*/

function bigString(str1,str2){
         if(str1.length > str2.length){
         return str1;
         }
         else if(str2.length > str1.length){
         return str2;
         }
         else{str1.length === str2.length;
         return `${str1} is equal in length to ${str2}`
         }
            
         } 

         console.log(bigString("blue","red"));
         console.log(bigString("taco","tuesday"));
         console.log(bigString("dog","cat"));






        /*
        bigNumber

        Write a function called bigNumber that takes in 2 numbers and returns which one is greater. If the numbers are equal tell the user.
        
        */

        function bigNumber(num1,num2){
                 if(num1 > num2){
                 return num1;
                 }
                 else if(num2 > num1){
                 return num2;
                 }
                 else{num1 === num2; 
                 return `${num1} is equal to ${num2}`
                 }

                 }

                 console.log(bigNumber(1,4))
                 console.log(bigNumber(5,2))
                 console.log(bigNumber(7,7))




        /*

        fiveMore

        Write a function called fiveMore that takes in an array of numbers and adds 5 to each odd number then returns the updated array.

        function name: fiveMore
        parameters: array of numbers

        -add 5 to each number
        use loop
        numsArray.length

        
        */
    
        function fiveMore(arrayNums){
            
                 for(let i = 0; i < arrayNums.length;i++){
                 if(arrayNums[i] % 2 !== 0){
                 arrayNums[i] +=5}
                 }
                 return arrayNums;
                 }

                 console.log(fiveMore([1,2,3,5,6,7]));



/*
        arraySummer

        Write a function called arraySummer that takes in an array of numbers and adds each number in the array together. Return the total.

        function name: arraySummer
        parameters:  addNums
        adds each number in the array together

*/


        function arraySummer(addNumb){
                 let result = 0;
                 for(i = 0; i < addNumb.length;i++){
                 result += addNumb[i]
                 }
                 return result;
                 }    

                 console.log(arraySummer([1,2,3,4,5,5]));




/*
everyDivisible

Write a function called everyDivisible that takes in a number n that is less than 10 and then prints every number less than or equal to 100 that is divisible that number n.

For example, if n = 7

Your function would print:

7
14
21
28
35
42
49
56
63
70
77
84
91
98

function name: everyDivisible
parameter: n - number has to be less than 10
for loop - 0 to 100
if(number % n === 0){ console.log(number)
}
*/

function everyDivisible(n){
         if(n < 10){
         for(let number = 1;number <= 100;number++){
         if(number % n === 0){console.log(number);
         }
         }
         }
         }

         everyDivisible(9);













