document.getElementById("header").innerHTML = `
<header>
    <h1>Prestation de Services</h1>
    <nav>
        <a href="/accueil" onclick="navigate(event)">Accueil</a>
        <a href="/aide" onclick="navigate(event)">Aide</a>
        <a href="/bricolage" onclick="navigate(event)">Bricolage</a>
        <a href="/garderie" onclick="navigate(event)">Garderie</a>
        <a href="/menage" onclick="navigate(event)">Ménage</a>
    </nav>
</header>
`;

// Animation GSAP
gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
