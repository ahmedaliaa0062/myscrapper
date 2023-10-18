chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'START_SCRAPING') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                files: ['content.js']
            });
        });
        return true; // Indicates the response is asynchronous.
    }
});
