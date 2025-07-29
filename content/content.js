const font = "DP Sans Mono,cursive";
const body = document.getElementsByTagName("body").item(0);
const paras = document.getElementsByTagName("p");

// Get state
chrome.storage.sync.get("fontWont_toggleOn", (val) => {

    // Make sure state exists
    if (val === undefined || val === null) {
        chrome.storage.sync.set({fontWont_toggleOn: true});
    }

    // Act on the state
    if (val.fontWont_toggleOn) {
        body.style.fontFamily = font;
        for (let i = 0; i < paras.length; i++) {
            paras.item(i).style.fontFamily = font;
        }
    }
    
});
