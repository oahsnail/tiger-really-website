class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/css/components/navbar.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div id="topnav" class="navbar">
            <a href="/index.html">About</a>
            <a href="/pages/music.html">Music</a>
            <a href="/pages/tour.html">Tour</a>
            <a href="/pages/press.html">Press Kit</a>
            <a href="/pages/contact.html">Contact</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i id="navIcon" class="fa fa-bars"></i>
            </a>
        </div>
        `;
    }
}
function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
customElements.define('navbar-component', Navbar);