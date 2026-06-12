<script>
  import TarjetaMusica from "$lib/components/Tarjeta-musica.svelte";
  import axios from "axios";
  import Icon from "@iconify/svelte";
  const respuesta = axios.get("https://leonardoapi.vercel.app/api/tracks");
</script>

<div>
  {#await respuesta}
    <div class="flex flex-col items-center justify-center py-6 gap-2">
      <Icon
        icon="glyphs:spinner-bold"
        width="54"
        height="54"
        class="animate-spin text-blue-600 dark:text-blue-400"
      />
      <p
        class="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide animate-pulse"
      >
        Loanding...
      </p>
    </div>
  {:then respuesta}
    {#each respuesta.data.tracks as track}
      <TarjetaMusica cancion={track} />
    {/each}
  {/await}'
</div>
