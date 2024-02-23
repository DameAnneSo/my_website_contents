<script>
  // add fixed class to navbar
  // let navbar
  let isFixed = false
  const scrollFunction = function () {
    if (window.scrollY > 80) {
      // navbar.classList.add('navbar-fixed')
      isFixed = true
    } else {
      // navbar.classList.remove('navbar-fixed')
      isFixed = false
    }
  }

  // add toggle action on buttons of the sidebar
  let isOpen = false
  const toggleSideBar = function () {
    isOpen = !isOpen
  }
</script>

<svelte:window on:scroll={scrollFunction} />

<!-- navbar HTML -->
<nav class:navbar-fixed={isFixed} class="nav" id="nav">
  <div class="nav-center">
    <!-- nav header -->
    <div class="nav-header">
      <img src="./images/logo.svg" alt="logo of website Curious data" class="nav-logo" />
      <button on:click={toggleSideBar} class="nav-btn" id="nav-btn">
        <i class="fas fa-bars" />
      </button>
    </div>
    <!-- nav-links -->
    <ul class="nav-links">
      <li>
        <a href="/"> home</a>
      </li>
      <li>
        <a href="/about"> About</a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
      <!-- <li>
        <a href="/blog">Blog</a>
      </li> -->
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>

<!-- sidebar HTML -->
<aside class:show-sidebar={isOpen} class="sidebar" id="sidebar">
  <div>
    <button on:click={toggleSideBar} class="close-btn" id="close-btn">
      <i class="fas fa-times" />
    </button>
    <!-- nav-links -->
    <ul class="sidebar-links">
      <li>
        <a on:click={toggleSideBar} href="/">home</a>
      </li>
      <li>
        <a on:click={toggleSideBar} href="/about">about</a>
      </li>
      <li>
        <a on:click={toggleSideBar} href="/projects">projects</a>
      </li>
      <!-- <li>
        <a on:click={toggleSideBar} href="/blog">blog</a>
      </li> -->
      <li>
        <a on:click={toggleSideBar} href="/contact">contact</a>
      </li>
    </ul>
    <!-- social icons  -->
    <ul class="social-icons">
      <!-- single item -->
      <li>
        <a href="https://www.linkedin.com/in/annesophiepereira/" target="_blank" class="social-icon">
          <i class="fab fa-linkedin" />
        </a>
      </li>
      <!-- end of single item -->
      <!-- single item -->
      <li>
        <a href="https://vis.social/@curiousdata" target="_blank" class="social-icon">
          <i class="fab fa-mastodon" />
        </a>
      </li>
      <!-- single item -->
      <li>
        <a href="https://bsky.app/profile/curiousdata.bsky.social" target="_blank" class="social-icon">
          <i class="fa-solid fa-retweet" />
        </a>
      </li>
      <!-- end of single item -->
    </ul>
  </div>
</aside>

<!-- end of sidebar -->

<style>
  /*
=============== 
Navbar style 
===============
*/

  .nav-logo {
    width: 3.5rem;
  }

  .nav-links {
    display: none;
  }

  .nav {
    height: 5rem;
    padding: 1rem;
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }

  .nav-center {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .nav-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
    align-items: center;
  }

  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    justify-self: right;
  }

  @media screen and (min-width: 800px) {
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: grid;
      /* will need to add 5 instead of 4 if adding blog back */
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      gap: 2rem;
      justify-self: end;
    }
    .nav-links a {
      text-transform: uppercase;
      color: var(--clr-grey-2);
      letter-spacing: var(--spacing);
      /* font-weight:bold; */
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      -webkit-box-align: center;
      align-items: center;
    }
  }

  /* fixed navbar */
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--clr-primary-9);
    z-index: 2;
    box-shadow: var(--light-shadow);
  }

  /*
=============== 
Sidebar style
===============
*/

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-primary-9);
    z-index: 4;
    display: grid;
    place-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .show-sidebar {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    transition: --var(transition);
  }

  .sidebar-links {
    text-align: center;
  }

  .sidebar-links a {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    transition: --var(transition);
    letter-spacing: --spacing;
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }

  .social-icon {
    color: var(--clr-grey-5);
  }

  .social-icon:hover {
    color: var(--clr-primary-5);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: transparent;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    color: var(--red-dark);
  }

  .close-btn:hover {
    color: var(--clr-primary-5);
  }
</style>
