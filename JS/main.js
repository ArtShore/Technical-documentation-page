let toggleNavStatus = false;

let toggleNav = function () {
  let getSideBar = document.querySelector(".side-bar");
  let getSideBarUl = document.querySelector(".side-bar ul");
  let getIcon = document.querySelector("nav i");

  if (toggleNavStatus === false) {
    getSideBar.style.width = "300px";
    getSideBar.style.visibility = "visible";
    getSideBarUl.style.opacity = "1";
    getIcon.style.width = "300px";

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSideBar.style.visibility = "hidden";
    getSideBar.style.width = "0";
    getSideBarUl.style.opacity = "0";
    getIcon.style.width = "60px";

    toggleNavStatus = false;
  }
};
