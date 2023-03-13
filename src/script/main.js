const dataEvento = new Date("Jul 7, 2023 12:00:00")
const timeStampEvento = dataEvento.getTime()

const contaTempo = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime()

    const ateOevento = timeStampEvento - timeStampAtual

    const diasEvento = Math.floor(ateOevento / (1000 * 60 * 60 * 24))
    const horasEvento = Math.floor(ateOevento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const minutosEvento = Math.floor(ateOevento % (1000 * 60 * 60) / (1000 * 60))
    const segundosEvento = Math.floor((ateOevento % (1000 * 60) / (1000)))

    document.getElementById('contador').innerHTML = `${diasEvento}d ${horasEvento}h ${minutosEvento}m ${segundosEvento}s`

    if(ateOevento < 0){
        clearInterval(contaTempo)
        document.getElementById('contador').innerHTML = 'Já foi!'
    }

    
}, 1000)