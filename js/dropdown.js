document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown-item');

    dropdowns.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const options = self.querySelector('.dropdown__menu-list');
            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                options.style.maxHeight = options.scrollHeight + 'px';
            } else {
                options.style.maxHeight = null;
            }
        });
    });

    dropdowns.forEach(dropdown => {
        const control = dropdown.querySelector('.dropdown__control-content');
        const options = dropdown.querySelectorAll('.dropdown__menu-item');
        const menu = dropdown.querySelector('.dropdown__menu-list');
        const selected = dropdown.querySelector('.dropdown__selected');

        control.addEventListener('click', () => {
            menu.classList.toggle('open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                menu.classList.remove('open');
            });
        });
    });
});

