const app = document.getElementById("app");

/**
 * Carrega uma página específica no website, através de um request HTTP.
 * @param {string} page - O nome da página.
 */
async function loadPage(page) {
  try {
    const response = await fetch(`./pages/${page}.html`);
    const html = await response.text();
    app.innerHTML = html;

    if (page === "home" && typeof initSlider === "function") {
      setTimeout(initSlider, 0);
    }
  } catch (error) {
    app.innerHTML = "<h2>Erro ao carregar página.</h2>";
  }
}

function router() {
  const page = window.location.hash.replace("#", "") || "home"; // extrai a página atual da URL através do #
  loadPage(page);
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
