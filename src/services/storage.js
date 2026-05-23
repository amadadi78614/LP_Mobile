const PLAYER_KEY = 'lp_player';

export function getStoredPlayer() {
  try {
    const raw = localStorage.getItem(PLAYER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setStoredPlayer(player) {
  localStorage.setItem(PLAYER_KEY, JSON.stringify(player));
}

export function clearStoredPlayer() {
  localStorage.removeItem(PLAYER_KEY);
}
