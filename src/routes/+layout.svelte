<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<nav>
  <div>
    <p>Noxmusic</p>
    <p>audio premiun</p>
  </div>
  <div>
    <a href="/">Home</a>
    <a href="/library">Library</a>
  </div>
</nav>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
