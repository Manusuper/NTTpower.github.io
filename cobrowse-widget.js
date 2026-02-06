let genesysWebchat = (function() {
    function createCobrowseConfig(){

        return {
            // Web chat application URL. Use the correct top-level domain for your Genesys Cloud region, i.e. apps.mypurecloud.ie, apps.mypurecloud.jp, apps.mypurecloud.co.uk.
            "webchatAppUrl": "https://apps.mypurecloud.de/webchat",

            // Web chat service URL
            "webchatServiceUrl": "https://realtime.mypurecloud.de:443",

            // Numeric organization ID
            "orgId": 1540,

            // OrgGuid. Needed for co-browse with voice.
            "orgGuid": "e9047a7d-efc1-49c2-bca2-3520c93e1179",

            // Organization name
            "orgName": "NTT Belgium",

            // Log level
            "logLevel": "DEBUG",

            // Locale code
            "locale": "en",

            // CSS class applied to the security key window, but not its contents
            "cssClass": "webchat-frame",

            // Custom style applied to the security key window, but not its contents
            "css": {
                "width": "480px",
                "height": "282px",
                "border": "none",
            },

            // Optional CSS for styling security key form
            "contentCssUrl": "http://example.com/style.css",

            // Element id where the security key form will appear.
            "containerEl": "cobrowse-security-form",

            // Set to true to display security key form. Do not include for co-browse with web chat or for PureConnect co-browse with voice.
            "promptForSecurityKey": true
        };
    }
    return {
        startCobrowse: function() {
            let config = createCobrowseConfig();

            // Can also use callback
            ININ.cobrowse.create(config)
                .then(function(result) {
                    // Handle success
                })
                .catch(function(err) {
                    // Handle failure
                });

                // This page will be shared using the `DEBUG` logLevel even if the original
                // co-browse session was started using a different log level
                window.PURECLOUD_COBROWSE_CONFIG = {
                    logLevel: 'DEBUG'
                };
        }
    }
})();
