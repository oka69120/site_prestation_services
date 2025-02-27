let attemptCount = 0; // Compteur de tentatives

function initializeFAQ() {
  const detailsElements = document.querySelectorAll("details");

  if (detailsElements.length > 0) {
    detailsElements.forEach((detail) => {
      detail.addEventListener("click", function () {
        detailsElements.forEach((otherDetail) => {
          if (otherDetail !== detail && otherDetail.open) {
            otherDetail.open = false;
          }
        });

        if (detail.open) {
          gsap.fromTo(
            detail,
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.3 }
          );
        }
      });
    });
  } else {
    attemptCount++; // Incrémenter le compteur
    if (attemptCount < 2) {
      setTimeout(initializeFAQ, 1000); // Réessaye après 1 seconde
    }
  }
}

// ⚡ Attendre que le DOM soit chargé ET que le footer soit inséré
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("footer")) {
    document.addEventListener("footerLoaded", initializeFAQ); // Lance la FAQ quand le footer est prêt
  } else {
    initializeFAQ(); // Si pas de footer, on lance direct
  }
});

let attempt = 0;

function initializeAnimations() {
  const sections = document.querySelectorAll(".fade-in");

  if (sections.length > 0) {
    gsap.utils.toArray(".fade-in").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });
  } else {
    attempt++;
    if (attempt < 10) {
      // 🔥 Arrêter après 10 essais
      setTimeout(initializeAnimations, 1000); // Réessaye toutes les secondes
    }
  }
}
// ⚡ Attendre que le footer soit chargé AVANT d'exécuter les animations
document.addEventListener("footerLoaded", initializeAnimations);

// ⚡ Si le footer est déjà chargé (cas où footerLoaded est émis avant que ce script soit lu)
if (document.getElementById("footer").innerHTML !== "") {
  initializeAnimations();
}

// -------------------------------------
document.addEventListener("footerLoaded", function () {
  console.log("✅ Footer chargé, activation du bouton de remontée !");

  const scrollBtn = document.getElementById("scrollTopBtn");

  if (!scrollBtn) {
    console.error("❌ Bouton #scrollTopBtn non trouvé !");
    return;
  }

  // Afficher le bouton quand on scrolle vers le bas
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
      scrollBtn.classList.remove("hide");
    } else {
      scrollBtn.classList.add("hide");
      setTimeout(() => scrollBtn.classList.remove("show"), 300);
    }
  });

  // Fonction pour remonter en haut avec un effet fluide
  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});

// ⚡ Si le footer est déjà chargé (cas d'un rechargement rapide)
if (document.getElementById("footer").innerHTML !== "") {
  document.dispatchEvent(new Event("footerLoaded"));
}
