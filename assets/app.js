const year = document.getElementById('year');
const navLinks = document.querySelectorAll('.navbar .nav-link');
const navbarCollapse = document.getElementById('mainNav');
const enquiryForm = document.getElementById('enquiryForm');
const trackingForm = document.getElementById('trackingForm');
const whatsappNumber = '60387060475';

if (year) {
    year.textContent = new Date().getFullYear();
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');

        if (window.innerWidth < 992 && navbarCollapse && window.bootstrap) {
            const collapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
            if (collapse) {
                collapse.hide();
            }
        }
    });
});

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener');
}

if (enquiryForm) {
    enquiryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.classList.add('was-validated');
            return;
        }

        const formData = new FormData(enquiryForm);
        const name = formData.get('name');
        const company = formData.get('company');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const reference = formData.get('reference');
        const message = formData.get('message');

        const whatsappMessage = [
            'Hello Inter GSA, I would like to submit a freight enquiry.',
            '',
            `Name: ${name}`,
            `Company: ${company}`,
            `Phone: ${phone}`,
            `Service Needed: ${service}`,
            `Shipment Reference: ${reference || 'N/A'}`,
            `Details: ${message}`,
        ].join('\n');

        openWhatsApp(whatsappMessage);
    });
}

if (trackingForm) {
    trackingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!trackingForm.checkValidity()) {
            trackingForm.classList.add('was-validated');
            return;
        }

        const formData = new FormData(trackingForm);
        const reference = formData.get('reference');
        const whatsappMessage = [
            'Hello Inter GSA, I would like a shipment tracking update.',
            '',
            `Reference: ${reference}`,
        ].join('\n');

        openWhatsApp(whatsappMessage);
    });
}
