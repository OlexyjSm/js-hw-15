export function loadFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
      <div class="footer-section">
        <div class="footer-logo">
          <img src="img/Logo.svg" alt="Logo">
          <a class="logo-text" href="#">autodrone</a>
        </div>
        <p class= "footer-text">Look up the sky and beautiful world easily.</p>
      </div>
      <div class="footer-section">
        <h3>Explore</h3>
        <a href="#">Our Services</a>
        <a href="#">Specification</a>
        <a href="#">Refund</a>
        <a href="#">Playlist</a>
      </div>
      <div class="footer-section">
        <h3>Account</h3>
        <a href="#">My Account</a>
        <a href="#">Top Benefit</a>
        <a href="#">How-to Tutorials</a>
        <a href="#">Moment</a>
      </div>
      <div class="footer-section">
        <h3>Office</h3>
        <p>+021 2208 1996</p>
        <p>SCBD, Jakarta</p>
        <p>No.2 (Autodrone)</p>
        <p>support@autodrone.id</p>
      </div>
    `;

  document.getElementById("footer").appendChild(footer);
}
