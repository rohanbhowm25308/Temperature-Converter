const t = temp,
  from = document.getElementById("from"),
  to = document.getElementById("to"),
  r = result,
  h = history;
let hist = [];
function c(v, f, tt) {
  if (f === tt) return v;
  if (f === "Celsius" && tt === "Fahrenheit") return (v * 9) / 5 + 32;
  if (f === "Fahrenheit" && tt === "Celsius") return ((v - 32) * 5) / 9;
  if (f === "Celsius" && tt === "Kelvin") return v + 273.15;
  if (f === "Kelvin" && tt === "Celsius") return v - 273.15;
  if (f === "Fahrenheit" && tt === "Kelvin") return ((v - 32) * 5) / 9 + 273.15;
  if (f === "Kelvin" && tt === "Fahrenheit") return ((v - 273.15) * 9) / 5 + 32;
}
function draw() {
  h.innerHTML = "";
  hist.forEach((x) => {
    let li = document.createElement("li");
    li.textContent = x;
    h.appendChild(li);
  });
}
convert.onclick = () => {
  let v = parseFloat(t.value);
  if (isNaN(v)) {
    r.textContent = "Enter a valid number";
    return;
  }
  let o = c(v, from.value, to.value).toFixed(2);
  r.textContent = `${v} ${from.value} = ${o} ${to.value}`;
  hist.unshift(r.textContent);
  hist = hist.slice(0, 5);
  draw();
};
swap.onclick = () => {
  [from.value, to.value] = [to.value, from.value];
};
clear.onclick = () => {
  t.value = "";
  r.textContent = "Result will appear here";
  hist = [];
  draw();
};
t.addEventListener("keydown", (e) => {
  if (e.key === "Enter") convert.click();
});
