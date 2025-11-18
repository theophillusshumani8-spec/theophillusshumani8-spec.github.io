// header shadow on scroll
(function(){
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) header.style.boxShadow = '0 6px 18px rgba(2,6,23,0.12)';
    else header.style.boxShadow = '0 2px 6px rgba(0,0,0,0.08)';
  });
})();

// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// booking form handler
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks! Your booking request has been received. We will contact you on the phone/WhatsApp provided.');
  this.reset();
});

// contact form handler (small client-side feedback)
document.getElementById('contactForm').addEventListener('submit', function(e){
  // If you use Formspree or other endpoint, this will still post to server.
  setTimeout(() => {
    alert('Message sent! We will get back to you soon.');
  }, 250);
});
