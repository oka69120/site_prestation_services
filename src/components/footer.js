document.getElementById("footer").innerHTML = `
<footer>
    <p>&copy; 2025 Prestation de Services. Tous droits réservés.</p>
</footer>
`;

// ⚡ Émettre un événement pour signaler que le footer est chargé
document.dispatchEvent(new Event("footerLoaded"));
