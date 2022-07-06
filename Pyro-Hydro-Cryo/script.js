const playerPyro = document.getElementById('player-pyro');
const playerHydro = document.getElementById('player-hydro');
const playerCryo = document.getElementById('player-cryo');

const enemyPyro = document.getElementById('enemy-pyro');
const enemyHydro = document.getElementById('enemy-hydro');
const enemyCryo = document.getElementById('enemy-cryo');

function enemyAttack() {
  enemyElement = Math.floor(Math.random()*3) + 1;

  switch (enemyElement) {
    case 1: return 'Pyro';
    case 2: return 'Hydro';
    case 3: return 'Cryo';
  }
}

let playerScore = 0;
let enemyScore = 0;
let round = 1;
function playRound(playerElement, enemyElement) {
  
  const playerAttack = playerElement;
  const enemyAttack = enemyElement;
  
  if (playerAttack == enemyAttack) {
    console.log('Draw!');
  } else if ((playerAttack == 'Pyro' && enemyAttack == 'Hydro')
  ||  (playerAttack == 'Hydro' && enemyAttack == 'Cryo') 
  ||  (playerAttack == 'Cryo' && enemyAttack == 'Pyro')) {
    enemyScore++;
    console.log(`Enemy wins round ${round}`);
  } else {
    playerScore++;
    console.log(`Player wins round ${round}`);
  }
  round++;
  console.log(`Player: ${playerScore}. Enemy: ${enemyScore}`);
}

// console.log(enemyAttack());
playerPyro.addEventListener('click', () => { playRound('Pyro', enemyAttack()); });
playerHydro.addEventListener('click', () => { playRound('Hydro', enemyAttack()); });
playerCryo.addEventListener('click', () => { playRound('Cryo', enemyAttack()); });
