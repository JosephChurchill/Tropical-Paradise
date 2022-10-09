// On the location page, get each side navigation link
var links = document.getElementsByClassName("location-nav-item");

// For each navigation link, bind a function that scrolls the corresponding
// content section header into view. The scroll-margin is set so that the
// heading isn't hid by the fixed page header
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].textContent).scrollIntoView();
    }
}