// function converter(selector){
function con(li){

    // let li=document.querySelectorAll(`${selector}`)
    let text=document.getElementById("message")
    console.log(li);
 let SpeechRecognition 
 SpeechRecognition= SpeechRecognition || webkitSpeechRecognition;
 let recognition = new SpeechRecognition();
 recognition.onstart = function() {
     console.log("We are listening. Try speaking into the microphone.");
 };
 
 recognition.onspeechend = function() {
     recognition.stop();
 }

 recognition.onresult = function(event) {
     let transcript = event.results[0][0].transcript;
     console.log(transcript+"transcript");
     let lower;
    lower= transcript.toLowerCase()
    console.log(lower+"lower");

    let low_arr=lower.split('.')
    console.log(low_arr);
         text.value=low_arr[0]
         li.forEach(e=>{
   console.log(e.innerText);
   if(e.innerText===text.value){
     e.click();
     console.log(e);
   }
 })
 };
 
 recognition.start();
 }
 function converter(selector) {
    let li=document.querySelectorAll(`${selector}`)
    console.log(li);
    let userarr = JSON.parse(localStorage.getItem("user"))
    let activeuser = localStorage.getItem("userprofile_name")
    let check = 0;
    let check2=0;
    if (JSON.parse(localStorage.getItem("user"))) {
        // console.log("user registered");
        userarr.find(e => {
            if (activeuser === e["user_email"]) {
                check2=0

                if (e["accessblity"] === true) {
                    return check = 1
                }
               
            }
            else{
                check2=1
            }
        })
        if(check2===1){
            con(li)
            //   console.log("new user not first user");
      }
        if (check == 1) {
           con(li)
        }
        else {
            // console.log("assecblity false");
        }
    }
    else {
       con(li)
        // console.log("firtst user");
    }
}