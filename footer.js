class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="container">
        <div class="row g-4 g-md-5">
          <div class="col-12 col-md-6 col-lg-4">
            <h3>Etonel</h3>
            <p>
            We are here to provide you with everlasting digital experiences.
            </p>
            <div class="socials">
            <p>Follow Us on:</p>
              <a href="https://www.facebook.com/profile.php?id=100090161113381" target="_blank"><i class="fab fa-facebook-f"></i></a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h3>Our Service</h3>
            <ul>
            <li><a href="./hardware-consultation-solution.html">Hardware Consultation and Solution</a></li>
            <li><a href="./networking-security-surveillance-solution.html">Networking and Security Surveillance Solution</a></li>
            <li><a href="./website-design.html">Website Design</a></li>
            <li><a href="./logo-graphics-design.html">Logo Design and Graphics Design</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-2">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="./">Home</a></li>
              <li><a href="./about-us.html">About Us</a></li>
              <li><a href="./services.html">Services</a></li>
              <li><a href="./pricing.html">Pricing</a></li>
              <li><a href="./blogs/index.html">Blogs</a></li>
              <li><a href="./contact-us.html">Contact Us</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="tel:9822938045"><i class="fa-solid fa-phone"></i>9822938045</a>
              </li>
              <li>
                <a href="https://goo.gl/maps/kBCqeNANVbs2h7Vr5" rel="noopener" target="_blank"><i class="fas fa-map-marker-alt"></i>Kathmandu</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="container pt-3">
        <p class="text-center">
          Copyright @2022 Etonel.
        </p>
      </div>
    </footer>
      `;
  }
}
customElements.define("my-footer", MyFooter);
