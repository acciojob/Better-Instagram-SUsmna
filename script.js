//your code here

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('dragstart', handleDragStart);
        image.addEventListener('dragover', handleDragOver);
        image.addEventListener('drop', handleDrop);
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const draggedElementId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedElementId);
        const targetElement = e.target;

        if (targetElement.classList.contains('image') && targetElement !== draggedElement) {
            swapElements(draggedElement, targetElement);
        }
    }

    function swapElements(el1, el2) {
        const tempBackground = el1.style.backgroundImage;
        el1.style.backgroundImage = el2.style.backgroundImage;
        el2.style.backgroundImage = tempBackground;
    }
});