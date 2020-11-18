//array
/*
sudah tidak perlu lagi mendeklari seperti ini
let nilai1 = 90;
let nilai2 = 80;
let nilai3 = 75;
let nilai4 = 100;
let nilai5 = 85;
*/

//deklarasi seperti ini
let nilai = [90, 80, 75, 95, 85];

for(let i=0; i<nilai.length; i++)
{
    console.log("NIlai = ", nilai[i] + 5);  
}

console.log(nilai);
/*
console.log (nilai [nilai.length - 1]);
*/
let john = ["john", "doe", 33, true];
console.log (john [john.length - 5]);
console.log(john)



//tostring
console.log(john.toString());
//join
console.log(john.join(" - "));
//pop
john.pop();
console.log(john.join ( " - " ));
//push
john.push(true);
john.push("Hello");
console.log(john.join (" - "));
//shift
john.shift();
console.log(john.join (" - "));
//unshift
john.unshift("john");
john.unshift("prof");
console.log(john.join (" - "));

//splice
john.splice("prof", "john", "doe", "33");
john.splice(3, 4, "true", "hello");
console.log(john.join(" - "));

//concat
/*
var john1 = ["prof", "john", "doe"];
var john2 = ["true", "hello","33"];
var john3 = [john1.concat(john2, john3)];
console.log(john3.join (" - "));
*/
john.concat ("prof", "john", "doe", "33");
john.concat (1, 2, "true", "hello");
console.log(john.join(" - "));

//slice
/*
john.slice = ["prof", "john", "doe", "33", "true", "hello",];
john.slice = [1, 3];
console.log(john.join (" - "));
*/
john.slice ("prof", "john", "doe", "33", "true");
john.slice ( 1, 3);
console.log(john.join (" - "));

//sort
john.sort ("Banana", "Orange", "Apple", "Mango");
john.sort();
console.log(john.join(" - "))

//reverse
john.reverse ("Banana", "Orange", "Apple", "Mango");
john.reverse();
console.log(john.join(" - "))



