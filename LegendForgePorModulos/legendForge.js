const readline = require('readline')
const { criarFicha } = require('./modules/inserir')
const { listarFichas } = require('./modules/listar')
const { editarFicha } = require('./modules/editar')
const { removerFicha } = require('./modules/remover')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let ficha = []

function exibirMenu() {
    console.log(`
        Menu:
        1. Criar ficha do novo jogador.
        2. Listar todas as fichas disponiveis.
        3. Editar uma ficha.
        4. Remover a ficha de um guerreiro caido ;-;.
        5.Sair do programa.
    `)
    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                criarFicha(rl, ficha, exibirMenu)
                break
            case '2':
                listarFichas(rl, ficha, exibirMenu)
                break
            case '3':
                editarFicha(rl, ficha, exibirMenu)
                break
            case '4':
                removerFicha(rl, ficha, exibirMenu)
                break
            case '5':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
        }
    })
}

/*function listarFichas() {
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
}*/

/*function editarFicha() {
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

        }
        rl.question('Digite o número do elemento que deseja editar: ', (numero) => {
            if (numero > 0 && numero <= ficha.length) {
                rl.question('Digite qual raça você prefere. (digite em minusculo)\n', (raca) => {                                                                                                                               //; if(raca == elfo){console.log('tchola...')}
                    rl.question('Digite o nome do seu personagem.\n', (nome) => {
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
        })*/

exibirMenu()
