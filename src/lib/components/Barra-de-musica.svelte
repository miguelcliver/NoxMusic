<script>
  import { obtenerCancion } from "$lib/state/cancion-actual.svelte";

let cancionActual = $derived (obtenerCancion())
</script>

<div class="bg-gray-950">
  <div>
    <img src={cancionActual?.album.image} alt="" class="w-24">
  </div>
  <audio src={cancionActual?.audio} controls autoplay></audio>
</div>
