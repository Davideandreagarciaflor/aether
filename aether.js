/* ===============================
   Animazioni per i link di navigazione
   =============================== */
   const navLinks = document.querySelectorAll('.nav-link');
   navLinks.forEach(link => {
     link.addEventListener('mouseover', () => {
       link.style.transform = 'scale(1.1)';
       link.style.transition = 'transform 0.3s';
     });
     link.addEventListener('mouseout', () => {
       link.style.transform = 'scale(1)';
     });
   });
   
   /* ===============================
      Effetto di comparsa per le sezioni
      =============================== */
   const sections = document.querySelectorAll('section');
   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.style.opacity = '1';
         entry.target.style.transform = 'translateY(0)';
         entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
       }
     });
   }, { threshold: 0.1 });
   sections.forEach(section => {
     section.style.opacity = '0';
     section.style.transform = 'translateY(20px)';
     observer.observe(section);
   });
   
   /* ===============================
      Hover sulle card dei servizi
      =============================== */
   const features = document.querySelectorAll('.feature');
   features.forEach(feature => {
     feature.addEventListener('mouseover', () => {
       feature.style.transform = 'scale(1.05)';
       feature.style.transition = 'transform 0.3s';
     });
     feature.addEventListener('mouseout', () => {
       feature.style.transform = 'scale(1)';
     });
   });
   
   /* ===============================
      Hover icone social
      =============================== */
   const socialIcons = document.querySelectorAll('.social-icons a');
   socialIcons.forEach(icon => {
     icon.addEventListener('mouseover', () => {
       icon.style.transform = 'rotate(360deg)';
       icon.style.transition = 'transform 0.5s';
     });
     icon.addEventListener('mouseout', () => {
       icon.style.transform = 'rotate(0deg)';
     });
   });
   
   /* ===============================
      Scroll-to-Top
      =============================== */
   const scrollToTopButton = document.getElementById('scrollToTop');
   if (scrollToTopButton) {
     window.addEventListener('scroll', () => {
       if (window.scrollY > 300) {
         scrollToTopButton.style.display = 'block';
       } else {
         scrollToTopButton.style.display = 'none';
       }
     });
     scrollToTopButton.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
     });
   }
   
   /* ===============================
      Inizializzazione della Mappa (Leaflet)
      =============================== */
   if (document.getElementById('map')) {
     const map = L.map('map').setView([45.4654, 9.1895], 16);
     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; OpenStreetMap contributors'
     }).addTo(map);
     L.marker([45.4654, 9.1895]).addTo(map)
       .bindPopup('Galleria Vittorio Emanuele II, Milano')
       .openPopup();
   }
   
   /* ===============================
      Gestione Prenotazione
      =============================== */
   const bookingForm = document.getElementById('bookingForm');
   const bookingMessage = document.getElementById('bookingMessage');
   if (bookingForm) {
     bookingForm.addEventListener('submit', function(e) {
       e.preventDefault();
       const name = document.getElementById('name').value.trim();
       const email = document.getElementById('email').value.trim();
       const area = document.getElementById('area').value;
       const date = document.getElementById('date').value;
       const time = document.getElementById('time').value;
       
       if (!name || !email || !area || !date || !time) {
         bookingMessage.textContent = "Per favore, compila tutti i campi richiesti.";
         bookingMessage.style.color = "red";
         return;
       }
       bookingMessage.textContent = `Grazie ${name}, la tua prenotazione per "${area}" il ${date} alle ${time} è stata ricevuta!`;
       bookingMessage.style.color = "#4e54c8";
       bookingForm.reset();
     });
   }
   