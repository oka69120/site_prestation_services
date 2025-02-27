document.getElementById("footer").innerHTML = `
<footer class="footer">
<button id="scrollTopBtn" onclick="scrollToTop()">↑</button>
  <div class="footer-container">
    <!-- Section Logo -->
    <div class="footer-logo">
      <img src="/public/images/LogoColorTextBelow.jpeg" alt="Logo" />
      <p>Votre confort, notre priorité.</p>
    </div>

    <!-- Section Liens rapides -->
    <div class="footer-links">
      <h3>Liens utiles</h3>
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">À propos</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <!-- Section Contact -->
    <div class="footer-contact">
      <h3>Nous contacter</h3>
      <p><i class="fas fa-map-marker-alt"></i> 123 Rue de Lyon, France</p>
      <p>
        <i class="fas fa-phone"></i>
        <a href="tel:+33123456789">+33 1 23 45 67 89</a>
      </p>
      <p>
        <i class="fas fa-envelope"></i>
        <a href="mailto:contact@entreprise.com">contact@entreprise.com</a>
      </p>
    </div>

    <!-- Section Réseaux sociaux -->
    <div class="footer-social">
      <h3>Suivez-nous</h3>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  <!-- Copyright -->
  <div class="footer-bottom">
    <p>&copy; 2024 Votre Entreprise - Tous droits réservés</p>
  </div>
</footer>
`;
// ⚡ Émettre un événement pour signaler que le footer est chargé
document.dispatchEvent(new Event("footerLoaded"));
