<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import Icon from "@iconify/svelte";
  import BarraDeMusica from "$lib/components/Barra-de-musica.svelte";

  let { children } = $props();
</script>

<nav class="flex relative items-center px-12 py-4 border border-purple-500/10  backdrop-blur-md shadow-[0_0_30px_rgba(147,51,234,0.08)] bg-[#181824]/80">
  <p
    class="text-2xl font-bold justify-start bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
  >
    NOXMUSIC
  </p>
  <div class="flex gap-10 text-neutral-600 grow justify-center">
    <a
      href="/"
      class="flex items-center gap-1 text-white font-sans font-bold transition-all duration-300 hover:text-cyan-400"
    >
      <Icon icon="boxicons:home" width={20} height={20} /> Home
    </a>

    <a href="/library" class="flex items-center gap-1 text-white font-sans font-bold transition-all duration-300 hover:text-cyan-400"
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
