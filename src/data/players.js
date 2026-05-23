export const players = [
  {
    id: 'p2',
    name: 'Heinrich Coomans',
    email: 'heinrich@example.com',
    teamId: 'sonic-viboras',
    division: 'P1 Elite',
    gamesPlayed: 9,
    wins: 7,
    losses: 2,
    setsWon: 16,
    setsLost: 7,
    mvpPoints: 18,
  },
  {
    id: 'p3',
    name: 'Duhan Swart',
    email: 'duhan@example.com',
    teamId: 'ice-breakers',
    division: 'P2 Intermediate',
    gamesPlayed: 7,
    wins: 4,
    losses: 3,
    setsWon: 10,
    setsLost: 9,
    mvpPoints: 8,
  },
  {
    id: 'p4',
    name: 'Ryan Tate',
    email: 'ryan@example.com',
    teamId: 'avalanche-aces',
    division: 'P2 Intermediate',
    gamesPlayed: 8,
    wins: 5,
    losses: 3,
    setsWon: 12,
    setsLost: 10,
    mvpPoints: 10,
  },
  {
    id: 'p5',
    name: 'Ahmed Mungalee',
    email: 'ahmed@example.com',
    teamId: 'globo-boomerangs',
    division: 'P3 Future Stars',
    gamesPlayed: 6,
    wins: 4,
    losses: 2,
    setsWon: 9,
    setsLost: 6,
    mvpPoints: 7,
  },
  {
    id: 'p6',
    name: 'Adil Patel',
    email: 'adil@example.com',
    teamId: 'sahara-lions',
    division: 'P3 Future Stars',
    gamesPlayed: 5,
    wins: 2,
    losses: 3,
    setsWon: 6,
    setsLost: 8,
    mvpPoints: 4,
  },
  {
    id: 'p7',
    name: 'Siraaj Shaik',
    email: 'siraaj@example.com',
    teamId: 'samurai-kicksmashers',
    division: 'P4 Spirit',
    gamesPlayed: 4,
    wins: 3,
    losses: 1,
    setsWon: 7,
    setsLost: 4,
    mvpPoints: 6,
  },
  {
    id: 'p8',
    name: 'Durell Pillay',
    email: 'durell@example.com',
    teamId: 'rulo-apaches',
    division: 'P4 Spirit',
    gamesPlayed: 5,
    wins: 2,
    losses: 3,
    setsWon: 5,
    setsLost: 7,
    mvpPoints: 3,
  },
];

export function getPlayerByEmail(email) {
  return players.find((p) => p.email.toLowerCase() === email.toLowerCase().trim());
}

export function getPlayerById(id) {
  return players.find((p) => p.id === id);
}

export function winPercentage(player) {
  if (!player.gamesPlayed) return 0;
  return Math.round((player.wins / player.gamesPlayed) * 100);
}
