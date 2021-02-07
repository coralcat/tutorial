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
