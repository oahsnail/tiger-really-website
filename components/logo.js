class Logo extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/css/components/logo.css" />
        <div class="logo-container">
            <a href=" /../index.html">
            <img src="../img/tr_transparent.png" class="logo" />
            </a>
        </div>
        `;
    }
}

customElements.define('logo-component', Logo);