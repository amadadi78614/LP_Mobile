import { toYouTubeEmbedUrl, getYouTubeThumbnail } from '../utils/youtube.js';

const TEST_STREAM_URL = 'https://www.youtube.com/channel/UCdMtDB7Md-nNpw3eGDsJ79Q';

export const featuredStream = {
  id: 'stream-featured',
  title: 'Lowveld Padel Test Stream',
  fixture: 'Sonic Viboras vs Avalanche Aces',
  homeTeamId: 'sonic-viboras',
  awayTeamId: 'avalanche-aces',
  court: 'Court 1',
  venue: 'Play360',
  division: 'P1 Elite',
  status: 'live',
  platform: 'YouTube',
  youtubeUrl: TEST_STREAM_URL,
  embedUrl: toYouTubeEmbedUrl(TEST_STREAM_URL),
  thumbnail: getYouTubeThumbnail(TEST_STREAM_URL, 'maxresdefault'),
  viewers: 248,
};

export const streams = [
  featuredStream,
  {
    id: 'stream2',
    title: 'P2 Intermediate — Ice vs Aces',
    fixture: 'Ice Breakers vs Avalanche Aces',
    homeTeamId: 'ice-breakers',
    awayTeamId: 'avalanche-aces',
    court: 'Court 2',
    venue: 'Play360',
    division: 'P2 Intermediate',
    status: 'upcoming',
    platform: 'YouTube',
    youtubeUrl: 'https://youtu.be/vmQHyUxBk50',
    embedUrl: toYouTubeEmbedUrl('https://youtu.be/vmQHyUxBk50'),
    thumbnail: getYouTubeThumbnail('https://youtu.be/vmQHyUxBk50'),
    viewers: 0,
  },
  {
    id: 'stream3',
    title: 'P1 Elite — Falcons vs Viboras',
    fixture: 'Desert Falcons vs Sonic Viboras',
    homeTeamId: 'desert-falcons',
    awayTeamId: 'sonic-viboras',
    court: 'Court 1',
    venue: 'Play360',
    division: 'P1 Elite',
    status: 'replay',
    platform: 'YouTube',
    youtubeUrl: 'https://youtu.be/vmQHyUxBk50',
    embedUrl: toYouTubeEmbedUrl('https://youtu.be/vmQHyUxBk50'),
    thumbnail: getYouTubeThumbnail('https://youtu.be/vmQHyUxBk50'),
    viewers: 0,
  },
];

export function getStreamById(id) {
  return streams.find((s) => s.id === id);
}
