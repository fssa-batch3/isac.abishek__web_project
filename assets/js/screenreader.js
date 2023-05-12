let h2s;
// function screenreader_selector(selector, cnt, message) {
function screenreader_nav(cnt,message) {

  if (cnt >=h2s.length || cnt<=-1) {
    let msg = new SpeechSynthesisUtterance(message);
    let voices = speechSynthesis.getVoices();
    msg.voice = voices[0];
    speechSynthesis.speak(msg);
    cnt>=h2s.length?cnt = h2s.length:cnt=-1
  }
  else {
    tags = h2s[cnt].textContent;
    let msg = new SpeechSynthesisUtterance(tags);
    let voices = speechSynthesis.getVoices();
    msg.voice = voices[0];
    speechSynthesis.speak(msg);
  }
  return tag_length=h2s.length;
}


function screenreader_selector(selector, cnt, message)  {
  h2s = document.querySelectorAll(`${selector}`);


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
        console.log("new user not first user");

        screenreader_nav(cnt,message)

  }
      if (check == 1) {
        screenreader_nav(cnt,message)
      }
      else {
        
          console.log("assecblity false");
      }
  }
  else {
    screenreader_nav(cnt,message)
      console.log("firtst user");
  }
}