var chalk = require('chalk');
var readlineSync = require('readline-sync');

var userName = readlineSync.question("Please Enter Your Name: ");
console.log(chalk.blue("Welcome! ") + chalk.underline.bold.yellowBright(userName) + chalk.blue(" to Guess the Song! Challenge") + "\n");

var userScore = 0;

function lyricsQuiz(lyric, song, artist){
  console.log(chalk.italic..cyan.bgBlack(lyric));
  var userAnswer = readlineSync.question("Enter Name of the Song: ");
  console.log("");

  if (userAnswer.toLowerCase() == song.toLowerCase())
  {
    console.log(chalk.greenBright("Yay! You guessed it right."));
    console.log(chalk.green("The song is " + song + " by " + artist), "\n");
    userScore = userScore + 1;
  }
  else
  {
    console.log(chalk.red("Sorry. You guessed wrong."));
    console.log(chalk.red("The song is " + song + " by " + artist), "\n");
  }
  }

var lyrics = [{
  lyric: "\"Feeling my way through the darkness. Guided by a beating heart. I can't tell where the journey will end. But I know where to start.\"", song: "Wake Me Up", artist: "Avicii"
}, {
  lyric: "\"Seasons change and our love went cold. Feed the flame 'cause we can't let it go. Run away, but we're running in circles. Run away, run away.\"", song: "Circles", artist: "Post Malone"
}, {
  lyric: "\"It's just you and I, and no other guys. We got no interruptions and we both feelin' the vibe. Say I'm not your type. But I know what's on your mind. We can talk about nothin' or we can see what it's like\"", song: "beside u", artist: "keshi" 
}, {
  lyric: "\"Constellations of stars. Murals on city walls. I don't see nobody but you. You're my vice, you're my muse. You're a nineteenth floor view. I don't see nobody but you\"", song: "double take", artist: "dhruv"
}];

for (i = 0; i < lyrics.length; i++){
  j = i + 1;
  console.log(chalk.magenta("Lyric No: ", j));
  lyricsQuiz(lyrics[i].lyric, lyrics[i].song, lyrics[i].artist);
}

var scores = [{
  name: "Shashank", score: 3
},{
  name: "Shank", score: 2
}];
scores.push({name: userName, score: userScore});

console.log(chalk.magenta("Scores: "));
for ( var i = 0; i <= scores.length; i++){
  console.log(chalk.cyan(scores[i].name + ": " + scores[i].score));
}

