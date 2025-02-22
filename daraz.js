function togglenav(){
    const mobi=document.getElementById("mobile");
    mobi.classList.toggle("show");
  }
  document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobile");
    const button = document.getElementById("buttom");

    // Check if the click is outside the menu and button
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("show"); // Close the menu
    }
});
