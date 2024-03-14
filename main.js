// let arr1 =['non','aziza','olma','gul','mashina']


// let palindrom =[];
// let notpalindrom =[];


// for(element of arr1){
//     if(arr1[0] == arr1){
//         notpalindrom.push(arr1)
//     }
//     else{
//         palindrom.push(arr1)
//     }
// } 
// console.log(palindrom);
// console.log(notpalindrom);


let arr = ["non", "olma", "aziza", "gul", "moshina"];


let pol = [];
let nepol = [];

function reverseString(str) {
    return str.split( '' ).reverse( ).join( '' );
}

for (let element of arr) {
    reverse_element = reverseString(element)

    if (element === reverse_element) {

        pol.push(element);

    }
    else {
        nepol.push(element);
    }

}




console.log(arr);

console.log("polendrom: "+pol);
console.log( "polendrom mas: "+nepol )
