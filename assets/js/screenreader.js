let h2s;
function screenreader_selector(selector, cnt, message) {
   h2s = document.querySelectorAll(`${selector}`);
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

// read content 

// let contents;
// function screenreader_content(selectors, cnts, messages) {
//    contents = document.querySelectorAll(`${selectors}`);
//   if (cnts >=contents.length || cnts<=-1) {
//     let msg = new SpeechSynthesisUtterance(messages);
//     let voices = speechSynthesis.getVoices();
//     console.log("isac");
//     msg.voice = voices[0];
//     speechSynthesis.speak(msg);
//     cnts>=contents.length?cnts = contents.length:cnts=-1
//   }
//   else {
//     tag = contents[cnts].textContent;
//     let msg = new SpeechSynthesisUtterance(tag);
//     let voices = speechSynthesis.getVoices();
//     console.log("isac");
//     msg.voice = voices[0];
//     speechSynthesis.speak(msg);
//   }
//   return tags_length=h2s.length;
// }