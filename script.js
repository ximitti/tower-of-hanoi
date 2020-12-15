/**
 * Programa fica esperando um evento de click acontecer
 * chama a função que vai SUMIR com o primeiro dico da pilha, disco menor
 * a flag AGUARDANDO DESTINO será setada
 * enquando o usuário não disparar um dos eventos de click em alguma torre o programa trava
 * utilizar o event.currentTarget
 * clicando em uma outra torre, o disco será recriado lá
 */

// listener para eventos de click nas torres

document.getElementById("torres").addEventListener("click", onClick);

let troca = false;
let removida;

function onClick(ev) {
  //   console.log(ev.target.id);

  let tower = document.getElementById(ev.target.id);

  if (!troca) {
    if (tower.childElementCount > 0) {
      //caso tenha disco

      removida = tower.removeChild(tower.lastElementChild);
      console.log(removida.dataset.size);
      console.log(tower);

      troca = true;
    }
  } else {
    if (tower.childElementCount > 0) {
      if (removida.dataset.size < tower.lastElementChild.dataset.size) {
        tower.appendChild(removida);
        troca = false;
      }
    } else {
      tower.appendChild(removida);
      troca = false;
    }
  }
}
