
function showCurrentTime() {
    var now = new Date(); 
    var year = now.getFullYear();
    var month = ("0" + (now.getMonth() + 1)).slice(-2); 
    var day = ("0" + now.getDate()).slice(-2); 
    var hours = ("0" + now.getHours()).slice(-2); 
    var minutes = ("0" + now.getMinutes()).slice(-2); 
    var seconds = ("0" + now.getSeconds()).slice(-2); 
  

    var formattedTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
  

    document.getElementById("timeDisplay").innerText = "Tarih ve Saat: " + formattedTime;
  }
  

  window.onload = showCurrentTime;





  function hideElement() {
    const boxes = document.getElementsByClassName("photo-box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.transition = "opacity 1s";  
        boxes[i].style.opacity = "0";  
    }
}


const showButton = document.getElementById("showButton");
 function showElement() {
    const photoBox = document.getElementById("photoBox");
    const showButton = document.getElementById("showButton");
}


function showElement() {
    const boxes = document.getElementsByClassName("photo-box");

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.transition = "opacity 1s";  
        boxes[i].style.opacity = "1";  
    }
}





function sortItems() {
    const list = document.getElementById("portfolyo");
    const items = Array.from(list.getElementsByTagName("li"));

    
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]]; 
    }

    items.forEach(item => list.appendChild(item)); 
}
