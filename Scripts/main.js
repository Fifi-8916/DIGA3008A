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

function openModal(imageSrc) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}