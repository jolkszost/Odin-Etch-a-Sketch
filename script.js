

for (i = 0; i < 16; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "boxes");
    document.getElementById("container").appendChild(box);
};


const boxes = document.querySelectorAll("div.boxes");


console.log(boxes.length);


boxes.forEach(function(b) {
     b.addEventListener("mouseover", function() {
    b.style.backgroundColor = "blue";
})
});

    