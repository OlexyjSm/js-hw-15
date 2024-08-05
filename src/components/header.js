export function loadHeader() {
  const header = document.getElementById("header");

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<img src="img/Logo.svg" alt="Logo">`;

  const nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML = `
      <a href="#">HOME</a>
      <a href="#">GALLERY</a>
      <a href="#">PRODUCTS</a>
      <a href="#">REVIEW</a>
      <a href="#">SUPPORT</a>
      <a href="#"><img src="img/search.svg" alt="Search"></a>
    `;

  header.appendChild(logo);
  header.appendChild(nav);
}
