// JavaScript for Motivational Text
const motivateBtn = document.getElementById('motivate-btn');
const motivationText = document.getElementById('motivation-text');

const quotes = [
    "Breathe in peace, exhale stress.",
    "You are exactly where you need to be.",
    "Calm your mind, and the soul will speak.",
    "Meditation is the key to serenity.",
    "Relax, recharge, and refocus your energy."
];

motivateBtn.addEventListener('click', () => {
    // Select a random motivational quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    motivationText.textContent = randomQuote;
});

// JavaScript for Audio Events
const audio = document.getElementById('meditation-audio');
audio.addEventListener('play', () => {
    motivationText.textContent = "Enjoy your meditation session!";
});
audio.addEventListener('ended', () => {
    motivationText.textContent = "Well done! You’ve completed your session.";
});