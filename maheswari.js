const speakButton = document.getElementById('speak-button');
const textToRead = document.getElementById('text-to-read');

speakButton.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(textToRead.value);
        speechSynthesis.speak(speech);
    } else {
        alert('Text-to-speech is not supported in your browser.');
    }
});
