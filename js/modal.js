(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-modal]"),
        closeModalBtn: document.querySelector("[data-close-modal]"),
        backdrop: document.querySelector("[data-backdrop]"),
    }

    refs.openModalBtn.addEventListener("click", toggleModal)
    refs.closeModalBtn.addEventListener("click", toggleModal)


    function toggleModal() {
        document.body.classList.toggle("modal-is-open")
        refs.backdrop.classList.toggle("backdrop--is-hidden")
    }

    
})();
