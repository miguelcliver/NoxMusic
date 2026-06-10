<script>
  // @ts-nocheck

  import { cambiarCancion } from "$lib/state/cancion-actual.svelte";

  const { cancion } = $props();
  const cambiar = () => {
    cambiarCancion(cancion);
  };
</script>

<div class="flex py-3">
  <div class="flex flex-1 px-3 gap-3">
    <img src={cancion.album.image} alt="" class="w-20 rounded-2xl" />
    <p>{cancion.title}</p>
    <p>{cancion.artist.name}</p>
  </div>

  <div class="flex-1">
    <p>{cancion.album.title}</p>
  </div>
  <button onclick={cambiar}>play</button>
</div>
