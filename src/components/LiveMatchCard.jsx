import { Link } from 'react-router-dom';
import { getTeamById } from '../data/teams.js';
import './LiveMatchCard.css';

export default function LiveMatchCard({ match }) {
  const home = getTeamById(match.homeTeamId);
  const away = getTeamById(match.awayTeamId);

  return (
    <article className="live-card">
      <div className="live-card-header">
        <span className="badge badge-live">Live</span>
        <span className="live-court">{match.venue} · {match.court}</span>
      </div>
      <div className="live-teams">
        <div className="live-team">
          <span className="team-dot" style={{ background: home?.color }} />
          <span>{home?.shortName}</span>
        </div>
        <div className="live-scores">
          <div className="live-set-score">
            <span className="score-label">Sets</span>
            <span className="score-value">
              {match.setScore.home} – {match.setScore.away}
            </span>
          </div>
          <div className="live-game-score">
            <span className="score-label">Set {match.currentSet}</span>
            <span className="score-value game">
              {match.gameScore.home} – {match.gameScore.away}
            </span>
          </div>
        </div>
        <div className="live-team away">
          <span className="team-dot" style={{ background: away?.color }} />
          <span>{away?.shortName}</span>
        </div>
      </div>
      <p className="live-division">{match.division}</p>
      {match.streamId && (
        <Link to="/streams" className="btn btn-secondary live-stream-link">
          Watch stream →
        </Link>
      )}
    </article>
  );
}
