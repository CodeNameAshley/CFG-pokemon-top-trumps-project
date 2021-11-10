//"POKE API info needed here"

// no info yet
let pokemonName;
let pokemonId;
let pokemonHealth;
let pokemonType;

// beed random to cycle through pokemons and randomnly choose 3 for player and opponent

class Card {
  constructor() {
    // name for pokemon
    this.pokemonName = pokemonName;
    // stats for comparison
    this.pokemonId = pokemonId;
    this.pokemonHealth = pokemonHealth;
    this.pokemonType = pokemonType;
    this.score = [];
  }
  // method to list stats
  listStats() {}

  // method to draw card
  drawCard() {}

  // method to choose stat
  chooseStat() {
    prompt("Which stat do you want to play");
  }

  // method to compare stats
  compareStat() {
    const win = `You win with ${myStat}, your opponent's stat was ${oppStat}`;
    const lose = `You lose! Your opponent's stat was ${oppStat}, your stat was ${myStat},`;
    const draw = `It's a draw! Your stat: ${myStat}. Your opponent's stat ${oppStat}`;

    if (myStat < oppStat) {
      return win;
    } else if (myStat > oppStat) {
      return lose;
    } else if (myStat == oppStat) {
      return draw;
    }
  }

  // method to store scores
  storeScores(compareStat) {
    this.score.push(compareStat);
  }
}

module.exports = Card;
