// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// create a funcntion that accepts an array of objects
const displayNameAndOcc = (array) =>{
  // loop through the array to get the name key from each the object
  return array.map(value => {
    // split the first and last name into another array and map through to capitalize each first letter
    let capName = value.name.split(" ").map(names => {
        return names[0].toUpperCase() + names.slice(1)
      }
    ).join(" ") //join the capitalized names back to a string
 
    // output a sentence with the capitalized name and is a occupation.
    return `${capName} is a ${value.occupation}.`

  }).join(" ") //join each object back to a string

}

console.log(displayNameAndOcc(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// create a function that takes in an array
const mod3ofNums = (array) => {
  //create new array to store the remainder of the numbers when divided by 3
  let newArray = []
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // find only numbers
    if (typeof array[i] === "number") {
      // add the modulo 3 of each number to the new array
      newArray.push(array[i] % 3)
    }    
  }
  return newArray
}

console.log(mod3ofNums(testingArray1))
console.log(mod3ofNums(testingArray2))



// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// create a function that takes in 2 arrays
const noDupes = (array1, array2) => {
  // create array to store filtered array
  let newArray = []

  // concatenate the 2 arrays together
  let combinedArray = array1.concat(array2)
  // loop through array
  for (let i = 0; i < combinedArray.length; i++) {
    // find if the value is the first occurrence of that value in the array
    if (combinedArray.indexOf(combinedArray[i]) === i){
      newArray.push(combinedArray[i])
    }
  }
  return newArray
}

console.log(noDupes(testingArray3, testingArray4))