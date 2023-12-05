
// let headersData = {
//     h1Headings: [],
//     h2Headings: [],
//     h3Headings: []
//   };
  
//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'getHeadersData') {
//       sendResponse(headersData);
//     }
//   });
  
  
//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'updateHeadersData') {
//       headersData = request.headersData;
//     }
//   });

// background.js

let extensionData = {
    h1Headings: [],
    h2Headings: [],
    h3Headings: []
  };
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'parseHeaders') {
      // Send a command to content.js to parse headers
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'parseHeaders' });
      });
    } else if (request.action === 'updateHeadersData') {
      // Update shared data based on headers received from content.js
      extensionData.h1Headings = request.headersData.h1Headings;
      extensionData.h2Headings = request.headersData.h2Headings;
      extensionData.h3Headings = request.headersData.h3Headings;
  
      // Send a command to popup.js to display headings
      chrome.runtime.sendMessage({
        action: 'displayHeadings',
        h1Headings: extensionData.h1Headings,
        h2Headings: extensionData.h2Headings,
        h3Headings: extensionData.h3Headings
      });
    }
  });
  
  