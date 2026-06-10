<script>
  import { obtenerCancion } from "$lib/state/cancion-actual.svelte";

let cancionActual = $derived (obtenerCancion())
</script>

<div>
  <audio src={cancionActual?.audio} controls autoplay></audio>
</div>
