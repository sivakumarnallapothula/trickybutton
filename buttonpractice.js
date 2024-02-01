document.getElementById("but").addEventListener("mouseover", function() {
    document.getElementById("but").classList.toggle("sk");
});
document.getElementById("but").addEventListener("mouseout", function() {
    document.getElementById("but").classList.toggle("ks");
});
document.getElementById("but").addEventListener("click", function() {
    let head = document.createElement("h3");
    head.style.marginTop = "100px";
    head.innerHTML = "Peekinav Theee";
    document.getElementById("l").appendChild("head");
});