// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  let textInput = document.getElementById('text-to-speak');
  let talkButton = document.querySelector('button');
  let voiceSelect = document.getElementById('voice-select');
  let face = document.querySelector('img');

  //Populate the list
  function populateVoices() {
    var voices = speechSynthesis.getVoices();

    voices.forEach(function(voice) {
      var option = document.createElement('option');
      option.value = voice.voiceURI;
      option.textContent = voice.name;
      voiceSelect.appendChild(option);
    });
  }
  window.speechSynthesis.onvoiceschanged = populateVoices;

  //Implement the text to speech
  function speakText() {
    var selectedVoice = voiceSelect.value;
    var utterance = new SpeechSynthesisUtterance(textInput.value);
    var voices = speechSynthesis.getVoices();
    var voice = voices.find(function(voice) {
      return voice.voiceURI === selectedVoice;
    });
    
    utterance.voice = voice;

    utterance.onstart = function() {
      face.src = 'assets/images/smiling-open.png';
    };

    utterance.onend = function() {
      face.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  }

  talkButton.addEventListener('click', speakText);
}