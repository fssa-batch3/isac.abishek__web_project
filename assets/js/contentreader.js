let contents;
function screenreader_content(selectors, cnts, messages) {
   contents = document.querySelectorAll(`${selectors}`);
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