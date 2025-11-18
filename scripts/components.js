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

class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
        <div class="footer-content">
            <section class="footer-section">
                <hgroup class="logo">
                    <h2 id="footer-about">Beatriz Conradt</h2>
                    <p>Psicanalista - Psicopedagoga</p>
                    <p>CRP 20224473</p>
                </hgroup>
                <p class="footer-description">
                    Atendimento psicanalítico e psicopedagógico com
                    acolhimento, ética e sigilo profissional.
                </p>
            </section>

            <section class="footer-section">
                <h3 id="footer-attendance">Atendimento</h3>
                <ul>
                    <li>Presencial</li>
                    <li>Online (Videochamada)</li>
                    <li>Horários flexíveis</li>
                </ul>
            </section>

            <section class="footer-section">
                <h3 id="footer-contact">Contato</h3>
                <ul>
                    <li>E-mail: biasamuel12@gmail.com</li>
                    <li>WhatsApp: (48) 99911-4020</li>
                    <li>Crianças, adolescentes e adultos</li>
                </ul>
            </section>

            <section class="footer-section">
                <h3 id="footer-areas">Áreas de Atuação</h3>
                <ul>
                    <li>Psicanálise Clínica</li>
                    <li>Psicopedagogia</li>
                    <li>Orientação de Pais</li>
                    <li>Dificuldades de Aprendizagem</li>
                </ul>
            </section>
        </div>

        <div class="footer-bottom">
            <p>
                &copy; 2025 Beatriz Conradt. Todos os direitos reservados.
            </p>
            <p class="footer-disclaimer">
                O atendimento psicanalítico respeita o código de ética
                profissional, garantindo sigilo absoluto.
            </p>
        </div>
    </footer>`;
  }
}

customElements.define('index-header', IndexHeader);
customElements.define('pages-header', PagesHeader);
customElements.define('default-footer', FooterComponent);
