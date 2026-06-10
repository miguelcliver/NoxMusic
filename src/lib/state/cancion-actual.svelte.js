let CancionActual = $state()


export const obtenerCancion = () => {
    return CancionActual
}

// @ts-ignore
export const cambiarCancion = (cancion) => {
 CancionActual = cancion
}