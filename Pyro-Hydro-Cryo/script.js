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

function playRound(playerElement, enemyElement) {
  
  const playerAttack = playerElement;
  const enemyAttack = enemyElement;
  
  console.log(`${playerAttack}, ${enemyAttack}`);
}

// console.log(enemyAttack());
playerPyro.addEventListener('click', () => { playRound('Pyro', enemyAttack()); });
playerHydro.addEventListener('click', () => { playRound('Hydro', enemyAttack()); });
playerCryo.addEventListener('click', () => { playRound('Cryo', enemyAttack()); });
