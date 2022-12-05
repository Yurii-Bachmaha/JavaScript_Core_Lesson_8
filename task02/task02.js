menu.onclick = function () {
    let menuItem = document.querySelectorAll("li");
    let visibility = menuItem[0].style.visibility;

    for (let i = 0; i < menuItem.length; i++) {
        if (visibility == "hidden") {
            menuItem[i].style.visibility = "";
        } else {
            menuItem[i].style.visibility = "hidden";
        }
    }
}