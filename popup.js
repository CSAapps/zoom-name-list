// Inject the payload.js script into the current active tab
chrome.tabs.executeScript({
        file: 'content.js'
    },
    function() {
        // chrome.runtime.lastError;  
    });

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function(data, sender, callback) {
    var key = data.date;
    var updates = {};
    updates['counts/' + key] = data.names.length;
    updates['names/' + key] = data.names;
    // updates['titles/' + key] = data.title;

    db.update(updates, (error) => {
        if (error)
            callback({ state: 0, msg: JSON.stringify(error) });
        else
            callback({ state: 1, msg: "Saved" });
    });
    return true;
});