
document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        const popup = document.querySelector('.popup-image');
        popup.style.display = 'block';
        popup.querySelector('img').src = image.getAttribute('src');
    }
});

// Close when clicking on the close button (span)
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
};

// Close when clicking outside the image
document.querySelector('.popup-image').onclick = (event) => {
    if (event.target.classList.contains('popup-image')) {
        document.querySelector('.popup-image').style.display = 'none';
    }
};
