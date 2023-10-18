let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
let extractedData = [];
headings.forEach((heading) => {
    extractedData.push(heading.textContent);
});
chrome.runtime.sendMessage({data: extractedData});
