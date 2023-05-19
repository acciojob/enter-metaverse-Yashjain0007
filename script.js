//your JS code here. If required.
let p = document.getElementById("status");
function change() {
	p.style.display = "none";
	let newElement = document.createElement("h1");
	newElement.innerText = "Entered Metaverse";
	p.appendChild(newElement);
}