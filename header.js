class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="./" aria-label="Logo of Etonel"
            ><img src="./img/etonel-logo-temp.webp"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item mx-auto">
                <a class="nav-link" href="./index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./about-us.html">About Us</a>
              </li>
              <li class="nav-item dropdown">
                <span
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </span>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="./services.html"
                      >All Services</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="./hardware-consultation-solution.html"
                      >Hardware Consultation and Solution</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="./networking-security-surveillance-solution.html"
                      >Networking and Security Surveillance Solution</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="./website-design.html"
                      >Website Design</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="./logo-graphics-design.html"
                      >Logo Design and Graphics Design</a
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./pricing.html">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./blogs/index.html">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact-us.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <a href="tel:9822938045" class="btn-all d-none d-lg-block"
            ><i class="fa-solid fa-phone"> </i> +9822938045</a
          >
          <div class="form-switch">
            <input
              class="form-check-input dark-mode-toggle"
              type="checkbox"
              role="switch"
              id="dark-mode-toggle"
            />
          </div>
        </div>
      </nav>
    </header>
    `;
  }
}
customElements.define("my-header", MyHeader);
