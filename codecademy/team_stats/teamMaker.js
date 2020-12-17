// 1. team object
const team = {
    // 2. arrys to store player and games played
    _players: [
      // 3. player objects
  {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
  {
    firstName: 'Steven',
    lastName: 'Loret',
    age: 14
  },
  {
    firstName: 'Burno',
    lastName: 'Sacket',
    age: 13
  }
    ],
    _games: [
      // 4. game objects
  {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Avanche',
    teamPoints: 35,
    opponentPoints: 30
  },
  {
    opponent: 'Eagles',
    teamPoints: 27,
    opponentPoints: 244
  } 
    ],
  // 5. getter methods
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // 6. method to add players to the team
  addPlayer(firstName, lastName, age) {
    const newPlayer = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    return this._players.push(newPlayer);
  },
  // 8. method to add games to the team
  addGame(opponentName, teamPoints, opponentPoints) {
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    return team._games.push(game);
  },
  };
  
  // 7. test addPlayer()
  team.addPlayer('Steph','Curry', 28);
  team.addPlayer('Lisa','Leslie', 44);
  team.addPlayer('Bugs','Bunny', 76);
  console.log(team._players);
  // test getter
  // console.log(team.players);
  // 9. testing addGames()
  team.addGame('Benfica',25,44);
  team.addGame('Porto',63,60);
  team.addGame('Sporting',23,45);

  console.log(team._games);
  
  
  