let contents;
// function screenreader_content(selectors, cnts, messages) {
function screenreader(cnts,messages) {

  //  contents = document.querySelectorAll(`${selectors}`);
  if (cnts >=contents.length || cnts<=-1) {
    let msg = new SpeechSynthesisUtterance(messages);
    let voices = speechSynthesis.getVoices();
    console.log("isac");
    msg.voice = voices[0];
    speechSynthesis.speak(msg);
    cnts>=contents.length?cnts = contents.length:cnts=-1
  }
  else {
    tag = contents[cnts].textContent;
    let msg = new SpeechSynthesisUtterance(tag);
    let voices = speechSynthesis.getVoices();
    console.log("isac");
    msg.voice = voices[0];
    speechSynthesis.speak(msg);
  }
  return tags_length=contents.length;
  
}
function screenreader_content(selectors, cnts, messages)  {
  contents = document.querySelectorAll(`${selectors}`);

  // let li=document.querySelectorAll(`${selector}`)
  let userarr = JSON.parse(localStorage.getItem("user"))
  let activeuser = localStorage.getItem("userprofile_name")
  let check = 0;
  let check2=0
  if (JSON.parse(localStorage.getItem("user"))) {
      console.log("user registered");
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
        screenreader(cnts,messages)
        console.log("new user not first user");


  }
      if (check == 1) {
        screenreader(cnts,messages)
      }
      else {
      
          console.log("assecblity false");
      }
  }
  else {
    screenreader(cnts,messages)
      console.log("firtst user");
  }
}