// Simple Form Submit Handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    alert('Thank you for contacting WebLabPrints! We will get back to you soon.');
    this.reset(); // Clear form after submission
});