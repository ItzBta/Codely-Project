// let variable1 = prompt("First number");
// let variable2 = prompt("Second nunber");

// console.log("Before");
// console.log("Variable1="+variable1)
// console.log("Variable2="+variable2)

// let blank = variable1;
// variable1 = variable2;
// variable2 = blank;
// console.log("After");
// console.log("Variable1="+variable1);
// console.log("Variable2="+variable2);







// let b = prompt("First number ");
// let c = prompt("Second number");
// let d = prompt("Third number");

// let product = b*c;
// let result = product - d;

// console.log(result);






// let day = prompt("How many days?");
// let hour = prompt("How many hours?");
// let hours= day*24+hour
// console.log(hours+"hours.")


// function reverseNumbers(numbers) {
//   for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
//   }
// }

// //12

// function jishih(x,y){
//   if(x>y){
//     console.log(x)}
//   else if(x===y){
//     console.log("EQUAL!")
//   }
//   else if(x<y){
//     console.log(y)
//   }
//   }




//   var height = prompt("Length")
// var width = prompt("Width")

// if(width==height){
//     alert("It's a square")
// }
// else if(width>height){
//     alert("It's landscape.")
// }
// else if(width<height){
//     alert("It's portrait.")
// }
// else{
//     alert("Enter a valid number!")
// }


// function numberz(num) {
//   var evenNumbers = '';
//   var oddNumbers = '';

//   for (var e = 2; e <= num; e += 2) {
//     evenNumbers += e + ' ';
//   }

//   for (var o = 1; o <= num; o += 2) {
//     oddNumbers += o + ' ';
//   }

//   console.log('Even numbers: ' + evenNumbers);
//   console.log('Odd numbers: ' + oddNumbers);
// }


// function fizzBuzz(input){
//   if(input==!number){
//     return 'Not number lmao';
//   }
//   else if(input %3 ===0 && input%5 ===0){
//     return'FizzBuzz';
//   }
//   else if(input %3 ===0){
//     return 'Fizz';
//   }
//   else if(input%5 ===0){
//     return ' Buzz';
//   }
//   else{console.log("Neither")}
// }


// function speedometer(speed) {
//   let points = 0;
//   let erh = 0;
  
//   if (speed > 80) {
//     console.log("Хурд хэтрүүлсэн");
//     let overspeed = speed - 80;
//     console.log(overspeed + " km/h");
    
//     let pointsLost = Math.floor(overspeed / 5);
//     for (let i = 0; i < pointsLost; i++) {
//       points -= 1;
      
//       if ((i + 1) % 5 === 0) {
//         erh -= 1;
//       }
//     }
    
//     console.log(points + " onoo hasuullaa");
//     console.log(erh+"joloonii erh hasuullaa");
//   }
  
//   return {
//     points,
//     erh
//   };
// }







// //13

// const car = {
//   brand: 'Toyota',
//   name: 'Prius',
//   price: 20000000
// };

// const keys = Object.keys(car);

// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   console.log(key + '=' + car[key]);
// }

// function dasgal3(inputnum) {
//   for (let i = 1; i <= inputnum; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       console.log(i);
//     }
//   }
// }






// function findMaxNumbers(numbers){
//   numbers.sort((a, b) => b - a);
//   console.log(numbers[0]);
// }


// function reverse(numbas){
//   reverse.reverse();
//   console.log(reverse)
// }

// function findMaxNumbers2(n){
//   let greatest=n[0];
//   for (let i = 0; i < n.length; i++) {
//     if(n[i]>greatest){
//       greatest=n[i]
//       console.log(greatest);
//     }
//   }
//   return greatest;
// }

// function sortnums(lol){
//   let greatest=n[0];
//   for (let i = 0; i < lol.length; i++) {
//     if(n[i]>greatest){
//       greatest=n[i+1];
//     console.log(greatest)
 
//     }
//   }
// }

// let input = 1234
// let lastDigit=0 ;
// for (let i = 0; i< input.toString().length; i++) {
    
//     lastDigit= input % 10;
//     //4
//     input= (input-lastDigit) / 10;
//     //123
//     lastDigit*10 + input

    
// }
function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

  function scrollToSection(about) {
    $('html, body').animate({
      scrollTop: $(about).offset().about
    }, 1000); // Adjust the duration as needed
  }
  function scrollToSection(sectionId) {
    $('html, body').animate({
      scrollTop: $(sectionId).offset().top
    }, 1000); // Adjust the duration as needed
  }
  function scrollToSection(sectionId) {
    $('html, body').animate({
      scrollTop: $(sectionId).offset().top
    }, 1000); // Adjust the duration as needed
  }
  



