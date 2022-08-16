function consultarHoras() {
    let horasDisponibles = document.getElementById("horasDisponibles").value;
    let asignaturas = [2, 3, 4, 2];
    asignaturas.sort().reverse();
    let response = [];
    for (let index = 0; index < asignaturas.length; index++) {
        console.log(asignaturas);
        if (horasDisponibles >= asignaturas[index]) {
            if ( horasDisponibles>=0 && response.length < 2 ) {
                horasDisponibles-=asignaturas[index];
                response.push(asignaturas[index]);
            }
        }
    }
    console.log(response);
document.getElementById("horasRecomendadas").value= response;
}
