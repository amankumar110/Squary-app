let value = prompt("What number you need the square of", "0");
console.log(value);
function square(num) {
  let ans = num * num;
  return ans;
}

console.log(square(value));
document.getElementById("output").innerHTML = square(value);
