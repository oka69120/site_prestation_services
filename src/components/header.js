document.getElementById("header").innerHTML = `
<header  id="navbar">
    <div class="nav-container" >
      <div class="logo">
      <img src="/public/images/LogoColorTextBelow.jpeg" alt="RESEAU D'AIDE A DOMICILE" />
    </div>
        <div class="burger-menu" onclick="toggleMenu()">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav class="nav-links">
            <a href="/accueil" onclick="navigate(event)">Accueil</a>
            <a href="/aide" onclick="navigate(event)">Aide</a>
            <a href="/bricolage" onclick="navigate(event)">Bricolage</a>
            <a href="/garderie" onclick="navigate(event)">Garderie</a>
            <a href="/menage" onclick="navigate(event)">Ménage</a>
        </nav>

        <div class="phone-container">
          <a href="tel:+33123456789" class="phone-number">
              <i class="fas fa-phone-alt"></i> <span class="phone-text">+33 1 23 45 67 89</span>
          </a>
        </div>

            <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
</header>
`;
document.dispatchEvent(new Event("headerLoaded"));
// Animation GSAP
gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
// Fonction pour gérer l'affichage du menu mobile
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const bars = document.querySelectorAll(".bar");
  const burger = document.querySelector(".burger-menu");
  const links = document.querySelectorAll(".nav-links a");

  if (navLinks.classList.contains("nav-active")) {
    gsap.to(".nav-links", { x: "100%", duration: 0.5, ease: "power2.in" });
    gsap.to(".nav-links a", {
      opacity: 0,
      y: -10,
      duration: 0.3,
      stagger: 0.1,
    });
    navLinks.classList.remove("nav-active");
    burger.classList.remove("change");
  } else {
    gsap.fromTo(
      ".nav-links",
      { x: "100%" },
      { x: "0%", duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      ".nav-links a",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
    navLinks.classList.add("nav-active");
    burger.classList.add("change");
  }
}
