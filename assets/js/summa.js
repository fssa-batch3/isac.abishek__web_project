
// Create a new speech synthesis instance
const synth = window.speechSynthesis;

// Get a list of available voices
const voices = synth.getVoices();

// Log the list of voices to the console
console.log(voices);

// Find the Tamil voice by its language code and name
let tamilVoice = null;
for (let i = 0; i < voices.length; i++) {
  if (voices[i].lang === 'ta-IN' && voices[i].name === 'ta-IN-Standard-A') {
    tamilVoice = voices[i];
    break;
  }
}

// Log the index of the Tamil voice to the console
if (tamilVoice) {
  const index = voices.indexOf(tamilVoice);
  console.log(`Tamil voice found at index ${index}`);
} else {
  console.error('Tamil voice not found');
}
