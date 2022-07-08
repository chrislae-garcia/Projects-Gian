const divRound = document.querySelector('div.round');
const divScreen = document.querySelector('.screen');

function enemyAttack() {
  enemyElement = Math.floor(Math.random()*3) + 1;

  switch (enemyElement) {
    case 1: return 'Pyro';
    case 2: return 'Hydro';
    case 3: return 'Cryo';
  }
}

function updateLife(damaged, life) {
  let lifeBar = document.querySelector(`.${damaged}-life>div`);
  let remainingBar = document.querySelectorAll(`.${damaged}-life>div`);

  if (life < 2) {
    for(bar of remainingBar) {
      bar.style.backgroundColor = 'rgb(236, 52, 52)';
    }
  } else if (life < 4) {
    for(bar of remainingBar) {
      bar.style.backgroundColor = 'rgb(253, 148, 35)';
    }
  }
  lifeBar.remove();
}

function highlightAttack(playerAttack, enemyAttack) {
  const playerSelected = document.querySelector(`.player-${playerAttack.toLowerCase()}`);
  const enemySelected = document.querySelector(`.enemy-${enemyAttack.toLowerCase()}`);
  
  removeSelection();

  playerSelected.classList.add(`${playerAttack.toLowerCase()}-selected`);
  enemySelected.classList.add(`${enemyAttack.toLowerCase()}-selected`);
}

function removeSelection(){
  const attackElements = document.querySelectorAll('.attack-elements>*');
  
  attackElements.forEach(function(attackElement) {
    if(!attackElement.classList[1]) return;
    attackElement.classList.remove(attackElement.classList[1]);
  });  
}

let playerLife = 5;
let enemyLife = 5;
let round = 1;
function playRound(playerElement, enemyElement) {
  const divWinner = document.createElement('div');
  const playerAttack = playerElement;
  const enemyAttack = enemyElement;
  
  if (playerAttack == enemyAttack) {
    divWinner.textContent = `Round ${round}: Draw!`;
  } else if ((playerAttack == 'Pyro' && enemyAttack == 'Hydro')
  ||  (playerAttack == 'Hydro' && enemyAttack == 'Cryo') 
  ||  (playerAttack == 'Cryo' && enemyAttack == 'Pyro')) {
    playerLife--;
    updateLife('player', playerLife);
    divWinner.textContent = `Round ${round}: Enemy wins. ${enemyAttack} beats ${playerAttack}`;
  } else {
    enemyLife--;
    updateLife('enemy', enemyLife);
    divWinner.textContent += `Round ${round}: You win. ${playerAttack} beats ${enemyAttack}`;
  }
  highlightAttack(playerAttack, enemyAttack); 
  round++;
  divScreen.appendChild(divWinner);
  divRound.textContent = `Round ${round}`;
  
}

function gameStart(e) {
  const playerAttack = e.target.className;

  if ((playerLife == 0) || (enemyLife == 0)) return; 
  
  switch (true) {
    case playerAttack.includes('player-pyro'):
      playRound('Pyro', enemyAttack());
      break;
    case playerAttack.includes('player-hydro'):
      playRound('Hydro', enemyAttack());
      break;
    case playerAttack.includes('player-cryo'):
      playRound('Cryo', enemyAttack());
      break;
    default:
      return;
  }
  
}

window.addEventListener('click', gameStart);