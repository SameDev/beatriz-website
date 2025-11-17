class IndexHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header class="site-header" role="banner">
        <hgroup class="logo">
          <h1>Beatriz Conradt</h1>
          <p>Psicanalista - Psicopedagoga</p>
        </hgroup>
        <nav role="navigation" aria-label="Menu principal">
          <ul>
            <li>
              <a href="./" aria-current="page">Início</a>
            </li>
            <li>
              <a href="./pages/sobre.html">Quem sou eu</a>
            </li>
            <li>
              <a href="./pages/trabalhos.html">Trabalhos</a>
            </li>
            <li>
              <a href="./pages/contato.html">Contato</a>
            </li>
            <li>
              <a href="./pages/atendimento-online.html">Atendimento Online</a>
            </li>
          </ul>
        </nav>
      </header>`;
  }
}

class PagesHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <header class="site-header" role="banner">
        <hgroup class="logo">
          <h1>Beatriz Conradt</h1>
          <p>Psicanalista - Psicopedagoga</p>
        </hgroup>
        <nav role="navigation" aria-label="Menu principal">
          <ul>
            <li>
              <a href="../" aria-current="page">Início</a>
            </li>
            <li>
              <a href="./sobre.html">Quem sou eu</a>
            </li>
            <li>
              <a href="./trabalhos.html">Trabalhos</a>
            </li>
            <li>
            <a href="./contato.html">Contato</a>
            </li>
            <li>
              <a href="./atendimento-online.html">Atendimento Online</a>
            </li>
          </ul>
        </nav>
      </header>`;
  }
}

customElements.define('index-header', IndexHeader);
customElements.define('pages-header', PagesHeader);
