// Select all FAQ question buttons
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = this.classList.contains('active');

        // Toggle active class for question button (change + to -)
        this.classList.toggle('active');

        // Toggle display of the answer (show or hide)
        if (isActive) {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
