document.addEventListener('DOMContentLoaded', function () {
    const popoverBtn = document.getElementById('popoverBtn');
    const popover = document.getElementById('myPopover');
    const closeBtn = document.getElementById('closeBtn');

    popoverBtn.addEventListener('click', function () {
        togglePopover();
    });

    closeBtn.addEventListener('click', function () {
        hidePopover();
    });

    document.addEventListener('click', function (event) {
        const target = event.target;

        if (!popover.contains(target) && target !== popoverBtn) {
            hidePopover();
        }
    });

    function togglePopover() {
        if (popover.style.display === 'block') {
            hidePopover();
        } else {
            showPopover();
        }
    }

    function showPopover() {
        popover.style.display = 'block';
    }

    function hidePopover() {
        popover.style.display = 'none';
    }
});
