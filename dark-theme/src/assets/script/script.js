document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');
    const toggleSwitch = document.querySelector('.switch');

    toggleSwitch.addEventListener('click', () => {
        main.classList.toggle('dark-theme');
    })
});
