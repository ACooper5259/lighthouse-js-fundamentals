// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

const newFlavours = iceCreamFlavours.map(function (element) {
  return element;
})
newFlavours.push("root beer")
console.log (newFlavours)
console.log (newFlavours[0])

let last = newFlavours.slice(-1);
console.log (last[0])