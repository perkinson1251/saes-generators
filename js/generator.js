import { escapeRegExp, formatDate, getTextNodes } from "./utils.js";

const CHECKED_CHECKBOX = "[check][/check]";
const UNCHECKED_CHECKBOX = "[uncheck][/uncheck]";

const MAIN_REGEX = /%(\w+)\.(\w+)/;
const OPTIONS_REGEX = /%option\.(\w+)\(([^)]+)\)%/;
const CHECKBOX_REGEX = /%checkbox\.([a-zA-Z0-9-]+)%/;
const DATE_REGEX = /%date\.([a-zA-Z0-9-]+)%/;

function initializeInputs() {
  let body = document.body;
  if (!body) return;

  let textNodes = getTextNodes(body);

  textNodes.forEach(function (node) {
    let matches = node.nodeValue.match(MAIN_REGEX);
    if (matches) {
      let type = matches[1];
      let attributeName = matches[2];

      let element = null;

      if (type === "input") {
        element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("class", "form-control w-100");
      }

      if (type === "textarea") {
        element = document.createElement("textarea");
        element.setAttribute("class", "form-control");
      }

      if (element) {
        element.setAttribute("id", attributeName);
        node.parentNode.replaceChild(element, node);
      }
    }
  });
}

function initializeOptions() {
  let body = document.body;
  if (!body) return;

  let textNodes = getTextNodes(body);

  textNodes.forEach(function (node) {
    let matches = node.nodeValue.match(OPTIONS_REGEX);
    if (matches) {
      let container = document.createElement("div");
      let id = matches[1];
      let options = matches[2].split(";").map((option) => option.trim().replace(/"/g, ""));

      let select = document.createElement("select");
      select.setAttribute("id", id);
      select.setAttribute("class", "form-select");
      options.forEach((option) => {
        let optionElement = document.createElement("option");
        optionElement.text = option;
        optionElement.value = option;
        select.add(optionElement);
      });

      container.appendChild(select);
      node.parentNode.replaceChild(container, node);
    }
  });
}

function initializeCheckboxes() {
  let body = document.body;
  if (!body) return;

  let textNodes = getTextNodes(body);

  let cbRegex = textNodes.forEach(function (node) {
    let matches = node.nodeValue.match(CHECKBOX_REGEX);
    if (matches) {
      let id = matches[1];

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", id);
      checkbox.setAttribute("class", "form-check-input");

      let label = document.createElement("label");
      label.setAttribute("for", id);
      label.className = "form-check-label";
      label.textContent = node.nodeValue.replace(cbRegex, "").trim();

      let container = document.createElement("div");
      container.setAttribute("class", "form-check");
      container.appendChild(checkbox);
      container.appendChild(label);

      node.parentNode.replaceChild(container, node);
    }
  });
}

function initializeDates() {
  let body = document.body;
  if (!body) return;

  let textNodes = getTextNodes(body);

  textNodes.forEach(function (node) {
    let matches = node.nodeValue.match(DATE_REGEX);
    if (matches) {
      let id = matches[1];

      let dateInput = document.createElement("input");
      dateInput.setAttribute("type", "date");
      dateInput.setAttribute("id", id);
      dateInput.setAttribute("class", "form-control w-100");

      node.parentNode.replaceChild(dateInput, node);
    }
  });
}

function replaceInputTextAreas(templateString, data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let regex = new RegExp("%(?:input|textarea)\\." + escapeRegExp(key) + "%", "g");
      templateString = templateString.replace(regex, data[key]);
    }
  }
  return templateString;
}

function replaceOptions(templateString, data) {
  console.log(templateString);
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let regex = new RegExp("%(option)\\." + escapeRegExp(key) + "\\(([^)]+)\\)%", "g");
      templateString = templateString.replace(regex, data[key]);
    }
  }
  return templateString;
}

function replaceCheckboxes(templateString, data) {
  for (let key in data) {
    if (data.hasOwnProperty(key) && (data[key] === CHECKED_CHECKBOX || data[key] === UNCHECKED_CHECKBOX)) {
      let regex = new RegExp("%checkbox\\." + escapeRegExp(key) + "%", "g");
      templateString = templateString.replace(regex, data[key]);
    }
  }
  return templateString;
}

function replaceDates(templateString, data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      let regex = new RegExp("%date\\." + escapeRegExp(key) + "%", "g");
      templateString = templateString.replace(regex, data[key]);
    }
  }
  return templateString;
}

function processData() {
  let data = {};
  let inputs = document.querySelectorAll('input[type="text"], textarea, select, input[type="checkbox"], input[type="date"]');
  inputs.forEach(function (input) {
    if (input.type === "checkbox") {
      data[input.id] = input.checked ? CHECKED_CHECKBOX : UNCHECKED_CHECKBOX;
    } else if (input.type === "date") {
      data[input.id] = formatDate(input.value);
    } else {
      data[input.id] = input.value;
    }
  });

  console.log(data);
  let templateString = window.templateString;
  let templateNameString = window.templateNameString;

  let resultString = replaceInputTextAreas(templateString, data);
  resultString = replaceOptions(resultString, data);
  resultString = replaceCheckboxes(resultString, data);
  resultString = replaceDates(resultString, data);

  let resultNameString = replaceInputTextAreas(templateNameString, data);
  resultNameString = replaceOptions(resultNameString, data);
  resultNameString = replaceCheckboxes(resultNameString, data);
  resultNameString = replaceDates(resultNameString, data);

  document.getElementById("result-name").value = resultNameString;
  document.getElementById("result").value = resultString;
}

document.addEventListener("DOMContentLoaded", function () {
  initializeInputs();
  initializeOptions();
  initializeCheckboxes();
  initializeDates();
});
