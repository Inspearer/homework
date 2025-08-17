(function() {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const target = e.target
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if(!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else 
      document.body.classList.remove('body--opened-menu')
  }
})()

const openModal = document.querySelector('.gift--link')
const body = document.body
openModal.addEventListener('click', event => {
  event.preventDefault();
  body.classList.add('body--opened-modal')
})

const modalWindow = document.querySelector('.modal')
modalWindow.addEventListener('click', event => {
  const target = event.target
  event.preventDefault();
  if (target && target.classList.contains('modal')||target.closest('.modal__cancel')) {
    body.classList.remove('body--opened-modal')
  }
})