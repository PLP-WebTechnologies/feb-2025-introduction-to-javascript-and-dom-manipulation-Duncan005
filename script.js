document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").textContent = "Text has been changed!";
});

document.getElementById("toggleElementBtn").addEventListener("click", function() {
    let box = document.getElementById("box");
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
});

// Change box color on hover
let box = document.getElementById("box");
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "red";
});
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "blue";
});
