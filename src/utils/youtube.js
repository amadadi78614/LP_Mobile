/**
 * Converts any common YouTube URL into an embed iframe src.
 * Supports youtu.be, watch?v=, /embed/, and bare video IDs.
 */
export function toYouTubeEmbedUrl(url) {
  if (!url) return '';

  const trimmed = url.trim();

  if (trimmed.includes('youtube.com/embed/')) {
    const id = trimmed.split('youtube.com/embed/')[1]?.split(/[?&]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : trimmed;
  }

  if (trimmed.includes('youtu.be/')) {
    const id = trimmed.split('youtu.be/')[1]?.split(/[?&]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : trimmed;
  }

  if (trimmed.includes('youtube.com/watch')) {
    try {
      const id = new URL(trimmed).searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${id}` : trimmed;
    } catch {
      return trimmed;
    }
  }

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return `https://www.youtube.com/embed/${trimmed}`;
  }

  return trimmed;
}

export function getYouTubeVideoId(url) {
  const embed = toYouTubeEmbedUrl(url);
  const match = embed.match(/embed\/([a-zA-Z0-9_-]{11})/);
  return match?.[1] || null;
}

export function getYouTubeThumbnail(url, quality = 'maxresdefault') {
  const id = getYouTubeVideoId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}
