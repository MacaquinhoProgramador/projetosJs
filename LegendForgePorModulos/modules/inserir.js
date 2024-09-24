function criarFicha(rl, ficha, exibirMenu){
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
    rl.question('Digite qual dessas raças você prefere.\n', (raca) => {   
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
                                            ficha.push({
                                                raca: raca,
                                                nome: nome,
                                                classe: classe,
                                                equipamento: equipamento,
                                                forca: forca,
                                                destreza: destreza,
                                                constituicao: constituicao,
                                                inteligencia: inteligencia,
                                                sabedoria: sabedoria,
                                                carisma: carisma
                                            })
                                            console.log('Cadastrou')
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
}

module.exports = { criarFicha };