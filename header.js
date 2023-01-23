class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="sticky-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="/">TechCompany</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <a class="nav-link" href="index.html">Home</a>
              <a class="nav-link" href="about-us.html">About Us</a>
              <a class="nav-link" href="services.html">Services</a>
              <a class="nav-link" href="blogs.html">Blogs</a>
              <a class="nav-link" href="#">Contact</a>
            </div>
          </div>
          <button class="btn-all d-none d-lg-block">Get A Quote</button>
          <div class="form-switch">
            <input
              class="form-check-input dark-mode-toggle"
              type="checkbox"
              role="switch"
              id="dark-mode-toggle"
              checked
            />
          </div>
        </nav>
      </div>
    </header>
    `;
  }
}
customElements.define("my-header", MyHeader);
