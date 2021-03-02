// Authored: Christian Rouse
// Professor: Wes Modes
// TA: Brock Stuessi
// Class: Art-101-01: Introduction to Computer Programming for the Arts
// Due Date: 2 March 2021

// function fizzBuzzBoom(maxNums, factorObj) {
//     for (var num=0; num<maxNums; num++) {
//         debugger;
//         var outputStr = "";
//         for (var factor in factorObj) {
//             if (num % factor == 0) {
//                 outputStr += factorObj[factor];
//             }
//         }
//         if (outputStr) {
//             outputStr = " - " + outputStr + "!";
//         }
//         outputToPage(num.toString() + outputStr)
//     }
// }
// //
// maxFactors = 5;
// outputEl = document.getElementById("output");
// //
// function getFactorObj() {
//     var factorObj = {};
//     for (var factor=0; factor<maxFactors; factor++) {
//         numId = "num" + factor;
//         textId = "text" + factor;
//         numValue = document.getElementById(numId).value;
//         textValue = document.getElementById(textId).value;
//         console.log(factor + ") num:", numValue, "text:", textValue)
//         if (numValue && textValue) {
//             factorObj[numValue] = textValue;
//         }
//     }
//     return factorObj;
// }
// //
// function outputToPage(str) {
//     newEl = document.createElement("p");
//     newEl.innerHTML = str;
//     outputEl.appendChild(newEl);
// }
// //
//
// function reportError(str) {
//     outputEl.innerHTML = "<div class='error'>" + str + "</div>";
// }
// //
// document.getElementById("submit").addEventListener("click", function() {
//     var max = document.getElementById("max").value;
//     console.log("max:", max)
//     if (! max) {
//         reportError("You must provide a maximum");
//         return;
//     }
//     var factorObj = getFactorObj();
//     console.log("factorObj:", factorObj);
//     if (Object.keys(factorObj).length === 0) {
//         reportError("You must provide at least one factor and text");
//         return;
//     }
//     outputEl.innerHTML = "";
//     fizzBuzzBoom(max, factorObj);
//     outputEl.classList.add("cols");
// })
