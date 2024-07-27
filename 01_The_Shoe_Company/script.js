
  //* Element Selection :
  const humbergermenuBtn = document.getElementById('humbergermenu-btn')
  const closeBtn = document.getElementById('close-btn')
  const navBar = document.getElementById('nav-bar')


  //* Events
  humbergermenuBtn.addEventListener('click', e => {
    e.stopPropagation()
    // console.dir(e.target)

    humbergermenuBtn.classList.toggle('hidden')
    navBar.classList.toggle('max-md:translate-x-[110%]')
    
    // navBar.classList.toggle('max-md:-translate-y-[120%]')

    // navBar.classList.toggle('max-md:hidden')
    // navBar.classList.toggle('max-md:flex')
  })

  closeBtn.addEventListener('click', e => {
    e.stopPropagation()
    // console.dir(e.target)

    humbergermenuBtn.classList.toggle('hidden')
    navBar.classList.toggle('max-md:translate-x-[110%]')
    
    // navBar.classList.toggle('max-md:-translate-y-[120%]')
    
    // navBar.classList.toggle('max-md:hidden')
    // navBar.classList.toggle('max-md:flex')
  })

  window.addEventListener('click', e => {
    e.stopPropagation()
    humbergermenuBtn.classList.remove('hidden')
    navBar.classList.add('max-md:translate-x-[110%]')
  })

  navBar.addEventListener('click', e => {
    (e.target === navBar) ? e.stopPropagation() : ''
  })
  