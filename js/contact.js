//Contact form interaction
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm); 
    const firstName = formData.get('first-name');
    const lastName = formData.get('last-name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');    
    alert(`Thank you for your message, ${firstName} ${lastName}! We will get back to you at ${email} or ${phone}.`);
    contactForm.reset();
});