class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" type="text/css" href="/public/css/components/footer.css" />
        <div class="footer">
            <a target="_blank" href="https://open.spotify.com/artist/7v1sBydqFkxYzy93nQpqJx?si=vU7pBTShRuqPI-aOanTLLA"><img
                src="/public/icon/spotify_black_icon.png" class="icon" alt="spotify" /></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCErbKaOip6mnEL0tb9PxzKQ"><img
                src="/public/icon/youtube_black_icon.png" class="icon" alt="youtube" /></a>
            <a target="_blank" href="http://instagram.com/tigerreally"><img src="/public/icon/instagram_icon_black.png" class="icon"
                alt="instagram" /></a>
            <a target="_blank" href="https://www.tiktok.com/@tigerreally?"><img src="/public/icon/tiktok_black_icon.png" class="icon"
                alt="tiktok" /></a>
            <a target="_blank" href="https://soundcloud.com/tigerreally"><img src="/public/icon/soundcloud_icon.png" class="icon"
                alt="soundcloud" /></a>
            <a target="_blank" href="https://tigerreally.bandcamp.com/releases"><img src="/public/icon/bandcamp-logo-png-4.png"
                class="icon" alt="bandcamp" /></a>
            <br />
        </div>
        `;
    }
}

customElements.define('footer-component', Footer);