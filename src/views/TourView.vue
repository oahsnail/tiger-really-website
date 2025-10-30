<template>
    <div id="bit-widget-container"></div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';

export default {
    name: 'TourView',
    setup() {
        const scriptUrl = 'https://widgetv3.bandsintown.com/main.min.js';
        let widgetAnchor = null;

        const createWidgetAnchor = () => {
            const container = document.getElementById('bit-widget-container');
            if (container) {
                container.innerHTML = '';
                widgetAnchor = document.createElement('a');
                widgetAnchor.className = 'bit-widget-initializer';
                widgetAnchor.setAttribute('data-artist-name', 'id_15515073');
                widgetAnchor.setAttribute('data-events-to-display', '');
                widgetAnchor.setAttribute('data-background-color', 'rgba(255,163,48,0)');
                widgetAnchor.setAttribute('data-separator-color', '#DDDDDD');
                widgetAnchor.setAttribute('data-text-color', '#ffffff');
                widgetAnchor.setAttribute('data-font', 'Helvetica');
                widgetAnchor.setAttribute('data-auto-style', 'true');
                widgetAnchor.setAttribute('data-button-label-capitalization', 'capitalize');
                widgetAnchor.setAttribute('data-header-capitalization', 'uppercase');
                widgetAnchor.setAttribute('data-location-capitalization', 'capitalize');
                widgetAnchor.setAttribute('data-venue-capitalization', 'capitalize');
                widgetAnchor.setAttribute('data-display-local-dates', 'true');
                widgetAnchor.setAttribute('data-local-dates-position', 'tab');
                widgetAnchor.setAttribute('data-display-past-dates', 'true');
                widgetAnchor.setAttribute('data-display-details', 'false');
                widgetAnchor.setAttribute('data-display-lineup', 'false');
                widgetAnchor.setAttribute('data-display-start-time', 'false');
                widgetAnchor.setAttribute('data-social-share-icon', 'true');
                widgetAnchor.setAttribute('data-display-limit', 'all');
                widgetAnchor.setAttribute('data-date-format', 'MMM. D, YYYY');
                widgetAnchor.setAttribute('data-date-orientation', 'horizontal');
                widgetAnchor.setAttribute('data-date-border-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-date-border-width', '1px');
                widgetAnchor.setAttribute('data-date-capitalization', 'capitalize');
                widgetAnchor.setAttribute('data-date-border-radius', '10px');
                widgetAnchor.setAttribute('data-event-ticket-cta-size', 'medium');
                widgetAnchor.setAttribute('data-event-custom-ticket-text', '');
                widgetAnchor.setAttribute('data-event-ticket-text', 'TICKETS');
                widgetAnchor.setAttribute('data-event-ticket-icon', 'false');
                widgetAnchor.setAttribute('data-event-ticket-cta-text-color', '#FFFFFF');
                widgetAnchor.setAttribute('data-event-ticket-cta-bg-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-event-ticket-cta-border-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-event-ticket-cta-border-width', '0px');
                widgetAnchor.setAttribute('data-event-ticket-cta-border-radius', '4px');
                widgetAnchor.setAttribute('data-sold-out-button-text-color', '#FFFFFF');
                widgetAnchor.setAttribute('data-sold-out-button-background-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-sold-out-button-border-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-sold-out-button-clickable', 'true');
                widgetAnchor.setAttribute('data-event-rsvp-position', 'left');
                widgetAnchor.setAttribute('data-event-rsvp-cta-size', 'medium');
                widgetAnchor.setAttribute('data-event-rsvp-only-show-icon', 'false');
                widgetAnchor.setAttribute('data-event-rsvp-text', 'REMIND ME');
                widgetAnchor.setAttribute('data-event-rsvp-icon', 'false');
                widgetAnchor.setAttribute('data-event-rsvp-cta-text-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-event-rsvp-cta-bg-color', '#FFFFFF');
                widgetAnchor.setAttribute('data-event-rsvp-cta-border-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-event-rsvp-cta-border-width', '1px');
                widgetAnchor.setAttribute('data-event-rsvp-cta-border-radius', '4px');
                widgetAnchor.setAttribute('data-follow-section-position', 'top');
                widgetAnchor.setAttribute('data-follow-section-alignment', 'center');
                widgetAnchor.setAttribute('data-follow-section-header-text', 'Get updates on new shows, new music, and more.');
                widgetAnchor.setAttribute('data-follow-section-cta-size', 'medium');
                widgetAnchor.setAttribute('data-follow-section-cta-text', 'FOLLOW');
                widgetAnchor.setAttribute('data-follow-section-cta-icon', 'true');
                widgetAnchor.setAttribute('data-follow-section-cta-text-color', '#FFFFFF');
                widgetAnchor.setAttribute('data-follow-section-cta-bg-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-follow-section-cta-border-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-follow-section-cta-border-width', '0px');
                widgetAnchor.setAttribute('data-follow-section-cta-border-radius', '4px');
                widgetAnchor.setAttribute('data-play-my-city-position', 'bottom');
                widgetAnchor.setAttribute('data-play-my-city-alignment', 'Center');
                widgetAnchor.setAttribute('data-play-my-city-header-text', 'Don’t see a show near you?');
                widgetAnchor.setAttribute('data-play-my-city-cta-size', 'medium');
                widgetAnchor.setAttribute('data-play-my-city-cta-text', 'REQUEST A SHOW');
                widgetAnchor.setAttribute('data-play-my-city-cta-icon', 'true');
                widgetAnchor.setAttribute('data-play-my-city-cta-text-color', '#FFFFFF');
                widgetAnchor.setAttribute('data-play-my-city-cta-bg-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-play-my-city-cta-border-color', '#4A4A4A');
                widgetAnchor.setAttribute('data-play-my-city-cta-border-width', '0px');
                widgetAnchor.setAttribute('data-play-my-city-cta-border-radius', '4px');
                widgetAnchor.setAttribute('data-optin-font', '');
                widgetAnchor.setAttribute('data-optin-text-color', '');
                widgetAnchor.setAttribute('data-optin-bg-color', '');
                widgetAnchor.setAttribute('data-optin-cta-text-color', '');
                widgetAnchor.setAttribute('data-optin-cta-bg-color', '');
                widgetAnchor.setAttribute('data-optin-cta-border-width', '');
                widgetAnchor.setAttribute('data-optin-cta-border-radius', '');
                widgetAnchor.setAttribute('data-optin-cta-border-color', '');
                widgetAnchor.setAttribute('data-language', 'en');
                widgetAnchor.setAttribute('data-layout-breakpoint', '900');
                widgetAnchor.setAttribute('data-app-id', '');
                widgetAnchor.setAttribute('data-affil-code', '');
                widgetAnchor.setAttribute('data-bit-logo-position', 'bottomRight');
                widgetAnchor.setAttribute('data-bit-logo-color', '#424242');
                container.appendChild(widgetAnchor);
            }
        };

        const initWidget = () => {
            if (window.Bandsintown && window.Bandsintown.Widget) {
                window.Bandsintown.Widget.init();
            } else if (window.Bandsintown) {
                window.Bandsintown.init && window.Bandsintown.init();
            }
        };


        onMounted(() => {
            createWidgetAnchor();
            // Remove any existing Bandsintown script
            const oldScript = document.querySelector(`script[src="${scriptUrl}"]`);
            if (oldScript) {
                oldScript.remove();
            }
            // Add a fresh script tag
            const script = document.createElement('script');
            script.setAttribute('src', scriptUrl);
            script.setAttribute('charset', 'utf-8');
            script.async = true;
            script.onload = initWidget;
            document.body.appendChild(script);
        });

        onBeforeUnmount(() => {
            const container = document.getElementById('bit-widget-container');
            if (container) {
                container.innerHTML = '';
            }
        });
    }
}
</script>
