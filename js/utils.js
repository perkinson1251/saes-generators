export const getTextNodes = (element) => {
  let textNodes = [];
  let walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  return textNodes;
};

export const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export function copyResults(id) {
  const copy = document.getElementById(id).value;
  navigator.clipboard.writeText(copy).then(
    function () {
      console.log("[COPY]: SUCCESS");
    },
    function (err) {
      console.error("[COPY]: ERROR. ", err);
    }
  );
}

export function formatDate(dateString) {
  let dateParts = dateString.split("-");
  if (dateParts.length === 3) {
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // DD/MM/YYYY
  }
  return dateString;
}
