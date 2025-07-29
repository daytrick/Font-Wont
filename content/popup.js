const toggle = document.getElementById("toggle");
const debug = document.getElementById("debug");

/**
 * Make sure the on/off state is stored, and reflected by the toggle.
 */
function load() {
    // Chrome storage docs: https://developer.chrome.com/docs/extensions/reference/api/storage
    chrome.storage.sync.get("fontWont_toggleOn", (val) => {
        // Make sure state exists
        if (val.fontWont_toggleOn === undefined || val.fontWont_toggleOn === null) {
            chrome.storage.sync.set({fontWont_toggleOn: true});
        }

        // Reflect on/off state in toggle's state
        chrome.storage.sync.get("fontWont_toggleOn", (newVal) => {
            toggle.checked = newVal.fontWont_toggleOn;
        });
    });
}
window.onload = load;

/**
 * Update the on/off state.
 */
function toggleHandler() {
    if (toggle.checked) {
        chrome.storage.sync.set({fontWont_toggleOn: true});
    }
    else {
        chrome.storage.sync.set({fontWont_toggleOn: false});
    }
}
toggle.onclick = toggleHandler;