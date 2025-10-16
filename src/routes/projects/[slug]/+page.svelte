<script>
  import Footer_portfolio from '../../../components/Footer_portfolio.svelte'
  export let data
  let width
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<div class="embed-center" bind:clientWidth={width} style:background={data.background_gradient || data.color}>
  <iframe
    frameborder="0"
    title={data.title}
    marginheight="0"
    marginwidth="0"
    scrolling="yes"
    style="
width: {width > 800 ? data.desktop_width: data.mobile_width}px; 
height: {width > 800 ? (data.desktop_height_modified): (data.mobile_height)}px; 
visibility: visible;"
    src="{data.url}?:embed=y&:showVizHome=n&:device={width > 800 ? 'desktop' : 'phone'}"> </iframe>
</div>

<Footer_portfolio backgroundColor={data.background_gradient || data.color} />

<style>
  .embed-center {
    display: flex;
    justify-content: center;
  }
</style>
