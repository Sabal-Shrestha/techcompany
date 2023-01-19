class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="container">
        <div class="row g-4 g-md-5">
          <div class="col-12 col-md-6 col-lg-4">
            <h2>Tech Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              reiciendis!
            </p>
            <div class="socials">
              <a href="/"><i class="fab fa-facebook-f"></i></a>
              <a href="/"><i class="fab fa-facebook-f"></i></a>
              <a href="/"><i class="fab fa-facebook-f"></i></a>
              <a href="/"><i class="fab fa-facebook-f"></i></a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h3>Our Service</h3>
            <ul>
              <li><a href="/">Development</a></li>
              <li><a href="/">Development</a></li>
              <li><a href="/">Development</a></li>
              <li><a href="/">Development</a></li>
              <li><a href="/">Development</a></li>
              <li><a href="/">Development</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-2">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">FAQs</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="/"><i class="fab fa-facebook-f"></i>Phone</a>
              </li>
              <li>
                <a href="/"><i class="fab fa-facebook-f"></i>Phone</a>
              </li>
              <li>
                <a href="/"><i class="fab fa-facebook-f"></i>Phone</a>
              </li>
              <li>
                <a href="/"><i class="fab fa-facebook-f"></i>Phone</a>
              </li>
              <li>
                <a href="/"><i class="fab fa-facebook-f"></i>Phone</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div class="container pt-3">
        <p class="text-center">
          Copyright @2022 TechCompany. Designed By Sabal Shrestha (Temporary
          Self Promotion)
        </p>
      </div>
    </footer>
      `;
  }
}
customElements.define("my-footer", MyFooter);
