// Inject the payload.js script into the current active tab
chrome.tabs.executeScript({
        file: 'content.js'
    },
    function() {
        // chrome.runtime.lastError;  
    });

// Listen to messages from the payload.js script and write to popout.html
// chrome.runtime.onMessage.addListener(function(message) {});