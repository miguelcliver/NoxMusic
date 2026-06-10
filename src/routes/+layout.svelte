<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import Icon from "@iconify/svelte";
  import BarraDeMusica from "$lib/components/Barra-de-musica.svelte";

  let { children } = $props();
</script>

<nav class="flex relative items-center px-12 py-4">
  <p
    class="text-2xl font-bold justify-start bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
  >
    NOXMUSIC
  </p>
  <div class="flex gap-10 text-neutral-600 grow justify-center">
    <a href="/" class="flex items-center gap-1 text-white">
      <Icon icon="boxicons:home" width={20} height={20} /> Home
    </a>

    <a href="/library" class="flex items-center gap-1 text-white"
      ><Icon
        icon="material-symbols:library-music-outline"
        width={20}
        height={20}
      /> library
    </a>
  </div>
</nav>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

<BarraDeMusica />
