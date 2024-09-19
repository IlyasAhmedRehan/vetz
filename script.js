function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("active");
}


window.onload = function() {
// Get the modal
var modal = document.getElementById('myModal');

// Show the modal
modal.classList.add('show');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.classList.remove('show');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.classList.remove('show');
}
}
}

document.querySelector('.call').addEventListener('click', function() {
    const emailInput = document.querySelector('.input-email').value;
    
    if (emailInput) {
        // Create a Blob object to store the email data
        const blob = new Blob([emailInput], { type: 'text/plain' });
        
        // Create a download link
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'emails.txt';
        
        // Trigger the download
        a.click();

        // Close the popup after saving the email
        closePopup(); // Make sure this function closes your modal dialog

        // Optionally, clear the email input field
        document.querySelector('.input-email').value = '';
    }
});

function closePopup() {
    // Logic to close the modal popup
    const modal = document.querySelector('.modal-container'); // Adjust to match your popup element
    modal.style.display = 'none'; // Or use any other method to close the modal
}
