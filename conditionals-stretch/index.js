const ans = `412`;

let userNum = prompt(`Pick a number between 1-1000`);

if (isNaN(userNum) === false) {
  if (userNum < 1 || userNum > 1000) {
    alert(`Number out of bounds. Pick again`);
  } else {
    if (userNum === ans) {
      alert(`Thats it! Good stuff, chief!`);
    } else if (userNum < ans) {
      alert(`Too small. Try again.`);
    } else {
      alert(`Too large. Try again.`);
    }
  }
}
