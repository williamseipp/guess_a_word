class Game {
  static words = ['apple', 'banana', 'orange', 'pear'];

  constructor() {
    this.word = Game.getRandomWord().split('');
  }

  static getRandomWord() {
    if (Game.words.length === 0) return undefined;
    const wordIndex = Math.floor(Math.random() * Game.words.length);
    return Game.words.splice(wordIndex, 1)[0];
  }

  /* The game must select a random word from a predefined list of words
   *
   * The selected word should be stored as an array of letters
   *
   * the current state of the word being guessed should be known
   *   for example: if we're guessing APPLE and we have guessed
   *   a, b, e, we should know that the 
   *   current state is a, _, _, _, e 
   *
   * the game needs to keep track of guesses made, both correct and incorrect
   *
   * the game should be able to know when the player has won or lost,
   *     or if the game isn't over yet
   *
   * the maximum number of incorrect guesses is 6.
   *
   * the game should provide a `makeGuess` method that takes a letter as
   *    an argument and updates the game state accordingly
   *
   * if we run out of words, instanatiating a new game object should
   *   throw an error
   */
}

// lets confirm we can create an instance of a game
//  we test this by verifying the variable that references it is not null

let myGame = new Game();
console.log(myGame.word);

