/**
 * Programa fica esperando um evento de click acontecer
 * chama a função que vai SUMIR com o primeiro dico da pilha, disco menor
 * a flag AGUARDANDO DESTINO será setada
 * enquando o usuário não disparar um dos eventos de click em alguma torre o programa trava
 * utilizar o event.currentTarget
 * clicando em uma outra torre, o disco será recriado lá
 */

// listener para eventos de click nas torres

const start = () => {};

const checkVitoria = () => {
  const torre2 = document.getElementById("torre2");
  const torre3 = document.getElementById("torre3");

  if (torre2.childElementCount === 4 || torre3.childElementCount === 4) {
    alert("Parabéns você VENCEU!");
  }
};

const onClick = (ev) => {
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
        cont++;
        span.innerText = cont;
        document.getElementById("jogadas").appendChild(span);
        checkVitoria();
      }
    } else {
      tower.appendChild(removida);
      troca = false;
      cont++;
      span.innerText = cont;
      document.getElementById("jogadas").appendChild(span);
      checkVitoria();
    }
  }
};

const reset = () => {
  const torre1 = document.getElementById("torre1");
  const torre2 = document.getElementById("torre2");
  const torre3 = document.getElementById("torre3");

  torre1.innerHTML = "";
  torre2.innerHTML = "";
  torre3.innerHTML = "";

  for (let i = 4; i >= 1; i--) {
    const disco = document.createElement("div");
    disco.id = `disco${i}`;
    disco.setAttribute("data-size", i);
    disco.className = "discForm";
    torre1.appendChild(disco);
  }
  cont = 0;
  span.innerText = cont;
  document.getElementById("jogadas").appendChild(span);
};

// Incialização das variáveis globais
const torres = document.getElementById("torres");
const resetButton = document.getElementById("reset");
const startButton = document.getElementById("start");

torres.addEventListener("click", onClick);
resetButton.addEventListener("click", reset);

for (let i = 1; i <= 3; i++) {
  const torre = document.createElement("div");
  torre.id = `torre${i}`;
  torre.className = "torre-forma";
  torres.appendChild(torre);
}

for (let i = 1; i <= 3; i++) {
  const haste = document.createElement("div");
  haste.id = `haste${i}`;
  haste.className = "hastes";
  torres.appendChild(haste);
}

const torre1 = document.getElementById("torre1");
for (let i = 4; i >= 1; i--) {
  // for (let i = 3; i >= 1; i--) {
  const disco = document.createElement("div");
  disco.id = `disco${i}`;
  disco.setAttribute("data-size", i);
  disco.className = "discForm";
  torre1.appendChild(disco);
}

let troca = false;
let removida;
let cont = 0;

const span = document.createElement("span");
const minJogadas = document.createElement("span");
minJogadas.innerText = 2 ** torre1.childElementCount - 1;
document.getElementById("minimo").appendChild(minJogadas);
span.innerText = cont;
document.getElementById("jogadas").appendChild(span);
