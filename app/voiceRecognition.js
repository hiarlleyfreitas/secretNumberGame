const hitAttempt = document.getElementById("chute")

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; 

const recognition = new SpeechRecognition()

recognition.lang = "pt-br" //.lang = Defines the language to use
recognition.start() //.start = Enable MIC
recognition.addEventListener("result", onSpeak)

function onSpeak(e){
    results = e.results[0][0].transcript.replace(".", "")
    displayResult(results)
    checkHitAttempt(results)
    // console.log(e);
}

function displayResult(results){
    hitAttempt.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${results}</span>
    `
}

recognition.addEventListener("end", () => {
    recognition.start()
})