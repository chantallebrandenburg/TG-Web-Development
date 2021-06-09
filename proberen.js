// let letOefening = "Let Tekst"
// let letOefening2 = "Let Tekst Twee!"
// console.log(letOefening + letOefening2)
// ....Je kan (let) niet 2x gebruiken....



// let letOefening = "Let Tekst"
// console.log(letOefening)

// letOefening = "Let Tekst Twee!"
// console.log(letOefening)
// ...output = Let Tekst 
//             Let Tekst Twee...


// const constOefening = "Const Tekst";
// console.log(constOefening)

// constOefening = "Const Tekst Twee!";
// console.log(constOefening)

// ...Const kan zich zelf niet overwriten...


// varOefening = "Var Tekst";
// console.log(varOefening)

// var varOefening = "Var Teskt Twee!"
// console.log(varOefening);

// var varOefening = "Var Teskt Drie!"
// console.log(varOefening);

// maakt niet uit of je var er voor of er niet voor doet 

// let typeQuestion = function calculateSomething() {}
// console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion)

// let someNumber = 5;
// let anotherNumber = 10;
// console.log(someNumber !== anotherNumber)

// let increment = 1;
// console.log(increment++)
// console.log(++increment)

// let modulo = 24 % 10;
// console.log(modulo)

// let division = 24 / 10;
// console.log(division)

// let someNumber = "Tekst";
// console.log( ! Undefined)

// let a = 2;
// let b = '5';

// console.log(a += 3);

// console.log(b += '10'); 

// let a = 2;
// let b = '5';

// console.log(a **= 3);

// console.log(b **= '10'); 

// let someKittens = "De poes van de buurman heeft kittens gehad!";
// let someKittens2 = " Hij vraagt of wij nog kittens willen";

// console.log(someKittens.toUpperCase () + someKittens2);

// console.log(someKittens.indexOf("kittens"));
// console.log(someKittens.lastIndexOf("kittens"));

