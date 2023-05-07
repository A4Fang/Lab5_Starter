// expose.js
const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {

  //Selecting the horn
  let selectOption = document.getElementById('horn-select');

  selectOption.addEventListener('change', function() {
    let selectValue = selectOption.value;
    var audio = document.getElementsByClassName('hidden')[0];
    var image = document.querySelector('img');

    if(selectValue == 'air-horn') {
      image.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    }

    if(selectValue == 'car-horn') {
      image.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    }

    if(selectValue == 'party-horn') {
      image.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  })

  //Audio adjustment
  var audioAdjustment = document.querySelector('#volume-controls input');

  audioAdjustment.addEventListener('change', function() {
    let audioValue = audioAdjustment.value;
    var audio = document.getElementsByClassName('hidden')[0];
    var image = document.querySelector('#volume-controls img');

    if(audioValue == 0) {
      image.src = 'assets/icons/volume-level-0.svg';
    }

    else if(audioValue < 33) {
      image.src = 'assets/icons/volume-level-1.svg';
    }

    else if(audioValue >= 33 && audioValue < 67) {
      image.src = 'assets/icons/volume-level-2.svg';
    }

    else if(audioValue >= 67) {
      image.src = 'assets/icons/volume-level-3.svg';
    }

    audio.volume = audioValue / 100;
  })

  //Button function
  var button = document.querySelector('button');

  button.addEventListener('click', function() {
    let selectOption = document.getElementById('horn-select');
    let selectValue = selectOption.value;
    let audio = document.getElementsByClassName('hidden')[0];

    if(selectValue == 'party-horn') {
      jsConfetti.addConfetti();
    }
    
    audio.play();
  })
}