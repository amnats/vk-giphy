console.log('background loaded');
let injected = false;
let hasListener = false;

function sendMessage(tabId, msg) {
    chrome.tabs.sendMessage(tabId, {message: msg}, function (response) {
        if (response != null) {
            console.log("response: " + response.message);
        }
    });
}

// var vk_rule = {
//     conditions: [
//         new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: 'www.vk.com', schemes: ['https'], queryContains: 'sel='},
//             css: [".im_editable"]
//         })
//     ],
//     actions: [ new chrome.declarativeContent.ShowPageAction() ]
// };
//
// // When the extension is installed or upgraded
// chrome.runtime.onInstalled.addListener(function() {
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//         chrome.declarativeContent.onPageChanged.addRules([vk_rule]);
//     });
// });

// Currently in private messages
function inPmListener(tabId, changeInfo, tab) {
    if(injected === true && changeInfo.url != null) {
        sendMessage(tabId, 'unload_tool');
        return;
    }

    if(changeInfo.status == 'complete' && tab.url.indexOf('sel=') !== -1) {
        sendMessage(tabId, 'in_pm');
    }
}

// Из-за этого вк работает медленней. Исправить.
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("got message from the content script: " + request.message);

        if(request.message == 'in_vk') {
            if(!chrome.tabs.onUpdated.hasListener(inPmListener)) {
                chrome.tabs.onUpdated.addListener(inPmListener);
                sendResponse({message: "Added listener to onUpdated"});
            }
        }

        if(request.message === 'tool_injected') {
            injected = true;
        }
    }
);