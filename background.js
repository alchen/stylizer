chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading') {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var re = new RegExp(key);

            if (re.exec(tab.url)) {
                chrome.tabs.insertCSS(
                    tabId, {
                        code: localStorage[key]
                    }
                );
            }
        }
    }
});