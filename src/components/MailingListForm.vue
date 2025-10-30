<template>
    <div style="width: 30vw; min-width: 280px; margin: 0 auto; color: white;">
        <div id="mc_embed_shell">
            <div id="mc_embed_signup">
                <form
                    action="https://tigerreally.us18.list-manage.com/subscribe/post?u=e28375888c2b5393a83132dfe&amp;id=81b82d38c8&amp;f_id=0097aae6f0"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                    target="_blank" @submit.prevent="handleSubmit">
                    <div id="mc_embed_signup_scroll">
                        <small>Hear rumors and learn secrets</small>
                        <div class="mailing-list-row">
                            <div class="mc-field-group">
                                <label for="mce-EMAIL"><span class="asterisk"></span></label>
                                <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" v-model="email"
                                    required placeholder="Email Address">
                            </div>
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button"
                                value="Subscribe">
                        </div>
                        <div v-if="errorMessage" class="response" id="mce-error-response" style="color: red;">{{
                            errorMessage }}</div>
                        <div v-if="successMessage" class="response" id="mce-success-response" style="color: green;">{{
                            successMessage }}</div>
                        <div aria-hidden="true" style="position: absolute; left: -5000px;">
                            <input type="text" name="b_e28375888c2b5393a83132dfe_81b82d38c8" tabindex="-1" value="">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import './mailing-list-form.css';
export default {
    name: 'MailingListForm',
    data() {
        return {
            email: '',
            errorMessage: '',
            successMessage: ''
        }
    },
    mounted() {
        // Inject Mailchimp CSS into <head>
        const mailchimpCssId = 'mailchimp-embed-css';
        if (!document.getElementById(mailchimpCssId)) {
            const link = document.createElement('link');
            link.id = mailchimpCssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '//cdn-images.mailchimp.com/embedcode/classic-061523.css';
            document.head.appendChild(link);
        }
    },
    methods: {
        // Comprehensive HTML sanitization function to prevent XSS
        sanitizeHtml(str) {
            if (typeof str !== 'string') return '';
            return str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
                .replace(/\//g, '&#x2F;');
        },
        // URL sanitization function to prevent javascript: and data: URLs
        sanitizeUrl(url) {
            if (typeof url !== 'string') return '';
            const trimmedUrl = url.trim().toLowerCase();
            if (trimmedUrl.startsWith('javascript:') || trimmedUrl.startsWith('data:') || trimmedUrl.startsWith('vbscript:')) {
                return '#';
            }
            return url;
        },
        validateEmail(email) {
            // Simple email regex
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },
        handleSubmit() {
            this.errorMessage = '';
            this.successMessage = '';
            const sanitizedEmail = this.sanitizeHtml(this.email);
            if (!this.validateEmail(sanitizedEmail)) {
                this.errorMessage = 'Please enter a valid email address.';
                return;
            }
            // Submit the form to Mailchimp
            const form = document.getElementById('mc-embedded-subscribe-form');
            if (form) {
                form.submit();
                this.successMessage = 'Submitting...';
            }
        }
    }
}
</script>
