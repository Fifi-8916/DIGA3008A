function stars(){
  let count = 500;
  let scene = document.querySelector('.scene');
  let i = 0;
  while(i<count){
    let star = document.createElement("i");
    let x = Math.floor(Math.random()*window.innerWidth);
    let y = Math.floor(Math.random()*window.innerHeight);
    let duration = Math.random()*10;
    let size  = Math.random()*2;

    star.style.left=x+'px';
    star.style.top=y+'py';
    star.style.width=1+size+'px';
    star.style.height=1+size+'py';

    scene.appendChild(star);
    i++;
  }
}
stars();

function toggleNav() {//when pressing the three line in mobile, open a side bar of that information
  const x = document.getElementsByClassName("Menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function matchPassword(){//if puzzle is complete and password is found, open link to secret page

}

function changeFooter(){//else message at the bottom of screen says oncorrect and update footer line to that page.

}
       
function openModal(imageSrc) {//press an image then modal screen will display selected image
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("image");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {//x button to close modal window
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}

