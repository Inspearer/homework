const buttonModalOpen = document.querySelector('.btn')
const buttonModalClose = document.querySelector('.close__modal--btn')
const modalSection = document.querySelector('.modal')
const body = document.body


buttonModalOpen.addEventListener('click', () => {
  modalSection.classList.remove('modal--hide')
})

const closeModal = () => {
  modalSection.classList.add('modal--hide')
}

modalSection.addEventListener('click', (event) => {
  const target = event.target

  if (target.classList.contains('modal') || target.classList.contains('close__modal--btn')) {
    closeModal()
  }
})


document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    closeModal()
  }
})

