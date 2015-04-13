// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({time_window: 2419200}); // Default Time: 1 month
    chrome.storage.sync.set({is_enabled: true});
});

// show the popup when the user clicks on the page action.
chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.pageAction.show(tab.id);
});