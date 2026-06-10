<script>
  const {cancion} = $props()
</script>

<div class="flex py-3">
  <div class="flex px-3 gap-3">
    <img src={cancion.album.image} alt=""  class="w-20 rounded-2xl  "/>
    <p>{cancion.title}</p>
    <p>{cancion.artist.name}</p>
  </div>

  <div class="">
    <p>{cancion.album.title}</p>
  </div>
</div>
