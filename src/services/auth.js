import { getPlayerByEmail } from '../data/players.js';
import { getStoredPlayer, setStoredPlayer, clearStoredPlayer } from './storage.js';

export function login(email) {
  const player = getPlayerByEmail(email);
  if (!player) return { ok: false, error: 'No player found with that email. Try heinrich@example.com' };
  setStoredPlayer(player);
  return { ok: true, player };
}

export function logout() {
  clearStoredPlayer();
}

export function getCurrentPlayer() {
  return getStoredPlayer();
}

export function isAuthenticated() {
  return !!getStoredPlayer();
}
