 let text=document.getElementById("voice")
//  let count=-1
 text.addEventListener("click",e=>{
    voice()
 })
 console.log("isac");
function voice() {
    // count++
    console.log("isac");
    // console.log(count);
let SpeechRecognition 
SpeechRecognition= SpeechRecognition || webkitSpeechRecognition;
let recognition = new SpeechRecognition();
// let input=document.querySelectorAll("input")
let input=document.getElementById("message")
console.log(input);        
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};
recognition.onspeechend = function() {

    // when user is done speaking
    recognition.stop();

}          
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    // let confidence = event.results[0][0].confidence;
        // document.getElementById("message").innerText=transcript;
       let won=transcript.toLowerCase()
         input.value=won
};        
// start recognition
recognition.start();
input.value=null
}
let hear=document.getElementById("hear")
hear.addEventListener("click",e=>{
    hearbtn()
})
function hearbtn() {
    let vrr=document.getElementById("message").value
    if(vrr==null){
        let iam = new SpeechSynthesisUtterance("not recorded yet");
  speechSynthesis.speak(iam);
    }
    let iam = new SpeechSynthesisUtterance(vrr);
  speechSynthesis.speak(iam);
}