<script>
  import { obtenerCancion } from "$lib/state/cancion-actual.svelte";

let cancionActual = $derived (obtenerCancion())
</script>

<div class="border border-purple-500/10  backdrop-blur-md shadow-[0_0_40px_rgba(147,51,234,0.15)] bg-[#181824]/90 gap-5 ">
  <div>
   
  </div>
  <audio src={cancionActual?.audio} controls autoplay></audio>
</div>
