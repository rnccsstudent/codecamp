// var menuIcon=document.querySelector(".menu-icon");
// var sidebar=document.querySelector(".sidebar");
// var container=document.querySelector(".container");

// menuIcon.onclick=function() {
//     sidebar.classList.toggle("small-sidebar");
//     container.classList.toggle("large-container");
// }
var isSubscribedListVisible = false; // Track the visibility state

var homeLink = document.getElementById("homeLink");
var exploreLink = document.getElementById("exploreLink");
var subscriptionLink = document.getElementById("subscriptionLink");
var libraryLink = document.getElementById("libraryLink");
var historyLink = document.getElementById("historyLink");
var playlistLink = document.getElementById("playlistLink");
var messagesLink = document.getElementById("messagesLink");


var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var showMoreButton = document.getElementById("showMoreButton");
var subscribedList = document.querySelector(".subscribed-list");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

showMoreButton.onclick = function() {
    subscribedList.classList.toggle("show-subscribed-list");
}

// Add click event listeners to each link
homeLink.addEventListener("click", function() {
    // Remove the active class from all links
    removeActiveClassFromAllLinks();
    // Add the active class to this link
    homeLink.classList.add("active-link");
});

// Add click event listeners to each link
exploreLink.addEventListener("click", function() {
    // Remove the active class from all links
    removeActiveClassFromAllLinks();
    // Add the active class to this link
    exploreLink.classList.add("active-link");
});

subscriptionLink.addEventListener("click", function() {
    // Remove the active class from all links
    removeActiveClassFromAllLinks();
    // Add the active class to this link
    subscriptionLink.classList.add("active-link");
});

// Add click event listeners to each link
libraryLink.addEventListener("click", function() {
    // Remove the active class from all links
    removeActiveClassFromAllLinks();
    // Add the active class to this link
    libraryLink.classList.add("active-link");
});

// Add click event listeners to each link
historyLink.addEventListener("click", function() {
    // Remove the active class from all links
    removeActiveClassFromAllLinks();
    // Add the active class to this link
    historyLink.classList.add("active-link");
});
// Add click event listeners to each link
playlistLink.addEventListener("click", function() {
    // Remove the active class from all links
    removeActiveClassFromAllLinks();
    // Add the active class to this link
    playlistLink.classList.add("active-link");
});

// Add click event listeners to each link
messagesLink.addEventListener("click", function() {
    // Remove the active class from all links
    removeActiveClassFromAllLinks();
    // Add the active class to this link
    messagesLink.classList.add("active-link");
});

// Function to remove active class from all links
function removeActiveClassFromAllLinks() {
    homeLink.classList.remove("active-link");
    exploreLink.classList.remove("active-link");
    subscriptionLink.classList.remove("active-link");
    libraryLink.classList.remove("active-link");
    historyLink.classList.remove("active-link");
    playlistLink.classList.remove("active-link");
    messagesLink.classList.remove("active-link");
    // Remove active class from other links as needed
}


// Add a click event listener to the "Show-more" button
showMoreButton.addEventListener("click", function () {
    // Toggle a CSS class to change the background color
    // subscribedList.classList.toggle("bg-color");#b1b1b1
    // showMoreButton.style.backgroundColor = "#909090";
    // showMoreButton.style.backgroundColor = "#d5d5d5";
    // showMoreButton.style.backgroundColor = "#b1b1b1";
    // Toggle the visibility of the subscribed-list
    // if (subscribedList.style.display === "none" || subscribedList.style.display === "") {
    //     subscribedList.style.display = "block";
    //     // Change the background color of the button when subscribed-list is visible
    //     showMoreButton.style.backgroundColor = "#FF0000"; // Change to your desired color
    // } else {
    //     subscribedList.style.display = "none";
    //     // Change the background color of the button when subscribed-list is hidden
    //     showMoreButton.style.backgroundColor = "none"; // Change to your desired color
    // }



    // Toggle the visibility of the subscribed-list
    if (!isSubscribedListVisible) {
        subscribedList.style.display = "block";
        isSubscribedListVisible = true;
        // Change the background color of the button when subscribed-list is visible
        showMoreButton.style.backgroundColor = "#d5d5d5"; // Change to your desired color
    } else {
        subscribedList.style.display = "none";
        isSubscribedListVisible = false;
        // Change the background color of the button when subscribed-list is hidden
        showMoreButton.style.backgroundColor = ""; // Reset to the default background color
    }
});


