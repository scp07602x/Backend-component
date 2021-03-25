Array.prototype.first = function () {
  return this[0];
}

String.prototype.strReplace = function (symbol, keyWord, replaceStr) {
  return this.split(symbol).map(element => {
    if (element.indexOf(keyWord) !== -1) {
      return replaceStr;
    } else {
      return element
    }
  }).join(symbol);
}