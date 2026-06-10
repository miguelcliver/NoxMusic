<script>
  import TarjetaMusica from "$lib/components/Tarjeta-musica.svelte";
  import axios from "axios";
  const respuesta = axios.get("https://leonardoapi.vercel.app/api/tracks");
</script>

<div>
  {#await respuesta}
    Respuesta en desarrollo
  {:then respuesta}
    {#each respuesta.data.tracks as track}
      <TarjetaMusica cancion={track} />
    {/each}
  {/await}
</div>
