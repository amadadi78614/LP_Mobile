import { useState } from 'react';
import { getTeamById } from '../data/teams.js';
import './StreamCard.css';

export default function StreamCard({ stream }) {
  const [showEmbed, setShowEmbed] = useState(false);
  const home = getTeamById(stream.homeTeamId);
  const away = getTeamById(stream.awayTeamId);
  const statusClass =
    stream.status === 'live' ? 'badge-live' : stream.status === 'replay' ? 'badge-finished' : 'badge-upcoming';

  return (
    <article className="stream-card">
      <div className="stream-card-header">
        <span className={`badge ${statusClass}`}>{stream.status}</span>
        <span className="stream-platform">{stream.platform}</span>
      </div>
      <h3 className="stream-title">{stream.title}</h3>
      <p className="stream-fixture">
        {home?.shortName} vs {away?.shortName}
      </p>
      {showEmbed ? (
        <div className="stream-embed">
          <iframe
            title={stream.title}
            src={stream.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="stream-placeholder">
          <span>▶</span>
          <p>Tap Watch to load stream</p>
        </div>
      )}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowEmbed(!showEmbed)}
      >
        {showEmbed ? 'Hide stream' : 'Watch'}
      </button>
    </article>
  );
}
