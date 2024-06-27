function openModal(element) {
    var modal = document.getElementById('modal');
    var bio = element.getAttribute('data-bio');
    var past = element.getAttribute('data-past');
    document.getElementById('modal-bio').textContent = bio;
    document.getElementById('modal-past').textContent = past;
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
