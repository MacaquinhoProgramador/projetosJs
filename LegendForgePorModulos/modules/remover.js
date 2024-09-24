function removerFicha(rl, ficha, exibirMenu){
    if (ficha.length == 0) {
            console.log('Nada cadastrado.')
            exibirMenu()
    } else {
        console.log('Lista de elementos')
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
        rl.question('Digite a ficha que deseja remover: ', (numero) => {
            if (numero > 0 && numero <= ficha.length) {
                ficha.splice(numero - 1, 1)
                console.log('Enterro feito com sucesso!')
                exibirMenu()
            } else {
                console.log('Número inválido, tente novamente.')
                exibirMenu()
            }
        })
    }
}

module.exports = { removerFicha }