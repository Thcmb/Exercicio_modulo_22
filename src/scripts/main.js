AOS.init();

const dataDoevento = new Date("Oct 11, 2024 18:00:00");
const timeStampDoEvento = dataDoevento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date ();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const mesesAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24 * 30));
    const diasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24 * 30)) / (1000* 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000* 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000* 60));
    const segundosAteOevento = Math.floor((distanciaAteOEvento % (1000 * 60)) / (1000));

    document.getElementById('contador').innerHTML = `${mesesAteOEvento}m ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOevento}s `;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    } 
}, 1000);