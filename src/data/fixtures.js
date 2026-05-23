export const fixtures = [
  {
    id: 'fx1',
    date: '2026-05-24',
    time: '18:00',
    homeTeamId: 'desert-falcons',
    awayTeamId: 'sonic-viboras',
    division: 'P1 Elite',
    venue: 'Play360',
    court: 'Court 1',
    status: 'upcoming',
    round: 5,
  },
  {
    id: 'fx2',
    date: '2026-05-24',
    time: '19:30',
    homeTeamId: 'ice-breakers',
    awayTeamId: 'avalanche-aces',
    division: 'P2 Intermediate',
    venue: 'Play360',
    court: 'Court 2',
    status: 'upcoming',
    round: 5,
  },
  {
    id: 'fx3',
    date: '2026-05-23',
    time: '17:00',
    homeTeamId: 'globo-boomerangs',
    awayTeamId: 'sahara-lions',
    division: 'P3 Future Stars',
    venue: 'Padel24',
    court: 'Court 3',
    status: 'finished',
    round: 4,
    homeScore: 2,
    awayScore: 1,
  },
  {
    id: 'fx4',
    date: '2026-05-23',
    time: '18:30',
    homeTeamId: 'samurai-kicksmashers',
    awayTeamId: 'rulo-apaches',
    division: 'P4 Spirit',
    venue: 'Padel24',
    court: 'Court 4',
    status: 'finished',
    round: 4,
    homeScore: 2,
    awayScore: 0,
  },
  {
    id: 'fx5',
    date: '2026-05-25',
    time: '18:00',
    homeTeamId: 'desert-falcons',
    awayTeamId: 'ice-breakers',
    division: 'Crossover',
    venue: 'Play360',
    court: 'Court 1',
    status: 'upcoming',
    round: 5,
  },
  {
    id: 'fx6',
    date: '2026-05-25',
    time: '19:30',
    homeTeamId: 'sonic-viboras',
    awayTeamId: 'avalanche-aces',
    division: 'P1 Elite',
    venue: 'Play360',
    court: 'Court 1',
    status: 'live',
    round: 5,
  },
];

export function getFixturesForTeam(teamId) {
  return fixtures.filter(
    (f) => f.homeTeamId === teamId || f.awayTeamId === teamId
  );
}

export function getNextFixtureForTeam(teamId) {
  const teamFixtures = getFixturesForTeam(teamId)
    .filter((f) => f.status === 'upcoming')
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  return teamFixtures[0] || null;
}
