<script>
  import { navigate } from 'svelte-routing'
  import data from '../data/portfolio_pages_info.csv'
  export let blurb
  let width
  const project = data.find(project => project.blurb === blurb)
  console.log(project)
  $: if (!project) {
    navigate('/projects')
    console.log('Coucou')
  }
</script>

<svelte:head>
  {#if project}
    <title>{project.title}</title>
    <meta name="description" content={project.description} />
  {/if}
</svelte:head>
{#if project}
  <div class="embed-center embed-center_ted" bind:clientWidth={width}>
    {#if width > 800}
      <div id="vizContainerDesktop_ted">
        <iframe
          frameborder="0"
          allowtransparency="true"
          allowfullscreen="true"
          title={project.title}
          marginheight="0"
          marginwidth="0"
          scrolling="yes"
          style="
width: {project.desktop_width}px; 
height: {project.desktop_height}px; 
visibility: visible;"
          src="{project.url}?:embed=y&:showVizHome=n&:device=desktop" />
      </div>
    {:else}
      <div id="vizContainerMobile_ted">
        <iframe
          frameborder="0"
          allowtransparency="true"
          allowfullscreen="true"
          title={project.title}
          marginheight="0"
          marginwidth="0"
          scrolling="yes"
          style="
width: {project.mobile_width}px; 
height: {project.mobile_height}px; 
visibility: visible;
"
          src="{project.url}?:embed=y&:showVizHome=n&:device=phone" />
      </div>
    {/if}
  </div>
{/if}

<style>
  /*
=============== 
Projects individual Pages
===============
*/

  .embed-center {
    display: flex;
    justify-content: center;
    /* background:red;
position:absolute;
width: 100%;
height:100%;
top:0; */
    /* left:0; */
  }

  .embed-center_buffy,
  .footer-buffy {
    background-color: #161a1d;
  }

  .embed-center_ted,
  .footer-ted {
    background-color: #003e90;
  }

  .embed-center_eurovision,
  .footer-eurovision {
    background-color: #1b1134;
  }

  .embed-center_depeche,
  .footer-depeche {
    background-color: #100e0f;
  }

  /*
=============== 
Footer of each page
===============
*/

  .footer_visualisation {
    display: grid;
    place-items: center;
    height: 12rem;
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

  .footer_visualisation:hover a {
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
