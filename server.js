function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img width="100" height="100" src="images/${value}.png"/>`)
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join(" ");
}