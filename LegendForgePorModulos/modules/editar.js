function editarFicha(rl, ficha, exibirMenu) {
    if (ficha.length == 0) {
        console.log('Não há aventureiros ainda.')
        exibirMenu()
    } else {
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
    rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
        if (numero > 0 && numero <= ficha.length) {
            console.log(`
            Bem vindo a área de criação de fichas de D&D! Vamos começar com sua raça.\n
            Segue as opções de raças:
            - Anão;
            - Elfo;
            - Humano;
            - Draconato;
            - Meio-Elfo;
            - Meio-Orc;
            `)
            rl.question('Digite qual dessas raças você prefere. (digite em minusculo)\n', (raca) => {                                                                                                                               //; if(raca == elfo){console.log('tchola...')}
                rl.question('Digite o nome do seu personagem.\n', (nome) => {
                    console.log(`
                    Escolha uma das 12 classes disponíveis.
                    - Bárbaro
                    - Bardo
                    - Bruxo
                    - Clérigo
                    - Druida
                    - Feiticeiro
                    - Guerreiro
                    - Ladino
                    - Mago
                    - Monge
                    - Paladino
                    - Patrulheiro
            `)
                    rl.question('Digite a classe do seu personagem.\n', (classe) => {
                        rl.question('Digite os equipamentos do seu personagem.\n', (equipamento) => {
                            console.log('Agora vamos distribuir os pontos de habilidade.\n')
                            rl.question('Força: ', (forca) => {
                                rl.question('Destreza: ', (destreza) => {
                                    rl.question('Constituição: ', (constituicao) => {
                                        rl.question('Inteligencia: ', (inteligencia) => {
                                            rl.question('Sabedoria: ', (sabedoria) => {
                                                rl.question('Carisma: ', (carisma) => {
                                                    ficha[numero - 1] = {
                                                        raca,
                                                        nome,
                                                        classe,
                                                        equipamento,
                                                        forca,
                                                        destreza,
                                                        constituicao,
                                                        inteligencia,
                                                        sabedoria,
                                                        carisma
                                                    }
                                                    console.log('Editado com sucesso!')
                                                    exibirMenu()
                                                })
                                            })
                                        })
                                    })
                                })  
                            })
                        })
                    })
                })
            })
        } else {
            console.log('Número inválido, tente novamente.')
            exibirMenu()
        }
    })
}
module.exports = { editarFicha }