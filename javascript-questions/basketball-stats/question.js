// Getting stats from the Raptors last game in the 2018 season
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Requirements
// 1. There are 4 functions to fill in.
// 2. Some funtions will use other funtions to complete their answers
// 3. Avoid using for, forEach, for...in or for...of
// 4. Run the file using `node question.js` in your terminal and you will see the output



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 1. Count all the points a team had in the game.
//   - Write a function to count the total points Raptors had per quarter
//     - 1st quarter - 26
//     - 2nd quarter - 21
//     - 3rd quarter - 25
//     - 4th quarter - 21

const totalScore = (pointsPerQuarter) => {
  // @TODO
  return pointsPerQuarter.reduce((a, b) => a + b, 0);
}

const raptorsScore = totalScore([26, 21, 25, 21]);
console.log('Total Score', raptorsScore);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 2. Get the average points per starting player
//   - Write a function to get get the average points scored by the starting raptors
const startingPlayers = {
  ibaka: {
    points: 12,
  },
  miles: {
    points: 13,
  },
  anunoby: {
    points: 2,
  },
  lowry: {
    points: 5,
  },
  derozen: {
    points: 13
  },
};

const getAveragePoints = (players) => {
  // @TODO
  let playersKeys = Object.keys(players);
  let points = playersKeys.map(playerKey => players[`${playerKey}`].points);
  return points.reduce((a, b) => a + b, 0) /playersKeys.length; // = Average

};

const averageScore = getAveragePoints(startingPlayers);
console.log('Scoring Average', averageScore);


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Remove the starting players who scored less than the average 
//   - Write a function to remove the starting players who scored less than the average
//   - The return value of the function should be in the same format as the `startingPlayers` 
//     object above
//   - Make use of `startingPlayers` and `averageScore` that were created in question 2

const getHighestScorers = (players, threshold) => {
  // @TODO

  let highestScores = {};

  let playersNames = Object.keys(players);

  // Find players below average
  playersNames.map(playerName => {
    if(startingPlayers[`${playerName}`].points > threshold){
      highestScores[`${playerName}`] = startingPlayers[`${playerName}`];
    }
  });

  return highestScores;



};

const highestScoringPlayers = getHighestScorers(startingPlayers, averageScore);
console.log('Highest Scoring Players', highestScoringPlayers);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 4. Add time played each quarter to each player
//   - The time represents the total time they played in the game, assuming they played the 
//     amount of time each quarter, add a `perQuarter` field to each player.

const timePlayed = [
  {
    name: 'ibaka',
    time: 18
  },
  {
    name: 'miles',
    time: 23
  },
  {
    name: 'anunoby',
    time: 20
  },
  {
    name: 'lowry',
    time: 30
  },
  {
    name: 'derozen',
    time: 30
  },
]

const addTimePlayedPerQuarter = (timePlayedArr) => {
  // @TODO

  timePlayedArr.map( timePlayer =>{
    startingPlayers[timePlayer.name].time = timePlayer.time;
  })
 
  return startingPlayers;

}

const timePerQuarter = addTimePlayedPerQuarter(timePlayed);
console.log('Players with time per quarter', timePerQuarter);
