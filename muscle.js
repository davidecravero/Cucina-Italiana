document.getElementById("block1").addEventListener("click", (event) => {
    document.location.href = "C:/Users/computer10/Desktop/Cucina-Italiana/indexrecipe1.html";
  });

  document.getElementById("block2").addEventListener("click", (event) => {
    document.location.href = "C:/Users/computer10/Desktop/Cucina-Italiana/indexrecipe2.html";
  });

  document.getElementById("block3").addEventListener("click", (event) => {
    document.location.href = "C:/Users/computer10/Desktop/Cucina-Italiana/indexrecipe3.html";
  });

  document.getElementById("block4").addEventListener("click", (event) => {
    document.location.href = "C:/Users/computer10/Desktop/Cucina-Italiana/indexrecipe4.html";
  });

const share = document.getElementById("share");

function shareLink(){
  window.alert(document.location);
}

share.addEventListener('click', shareLink);
