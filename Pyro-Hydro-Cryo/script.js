const divRound = document.querySelector('div.round');

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
  
  // playerSelected.classList.add(`${playerAttack.toLowerCase()}-selected`);
  // enemySelected.classList.add(`${enemyAttack.toLowerCase()}-selected`);
}

let playerLife = 5;
let enemyLife = 5;
let round = 1;
function playRound(playerElement, enemyElement) {
  
  const playerAttack = playerElement;
  const enemyAttack = enemyElement;
  
  if (playerAttack == enemyAttack) {
    console.log('Draw!');
  } else if ((playerAttack == 'Pyro' && enemyAttack == 'Hydro')
  ||  (playerAttack == 'Hydro' && enemyAttack == 'Cryo') 
  ||  (playerAttack == 'Cryo' && enemyAttack == 'Pyro')) {
    playerLife--;
    updateLife('player', playerLife);
    console.log(`Enemy wins round ${round}`);
  } else {
    enemyLife--;
    updateLife('enemy', enemyLife);
    console.log(`Player wins round ${round}`);
  }
  highlightAttack(playerAttack, enemyAttack); 
  round++;
  divRound.textContent = `Round ${round}`;
  
}

function gameStart(e) {
  const playerAttack = e.target.className;
  console.log(playerAttack);

  if ((playerLife == 0) || (enemyLife == 0)) {
    return;
  } else {
    switch (playerAttack) {
      case 'player-pyro':
        playRound('Pyro', enemyAttack());
        break;
      case 'player-hydro':
        playRound('Hydro', enemyAttack());
        break;
      case 'player-cryo':
        playRound('Cryo', enemyAttack());
        break;
      default:
        return;
    }
  }
}

window.addEventListener('click', gameStart);