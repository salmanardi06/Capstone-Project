class FooterNavbar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
   
      this.render();
    }
   
    render() {
      this .shadowRoot.innerHTML = `
      <style>
        footer {
            background-color: #241111;
            color: white;
            text-align: center;
            padding: 3px 20px;
        }
      </style>
      <footer>
        <p>&copy; 2024 JelajahiJawa.id. All Rights Reserved.</p>
      </footer>
      `;
    }
}
   
customElements.define('footer-eksplorasi', FooterNavbar);