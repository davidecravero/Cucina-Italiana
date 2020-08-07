// document.getElementById("block").addEventListener("click", (event) => {
//     document.location.href = "C:/Users/computer10/Desktop/Cucina-Italiana/indexrecipe2.html";
//   });

const share = document.getElementById("share");

function shareLink(){
  window.alert(document.location);
}

share.addEventListener('click', shareLink);
