function initializeInputs() {
  let body = document.body; 
  if (!body) return;

  let textNodes = getTextNodes(body);

  let mainRegex = /%(\w+)\.(\w+)/;
  
  textNodes.forEach(function(node) {  
    let matches = node.nodeValue.match(mainRegex);
    if (matches) {
      let type = matches[1];
      let attributeName = matches[2];
      
      let element = null;

      if (type === "input") {
        element = document.createElement('input');
        element.setAttribute('type', 'text');
        element.setAttribute('class', 'form-control w-100');

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

function initializeOptions() {
  let body = document.body;
  if (!body) return;

  let textNodes = getTextNodes(body);

  let regex = /%option\.(\w+)\(([^)]+)\)%/;

  textNodes.forEach(function(node) {
    let matches = node.nodeValue.match(regex);
    if (matches) {
      let container = document.createElement('div');
      let id = matches[1];
      let options = matches[2].split(';').map(option => option.trim().replace(/"/g, ''));

      let select = document.createElement('select');
      select.setAttribute('id', id);
      select.setAttribute('class', 'form-select')
      options.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.text = option;
        optionElement.value = option;
        select.add(optionElement);
      });

      container.appendChild(select);
      node.parentNode.replaceChild(container, node);
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

function replaceInputTextAreas(templateString, data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let regex = new RegExp('%(?:input|textarea)\\.' + escapeRegExp(key) + '%', 'g');
      // let regex = new RegExp('%(option)\\.' + escapeRegExp(key) + '\\(([^)]+)\\)%', 'g');
      templateString = templateString.replace(regex, data[key]);
    }
  }
  return templateString;
}

function replaceOptions(templateString, data) {
  console.log(templateString);
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      // let regex = new RegExp('%(?:input|textarea)\\.' + escapeRegExp(key) + '%', 'g');
      let regex = new RegExp('%(option)\\.' + escapeRegExp(key) + '\\(([^)]+)\\)%', 'g');
      templateString = templateString.replace(regex, data[key]);
    }
  }
  return templateString;
}

function processData() {
  let data = {};
  let resultString;
  let resultNameString;
  let inputs = document.querySelectorAll('input[type="text"], textarea, select');
  inputs.forEach(function(input) {
    data[input.id] = input.value;
  });
  console.log(data);
  let templateString = window.templateString;
  let templateNameString = window.templateNameString;
  resultString = replaceInputTextAreas(templateString, data);
  resultString = replaceOptions(resultString, data);
  resultNameString = replaceInputTextAreas(templateNameString, data);
  resultNameString = replaceOptions(resultNameString, data);
  document.getElementById('result-name').value = resultNameString;
  document.getElementById('result').value = resultString;
}

function copyResults(id) {
  const copy = document.getElementById(id).value;
  navigator.clipboard.writeText(copy).then(function() {
    console.log('[COPY]: SUCCESS');
  }, function(err) {
    console.error('[COPY]: ERROR. ', err);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  initializeInputs();
  initializeOptions();
});