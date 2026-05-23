import { teams } from './teams.js';

export const standings = [
  { position: 1, teamId: 'sonic-viboras', played: 8, won: 7, lost: 1, setsFor: 16, setsAgainst: 6, points: 21 },
  { position: 2, teamId: 'desert-falcons', played: 8, won: 6, lost: 2, setsFor: 14, setsAgainst: 9, points: 18 },
  { position: 3, teamId: 'ice-breakers', played: 7, won: 5, lost: 2, setsFor: 12, setsAgainst: 8, points: 15 },
  { position: 4, teamId: 'avalanche-aces', played: 7, won: 4, lost: 3, setsFor: 11, setsAgainst: 10, points: 12 },
  { position: 5, teamId: 'globo-boomerangs', played: 6, won: 4, lost: 2, setsFor: 10, setsAgainst: 7, points: 12 },
  { position: 6, teamId: 'sahara-lions', played: 6, won: 2, lost: 4, setsFor: 7, setsAgainst: 11, points: 6 },
  { position: 7, teamId: 'samurai-kicksmashers', played: 5, won: 3, lost: 2, setsFor: 8, setsAgainst: 6, points: 9 },
  { position: 8, teamId: 'rulo-apaches', played: 5, won: 1, lost: 4, setsFor: 4, setsAgainst: 10, points: 3 },
];

export function getStandingsByDivision(division) {
  if (!division || division === 'All') return standings;
  const teamIds = teams.filter((t) => t.division === division).map((t) => t.id);
  return standings
    .filter((s) => teamIds.includes(s.teamId))
    .map((s, i) => ({ ...s, position: i + 1 }));
}
