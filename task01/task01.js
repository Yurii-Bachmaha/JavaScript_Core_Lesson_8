hideText.onclick = function () {
    let visibility = text.style.visibility;

    if (visibility == "hidden") {
        text.style.visibility = "";
        this.textContent = 'Hide text';
    } else {
        text.style.visibility = "hidden";
        this.textContent = 'Show Text';
    }
}

hideButton.onclick = function () {
    hideButton.style.display = 'none';
}