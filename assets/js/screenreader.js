// comented screenreader beacuse toggle button not coded 

// let msg = new SpeechSynthesisUtterance();
// let voices = speechSynthesis.getVoices();
// msg.voice = voices[0];
// let tags = document.querySelectorAll('p,a,h1,h2,h3'); 
// tags.forEach((tag) => {
//     tag.addEventListener('click', (e) => {
        
//         msg.text = e.target.innerText;
//         tag.style.backgroundColor = "yellow";

//         tag.style.color = "black";
//         speechSynthesis.speak(msg);
        
//         let interval = setInterval(() => {
//             if(!speechSynthesis.speaking){
//                 tag.style.removeProperty('background-color');
//                 clearInterval(interval);
//             }
//         }, 100);
        
//     });
// });