<script>
  export let backgroundColor
  // set year
  const date = new Date().getFullYear()
</script>

<!-- footer -->
<footer class="footer_visualisation" style:background-color={backgroundColor}>

   <a href="/">
    <!-- <a href="/projects">-->
    <!-- <img src="../images/logo.svg" alt="logo" class="nav-logo" />
    <br />
    Go back to the author's website
  </a> -->
  <p>&copy; <span id="date">{date}</span> Anne-Sophie Pereira De Sá. All rights reserved</p>
</footer>

<style>
 .nav-logo {
    width: 3.5rem;
  }
  .footer_visualisation {
    display: grid;
    place-items: center;
    height: 6 rem;
    padding-top: 1rem;
  }

  .footer_visualisation img {
    transition: var(--transition);
    display: block;
    margin: 0 auto;
  }

  .footer_visualisation:hover img {
    transform: scale(1.2);
  }

footer_visualisation:hover a {
    color: var(--clr-primary-5);
  }
 
 .footer_visualisation p {
    text-transform: capitalize;
    font-size: 0.8rem;
  } 

  .footer_visualisation p,
  .footer_visualisation a {
    color: var(--clr-primary-10);
    transition: var(--transition);
  } 

</style>
