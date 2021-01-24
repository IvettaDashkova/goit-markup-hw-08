const refs = {
	controls: document.querySelector("[data-controls]"),
	cards: document.querySelector("[data-cards]"),
}
refs.controls.addEventListener("click", event => {
	if (event.target.nodeName !== "BUTTON") {
		return
    }
    
    const currentActiveControl = refs.controls.querySelector(".filter__btn--active")
    
	if (currentActiveControl) {
		currentActiveControl.classList.remove("filter__btn--active")
		const currentCardId = getCardId(currentActiveControl)
        const currentCards = getCards(currentCardId).forEach(card => card.classList.remove("card--active"))
	}

	const control = event.target
	control.classList.add("filter__btn--active")

	const cardId = getCardId(control)
	const newCards = getCards(cardId).forEach(card => card.classList.add("card--active"))
})

function getCardId(control) {
	return control.attributes.id.value
}

function getCards(id) {
	return id === "all" ? [...refs.cards.children] : refs.cards.querySelectorAll(`[data-${id}]`)
}
