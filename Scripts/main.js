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