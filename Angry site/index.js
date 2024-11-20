//console.log("My name is Dickens Omondi")

//let gpa = 3.42;
//let age = 20;
//let price = 500;
//let name = 'Dickens';
//console.log(typeof name);
//console.log(`The cake is ${price} ksh`);
//console.log(`${name}, You are ${age} years old`);
//console.log(`Your gpa is ${gpa}`);
//let online = true;
//console.log(`I am online: ${online}`);



//let name = "Dickens Omondi";
//let age = 20;
//let student = true;
//document.getElementById("p1").textContent = `My name is ${name}`;
//document.getElementById("p2").textContent = `I am ${age} years old`;
//document.getElementById("p3").textContent = `Still a student: ${student}`;
//let students = 50;
//students +=students; 
//students++; 
//console.log(students);


/*let person = {
    name: 'gavin',
    age: 30
};
     //Dot notation
person.name = 'Matilda';
console.log(person.name);

    //bracket notation
person['name'] = 'Sowon';
console.log(person.name);*/
//let colors = ['red', 'green'];
//colors[2] = 'yellow';
//colors[3] = 254;
//console.log(colors);

    //easy way
//let username;
//username = window.prompt("What is your username? ");
//console.log(`Your username is ${username}`);


/*let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
    console.log(`Your username is ${username}`);
}*/


//let age = prompt("how old are you? ");
//age = Number(age);
//age += 10;
//console.log(`You are ${age} years old!`);

/*
const PI = 3.14;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumference is ${circumference}cm`;

}*/
/*const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick =function(){
    count = 0;
    countLabel.textContent = count;
}*/
   /*let x = 32;
let y = 10;
let z = 45;
/*z = Math.round(z);
z = Math.floor(z);
x = Math.ceil(x);
y = Math.pow(y, z);
y = Math.sqrt(y)

y = Math.ceil(y)

console.log(x);
console.log(z);
console.log(y);
let max = Math.max(x, y, z);
let min = Math.min(x, y, z);
console.log(`The maximum value is ${max}`);
console.log(`The minimum value is ${min}`);
alert(`The maximum value is ${max}
       And the minimum value  is ${min}`
);*/


/* const butt = document.getElementById("butt");
 const myH1 = document.getElementById("myH1");
 const myH2 = document.getElementById("myH2");
 const myH3 = document.getElementById("myH3");
 const min = -5;
 const max = 20;
 let randomNum1;
 let randomNum2;
 let randomNum3;
 butt.onclick = function(){
    randomNum1 = Math.ceil(Math.random() * max) + min;
    randomNum2 = Math.ceil(Math.random() * max) + min;
    randomNum3 = Math.ceil(Math.random() * max) + min;
    myH1.textContent = randomNum1;
    myH2.textContent = randomNum2;
    myH3.textContent = randomNum3;
 }
let age = 13;
if (age >= 18){
    console.log("You are old enough to enter this site!");
}
else{
    console.log("You must be 18+ to enter this site!!")
}
*
username = prompt("Whats your name?");
let time = 5;
if (time > 4){
    console.log(`Good Evening ${username}`);
}
else{
    console.log(`Hello ${username}`);
}
let student = false;
if(student){
    console.log("You are a student!");
}
else{
    console.log("You are NOT a student!")
}*

let age = 35;
let hasLicense =  true;
let ext = 4;
if(age >=18){
    console.log("You are old enough to have a license!");

    if(hasLicense){
        console.log("And you already have a license.");
        if(ext>=10){
            console.log("You must be a very good driver!");
        }
        else{
            console.log("I can see you are still a young person!");
        }

    }
    else{
        console.log("And you do not have a driver's license!")
    }

}

else{
    console.log("You are not allowed to have a license yet!");
} */
const myText = document.getElementById("myText");
const sub = document.getElementById("sub");
const result = document.getElementById("result");
sub.onclick = function(){
    age=myText.value;
    age=Number(age);
    if(age > 100){
    result.textContent = "You are too old to enter this site";
        
    }
    else if (age==0){
        result.textContent = "You have just been born! How are you even using the device!!!"
    }
    else if (age==20){
        result.textContent = "Hello dickens! May you find the love of you life real soon!";
    }
    else if (age >= 18) {
        result.textContent = "You are permitted to enter this site!";
        document.getElementById("myH2");
        

    }
    else if (age >= 10) {
        result.textContent = "You are a teenager! You are allowed to use the site for just 30 mins";
    }
    else if (age >= 5) {
        result.textContent = "You are still a baby! We cant allow you on our site!";
    }
    else if (age==1, 2, 3, 4){
        result.textContent = "Do you even know how to read!! i can't alow you on this site. Sorry! ";
    }
}
