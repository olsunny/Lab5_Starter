// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect = document.querySelector('#horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.querySelector('#volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const audio = document.querySelector('audio');

  const jsConfetti = new JSConfetti();

  // --- Horn Select ---
  hornSelect.addEventListener('change', () => {
  const horn = hornSelect.value;

  hornImage.src = `assets/images/${horn}.svg`;
  hornImage.alt = horn.replace('-', ' ');

  audio.src = `assets/audio/${horn}.mp3`;
  audio.load();
  });

  // --- Volume Slider ---
  volumeSlider.addEventListener('input', () => {
    const value = Number(volumeSlider.value);

    audio.volume = value / 100;

    let level;
    if (value === 0)      level = 0;
    else if (value < 33)  level = 1;
    else if (value < 67)  level = 2;
    else                  level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  });

  // --- Play Button ---
  playButton.addEventListener('click', () => {
    if (!audio.src || audio.src.endsWith('assets/audio/')) return;

    audio.currentTime = 0;
    audio.volume = Number(volumeSlider.value) / 100;

    audio.play();
    if (hornSelect.value === 'party-horn') jsConfetti.addConfetti();

  });
}