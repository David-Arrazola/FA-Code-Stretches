const bunnyNames = [`Hubert`, `Tommy`, `Bianca`, `Ace`, `Veronica`, `Presto`];

function isTheBest(array) {
  return array.map(isBestHelper);
}

function isBestHelper(currName) {
  console.log(currName + ` is the best!`);
  return currName + ` is the best!`;
}

isTheBest(bunnyNames);
