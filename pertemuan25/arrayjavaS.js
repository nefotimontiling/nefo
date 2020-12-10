/*console.log("javascript");

/*
const person = {
    name : "john",
    age : 24,
    job : "programmer",
    isMarried : true,
    sayHello: function ()
    {
        console.log("Hello World");
    },
};

person.age = 25;
person["address"] = "manado";

console.log(person.name);
console.log(person["age"]);

delete person.address;
console.log(person);

person.sayHello();
*/

let title = document.getElementsByTagName("h1")[0].innerText;
console.log(title);

let title = document.getElementById("header2").innerText;
console.log(title);

let umur = document.getElementById("umur").Value;
console.log(umur);

/*
function helloworld() {
    let value = document.getElementById("umur").value;
    document.getElementsByTagName("p")[1].innerText = "text";
    
}
*/
let demo = document.getElementById("demo"); 
demo.onclick = showMassage;
function showMassage() {
    alert("hello world");
}