
  // add fixed class to navbar
  // let navbar
  export let isFixed = false
  export const scrollFunction = function () {
    console.log(window.scrollY)
    if (window.scrollY > 80) {
      // navbar.classList.add('navbar-fixed')
      isFixed = true
    } else {
      // navbar.classList.remove('navbar-fixed')
      isFixed = false
    }
  
  }

  // add toggle action on buttons of the sidebar
 export let isOpen = false
 export const toggleSideBar = function () {
    isOpen = !isOpen
    console.log('isOpen')
  }
