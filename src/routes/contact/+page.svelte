<script>
  import Navbar from '../../components/Navbar.svelte'
  import Footer from '../../components/Footer_classic.svelte'
</script>

<svelte:head>
  <title>Curious Data, Anne-Sophie Pereira De Sá's datavisualisation website || Contact</title>
  <meta name="description" content="Welcome to Curious Data, Anne-Sophie Pereira De Sá's data visualisation website. This page provides details to reach out (and touch faith)." />
</svelte:head>

<Navbar/>
<!--  main section of the contact page -->
<section class="section single-page">
  <!-- section title -->
  <div class="section-title">
    <h2>Let's get in touch</h2>
    <div class="underline" />
  </div>
  <!-- end of section title -->
  <div class="section-center page-info">
    <p>
      If you love data visualisation as much as I do, reach out!
      <br />
      Click on my social icons below in the footer to contact me.
    </p>
    <i class="fa-solid fa-arrow-down" />
  </div>
</section>
<!-- main section of the contact page -->
<Footer />

<style>
  /* 
=============== 
Contact Page
===============
*/
  .page-info {
    text-align: center;
  }
</style>
