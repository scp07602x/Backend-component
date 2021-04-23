Array.prototype.first = function () {
  return this[0];
}

String.prototype.strReplace = function (separatingSymbols, key, replacement) {
  return this.split(separatingSymbols).map(element => {
    if (element.indexOf(key) !== -1) {
      return replacement;
    } else {
      return element
    }
  }).join(separatingSymbols);
}