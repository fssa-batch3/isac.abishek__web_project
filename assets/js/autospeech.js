function loader(message) {
    let userarr = JSON.parse(localStorage.getItem("user"))
    let activeuser = localStorage.getItem("userprofile_name")
    let check = 0;
    let check2 = 0
    if (JSON.parse(localStorage.getItem("user"))) {
        console.log("got user array");
       

        userarr.find(e => {
            if (activeuser == e["user_email"]) {
                 console.log(check2+"ac")
                 check2=0
                
                if (e["accessblity"] === true) {
                    return check = 1
                }
            }
            else {
                console.log(check2)
                check2 = 1
            }
        })
        if (check2 === 1) {
            let iam = new SpeechSynthesisUtterance(`${message}`);
            console.log(iam);
            speechSynthesis.speak(iam);
            console.log("new user not first user");
            check2 = 0
            console.log(check2)
        }
        if (check == 1) {
            let iam = new SpeechSynthesisUtterance(`${message}`);
            console.log(iam);
            speechSynthesis.speak(iam);
            console.log("assecblity true");
        }
        else {
            // let iam = new SpeechSynthesisUtterance(`${message}`);
            // console.log(iam);
            //   speechSynthesis.speak(iam);
            // console.log("new user not first user");
            console.log("assecblity false");
        }
    }
    else {
        let iam = new SpeechSynthesisUtterance(`${message}`);
        console.log(iam);
        speechSynthesis.speak(iam);
        console.log("firtst user");
    }
}
window.addEventListener('beforeunload', () => { //before the next page load
    // cancel any ongoing speech synthesis
    speechSynthesis.cancel();
  });
  let checker=0
    
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault();

        if (checker===0) {
       
          
            window.speechSynthesis.pause();
            
          return  checker=1
        }
        else{
            window.speechSynthesis.resume();
         return   checker=0
           
        }
    //   window.speechSynthesis.pause();
    }
   
})