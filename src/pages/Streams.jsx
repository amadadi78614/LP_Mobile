import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { featuredStream } from '../data/streams.js';
import { fixtures } from '../data/fixtures.js';
import { getTeamById } from '../data/teams.js';
import { LogoMark } from '../components/Logo.jsx';
import './Streams.css';

function LivePulse() {
  return (
    <span className="streams-live-pulse" aria-hidden="true">
      <span className="streams-live-dot" />
      LIVE
    </span>
  );
}

function RelatedFixtureRow({ fixture }) {
  const home = getTeamById(fixture.homeTeamId);
  const away = getTeamById(fixture.awayTeamId);
  const isLive = fixture.status === 'live';

  return (
    <Link to="/fixtures" className="streams-related-card">
      <div className="streams-related-meta">
        {isLive ? <LivePulse /> : <span className="streams-related-badge">{fixture.status}</span>}
        <span>{fixture.court} · {fixture.time}</span>
      </div>
      <p className="streams-related-teams">
        {home?.shortName} <span>vs</span> {away?.shortName}
      </p>
      <p className="streams-related-div">{fixture.division}</p>
    </Link>
  );
}

export default function Streams() {
  const playerRef = useRef(null);
  const [playerActive, setPlayerActive] = useState(true);

  const relatedFixtures = fixtures
    .filter(
      (f) =>
        f.homeTeamId === featuredStream.homeTeamId ||
        f.awayTeamId === featuredStream.awayTeamId ||
        f.homeTeamId === featuredStream.awayTeamId ||
        f.awayTeamId === featuredStream.homeTeamId
    )
    .slice(0, 4);

  function handleFullscreen() {
    const el = playerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (el.requestFullscreen) {
      el.requestFullscreen();
    }
  }

  const embedSrc = `${featuredStream.embedUrl}?autoplay=0&rel=0&modestbranding=1`;

  return (
    <div className="streams-page">
      <header className="streams-header">
        <LogoMark className="streams-header-logo" />
        <span className="streams-header-brand">Lowveld Padel TV</span>
      </header>

      <section className="streams-hero" aria-label="Featured livestream">
        <div
          className="streams-hero-bg"
          style={{ backgroundImage: `url(${featuredStream.thumbnail})` }}
        />
        <div className="streams-hero-overlay" />

        <div className="streams-hero-top">
          <span className="streams-live-now">
            <LivePulse /> NOW
          </span>
          <span className="streams-viewers">
            <span className="streams-viewers-icon">👁</span>
            {featuredStream.viewers.toLocaleString()} watching
          </span>
        </div>

        <div ref={playerRef} className="streams-player-wrap">
          {playerActive ? (
            <iframe
              title={featuredStream.title}
              src={embedSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="streams-player"
            />
          ) : (
            <button
              type="button"
              className="streams-player-placeholder"
              onClick={() => setPlayerActive(true)}
              style={{ backgroundImage: `url(${featuredStream.thumbnail})` }}
            >
              <span className="streams-play-btn">▶</span>
              <span>Tap to play</span>
            </button>
          )}
        </div>

        <div className="streams-hero-info">
          <h1 className="streams-title">{featuredStream.title}</h1>
          <p className="streams-fixture">{featuredStream.fixture}</p>
          <p className="streams-court">
            {featuredStream.venue} · {featuredStream.court} · {featuredStream.division}
          </p>
        </div>
      </section>

      <div className="streams-actions">
        <button type="button" className="streams-btn streams-btn-primary" onClick={handleFullscreen}>
          <span aria-hidden="true">⛶</span>
          Watch Fullscreen
        </button>
        <Link to="/live" className="streams-btn streams-btn-secondary">
          <span aria-hidden="true">📊</span>
          Match Centre
        </Link>
      </div>

      <section className="streams-section">
        <div className="streams-section-head">
          <h2>Related fixtures</h2>
          <Link to="/fixtures">View all</Link>
        </div>
        <div className="streams-related-list">
          {relatedFixtures.length > 0 ? (
            relatedFixtures.map((fx) => (
              <RelatedFixtureRow key={fx.id} fixture={fx} />
            ))
          ) : (
            <p className="streams-empty">No related fixtures scheduled.</p>
          )}
        </div>
      </section>

      <section className="streams-section streams-more">
        <h2>More from Lowveld Padel</h2>
        <div className="streams-promo-card">
          <div className="streams-promo-glow" />
          <p className="streams-promo-label">Season 3</p>
          <p className="streams-promo-title">Franchise League Live</p>
          <p className="streams-promo-text">
            Every court. Every division. Streamed for players and fans.
          </p>
          <Link to="/live" className="streams-promo-link">
            Open live scores →
          </Link>
        </div>
      </section>
    </div>
  );
}
