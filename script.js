document.addEventListener("DOMContentLoaded", function() {
    var contactLink = document.getElementById("contact");
    var contactDropdown = document.getElementById("contactDropdown");

    // Function to toggle dropdown visibility
    function toggleDropdown() {
        contactDropdown.classList.toggle("show");
    }

    // Event listener to toggle dropdown when clicking on the contact link
    contactLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        toggleDropdown();
    });

    // Event listener to close dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches("#contact")) {
            if (contactDropdown.classList.contains("show")) {
                toggleDropdown();
            }
        }
    });
});

console.log('JavaScript code is running');
