
const playerNames = () => {
  event.preventDefault();
  let response = parseInt(document.getElementById("players").value);
  let player;
  for (let i = 0; i < response; i++) {
    player = document.createElement('input');
    player.type = 'text';
    document.body.appendChild(player);
  };
}
