// Script called on load of BOOK A STAY page. Preselects the location dropdown

// Get the location name from local storage. Defaults to the SELECT LOCATION
// option i.e. if not coming from one of the location pages
var loc = localStorage.getItem("location") || "please-select";

// Remove location from local storage in case it interferes with the next time
// this script is called
localStorage.removeItem("location");

// Selects the location dropdown to the option specified in the variable in
// local storage
document.getElementById("location-entry").value = loc;