
// document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('parseBtn').addEventListener('click', function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, { action: 'parseHeaders' });
//     });
//   });

//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === 'displayHeadings') {
//       document.getElementById('resulth1').innerText = request.h1Headings.join(';\n ') || 'No H1 headers found on the page.';
//       document.getElementById('resulth2').innerText = request.h2Headings.join(';\n ') || 'No H2 headers found on the page.';
//       document.getElementById('resulth3').innerText = request.h3Headings.join(';\n ') || 'No H3 headers found on the page.';
//     }
//   });
// });


// popup.js

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('parseBtn').addEventListener('click', function () {
    // Send a command to background.js to initiate the process
    chrome.runtime.sendMessage({ action: 'parseHeaders' });
  });

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'displayHeadings') {
      document.getElementById('resulth1').innerText = request.h1Headings.join(';\n ') || 'No H1 headers found on the page.';
      document.getElementById('resulth2').innerText = request.h2Headings.join(';\n ') || 'No H2 headers found on the page.';
      document.getElementById('resulth3').innerText = request.h3Headings.join(';\n ') || 'No H3 headers found on the page.';
    }
  });
});

