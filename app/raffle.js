const lowerValue = 1
const highestValue = 1000
const secretNumber = generateRandom()

const elHighestValue = document.getElementById("highestValue")
elHighestValue.innerHTML = highestValue

const elLowerValue = document.getElementById("lowerValue")
elLowerValue.innerHTML = lowerValue

function generateRandom(){
    return parseInt(Math.random() * (lowerValue - highestValue - 1) + (highestValue + 1))
}
console.log(secretNumber);












