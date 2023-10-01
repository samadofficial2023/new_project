// let navList = document.getElementById("navList");
// let openMenu = document.getElementById("openMenu");
// let closeMenu = document.getElementById("closeMenu");

// if (openMenu) {
//   openMenu.addEventListener("click", () => {
//     navList.classList.add("active")
//   })
// }

// if (closeMenu) {
//   closeMenu.addEventListener("click", () => {
//     navList.classList.remove("active")
//   })
// }

let navList = document.getElementById("navList");
let openMenu = document.getElementById("openMenu");
let closeMenu = document.getElementById("closeMenu");


if (openMenu) {
  openMenu.addEventListener("click", () => {
    navList.classList.add("active");
  })
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
  })
}