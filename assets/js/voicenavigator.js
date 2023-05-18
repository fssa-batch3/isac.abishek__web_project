// function converter(selector){

let userarr = JSON.parse(localStorage.getItem("user"))
let activeuser = localStorage.getItem("userprofile_name")
let micon=0
if(localStorage.getItem("userprofile_name")){
    userarr.find(e=>{
        if(e["user_email"]===activeuser){
           if(e["accessblity"]===true){
            micon=1
           }
          
        }
    })
}
else{
  miconer()
}
if(micon===1){
  miconer()
}

function miconer() {
  function micon(){
    let micoff = new SpeechSynthesisUtterance("mic on");
   speechSynthesis.speak(micoff);
  }
  
  function starter() {
    converter("a,button")
  }
  
  function inter(n) {
    setInterval(starter, n)
  }
  
  function inter1(e) {
    setInterval(micon,e)
    inter(e + 2000)
    if (e <= 20000) {
      return inter1(e + 7000)
    }
    else {
      return 0
    }
  }
  inter1(16000)
}



















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


 
//   function inter(n){
//     setInterval(starter,n)
//   }
// function inter1(e){
//     setInterval(micon,e)
//     inter(e+2000)
//     inter1(e+7000)
//   }
//   inter1(16000)
 }
 function converter(selector) {
    let li=document.querySelectorAll(`${selector}`)
    console.log(li);
    let userarr = JSON.parse(localStorage.getItem("user"))
    let activeuser = localStorage.getItem("userprofile_name")
    // let check = 0;
    // let check2=0;
    // if (JSON.parse(localStorage.getItem("user"))) {
    //     // console.log("user registered");
    //     userarr.find(e => {
    //         if (activeuser === e["user_email"]) {
    //             check2=0

    //             if (e["accessblity"] === true) {
    //                 return check = 1
    //             }
               
    //         }
    //         else{
    //             check2=1
    //         }
    //     })
    //     if(check2===1){
    //         con(li)
    //         //   console.log("new user not first user");
    //   }
    //     if (check == 1) {
    //        con(li)
    //     }
    //     else {
    //         // console.log("assecblity false");
    //     }
    // }
    // else {
    //    con(li)
    //     // console.log("firtst user");
        
    // }




    let podu=0
  if(localStorage.getItem("userprofile_name")){
      userarr.find(e=>{
          if(e["user_email"]===activeuser){
             if(e["accessblity"]===true){
              podu=1
             }
            
          }
      })
  }
  else{
    con(li)
  }
  if(podu===1){
    con(li)
  }
}




// function micon(){
//   let micoff = new SpeechSynthesisUtterance("mic on");
//  speechSynthesis.speak(micoff);
// }

// function starter() {
//   converter("a,button")
// }

// function inter(n) {
//   setInterval(starter, n)
// }

// function inter1(e) {
//   setInterval(micon,e)
//   inter(e + 2000)
//   if (e <= 20000) {
//     return inter1(e + 7000)
//   }
//   else {
//     return 0
//   }
// }
// inter1(16000)