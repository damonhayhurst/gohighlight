chrome.runtime.onMessage.addListener(function(msg) {
    console.log("Connected ..");
    var div = document.createElement('div');
    var iFrame  = document.createElement("iframe");
    div.setAttribute('style', `position: fixed !important;
        z-index: 2147483647 !important;
        display: block !important;
        width: 100% !important;
        height: 100% !important;
        top: 10px !important;
        right: 10px !important;
        max-height: 215px !important;
        max-width: 368px !important;`);
    iFrame.setAttribute('style', `border: none !important;
        position: relative !important;
        top: 0px !important;
        right: 0px !important;
        bottom: 0px !important;
        left: 0px !important;
        height: 100% !important;
        width: 100% !important;
        visibility: visible !important;
        display: block !important;`)
    iFrame.src  = chrome.extension.getURL("dialog/dialog.html");
    div.append(iFrame)
    document.body.append(div)
});

chrome.runtime.onMessage.addListener(function(msg) {
    if (msg.capture) {
        assignMouseUp()
    }
})


function getSelectionText(e) {
    var text = window.getSelection().toString()
    chrome.runtime.sendMessage({from:"content", text:text})
}

function assignMouseUp() {
    window.onmouseup = getSelectionText
    if (!window.all) window.captureEvents(Event.MOUSEUP);
}
