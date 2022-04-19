let squareSides = 16;
let containerHeight = 1000;
let boxHeight = containerHeight / squareSides;
let containerWidth = 1000;
let boxWidth = containerWidth / squareSides;

console.log(containerHeight, containerWidth, boxHeight, boxWidth)
for (i = 0; i < (squareSides * squareSides); i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "boxes");
    document.getElementById('container').appendChild(box);
    

};
const boxes = document.querySelectorAll("div.boxes");





boxes.forEach(function(b) {
     b.addEventListener("mouseover", function() {
    b.style.backgroundColor = "blue";
   
}) 
 b.style.width = boxWidth+'px';
    b.style.height = boxHeight+'px';
});

document.getElementById('clearGrid').addEventListener('click', function(){
                while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            };
       
          let squareQ = prompt('how many squares per side you want?');
          if (squareQ > 100) {
              return alert('too many squares brah!');
          } else if (squareQ < 4) {
              return alert('too few squares brah!');
          }  else {
          for (ii = 0; ii < (squareQ * squareQ); ii++) {
            const box = document.createElement("div");
            box.setAttribute("class", "boxes");
            document.getElementById("container").appendChild(box);
            };
            const boxes = document.querySelectorAll("div.boxes");
           // boxes.forEach(function(b) {
               
           // 
 

console.log(boxes.length);
            boxes.forEach(function(b) {
                b.addEventListener("mouseover", function() {
               b.style.backgroundColor = "blue";
              
            
                });
             let newBoxHeight = containerHeight / squareQ;
               let newBoxWidth = containerWidth / squareQ;
                b.style.width = newBoxWidth+'px';
                b.style.height = newBoxHeight+'px';});
         
        };
      //    };


});



    