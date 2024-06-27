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

document.querySelectorAll('.polaroid').forEach(polaroid => {
    polaroid.addEventListener('click', event => {
        event.stopPropagation();
        polaroid.querySelector('.overlay').style.opacity = '1';
        polaroid.querySelector('.overlay').style.visibility = 'visible';
    });
});

document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
    });
});

document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', event => {
        event.stopPropagation();
        button.parentElement.style.opacity = '0';
        button.parentElement.style.visibility = 'hidden';
    });
});
