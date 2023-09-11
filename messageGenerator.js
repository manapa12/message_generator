const nameOfAnime = () => {
    const animes = ["Dragon ball", "Shingeki no kyojin", "Naruto", "Steins-Gate", "SPYxFAMILY", "HUNTERxHUNTER"];
    let randomNumber = Math.floor(Math.random()* 6);
    return animes[randomNumber];
}

const nameOfCharacter = () => {
    const characters = ["Goku", "Eren", "Itachi", "Okarin", "Yor", "Killua"];
    let randomNumber = Math.floor(Math.random()* 6);
    return characters[randomNumber];
}

