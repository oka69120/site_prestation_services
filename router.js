function navigate(event) {
  event.preventDefault();
  const path = event.target.getAttribute("href").substring(1);
  window.history.pushState({}, path, window.location.origin + "/" + path);
  loadPage(path);
}

function loadPage(page) {
  fetch(`src/pages/${page}.html`)
    .then((response) => response.text())
    .then((html) => {
      document.body.innerHTML = html;
      loadComponents();
    });
}

function loadComponents() {
  const scriptHeader = document.createElement("script");
  scriptHeader.src = "src/components/header.js";
  document.body.appendChild(scriptHeader);

  const scriptFooter = document.createElement("script");
  scriptFooter.src = "src/components/footer.js";
  document.body.appendChild(scriptFooter);
}

window.onpopstate = () => {
  const path = window.location.pathname.substring(1);
  loadPage(path || "accueil");
};

document.addEventListener("DOMContentLoaded", () => {
  loadPage("accueil");
});
