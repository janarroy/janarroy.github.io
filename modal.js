function openModal(element) {
    var modal = document.getElementById('modal');
    var bio = element.getAttribute('data-bio');
    var past = element.getAttribute('data-past');
    document.getElementById('modal-bio').textContent = bio;
    document.getElementById('modal-past').textContent = past;
    modal.style.display = "block"; // Add this line
    modal.style.opacity = 1;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none"; // Add this line
    modal.style.opacity = 0;
}