// console.log(someKittens.charAt("kittens"));

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(-1, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// getal tot en met 4 of getal tot en met 5.

// let Hello = "Hello World"

// console.log(Hello.substring(-1, 4))

// opdracht 2.1

// let someKittens =
//   'De poes van de buurman heeft kittens gehad! kittens , Hij vraagt of hij nog kittens willen'

// let kitten1 = someKittens.slice(0, 40)
// let kitten2 = someKittens.slice(40, 80)
// console.log(kitten1)
// console.log(kitten2)

// // Splits de string op in 2 aparte zinnen. Stop beiden in een aparte variabele.

// var twoKittens = kitten1 + kitten2

// // Zo’n geweldig nieuws verdient upper case. Zet someKittens om naar hoofdletters.

// let someKittensUpperCase = someKittens.toUpperCase()

// console.log(someKittensUpperCase)

// // Geef de eerste en laatste index van KITTENS.

// // var kittens = 'KITTENS'

// let someKittens = "Die nieuwe kittens zijn zo schattig";

// let kitten2 = someKittens.split(" ");

// console.log(kitten2)


// console.log(someKittens.indexOf('kittens') )
// console.log(someKittens.lastIndexOf('kittens'))

// let someValue = true;

// if (someValue) {
//     console.log("zie je de eerste?");
// }

// if (!someValue) {
//     console.log("zie je de tweede?");
// }

// let x = 4;
// let y = 8

// if (x == 4 && y == 8){
//     console.log("result!")
// }

// let x = 4;
// let y = 8

// if (x == 4 || y == 8){
//     console.log("result!")
// }

// let x = 4;
// let y = 8;

// if (x == 4 || y == 8){
//     console.log( y, x, "Results")
// }

// else {
//     console.log( y, x, "Results");
//     }

// let x = 4;
// let y = 8;

// if (x == 4 ) {
//     console.log( y, x, "Results");
// }

// else {
//     console.log( x, "Results");
//     }

// let x = 44

// if ( x > 5 && x < 10 ) {
//     console.log( x, "Dit is een getal tussen 5 en 10");
// }

// else if (x >= 11 && x <= 20) {
//     console.log( x, "Dit is een getal van 11 tot en met 20");
// }

// else if (x == 21 || x == 23) {
//     console.log( x, "Dit is een getal met de waarde 21 of 23");
// }

// else if (x < 35 || x >= 40 && x <= 45){
//     console.log( x, "Dit is een getal onder 35 of tussen 40 en 45");
// }

// let x = 20

// if (x == 3 ){
//     console.log (x, "Dit is het getal 3")
// }

// else if (x > 4 ){
//     console.log (x, "Dit is een getal groter dan 4")
// }

// else if (x > 11 ){
//     console.log (x, "Dit is een getal groter dan 11")
// }

// else if (x < 3){
//     console.log (x, "Dit is een getal kleiner dan 3")
// }

// let Months
//     Months = 8

//     if (Months == 1){
//         console.log("Januari");
//     }

//     if (Months == 2){
//         console.log("Februari");
//     }
//     if (Months == 3){
//         console.log("Maart");
//     }
//     if (Months == 4){
//         console.log("April");
//     }
//     if (Months == 5){
//         console.log("Mei");
//     }
//     if (Months == 6){
//         console.log("Juni");
//     }
//     if (Months == 7){
//         console.log("Juli");
//     }
//     if (Months == 8){
//         console.log("Augustus");
//     }
//     if (Months == 9){
//         console.log("September");
//     }
//     if (Months == 10){
//         console.log("Oktober");
//     }
//     if (Months == 11){
//         console.log("November");
//     }
//     if (Months == 12){
//         console.log("December");
//     }

//     else if (Months > 12) {
//         console.log("Geen geldige maand!")
//     }


// let Months = 4

// switch (Months) {
//     case Months = 1: console.log("Januari"); break;
//     case Months = 2: console.log("Febrauri"); break;
//     case Months = 3: console.log("Maart"); break;
//     case Months = 4: console.log("April"); break;
//     case Months = 5: console.log("Mei"); break;
//     case Months = 6: console.log("Juni"); break;
//     case Months = 7: console.log("Juli"); break;
//     case Months = 8: console.log("Augustus"); break;
//     case Months = 9: console.log("September"); break;
//     case Months = 10: console.log("Oktober"); break;
//     case Months = 11: console.log("November"); break;
//     case Months = 12: console.log("December"); break;
//     case Months > 12: console.log("Geen geldige maand!"); break;
// }


// let x = 6;

// var results = x <= 4 && x >= 0 ? (result = 2) : (result = 5)

// console.log(results)

// function Helloworld(parameter){
//     return parameter *2;
// }

// let result = Helloworld(10)

// let result2 = Helloworld(5)

// console.log(result2)

// console.log(result)

// let result3 = result + result2

// console.log(result3)

////////////////////////////////


// function Helloworld(parameter){
//     return parameter + " World";
// }

// let result = Helloworld("Hallo")

// console.log(result)

// function myfunction(){

//     let elements = document.getElementsByClassName("Helloworld");

//     elements[0].innerHTML = "Helloworld";
//     }

// function myfunction(){

//     var x = document.getElementsByTagName("li");
//     document.getElementById("demo").innerHTML = x[1].innerHTML;
// }

// function myfunction(){

//     document.querySelector(".example").style.backgroundColor = "red";
// }
// function myfunction() {
//     var x, i;
//     x = document.querySelectorAll(".example");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.backgroundColor = "red";
//     }
// }

// function myfunction() {
//     let menu = document.getElementById('proberen');
//     console.log(menu.innerHTML);
// }

// function myfunction() {
//     var x = document.getElementById("Helloworld").innerText;
//     document.getElementById("example").innerHTML = x;  
//   }

// function myFunction(parameter){
//     let x = document.getElementById("myInput").value;
//     document.getElementById("text").innerHTML;

//     console.log("You wrote: " + x)
// }

// function randomNumber(){
//     document.getElementById("test").innerHTML = Math.random();
// }

//////
// function randomNumber(){
//     let y = document.getElementById("test").innerHTML = Math.random()
//      console.log("Here is your random number" + y);
//  }

// function randomNumber(){
//     let y = document.getElementById("test").innerHTML = 15.33456
//      console.log("Here is your random number: " + Math.floor(y));
//  }


// //MATH MIN//

// console.log(Math.min(2, 3, 1));
// // expected output: 1

// console.log(Math.min(-2, -3, -1));
// // expected output: -3

// const array1 = [2, 3, 1];

// console.log(Math.min(...array1));
// // expected output: 1


//MATH MAX//

// console.log(Math.max(2, 3, 1));
// // expected output: 1

// console.log(Math.max(-2, -3, -1));
// // expected output: -3

// const array1 = [2, 3, 1];

// console.log(Math.max(...array1));
// // expected output: 1

// function myFunctionInput()


// let y = document.getElementById("inputText")
//     if (y == "Nathalie", "Melissa","Matthew","Chantalle"){
//         document.getElementById("inputTekst").innerHTML = y[1].innerHTML "Je behoort tot groep 1";
//     }

// PROBEREN~!!!
// function myFunction() {
//     let input = document.getElementById("myText").value;
//     const names = ["Nathalie", "Melissa", "Matthew", "Chantalle"];
//     let result = names.includes(input);
//     myFunction2(result)
// }

// function myFunction2(result) {
//     if (result === true) {
//         document.getElementById("demo").innerHTML = "Youre in groep 1";
//         return console.log("Youre in groep 1")
//     } else if (result === false) {
//         document.getElementById("demo").innerHTML = "Youre not in groep 1";
//         return console.log("Youre not in groep 1")
//     }
// }

//MATTHEW
// function displayGroup() {
//     var input = document.getElementById("myText").value;
//     var names = ["Nathalie", "Melissa", "Matthew", "Chantalle"];
//     var result = names.includes(input);

//     document.getElementById("demo").innerHTML = result ? "Youre in groep 1" : "Youre not in groep 1";
//     return console.log(result ? "Youre in groep 1" : "Youre not in groep 1");
// }

// if(""){
    
// }

// console.log(1==1 ? "" : "")

// CARMEN~!!
//     function onsNamen(param) {
//         if (param == "Carmen" || param == "Tunahan") {
//             return "yes"
//         } else return "Not in the group"
//     }

// console.log(onsNamen("Tunahan"))


// //b)
// function onsNamenAanroep(param) {
//     document.getElementById("show_message").innerText = onsNamen(param)
// }
// onsNamenAanroep("Tunahan")

// //c)
// OnsNamenArrow = param => document.getElementById("show_message").innerText = onsNamen(param)
// OnsNamenArrow("Elias")


// CHANTALLE~!!!
//     function Function() {

//         let x = document.getElementById("myText").value;
//         const names = ["Nathalie", "Melissa", "Matthew", "Chantalle"];
//         let result = names.includes(x);

//         if (result === true) {
//             document.getElementById("demo").innerHTML = "Youre in groep 1";
//             return console.log("Youre in groep 1")
//         }
//         else (result === false)
//         document.getElementById("demo").innerHTML = "Youre not in groep 1";
//         return console.log("Youre not in groep 1")
//     }


// function ThisFunction() {
//     let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let Fruits = ["apple", "strawberry", "banana", "Orange", "Mango"]

//     RandomNumber = Math.floor(Math.random() * Numbers.length);
//     // console.log( Fruits[RandomNumber % Fruits.length])

//     Fruits[0] = "peer";
//     Fruits[1] = "kiwi";

//     // let element = Fruits[fromIndex];
//     // arr.splice(fromIndex, 1);
//     // arr.splice(toIndex, 0, element);



//     // let RandomFruit = Fruits[Numbers];

//     // console.log(Fruits[RandomNumber])

//     // console.log(Fruits[0])
//     // console.log(Fruits[1])
//     console.log(Fruits);
//  }


// function ThisFunction(){

// const dutchSports = ["voetbal","hockey","schaatsen"]

// // console.log(dutchSports[0]);
// // console.log(dutchSports[1]);
// // console.log(dutchSports[2]);

// for (const element of dutchSports) {
//     console.log(element);
//   }

// for (const element in dutchSports) {
//     console.log(element);
// }
// }

// function ThisFunction() {

//     let i =  1

// for(a=0;a<1;a++){
//     for(i=1;i<=10;i++) { 
//         console.log(i); 
//     } 
//     for(i=1;i<=10;i++) { 
//         console.log(i); 
//     } 
//     for(i=1;i<=10;i++) { 
//         console.log(i); 
//     } 
// }
  
// }

// function ThisFunction() {

//     let i =  1

// for(a=0;a<1;a++){
//     for(i=1;i<=10;i++) { 
//         console.log(i); 
//     } 
//     for(i=2;i<=20;i+=2) {
//         //optellen
//         console.log(i); 
//     } 
//     for(i=1;i<=30;i++) { 
//         if(i % 3 == 0){
//             //vermenigvuldigen
//         console.log(i); 
//         }
//     } 
// }
  
// }
// function ThisFunction() {

//     const number = 15
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
//       for (let i = 1; i <= number; i++) { 
//       console.log(n1); 
//       nextTerm = n1 + n2; 
//       n1 = n2; 
//       n2 = nextTerm; 
//       } 
//      function bblSort(arr){
   
//       for(let i = 0; i
//       < arr.length; i++){ 
     
//       for(let j = 0; j
//       < ( arr.length - i -1 ); j++){ 
    
//       if(arr[j] > arr[j+1]){ 
     
//       let temp = arr[j] 
//       arr[j] = arr[j + 1] 
//       arr[j+1] = temp 
//       } 
//       } 
//       } 
//     }
// }

// function ThisFunction() {


//     const arr = [3, 5, 6, 9];

//     const drie = 3;

//     const vijf = 5;

//     let sum = 23;


//         for (i = 10; i < 1000; i++) {
//             if ((i % 3 == 0) || (i % 5 == 0)) {
//                 arr.push(i);
//                 sum += i;
//             }
//         }


//     console.log(arr);
//     console.log(sum);

// }

// function ThisFunction() {

//         const arr = [2, 20, 5, 15, 30, 9, 13, 1, 8, 6]
     
//         let arraylength = arr.length;

//         for(i = 0; i < arraylength; i++){

//             for(j = 0; j < arraylength; j++){

//                 if(arr[j] > arr[j + 1]){
                    
//                     let swap = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = swap;
//                 }
//             }
//         }
//         console.log(arr)
//         return arr;
// }


