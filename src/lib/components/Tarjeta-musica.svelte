<script>
  const { imagen, titulo, artista, album, duracion } = $props();
</script>


  <div>
    <img src={imagen} alt="" />
    <p>{titulo}</p>
    <p>{artista}</p>
  </div>

<div>
<p>{album}</p>
</div>

<div>{duracion}</div>
