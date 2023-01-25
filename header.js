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
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="services.html">All Services</a></li>
                <li><a class="dropdown-item" href="hardware-consultation-solution.html">Hardware Consultation and Solution</a></li>
                <li><a class="dropdown-item" href="networking-security-surveillance-solution.html">Networking and Security Surveillance Solution</a></li>
                <li><a class="dropdown-item" href="website-design.html">Website Design</a></li>
                <li><a class="dropdown-item" href="logo-graphics-design.html">Logo Design and Graphics Design</a></li>
              </ul>
            </li>
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