document.addEventListener("DOMContentLoaded", function () {
    const sentences = document.querySelectorAll('.line');

    function showNextSentence() {
        sentences[currentIndex].classList.remove('show');
        currentIndex = (currentIndex + 1) % sentences.length;
        sentences[currentIndex].classList.add('show');
        
        audio.play();
    
    }

    let currentIndex = 0;
    sentences[currentIndex].classList.add('show');
    setInterval(showNextSentence, 3000);
});
