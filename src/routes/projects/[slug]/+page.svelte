<script>
  import Footer_portfolio from '../../../components/Footer_portfolio.svelte'
  export let data
  let width
</script>


<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
</svelte:head>

<div class="embed-center" bind:clientWidth={width} style:background-color={data.color}>
  <iframe
    frameborder="0"
    allowtransparency="true"
    allowfullscreen="true"
    title={data.title}
    marginheight="0"
    marginwidth="0"
    scrolling="yes"
    style="
width: {width > 800 ? data.desktop_width: data.mobile_width}px; 
height: {width > 800 ? (data.desktop_height_modified): (data.mobile_height)}px; 
visibility: visible;"
    src="{data.url}?:embed=y&:showVizHome=n&:device={width > 800 ? 'desktop' : 'phone'}" />
</div>

<Footer_portfolio backgroundColor={data.color} />

<style>
  .embed-center {
    display: flex;
    justify-content: center;
  }
</style>
