const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
// Display the numbers from 1 to 20. (1, 2, 3, …, 19, 20)
let headingOne = document.createElement('h1')
headingOne.append('kata 1')
document.body.append(headingOne)
let divOne = document.createElement('div')
for (let num = 1; num < 21; num++) {
    divOne.append(num + " ")
}
document.body.append(divOne)

// Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
let headingTwo = document.createElement('h1')
headingTwo.append('kata 2')
document.body.append(headingTwo)
let divTwo = document.createElement('div')
for (let num = 2; num < 21; num += 2) {
    divTwo.append(num + " ")
}
document.body.append(divTwo)

// Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
let headingThree = document.createElement('h1')
headingThree.append('kata 3')
document.body.append(headingThree)
let divThree = document.createElement('div')
for (let num = 1; num < 20; num += 2) {
    divThree.append(num + " ")
}
document.body.append(divThree)

// Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
let headingFour = document.createElement('h1')
headingFour.append('kata 4')
document.body.append(headingFour)
let divFour = document.createElement('div')
for (let num = 5; num < 101; num += 5) {
    divFour.append(num + " ")
}
document.body.append(divFour)

// Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
let headingFive = document.createElement('h1')
headingFive.append('kata 5')
document.body.append(headingFive)
let divFive = document.createElement('div')
for (let num = 1; num < 11; num++) {
    let square = num ** 2
    divFive.append(square + " ")
}
document.body.append(divFive)

// Display the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
let headingSix = document.createElement('h1')
headingSix.append('kata 6')
document.body.append(headingSix)
let divSix = document.createElement('div')
for (let num = 20; num > 0; num--) {
    divSix.append(num + " ")
}
document.body.append(divSix)

// Display the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
let headingSeven = document.createElement('h1')
headingSeven.append('kata 7')
document.body.append(headingSeven)
let divSeven = document.createElement('div')
for (let num = 20; num > 0; num -= 2) {
    divSeven.append(num + " ")
}
document.body.append(divSeven)

// Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
let headingEight = document.createElement('h1')
headingEight.append('kata 8')
document.body.append(headingEight)
let divEight = document.createElement('div')
for (let num = 19; num > 0; num -= 2) {
    divEight.append(num + " ")
}
document.body.append(divEight)

// Display the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
let headingNine = document.createElement('h1')
headingNine.append('kata 9')
document.body.append(headingNine)
let divNine = document.createElement('div')
for (let num = 100; num > 0; num -= 5) {
    divNine.append(num + " ")
}
document.body.append(divNine)

// Display the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
let headingTen = document.createElement('h1')
headingTen.append('kata 10')
document.body.append(headingTen)
let divTen = document.createElement('div')
for (let num = 10; num > 0; num--) {
    let square = num ** 2
    divTen.append(square + " ")
}
document.body.append(divTen)

// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
let headingEleven = document.createElement('h1')
headingEleven.append('kata 11')
document.body.append(headingEleven)
for (let index = 0; index < sampleArray.length; index++) {
    const element = sampleArray[index];
    console.log(element)
    document.body.append(element + " ")
}

// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
let headingTwelve = document.createElement('h1')
headingTwelve.append('kata 12')
document.body.append(headingTwelve)
for (let index = 0; index < sampleArray.length; index++) {
    const element = sampleArray[index];
    console.log(element)
    let even = element % 2 === 0
    if (even) {
        document.body.append(element + " ")
    }
}

// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
let headingThirteen = document.createElement('h1')
headingThirteen.append('kata 13')
document.body.append(headingThirteen)
for (let index = 0; index < sampleArray.length; index++) {
    const element = sampleArray[index];
    console.log(element)
    let odd = element % 2 !== 0
    if (odd) {
        document.body.append(element + " ")
    }
}

// Display the square of each element in sampleArray. (219961, 570025, …, 222784)
let headingFourteen = document.createElement('h1')
headingFourteen.append('kata 14')
document.body.append(headingFourteen)
for (let index = 0; index < sampleArray.length; index++) {
    const element = sampleArray[index];
    let square = element ** 2
    document.body.append(square + " ")
}

// Display the sum of all the numbers from 1 to 20.
let headingFifteen = document.createElement('h1')
headingFifteen.append('kata 15')
document.body.append(headingFifteen)

// Display the sum of all the elements in sampleArray.
let headingSixteen = document.createElement('h1')
headingSixteen.append('kata 16')
document.body.append(headingSixteen)

// Display the smallest element in sampleArray.
let headingSeventeen = document.createElement('h1')
headingSeventeen.append('kata 17')
document.body.append(headingSeventeen)

// Display the largest element in sampleArray.
let headingEighteen = document.createElement('h1')
headingEighteen.append('kata 18')
document.body.append(headingEighteen)
