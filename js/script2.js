// The BOOK NOW button on the bottom of a location page calls this function on
// clicking with the parameter as the name of the location, corresponding to a
// select location option on the BOOK A STAY page. It's stored in local storage
// before redirecting to the BOOK A STAY page
function book_with_location (location) {
    localStorage.setItem("location", location);
    document.location.href="book a stay.html";
}