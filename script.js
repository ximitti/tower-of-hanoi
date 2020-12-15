/**
 * Programa fica esperando um evento de click na torre onde está as discos (torre1)
 * chama a função que vai SUMIR com o primeiro dico da pilha, disco menor
 * a flag AGUARDANDO DESTINO será setada
 * enquando o usuário não disparar um dos eventos de click em alguma torre o programa trava
 * utilizar o event.currentTarget
 * clicando em uma outra torre, o disco será recriado lá
 */

// listener para eventos de click nas torres

document.getElementById("torre1").addEventListener("click", torre1);
