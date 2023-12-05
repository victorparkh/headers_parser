

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'parseHeaders') {
    const h1Headings = Array.from(document.querySelectorAll('h1'))
      .map(header => header.innerText.trim())
      .filter(textContent => textContent.length > 0);

    const h2Headings = Array.from(document.querySelectorAll('h2'))
      .map(header => header.innerText.trim())
      .filter(textContent => textContent.length > 0);

    const h3Headings = Array.from(document.querySelectorAll('h3'))
      .map(header => header.innerText.trim())
      .filter(textContent => textContent.length > 0);

    // Send a command to background.js to update shared data
    chrome.runtime.sendMessage({
      action: 'updateHeadersData',
      headersData: {
        h1Headings: h1Headings,
        h2Headings: h2Headings,
        h3Headings: h3Headings
      }
    });
  }
});
