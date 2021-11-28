// 1. Create an array named numbers and store 5 number values in it
let numbers = [1,2,3,4,5];

// 2. Calculate the sum of array items and print it to the console using console.log()
function sumOfArray(numbers){
    let sum = 0;
    for(let number of numbers ){
        sum += number;
    }
    return sum;
}

sumOfArray(numbers)

// 3. Calculate the average of array items and print it to the console using console.log()
function avgOfArray(sum, numbers){
    console.log(sum, numbers)
    return sum/numbers;
}

console.log(avgOfArray(sumOfArray(numbers), numbers.length))

// 4. Find the highest number in the array and print it to the console using console.log()
function highest(numbers){
    return Math.max(...numbers);
}

highest(numbers)

// 5. Find the lowest number in the array and print it to the console using console.log()
function lowest(numbers){
    return Math.min(...numbers);
}

lowest(numbers)

// 6. Find the even numbers in the array and print them to the console using console.log()
function evenNumbers(numbers){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0){
           console.log(numbers[i])
        }
    }
}

evenNumbers(numbers)
// 7. Find the odd numbers in the array and print them to the console using console.log()
function oddNumbers(numbers){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 !== 0){
           console.log(numbers[i])
        }
    }
}

oddNumbers(numbers)

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
function divisibleBy5(numbers){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 5 === 0){
           console.log(numbers[i])
        }
    }
}

divisibleBy5(numbers)


// 9. Log all the element of the array one by one
function allArrayItems(numbers){
    for(let i=0; i<numbers.length; i++){
           console.log(numbers[i])
    }
}

allArrayItems(numbers)

// 10. Find all the number in the array that is divisible by 3
function divisibleBy3(numbers){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 3 === 0){
           console.log(numbers[i])
        }
    }
}

divisibleBy3(numbers)