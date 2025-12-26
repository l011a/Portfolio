document.addEventListener('DOMContentLoaded', function(){
    emailjs.init({
        publicKey: "PDMkefIozhKrPM18y"
    });
    const contactForm = document.getElementById('js-contact-form');

    // kolla om formulär finns
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const submitBtn = this.querySelector('.btn-submit');

    // spara och visa att d skickas
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Skickar...'; 

            // skicka meddelande
            emailjs.sendForm('service_wpm4rmo', 'template_24wufrc', this)
            .then(function() {
                window.location.href = 'thanks.html';
            }, function(error) {

                alert('Något gick fel. Försök igen! '); 
            })
            .finally(function() {
                submitBtn.disabled = false; 
                submitBtn.textContent = originalText; 
        });
    });
}
}); 