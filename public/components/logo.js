class Logo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/public/css/components/logo.css" />
        <div class="logo-container">
            <a href=" /public/index.html">
            <img src="/public/img/tr_transparent.png" class="logo" />
            </a>
        </div>
        `;
    }
}

customElements.define('logo-component', Logo);