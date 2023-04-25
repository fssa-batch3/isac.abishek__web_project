 let text=document.getElementById("voice")
//  let count=-1
 console.log("devas");

 text.addEventListener("click",e=>{
    voice()
 })
 console.log("isac");
function voice() {
    // count++
    console.log("isac");
 


    // console.log(count);
let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
let recognition = new SpeechRecognition();
// let input=document.querySelectorAll("input")
let input=document.getElementById("message")
console.log(input);
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    console.log("We are listening. Try speaking into the microphone.");
};
console.log("transcript1");

recognition.onspeechend = function() {
    console.log("transcript2");

    // when user is done speaking
    recognition.stop();
    console.log("transcript8");

}
    console.log("transcript3");
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    console.log("transcript4");
    // let confidence = event.results[0][0].confidence;
        // document.getElementById("message").innerText=transcript;
        input.value=transcript

};
              
// start recognition
recognition.start();
// if(count>input.length){
//    return count=-1
// }

input.value=null
}




// Get all label elements and loop through them




