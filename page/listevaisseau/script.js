function toggleSubMenu(id) {
  const submenu = document.getElementById(id);
  if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
  } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}