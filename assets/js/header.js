document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('mouseenter', function (event) {
        const dropdownMenu = dropdownToggle.querySelector('.dropdown-menu.fullscreen');
        if (dropdownMenu) {
            dropdownMenu.classList.add('show');
            centerDropdown(dropdownMenu);
        }
    });

    dropdownToggle.addEventListener('mouseleave', function (event) {
        const dropdownMenu = dropdownToggle.querySelector('.dropdown-menu.fullscreen');
        if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    });
});

function centerDropdown(dropdownMenu) {
    const rect = dropdownMenu.getBoundingClientRect();
    const offsetX = (window.innerWidth - rect.width) / 2 - rect.left;
    dropdownMenu.style.transform = `translateX(${offsetX}px)`;
}
