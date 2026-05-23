import { getTeamById } from '../data/teams.js';
import './FixtureCard.css';

function formatDate(dateStr, timeStr) {
  const d = new Date(`${dateStr}T${timeStr}`);
  return d.toLocaleDateString('en-ZA', { weekday: 'short', day: 'numeric', month: 'short' });
}

export default function FixtureCard({ fixture, highlight = false }) {
  const home = getTeamById(fixture.homeTeamId);
  const away = getTeamById(fixture.awayTeamId);
  const statusClass =
    fixture.status === 'live' ? 'badge-live' : fixture.status === 'finished' ? 'badge-finished' : 'badge-upcoming';

  return (
    <article className={`fixture-card${highlight ? ' highlight' : ''}`}>
      <div className="fixture-meta">
        <span className={`badge ${statusClass}`}>{fixture.status}</span>
        <span className="fixture-division">{fixture.division}</span>
      </div>
      <div className="fixture-teams">
        <div className="fixture-team">
          <span className="team-dot" style={{ background: home?.color }} />
          <span className="team-name">{home?.shortName || 'TBD'}</span>
          {fixture.status === 'finished' && (
            <span className="fixture-score">{fixture.homeScore}</span>
          )}
        </div>
        <span className="fixture-vs">vs</span>
        <div className="fixture-team away">
          <span className="team-dot" style={{ background: away?.color }} />
          <span className="team-name">{away?.shortName || 'TBD'}</span>
          {fixture.status === 'finished' && (
            <span className="fixture-score">{fixture.awayScore}</span>
          )}
        </div>
      </div>
      <div className="fixture-footer">
        <span>{formatDate(fixture.date, fixture.time)} · {fixture.time}</span>
        <span>{fixture.venue} · {fixture.court}</span>
      </div>
    </article>
  );
}
