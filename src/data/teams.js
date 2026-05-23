export const teams = [
  {
    id: 'desert-falcons',
    name: 'Desert Falcons',
    shortName: 'Falcons',
    division: 'P1 Elite',
    color: '#c9a227',
  },
  {
    id: 'sonic-viboras',
    name: 'Sonic Viboras',
    shortName: 'Viboras',
    division: 'P1 Elite',
    color: '#1a8a7a',
  },
  {
    id: 'ice-breakers',
    name: 'Ice Breakers',
    shortName: 'Ice',
    division: 'P2 Intermediate',
    color: '#4a90c4',
  },
  {
    id: 'avalanche-aces',
    name: 'Avalanche Aces',
    shortName: 'Aces',
    division: 'P2 Intermediate',
    color: '#6b4c9a',
  },
  {
    id: 'globo-boomerangs',
    name: 'Globo Boomerangs',
    shortName: 'Globo',
    division: 'P3 Future Stars',
    color: '#e07b39',
  },
  {
    id: 'sahara-lions',
    name: 'Sahara Lions',
    shortName: 'Lions',
    division: 'P3 Future Stars',
    color: '#c43d3d',
  },
  {
    id: 'samurai-kicksmashers',
    name: 'Samurai Kicksmashers',
    shortName: 'Samurai',
    division: 'P4 Spirit',
    color: '#2d5278',
  },
  {
    id: 'rulo-apaches',
    name: 'Rulo Apaches',
    shortName: 'Apaches',
    division: 'P4 Spirit',
    color: '#8b4513',
  },
];

export function getTeamById(id) {
  return teams.find((t) => t.id === id);
}
