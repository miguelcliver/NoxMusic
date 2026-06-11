<script>
  // @ts-nocheck

  import { cambiarCancion } from "$lib/state/cancion-actual.svelte";
  import Icon from "@iconify/svelte";

  const { cancion } = $props();
  const cambiar = () => {
    cambiarCancion(cancion);
  };
</script>

<div class="grid grid-cols-12 py-4 border border-purple-500/10  backdrop-blur-md shadow-[0_0_40px_rgba(147,51,234,0.15)] bg-[#181824]/90 gap-5">
  <div class="col-span-5 flex px-5 gap-4 ">
    <img src={cancion.album.image} alt="" class="w-20 rounded-2xl  object-cover shadow-md border border-white/5" />
    <div class="flex flex-col justify-center min-w-0 gap-1">
    <p class="font-sans text-xl font-black text-white tracking-wide uppercase truncate">{cancion.title}</p>
    <p class="font-mono text-sm font-medium text-blue-400 tracking-wider truncate">{cancion.artist.name}</p>
  </div>
  </div>

  <div class="col-span-3 flex items-center justify-center min-w-0 h-full text-center ">
    <p class="font-sans text-sm font-bold text-neutral-400 truncate">{cancion.album.title}</p>
  </div>
  <button onclick={cambiar} class="  ">
    <Icon icon="mdi:play" width="24" height="24" class="" />
  </button>
</div>
