document.addEventListener('DOMContentLoaded', function () {
    // Toggle Switch
    const container = document.querySelector('.container')
    const toggleSwitch = document.querySelector('.switch')

    toggleSwitch.addEventListener('click', () => {
        container.classList.toggle('dark-theme')
    })

    const aside = document.querySelector('aside')
    const toggleMenu = document.querySelector('.toggle-menu')

    toggleMenu.addEventListener('click', () => {
        aside.classList.toggle('active')
        toggleMenu.classList.toggle('active')
    })


    // Dropdown Menu
    const mainMenus = document.querySelectorAll('.main-menu')

    mainMenus.forEach((mainMenu) => {
        const subMenu = mainMenu.nextElementSibling

        if(subMenu) {
            mainMenu.addEventListener('click', () => {
                mainMenu.classList.toggle('active')
                subMenu.classList.toggle('active')
            })
        }
    })



    // Tab Menu
    const tabMenus = document.querySelectorAll('.tab-menu li')
    const tabContents = document.querySelectorAll('.tab-content section')


    const activeSection = (e) => {
        e.stopPropagation();
        let menuIndex = [...tabMenus].indexOf(e.target);

        tabMenus.forEach(menu => {
            [...tabMenus].indexOf(menu) === menuIndex
                ? menu.classList.add('active')
                : menu.classList.remove('active')
        });

        tabContents.forEach(content => {
            [...tabContents].indexOf(content) === menuIndex
                ? content.classList.add('active')
                : content.classList.remove('active')
        });
    };

    [...tabMenus][0].classList.add('active');
    [...tabContents][0].classList.add('active');

    tabMenus.forEach(menu => {
        menu.addEventListener('click', activeSection);
    })



    // Heart
    const icoHearts = document.querySelectorAll('.heart')
    icoHearts.forEach(heart => {
        heart.addEventListener('click', () => {
            heart.classList.toggle('active')

            heart.classList.contains('active')
                ? heart.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
                : heart.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>`
        })
    })


    // Modal
    const modals = document.querySelectorAll('.modal')
    const buttonCloses = document.querySelectorAll('.btn-close')
    const overlay = document.querySelector('.overlay')

    const icoSettings = document.querySelector('.ico-settings')
    const modalSettings = document.querySelector('.modal-settings')

    const closeModal = () => {
        modals.forEach(modal => {
            modal.classList.remove('active')
            overlay.classList.remove('active')
        })
    }

    if(modals) {
        overlay.addEventListener('click', closeModal)
        buttonCloses.forEach(buttonClose => {
            buttonClose.addEventListener('click', closeModal)
        })
    }

    if(icoSettings) {
        icoSettings.addEventListener('click', () => {
            modalSettings.classList.add('active')
            overlay.classList.add('active')
        })
    }

})
