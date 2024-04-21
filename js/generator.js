function replaceInputs() {
  let body = document.body; 
  if (!body) return;

  let textNodes = getTextNodes(body);
  
  textNodes.forEach(function(node) {  
    let matches = node.nodeValue.match(/%(\w+)\.(\w+)%/);
    if (matches) {
      let type = matches[1];
      let attributeName = matches[2];
      let element = null;

      if (type === "input") {
        element = document.createElement('input');
        element.setAttribute('type', 'text');
        element.setAttribute('class', 'form-control');
      }

      if (type === "textarea") {
        element = document.createElement('textarea');
        element.setAttribute('class', 'form-control');
      }

      if (element) {
        element.setAttribute('id', attributeName);
        node.parentNode.replaceChild(element, node);
      }
    }
  });
}

function getTextNodes(element) {
  let textNodes = [];
  let walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  while(walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  return textNodes;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceMarkers(templateString, data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let regex = new RegExp('%(?:input|textarea)\\.' + escapeRegExp(key) + '%', 'g');
      templateString = templateString.replace(regex, data[key]);
    }
  }
  return templateString;
}

function processData() {
  let data = {};
  let inputs = document.querySelectorAll('input[type="text"], textarea');
  inputs.forEach(function(input) {
    data[input.id] = input.value;
  });
  let templateString = window.templateString;
  let templateNameString = window.templateNameString;
  let resultString = replaceMarkers(templateString, data);
  let resultNameString = replaceMarkers(templateNameString, data)
  document.getElementById('result-name').value = resultNameString;
  document.getElementById('result').value = resultString;
  navigator.clipboard.writeText(resultString).then(function() {
    console.log('[COPY]: SUCCESS');
  }, function(err) {
    console.error('[COPY]: ERROR. ', err);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  replaceInputs();
});