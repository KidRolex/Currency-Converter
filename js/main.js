const input = document.getElementById("lbsInput");
const output = document.getElementById("output");

output.style.visibility = "hidden";

input.addEventListener("input", e => {
  let lbs = e.target.value;

  output.style.visibility = "visible";

  let dollar = document.getElementById("dollars");
  dollar.innerHTML = lbs / 360;

  let pound = document.getElementById("pounds");
  pound.innerHTML = lbs / 2.2046;

  let rand = document.getElementById("rands");
  rand.innerHTML = lbs * 16;

  let cedi = document.getElementById("cedis");
  cedi.innerHTML = lbs / 360;

  e.preventDefault();
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").then(() => {
      console.log("Service Worker Registered");
    });
  });
}
