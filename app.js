let card = document.querySelectorAll('.panel')

card.forEach(panel => {
    panel.addEventListener('click', () => {
        removecard()
        panel.classList.add('active')
    })

})

function removecard() {

    forEach(panel => {
        panel.classList.remove('active')
    })
    
}