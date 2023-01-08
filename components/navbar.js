class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/css/navbar.css" />
        <header>
            <ul class="navbar">
                <li><a href="/../index.html">About</a></li>
                <li><a href="/pages/music.html">Music</a></li>
                <li><a href="javascript:void(0)">Tour</a></li>
                <li><a href="javascript:void(0)">Press Kit</a></li>
                <li><a href="javascript:void(0)">Contact</a></li>
            </ul>
        </header>
        `;
    }
}

customElements.define('navbar-component', Navbar);