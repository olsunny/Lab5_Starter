// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
const voiceSelect = document.querySelector('#voice-select');
const textarea   = document.querySelector('#text-to-speak');
const talkButton = document.querySelector('#explore button');
const faceImage  = document.querySelector('#explore img');
 
const synth = window.speechSynthesis;
 
// --- Load Voices ---
function populateVoices() {
  const voices = synth.getVoices();
  if (voices.length === 0) return;
 
  voiceSelect.innerHTML = '';
 
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}
 
populateVoices();
synth.addEventListener('voiceschanged', populateVoices);
 
// --- Press to Talk ---
talkButton.addEventListener('click', () => {
  const text = textarea.value.trim();
  if (!text) return;
 
  // Cancel any speech already in progress
  synth.cancel();
 
  const utterance = new SpeechSynthesisUtterance(text);
 
  // Attach the selected voice
  const voices = synth.getVoices();
  utterance.voice = voices[Number(voiceSelect.value)];
 
  // Swap to open-mouth while speaking
  utterance.addEventListener('start', () => {
    faceImage.src = 'assets/images/smiling-open.png';
    faceImage.alt = 'Talking face';
  });
 
  // Swap back to default when done
  utterance.addEventListener('end', () => {
    faceImage.src = 'assets/images/smiling.png';
    faceImage.alt = 'Smiling face';
  });
 
  synth.speak(utterance);});
}