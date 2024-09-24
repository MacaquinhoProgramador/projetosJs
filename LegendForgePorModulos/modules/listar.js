function listarFichas(rl, ficha, exibirMenu) {
    if (ficha.length === 0) {
        console.log('Nenhuma Ficha cadastrada.')
    } else {
        console.log('Lista de todas as fichas:')
        ficha.forEach((ficha, index) => {
            console.log(`
                ${index + 1}. 
                Raça: ${ficha.raca}
                Nome: ${ficha.nome}
                Classe: ${ficha.classe}
                Equipamentos: ${ficha.equipamento}
                Força: ${ficha.forca}
                Destreza: ${ficha.destreza} 
                Constituição: ${ficha.constituicao} 
                Inteligencia: ${ficha.inteligencia} 
                Sabedoria: ${ficha.sabedoria} 
                Carisma: ${ficha.carisma}
            `)
        })
    }
    exibirMenu()
}

module.exports = { listarFichas }
