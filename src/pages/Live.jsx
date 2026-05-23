import { Link } from 'react-router-dom';
import { liveMatches } from '../data/liveMatches.js';
import LiveMatchCard from '../components/LiveMatchCard.jsx';
import Header from '../components/Header.jsx';

export default function Live() {
  return (
    <>
      <Header title="Live Scores" />
      <p className="page-subtitle">Matches in progress right now</p>

      {liveMatches.length === 0 ? (
        <div className="empty-state">
          <p>No live matches</p>
          <p>Check back on match night</p>
        </div>
      ) : (
        liveMatches.map((match) => (
          <LiveMatchCard key={match.id} match={match} />
        ))
      )}

      <Link to="/streams" className="card" style={{ display: 'block', textDecoration: 'none', marginTop: '1rem' }}>
        <span className="card-title">Streams</span>
        <span className="card-value" style={{ color: 'var(--lp-teal)' }}>
          Watch live & replay →
        </span>
      </Link>
    </>
  );
}
