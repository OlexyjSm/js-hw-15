import "./assets/scss/main.scss";
import { loadHeader } from "./components/header";
import { loadFooter } from "./components/footer";
import "./index.scss";

// Інші імпорти та код

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});
