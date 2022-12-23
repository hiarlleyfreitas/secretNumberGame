function checkHitAttempt(results){
    const number = +results
    console.log(number);

    if(number === secretNumber){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h1>O número secreto era ${secretNumber}</h1>

            <button id="tryAgain" class="btn-tryAgain">Jogar Novamente</button>
        `
    }

    if(checkNumber(number)){
        // console.log("Número Inválido");
        hitAttempt.innerHTML += `<div> VALOR INVÁLIDO! </div>`
        return
    }

    if(numberGreaterOrLessThanAllowed(number)){
        hitAttempt.innerHTML += `
            <div>
                VALOR INVÁLIDO: Fale um número entre ${lowerValue} e ${highestValue}!
            </div>
        `
        return
    }
    
    else if(number > secretNumber){
        hitAttempt.innerHTML += `
            <div>    
                <i class="fa-solid fa-arrow-down"></i>
                O número secreto é menor 
                <i class="fa-solid fa-arrow-down"></i>
            </div>
        `
    }
    
    else{
        hitAttempt.innerHTML += `
            <div>    
                <i class="fa-solid fa-arrow-up"></i>
                O número secreto é maior
                <i class="fa-solid fa-arrow-up"></i>
            </div>
        `
    }

    
  
}

function checkNumber(number){
    return Number.isNaN(number)
}

function numberGreaterOrLessThanAllowed(number){
    return number > highestValue || number < lowerValue
}

document.body.addEventListener("click", (e) => {
    if(e.target.id == "tryAgain"){
        window.location.reload()
    }
    
    
    
    // console.log(e);
})